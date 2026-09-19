<script lang="ts">
  import '../app.css';
  import 'katex/dist/katex.min.css';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import { session } from '$lib/session.svelte';
  import { stats } from '$lib/stats.svelte';
  import { theme } from '$lib/theme.svelte';

  let { children } = $props();

  // Chrome lives in the two group layouts: (app) gets the sidebar and tab bar,
  // (marketing) gets the slim global nav. This only boots what both share.
  onMount(() => {
    theme.init();
    stats.refresh();
    // Signing in or out replaces this browser's progress, so re-read after.
    void session.start(() => stats.refresh());
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
