import { error } from '@sveltejs/kit';
import { loadSubject, findTopic, allTopics, listSubjects, hasSubject } from '$lib/content/loader.server';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
  listSubjects().flatMap((subject) =>
    allTopics(loadSubject(subject)).map((t) => ({ subject, topic: t.slug }))
  );

export const load: PageServerLoad = async ({ params }) => {
  if (!hasSubject(params.subject)) throw error(404, 'No such subject');
  const subject = loadSubject(params.subject);
  const topic = findTopic(subject, params.topic);
  if (!topic) throw error(404, 'No such topic');

  const mod = subject.modules.find((m) => m.number === topic.module)!;

  return {
    subject: params.subject,
    module: { number: mod.number, title: mod.title },
    topic: {
      slug: topic.slug,
      title: topic.title,
      mcqCount: topic.mcqCount,
      p2Marks: topic.p2Marks,
      p2Group: topic.p2Group
    },
    objectives: topic.objectives,
    lessons: topic.lessons.map((l) => ({
      slug: l.slug,
      title: l.title,
      objectives: l.objectives,
      estMinutes: l.estMinutes,
      status: l.status,
      cardIds: l.flashcards.map((c) => c.id),
      questionCount: l.questions.length
    }))
  };
};
