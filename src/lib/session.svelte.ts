import type { Session, User } from '@supabase/supabase-js';
import { supabase, isConfigured } from '$lib/supabase';

/**
 * Who is signed in, as reactive state the whole app reads.
 *
 * `ready` matters as much as `user`: until the client has restored a session
 * from storage, "no user" and "not checked yet" look identical, and rendering
 * the signed-out state during that gap makes the header flicker on every load.
 */
export type Role = 'student' | 'teacher' | 'admin';

export type Profile = {
  display_name: string;
  school: string | null;
  exam_sitting: string | null;
  role: Role;
};

class SessionStore {
  user = $state<User | null>(null);
  profile = $state<Profile | null>(null);
  ready = $state(false);
  /** No Supabase project configured — the app runs signed-out on localStorage. */
  available = $state(isConfigured);

  #started = false;

  /** Called once from the root layout. Safe to call again. */
  async start(onChange?: (u: User | null) => void) {
    if (this.#started) return;
    this.#started = true;

    const db = supabase();
    if (!db) {
      this.ready = true;
      return;
    }

    const { data } = await db.auth.getSession();
    await this.#apply(data.session, onChange);
    this.ready = true;

    db.auth.onAuthStateChange((_event, session) => {
      void this.#apply(session, onChange);
    });
  }

  async #apply(session: Session | null, onChange?: (u: User | null) => void) {
    const before = this.user?.id ?? null;
    this.user = session?.user ?? null;
    this.profile = this.user ? await this.#loadProfile() : null;
    if ((this.user?.id ?? null) !== before) onChange?.(this.user);
  }

  async #loadProfile(): Promise<Profile | null> {
    const db = supabase();
    if (!db || !this.user) return null;
    const { data, error } = await db
      .from('profiles')
      .select('display_name, school, exam_sitting, role')
      .eq('id', this.user.id)
      .maybeSingle();
    // A missing profile is not fatal: the signup trigger may not have fired
    // yet on a brand-new account. The header falls back to the email.
    if (error) return null;
    return data as Profile | null;
  }

  get displayName(): string {
    return this.profile?.display_name || this.user?.email?.split('@')[0] || 'Student';
  }

  /**
   * The signed-in user's role.
   *
   * Defaults to 'student' whenever it is not known — signed out, profile not
   * loaded yet, or a profile row that predates the role column. Guessing the
   * other way would flash teacher controls at a student while the profile
   * loads, and every one of those controls would then fail against RLS.
   *
   * Nothing here is a security boundary. These getters decide what is worth
   * SHOWING; what may actually be read or written is decided by the policies
   * in 009_roles_and_classes.sql, which the browser cannot talk its way past.
   */
  get role(): Role {
    return this.profile?.role ?? 'student';
  }

  get isAdmin(): boolean {
    return this.role === 'admin';
  }

  /** Admins are teachers everywhere in the app, as they are in the policies. */
  get isTeacher(): boolean {
    return this.role === 'teacher' || this.role === 'admin';
  }

  async refreshProfile() {
    this.profile = await this.#loadProfile();
  }

  async signOut() {
    await supabase()?.auth.signOut();
  }
}

export const session = new SessionStore();
