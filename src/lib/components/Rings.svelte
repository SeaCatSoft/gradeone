<script lang="ts">
  /**
   * Concentric progress rings, after Apple's Activity rings.
   *
   * Values run 0..1 and may exceed 1: an over-closed ring laps itself, and the
   * overlap gets a shadow cap at the leading end so the second lap reads as a
   * continuation rather than a reset — the same trick the Activity app uses.
   */
  type RingSpec = { value: number; color: string; track: string; label?: string };

  let {
    rings,
    size = 160,
    stroke = 16,
    gap = 3,
    animate = true
  }: { rings: RingSpec[]; size?: number; stroke?: number; gap?: number; animate?: boolean } = $props();

  const c = $derived(size / 2);

  function radius(i: number) {
    return c - stroke / 2 - i * (stroke + gap);
  }
  function circ(i: number) {
    return 2 * Math.PI * radius(i);
  }
  /** Leading-end position of the arc, for the overlap cap. */
  function tip(i: number, v: number) {
    const a = 2 * Math.PI * (v % 1) - Math.PI / 2;
    return { x: c + radius(i) * Math.cos(a), y: c + radius(i) * Math.sin(a) };
  }
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 {size} {size}"
  class:animate
  role="img"
  aria-label={rings.map((r) => `${r.label ?? 'ring'} ${Math.round(r.value * 100)}%`).join(', ')}
>
  <defs>
    <filter id="ring-cap-shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="1.6" flood-color="#000" flood-opacity=".55" />
    </filter>
  </defs>

  {#each rings as r, i}
    {@const rad = radius(i)}
    {@const C = circ(i)}
    {@const v = Math.max(0, r.value)}
    {@const shown = Math.min(v, 1)}
    <circle cx={c} cy={c} r={rad} fill="none" stroke={r.track} stroke-width={stroke} />
    <circle
      class="arc"
      cx={c}
      cy={c}
      r={rad}
      fill="none"
      stroke={r.color}
      stroke-width={stroke}
      stroke-linecap="round"
      stroke-dasharray={C}
      stroke-dashoffset={C * (1 - shown)}
      transform="rotate(-90 {c} {c})"
      style="--i:{i}"
    />
    {#if v > 1}
      {@const t = tip(i, v)}
      <!-- Second lap: a fresh arc from 12 o'clock, capped with a shadowed dot. -->
      <circle
        cx={c}
        cy={c}
        r={rad}
        fill="none"
        stroke={r.color}
        stroke-width={stroke}
        stroke-linecap="round"
        stroke-dasharray={C}
        stroke-dashoffset={C * (1 - Math.min(v - 1, 1))}
        transform="rotate(-90 {c} {c})"
      />
      <circle cx={t.x} cy={t.y} r={stroke / 2} fill={r.color} filter="url(#ring-cap-shadow)" />
    {/if}
  {/each}
</svg>

<style>
  svg { display: block; overflow: visible; }
  /* The arcs sweep in from empty, outer ring first — critically damped, so they
     arrive decisively and do not wobble past their value. */
  .animate .arc {
    transition: stroke-dashoffset 1.1s cubic-bezier(.32, .72, 0, 1);
    transition-delay: calc(var(--i) * 90ms);
  }
  @media (prefers-reduced-motion: reduce) {
    .animate .arc { transition: none; }
  }
</style>
