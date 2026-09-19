import { loadSubject, allTopics } from '$lib/content/loader.server';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  const subject = loadSubject('math');

  // Only what Today draws: which topics have something to study, their card
  // ids (for "due now"), objective keys (for mastery rings) and first lesson.
  const topics = allTopics(subject)
    .filter((t) => t.lessons.length > 0)
    .map((t) => ({
      slug: t.slug,
      title: t.title,
      module: t.module,
      lessonCount: t.lessons.length,
      firstLesson: { slug: t.lessons[0].slug, title: t.lessons[0].title },
      cardIds: t.lessons.flatMap((l) => l.flashcards.map((c) => c.id)),
      questionCount: t.lessons.reduce((a, l) => a + l.questions.length, 0),
      objectiveKeys: t.objectives.map((o) => o.key)
    }));

  return { topics };
};
