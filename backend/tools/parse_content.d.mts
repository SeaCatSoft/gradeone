/**
 * Types for the content parser.
 *
 * parse_content.mjs stays plain JavaScript because the authoring CLI runs it
 * directly under Node with no build step. This declaration gives the SvelteKit
 * app real types for it instead of `any`, so the loader cannot quietly drift
 * from what the parser actually returns.
 */

export type ParseIssue = { file: string; line: number; msg: string };

export type ParsedFlashcard = {
  objective: string;
  front: string;
  back: string;
  hint: string | null;
  id: string | null;
};

export type ParsedQuestion = {
  objective: string;
  kind: 'mcq' | 'numeric' | 'structured';
  marks: number;
  difficulty: number;
  stem_md: string;
  options: { key: string; text: string }[] | null;
  answer: string;
  tolerance: number | null;
  working_md: string | null;
  id: string | null;
};

export type ParsedLesson = {
  subject: string;
  topic: string;
  slug: string;
  title: string;
  objectives: string[];
  est_minutes: number | null;
  status: string;
  source_note: string | null;
  body_md: string;
  id: string | null;
};

export type ParseResult = {
  errors: ParseIssue[];
  warnings: ParseIssue[];
  /** Absent when the file failed before a lesson could be assembled. */
  lesson?: ParsedLesson;
  flashcards: ParsedFlashcard[];
  questions: ParsedQuestion[];
};

export function parseFile(file: string): ParseResult;
