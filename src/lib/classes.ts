/**
 * Classes, rosters and roles — everything that needs the database at runtime.
 *
 * WHAT THIS MODULE IS NOT
 *
 * It is not the access control. Every function here is a plain Supabase call
 * made from the browser with the anon key, so anyone can issue the same query
 * from a console. What they get back is decided entirely by the policies in
 * `backend/migrations/009_roles_and_classes.sql`.
 *
 * So a teacher asking for a roster is not trusted because this module checked a
 * role — it is trusted because `teaches_student()` is in the policy. The role
 * checks in the UI exist to avoid showing people buttons that would fail.
 */
import { supabase } from '$lib/supabase';
import type { Role } from '$lib/session.svelte';

export type ClassRow = {
  id: number;
  name: string;
  join_code: string;
  archived: boolean;
  subject_id: number;
  subject_code: string;
  subject_name: string;
  /** Present on a teacher's own classes; students do not get a head count. */
  member_count?: number;
  /** Present on classes a student is in. */
  teacher_name?: string;
};

export type RosterEntry = {
  user_id: string;
  display_name: string;
  joined_at: string;
  streak_days: number;
  longest_days: number;
  last_active: string | null;
  /** Mean mastery across every objective the student has touched, 0–100. */
  mastery: number;
  objectives_started: number;
  attempts: number;
  correct: number;
};

export type Person = {
  id: string;
  display_name: string;
  school: string | null;
  role: Role;
};

/** Subjects that exist, for the class-creation form. */
export async function listSubjects(): Promise<{ id: number; code: string; name: string }[]> {
  const db = supabase();
  if (!db) return [];
  const { data } = await db.from('subjects').select('id, code, name').eq('active', true).order('code');
  return data ?? [];
}

/**
 * Classes the signed-in user teaches.
 *
 * Returns [] for a student rather than throwing: the policy simply matches no
 * rows, which is the same answer and needs no special case here.
 */
export async function classesITeach(): Promise<ClassRow[]> {
  const db = supabase();
  if (!db) return [];
  const { data, error } = await db
    .from('classes')
    .select('id, name, join_code, archived, subject_id, subjects(code, name), class_members(count)')
    .order('created_at', { ascending: false });
  if (error || !data) return [];
  return data.map((c: any) => ({
    id: c.id,
    name: c.name,
    join_code: c.join_code,
    archived: c.archived,
    subject_id: c.subject_id,
    subject_code: c.subjects?.code ?? '',
    subject_name: c.subjects?.name ?? '',
    member_count: c.class_members?.[0]?.count ?? 0
  }));
}

/** Classes the signed-in user has joined as a student. */
export async function classesIAmIn(): Promise<ClassRow[]> {
  const db = supabase();
  if (!db) return [];
  const { data, error } = await db
    .from('class_members')
    .select('class_id, classes(id, name, join_code, archived, subject_id, subjects(code, name))');
  if (error || !data) return [];
  return data
    .filter((m: any) => m.classes && !m.classes.archived)
    .map((m: any) => ({
      id: m.classes.id,
      name: m.classes.name,
      join_code: m.classes.join_code,
      archived: m.classes.archived,
      subject_id: m.classes.subject_id,
      subject_code: m.classes.subjects?.code ?? '',
      subject_name: m.classes.subjects?.name ?? ''
    }));
}

export async function createClass(subjectId: number, name: string): Promise<ClassRow | null> {
  const db = supabase();
  if (!db) return null;
  const { error } = await db.rpc('create_class', { subject: subjectId, class_name: name });
  if (error) throw new Error(error.message);
  const mine = await classesITeach();
  return mine[0] ?? null;
}

/**
 * Join by code.
 *
 * Goes through the `join_class` RPC rather than inserting a membership row,
 * because a student has no read access to `classes` at all — which is what
 * stops join codes being found by querying for them.
 */
export async function joinClass(code: string): Promise<void> {
  const db = supabase();
  if (!db) throw new Error('Not connected');
  const { error } = await db.rpc('join_class', { code });
  if (error) throw new Error(error.message);
}

export async function leaveClass(classId: number): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db.from('class_members').delete().eq('class_id', classId);
  if (error) throw new Error(error.message);
}

export async function removeStudent(classId: number, userId: string): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db
    .from('class_members')
    .delete()
    .eq('class_id', classId)
    .eq('user_id', userId);
  if (error) throw new Error(error.message);
}

export async function renameClass(classId: number, name: string): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db.from('classes').update({ name }).eq('id', classId);
  if (error) throw new Error(error.message);
}

export async function archiveClass(classId: number, archived = true): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db.from('classes').update({ archived }).eq('id', classId);
  if (error) throw new Error(error.message);
}

/**
 * The roster of one class, with each student's streak and progress.
 *
 * Four separate queries rather than one join, because streaks, mastery and
 * attempts live in three tables keyed by user with no foreign key to the class.
 * Each is a single round trip over the whole roster, not one per student.
 */
export async function roster(classId: number): Promise<RosterEntry[]> {
  const db = supabase();
  if (!db) return [];

  const { data: members, error } = await db
    .from('class_members')
    .select('user_id, joined_at, profiles(display_name)')
    .eq('class_id', classId);
  if (error || !members?.length) return [];

  const ids = members.map((m: any) => m.user_id);

  const [streaks, mastery, attempts] = await Promise.all([
    db.from('streaks').select('user_id, current_days, longest_days, last_active_date').in('user_id', ids),
    db.from('objective_mastery').select('user_id, mastery, attempts, correct').in('user_id', ids),
    db.from('question_attempts').select('user_id, correct').in('user_id', ids)
  ]);

  const streakBy = new Map((streaks.data ?? []).map((s: any) => [s.user_id, s]));

  const masteryBy = new Map<string, { sum: number; n: number }>();
  for (const row of mastery.data ?? []) {
    const acc = masteryBy.get(row.user_id) ?? { sum: 0, n: 0 };
    acc.sum += Number(row.mastery);
    acc.n += 1;
    masteryBy.set(row.user_id, acc);
  }

  const attemptsBy = new Map<string, { n: number; right: number }>();
  for (const row of attempts.data ?? []) {
    const acc = attemptsBy.get(row.user_id) ?? { n: 0, right: 0 };
    acc.n += 1;
    if (row.correct) acc.right += 1;
    attemptsBy.set(row.user_id, acc);
  }

  return members
    .map((m: any) => {
      const s = streakBy.get(m.user_id);
      const mast = masteryBy.get(m.user_id);
      const att = attemptsBy.get(m.user_id);
      return {
        user_id: m.user_id,
        display_name: m.profiles?.display_name ?? 'Student',
        joined_at: m.joined_at,
        streak_days: s?.current_days ?? 0,
        longest_days: s?.longest_days ?? 0,
        last_active: s?.last_active_date ?? null,
        mastery: mast && mast.n ? Math.round(mast.sum / mast.n) : 0,
        objectives_started: mast?.n ?? 0,
        attempts: att?.n ?? 0,
        correct: att?.right ?? 0
      };
    })
    .sort((a, b) => a.display_name.localeCompare(b.display_name));
}

/**
 * Subject codes the signed-in user is registered for, lower-cased to match the
 * URL segments (`math`, `it`).
 *
 * Returns [] both for "registered for nothing" and for "signed out", and the
 * shell treats an empty list as "show everything" — a student who has not
 * joined anything can still study, and the class layer only ever narrows what
 * is on offer once there is something to narrow it to.
 */
export async function myEnrolledSubjectCodes(): Promise<string[]> {
  const db = supabase();
  if (!db) return [];
  const { data, error } = await db.from('enrollments').select('subjects(code)');
  if (error || !data) return [];
  return data
    .map((r: any) => r.subjects?.code?.toLowerCase())
    .filter((c: string | undefined): c is string => Boolean(c));
}

/** Everyone with a profile. Admins only — the policy returns nothing to others. */
export async function listPeople(): Promise<Person[]> {
  const db = supabase();
  if (!db) return [];
  const { data, error } = await db
    .from('profiles')
    .select('id, display_name, school, role')
    .order('display_name');
  if (error || !data) return [];
  return data as Person[];
}

/**
 * Change someone's role.
 *
 * The RPC re-checks that the caller is an admin, so this failing with
 * "Only an admin may change roles" is the system working, not a bug.
 */
export async function setUserRole(userId: string, role: Role): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db.rpc('set_user_role', { target: userId, new_role: role });
  if (error) throw new Error(error.message);
}
