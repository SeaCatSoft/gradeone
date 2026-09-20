import { loadSubject, listSubjects } from '$lib/content/loader.server';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

/**
 * The subjects the shell offers. Read from the content folder rather than
 * hard-coded, so adding a syllabus.json is all it takes for a subject to
 * appear in the sidebar and the tab bar.
 */
export const load: LayoutServerLoad = async () => ({
  subjects: listSubjects().map((code) => {
    const s = loadSubject(code);
    return {
      code,
      name: s.name,
      // A subject is only worth linking to once it has something to read.
      ready: s.modules.some((m) => m.topics.some((t) => t.lessons.length > 0))
    };
  })
});
