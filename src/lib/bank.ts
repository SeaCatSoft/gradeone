/**
 * Reading the prerendered question bank from the browser.
 *
 * Two files back this: /bank/<subject>.json is a light index for searching and
 * picking, and /bank/<subject>/<topic>.json carries the fully rendered
 * questions. Both are static, so they cache like any other asset; this module
 * only keeps them out of being fetched twice in one session.
 */
import { base } from '$app/paths';

export type BankEntry = {
  key: string;
  objective: string;
  kind: 'mcq' | 'numeric' | 'structured';
  marks: number;
  difficulty: number;
  lesson: string;
  preview: string;
};

export type BankTopic = { slug: string; title: string; module: number; questions: BankEntry[] };
export type BankIndex = { subject: string; name: string; topics: BankTopic[] };

export type BankQuestion = {
  key: string;
  objective: string;
  objectiveKey: string;
  kind: 'mcq' | 'numeric' | 'structured';
  marks: number;
  difficulty: number;
  stem: string;
  options: { key: string; text: string }[] | null;
  answer: string;
  answerHtml: string | null;
  working: string | null;
};

const indexCache = new Map<string, Promise<BankIndex | null>>();
const topicCache = new Map<string, Promise<BankQuestion[]>>();

export function bankIndex(subject: string): Promise<BankIndex | null> {
  const code = subject.toLowerCase();
  let hit = indexCache.get(code);
  if (!hit) {
    hit = fetch(`${base}/bank/${code}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);
    indexCache.set(code, hit);
  }
  return hit;
}

export function bankTopic(subject: string, topic: string): Promise<BankQuestion[]> {
  const path = `${subject.toLowerCase()}/${topic}`;
  let hit = topicCache.get(path);
  if (!hit) {
    hit = fetch(`${base}/bank/${path}.json`)
      .then((r) => (r.ok ? r.json() : { questions: [] }))
      .then((d) => d.questions ?? [])
      .catch(() => []);
    topicCache.set(path, hit);
  }
  return hit;
}

/**
 * Resolve question keys to full questions, fetching only the topics involved.
 *
 * A key is 'it/spreadsheets/charts/q3' — subject, topic, lesson, index. The
 * topic is what decides which file to fetch, so the keys are grouped by it and
 * each file is asked for once however many questions come from it.
 */
export async function resolveKeys(keys: string[]): Promise<Map<string, BankQuestion>> {
  const byTopic = new Map<string, string[]>();
  for (const key of keys) {
    const [subject, topic] = key.split('/');
    if (!subject || !topic) continue;
    const path = `${subject}/${topic}`;
    byTopic.set(path, [...(byTopic.get(path) ?? []), key]);
  }

  const found = new Map<string, BankQuestion>();
  await Promise.all(
    [...byTopic.keys()].map(async (path) => {
      const [subject, topic] = path.split('/');
      for (const q of await bankTopic(subject, topic)) found.set(q.key, q);
    })
  );
  return found;
}

/** The topic slug inside a question key, for grouping and display. */
export function topicOf(key: string): string {
  return key.split('/')[1] ?? '';
}

// Marking lives in its own module, with no imports, so it can be tested
// directly by backend/tools/test_marking.mjs. Re-exported here because every
// caller already imports from $lib/bank.
export { judge } from '$lib/marking';
