import {
  index,
  integer,
  primaryKey,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable(
  "profiles",
  {
    id: text("id").primaryKey(),
    username: text("username").notNull().unique(),
    name: text("name").notNull(),
    description: text("description"),
    location: text("location"),
    url: text("url"),
    profileImageUrl: text("profile_image_url"),
    verified: integer("verified", { mode: "boolean" }).notNull().default(false),
    protected: integer("protected", { mode: "boolean" })
      .notNull()
      .default(false),
    followersCount: integer("followers_count").notNull().default(0),
    followingCount: integer("following_count").notNull().default(0),
    postCount: integer("post_count").notNull().default(0),
    listedCount: integer("listed_count").notNull().default(0),
    createdAt: text("created_at"),
    firstSeenAt: text("first_seen_at").notNull(),
    lastSeenAt: text("last_seen_at").notNull(),
    source: text("source").notNull(),
    rawJson: text("raw_json"),
  },
  (table) => [
    index("profiles_followers_idx").on(table.followersCount),
    index("profiles_last_seen_idx").on(table.lastSeenAt),
  ],
);

export const profileSnapshots = sqliteTable(
  "profile_snapshots",
  {
    id: text("id").primaryKey(),
    profileId: text("profile_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    followersCount: integer("followers_count").notNull().default(0),
    followingCount: integer("following_count").notNull().default(0),
    postCount: integer("post_count").notNull().default(0),
    listedCount: integer("listed_count").notNull().default(0),
    capturedAt: text("captured_at").notNull(),
    source: text("source").notNull(),
  },
  (table) => [
    index("profile_snapshots_profile_time_idx").on(
      table.profileId,
      table.capturedAt,
    ),
  ],
);

export const followerEdges = sqliteTable(
  "follower_edges",
  {
    profileId: text("profile_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    followerId: text("follower_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    firstSeenAt: text("first_seen_at").notNull(),
    lastSeenAt: text("last_seen_at").notNull(),
    source: text("source").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.profileId, table.followerId] }),
    index("follower_edges_follower_idx").on(table.followerId),
  ],
);

export const posts = sqliteTable(
  "posts",
  {
    id: text("id").primaryKey(),
    authorId: text("author_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    conversationId: text("conversation_id"),
    inReplyToUserId: text("in_reply_to_user_id"),
    text: text("text").notNull(),
    createdAt: text("created_at"),
    lang: text("lang"),
    replySettings: text("reply_settings"),
    possiblySensitive: integer("possibly_sensitive", { mode: "boolean" }),
    referencedPostsJson: text("referenced_posts_json"),
    entitiesJson: text("entities_json"),
    attachmentsJson: text("attachments_json"),
    source: text("source").notNull(),
    firstSeenAt: text("first_seen_at").notNull(),
    lastSeenAt: text("last_seen_at").notNull(),
    rawJson: text("raw_json"),
  },
  (table) => [
    index("posts_author_created_idx").on(table.authorId, table.createdAt),
    index("posts_conversation_idx").on(table.conversationId),
  ],
);

export const postMetrics = sqliteTable(
  "post_metrics",
  {
    id: text("id").primaryKey(),
    postId: text("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade" }),
    replies: integer("replies").notNull().default(0),
    reposts: integer("reposts").notNull().default(0),
    quotes: integer("quotes").notNull().default(0),
    likes: integer("likes").notNull().default(0),
    bookmarks: integer("bookmarks").notNull().default(0),
    impressions: integer("impressions").notNull().default(0),
    urlClicks: integer("url_clicks"),
    profileClicks: integer("profile_clicks"),
    engagements: integer("engagements"),
    capturedAt: text("captured_at").notNull(),
    source: text("source").notNull(),
  },
  (table) => [
    index("post_metrics_post_time_idx").on(table.postId, table.capturedAt),
  ],
);

export const ingestionRuns = sqliteTable(
  "ingestion_runs",
  {
    id: text("id").primaryKey(),
    status: text("status").notNull(),
    seedJson: text("seed_json").notNull(),
    optionsJson: text("options_json").notNull(),
    cursorJson: text("cursor_json"),
    profilesSeen: integer("profiles_seen").notNull().default(0),
    profilesQualified: integer("profiles_qualified").notNull().default(0),
    followerEdgesSeen: integer("follower_edges_seen").notNull().default(0),
    postsSeen: integer("posts_seen").notNull().default(0),
    commentsSeen: integer("comments_seen").notNull().default(0),
    apiRequests: integer("api_requests").notNull().default(0),
    estimatedCredits: real("estimated_credits"),
    error: text("error"),
    startedAt: text("started_at").notNull(),
    completedAt: text("completed_at"),
  },
  (table) => [
    index("ingestion_runs_started_idx").on(table.startedAt),
    index("ingestion_runs_status_idx").on(table.status),
  ],
);

export const evidence = sqliteTable(
  "evidence",
  {
    id: text("id").primaryKey(),
    entityType: text("entity_type").notNull(),
    entityId: text("entity_id").notNull(),
    field: text("field").notNull(),
    valueJson: text("value_json").notNull(),
    source: text("source").notNull(),
    sourceUrl: text("source_url"),
    confidence: real("confidence").notNull().default(1),
    capturedAt: text("captured_at").notNull(),
  },
  (table) => [
    index("evidence_entity_idx").on(
      table.entityType,
      table.entityId,
      table.capturedAt,
    ),
  ],
);
