/**
 * Serve build/ the way GitHub Pages will: under a subfolder, with extensionless
 * URLs resolving to .html, and 404.html for anything missing.
 *
 *   npm run preview:pages        -> http://localhost:5176/gradeone/
 *
 * `vite preview` serves from the root and so cannot catch a link that forgets
 * the base path. A plain static server does not map /math to math.html the way
 * Pages does. This mimics both, so what works here works deployed.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('build');
const BASE = (process.env.BASE_PATH ?? '/gradeone').replace(/\/$/, '');
const PORT = Number(process.env.PORT ?? 5176);

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.txt': 'text/plain'
};

function send(res, status, file) {
  res.writeHead(status, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}

function isFile(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

http.createServer((req, res) => {
  const url = decodeURIComponent((req.url ?? '/').split('?')[0]);

  // Outside the base path there is nothing, exactly as on Pages.
  if (url !== BASE && !url.startsWith(BASE + '/')) {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end(`Not under ${BASE}/ -- this is what an unprefixed link does on GitHub Pages.`);
    return;
  }

  const rel = url.slice(BASE.length) || '/';
  const target = path.join(ROOT, rel);
  if (!target.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }

  for (const candidate of [target, target + '.html', path.join(target, 'index.html')]) {
    if (isFile(candidate)) return send(res, 200, candidate);
  }
  send(res, 404, path.join(ROOT, '404.html'));
}).listen(PORT, () => {
  console.log(`Serving build/ as GitHub Pages would: http://localhost:${PORT}${BASE}/`);
});
