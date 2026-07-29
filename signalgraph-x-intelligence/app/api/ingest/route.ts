import {
  ensureSchema,
  finishRun,
  getDatabase,
  recordEvidence,
  startRun,
  upsertFollowerEdge,
  upsertPost,
  upsertProfile,
  type RunCounts,
} from "../../../lib/store";
import { XApiClient, XApiError, type XUser } from "../../../lib/x-api";

type IngestOptions = {
  handles: string[];
  minFollowers: number;
  maxProfiles: number;
  maxPagesPerCollection: number;
  includeFollowers: boolean;
  includePosts: boolean;
  includeConversations: boolean;
  includeEngagers: boolean;
};

function normalizeOptions(payload: Record<string, unknown>): IngestOptions {
  const handles = Array.isArray(payload.handles)
    ? payload.handles
        .filter((value): value is string => typeof value === "string")
        .map((value) => value.trim().replace(/^@/, ""))
        .filter(Boolean)
        .slice(0, 25)
    : [];

  return {
    handles,
    minFollowers: Math.max(1000, Number(payload.minFollowers) || 1000),
    maxProfiles: Math.min(100, Math.max(1, Number(payload.maxProfiles) || 10)),
    maxPagesPerCollection: Math.min(
      10,
      Math.max(1, Number(payload.maxPagesPerCollection) || 1),
    ),
    includeFollowers: payload.includeFollowers !== false,
    includePosts: payload.includePosts !== false,
    includeConversations: payload.includeConversations === true,
    includeEngagers: payload.includeEngagers === true,
  };
}

export async function POST(request: Request) {
  const database = getDatabase();
  if (!database) {
    return Response.json(
      {
        error:
          "Persistent storage is not configured yet. Add DATABASE_URL to start ingestion.",
        code: "DATABASE_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }
  if (!process.env.X_BEARER_TOKEN) {
    return Response.json(
      {
        error:
          "X API access is not configured yet. Add X_BEARER_TOKEN to start API ingestion.",
        code: "X_API_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const payload = (await request.json().catch(() => ({}))) as Record<
    string,
    unknown
  >;
  const options = normalizeOptions(payload);
  if (options.handles.length === 0) {
    return Response.json(
      { error: "Provide at least one X handle." },
      { status: 400 },
    );
  }

  await ensureSchema(database);
  const runId = crypto.randomUUID();
  const client = new XApiClient(
    process.env.X_BEARER_TOKEN,
    process.env.X_API_BASE_URL,
  );
  const counts: RunCounts = {
    profilesSeen: 0,
    profilesQualified: 0,
    followerEdgesSeen: 0,
    postsSeen: 0,
    commentsSeen: 0,
    apiRequests: 0,
  };
  const queuedHandles = [...options.handles];
  const visited = new Set<string>();
  const remaining: string[] = [];

  await startRun(database, runId, options.handles, options);

  try {
    while (queuedHandles.length > 0 && visited.size < options.maxProfiles) {
      const username = queuedHandles.shift();
      if (!username || visited.has(username.toLowerCase())) continue;
      visited.add(username.toLowerCase());

      const lookup = await client.lookupUser(username);
      const user = lookup.data;
      if (!user) continue;
      counts.profilesSeen += 1;
      const profileId = await upsertProfile(database, user, "x_api");

      const followerCount = user.public_metrics?.followers_count ?? 0;
      if (followerCount < options.minFollowers) continue;
      counts.profilesQualified += 1;

      if (options.includeFollowers && !user.protected) {
        let token: string | undefined;
        for (let page = 0; page < options.maxPagesPerCollection; page += 1) {
          const response = await client.getFollowers(user.id, token);
          for (const follower of response.data ?? []) {
            const followerId = await upsertProfile(database, follower, "x_api");
            await upsertFollowerEdge(database, profileId, followerId, "x_api");
            counts.followerEdgesSeen += 1;
            if (
              (follower.public_metrics?.followers_count ?? 0) >=
                options.minFollowers &&
              !visited.has(follower.username.toLowerCase())
            ) {
              queuedHandles.push(follower.username);
            }
          }
          token = response.meta?.next_token;
          if (!token) break;
        }
      }

      if (options.includePosts && !user.protected) {
        let token: string | undefined;
        for (let page = 0; page < options.maxPagesPerCollection; page += 1) {
          const response = await client.getPosts(user.id, token);
          for (const post of response.data ?? []) {
            await upsertPost(database, post, profileId, "x_api");
            counts.postsSeen += 1;

            if (options.includeConversations && post.conversation_id) {
              const conversation = await client.getConversation(
                post.conversation_id,
              );
              const includedUsers =
                ((conversation.includes?.users as XUser[] | undefined) ?? []);
              const canonicalAuthorIds = new Map<string, string>();
              for (const author of includedUsers) {
                canonicalAuthorIds.set(
                  author.id,
                  await upsertProfile(database, author, "x_api"),
                );
              }
              for (const reply of conversation.data ?? []) {
                if (reply.id === post.id) continue;
                const canonicalAuthorId = reply.author_id
                  ? canonicalAuthorIds.get(reply.author_id)
                  : undefined;
                await upsertPost(
                  database,
                  canonicalAuthorId
                    ? { ...reply, author_id: canonicalAuthorId }
                    : reply,
                  profileId,
                  "x_api",
                );
                counts.commentsSeen += 1;
              }
            }

            if (options.includeEngagers) {
              const [liking, reposting] = await Promise.all([
                client.getLikingUsers(post.id),
                client.getRepostedBy(post.id),
              ]);
              for (const liker of liking.data ?? []) {
                const likerId = await upsertProfile(database, liker, "x_api");
                await recordEvidence(database, {
                  entityType: "post",
                  entityId: post.id,
                  field: "liking_user_id",
                  value: likerId,
                  sourceUrl: `https://x.com/i/web/status/${post.id}/likes`,
                });
              }
              for (const reposter of reposting.data ?? []) {
                const reposterId = await upsertProfile(
                  database,
                  reposter,
                  "x_api",
                );
                await recordEvidence(database, {
                  entityType: "post",
                  entityId: post.id,
                  field: "reposting_user_id",
                  value: reposterId,
                  sourceUrl: `https://x.com/i/web/status/${post.id}/retweets`,
                });
              }
            }
          }
          token = response.meta?.next_token;
          if (!token) break;
        }
      }
    }

    counts.apiRequests = client.requestCount;
    remaining.push(...queuedHandles);
    const status = remaining.length > 0 ? "partial" : "complete";
    await finishRun(
      database,
      runId,
      status,
      counts,
      remaining.length > 0 ? { queuedHandles: remaining } : null,
      null,
    );
    return Response.json({
      runId,
      status,
      counts,
      remainingProfiles: remaining.length,
      note:
        remaining.length > 0
          ? "The run stopped at its configured profile budget and can be resumed."
          : "The configured ingestion slice completed.",
    });
  } catch (error) {
    counts.apiRequests = client.requestCount;
    const message =
      error instanceof XApiError
        ? `${error.message}${error.resetAt ? `; reset at ${error.resetAt}` : ""}`
        : error instanceof Error
          ? error.message
          : "Unknown ingestion error";
    await finishRun(
      database,
      runId,
      "failed",
      counts,
      { queuedHandles },
      message,
    );
    return Response.json(
      {
        runId,
        status: "failed",
        counts,
        error: message,
        retryable:
          error instanceof XApiError &&
          (error.status === 429 || error.status >= 500),
      },
      { status: error instanceof XApiError ? error.status : 500 },
    );
  }
}
