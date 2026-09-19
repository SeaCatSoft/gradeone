import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/**
 * Where the site lives under its domain.
 *
 * GitHub Pages serves a project site from a subfolder
 * (seacatsoft.github.io/gradeone/), so the build for it sets BASE_PATH to
 * "/gradeone". A custom domain serves from the root, so BASE_PATH is simply
 * left unset. Moving to a custom domain is therefore a change to the deploy
 * workflow's env, not to any link in the app.
 *
 * Every internal link goes through `base` from $app/paths for this reason.
 * A hardcoded "/math" works locally and 404s on Pages.
 */
const raw = process.env.BASE_PATH ?? '';
// Git Bash on Windows rewrites a bare "/gradeone" into "C:/Program Files/Git/
// gradeone" before Node ever sees it. This check is what caught that; build
// locally with MSYS_NO_PATHCONV=1. (CI runs on Linux and is unaffected.)
if (raw && (!raw.startsWith('/') || raw.endsWith('/'))) {
	throw new Error(`BASE_PATH must look like "/gradeone" (leading slash, no trailing slash). Got "${raw}".`);
}
const base = raw as '' | `/${string}`;

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Every page prerenders and auth runs in the browser, so the output is
			// plain static files -- no server, the same model as Roost.
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				// GitHub Pages serves 404.html for any path it cannot find. Using it
				// as the SPA fallback means a mistyped URL still loads the app shell
				// and shows SvelteKit's own not-found page, not GitHub's.
				fallback: '404.html',
				strict: true
			}),

			paths: { base }
		})
	]
});
