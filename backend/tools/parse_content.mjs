/**
 * Parse and validate Grade One content markdown.
 *
 * The format exists to be corrected by hand against a printed textbook, so it
 * is forgiving of a human and unforgiving of ambiguity. Every problem is
 * reported with a file and line number; nothing is guessed at and nothing is
 * silently dropped. A file either validates or it does not import.
 */
import fs from 'node:fs';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';

const FM = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const HEAD2 = /^##\s+(.+?)\s*$/;
const HEAD3 = /^###\s+(.+?)\s*$/;
const IDMARK = /<!--\s*id:(\d+)\s*-->/;
const OPTION = /^[-*]\s+([A-H])[.)]\s+(.+)$/;
const FIELD = /^\*\*(Answer|Working|Hint|Tolerance)\s*:?\*\*\s*:?\s*([\s\S]*)$/i;
const CODE = /^\d{1,2}\.\d{1,2}$/;

const KINDS = new Set(['mcq', 'numeric', 'structured']);

/** Sections where a ### heading starts a new item rather than a subheading. */
const ITEM_SECTIONS = new Set(['flashcards', 'questions']);

export function parseFile(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const errors = [];
  const warnings = [];
  const rel = path.basename(file);
  const err = (line, msg) => errors.push({ file: rel, line, msg });
  const warn = (line, msg) => warnings.push({ file: rel, line, msg });

  const fmMatch = raw.match(FM);
  if (!fmMatch) {
    err(1, 'No frontmatter. A content file must open with a --- block.');
    return { errors, warnings };
  }

  let fm;
  try {
    fm = yamlLoad(fmMatch[1]) || {};
  } catch (e) {
    err(2, 'Frontmatter is not valid YAML: ' + e.message.split('\n')[0]);
    return { errors, warnings };
  }

  for (const key of ['subject', 'topic', 'lesson', 'title', 'objectives']) {
    if (fm[key] === undefined || fm[key] === '') err(2, 'Frontmatter is missing "' + key + '".');
  }
  if (fm.objectives && !Array.isArray(fm.objectives)) {
    err(2, 'Frontmatter "objectives" must be a list, e.g. ["3.1", "3.2"].');
    fm.objectives = [];
  }

  // YAML reads 3.1 as a number, and 3.10 as 3.1 -- a silent collision that
  // would file two different objectives under one code. So codes must be
  // quoted, and an unquoted one is an error rather than a guess.
  const codes = (fm.objectives || []).map((c) => {
    if (typeof c === 'number') {
      err(2, 'Objective ' + c + ' must be quoted in frontmatter ("' + c + '"), ' +
             'otherwise YAML reads it as a number and 3.10 silently becomes 3.1.');
      return String(c);
    }
    return String(c).trim();
  });
  for (const c of codes) {
    if (!CODE.test(c)) err(2, '"' + c + '" is not a valid objective code.');
  }

  const lines = raw.split(/\r?\n/);
  const fmLines = fmMatch[0].split(/\r?\n/).length - 1;

  // Walk the body, slicing it into ## sections.
  //
  // A ### heading means different things depending on the section it is in.
  // Under Flashcards and Questions it delimits one item. Under Lesson it is an
  // ordinary subheading and belongs in the prose. Treating every ### as an item
  // truncated every lesson at its first subheading -- the text simply vanished,
  // with no error, because the dropped lines went into entries nothing read.
  const sections = {};
  let current = null;
  for (let i = fmLines; i < lines.length; i++) {
    const h2 = lines[i].match(HEAD2);
    if (h2) {
      current = h2[1].toLowerCase();
      sections[current] = { line: i + 1, entries: [], body: [] };
      continue;
    }
    if (!current) continue;

    if (!ITEM_SECTIONS.has(current)) {
      sections[current].body.push(lines[i]);
      continue;
    }

    const h3 = lines[i].match(HEAD3);
    if (h3) {
      sections[current].entries.push({ heading: h3[1], line: i + 1, body: [] });
    } else if (sections[current].entries.length) {
      sections[current].entries[sections[current].entries.length - 1].body.push(lines[i]);
    } else {
      sections[current].body.push(lines[i]);
    }
  }

  if (!sections.lesson) err(fmLines + 1, 'No "## Lesson" section.');

  const lessonBody = (sections.lesson ? sections.lesson.body : []).join('\n').trim();
  if (sections.lesson && lessonBody.length < 40) {
    warn(sections.lesson.line, 'Lesson body is very short - is it still a stub?');
  }

  const topicNo = expectedTopicNumber(codes, err);

  const flashcards = (sections.flashcards ? sections.flashcards.entries : [])
    .map((e) => parseFlashcard(e, topicNo, err, warn))
    .filter(Boolean);

  const questions = (sections.questions ? sections.questions.entries : [])
    .map((e) => parseQuestion(e, topicNo, err, warn))
    .filter(Boolean);

  // Every objective the lesson claims should actually get drilled, or the
  // student gets taught something the platform never tests.
  const drilled = new Set([...flashcards, ...questions].map((x) => x.objective));
  for (const c of codes) {
    if (!drilled.has(c)) {
      warn(2, 'Objective ' + c + ' is taught but has no flashcard or question.');
    }
  }
  for (const c of drilled) {
    if (codes.length && !codes.includes(c)) {
      err(2, 'Objective ' + c + ' is drilled but not listed in frontmatter "objectives".');
    }
  }

  if (raw.includes('[?]')) warn(1, 'File still contains [?] review markers.');

  return {
    errors,
    warnings,
    lesson: {
      subject: fm.subject, topic: fm.topic, slug: fm.lesson, title: fm.title,
      objectives: codes, est_minutes: fm.est_minutes == null ? null : fm.est_minutes,
      status: fm.status || 'draft', source_note: fm.source || null,
      // The lesson's own id lives in frontmatter. Reading it from the first
      // <!-- id --> anywhere in the file would pick up a flashcard's instead.
      body_md: lessonBody, id: fm.id == null ? null : String(fm.id)
    },
    flashcards,
    questions
  };
}

function idOf(s) {
  const m = s.match(IDMARK);
  return m ? m[1] : null;
}

/** All codes in one file share a topic number; the file declares one topic. */
function expectedTopicNumber(codes, err) {
  const nums = [...new Set(codes.map((c) => c.split('.')[0]))];
  if (nums.length > 1) {
    err(2, 'Objectives span more than one topic (' + nums.join(', ') +
           '). A lesson file belongs to a single topic.');
  }
  return nums.length ? nums[0] : null;
}

/** Pull **Answer:** / **Working:** / **Hint:** blocks out of an entry body. */
function splitFields(bodyLines, startLine) {
  const fields = {};
  const prose = [];
  let active = null;
  bodyLines.forEach((ln, idx) => {
    const m = ln.match(FIELD);
    if (m) {
      active = m[1].toLowerCase();
      fields[active] = { value: m[2].trim(), line: startLine + idx + 1 };
    } else if (active) {
      fields[active].value += '\n' + ln;
    } else {
      prose.push(ln);
    }
  });
  for (const k of Object.keys(fields)) fields[k].value = fields[k].value.trim();
  return { fields, prose };
}

function parseFlashcard(entry, topicNo, err, warn) {
  const bar = entry.heading.indexOf('|');
  const code = (bar === -1 ? entry.heading : entry.heading.slice(0, bar))
    .replace(IDMARK, '').trim();
  const front = bar === -1 ? '' : entry.heading.slice(bar + 1).replace(IDMARK, '').trim();

  if (!CODE.test(code)) {
    err(entry.line, 'Flashcard heading must start with an objective code, e.g. ' +
                    '"### 3.1 | What is a set?" - got "' + entry.heading + '".');
    return null;
  }
  if (topicNo && code.split('.')[0] !== topicNo) {
    err(entry.line, 'Flashcard cites objective ' + code +
                    ', but this file\'s topic is ' + topicNo + '.x');
  }
  if (!front) {
    err(entry.line, 'Flashcard has no front text after the "|".');
    return null;
  }

  const { fields, prose } = splitFields(entry.body, entry.line);
  const joined = prose.join('\n');
  const back = joined.replace(/^>\s?.*$/gm, '').trim();
  const quoted = joined.match(/^>\s?(.+)$/m);
  const hint = fields.hint ? fields.hint.value : (quoted ? quoted[1].trim() : null);

  if (!back) {
    err(entry.line, 'Flashcard "' + front + '" has no answer text.');
    return null;
  }
  if (back.length > 600) {
    warn(entry.line, 'Flashcard "' + front + '" is long for a card (' + back.length + ' chars).');
  }

  return { objective: code, front, back, hint, id: idOf(entry.heading) };
}

function parseQuestion(entry, topicNo, err, warn) {
  const parts = entry.heading.replace(IDMARK, '').split('|').map((p) => p.trim());
  const code = parts[0];

  if (!CODE.test(code)) {
    err(entry.line, 'Question heading must start with an objective code, e.g. ' +
                    '"### 3.1 | mcq | 1 mark | difficulty 2" - got "' + entry.heading + '".');
    return null;
  }
  if (topicNo && code.split('.')[0] !== topicNo) {
    err(entry.line, 'Question cites objective ' + code +
                    ', but this file\'s topic is ' + topicNo + '.x');
  }

  const kind = (parts[1] || '').toLowerCase();
  if (!KINDS.has(kind)) {
    err(entry.line, 'Unknown question kind "' + (parts[1] || '') +
                    '". Use one of: ' + [...KINDS].join(', ') + '.');
    return null;
  }

  const markPart = parts.find((p) => /mark/i.test(p));
  const marks = Number((markPart && markPart.match(/\d+/)) ? markPart.match(/\d+/)[0] : 1);
  const diffPart = parts.find((p) => /difficult/i.test(p));
  const difficulty = Number((diffPart && diffPart.match(/\d+/)) ? diffPart.match(/\d+/)[0] : 3);

  if (!(marks > 0)) err(entry.line, 'Marks must be a positive number, got "' + marks + '".');
  if (!(difficulty >= 1 && difficulty <= 5)) {
    err(entry.line, 'Difficulty must be 1-5, got "' + difficulty + '".');
  }

  const { fields, prose } = splitFields(entry.body, entry.line);

  const options = [];
  const stem = [];
  for (const ln of prose) {
    const m = ln.match(OPTION);
    if (m) options.push({ key: m[1], text: m[2].trim() });
    else stem.push(ln);
  }

  const stem_md = stem.join('\n').trim();
  if (!stem_md) {
    err(entry.line, 'Question has no stem text.');
    return null;
  }

  const answer = fields.answer ? fields.answer.value : null;
  if (!answer) {
    err(entry.line, 'Question has no **Answer:** line.');
    return null;
  }

  if (kind === 'mcq') {
    if (options.length < 2) {
      err(entry.line, 'An mcq needs at least 2 options written as "- A. text".');
      return null;
    }
    const keys = options.map((o) => o.key);
    if (new Set(keys).size !== keys.length) {
      err(entry.line, 'Duplicate option letters: ' + keys.join(', ') + '.');
    }
    if (!keys.includes(answer.trim())) {
      err(fields.answer.line, 'Answer "' + answer.trim() +
          '" is not one of the options (' + keys.join(', ') + ').');
    }
  } else {
    if (options.length) {
      warn(entry.line, 'A "' + kind + '" question has lettered options - did you mean kind "mcq"?');
    }
    if (kind === 'numeric' && !Number.isFinite(Number(answer.replace(/[, ]/g, '')))) {
      err(fields.answer.line, 'A numeric answer must be a number, got "' + answer + '".');
    }
  }

  if (!fields.working && kind !== 'structured') {
    warn(entry.line, 'No **Working:** - students see nothing after answering.');
  }

  return {
    objective: code,
    kind,
    marks,
    difficulty,
    stem_md,
    options: options.length ? options : null,
    answer: answer.trim(),
    tolerance: fields.tolerance ? Number(fields.tolerance.value) : null,
    working_md: fields.working ? fields.working.value : null,
    id: idOf(entry.heading)
  };
}
