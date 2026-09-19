import { browser } from '$app/environment';

/**
 * Light / dark, shared by every place that offers the toggle.
 *
 * `null` means "follow the system", which is the default and stamps nothing on
 * <html>. Choosing explicitly stamps data-theme so it wins in both directions.
 */
class Theme {
  mode = $state<'light' | 'dark' | null>(null);

  init() {
    if (!browser) return;
    try {
      const saved = localStorage.getItem('gradeone.theme');
      if (saved === 'light' || saved === 'dark') this.set(saved);
    } catch { /* storage blocked; the system preference applies */ }
  }

  get isDark(): boolean {
    if (this.mode) return this.mode === 'dark';
    return browser && matchMedia('(prefers-color-scheme: dark)').matches;
  }

  set(mode: 'light' | 'dark') {
    this.mode = mode;
    document.documentElement.setAttribute('data-theme', mode);
    try { localStorage.setItem('gradeone.theme', mode); } catch { /* ignore */ }
  }

  toggle() {
    this.set(this.isDark ? 'light' : 'dark');
  }
}

export const theme = new Theme();
