import capture from "../../../data/xdevelopers-browser-evidence.json";
import { ensureSchema, getDatabase } from "../../../lib/store";

export async function GET() {
  const database = getDatabase();
  if (!database) {
    return Response.json({ source: "browser_capture", capture });
  }

  try {
    await ensureSchema(database);
    const [profiles, posts, runs, totals] = await Promise.all([
      database`
        SELECT id, username, name, description, verified, protected,
          followers_count AS "followersCount",
          following_count AS "followingCount",
          post_count AS "postCount",
          listed_count AS "listedCount",
          last_seen_at AS "lastSeenAt",
          source
        FROM profiles
        WHERE followers_count >= 1000
        ORDER BY followers_count DESC
        LIMIT 20
      `,
      database`
        SELECT
          p.id, p.text, p.created_at AS "createdAt",
          pr.username,
          m.replies, m.reposts, m.quotes, m.likes, m.bookmarks, m.impressions,
          m.captured_at AS "capturedAt"
        FROM posts p
        JOIN profiles pr ON pr.id = p.author_id
        JOIN LATERAL (
          SELECT * FROM post_metrics latest
          WHERE latest.post_id = p.id
          ORDER BY latest.captured_at DESC
          LIMIT 1
        ) m ON TRUE
        ORDER BY m.impressions DESC
        LIMIT 20
      `,
      database`
        SELECT id, status, profiles_seen AS "profilesSeen",
          profiles_qualified AS "profilesQualified",
          follower_edges_seen AS "followerEdgesSeen",
          posts_seen AS "postsSeen",
          comments_seen AS "commentsSeen",
          api_requests AS "apiRequests",
          started_at AS "startedAt",
          completed_at AS "completedAt",
          error
        FROM ingestion_runs
        ORDER BY started_at DESC
        LIMIT 10
      `,
      database`
        SELECT
          (SELECT COUNT(*) FROM profiles)::int AS profiles,
          (SELECT COUNT(*) FROM follower_edges)::int AS "followerEdges",
          (SELECT COUNT(*) FROM posts)::int AS posts,
          (SELECT COUNT(*) FROM evidence)::int AS evidence
      `,
    ]);

    const summary = totals[0] ?? {
      profiles: 0,
      followerEdges: 0,
      posts: 0,
      evidence: 0,
    };
    const hasData = Number(summary.profiles) > 0;

    return Response.json({
      source: hasData ? "database" : "browser_capture",
      capture: hasData ? null : capture,
      profiles,
      posts,
      runs,
      totals: summary,
    });
  } catch {
    return Response.json({ source: "browser_capture", capture });
  }
}
