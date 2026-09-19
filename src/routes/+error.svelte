<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/state';

  // A mistyped or out-of-date link is the usual way here. Never leave a student
  // at a dead end: say plainly what happened and give them somewhere to go.
  const notFound = $derived(page.status === 404);
</script>

<svelte:head>
  <title>{notFound ? 'Page not found' : 'Something went wrong'} — Grade One</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="wrap err">
  <p class="code">{page.status}</p>
  <h1>{notFound ? 'That page is not here.' : 'Something went wrong.'}</h1>
  <p class="muted">
    {#if notFound}
      The link may be mistyped, or it may point to a lesson that has moved. Your progress is
      safe — nothing is lost by landing here.
    {:else}
      {page.error?.message ?? 'An unexpected error stopped this page from loading.'}
    {/if}
  </p>
  <div class="row">
    <a class="btn" href="{base}/math">Go to Mathematics</a>
    <a class="quiet" href="{base}/">Home ›</a>
  </div>
</div>

<style>
  .err { max-width: 520px; padding-top: clamp(1rem, 6vw, 4rem); }
  .code {
    margin: 0 0 .4rem;
    font-size: .8rem;
    font-weight: 600;
    letter-spacing: .06em;
    color: var(--text-tertiary);
    font-variant-numeric: tabular-nums;
  }
  h1 {
    font-size: clamp(1.9rem, 5vw, 2.6rem);
    line-height: 1.08;
    letter-spacing: -.026em;
    margin: 0 0 .8rem;
  }
  p.muted { margin: 0 0 1.75rem; max-width: 46ch; }
  .row { display: flex; align-items: center; gap: 1.1rem; flex-wrap: wrap; }
  .btn {
    display: inline-block;
    background: var(--brand);
    color: var(--on-brand);
    font-weight: 560;
    padding: .7rem 1.4rem;
    border-radius: var(--r-pill);
    transition: transform var(--dur-fast) var(--ease), background-color var(--dur-fast) var(--ease);
  }
  .btn:hover { background: var(--brand-hover); color: var(--on-brand); }
  .btn:active { transform: scale(.97); }
  .quiet { color: var(--text-secondary); font-size: .95rem; }
  .quiet:hover { color: var(--brand); }
</style>
