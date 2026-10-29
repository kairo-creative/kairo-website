import { readFile, access } from "node:fs/promises";
import assert from "node:assert/strict";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
let checked = 0;
for (const route of ["", "/about"]) {
  const html = await readFile(`out${route}/index.html`, "utf8");
  const urls = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith("/"));
  for (const url of new Set(urls)) {
    assert.ok(!base || url.startsWith(`${base}/`), `Missing base path: ${url}`);
    let path = url.slice(base.length).split(/[?#]/)[0];
    if (path.endsWith("/")) path += "index.html";
    await access(`out${path}`);
    checked++;
  }
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, "One h1 required");
  assert.match(html, /lang="nl"/);
  assert.match(html, /id="main-navigation"/);
  assert.match(html, /href="[^" ]*about\//);
  if (!route) assert.match(html.replace(/<!--.*?-->/g, ""), /01\s*\/\s*01/);
  else {
    assert.match(html, /Jill Sances/i);
    assert.match(html, /1 PETRUS 4:10/);
    assert.equal((html.match(/class="value-card"/g) || []).length, 4);
  }
}
console.log(
  `PASS: both pages, ${checked} asset and route references, headings, navigation and About sections.`,
);
