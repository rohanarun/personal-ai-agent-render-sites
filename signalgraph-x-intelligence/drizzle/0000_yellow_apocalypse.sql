CREATE TABLE `evidence` (
	`id` text PRIMARY KEY NOT NULL,
	`entity_type` text NOT NULL,
	`entity_id` text NOT NULL,
	`field` text NOT NULL,
	`value_json` text NOT NULL,
	`source` text NOT NULL,
	`source_url` text,
	`confidence` real DEFAULT 1 NOT NULL,
	`captured_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `evidence_entity_idx` ON `evidence` (`entity_type`,`entity_id`,`captured_at`);--> statement-breakpoint
CREATE TABLE `follower_edges` (
	`profile_id` text NOT NULL,
	`follower_id` text NOT NULL,
	`first_seen_at` text NOT NULL,
	`last_seen_at` text NOT NULL,
	`source` text NOT NULL,
	PRIMARY KEY(`profile_id`, `follower_id`),
	FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`follower_id`) REFERENCES `profiles`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `follower_edges_follower_idx` ON `follower_edges` (`follower_id`);--> statement-breakpoint
CREATE TABLE `ingestion_runs` (
	`id` text PRIMARY KEY NOT NULL,
	`status` text NOT NULL,
	`seed_json` text NOT NULL,
	`options_json` text NOT NULL,
	`cursor_json` text,
	`profiles_seen` integer DEFAULT 0 NOT NULL,
	`profiles_qualified` integer DEFAULT 0 NOT NULL,
	`follower_edges_seen` integer DEFAULT 0 NOT NULL,
	`posts_seen` integer DEFAULT 0 NOT NULL,
	`comments_seen` integer DEFAULT 0 NOT NULL,
	`api_requests` integer DEFAULT 0 NOT NULL,
	`estimated_credits` real,
	`error` text,
	`started_at` text NOT NULL,
	`completed_at` text
);
--> statement-breakpoint
CREATE INDEX `ingestion_runs_started_idx` ON `ingestion_runs` (`started_at`);--> statement-breakpoint
CREATE INDEX `ingestion_runs_status_idx` ON `ingestion_runs` (`status`);--> statement-breakpoint
CREATE TABLE `post_metrics` (
	`id` text PRIMARY KEY NOT NULL,
	`post_id` text NOT NULL,
	`replies` integer DEFAULT 0 NOT NULL,
	`reposts` integer DEFAULT 0 NOT NULL,
	`quotes` integer DEFAULT 0 NOT NULL,
	`likes` integer DEFAULT 0 NOT NULL,
	`bookmarks` integer DEFAULT 0 NOT NULL,
	`impressions` integer DEFAULT 0 NOT NULL,
	`url_clicks` integer,
	`profile_clicks` integer,
	`engagements` integer,
	`captured_at` text NOT NULL,
	`source` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `post_metrics_post_time_idx` ON `post_metrics` (`post_id`,`captured_at`);--> statement-breakpoint
CREATE TABLE `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`author_id` text NOT NULL,
	`conversation_id` text,
	`in_reply_to_user_id` text,
	`text` text NOT NULL,
	`created_at` text,
	`lang` text,
	`reply_settings` text,
	`possibly_sensitive` integer,
	`referenced_posts_json` text,
	`entities_json` text,
	`attachments_json` text,
	`source` text NOT NULL,
	`first_seen_at` text NOT NULL,
	`last_seen_at` text NOT NULL,
	`raw_json` text,
	FOREIGN KEY (`author_id`) REFERENCES `profiles`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `posts_author_created_idx` ON `posts` (`author_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `posts_conversation_idx` ON `posts` (`conversation_id`);--> statement-breakpoint
CREATE TABLE `profile_snapshots` (
	`id` text PRIMARY KEY NOT NULL,
	`profile_id` text NOT NULL,
	`followers_count` integer DEFAULT 0 NOT NULL,
	`following_count` integer DEFAULT 0 NOT NULL,
	`post_count` integer DEFAULT 0 NOT NULL,
	`listed_count` integer DEFAULT 0 NOT NULL,
	`captured_at` text NOT NULL,
	`source` text NOT NULL,
	FOREIGN KEY (`profile_id`) REFERENCES `profiles`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `profile_snapshots_profile_time_idx` ON `profile_snapshots` (`profile_id`,`captured_at`);--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`location` text,
	`url` text,
	`profile_image_url` text,
	`verified` integer DEFAULT false NOT NULL,
	`protected` integer DEFAULT false NOT NULL,
	`followers_count` integer DEFAULT 0 NOT NULL,
	`following_count` integer DEFAULT 0 NOT NULL,
	`post_count` integer DEFAULT 0 NOT NULL,
	`listed_count` integer DEFAULT 0 NOT NULL,
	`created_at` text,
	`first_seen_at` text NOT NULL,
	`last_seen_at` text NOT NULL,
	`source` text NOT NULL,
	`raw_json` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `profiles_username_unique` ON `profiles` (`username`);--> statement-breakpoint
CREATE INDEX `profiles_followers_idx` ON `profiles` (`followers_count`);--> statement-breakpoint
CREATE INDEX `profiles_last_seen_idx` ON `profiles` (`last_seen_at`);