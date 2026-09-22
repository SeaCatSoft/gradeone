/**
 * Deciding whether a typed answer is right.
 *
 * Kept free of every import so it can be run directly by
 * `backend/tools/test_marking.mjs`. It is the one piece of the assignment code
 * a student's mark depends on, and it is the piece nobody clicks through while
 * testing, so it gets its own tests rather than being trusted.
 */

export type QuestionKind = 'mcq' | 'numeric' | 'structured';

/**
 * true, false, or null for "cannot be judged".
 *
 * A structured question's answer is a MARK SCHEME, not a value — there is no
 * honest way to compare prose against it, so it returns null and the student
 * awards themselves the marks against it. Returning false there would record
 * every structured answer as wrong.
 */
export function judge(kind: QuestionKind, given: string, answer: string): boolean | null {
  const g = given.trim();
  if (kind === 'structured') return null;
  if (!g) return false;

  if (kind === 'mcq') {
    // Options are single letters; case and stray spaces are not the student's
    // mistake to be punished for.
    return g.toUpperCase() === answer.trim().toUpperCase();
  }

  // numeric: compare as numbers so '8.0', ' 8 ' and '8' all pass, and '1,200'
  // matches 1200. If either side is not a number after that -- an answer
  // written as a fraction, say -- fall back to comparing the text.
  const a = Number(answer.replace(/[, ]/g, ''));
  const b = Number(g.replace(/[, ]/g, ''));
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return g.toLowerCase() === answer.trim().toLowerCase();
  }
  // A hair of tolerance, so a value arrived at as 0.1 + 0.2 is not marked
  // wrong against 0.3.
  return Math.abs(a - b) < 1e-9;
}
