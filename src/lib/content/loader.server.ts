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

const ROOT = 'content';

export type Objective = {
  code: string;
  statement: string;
  needsReview: boolean;
};

export type Flashcard = {
  id: string;
  objective: string;
  front: string;
  back: string;
  hint: string | null;
};

export type Question = {
  id: string;
  objective: string;
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
  modules: Module[];
};

const FM = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const OBJ_LINE = /^(\d{1,2}\.\d{1,2})\s+(\[\?\]\s*)?(\S.*)$/;

let cache: Subject | null = null;

function readObjectives(dir: string, moduleNo: number, slug: string): Objective[] {
  const file = path.join(dir, 'm' + moduleNo + '-' + slug + '.md');
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, 'utf8');
  const body = raw.slice((raw.match(FM) || [''])[0].length).replace(/<!--[\s\S]*?-->/g, '');
  const out: Objective[] = [];
  for (const ln of body.split(/\r?\n/)) {
    const m = ln.match(OBJ_LINE);
    if (!m) continue;
    out.push({ code: m[1], statement: m[3].trim(), needsReview: Boolean(m[2]) });
  }
  return out;
}

function readLessons(subjectDir: string, moduleNo: number, slug: string): Lesson[] {
  const dir = path.join(subjectDir, 'm' + moduleNo + '-' + slug);
  if (!fs.existsSync(dir)) return [];
  const lessons: Lesson[] = [];

  for (const name of fs.readdirSync(dir).filter((f: string) => f.endsWith('.md')).sort()) {
    const res = parseFile(path.join(dir, name));
    if (res.errors.length || !res.lesson) continue;
    const lesson = res.lesson;

    // Ids are stable only once content has been imported. Until then, fall
    // back to a deterministic key so review scheduling and exam sessions have
    // something consistent to hold on to between page loads.
    const key = (kind: string, i: number) => lesson.slug + ':' + kind + ':' + i;

    lessons.push({
      slug: lesson.slug,
      title: lesson.title,
      objectives: lesson.objectives,
      estMinutes: lesson.est_minutes,
      status: lesson.status,
      body: lesson.body_md,
      flashcards: res.flashcards.map((c, i: number) => ({
        id: c.id ?? key('c', i),
        objective: c.objective,
        front: c.front,
        back: c.back,
        hint: c.hint
      })),
      questions: res.questions.map((q, i: number) => ({
        id: q.id ?? key('q', i),
        objective: q.objective,
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

export function loadSubject(code = 'math'): Subject {
  if (cache) return cache;

  const subjectDir = path.join(ROOT, code);
  const spec = JSON.parse(fs.readFileSync(path.join(subjectDir, 'syllabus.json'), 'utf8'));
  const objDir = path.join(subjectDir, 'objectives');

  cache = {
    code: spec.subject,
    name: spec.name,
    syllabusCode: spec.syllabusCode,
    effectiveFrom: spec.effectiveFrom,
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
        objectives: readObjectives(objDir, m.number, t.slug),
        lessons: readLessons(subjectDir, m.number, t.slug)
      }))
    }))
  };
  return cache;
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
