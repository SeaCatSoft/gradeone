/**
 * Load the syllabus and all content from the markdown on disk.
 *
 * This is the ONLY module that knows where content comes from. Today that is
 * the markdown files, read at build time — which suits the public pages, since
 * lessons prerender to static HTML and rank in search without a database round
 * trip. When Supabase holds the content too, this module changes and nothing
 * else does.
 *
 * Student progress never comes from here. That is per-user and lives in
 * `$lib/progress`.
 */
import fs from 'node:fs';
import path from 'node:path';
// The authoring CLI and the app must agree on what a content file means, so
// both use the same parser rather than each having its own idea.
import { parseFile } from '../../../backend/tools/parse_content.mjs';
import { objectiveKey, cardKey, questionKey } from '$lib/keys';

const ROOT = 'content';

export type Objective = {
  code: string;
  /** Fully-qualified, e.g. "math/sets/3.1". See $lib/keys. */
  key: string;
  statement: string;
  needsReview: boolean;
};

export type Flashcard = {
  id: string;
  /** Printed code, e.g. "3.1" — for display only. */
  objective: string;
  /** Fully-qualified key, e.g. "math/sets/3.1" — what progress is stored against. */
  objectiveKey: string;
  front: string;
  back: string;
  hint: string | null;
};

export type Question = {
  id: string;
  objective: string;
  objectiveKey: string;
  kind: 'mcq' | 'numeric' | 'structured';
  marks: number;
  difficulty: number;
  stem: string;
  options: { key: string; text: string }[] | null;
  answer: string;
  working: string | null;
};

export type Lesson = {
  slug: string;
  title: string;
  objectives: string[];
  estMinutes: number | null;
  status: string;
  body: string;
  flashcards: Flashcard[];
  questions: Question[];
};

export type Topic = {
  module: number;
  number: number;
  title: string;
  slug: string;
  mcqCount: number;
  p2Marks: number | null;
  p2Group: string | null;
  objectives: Objective[];
  lessons: Lesson[];
};

export type Module = {
  number: number;
  title: string;
  minHours: number;
  topics: Topic[];
};

export type Subject = {
  code: string;
  name: string;
  syllabusCode: string;
  effectiveFrom: string;
  /** One clause about how this syllabus is organised, for the subject page. */
  moduleNote: string | null;
  /** Total Paper 01 items, used where a page quotes "x of y questions". */
  p1Items: number;
  modules: Module[];
};

const FM = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const OBJ_LINE = /^(\d{1,2}\.\d{1,2})\s+(\[\?\]\s*)?(\S.*)$/;

// One entry per subject. A single shared slot used to ignore the code it was
// asked for, so the second subject would have been served the first one's
// content.
const cache = new Map<string, Subject>();

function readObjectives(
  dir: string, subject: string, moduleNo: number, slug: string
): Objective[] {
  const file = path.join(dir, 'm' + moduleNo + '-' + slug + '.md');
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, 'utf8');
  const body = raw.slice((raw.match(FM) || [''])[0].length).replace(/<!--[\s\S]*?-->/g, '');
  const out: Objective[] = [];
  for (const ln of body.split(/\r?\n/)) {
    const m = ln.match(OBJ_LINE);
    if (!m) continue;
    out.push({
      code: m[1],
      key: objectiveKey(subject, slug, m[1]),
      statement: m[3].trim(),
      needsReview: Boolean(m[2])
    });
  }
  return out;
}

function readLessons(
  subjectDir: string, subject: string, moduleNo: number, slug: string
): Lesson[] {
  const dir = path.join(subjectDir, 'm' + moduleNo + '-' + slug);
  if (!fs.existsSync(dir)) return [];
  const lessons: Lesson[] = [];

  for (const name of fs.readdirSync(dir).filter((f: string) => f.endsWith('.md')).sort()) {
    const res = parseFile(path.join(dir, name));
    if (res.errors.length || !res.lesson) continue;
    const lesson = res.lesson;

    lessons.push({
      slug: lesson.slug,
      title: lesson.title,
      objectives: lesson.objectives,
      estMinutes: lesson.est_minutes,
      status: lesson.status,
      body: lesson.body_md,
      flashcards: res.flashcards.map((c, i: number) => ({
        // Deliberately NOT the database id even once content is imported:
        // progress keys must not change when content is re-imported.
        id: cardKey(subject, slug, lesson.slug, i),
        objective: c.objective,
        objectiveKey: objectiveKey(subject, slug, c.objective),
        front: c.front,
        back: c.back,
        hint: c.hint
      })),
      questions: res.questions.map((q, i: number) => ({
        id: questionKey(subject, slug, lesson.slug, i),
        objective: q.objective,
        objectiveKey: objectiveKey(subject, slug, q.objective),
        kind: q.kind,
        marks: q.marks,
        difficulty: q.difficulty,
        stem: q.stem_md,
        options: q.options,
        answer: q.answer,
        working: q.working_md
      }))
    });
  }
  return lessons;
}

/** Subject codes that have content, in the order their folders are listed. */
export function listSubjects(): string[] {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory() && fs.existsSync(path.join(ROOT, e.name, 'syllabus.json')))
    .map((e) => e.name);
}

export function hasSubject(code: string): boolean {
  return listSubjects().includes(code);
}

export function loadSubject(code = 'math'): Subject {
  const hit = cache.get(code);
  if (hit) return hit;

  const subjectDir = path.join(ROOT, code);
  const spec = JSON.parse(fs.readFileSync(path.join(subjectDir, 'syllabus.json'), 'utf8'));
  const objDir = path.join(subjectDir, 'objectives');

  const subject: Subject = {
    code: spec.subject,
    name: spec.name,
    syllabusCode: spec.syllabusCode,
    effectiveFrom: spec.effectiveFrom,
    moduleNote: spec.moduleNote ?? null,
    p1Items: spec.papers?.p1?.items ?? 0,
    modules: spec.modules.map((m: any) => ({
      number: m.number,
      title: m.title,
      minHours: m.minHours,
      topics: m.topics.map((t: any) => ({
        module: m.number,
        number: t.number,
        title: t.title,
        slug: t.slug,
        mcqCount: t.mcqCount,
        p2Marks: t.p2Marks,
        p2Group: t.p2Group,
        objectives: readObjectives(objDir, code, m.number, t.slug),
        lessons: readLessons(subjectDir, code, m.number, t.slug)
      }))
    }))
  };
  cache.set(code, subject);
  return subject;
}

export function allTopics(subject: Subject): Topic[] {
  return subject.modules.flatMap((m) => m.topics);
}

export function findTopic(subject: Subject, slug: string): Topic | undefined {
  return allTopics(subject).find((t) => t.slug === slug);
}

/** Every question in the subject, for building practice papers. */
export function allQuestions(subject: Subject): (Question & { topic: string })[] {
  return allTopics(subject).flatMap((t) =>
    t.lessons.flatMap((l) => l.questions.map((q) => ({ ...q, topic: t.slug })))
  );
}

export function allFlashcards(subject: Subject): (Flashcard & { topic: string })[] {
  return allTopics(subject).flatMap((t) =>
    t.lessons.flatMap((l) => l.flashcards.map((c) => ({ ...c, topic: t.slug })))
  );
}
