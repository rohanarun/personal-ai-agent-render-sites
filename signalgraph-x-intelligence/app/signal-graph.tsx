"use client";

import {
  ArrowRight,
  ArrowsOutLineHorizontal,
  Binoculars,
  CheckCircle,
  CirclesThreePlus,
  Database,
  Export,
  FunnelSimple,
  Graph,
  MagnifyingGlass,
  Pulse,
  Rows,
  Sparkle,
  Target,
} from "@phosphor-icons/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormEvent, useMemo, useRef, useState } from "react";
import capture from "../data/xdevelopers-browser-evidence.json";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const exact = new Intl.NumberFormat("en-US");

const metricLabels = [
  "Follower velocity",
  "Audience overlap",
  "Post impressions",
  "Reply quality",
  "Topic momentum",
  "Bookmark intent",
  "Profile growth",
  "Content decay",
];

const intelligenceModes = [
  {
    title: "Content gaps",
    description:
      "Find high-demand conversations where the current answers underperform.",
    image: "https://picsum.photos/seed/content-intelligence/1200/900",
    accent: "rgba(238, 255, 133, .9)",
  },
  {
    title: "Audience overlap",
    description:
      "See which profiles share attention, and which audiences remain untouched.",
    image: "https://picsum.photos/seed/audience-network/1200/900",
    accent: "rgba(149, 185, 255, .92)",
  },
  {
    title: "Velocity shifts",
    description:
      "Catch posts accelerating beyond each account’s normal performance.",
    image: "https://picsum.photos/seed/velocity-signal/1200/900",
    accent: "rgba(255, 152, 116, .92)",
  },
];

type IngestState = {
  tone: "idle" | "working" | "success" | "error";
  message: string;
};

export function SignalGraph() {
  const pageRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");
  const [handle, setHandle] = useState("XDevelopers");
  const [activeMode, setActiveMode] = useState(0);
  const [ingest, setIngest] = useState<IngestState>({
    tone: "idle",
    message: "Ready for a new profile seed.",
  });

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return capture.posts;
    return capture.posts.filter(
      (post) =>
        post.text.toLowerCase().includes(normalized) ||
        post.authorUsername.toLowerCase().includes(normalized),
    );
  }, [query]);

  const totalImpressions = capture.posts.reduce(
    (sum, post) => sum + post.impressions,
    0,
  );
  const totalEngagements = capture.posts.reduce(
    (sum, post) =>
      sum + post.likes + post.replies + post.reposts + post.bookmarks,
    0,
  );
  const engagementRate = (totalEngagements / totalImpressions) * 100;

  useGSAP(
    () => {
      gsap.from(".hero-word", {
        yPercent: 115,
        opacity: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
      });

      gsap.from(".hero-console", {
        y: 44,
        scale: 0.92,
        opacity: 0,
        duration: 1.25,
        delay: 0.28,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".rank-media",
        { scale: 0.8, opacity: 0.34 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".rank-story",
            start: "top 76%",
            end: "bottom 34%",
            scrub: true,
          },
        },
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 960px)", () => {
        ScrollTrigger.create({
          trigger: ".rank-story",
          start: "top 108px",
          end: "bottom bottom-=150",
          pin: ".rank-copy",
          pinSpacing: false,
        });
      });

      gsap.utils.toArray<HTMLElement>(".rank-card").forEach((card, index) => {
        gsap.to(card, {
          scale: 0.94 + index * 0.012,
          opacity: index === 0 ? 0.58 : 0.78,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 132px",
            end: "+=420",
            scrub: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: pageRef },
  );

  async function startIngestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = handle.trim().replace(/^@/, "");
    if (!username) {
      setIngest({ tone: "error", message: "Enter an X handle to continue." });
      return;
    }

    setIngest({
      tone: "working",
      message: `Starting a bounded intelligence pass for @${username}.`,
    });

    try {
      const response = await fetch("/api/ingest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          handles: [username],
          minFollowers: 1000,
          maxProfiles: 10,
          maxPagesPerCollection: 1,
          includeFollowers: true,
          includePosts: true,
        }),
      });
      const result = (await response.json()) as {
        error?: string;
        counts?: {
          profilesQualified: number;
          postsSeen: number;
          followerEdgesSeen: number;
        };
      };

      if (!response.ok) throw new Error(result.error ?? "Ingestion failed.");
      setIngest({
        tone: "success",
        message: `Captured ${exact.format(result.counts?.profilesQualified ?? 0)} qualified profiles, ${exact.format(result.counts?.postsSeen ?? 0)} posts, and ${exact.format(result.counts?.followerEdgesSeen ?? 0)} follower edges.`,
      });
    } catch (error) {
      setIngest({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : "The ingestion run could not start.",
      });
    }
  }

  return (
    <main ref={pageRef} className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="SignalGraph home">
          <span className="brand-mark">
            <Graph size={18} weight="bold" />
          </span>
          <span>SignalGraph</span>
        </a>
        <div className="nav-links">
          <a href="#index">Index</a>
          <a href="#rankings">Rankings</a>
          <a href="#opportunities">Opportunities</a>
        </div>
        <a className="nav-action" href="#ingest">
          Start a run
          <ArrowRight size={15} weight="bold" />
        </a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Pulse size={16} weight="fill" />
            Search intelligence for X
          </p>
          <h1>
            <span className="line-mask">
              <span className="hero-word">Know what earns</span>
            </span>{" "}
            <span
              className="inline-signal-image"
              aria-label="Abstract network signal"
            />{" "}
            <span className="line-mask">
              <span className="hero-word">attention</span>
            </span>{" "}
            <span className="line-mask">
              <span className="hero-word">before your market does.</span>
            </span>
          </h1>
          <p className="hero-lede">
            Map profile authority, audience edges, content velocity, and the
            posts shaping a category. Every number carries its source.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#ingest">
              Index a profile
              <ArrowRight size={18} weight="bold" />
            </a>
            <a className="button button-secondary" href="#index">
              Explore the live capture
            </a>
          </div>
          <div className="source-note">
            <CheckCircle size={17} weight="fill" />
            Browser evidence and X API records stay separately attributed.
          </div>
        </div>

        <div className="hero-console">
          <div className="console-topline">
            <span className="console-state">
              <span className="live-dot" />
              Browser capture
            </span>
            <span>{new Date(capture.capturedAt).toLocaleDateString()}</span>
          </div>
          <div className="console-profile">
            <div className="profile-monogram">XD</div>
            <div>
              <p>{capture.profile.name}</p>
              <span>@{capture.profile.username}</span>
            </div>
            <span className="verified">Verified</span>
          </div>
          <div className="console-query">
            <MagnifyingGlass size={18} />
            <input
              aria-label="Filter captured posts"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter the captured post index"
            />
            <kbd>/</kbd>
          </div>
          <div className="console-results">
            {filteredPosts.slice(0, 3).map((post, index) => (
              <article key={post.id} className="console-result">
                <span className="result-rank">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p>{post.text}</p>
                  <div className="result-metrics">
                    <span>{compact.format(post.impressions)} impressions</span>
                    <span>{exact.format(post.likes)} likes</span>
                  </div>
                </div>
              </article>
            ))}
            {filteredPosts.length === 0 && (
              <div className="empty-result">
                No captured posts match this query.
              </div>
            )}
          </div>
          <div className="console-footer">
            <span>Evidence precision</span>
            <strong>Exact post metrics</strong>
          </div>
        </div>
      </header>

      <section className="metric-marquee" aria-label="Tracked intelligence">
        <div className="marquee-track">
          {[...metricLabels, ...metricLabels].map((label, index) => (
            <span key={`${label}-${index}`}>
              {label}
              <span className="marquee-mark" />
            </span>
          ))}
        </div>
      </section>

      <section className="chapter bento-chapter" id="index">
        <div className="chapter-heading">
          <p className="eyebrow">
            <Database size={16} weight="fill" />
            One index, connected evidence
          </p>
          <h2>Authority is a graph, not a vanity number.</h2>
          <p>
            Search across people, posts, conversations, and the audience links
            between them. Inspect the evidence before you trust the score.
          </p>
        </div>

        <div className="bento-grid">
          <article className="bento-card graph-card">
            <div className="card-heading">
              <span className="icon-well">
                <CirclesThreePlus size={21} />
              </span>
              <span>Audience graph</span>
            </div>
            <div className="network-visual" aria-hidden="true">
              <span className="node node-main">XD</span>
              <span className="node node-a">DC</span>
              <span className="node node-b">ZM</span>
              <span className="node node-c">JR</span>
              <span className="node node-d">SL</span>
              <span className="network-line line-a" />
              <span className="network-line line-b" />
              <span className="network-line line-c" />
              <span className="network-line line-d" />
            </div>
            <div className="card-footer-row">
              <p>
                {exact.format(capture.visibleFollowers.length)} verified
                follower identities visible in the first browser viewport.
              </p>
              <ArrowRight size={18} />
            </div>
          </article>

          <article className="bento-card velocity-card">
            <div className="card-heading">
              <span className="icon-well dark">
                <Pulse size={21} />
              </span>
              <span>Content velocity</span>
            </div>
            <div className="velocity-number">
              {compact.format(totalImpressions)}
              <small>captured impressions</small>
            </div>
            <div className="spark-bars" aria-hidden="true">
              {capture.posts.map((post) => (
                <span
                  key={post.id}
                  style={{
                    height: `${Math.max(18, (post.impressions / totalImpressions) * 128)}px`,
                  }}
                />
              ))}
            </div>
          </article>

          <article className="bento-card intent-card">
            <div className="card-heading">
              <span className="icon-well">
                <Target size={21} />
              </span>
              <span>Intent signal</span>
            </div>
            <div className="donut">
              <div>
                <strong>{engagementRate.toFixed(2)}%</strong>
                <span>visible engagement rate</span>
              </div>
            </div>
            <p>
              Bookmarks and replies are preserved beside public reach, not
              collapsed into a single opaque score.
            </p>
          </article>

          <article className="bento-card evidence-card">
            <div className="card-heading">
              <span className="icon-well">
                <Rows size={21} />
              </span>
              <span>Evidence ledger</span>
              <button className="icon-button" aria-label="Export evidence">
                <Export size={17} />
              </button>
            </div>
            <div className="evidence-table" role="table">
              <div className="evidence-row header" role="row">
                <span>Entity</span>
                <span>Source</span>
                <span>Precision</span>
                <span>Observed</span>
              </div>
              <div className="evidence-row" role="row">
                <span>@{capture.profile.username}</span>
                <span className="source-chip browser">Browser</span>
                <span>Abbreviated</span>
                <span>{capture.profile.followersDisplay}</span>
              </div>
              {capture.posts.slice(0, 3).map((post) => (
                <div className="evidence-row" role="row" key={post.id}>
                  <span>Post {post.id.slice(-5)}</span>
                  <span className="source-chip browser">Browser</span>
                  <span>Exact</span>
                  <span>{compact.format(post.impressions)}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="chapter rank-story" id="rankings">
        <div className="rank-copy">
          <p className="eyebrow">
            <Binoculars size={16} weight="fill" />
            Conversation intelligence
          </p>
          <h2>Read the market from the replies upward.</h2>
          <p>
            Each reply becomes its own measurable surface. SignalGraph keeps
            the author, relationship, and exact public metrics intact.
          </p>
          <div className="rank-media" aria-hidden="true">
            <span>Conversation</span>
            <strong>{capture.posts[0].id.slice(-8)}</strong>
            <div className="rank-media-line" />
          </div>
        </div>

        <div className="rank-cards">
          {capture.comments.map((comment, index) => (
            <article className="rank-card" key={comment.id}>
              <div className="rank-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="reply-profile">
                <span>{comment.authorUsername.slice(0, 2).toUpperCase()}</span>
                <div>
                  <p>@{comment.authorUsername}</p>
                  <small>Third-party reply</small>
                </div>
              </div>
              <blockquote>{comment.text}</blockquote>
              <div className="reply-metrics">
                <div>
                  <span>Impressions</span>
                  <strong>{exact.format(comment.impressions)}</strong>
                </div>
                <div>
                  <span>Likes</span>
                  <strong>{exact.format(comment.likes)}</strong>
                </div>
                <div>
                  <span>Replies</span>
                  <strong>{exact.format(comment.replies)}</strong>
                </div>
              </div>
              <a
                href={`https://x.com/${comment.authorUsername}/status/${comment.id}`}
                target="_blank"
                rel="noreferrer"
              >
                Inspect source
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter opportunity-chapter" id="opportunities">
        <div className="chapter-heading wide">
          <p className="eyebrow">
            <Sparkle size={16} weight="fill" />
            Find the opening
          </p>
          <h2>Turn the public graph into an actionable search strategy.</h2>
        </div>

        <div className="horizontal-accordion">
          {intelligenceModes.map((mode, index) => (
            <button
              key={mode.title}
              type="button"
              className={`accordion-panel ${activeMode === index ? "active" : ""}`}
              onClick={() => setActiveMode(index)}
              style={
                {
                  "--panel-image": `url(${mode.image})`,
                  "--panel-accent": mode.accent,
                } as React.CSSProperties
              }
              aria-expanded={activeMode === index}
            >
              <span className="panel-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="panel-copy">
                <strong>{mode.title}</strong>
                <span>{mode.description}</span>
              </span>
              <ArrowsOutLineHorizontal size={20} />
            </button>
          ))}
        </div>
      </section>

      <section className="chapter ingest-chapter" id="ingest">
        <div className="ingest-card">
          <div>
            <p className="eyebrow">
              <FunnelSimple size={16} weight="fill" />
              Start with one profile
            </p>
            <h2>Build the map from a live seed.</h2>
            <p>
              Profiles under 1,000 followers are preserved as audience edges.
              Profiles above the threshold become new research candidates.
            </p>
          </div>
          <form onSubmit={startIngestion}>
            <label htmlFor="handle">X handle</label>
            <div className="ingest-input">
              <span>@</span>
              <input
                id="handle"
                value={handle}
                onChange={(event) => setHandle(event.target.value)}
                placeholder="username"
                autoComplete="off"
              />
              <button type="submit" disabled={ingest.tone === "working"}>
                {ingest.tone === "working" ? "Indexing" : "Index profile"}
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
            <div className={`ingest-status ${ingest.tone}`}>
              <span />
              {ingest.message}
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">
            <Graph size={18} weight="bold" />
          </span>
          <span>SignalGraph</span>
        </div>
        <p>Public conversation intelligence with inspectable provenance.</p>
        <div>
          <a href="#index">Index</a>
          <a href="#rankings">Rankings</a>
          <a href="#ingest">Run ingestion</a>
        </div>
      </footer>
    </main>
  );
}
