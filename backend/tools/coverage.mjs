/**
 * How much of the syllabus actually has content yet.
 *
 *   npm run content:coverage
 *
 * Works entirely from the markdown, so it answers the question that matters
 * for this project -- content is the bottleneck, not the platform -- without
 * needing a database. Reads the objective files as the denominator and the
 * lesson files as the numerator.
 */
import fs from 'node:fs';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import { parseFile } from './parse_content.mjs';

const ROOT = process.argv[2] || 'content';
const FM = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const OBJ_LINE = /^(\d{1,2}\.\d{1,2})\s+(\[\?\]\s*)?(\S.*)$/;

function walk(dir, keepObjectives) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full, keepObjectives);
    if (!e.name.endsWith('.md')) return [];
    const isObj = full.split(path.sep).includes('objectives');
    return isObj === keepObjectives ? [full] : [];
  });
}

// Denominator: the syllabus spine.
const topics = new Map();
for (const file of walk(ROOT, true)) {
  const raw = fs.readFileSync(file, 'utf8');
  const fm = yamlLoad((raw.match(FM) || [, ''])[1]) || {};
  const body = raw.slice((raw.match(FM) || [''])[0].length).replace(/<!--[\s\S]*?-->/g, '');
  const objectives = [];
  let flagged = 0;
  for (const ln of body.split(/\r?\n/)) {
    const m = ln.match(OBJ_LINE);
    if (!m) continue;
    objectives.push(m[1]);
    if (m[2]) flagged++;
  }
  topics.set(fm.topic, {
    subject: String(fm.subject || 'MATH').toLowerCase(),
    module: fm.module, slug: fm.topic, objectives, flagged,
    covered: new Set(), cards: 0, questions: 0, lessons: 0
  });
}

// Numerator: what the lesson files actually teach and drill.
for (const file of walk(ROOT, false)) {
  const res = parseFile(file);
  if (!res.lesson) continue;
  const t = topics.get(res.lesson.topic);
  if (!t) {
    console.log('  (skipped ' + path.basename(file) + ': unknown topic "' + res.lesson.topic + '")');
    continue;
  }
  t.lessons++;
  t.cards += res.flashcards.length;
  t.questions += res.questions.length;
  for (const c of res.lesson.objectives) t.covered.add(c);
}

const rows = [...topics.values()].sort(
  (a, b) => a.subject.localeCompare(b.subject) || a.module - b.module ||
            a.slug.localeCompare(b.slug)
);

const bar = (done, total) => {
  const w = 12;
  const n = total ? Math.round((done / total) * w) : 0;
  return '[' + '#'.repeat(n) + '.'.repeat(w - n) + ']';
};

console.log('');
console.log('  SUBJ  MOD  TOPIC                           OBJ  DONE  ' +
            '             LESSONS  CARDS  QNS  FLAGGED');
console.log('  ' + '-'.repeat(94));

let tObj = 0, tCov = 0, tCards = 0, tQs = 0, tFlag = 0, tLessons = 0;
for (const r of rows) {
  const total = r.objectives.length;
  const done = r.objectives.filter((c) => r.covered.has(c)).length;
  tObj += total; tCov += done; tCards += r.cards;
  tQs += r.questions; tFlag += r.flagged; tLessons += r.lessons;
  console.log(
    '  ' + r.subject.toUpperCase().padEnd(4) + '  M' + r.module + '   ' +
    r.slug.padEnd(30) + ' ' +
    String(total).padStart(3) + '  ' +
    (done + '/' + total).padStart(5) + '  ' +
    bar(done, total) + '  ' +
    String(r.lessons).padStart(7) + '  ' +
    String(r.cards).padStart(5) + '  ' +
    String(r.questions).padStart(3) + '  ' +
    (r.flagged ? String(r.flagged).padStart(7) : '      -')
  );
}

console.log('  ' + '-'.repeat(94));
console.log('       ' + 'TOTAL'.padEnd(32) + ' ' +
  String(tObj).padStart(3) + '  ' + (tCov + '/' + tObj).padStart(5) + '  ' +
  bar(tCov, tObj) + '  ' + String(tLessons).padStart(7) + '  ' +
  String(tCards).padStart(5) + '  ' + String(tQs).padStart(3) + '  ' +
  String(tFlag).padStart(7));

const pct = tObj ? Math.round((tCov / tObj) * 100) : 0;
console.log('\n  ' + pct + '% of objectives have content. ' +
            tFlag + ' objective(s) still need a review pass.\n');
