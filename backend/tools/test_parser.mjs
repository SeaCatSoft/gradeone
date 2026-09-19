/**
 * Regression test for the content parser.
 *
 * fixtures/broken.md packs one instance of every mistake the format is meant
 * to catch. A parser that stops catching one of them fails here rather than
 * silently importing bad content months later.
 */
import { fileURLToPath } from 'node:url';
import { parseFile } from './parse_content.mjs';

// fileURLToPath, not `.pathname.replace(/^\//, '')`. That hack strips the
// leading slash, which is right for "/C:/..." on Windows and turns Linux's
// absolute "/home/runner/..." into a relative path that does not exist -- it
// passed on Raymond's machine and failed the first CI run.
const fixture = (name) => fileURLToPath(new URL('fixtures/' + name, import.meta.url));

const res = parseFile(fixture('broken.md'));
const msgs = res.errors.map((e) => e.msg).join('\n');

const expected = [
  ['unquoted objective code', /must be quoted in frontmatter/],
  ['objectives spanning topics', /span more than one topic/],
  ['flashcard without a code', /must start with an objective code/],
  ['flashcard without a back', /has no answer text/],
  ['unknown question kind', /Unknown question kind/],
  ['mcq answer not among options', /is not one of the options/],
  ['non-numeric numeric answer', /must be a number/]
];

let failed = 0;
for (const [name, re] of expected) {
  const ok = re.test(msgs);
  console.log((ok ? '  ok   ' : '  FAIL ') + name);
  if (!ok) failed++;
}

const warns = res.warnings.map((w) => w.msg).join('\n');
for (const [name, re] of [
  ['warns on stub lesson body', /very short/],
  ['warns on missing working', /No \*\*Working/],
  ['warns on undrilled objective', /no flashcard or question/]
]) {
  const ok = re.test(warns);
  console.log((ok ? '  ok   ' : '  FAIL ') + name);
  if (!ok) failed++;
}

// A ### inside "## Lesson" is a subheading, not an item delimiter. Treating it
// as one truncated every lesson at its first subheading -- silently, with no
// error, because the dropped lines went into entries nothing ever read. These
// assert the prose after a subheading actually survives.
const sub = parseFile(fixture('subheadings.md'));
const body = (sub.lesson && sub.lesson.body_md) || '';

for (const [name, needle] of [
  ['keeps prose after a lesson subheading', 'SENTINEL_AFTER_SUBHEADING'],
  ['keeps prose after a second subheading', 'SENTINEL_SECOND_SUBHEADING'],
  ['keeps the subheading itself', '### A subheading'],
  ['keeps inline svg in a lesson', '<svg'],
  ['keeps tables in a lesson', '| a | b |']
]) {
  const ok = body.includes(needle);
  console.log((ok ? '  ok   ' : '  FAIL ') + name);
  if (!ok) failed++;
}

const clean = sub.errors.length === 0;
console.log((clean ? '  ok   ' : '  FAIL ') + 'subheadings fixture parses without errors');
if (!clean) failed++;

const items = sub.flashcards.length === 1 && sub.questions.length === 1;
console.log((items ? '  ok   ' : '  FAIL ') + 'still splits flashcards and questions on ###');
if (!items) failed++;

console.log('\n' + (failed ? failed + ' check(s) FAILED' : 'all parser checks passed'));
process.exit(failed ? 1 : 0);
