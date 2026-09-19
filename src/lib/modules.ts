/**
 * One colour per module, as flat blocks. See design-system/grade-one/MASTER.md.
 *
 *   solid   deep fill: carries white text (all >= 5:1), rings, light-mode text
 *   from/to hero gradient stops. BOTH carry white text, so both must pass:
 *           an earlier lighter first stop (#16a34a) was 3.3:1 and failed.
 *   edge    darker still: the solid 3D edge under a block
 *   bright  light tint: text and accents on the dark theme (all >= 6:1)
 *   soft    tinted backgrounds
 *
 * The bright tints fail on white and the deep fills are dim on navy, which is
 * why pages use --mod-text (resolved per theme in app.css), never one of them
 * directly, for text.
 */
export type ModuleTheme = {
  name: string;
  solid: string;
  from: string;
  to: string;
  edge: string;
  bright: string;
  soft: string;
};

export const MODULE_THEMES: Record<number, ModuleTheme> = {
  1: { name: 'green',  solid: '#15803d', from: '#15803d', to: '#166534', edge: '#14532d', bright: '#4ade80', soft: 'rgba(34, 197, 94, .14)' },
  2: { name: 'sky',    solid: '#0369a1', from: '#0369a1', to: '#075985', edge: '#0c4a6e', bright: '#38bdf8', soft: 'rgba(14, 165, 233, .14)' },
  3: { name: 'purple', solid: '#9333ea', from: '#9333ea', to: '#7e22ce', edge: '#6b21a8', bright: '#c084fc', soft: 'rgba(168, 85, 247, .14)' }
};

export function theme(moduleNo: number): ModuleTheme {
  return MODULE_THEMES[moduleNo] ?? MODULE_THEMES[1];
}

/** Inline CSS custom properties, so a subtree can be themed with one attribute. */
export function themeVars(moduleNo: number): string {
  const t = theme(moduleNo);
  return `--mod:${t.solid};--mod-from:${t.from};--mod-to:${t.to};--mod-edge:${t.edge};--mod-bright:${t.bright};--mod-soft:${t.soft}`;
}

/**
 * Daily quest colours. Kept under the old RING_COLORS name so existing call
 * sites keep compiling; `track` is the empty part of a progress bar.
 * Each fill carries white text/icons at >= 5:1.
 */
export const RING_COLORS = {
  learn:    { color: '#4f46e5', edge: '#3730a3', track: 'rgba(79, 70, 229, .14)' },
  review:   { color: '#c2410c', edge: '#7c2d12', track: 'rgba(234, 88, 12, .15)' },
  practice: { color: '#0369a1', edge: '#0c4a6e', track: 'rgba(14, 165, 233, .15)' }
} as const;
