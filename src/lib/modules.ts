/**
 * One colour per module, used the way Apple uses category colours: rings,
 * headers and tiles all carry their module's hue, so a student learns to read
 * "green is Module 1" without being told.
 *
 * Each is a system-colour pair — the solid for rings and text accents, the two
 * gradient stops for hero surfaces. Text on the gradients is always white, and
 * the darker stop sits under the title so it keeps AA contrast.
 */
export type ModuleTheme = {
  name: string;
  solid: string;       // rings, accents
  from: string;        // gradient, light end
  to: string;          // gradient, dark end (title sits here)
  soft: string;        // tinted backgrounds
};

export const MODULE_THEMES: Record<number, ModuleTheme> = {
  1: { name: 'green',  solid: '#30b862', from: '#34c759', to: '#0b7a5e', soft: 'rgba(52, 199, 89, .14)' },
  2: { name: 'blue',   solid: '#0a84ff', from: '#40a9ff', to: '#3a3ad6', soft: 'rgba(10, 132, 255, .14)' },
  3: { name: 'orange', solid: '#ff8a00', from: '#ffb340', to: '#e0354f', soft: 'rgba(255, 138, 0, .15)' }
};

export function theme(moduleNo: number): ModuleTheme {
  return MODULE_THEMES[moduleNo] ?? MODULE_THEMES[1];
}

/** Inline CSS custom properties, so a subtree can be themed with one attribute. */
export function themeVars(moduleNo: number): string {
  const t = theme(moduleNo);
  return `--mod:${t.solid};--mod-from:${t.from};--mod-to:${t.to};--mod-soft:${t.soft}`;
}

/** The three ring colours, after Apple's Activity rings. */
export const RING_COLORS = {
  learn:    { color: '#fa114f', track: 'rgba(250, 17, 79, .18)' },
  review:   { color: '#92e82a', track: 'rgba(146, 232, 42, .18)' },
  practice: { color: '#1eeaef', track: 'rgba(30, 234, 239, .18)' }
} as const;
