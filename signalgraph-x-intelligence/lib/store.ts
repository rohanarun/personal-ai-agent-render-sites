import postgres from "postgres";
import type { XPost, XUser } from "./x-api";

export type SignalDatabase = ReturnType<typeof postgres>;

let database: SignalDatabase | null = null;

export function getDatabase() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;
  database ??= postgres(connectionString, {
    max: 6,
    idle_timeout: 20,
    connect_timeout: 15,
    ssl: process.env.NODE_ENV === "production" ? "require" : undefined,
  });
  return database;
}

export type RunCounts = {
  profilesSeen: number;
  profilesQualified: number;
  followerEdgesSeen: number;
  postsSeen: number;
  commentsSeen: number;
  apiRequests: number;
};

const schemaStatements = [
  `CREATE TABLE IF NOT EXISTS profiles (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    location TEXT,
    url TEXT,
    profile_image_url TEXT,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    protected BOOLEAN NOT NULL DEFAULT FALSE,
    followers_count BIGINT NOT NULL DEFAULT 0,
    following_count BIGINT NOT NULL DEFAULT 0,
    post_count BIGINT NOT NULL DEFAULT 0,
    listed_count BIGINT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ,
    first_seen_at TIMESTAMPTZ NOT NULL,
    last_seen_at TIMESTAMPTZ NOT NULL,
    source TEXT NOT NULL,
    raw_json JSONB
  )`,
  `CREATE INDEX IF NOT EXISTS profiles_followers_idx ON profiles (followers_count DESC)`,
  `CREATE INDEX IF NOT EXISTS profiles_last_seen_idx ON profiles (last_seen_at DESC)`,
  `CREATE TABLE IF NOT EXISTS profile_snapshots (
    id UUID PRIMARY KEY,
    profile_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    followers_count BIGINT NOT NULL DEFAULT 0,
    following_count BIGINT NOT NULL DEFAULT 0,
    post_count BIGINT NOT NULL DEFAULT 0,
    listed_count BIGINT NOT NULL DEFAULT 0,
    captured_at TIMESTAMPTZ NOT NULL,
    source TEXT NOT NULL
  )`,
  `CREATE INDEX IF NOT EXISTS profile_snapshots_profile_time_idx ON profile_snapshots (profile_id, captured_at DESC)`,
  `CREATE TABLE IF NOT EXISTS follower_edges (
    profile_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    follower_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    first_seen_at TIMESTAMPTZ NOT NULL,
    last_seen_at TIMESTAMPTZ NOT NULL,
    source TEXT NOT NULL,
    PRIMARY KEY (profile_id, follower_id)
  )`,
  `CREATE INDEX IF NOT EXISTS follower_edges_follower_idx ON follower_edges (follower_id)`,
  `CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    author_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    conversation_id TEXT,
    in_reply_to_user_id TEXT,
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ,
    lang TEXT,
    reply_settings TEXT,
    possibly_sensitive BOOLEAN,
    referenced_posts_json JSONB,
    entities_json JSONB,
    attachments_json JSONB,
    source TEXT NOT NULL,
    first_seen_at TIMESTAMPTZ NOT NULL,
    last_seen_at TIMESTAMPTZ NOT NULL,
    raw_json JSONB
  )`,
  `CREATE INDEX IF NOT EXISTS posts_author_created_idx ON posts (author_id, created_at DESC)`,
  `CREATE INDEX IF NOT EXISTS posts_conversation_idx ON posts (conversation_id)`,
  `CREATE TABLE IF NOT EXISTS post_metrics (
    id UUID PRIMARY KEY,
    post_id TEXT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    replies BIGINT NOT NULL DEFAULT 0,
    reposts BIGINT NOT NULL DEFAULT 0,
    quotes BIGINT NOT NULL DEFAULT 0,
    likes BIGINT NOT NULL DEFAULT 0,
    bookmarks BIGINT NOT NULL DEFAULT 0,
    impressions BIGINT NOT NULL DEFAULT 0,
    url_clicks BIGINT,
    profile_clicks BIGINT,
    engagements BIGINT,
    captured_at TIMESTAMPTZ NOT NULL,
    source TEXT NOT NULL
  )`,
  `CREATE INDEX IF NOT EXISTS post_metrics_post_time_idx ON post_metrics (post_id, captured_at DESC)`,
  `CREATE TABLE IF NOT EXISTS ingestion_runs (
    id UUID PRIMARY KEY,
    status TEXT NOT NULL,
    seed_json JSONB NOT NULL,
    options_json JSONB NOT NULL,
    cursor_json JSONB,
    profiles_seen BIGINT NOT NULL DEFAULT 0,
    profiles_qualified BIGINT NOT NULL DEFAULT 0,
    follower_edges_seen BIGINT NOT NULL DEFAULT 0,
    posts_seen BIGINT NOT NULL DEFAULT 0,
    comments_seen BIGINT NOT NULL DEFAULT 0,
    api_requests BIGINT NOT NULL DEFAULT 0,
    estimated_credits DOUBLE PRECISION,
    error TEXT,
    started_at TIMESTAMPTZ NOT NULL,
    completed_at TIMESTAMPTZ
  )`,
  `CREATE INDEX IF NOT EXISTS ingestion_runs_started_idx ON ingestion_runs (started_at DESC)`,
  `CREATE INDEX IF NOT EXISTS ingestion_runs_status_idx ON ingestion_runs (status)`,
  `CREATE TABLE IF NOT EXISTS evidence (
    id UUID PRIMARY KEY,
    entity_type TEXT NOT NULL,
    entity_id TEXT NOT NULL,
    field TEXT NOT NULL,
    value_json JSONB NOT NULL,
    source TEXT NOT NULL,
    source_url TEXT,
    confidence DOUBLE PRECISION NOT NULL DEFAULT 1,
    captured_at TIMESTAMPTZ NOT NULL
  )`,
  `CREATE INDEX IF NOT EXISTS evidence_entity_idx ON evidence (entity_type, entity_id, captured_at DESC)`,
];

export async function ensureSchema(db: SignalDatabase) {
  for (const statement of schemaStatements) {
    await db.unsafe(statement);
  }
}

export async function upsertProfile(
  db: SignalDatabase,
  user: XUser,
  source: "x_api" | "browser",
  capturedAt = new Date().toISOString(),
) {
  const metrics = user.public_metrics ?? {};
  await db`
    INSERT INTO profiles (
      id, username, name, description, location, url, profile_image_url,
      verified, protected, followers_count, following_count, post_count,
      listed_count, created_at, first_seen_at, last_seen_at, source, raw_json
    ) VALUES (
      ${user.id}, ${user.username}, ${user.name}, ${user.description ?? null},
      ${user.location ?? null}, ${user.url ?? null},
      ${user.profile_image_url ?? null}, ${Boolean(user.verified)},
      ${Boolean(user.protected)}, ${metrics.followers_count ?? 0},
      ${metrics.following_count ?? 0}, ${metrics.tweet_count ?? 0},
      ${metrics.listed_count ?? 0}, ${user.created_at ?? null},
      ${capturedAt}, ${capturedAt}, ${source},
      ${db.json(JSON.parse(JSON.stringify(user)))}
    )
    ON CONFLICT (id) DO UPDATE SET
      username = EXCLUDED.username,
      name = EXCLUDED.name,
      description = EXCLUDED.description,
      location = EXCLUDED.location,
      url = EXCLUDED.url,
      profile_image_url = EXCLUDED.profile_image_url,
      verified = EXCLUDED.verified,
      protected = EXCLUDED.protected,
      followers_count = EXCLUDED.followers_count,
      following_count = EXCLUDED.following_count,
      post_count = EXCLUDED.post_count,
      listed_count = EXCLUDED.listed_count,
      created_at = EXCLUDED.created_at,
      last_seen_at = EXCLUDED.last_seen_at,
      source = EXCLUDED.source,
      raw_json = EXCLUDED.raw_json
  `;

  await db`
    INSERT INTO profile_snapshots (
      id, profile_id, followers_count, following_count, post_count,
      listed_count, captured_at, source
    ) VALUES (
      ${crypto.randomUUID()}, ${user.id}, ${metrics.followers_count ?? 0},
      ${metrics.following_count ?? 0}, ${metrics.tweet_count ?? 0},
      ${metrics.listed_count ?? 0}, ${capturedAt}, ${source}
    )
  `;
}

export async function upsertFollowerEdge(
  db: SignalDatabase,
  profileId: string,
  followerId: string,
  source: "x_api" | "browser",
  capturedAt = new Date().toISOString(),
) {
  await db`
    INSERT INTO follower_edges (
      profile_id, follower_id, first_seen_at, last_seen_at, source
    ) VALUES (
      ${profileId}, ${followerId}, ${capturedAt}, ${capturedAt}, ${source}
    )
    ON CONFLICT (profile_id, follower_id) DO UPDATE SET
      last_seen_at = EXCLUDED.last_seen_at,
      source = EXCLUDED.source
  `;
}

export async function upsertPost(
  db: SignalDatabase,
  post: XPost,
  fallbackAuthorId: string,
  source: "x_api" | "browser",
  capturedAt = new Date().toISOString(),
) {
  const authorId = post.author_id ?? fallbackAuthorId;
  await db`
    INSERT INTO posts (
      id, author_id, conversation_id, in_reply_to_user_id, text, created_at,
      lang, reply_settings, possibly_sensitive, referenced_posts_json,
      entities_json, attachments_json, source, first_seen_at, last_seen_at, raw_json
    ) VALUES (
      ${post.id}, ${authorId}, ${post.conversation_id ?? null},
      ${post.in_reply_to_user_id ?? null}, ${post.text},
      ${post.created_at ?? null}, ${post.lang ?? null},
      ${post.reply_settings ?? null}, ${post.possibly_sensitive ?? false},
      ${db.json(JSON.parse(JSON.stringify(post.referenced_tweets ?? [])))},
      ${db.json(JSON.parse(JSON.stringify(post.entities ?? {})))},
      ${db.json(JSON.parse(JSON.stringify(post.attachments ?? {})))},
      ${source}, ${capturedAt}, ${capturedAt},
      ${db.json(JSON.parse(JSON.stringify(post)))}
    )
    ON CONFLICT (id) DO UPDATE SET
      author_id = EXCLUDED.author_id,
      conversation_id = EXCLUDED.conversation_id,
      in_reply_to_user_id = EXCLUDED.in_reply_to_user_id,
      text = EXCLUDED.text,
      created_at = EXCLUDED.created_at,
      lang = EXCLUDED.lang,
      reply_settings = EXCLUDED.reply_settings,
      possibly_sensitive = EXCLUDED.possibly_sensitive,
      referenced_posts_json = EXCLUDED.referenced_posts_json,
      entities_json = EXCLUDED.entities_json,
      attachments_json = EXCLUDED.attachments_json,
      source = EXCLUDED.source,
      last_seen_at = EXCLUDED.last_seen_at,
      raw_json = EXCLUDED.raw_json
  `;

  const metrics = post.public_metrics ?? {};
  const privateMetrics = post.non_public_metrics ?? {};
  await db`
    INSERT INTO post_metrics (
      id, post_id, replies, reposts, quotes, likes, bookmarks, impressions,
      url_clicks, profile_clicks, engagements, captured_at, source
    ) VALUES (
      ${crypto.randomUUID()}, ${post.id}, ${metrics.reply_count ?? 0},
      ${metrics.retweet_count ?? 0}, ${metrics.quote_count ?? 0},
      ${metrics.like_count ?? 0}, ${metrics.bookmark_count ?? 0},
      ${metrics.impression_count ?? 0},
      ${privateMetrics.url_link_clicks ?? null},
      ${privateMetrics.user_profile_clicks ?? null},
      ${privateMetrics.engagements ?? null}, ${capturedAt}, ${source}
    )
  `;
}

export async function startRun(
  db: SignalDatabase,
  id: string,
  handles: string[],
  options: Record<string, unknown>,
) {
  await db`
    INSERT INTO ingestion_runs (
      id, status, seed_json, options_json, started_at
    ) VALUES (
      ${id}, 'running', ${db.json(handles)},
      ${db.json(JSON.parse(JSON.stringify(options)))},
      ${new Date().toISOString()}
    )
  `;
}

export async function finishRun(
  db: SignalDatabase,
  id: string,
  status: "complete" | "partial" | "failed",
  counts: RunCounts,
  cursor: Record<string, unknown> | null,
  error: string | null,
) {
  await db`
    UPDATE ingestion_runs SET
      status = ${status},
      cursor_json = ${cursor ? db.json(JSON.parse(JSON.stringify(cursor))) : null},
      profiles_seen = ${counts.profilesSeen},
      profiles_qualified = ${counts.profilesQualified},
      follower_edges_seen = ${counts.followerEdgesSeen},
      posts_seen = ${counts.postsSeen},
      comments_seen = ${counts.commentsSeen},
      api_requests = ${counts.apiRequests},
      error = ${error},
      completed_at = ${new Date().toISOString()}
    WHERE id = ${id}
  `;
}

export async function recordEvidence(
  db: SignalDatabase,
  input: {
    entityType: string;
    entityId: string;
    field: string;
    value: unknown;
    sourceUrl?: string;
    confidence?: number;
    capturedAt?: string;
  },
) {
  await db`
    INSERT INTO evidence (
      id, entity_type, entity_id, field, value_json, source,
      source_url, confidence, captured_at
    ) VALUES (
      ${crypto.randomUUID()}, ${input.entityType}, ${input.entityId},
      ${input.field}, ${db.json(JSON.parse(JSON.stringify(input.value)))}, 'browser',
      ${input.sourceUrl ?? null}, ${input.confidence ?? 1},
      ${input.capturedAt ?? new Date().toISOString()}
    )
  `;
}
