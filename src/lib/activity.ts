import { browser } from '$app/environment';
import { localDay, type Progress } from '$lib/progress';

/**
 * Today's three rings, in the manner of Apple Fitness: Learn, Review, Practice.
 *
 * Every count is derived from the XP event log, which already syncs — so the
 * rings agree on every device a student signs in on, with no new table and no
 * second source of truth for "what did I do today".
 *
 * The goals are deliberately small. A ring a student can close on a school
 * night is a habit; a ring they can only close on a free Saturday is a guilt
 * trip. Closing all three is roughly twenty minutes.
 */
export const GOALS = { learn: 1, review: 10, practice: 5 } as const;

export type Ring = 'learn' | 'review' | 'practice';

const REASON_TO_RING: Record<string, Ring> = {
  lesson_read: 'learn',
  flashcard_review: 'review',
  question_correct: 'practice',
  question_wrong: 'practice'
};

export function todayCounts(p: Progress, day = localDay()): Record<Ring, number> {
  const out = { learn: 0, review: 0, practice: 0 };
  for (const e of p.xp) {
    const ring = REASON_TO_RING[e.reason];
    if (ring && localDay(new Date(e.at)) === day) out[ring] += 1;
  }
  return out;
}

export function todayXp(p: Progress, day = localDay()): number {
  return p.xp.reduce((a, e) => a + (localDay(new Date(e.at)) === day ? e.amount : 0), 0);
}

/** 0..1 per ring, allowed past 1 so an over-achieved ring can show it. */
export function ringProgress(counts: Record<Ring, number>): Record<Ring, number> {
  return {
    learn: counts.learn / GOALS.learn,
    review: counts.review / GOALS.review,
    practice: counts.practice / GOALS.practice
  };
}

/* ------------------------------------------------------------ recent lesson */

const RECENT = 'gradeone.recent.v1';

export type Recent = { topic: string; topicTitle: string; lesson: string; lessonTitle: string; at: string };

/** Remembered per device on purpose: "where was I" means on this screen. */
export function setRecent(r: Omit<Recent, 'at'>): void {
  if (!browser) return;
  try { localStorage.setItem(RECENT, JSON.stringify({ ...r, at: new Date().toISOString() })); } catch { /* ignore */ }
}

export function getRecent(): Recent | null {
  if (!browser) return null;
  try { return JSON.parse(localStorage.getItem(RECENT) ?? 'null'); } catch { return null; }
}
