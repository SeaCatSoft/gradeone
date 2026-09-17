/**
 * Validate every content markdown file, and report problems with line numbers.
 *
 *   npm run content:check
 *
 * Exits non-zero if anything is an error, so this can gate an import. Warnings
 * never block -- they are things worth a second look, not things that are wrong.
 */
import fs from 'node:fs';
import path from 'node:path';
import { parseFile } from './parse_content.mjs';

const ROOT = process.argv[2] || 'content';

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    // Objective files are the syllabus spine and have their own shape.
    if (!e.name.endsWith('.md')) return [];
    if (full.split(path.sep).includes('objectives')) return [];
    return [full];
  });
}

const files = walk(ROOT);
if (!files.length) {
  console.log('No content files found under ' + ROOT + '/ yet.');
  process.exit(0);
}

let errors = 0;
let warnings = 0;
let cards = 0;
let questions = 0;
const slugs = new Map();

for (const file of files) {
  const res = parseFile(file);
  const rel = path.relative(process.cwd(), file);

  // A duplicate slug inside a topic would collide on import, where the error
  // is far harder to read than it is here.
  if (res.lesson) {
    const key = res.lesson.topic + '/' + res.lesson.slug;
    if (slugs.has(key)) {
      res.errors.push({
        file: path.basename(file), line: 2,
        msg: 'Lesson slug "' + res.lesson.slug + '" is already used by ' + slugs.get(key) + '.'
      });
    } else {
      slugs.set(key, rel);
    }
    cards += res.flashcards.length;
    questions += res.questions.length;
  }

  if (res.errors.length || res.warnings.length) {
    console.log('\n' + rel);
    for (const e of res.errors) console.log('  ERROR  line ' + e.line + '  ' + e.msg);
    for (const w of res.warnings) console.log('  warn   line ' + w.line + '  ' + w.msg);
  }
  errors += res.errors.length;
  warnings += res.warnings.length;
}

console.log(
  '\n' + files.length + ' file(s), ' + cards + ' flashcards, ' + questions +
  ' questions, ' + errors + ' error(s), ' + warnings + ' warning(s).'
);
process.exit(errors ? 1 : 0);
