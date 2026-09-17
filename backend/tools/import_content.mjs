/**
 * Import reviewed markdown into Supabase.
 *
 *   npm run content:import -- --dry      # show what would change, touch nothing
 *   npm run content:import               # apply
 *   npm run content:import -- --prune    # also delete rows no file claims
 *
 * Three rules this follows, all of them about not losing your review work:
 *
 * 1. NOTHING IMPORTS IF ANYTHING FAILS VALIDATION. A half-imported topic is
 *    worse than an unimported one, because you cannot see what landed.
 *
 * 2. IDs ARE WRITTEN BACK INTO THE MARKDOWN. On first import a row gets an id
 *    and the file gains `id: 42` in frontmatter, or `<!-- id:42 -->` on a
 *    flashcard heading. On the next import those rows are UPDATED rather than
 *    duplicated -- so a student's spaced-repetition schedule survives you
 *    rewording a card.
 *
 * 3. DELETION IS OPT-IN. A card removed from a file leaves its row in place
 *    and is merely reported, unless --prune is passed. A typo that empties a
 *    section must not silently destroy content students are mid-way through.
 *
 * Needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env. The service role
 * bypasses RLS, which is why this is a local script and never ships to the
 * browser.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { parseFile } from './parse_content.mjs';

const ROOT = process.argv.find((a) => !a.startsWith('--') && a !== process.argv[0] && a !== process.argv[1]) || 'content';
const DRY = process.argv.includes('--dry');
const PRUNE = process.argv.includes('--prune');

const URL_ = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL_ || !KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env first.');
  process.exit(1);
}
const db = createClient(URL_, KEY, { auth: { persistSession: false } });

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    if (!e.name.endsWith('.md')) return [];
    if (full.split(path.sep).includes('objectives')) return [];
    return [full];
  });
}

/* ---------------------------------------------------------------- resolve */

async function loadMaps(subjectCode) {
  const { data: subj, error: e1 } = await db
    .from('subjects').select('id').eq('code', subjectCode).single();
  if (e1) throw new Error('Subject ' + subjectCode + ' not found. Run migration 007 first.');

  const { data: topics, error: e2 } = await db
    .from('topics').select('id, slug, module_id, modules!inner(subject_id)')
    .eq('modules.subject_id', subj.id);
  if (e2) throw e2;

  const { data: objectives, error: e3 } = await db
    .from('objectives').select('id, code, topic_id');
  if (e3) throw e3;

  const topicBySlug = new Map(topics.map((t) => [t.slug, t.id]));
  // Objective codes repeat across modules (every module has a topic "3"), so
  // the key must include the topic, never the code alone.
  const objByTopicCode = new Map(objectives.map((o) => [o.topic_id + ':' + o.code, o.id]));
  return { topicBySlug, objByTopicCode };
}

/* ------------------------------------------------------------- write-back */

function stampFrontmatter(file, id) {
  let raw = fs.readFileSync(file, 'utf8');
  if (/^id:\s*\d+\s*$/m.test(raw)) return;
  raw = raw.replace(/^---\r?\n/, '---\nid: ' + id + '\n');
  fs.writeFileSync(file, raw);
}

function stampHeading(file, headingText, id) {
  let raw = fs.readFileSync(file, 'utf8');
  const lines = raw.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('### ') && lines[i].includes(headingText) &&
        !/<!--\s*id:/.test(lines[i])) {
      lines[i] = lines[i].trimEnd() + '  <!-- id:' + id + ' -->';
      fs.writeFileSync(file, lines.join('\n'));
      return;
    }
  }
}

/* ---------------------------------------------------------------- the run */

const files = walk(ROOT);
if (!files.length) {
  console.log('No content files under ' + ROOT + '/.');
  process.exit(0);
}

const parsed = [];
let errors = 0;
for (const file of files) {
  const res = parseFile(file);
  for (const e of res.errors) {
    console.error('ERROR ' + path.relative(process.cwd(), file) + ':' + e.line + '  ' + e.msg);
    errors++;
  }
  if (!res.errors.length) parsed.push({ file, res });
}
if (errors) {
  console.error('\n' + errors + ' error(s). Nothing imported — fix these and run again.');
  process.exit(1);
}

const subjects = [...new Set(parsed.map((p) => p.res.lesson.subject))];
if (subjects.length !== 1) {
  console.error('Mixed subjects in one run: ' + subjects.join(', ') + '. Import one at a time.');
  process.exit(1);
}

const { topicBySlug, objByTopicCode } = await loadMaps(subjects[0]);

let created = 0;
let updated = 0;
const seenCards = new Set();
const seenQs = new Set();

for (const { file, res } of parsed) {
  const rel = path.relative(process.cwd(), file);
  const topicId = topicBySlug.get(res.lesson.topic);
  if (!topicId) {
    console.error('ERROR ' + rel + '  topic "' + res.lesson.topic + '" is not in the database.');
    process.exit(1);
  }

  const objId = (code) => {
    const id = objByTopicCode.get(topicId + ':' + code);
    if (!id) {
      console.error('ERROR ' + rel + '  objective ' + code +
                    ' does not exist under topic "' + res.lesson.topic +
                    '". Import the objective files first.');
      process.exit(1);
    }
    return id;
  };

  const lessonRow = {
    topic_id: topicId,
    title: res.lesson.title,
    slug: res.lesson.slug,
    body_md: res.lesson.body_md,
    est_minutes: res.lesson.est_minutes,
    status: res.lesson.status,
    source_note: res.lesson.source_note,
    updated_at: new Date().toISOString()
  };

  console.log((res.lesson.id ? 'update ' : 'create ') + rel +
              '  (' + res.flashcards.length + ' cards, ' + res.questions.length + ' questions)');
  if (DRY) continue;

  let lessonId = res.lesson.id;
  if (lessonId) {
    const { error } = await db.from('lessons').update(lessonRow).eq('id', lessonId);
    if (error) throw error;
    updated++;
  } else {
    const { data, error } = await db.from('lessons').insert(lessonRow).select('id').single();
    if (error) throw error;
    lessonId = data.id;
    stampFrontmatter(file, lessonId);
    created++;
  }

  await db.from('lesson_objectives').delete().eq('lesson_id', lessonId);
  await db.from('lesson_objectives').insert(
    res.lesson.objectives.map((c) => ({ lesson_id: lessonId, objective_id: objId(c) }))
  );

  for (const c of res.flashcards) {
    const row = {
      objective_id: objId(c.objective), front: c.front, back: c.back,
      hint: c.hint, status: res.lesson.status, source_note: res.lesson.source_note
    };
    if (c.id) {
      const { error } = await db.from('flashcards').update(row).eq('id', c.id);
      if (error) throw error;
      seenCards.add(Number(c.id));
      updated++;
    } else {
      const { data, error } = await db.from('flashcards').insert(row).select('id').single();
      if (error) throw error;
      seenCards.add(data.id);
      stampHeading(file, c.front, data.id);
      created++;
    }
  }

  for (const q of res.questions) {
    const row = {
      objective_id: objId(q.objective), kind: q.kind,
      paper: q.kind === 'structured' ? 'p2' : 'p1',
      stem_md: q.stem_md, options: q.options, answer: q.answer,
      tolerance: q.tolerance, working_md: q.working_md, marks: q.marks,
      difficulty: q.difficulty, status: res.lesson.status,
      source_note: res.lesson.source_note
    };
    if (q.id) {
      const { error } = await db.from('questions').update(row).eq('id', q.id);
      if (error) throw error;
      seenQs.add(Number(q.id));
      updated++;
    } else {
      const { data, error } = await db.from('questions').insert(row).select('id').single();
      if (error) throw error;
      seenQs.add(data.id);
      stampHeading(file, q.stem_md.split('\n')[0].slice(0, 30), data.id);
      created++;
    }
  }
}

/* --------------------------------------------------------------- orphans */

if (!DRY) {
  const topicIds = [...new Set(parsed.map((p) => topicBySlug.get(p.res.lesson.topic)))];
  const { data: objs } = await db.from('objectives').select('id').in('topic_id', topicIds);
  const objIds = (objs || []).map((o) => o.id);

  for (const [table, seen] of [['flashcards', seenCards], ['questions', seenQs]]) {
    const { data } = await db.from(table).select('id').in('objective_id', objIds);
    const orphans = (data || []).map((r) => r.id).filter((id) => !seen.has(id));
    if (!orphans.length) continue;

    if (PRUNE) {
      await db.from(table).delete().in('id', orphans);
      console.log('pruned ' + orphans.length + ' ' + table + ' no file claims');
    } else {
      console.log('\n' + orphans.length + ' ' + table + ' in the database are not in any file ' +
                  '(ids ' + orphans.slice(0, 8).join(', ') + (orphans.length > 8 ? '...' : '') + ').');
      console.log('Left alone. Pass --prune to delete them.');
    }
  }
}

console.log('\n' + (DRY ? 'Dry run. ' : '') + created + ' created, ' + updated + ' updated.');
