import { loadSubject } from '$lib/content/loader.server';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  const subject = loadSubject('math');

  // Send only what the overview draws. Shipping every lesson body to render a
  // list of topic cards would bloat the page for no gain.
  return {
    name: subject.name,
    syllabusCode: subject.syllabusCode,
    effectiveFrom: subject.effectiveFrom,
    modules: subject.modules.map((m) => ({
      number: m.number,
      title: m.title,
      minHours: m.minHours,
      mcqCount: m.topics.reduce((a, t) => a + t.mcqCount, 0),
      topics: m.topics.map((t) => ({
        slug: t.slug,
        number: t.number,
        title: t.title,
        mcqCount: t.mcqCount,
        objectiveCodes: t.objectives.map((o) => o.code),
        objectiveCount: t.objectives.length,
        needsReview: t.objectives.filter((o) => o.needsReview).length,
        lessonCount: t.lessons.length,
        cardCount: t.lessons.reduce((a, l) => a + l.flashcards.length, 0),
        questionCount: t.lessons.reduce((a, l) => a + l.questions.length, 0)
      }))
    }))
  };
};
