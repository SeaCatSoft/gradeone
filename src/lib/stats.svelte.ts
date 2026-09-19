import { load, totalXp, level, liveStreak } from '$lib/progress';
import { todayCounts, ringProgress, todayXp, type Ring } from '$lib/activity';

/**
 * The live numbers the app chrome shows — level, streak, today's rings.
 *
 * One reactive copy for the whole app, refreshed after every save (see
 * $lib/sync). Before this, the header read progress once on load, so XP earned
 * on a page did not show until the next reload — feedback that arrives a page
 * late is not feedback.
 */
class Stats {
  xp = $state(0);
  level = $state(1);
  into = $state(0);
  needed = $state(100);
  streak = $state(0);
  today = $state<Record<Ring, number>>({ learn: 0, review: 0, practice: 0 });
  rings = $state<Record<Ring, number>>({ learn: 0, review: 0, practice: 0 });
  xpToday = $state(0);
  ready = $state(false);

  refresh() {
    const p = load();
    const xp = totalXp(p);
    const l = level(xp);
    this.xp = xp;
    this.level = l.level;
    this.into = l.into;
    this.needed = l.needed;
    this.streak = liveStreak(p);
    this.today = todayCounts(p);
    this.rings = ringProgress(this.today);
    this.xpToday = todayXp(p);
    this.ready = true;
  }
}

export const stats = new Stats();
