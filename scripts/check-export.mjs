import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
const html = await readFile("out/index.html", "utf8");
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const urls = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)]
  .map((match) => match[1])
  .filter((url) => url.startsWith("/"));
let checked = 0;
for (const url of new Set(urls)) {
  assert.ok(!base || url.startsWith(`${base}/`), `Missing base path: ${url}`);
  const path = url.slice(base.length).split("?")[0];
  await access(`out${path}`);
  checked++;
}
assert.equal((html.match(/<h1[ >]/g) || []).length, 1, "One h1 required");
assert.match(html, /lang="nl"/);
assert.match(html.replace(/<!--.*?-->/g, ""), /01\s*\/\s*01/);
assert.match(html, /id="main-navigation"/);
console.log(
  `PASS: ${checked} exported asset references, base path, Dutch language, heading, review count and navigation.`,
);
