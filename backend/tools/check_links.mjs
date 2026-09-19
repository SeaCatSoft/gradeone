/**
 * Fail if any internal link skips the base path.
 *
 *   npm run links:check
 *
 * On GitHub Pages the site lives under /gradeone/, so "/math" 404s while
 * "{base}/math" works. The trap is that a hardcoded link works perfectly on
 * localhost, where base is empty -- it only breaks once deployed. This catches
 * it before then. It runs in the deploy workflow, so a bad link blocks the
 * deploy instead of shipping.
 */
import fs from 'node:fs';
import path from 'node:path';

const BAD = [
  { re: /href="\/(?!\/)/, why: 'use href="{base}/..." (import { base } from \'$app/paths\')' },
  { re: /goto\(\s*['"`]\/(?!\/)/, why: 'use goto(`${base}/...`)' },
  { re: /\$\{location\.origin\}\/(?!\/)/, why: 'use `${location.origin}${base}/...`' }
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    return /\.(svelte|ts|js)$/.test(e.name) ? [full] : [];
  });
}

let problems = 0;
for (const file of walk('src')) {
  fs.readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, i) => {
    for (const { re, why } of BAD) {
      if (re.test(line)) {
        console.error(`${file}:${i + 1}  ${line.trim()}\n    -> ${why}`);
        problems++;
      }
    }
  });
}

if (problems) {
  console.error(`\n${problems} link(s) bypass the base path and will 404 on GitHub Pages.`);
  process.exit(1);
}
console.log('All internal links go through the base path.');
