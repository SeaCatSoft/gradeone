import { error } from '@sveltejs/kit';
import { loadSubject, listSubjects, hasSubject } from '$lib/content/loader.server';
import type { PageServerLoad, EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
  listSubjects().map((subject) => ({ subject }));

export const load: PageServerLoad = async ({ params }) => {
  if (!hasSubject(params.subject)) throw error(404, 'No such subject');
  const subject = loadSubject(params.subject);

  // Send only what the overview draws. Shipping every lesson body to render a
  // list of topic cards would bloat the page for no gain.
  return {
    subject: params.subject,
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
        // Fully-qualified keys, not bare codes: "3.1" names three different
        // topics across the three modules. See $lib/keys.
        objectiveKeys: t.objectives.map((o) => o.key),
        objectiveCount: t.objectives.length,
        needsReview: t.objectives.filter((o) => o.needsReview).length,
        lessonCount: t.lessons.length,
        cardCount: t.lessons.reduce((a, l) => a + l.flashcards.length, 0),
        questionCount: t.lessons.reduce((a, l) => a + l.questions.length, 0)
      }))
    }))
  };
};
