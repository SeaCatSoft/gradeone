<script lang="ts" module>
  /**
   * A small set of line icons drawn to one grid (24px, 1.7 stroke, round caps)
   * so they sit together like a single symbol family, the way SF Symbols do.
   */
  export type IconName =
    | 'today' | 'book' | 'person' | 'cards' | 'check' | 'flame' | 'chevron'
    | 'chevron-left' | 'sun' | 'moon' | 'play' | 'grid' | 'doc' | 'sparkle' | 'lock';
</script>

<script lang="ts">
  let { name, size = 20 }: { name: IconName; size?: number } = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.7"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  {#if name === 'today'}
    <rect x="3.5" y="4.5" width="17" height="16" rx="3.5" /><path d="M3.5 9.5h17M8 3v3M16 3v3" />
    <circle cx="12" cy="15" r="2.2" fill="currentColor" stroke="none" />
  {:else if name === 'book'}
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />
  {:else if name === 'person'}
    <circle cx="12" cy="8" r="4" /><path d="M4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
  {:else if name === 'cards'}
    <rect x="3" y="7" width="14" height="13" rx="2.5" /><path d="M7 4h11a3 3 0 0 1 3 3v10" />
  {:else if name === 'check'}
    <rect x="3.5" y="3.5" width="17" height="17" rx="4" /><path d="M8.2 12.3l2.6 2.6 5-5.4" />
  {:else if name === 'flame'}
    <path d="M12 3c.7 3.6-1.4 5-2.9 6.6C7.8 11 7 12.4 7 14.4a5 5 0 0 0 10 0c0-2.7-1.4-4.2-2.6-5.5-.4 1.1-1.1 1.8-2 2.3.5-2.7-.1-5.8-.4-8.2z" fill="currentColor" stroke="none" />
  {:else if name === 'chevron'}
    <path d="M9.5 5.5l6.5 6.5-6.5 6.5" />
  {:else if name === 'chevron-left'}
    <path d="M14.5 5.5L8 12l6.5 6.5" />
  {:else if name === 'sun'}
    <circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
  {:else if name === 'moon'}
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
  {:else if name === 'play'}
    <path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11.3-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z" fill="currentColor" stroke="none" />
  {:else if name === 'grid'}
    <rect x="3.5" y="3.5" width="7" height="7" rx="2" /><rect x="13.5" y="3.5" width="7" height="7" rx="2" /><rect x="3.5" y="13.5" width="7" height="7" rx="2" /><rect x="13.5" y="13.5" width="7" height="7" rx="2" />
  {:else if name === 'doc'}
    <path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h4" />
  {:else if name === 'sparkle'}
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
  {:else if name === 'lock'}
    <rect x="5" y="10.5" width="14" height="10" rx="2.5" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
  {/if}
</svg>
