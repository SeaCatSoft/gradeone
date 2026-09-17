/**
 * Import the syllabus spine from content/<subject>/objectives/*.md.
 *
 *   npm run objectives:import -- --dry
 *   npm run objectives:import
 *
 * These files are the source of truth for the objectives table. They were
 * machine-extracted from the syllabus PDF and then corrected by hand, so this
 * upserts on (topic, code) -- correcting an objective's wording must never
 * create a second row, because lessons, flashcards, questions and every
 * student's mastery record all point at the original id.
 *
 * An objective still carrying a [?] marker imports with needs_review = true
 * and stays hidden from students until the marker is removed.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { load as yamlLoad } from 'js-yaml';

const ROOT = 'content';
const DRY = process.argv.includes('--dry');

const URL_ = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL_ || !KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env first.');
  process.exit(1);
}
const db = createClient(URL_, KEY, { auth: { persistSession: false } });

const FM = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const LINE = /^(\d{1,2}\.\d{1,2})\s+(\[\?\]\s*)?(\S.*)$/;

function findFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === 'objectives'
      ? fs.readdirSync(full).filter((f) => f.endsWith('.md')).map((f) => path.join(full, f))
      : findFiles(full);
    return [];
  });
}

const files = findFiles(ROOT);
if (!files.length) {
  console.log('No objective files found.');
  process.exit(0);
}

let totalRows = 0;
let flagged = 0;

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file);

  const fmMatch = raw.match(FM);
  if (!fmMatch) {
    console.error('ERROR ' + rel + '  no frontmatter block.');
    process.exit(1);
  }
  const fm = yamlLoad(fmMatch[1]) || {};
  if (!fm.subject || !fm.topic) {
    console.error('ERROR ' + rel + '  frontmatter needs both "subject" and "topic".');
    process.exit(1);
  }

  // Strip HTML comments so the review instructions inside them are never read
  // as objectives.
  const body = raw.slice(fmMatch[0].length).replace(/<!--[\s\S]*?-->/g, '');

  const rows = [];
  let position = 0;
  for (const ln of body.split(/\r?\n/)) {
    const m = ln.match(LINE);
    if (!m) continue;
    const needsReview = Boolean(m[2]);
    if (needsReview) flagged++;
    rows.push({
      code: m[1],
      statement: m[3].trim().replace(/\s+/g, ' '),
      needs_review: needsReview,
      position: position++
    });
  }

  const codes = rows.map((r) => r.code);
  const dupes = codes.filter((c, i) => codes.indexOf(c) !== i);
  if (dupes.length) {
    console.error('ERROR ' + rel + '  duplicate objective codes: ' + [...new Set(dupes)].join(', '));
    process.exit(1);
  }

  console.log(rel + '  ' + rows.length + ' objectives, ' +
              rows.filter((r) => r.needs_review).length + ' still flagged');
  totalRows += rows.length;
  if (DRY) continue;

  const { data: topic, error: te } = await db
    .from('topics').select('id').eq('slug', fm.topic).limit(1).single();
  if (te || !topic) {
    console.error('ERROR ' + rel + '  topic "' + fm.topic + '" not in database. Run migration 007.');
    process.exit(1);
  }

  const { error } = await db
    .from('objectives')
    .upsert(rows.map((r) => ({ ...r, topic_id: topic.id })), { onConflict: 'topic_id,code' });
  if (error) {
    console.error('ERROR ' + rel + '  ' + error.message);
    process.exit(1);
  }
}

console.log('\n' + (DRY ? 'Dry run. ' : '') + totalRows + ' objectives across ' +
            files.length + ' files, ' + flagged + ' still marked [?].');
if (flagged) {
  console.log('Flagged objectives import but stay hidden from students until reviewed.');
}
