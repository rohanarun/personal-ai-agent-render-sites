import {
  ensureSchema,
  getDatabase,
  recordEvidence,
  upsertFollowerEdge,
  upsertPost,
  upsertProfile,
} from "../../../../lib/store";
import type { XPost, XUser } from "../../../../lib/x-api";

type BrowserProfile = {
  id?: string;
  username: string;
  name?: string;
  description?: string;
  location?: string;
  website?: string;
  verified?: boolean;
  protected?: boolean;
  followersCount?: number;
  followingCount?: number;
  postCount?: number;
};

type BrowserPost = {
  id: string;
  authorId?: string;
  authorUsername?: string;
  conversationId?: string;
  inReplyToUserId?: string;
  createdAt?: string;
  text: string;
  replies?: number;
  reposts?: number;
  quotes?: number;
  likes?: number;
  bookmarks?: number;
  impressions?: number;
};

type BrowserFollower = {
  id?: string;
  username: string;
  name?: string;
  verified?: boolean;
  protected?: boolean;
};

type BrowserEvidence = {
  capturedAt?: string;
  sourceUrl: string;
  profile: BrowserProfile;
  posts?: BrowserPost[];
  comments?: BrowserPost[];
  visibleFollowers?: BrowserFollower[];
};

function browserUser(profile: BrowserProfile): XUser {
  return {
    id: profile.id ?? `browser:${profile.username.toLowerCase()}`,
    username: profile.username,
    name: profile.name ?? profile.username,
    description: profile.description,
    location: profile.location,
    url: profile.website,
    verified: profile.verified,
    protected: profile.protected,
    public_metrics: {
      followers_count: profile.followersCount ?? 0,
      following_count: profile.followingCount ?? 0,
      tweet_count: profile.postCount ?? 0,
    },
  };
}

function browserPost(post: BrowserPost, fallbackAuthorId: string): XPost {
  return {
    id: post.id,
    author_id: post.authorId ?? fallbackAuthorId,
    conversation_id: post.conversationId,
    in_reply_to_user_id: post.inReplyToUserId,
    created_at: post.createdAt,
    text: post.text,
    public_metrics: {
      reply_count: post.replies ?? 0,
      retweet_count: post.reposts ?? 0,
      quote_count: post.quotes ?? 0,
      like_count: post.likes ?? 0,
      bookmark_count: post.bookmarks ?? 0,
      impression_count: post.impressions ?? 0,
    },
  };
}

export async function POST(request: Request) {
  const database = getDatabase();
  if (!database) {
    return Response.json(
      {
        error:
          "Persistent storage is not configured yet. Add DATABASE_URL to accept browser evidence.",
        code: "DATABASE_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const payload = (await request.json().catch(() => null)) as BrowserEvidence | null;
  if (!payload?.profile?.username || !payload.sourceUrl) {
    return Response.json(
      { error: "A source URL and profile username are required." },
      { status: 400 },
    );
  }

  await ensureSchema(database);
  const capturedAt = payload.capturedAt ?? new Date().toISOString();
  const profile = browserUser(payload.profile);
  await upsertProfile(database, profile, "browser", capturedAt);

  let postsStored = 0;
  for (const post of [...(payload.posts ?? []), ...(payload.comments ?? [])]) {
    const normalized = browserPost(post, profile.id);
    if (
      normalized.author_id !== profile.id &&
      post.authorUsername
    ) {
      await upsertProfile(
        database,
        {
          id: normalized.author_id ?? `browser:${post.authorUsername.toLowerCase()}`,
          username: post.authorUsername,
          name: post.authorUsername,
        },
        "browser",
        capturedAt,
      );
    }
    await upsertPost(database, normalized, profile.id, "browser", capturedAt);
    postsStored += 1;
  }

  let followersStored = 0;
  for (const follower of payload.visibleFollowers ?? []) {
    const user = browserUser(follower);
    await upsertProfile(database, user, "browser", capturedAt);
    await upsertFollowerEdge(database, profile.id, user.id, "browser", capturedAt);
    followersStored += 1;
  }

  await recordEvidence(database, {
    entityType: "profile",
    entityId: profile.id,
    field: "browser_capture",
    value: {
      postsStored,
      followersStored,
      sourceUrl: payload.sourceUrl,
    },
    sourceUrl: payload.sourceUrl,
    capturedAt,
  });

  return Response.json({
    status: "accepted",
    profileId: profile.id,
    postsStored,
    followersStored,
    capturedAt,
  });
}
