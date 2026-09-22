/**
 * Tests for src/lib/marking.ts — the one place a student's mark is decided.
 *
 *   npm run test:marking
 *
 * This exists because assignment marking is the part of the app that cannot be
 * checked by looking at it: a wrong answer marked correct looks exactly like a
 * right one, and nobody notices until a student is told they passed something
 * they failed.
 */
import { judge } from '../../src/lib/marking.ts';

let failures = 0;

function check(kind, given, answer, expected, why) {
  const got = judge(kind, given, answer);
  const ok = got === expected;
  if (!ok) {
    failures++;
    console.log(`  FAIL  ${kind} given=${JSON.stringify(given)} answer=${JSON.stringify(answer)}`);
    console.log(`        expected ${expected}, got ${got} — ${why}`);
  }
}

// ------------------------------------------------------------- mcq
check('mcq', 'B', 'B', true, 'the plain case');
check('mcq', 'b', 'B', true, 'case must not decide a mark');
check('mcq', ' B ', 'B', true, 'stray spaces are not the student’s mistake');
check('mcq', 'C', 'B', false, 'wrong option');
check('mcq', '', 'B', false, 'unanswered is wrong, not unmarkable');

// --------------------------------------------------------- numeric
check('numeric', '8', '8', true, 'the plain case');
check('numeric', '8.0', '8', true, 'trailing zero is the same number');
check('numeric', ' 8 ', '8', true, 'spaces trimmed');
check('numeric', '1200', '1,200', true, 'thousands separator in the answer');
check('numeric', '1,200', '1200', true, 'thousands separator in the response');
check('numeric', '-4', '-4', true, 'negatives');
check('numeric', '0.30000000000000004', '0.3', true, 'floating point drift tolerated');
check('numeric', '9', '8', false, 'wrong number');
check('numeric', '', '8', false, 'unanswered is wrong');
check('numeric', '0', '0', true, 'zero is an answer, not an absence');
// Falls back to text when either side is not a number.
check('numeric', '1/2', '1/2', true, 'non-numeric answers compare as text');
check('numeric', '1/3', '1/2', false, 'non-numeric answers still have to match');

// ------------------------------------------------------ structured
check('structured', 'Anything at all', 'A mark scheme', null, 'cannot be judged automatically');
check('structured', '', 'A mark scheme', null, 'empty is still unmarkable, not wrong');

if (failures) {
  console.log(`\n${failures} marking check(s) failed.`);
  process.exit(1);
}
console.log('all marking checks passed');
