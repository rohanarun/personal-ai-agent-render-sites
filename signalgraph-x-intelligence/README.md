# SignalGraph

SignalGraph is a provenance-aware profile, audience, post, and conversation
index for X. It combines the official X API with model-extracted browser
evidence for public fields that are visible in the product but unavailable to
the current API authorization.

## What the first version includes

- Profile lookup with a minimum follower threshold.
- Paginated follower graph ingestion.
- Profile post timelines and exact public engagement metrics.
- Optional recent-conversation, liking-user, and reposting-user collection.
- Durable profile, edge, post, metric-snapshot, evidence, and run records in PostgreSQL.
- A browser-evidence endpoint and extraction system prompt with field provenance.
- A responsive GSAP dashboard backed by a verified browser capture.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `X_BEARER_TOKEN` in `.env.local` to enable API ingestion. The dashboard
remains available without credentials and clearly identifies browser-captured
evidence. Set `DATABASE_URL` to a PostgreSQL connection string for durable
ingestion records.

## Validation

```bash
npm run build
npm test
```

The ingestion endpoint deliberately limits the number of profiles and pages in
one request. Unfinished work is recorded as a resumable cursor so a large graph
can be expanded without pretending a partial run is complete.
