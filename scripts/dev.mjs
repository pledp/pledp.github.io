#!/usr/bin/env node
// Wraps `next dev` and watches content/posts, since markdown files are read
// via fs at request time and are otherwise invisible to Turbopack's watcher.
// Saving a post rewrites src/lib/posts-hmr.js, which posts.js imports, giving
// the dev server a tracked dependency to invalidate and refresh the browser.
//
// Uses polling rather than fs.watch: this repo lives under /mnt/c (a Windows
// drive mounted via WSL's DrvFs), which doesn't emit inotify events, so
// fs.watch silently never fires here.
import { spawn } from "child_process";
import { readdirSync, statSync, writeFileSync } from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "content", "posts");
const sentinelPath = path.join(process.cwd(), "src", "lib", "posts-hmr.js");
const POLL_INTERVAL_MS = 500;

function touchSentinel() {
  writeFileSync(
    sentinelPath,
    `export const postsUpdatedAt = ${Date.now()};\n`
  );
}

function getPostsSignature() {
  return readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => `${f}:${statSync(path.join(postsDir, f)).mtimeMs}`)
    .join("|");
}

touchSentinel();

const child = spawn("next", ["dev", "--turbopack"], {
  stdio: "inherit",
  shell: true,
});

let lastSignature = getPostsSignature();
const interval = setInterval(() => {
  const signature = getPostsSignature();
  if (signature !== lastSignature) {
    lastSignature = signature;
    touchSentinel();
  }
}, POLL_INTERVAL_MS);

function shutdown() {
  clearInterval(interval);
  child.kill();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
child.on("exit", (code) => process.exit(code ?? 0));
