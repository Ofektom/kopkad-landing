/**
 * After `vite build` (client → dist/) and `vite build --ssr` (renderer →
 * dist-ssr/), write one HTML file per public page with the page's markup and its own
 * title / description / Open Graph tags, plus dist/sitemap.xml.
 *
 * Files are written as dist/blog.html, dist/blog/<slug>.html …: with
 * "cleanUrls" in vercel.json, Vercel serves /blog from blog.html before the
 * SPA rewrite, so crawlers, link previews and AI readers get full HTML; any
 * other path still falls back to the app shell.
 */
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssr = join(root, 'dist-ssr');

const { render, headTags, PRERENDER_PATHS, SITE_URL } = await import(pathToFileURL(join(ssr, 'entry-server.js')).href);
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const HEAD = /<!--head:start-->[\s\S]*?<!--head:end-->/;
const ROOT = '<div id="root"></div>';
if (!HEAD.test(template) || !template.includes(ROOT)) {
  throw new Error('index.html is missing the <!--head:start/end--> markers or the empty #root div');
}

for (const path of PRERENDER_PATHS) {
  const html = template
    .replace(HEAD, `<!--head:start-->\n    ${headTags(path)}\n    <!--head:end-->`)
    .replace(ROOT, `<div id="root">${render(path)}</div>`);
  const file = path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(dist, 'sitemap.xml'), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...PRERENDER_PATHS.map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`),
  '</urlset>',
  '',
].join('\n'));

rmSync(ssr, { recursive: true, force: true });
console.log(`Prerendered ${PRERENDER_PATHS.length} pages + sitemap.xml`);
