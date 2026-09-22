import { error } from '@sveltejs/kit';
import { loadSubject, findTopic, allTopics, listSubjects, hasSubject } from '$lib/content/loader.server';
import { renderInline, renderMarkdown } from '$lib/content/render';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
  listSubjects().flatMap((subject) =>
    allTopics(loadSubject(subject))
      .filter((t) => t.lessons.length > 0)
      .map((t) => ({ subject, topic: t.slug }))
  );

export const load: PageServerLoad = async ({ params }) => {
  if (!hasSubject(params.subject)) throw error(404, 'No such subject');
  const subject = loadSubject(params.subject);
  const topic = findTopic(subject, params.topic);
  if (!topic) throw error(404, 'No such topic');

  // Both faces are rendered here rather than in the browser: the maths is the
  // same every time, so there is no reason to ship KaTeX work to the client.
  const cards = topic.lessons.flatMap((l) =>
    l.flashcards.map((c) => ({
      id: c.id,
      objective: c.objective,
      objectiveKey: c.objectiveKey,
      front: renderInline(c.front),
      back: renderMarkdown(c.back),
      hint: c.hint ? renderInline(c.hint) : null,
      lesson: l.title
    }))
  );

  return { subject: params.subject, topic: { slug: topic.slug, title: topic.title, module: topic.module }, cards };
};
