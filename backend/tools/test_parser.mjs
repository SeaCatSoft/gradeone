/**
 * Regression test for the content parser.
 *
 * fixtures/broken.md packs one instance of every mistake the format is meant
 * to catch. A parser that stops catching one of them fails here rather than
 * silently importing bad content months later.
 */
import { parseFile } from './parse_content.mjs';

const res = parseFile(new URL('fixtures/broken.md', import.meta.url).pathname.replace(/^\//, ''));
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

console.log('\n' + (failed ? failed + ' check(s) FAILED' : 'all parser checks passed'));
process.exit(failed ? 1 : 0);
