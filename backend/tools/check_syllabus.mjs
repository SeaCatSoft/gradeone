/**
 * Assert the three places the syllabus structure lives still agree.
 *
 *   npm run syllabus:check
 *
 * The structure is stated in migration 007 (what the database gets), in
 * content/math/syllabus.json (what the app renders), and implicitly in the
 * objective files (one per topic). Three copies is two too many, but the SQL
 * has to stand alone and the app cannot parse SQL at build time -- so instead
 * of a generator, this fails loudly the moment they drift apart.
 */
import fs from 'node:fs';
import path from 'node:path';

const SQL = 'backend/migrations/007_seed_math_structure.sql';
const JSON_ = 'content/math/syllabus.json';
const OBJ_DIR = 'content/math/objectives';

const problems = [];
const fail = (m) => problems.push(m);

const spec = JSON.parse(fs.readFileSync(JSON_, 'utf8'));
const sql = fs.readFileSync(SQL, 'utf8');

// Rows look like: (3, 'Sets', 'sets', 3, null, 'Graphs, ...'),
const ROW = /\(\s*(\d+)\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*(\d+)\s*,/g;
const sqlTopics = new Map();
let m;
while ((m = ROW.exec(sql)) !== null) {
  sqlTopics.set(m[3], { number: Number(m[1]), title: m[2], mcq: Number(m[4]) });
}

const jsonTopics = new Map();
for (const mod of spec.modules) {
  for (const t of mod.topics) {
    jsonTopics.set(t.slug, { ...t, module: mod.number });
  }
}

// 1. Same set of topics, same weightings.
for (const [slug, t] of jsonTopics) {
  const s = sqlTopics.get(slug);
  if (!s) {
    fail('Topic "' + slug + '" is in syllabus.json but not seeded by 007.');
    continue;
  }
  if (s.mcq !== t.mcqCount) {
    fail('Topic "' + slug + '" has mcqCount ' + t.mcqCount +
         ' in syllabus.json but ' + s.mcq + ' in 007.');
  }
  if (s.title !== t.title) {
    fail('Topic "' + slug + '" is titled "' + t.title + '" in syllabus.json but "' +
         s.title + '" in 007.');
  }
}
for (const slug of sqlTopics.keys()) {
  if (!jsonTopics.has(slug)) fail('Topic "' + slug + '" is seeded by 007 but missing from syllabus.json.');
}

// 2. Every topic has an objective file, and nothing extra is lying around.
const objFiles = fs.existsSync(OBJ_DIR) ? fs.readdirSync(OBJ_DIR).filter((f) => f.endsWith('.md')) : [];
for (const [slug, t] of jsonTopics) {
  const expected = 'm' + t.module + '-' + slug + '.md';
  if (!objFiles.includes(expected)) {
    fail('No objective file ' + path.join(OBJ_DIR, expected) + ' for topic "' + slug + '".');
  }
}
for (const f of objFiles) {
  const slug = f.replace(/^m\d-/, '').replace(/\.md$/, '');
  if (!jsonTopics.has(slug)) fail('Objective file ' + f + ' has no matching topic in syllabus.json.');
}

// 3. The assessment grid still adds up. This is the check that matters most:
//    practice exams sample by these weightings, so a wrong total quietly
//    changes the shape of every mock paper.
let grand = 0;
for (const mod of spec.modules) {
  const total = mod.topics.reduce((a, t) => a + t.mcqCount, 0);
  grand += total;
  if (total !== spec.papers.p1.perModule) {
    fail('Module ' + mod.number + ' MCQs total ' + total + ', expected ' + spec.papers.p1.perModule + '.');
  }
}
if (grand !== spec.papers.p1.items) {
  fail('Paper 01 totals ' + grand + ' items, expected ' + spec.papers.p1.items + '.');
}

if (problems.length) {
  console.error('\nSyllabus structure has drifted:\n');
  for (const p of problems) console.error('  ' + p);
  console.error('');
  process.exit(1);
}

console.log('Syllabus structure agrees across 007, syllabus.json and the objective files.');
console.log('  ' + jsonTopics.size + ' topics, ' + grand + ' Paper 01 items, ' +
            spec.papers.p1.perModule + ' per module.');
