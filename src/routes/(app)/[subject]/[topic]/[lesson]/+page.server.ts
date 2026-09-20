import { error } from '@sveltejs/kit';
import { loadSubject, findTopic, allTopics, listSubjects, hasSubject } from '$lib/content/loader.server';
import { renderMarkdown } from '$lib/content/render';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
  listSubjects().flatMap((subject) =>
    allTopics(loadSubject(subject)).flatMap((t) =>
      t.lessons.map((l) => ({ subject, topic: t.slug, lesson: l.slug }))
    )
  );

export const load: PageServerLoad = async ({ params }) => {
  if (!hasSubject(params.subject)) throw error(404, 'No such subject');
  const subject = loadSubject(params.subject);
  const topic = findTopic(subject, params.topic);
  if (!topic) throw error(404, 'No such topic');

  const index = topic.lessons.findIndex((l) => l.slug === params.lesson);
  if (index === -1) throw error(404, 'No such lesson');
  const lesson = topic.lessons[index];

  // Rendered on the server so the page is complete HTML on first paint --
  // the point of choosing SSR, since lesson pages are the search entry point.
  const html = renderMarkdown(lesson.body);

  const byCode = new Map(topic.objectives.map((o) => [o.code, o]));

  return {
    subject: params.subject,
    topic: { slug: topic.slug, title: topic.title },
    module: topic.module,
    lesson: {
      slug: lesson.slug,
      title: lesson.title,
      estMinutes: lesson.estMinutes,
      status: lesson.status,
      html,
      cardCount: lesson.flashcards.length,
      questionCount: lesson.questions.length
    },
    objectives: lesson.objectives.map((code) => ({
      code,
      statement: byCode.get(code)?.statement ?? ''
    })),
    prev: index > 0 ? { slug: topic.lessons[index - 1].slug, title: topic.lessons[index - 1].title } : null,
    next: index < topic.lessons.length - 1
      ? { slug: topic.lessons[index + 1].slug, title: topic.lessons[index + 1].title }
      : null
  };
};
