import { error, json } from '@sveltejs/kit';
import {
  loadSubject, findTopic, allTopics, listSubjects, hasSubject
} from '$lib/content/loader.server';
import { renderInline, renderMarkdown } from '$lib/content/render';
import type { RequestHandler, EntryGenerator } from './$types';

/**
 * One topic's questions, fully rendered: /bank/math/sets.json
 *
 * Fetched when an assignment is actually rendered — only for the topics it
 * draws on, rather than the whole subject. See the sibling index route for why
 * that split exists.
 *
 * ON ANSWERS BEING IN HERE
 *
 * They already ship in every prerendered practice page — see the note in
 * [topic]/practice/+page.server.ts — so this exposes nothing new. It does mean
 * assignments built from the markdown bank are marked in the browser and a
 * determined student could look an answer up, which is why the app presents
 * them as homework rather than as exam conditions. Marking that could survive
 * a motivated student needs the content in the database and an RPC to mark
 * against it, which is a different piece of work.
 */
export const prerender = true;

export const entries: EntryGenerator = () =>
  listSubjects().flatMap((subject) =>
    allTopics(loadSubject(subject))
      .filter((t) => t.lessons.length > 0)
      .map((t) => ({ subject, topic: t.slug }))
  );

export const GET: RequestHandler = ({ params }) => {
  if (!hasSubject(params.subject)) throw error(404, 'No such subject');
  const subject = loadSubject(params.subject);
  const topic = findTopic(subject, params.topic);
  if (!topic) throw error(404, 'No such topic');

  const questions = topic.lessons.flatMap((l) =>
    l.questions.map((q) => ({
      key: q.id,
      objective: q.objective,
      objectiveKey: q.objectiveKey,
      kind: q.kind,
      marks: q.marks,
      difficulty: q.difficulty,
      stem: renderMarkdown(q.stem),
      options: q.options?.map((o) => ({ key: o.key, text: renderInline(o.text) })) ?? null,
      answer: q.answer,
      // A structured question's "answer" is a mark scheme written in markdown
      // with LaTeX in it, so it has to be rendered like any other prose. mcq
      // and numeric answers are a bare letter or number compared as strings,
      // so they stay raw.
      answerHtml: q.kind === 'structured' ? renderMarkdown(q.answer) : null,
      working: q.working ? renderMarkdown(q.working) : null
    }))
  );

  return json({ subject: subject.code, topic: topic.slug, title: topic.title, questions });
};
