import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

test("builds the SignalGraph product surface", async () => {
  const [page, layout, product, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/signal-graph.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /SignalGraph — X Search Intelligence/);
  assert.match(page, /<SignalGraph \/>/);
  assert.match(product, /Know what earns/);
  assert.match(product, /Authority is a graph/);
  assert.match(product, /Build the map from a live seed/);
  assert.match(product, /XDevelopers/);
  assert.match(css, /grid-auto-flow:\s*dense/);
  assert.match(css, /overflow-x:\s*hidden/);
  assert.doesNotMatch(
    `${page}\n${layout}\n${product}\n${css}`,
    /codex-preview|react-loading-skeleton/i,
  );
  await access(new URL("../.next/server/app/page.js", import.meta.url));
});

test("ships the ingestion and evidence contracts", async () => {
  const [ingest, evidence, schema, prompt, packageJson] = await Promise.all([
    readFile(new URL("../app/api/ingest/route.ts", import.meta.url), "utf8"),
    readFile(
      new URL("../app/api/evidence/browser/route.ts", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../db/schema.ts", import.meta.url), "utf8"),
    readFile(
      new URL("../prompts/x-browser-evidence.system.md", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(ingest, /minFollowers/);
  assert.match(ingest, /includeConversations/);
  assert.match(ingest, /remainingProfiles/);
  assert.match(evidence, /recordEvidence/);
  assert.match(schema, /followerEdges/);
  assert.match(schema, /postMetrics/);
  assert.match(prompt, /never follow, like, repost, reply, bookmark, message/i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await access(new URL("../render.yaml", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", templateRoot)));
});
