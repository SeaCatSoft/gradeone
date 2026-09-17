import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import type { Cookies } from '@sveltejs/kit';

/**
 * Two clients, because Grade One renders lessons on the server for SEO.
 * A student searching "CSEC simultaneous equations practice" should land on a
 * fully-rendered lesson page, which means the syllabus and published content
 * must be fetchable without a browser session. RLS already allows that to
 * `anon`, so the server client uses the same anon key -- never a service key.
 */
export function browserClient() {
  return createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
}

export function serverClient(cookies: Cookies) {
  return createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => cookies.getAll(),
      setAll: (list) =>
        list.forEach(({ name, value, options }) =>
          cookies.set(name, value, { ...options, path: '/' })
        )
    }
  });
}

export const onClient = isBrowser;
