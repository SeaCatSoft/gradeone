import { error, json } from '@sveltejs/kit';
import { loadSubject, allTopics, listSubjects, hasSubject } from '$lib/content/loader.server';
import type { RequestHandler, EntryGenerator } from './$types';

/**
 * A light index of one subject's question bank: /bank/math.json
 *
 * WHY THIS EXISTS
 *
 * Questions live in markdown and are baked into each topic's page data. That
 * serves a student practising one topic, but a teacher building an assignment
 * needs to search across the whole subject, and an assignment stores only
 * question KEYS, so something has to resolve a key back into a question.
 *
 * WHY IT IS ONLY AN INDEX
 *
 * The first version of this file shipped every rendered stem and answer in one
 * document. Information Technology came to 472 KB and Mathematics to 3.1 MB --
 * KaTeX markup is bulky -- which is an absurd thing to download on a phone in
 * order to tick six boxes. So this carries a plain-text preview and the
 * metadata needed to search and choose, and the full rendered question lives in
 * /bank/<subject>/<topic>.json, fetched only for the topics actually used.
 *
 * No answers here: nothing that only picks questions needs them.
 */
export const prerender = true;

export const entries: EntryGenerator = () => listSubjects().map((subject) => ({ subject }));

export const GET: RequestHandler = ({ params }) => {
  if (!hasSubject(params.subject)) throw error(404, 'No such subject');
  const subject = loadSubject(params.subject);

  const topics = allTopics(subject)
    .filter((t) => t.lessons.length > 0)
    .map((t) => ({
      slug: t.slug,
      title: t.title,
      module: t.module,
      questions: t.lessons.flatMap((l) =>
        l.questions.map((q) => ({
          key: q.id,
          objective: q.objective,
          kind: q.kind,
          marks: q.marks,
          difficulty: q.difficulty,
          lesson: l.title,
          // Plain text, so the picker can list and search without rendering a
          // stem it is not showing. Markdown and LaTeX punctuation stripped:
          // "$x^2$" reads as "x2", which is enough to recognise a question by.
          preview: q.stem.replace(/[#*`$\\]/g, '').replace(/\s+/g, ' ').trim().slice(0, 140)
        }))
      )
    }))
    .filter((t) => t.questions.length > 0);

  return json({ subject: subject.code, name: subject.name, topics });
};
