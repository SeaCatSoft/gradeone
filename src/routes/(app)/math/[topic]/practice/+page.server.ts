import { error } from '@sveltejs/kit';
import { loadSubject, findTopic, allTopics } from '$lib/content/loader.server';
import { renderInline, renderMarkdown } from '$lib/content/render';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
  allTopics(loadSubject('math'))
    .filter((t) => t.lessons.length > 0)
    .map((t) => ({ topic: t.slug }));

export const load: PageServerLoad = async ({ params }) => {
  const subject = loadSubject('math');
  const topic = findTopic(subject, params.topic);
  if (!topic) throw error(404, 'No such topic');

  // NOTE: answers are sent to the browser. That is fine for practice, where a
  // determined student peeking only cheats themselves, and it keeps the page
  // prerenderable. A real timed mock paper must mark server-side instead --
  // see the note on the questions table in migration 002.
  const questions = topic.lessons.flatMap((l) =>
    l.questions.map((q) => ({
      id: q.id,
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
      // and numeric answers are a bare letter or number and are compared as
      // strings, so they stay raw.
      answerHtml: q.kind === 'structured' ? renderMarkdown(q.answer) : null,
      working: q.working ? renderMarkdown(q.working) : null
    }))
  );

  return {
    topic: { slug: topic.slug, title: topic.title, mcqCount: topic.mcqCount, module: topic.module },
    questions
  };
};
