export type XPublicMetrics = {
  retweet_count?: number;
  reply_count?: number;
  like_count?: number;
  quote_count?: number;
  bookmark_count?: number;
  impression_count?: number;
};

export type XUser = {
  id: string;
  username: string;
  name: string;
  description?: string;
  location?: string;
  url?: string;
  profile_image_url?: string;
  verified?: boolean;
  protected?: boolean;
  created_at?: string;
  public_metrics?: {
    followers_count?: number;
    following_count?: number;
    tweet_count?: number;
    listed_count?: number;
  };
};

export type XPost = {
  id: string;
  author_id?: string;
  conversation_id?: string;
  in_reply_to_user_id?: string;
  text: string;
  created_at?: string;
  lang?: string;
  reply_settings?: string;
  possibly_sensitive?: boolean;
  referenced_tweets?: Array<{ type: string; id: string }>;
  entities?: Record<string, unknown>;
  attachments?: Record<string, unknown>;
  public_metrics?: XPublicMetrics;
  non_public_metrics?: {
    url_link_clicks?: number;
    user_profile_clicks?: number;
    engagements?: number;
  };
};

type XPage<T> = {
  data?: T[];
  includes?: Record<string, unknown>;
  errors?: Array<Record<string, unknown>>;
  meta?: {
    next_token?: string;
    result_count?: number;
  };
};

type XSingle<T> = {
  data?: T;
  errors?: Array<Record<string, unknown>>;
};

export class XApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public resetAt: string | null,
    public details: unknown,
  ) {
    super(message);
  }
}

export class XApiClient {
  public requestCount = 0;

  constructor(
    private bearerToken: string,
    private baseUrl = "https://api.x.com/2",
  ) {}

  private async get<T>(
    path: string,
    params: Record<string, string | number | boolean | undefined> = {},
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }

    this.requestCount += 1;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
        Accept: "application/json",
      },
    });

    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      const reset = response.headers.get("x-rate-limit-reset");
      const resetAt = reset
        ? new Date(Number(reset) * 1000).toISOString()
        : null;
      throw new XApiError(
        `X API request failed with status ${response.status}`,
        response.status,
        resetAt,
        payload,
      );
    }

    return payload as T;
  }

  lookupUser(username: string) {
    return this.get<XSingle<XUser>>(
      `/users/by/username/${encodeURIComponent(username.replace(/^@/, ""))}`,
      {
        "user.fields": [
          "created_at",
          "description",
          "location",
          "profile_image_url",
          "protected",
          "public_metrics",
          "url",
          "verified",
        ].join(","),
      },
    );
  }

  getFollowers(userId: string, paginationToken?: string) {
    return this.get<XPage<XUser>>(`/users/${userId}/followers`, {
      max_results: 1000,
      pagination_token: paginationToken,
      "user.fields": [
        "created_at",
        "description",
        "location",
        "profile_image_url",
        "protected",
        "public_metrics",
        "url",
        "verified",
      ].join(","),
    });
  }

  getPosts(userId: string, paginationToken?: string) {
    return this.get<XPage<XPost>>(`/users/${userId}/tweets`, {
      max_results: 100,
      pagination_token: paginationToken,
      exclude: "retweets",
      "tweet.fields": [
        "attachments",
        "author_id",
        "conversation_id",
        "created_at",
        "entities",
        "in_reply_to_user_id",
        "lang",
        "possibly_sensitive",
        "public_metrics",
        "referenced_tweets",
        "reply_settings",
      ].join(","),
      expansions: "attachments.media_keys",
      "media.fields": [
        "alt_text",
        "duration_ms",
        "height",
        "media_key",
        "preview_image_url",
        "public_metrics",
        "type",
        "url",
        "variants",
        "width",
      ].join(","),
    });
  }

  getConversation(conversationId: string, paginationToken?: string) {
    return this.get<XPage<XPost>>("/tweets/search/recent", {
      query: `conversation_id:${conversationId}`,
      max_results: 100,
      next_token: paginationToken,
      "tweet.fields": [
        "attachments",
        "author_id",
        "conversation_id",
        "created_at",
        "entities",
        "in_reply_to_user_id",
        "lang",
        "possibly_sensitive",
        "public_metrics",
        "referenced_tweets",
        "reply_settings",
      ].join(","),
      expansions: "author_id,attachments.media_keys",
      "user.fields":
        "created_at,description,location,profile_image_url,protected,public_metrics,url,verified",
      "media.fields":
        "alt_text,duration_ms,height,media_key,preview_image_url,public_metrics,type,url,variants,width",
    });
  }

  getLikingUsers(postId: string, paginationToken?: string) {
    return this.get<XPage<XUser>>(`/tweets/${postId}/liking_users`, {
      max_results: 100,
      pagination_token: paginationToken,
      "user.fields":
        "created_at,description,location,profile_image_url,protected,public_metrics,url,verified",
    });
  }

  getRepostedBy(postId: string, paginationToken?: string) {
    return this.get<XPage<XUser>>(`/tweets/${postId}/retweeted_by`, {
      max_results: 100,
      pagination_token: paginationToken,
      "user.fields":
        "created_at,description,location,profile_image_url,protected,public_metrics,url,verified",
    });
  }
}
