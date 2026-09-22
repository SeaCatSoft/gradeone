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

export type AssignmentKind = 'practice' | 'test';

export type Assignment = {
  id: number;
  class_id: number;
  title: string;
  instructions: string | null;
  kind: AssignmentKind;
  due_at: string | null;
  published: boolean;
  created_at: string;
  item_count?: number;
};

export type AssignmentItem = {
  position: number;
  question_key: string | null;
  teacher_question_id: number | null;
  marks: number;
};

export type TeacherQuestion = {
  id: number;
  subject_id: number | null;
  objective_key: string | null;
  kind: 'mcq' | 'numeric' | 'structured';
  stem_md: string;
  options: { key: string; text: string }[] | null;
  answer: string;
  working_md: string | null;
  marks: number;
};

export type Submission = {
  assignment_id: number;
  user_id: string;
  started_at: string;
  submitted_at: string | null;
  score: number | null;
  total: number | null;
  display_name?: string;
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
    .select('user_id, joined_at')
    .eq('class_id', classId);
  if (error || !members?.length) return [];

  const ids = members.map((m: any) => m.user_id);

  // Names come from a separate query rather than an embedded `profiles(...)`.
  // PostgREST resolves embeds through foreign keys, and class_members.user_id
  // references auth.users, not profiles -- both point AT auth.users, which is
  // not a relationship it can follow. The embed fails at runtime with
  // "could not find a relationship", which no amount of type checking catches.
  const [names, streaks, mastery, attempts] = await Promise.all([
    db.from('profiles').select('id, display_name').in('id', ids),
    db.from('streaks').select('user_id, current_days, longest_days, last_active_date').in('user_id', ids),
    db.from('objective_mastery').select('user_id, mastery, attempts, correct').in('user_id', ids),
    db.from('question_attempts').select('user_id, correct').in('user_id', ids)
  ]);

  const nameBy = new Map((names.data ?? []).map((p: any) => [p.id, p.display_name]));

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
        display_name: nameBy.get(m.user_id) ?? 'Student',
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

// ------------------------------------------------------------- assignments
//
// A teacher sees every assignment in their class; a student sees only the
// published ones. That is one policy, not two queries — the same select
// returns different rows to the two of them, so nothing here filters by role.

export async function listAssignments(classId: number): Promise<Assignment[]> {
  const db = supabase();
  if (!db) return [];
  const { data, error } = await db
    .from('assignments')
    .select('id, class_id, title, instructions, kind, due_at, published, created_at, assignment_items(count)')
    .eq('class_id', classId)
    .order('created_at', { ascending: false });
  if (error || !data) return [];
  return data.map((a: any) => ({ ...a, item_count: a.assignment_items?.[0]?.count ?? 0 }));
}

export async function getAssignment(id: number): Promise<Assignment | null> {
  const db = supabase();
  if (!db) return null;
  const { data } = await db
    .from('assignments')
    .select('id, class_id, title, instructions, kind, due_at, published, created_at')
    .eq('id', id)
    .maybeSingle();
  return (data as Assignment) ?? null;
}

export async function createAssignment(
  classId: number,
  fields: { title: string; kind: AssignmentKind; instructions?: string | null; due_at?: string | null }
): Promise<Assignment | null> {
  const db = supabase();
  if (!db) return null;
  const user = (await db.auth.getUser()).data.user;
  if (!user) throw new Error('Not signed in');
  const { data, error } = await db
    .from('assignments')
    .insert({
      class_id: classId,
      created_by: user.id,
      title: fields.title,
      kind: fields.kind,
      instructions: fields.instructions ?? null,
      due_at: fields.due_at || null
    })
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as Assignment;
}

export async function updateAssignment(id: number, patch: Partial<Assignment>): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db.from('assignments').update(patch).eq('id', id);
  if (error) throw new Error(error.message);
}

export async function deleteAssignment(id: number): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db.from('assignments').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

export async function getItems(assignmentId: number): Promise<AssignmentItem[]> {
  const db = supabase();
  if (!db) return [];
  const { data } = await db
    .from('assignment_items')
    .select('position, question_key, teacher_question_id, marks')
    .eq('assignment_id', assignmentId)
    .order('position');
  return (data as AssignmentItem[]) ?? [];
}

/**
 * Replace an assignment's questions wholesale.
 *
 * Delete-then-insert rather than working out a diff: positions are the primary
 * key, so reordering makes almost every row change anyway, and an assignment is
 * a handful of rows. It is not atomic — a failure between the two leaves the
 * assignment empty — which is survivable because an unpublished assignment is
 * invisible to students, and publishing is a separate act.
 */
export async function replaceItems(
  assignmentId: number,
  items: { question_key?: string | null; teacher_question_id?: number | null; marks: number }[]
): Promise<void> {
  const db = supabase();
  if (!db) return;
  const del = await db.from('assignment_items').delete().eq('assignment_id', assignmentId);
  if (del.error) throw new Error(del.error.message);
  if (!items.length) return;
  const rows = items.map((it, i) => ({
    assignment_id: assignmentId,
    position: i + 1,
    question_key: it.question_key ?? null,
    teacher_question_id: it.teacher_question_id ?? null,
    marks: it.marks
  }));
  const { error } = await db.from('assignment_items').insert(rows);
  if (error) throw new Error(error.message);
}

// -------------------------------------------------- teacher-written questions

export async function listTeacherQuestions(): Promise<TeacherQuestion[]> {
  const db = supabase();
  if (!db) return [];
  const { data } = await db
    .from('teacher_questions')
    .select('id, subject_id, objective_key, kind, stem_md, options, answer, working_md, marks')
    .order('created_at', { ascending: false });
  return (data as TeacherQuestion[]) ?? [];
}

export async function getTeacherQuestions(ids: number[]): Promise<Map<number, TeacherQuestion>> {
  const db = supabase();
  if (!db || !ids.length) return new Map();
  const { data } = await db
    .from('teacher_questions')
    .select('id, subject_id, objective_key, kind, stem_md, options, answer, working_md, marks')
    .in('id', ids);
  return new Map((data ?? []).map((q: any) => [q.id, q as TeacherQuestion]));
}

export async function createTeacherQuestion(
  q: Omit<TeacherQuestion, 'id'>
): Promise<TeacherQuestion | null> {
  const db = supabase();
  if (!db) return null;
  const user = (await db.auth.getUser()).data.user;
  if (!user) throw new Error('Not signed in');
  const { data, error } = await db
    .from('teacher_questions')
    .insert({ ...q, author_id: user.id })
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as TeacherQuestion;
}

export async function deleteTeacherQuestion(id: number): Promise<void> {
  const db = supabase();
  if (!db) return;
  const { error } = await db.from('teacher_questions').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// -------------------------------------------------------------- submissions

export async function mySubmission(assignmentId: number): Promise<Submission | null> {
  const db = supabase();
  if (!db) return null;
  const user = (await db.auth.getUser()).data.user;
  if (!user) return null;
  const { data } = await db
    .from('assignment_submissions')
    .select('*')
    .eq('assignment_id', assignmentId)
    .eq('user_id', user.id)
    .maybeSingle();
  return (data as Submission) ?? null;
}

/** Record a finished attempt, with one row per answer for the teacher to read. */
export async function saveSubmission(
  assignmentId: number,
  answers: { position: number; given: string; correct: boolean | null; marks_awarded: number }[],
  score: number,
  total: number
): Promise<void> {
  const db = supabase();
  if (!db) return;
  const user = (await db.auth.getUser()).data.user;
  if (!user) throw new Error('Not signed in');

  const sub = await db.from('assignment_submissions').upsert({
    assignment_id: assignmentId,
    user_id: user.id,
    submitted_at: new Date().toISOString(),
    score,
    total
  });
  if (sub.error) throw new Error(sub.error.message);

  const rows = answers.map((a) => ({ assignment_id: assignmentId, user_id: user.id, ...a }));
  if (rows.length) {
    const { error } = await db.from('assignment_answers').upsert(rows);
    if (error) throw new Error(error.message);
  }
}

/**
 * Every student's result for one assignment. Teachers only.
 *
 * Names are fetched separately for the same reason as in roster(): there is no
 * foreign key from assignment_submissions to profiles for PostgREST to embed
 * through.
 */
export async function submissionsFor(assignmentId: number): Promise<Submission[]> {
  const db = supabase();
  if (!db) return [];
  const { data } = await db
    .from('assignment_submissions')
    .select('assignment_id, user_id, started_at, submitted_at, score, total')
    .eq('assignment_id', assignmentId);
  const rows = (data ?? []) as Submission[];
  if (!rows.length) return [];

  const { data: names } = await db
    .from('profiles')
    .select('id, display_name')
    .in('id', rows.map((r) => r.user_id));
  const nameBy = new Map((names ?? []).map((p: any) => [p.id, p.display_name]));

  return rows.map((r) => ({ ...r, display_name: nameBy.get(r.user_id) ?? 'Student' }));
}
