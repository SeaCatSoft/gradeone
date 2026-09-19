/**
 * Student progress: mastery, flashcard scheduling, XP, streaks, and lessons read.
 *
 * Stored in localStorage and synced to Supabase by $lib/sync. The shapes
 * mirror the tables in migrations 004 and 005 — objective_mastery,
 * flashcard_reviews, xp_events, streaks — so the database is a backing store,
 * not a second model.
 *
 * Every read is wrapped: a private window, cleared site data, or a browser set
 * to block storage must degrade to "no progress yet", never to a broken page.
 */
import { browser } from '$app/environment';

// v2: v1 keyed mastery on the bare objective code, which collided across
// modules ("3.1" is Sets, Relations Functions and Graphs 1, and Geometry and
// Trigonometry 2). Bumping abandons the mis-keyed data rather than silently
// carrying three merged topics forward. See $lib/keys.
const KEY = 'gradeone.progress.v2';

export type Mastery = { mastery: number; attempts: number; correct: number; lastSeen: string | null };
export type Review = { ease: number; intervalDays: number; reps: number; lapses: number; dueAt: string };
export type XpEvent = { amount: number; reason: string; at: string };

export type Progress = {
  mastery: Record<string, Mastery>;
  reviews: Record<string, Review>;
  xp: XpEvent[];
  streak: { current: number; longest: number; lastActive: string | null };
  /** lesson key -> local day it was last read. Stops re-reading paying twice a day. */
  lessons: Record<string, string>;
};

const EMPTY: Progress = {
  mastery: {}, reviews: {}, xp: [], lessons: {},
  streak: { current: 0, longest: 0, lastActive: null }
};

export function load(): Progress {
  if (!browser) return structuredClone(EMPTY);
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(EMPTY);
    return { ...structuredClone(EMPTY), ...JSON.parse(raw) };
  } catch {
    return structuredClone(EMPTY);
  }
}

export function save(p: Progress): void {
  if (!browser) return;
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // Storage full or blocked. Progress is lost, but the session continues.
  }
}

/**
 * The student's own calendar day, as YYYY-MM-DD.
 *
 * NOT toISOString(), which is UTC. The Caribbean sits 4-5 hours behind UTC, so
 * a UTC day ends at 8pm local time: a student revising at 9pm had it counted as
 * tomorrow, broke their streak by studying in the evening, and saw today's
 * rings reset mid-session. Days are the student's days.
 */
export function localDay(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/* ------------------------------------------------------------------ mastery */

/**
 * Mastery is a rolling average weighted toward recent attempts, so an old bad
 * run fades rather than following a student forever. A correct answer pulls
 * toward 100, a wrong one toward 0, by a third of the remaining distance.
 */
export function recordAnswer(p: Progress, objective: string, correct: boolean): Progress {
  const m = p.mastery[objective] ?? { mastery: 0, attempts: 0, correct: 0, lastSeen: null };
  const target = correct ? 100 : 0;
  p.mastery[objective] = {
    mastery: Math.round(m.mastery + (target - m.mastery) / 3),
    attempts: m.attempts + 1,
    correct: m.correct + (correct ? 1 : 0),
    lastSeen: new Date().toISOString()
  };
  // Wrong answers log a zero-XP event. They earn nothing, but they are practice,
  // and the Practice ring counts effort rather than only success — a student
  // grinding through hard questions should see the ring fill.
  addXp(p, correct ? 10 : 0, correct ? 'question_correct' : 'question_wrong');
  touchStreak(p);
  return p;
}

export function topicMastery(p: Progress, objectiveKeys: string[]): number {
  if (!objectiveKeys.length) return 0;
  const total = objectiveKeys.reduce((a, c) => a + (p.mastery[c]?.mastery ?? 0), 0);
  return Math.round(total / objectiveKeys.length);
}

/* ------------------------------------------------------------------ lessons */

/** Returns true if this read earned XP (first time today for this lesson). */
export function markLessonRead(p: Progress, lessonKey: string): boolean {
  const today = localDay();
  if (p.lessons[lessonKey] === today) return false;
  p.lessons[lessonKey] = today;
  addXp(p, 15, 'lesson_read');
  touchStreak(p);
  return true;
}

/* -------------------------------------------------------------- flashcards */

/**
 * SM-2. Grade is 0-5; below 3 counts as a lapse and the card starts over.
 * Intervals: 1 day, then 6, then multiplied by the card's easiness factor.
 */
export function gradeCard(p: Progress, cardId: string, grade: number): Progress {
  const r = p.reviews[cardId] ?? { ease: 2.5, intervalDays: 0, reps: 0, lapses: 0, dueAt: new Date().toISOString() };

  if (grade < 3) {
    r.reps = 0;
    r.intervalDays = 1;
    r.lapses += 1;
  } else {
    r.reps += 1;
    if (r.reps === 1) r.intervalDays = 1;
    else if (r.reps === 2) r.intervalDays = 6;
    else r.intervalDays = Math.round(r.intervalDays * r.ease);
  }

  // The standard SM-2 easiness update, floored at 1.3 so a card can never
  // collapse to being asked forever.
  r.ease = Math.max(1.3, r.ease + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));

  const due = new Date();
  due.setDate(due.getDate() + r.intervalDays);
  r.dueAt = due.toISOString();

  p.reviews[cardId] = r;
  addXp(p, grade >= 3 ? 5 : 2, 'flashcard_review');
  touchStreak(p);
  return p;
}

export function isDue(p: Progress, cardId: string): boolean {
  const r = p.reviews[cardId];
  if (!r) return true;                    // never seen -- always due
  return new Date(r.dueAt) <= new Date();
}

export function dueCount(p: Progress, cardIds: string[]): number {
  return cardIds.filter((id) => isDue(p, id)).length;
}

/* ------------------------------------------------------------ xp & streaks */

export function addXp(p: Progress, amount: number, reason: string): void {
  p.xp.push({ amount, reason, at: new Date().toISOString() });
}

export function totalXp(p: Progress): number {
  return p.xp.reduce((a, e) => a + e.amount, 0);
}

function touchStreak(p: Progress): void {
  const today = localDay();
  if (p.streak.lastActive === today) return;

  const y = new Date();
  y.setDate(y.getDate() - 1);
  const wasYesterday = p.streak.lastActive === localDay(y);

  p.streak.current = wasYesterday ? p.streak.current + 1 : 1;
  p.streak.longest = Math.max(p.streak.longest, p.streak.current);
  p.streak.lastActive = today;
  addXp(p, 20, 'streak_day');
}

/**
 * A streak is only alive if the last active day was today or yesterday.
 * The stored number is not reset until the next activity, so the display has
 * to check — otherwise a streak broken last week still shows as 12 days.
 */
export function liveStreak(p: Progress): number {
  const last = p.streak.lastActive;
  if (!last) return 0;
  const y = new Date();
  y.setDate(y.getDate() - 1);
  return last === localDay() || last === localDay(y) ? p.streak.current : 0;
}

/**
 * Level from total XP, on a widening curve so early levels come fast and
 * later ones mean something. Level n needs 100 * n * (n-1) / 2 XP.
 */
export function level(xp: number): { level: number; into: number; needed: number } {
  let lvl = 1;
  while (100 * lvl * (lvl + 1) / 2 <= xp) lvl++;
  const floor = 100 * (lvl - 1) * lvl / 2;
  const ceil = 100 * lvl * (lvl + 1) / 2;
  return { level: lvl, into: xp - floor, needed: ceil - floor };
}
