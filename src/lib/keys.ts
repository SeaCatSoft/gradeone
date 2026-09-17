/**
 * Stable keys for anything a student's progress can point at.
 *
 * WHY THESE ARE PATHS, NOT BARE CODES
 *
 * Objective codes restart at 1.1 inside every topic, and every module has a
 * topic 1, 2, 3... So "3.1" is Sets in Module 1, Relations Functions and
 * Graphs 1 in Module 2, and Geometry and Trigonometry 2 in Module 3. Keying
 * progress on the bare code silently merges three unrelated topics into one
 * mastery score — invisible while only one topic has content, and corrupting
 * as soon as a second one ships.
 *
 * WHY THEY ARE STRINGS, NOT DATABASE IDS
 *
 * Content lives in markdown and prerenders; the database holds only student
 * data. Keying progress on `objectives.id` would force content into the
 * database purely to have ids to point at, and would break every student's
 * progress on a re-import. A syllabus objective code is already the most
 * stable identifier in the project — which is why "never renumber an
 * objective" is a rule in docs/authoring.md.
 */

/** e.g. "math/sets/3.1" */
export function objectiveKey(subject: string, topicSlug: string, code: string): string {
  return `${subject}/${topicSlug}/${code}`;
}

/** e.g. "math/sets/what-is-a-set/c0" */
export function cardKey(subject: string, topicSlug: string, lessonSlug: string, i: number): string {
  return `${subject}/${topicSlug}/${lessonSlug}/c${i}`;
}

/** e.g. "math/sets/what-is-a-set/q0" */
export function questionKey(subject: string, topicSlug: string, lessonSlug: string, i: number): string {
  return `${subject}/${topicSlug}/${lessonSlug}/q${i}`;
}
