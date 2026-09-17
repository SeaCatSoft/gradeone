import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { browser } from '$app/environment';

/**
 * One Supabase client, in the browser only.
 *
 * WHY NOT SERVER-SIDE SESSIONS
 *
 * Every page of content is public and prerenders to static HTML, so no page
 * ever needs a session to render. Auth only decides whose *progress* to load,
 * which is client-side data anyway. Keeping auth in the browser means the whole
 * site stays static — no server, no cookie plumbing, and it can deploy to
 * GitHub Pages exactly like Roost.
 *
 * The anon key is meant to be public. It grants nothing RLS does not already
 * allow, which is why migration 006 matters more than any secret would.
 */

const PLACEHOLDER = /YOUR-PROJECT|YOUR-ANON-KEY|^$/;

/**
 * False until a real Supabase project exists. Everything that touches the
 * network checks this first, so the app runs fully signed-out against
 * localStorage rather than throwing on a placeholder URL.
 */
export const isConfigured =
  !PLACEHOLDER.test(PUBLIC_SUPABASE_URL ?? '') &&
  !PLACEHOLDER.test(PUBLIC_SUPABASE_ANON_KEY ?? '');

let client: SupabaseClient | null = null;

export function supabase(): SupabaseClient | null {
  if (!browser || !isConfigured) return null;
  client ??= createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
  return client;
}

/** Turn a Supabase error into something a student can act on. */
export function friendlyError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes('invalid login credentials')) {
    return 'That email and password do not match an account.';
  }
  if (m.includes('email not confirmed')) {
    return 'Check your email and click the confirmation link first.';
  }
  if (m.includes('already registered') || m.includes('already been registered')) {
    return 'There is already an account with that email. Try signing in instead.';
  }
  if (m.includes('password should be at least')) {
    return 'That password is too short — use at least 8 characters.';
  }
  if (m.includes('rate limit') || m.includes('too many')) {
    return 'Too many attempts. Wait a minute and try again.';
  }
  if (m.includes('failed to fetch') || m.includes('network')) {
    return 'Could not reach the server. Check your connection and try again.';
  }
  return message;
}
