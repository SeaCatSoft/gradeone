import { supabase } from '$lib/supabase';
import { browser } from '$app/environment';
import { load as loadLocal, save as saveLocal, type Progress } from '$lib/progress';
import { stats } from '$lib/stats.svelte';

/**
 * Move progress between localStorage and Supabase.
 *
 * THE RULE THAT MATTERS: signing up must never cost a student the work they
 * did before they had an account. Someone can use Grade One anonymously for a
 * week and then decide to sign up; if that wiped their streak and mastery it
 * would be the worst possible moment to punish them.
 *
 * So on first sign-in:
 *   - account has no progress  -> push whatever is in this browser up
 *   - account has progress     -> pull it down, replacing local
 *
 * The second case is deliberately "remote wins" rather than a merge. Merging
 * two spaced-repetition schedules has no obviously correct answer, and quietly
 * picking one would produce review dates neither device asked for. The honest
 * behaviour is last-signed-in-device-wins, and the account page says so.
 */

const XP_CURSOR = 'gradeone.xpSynced.v1';

function xpCursor(): number {
  if (!browser) return 0;
  try { return Number(localStorage.getItem(XP_CURSOR) ?? 0) || 0; } catch { return 0; }
}
function setXpCursor(n: number) {
  if (!browser) return;
  try { localStorage.setItem(XP_CURSOR, String(n)); } catch { /* ignore */ }
}

/* ------------------------------------------------------------------ pull */

export async function pull(userId: string): Promise<Progress | null> {
  const db = supabase();
  if (!db) return null;

  const [mastery, reviews, xp, streak] = await Promise.all([
    db.from('objective_mastery').select('*').eq('user_id', userId),
    db.from('flashcard_reviews').select('*').eq('user_id', userId),
    db.from('xp_events').select('amount, reason, created_at').eq('user_id', userId)
      .order('created_at', { ascending: true }),
    db.from('streaks').select('*').eq('user_id', userId).maybeSingle()
  ]);

  if (mastery.error || reviews.error || xp.error) return null;

  const p: Progress = {
    mastery: {},
    reviews: {},
    // Which lessons were read today is per-device bookkeeping to stop the same
    // lesson paying XP twice in a day; it is not synced and starts empty.
    lessons: {},
    xp: (xp.data ?? []).map((e) => ({
      amount: e.amount, reason: e.reason, at: e.created_at
    })),
    streak: streak.data
      ? {
          current: streak.data.current_days,
          longest: streak.data.longest_days,
          lastActive: streak.data.last_active_date
        }
      : { current: 0, longest: 0, lastActive: null }
  };

  for (const r of mastery.data ?? []) {
    p.mastery[r.objective_key] = {
      mastery: Number(r.mastery),
      attempts: r.attempts,
      correct: r.correct,
      lastSeen: r.last_seen_at
    };
  }
  for (const r of reviews.data ?? []) {
    p.reviews[r.card_key] = {
      ease: Number(r.ease),
      intervalDays: r.interval_days,
      reps: r.reps,
      lapses: r.lapses,
      dueAt: r.due_at
    };
  }
  return p;
}

/** Does this account have anything stored yet? */
export async function isEmptyRemote(userId: string): Promise<boolean> {
  const db = supabase();
  if (!db) return true;
  const { count } = await db
    .from('objective_mastery')
    .select('objective_key', { count: 'exact', head: true })
    .eq('user_id', userId);
  const { count: cards } = await db
    .from('flashcard_reviews')
    .select('card_key', { count: 'exact', head: true })
    .eq('user_id', userId);
  return (count ?? 0) === 0 && (cards ?? 0) === 0;
}

/* ------------------------------------------------------------------ push */

export async function push(userId: string, p: Progress): Promise<void> {
  const db = supabase();
  if (!db) return;

  const mastery = Object.entries(p.mastery).map(([objective_key, m]) => ({
    user_id: userId,
    objective_key,
    mastery: m.mastery,
    attempts: m.attempts,
    correct: m.correct,
    last_seen_at: m.lastSeen
  }));

  const reviews = Object.entries(p.reviews).map(([card_key, r]) => ({
    user_id: userId,
    card_key,
    ease: r.ease,
    interval_days: r.intervalDays,
    reps: r.reps,
    lapses: r.lapses,
    due_at: r.dueAt
  }));

  // Supabase query builders are thenable but are not real Promises, so the
  // array is typed PromiseLike and awaited with Promise.all, which accepts both.
  const jobs: PromiseLike<unknown>[] = [];
  if (mastery.length) {
    jobs.push(db.from('objective_mastery').upsert(mastery, { onConflict: 'user_id,objective_key' }));
  }
  if (reviews.length) {
    jobs.push(db.from('flashcard_reviews').upsert(reviews, { onConflict: 'user_id,card_key' }));
  }

  // xp_events is append-only and has no update policy, so only the events this
  // browser has not sent yet go up. The cursor is what stops a re-sync from
  // doubling somebody's XP.
  const from = xpCursor();
  const fresh = p.xp.slice(from);
  if (fresh.length) {
    jobs.push(
      db.from('xp_events').insert(
        fresh.map((e) => ({
          user_id: userId, amount: e.amount, reason: e.reason, created_at: e.at
        }))
      )
    );
  }

  jobs.push(
    db.from('streaks').upsert({
      user_id: userId,
      current_days: p.streak.current,
      longest_days: p.streak.longest,
      last_active_date: p.streak.lastActive
    }, { onConflict: 'user_id' })
  );

  await Promise.all(jobs);
  setXpCursor(p.xp.length);
}

/* ------------------------------------------------------ first sign-in ---- */

export type SyncOutcome = 'uploaded' | 'downloaded' | 'nothing' | 'failed';

export async function syncOnSignIn(userId: string): Promise<SyncOutcome> {
  const db = supabase();
  if (!db) return 'nothing';

  try {
    const local = loadLocal();
    const localHasWork =
      Object.keys(local.mastery).length > 0 || Object.keys(local.reviews).length > 0;

    if (await isEmptyRemote(userId)) {
      if (!localHasWork) return 'nothing';
      setXpCursor(0);             // this account has seen none of these events
      await push(userId, local);
      return 'uploaded';
    }

    const remote = await pull(userId);
    if (!remote) return 'failed';
    saveLocal(remote);
    stats.refresh();
    setXpCursor(remote.xp.length);
    return 'downloaded';
  } catch {
    return 'failed';
  }
}

/** Signing out leaves the account's data in this browser; clear it. */
export function clearLocal(): void {
  if (!browser) return;
  try {
    localStorage.removeItem('gradeone.progress.v2');
    localStorage.removeItem(XP_CURSOR);
  } catch { /* ignore */ }
}

/* ------------------------------------------------------------ write-through */

let timer: ReturnType<typeof setTimeout> | null = null;

/**
 * Save locally at once, then push after a pause. Answering ten questions in a
 * row should be one round trip, not ten — and the local write means the UI
 * never waits on the network.
 */
export function saveAndSync(p: Progress, userId: string | null): void {
  saveLocal(p);
  // The chrome (rings, level, streak) re-reads immediately, so a closed ring
  // closes the moment the answer is given, not on the next page load.
  stats.refresh();
  if (!userId) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => { void push(userId, p).catch(() => {}); }, 1200);
}

/** Flush a pending push immediately — used when leaving the page. */
export async function flush(p: Progress, userId: string | null): Promise<void> {
  if (timer) { clearTimeout(timer); timer = null; }
  if (userId) await push(userId, p).catch(() => {});
}
