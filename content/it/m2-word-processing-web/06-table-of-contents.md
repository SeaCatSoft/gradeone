---
subject: IT
topic: word-processing-web
lesson: table-of-contents
title: Generating a Table of Contents
objectives: ["4.6"]
est_minutes: 14
status: draft
source: "Original prose written against syllabus objective 4.6 (generate table of contents for a document). NOT YET checked against textbook for depth."
---

## Lesson

A **table of contents** lists a document's headings with the page each one
begins on. In any document long enough to need one, it should be **generated**
by the word processor, not typed.

### Why not type it?

Because it goes wrong immediately. Type a contents list with page numbers,
then add two paragraphs to Chapter 1, and every page number after that point
is wrong. Nothing warns you — the list still looks perfectly neat.

A generated table of contents is **updated** in one action, and every page
number is right because the word processor worked it out from where the
headings actually are.

It also becomes navigable: in most word processors, clicking an entry jumps to
that heading.

### How it works

The word processor builds the table by looking for paragraphs formatted with
**heading styles**. `Heading 1` becomes a top-level entry, `Heading 2` an
indented sub-entry beneath it, `Heading 3` below that.

This is the whole mechanism, and it explains the failure students meet most
often: a heading made large and bold **by hand** does not appear. It looks like
a heading to a reader and is an ordinary paragraph to the word processor.

### The steps

1. **Apply heading styles** throughout the document — `Heading 1` for chapters,
   `Heading 2` for sections within them, and so on. Do this as you write.
2. **Place the cursor** where the contents should go, usually a page of its own
   after the title page.
3. **Insert → Table of Contents**, choosing a style and how many heading levels
   to show.
4. **Update** it whenever the document changes.

### Updating

Updating offers two choices:

- **Update page numbers only** — the headings have not changed, but the text
  has moved.
- **Update entire table** — headings have been added, removed or reworded.

When in doubt, update the entire table. The one thing you must not do is
**edit the table of contents by hand**: your changes are discarded the next
time it updates, and in the meantime the list disagrees with the document.

Update it as the **last** thing before printing or exporting. A contents page
generated halfway through the final edit is out of date by the time the
document is finished — which is the same mistake as typing it, arrived at more
slowly.

### The heading hierarchy

Use the levels to mean something:

```
Heading 1    Chapter 2: Methods
Heading 2      2.1 Collecting the data
Heading 3        2.1.1 The questionnaire
Heading 2      2.2 Analysing the data
```

Do not choose a level because of how big it looks. If `Heading 2` is too large
for your taste, change the **style**; using `Heading 3` instead puts the
section at the wrong level in the contents and breaks the structure.

### Related lists

The same mechanism produces other lists:

**Table of figures** — built from the **captions** on figures and tables, so
`Figure 1`, `Figure 2` and their page numbers are listed. It is why captions
are inserted as captions rather than typed.

**Index** — an alphabetical list of terms with the pages they appear on, built
from index entries marked in the text.

Both update the same way and fail the same way when their source is typed by
hand.

### What a generated contents page gives you

| | Typed by hand | Generated |
|---|---|---|
| Page numbers correct after editing | No | Yes, once updated |
| Effort to update | Re-check every entry | One action |
| Clickable | No | Yes |
| Reflects document structure | Only if you are careful | Automatically |

## Flashcards

### 4.6 | What is a table of contents?
A list of a document's headings with the page number each one begins on.

### 4.6 | What does a word processor use to build a table of contents?
The **heading styles** applied to paragraphs — `Heading 1`, `Heading 2` and so
on.

### 4.6 | Why does a heading made large and bold by hand not appear in the contents?
It carries no heading style, so the word processor sees an ordinary paragraph.
Only styled headings are found.

> Hint: what is the word processor actually searching for?

### 4.6 | Give two advantages of a generated table of contents over a typed one.
Any two: page numbers stay correct after editing; it updates in one action;
entries are clickable; it reflects the document's structure automatically.

### 4.6 | List the steps in generating a table of contents.
Apply heading styles throughout; place the cursor where the contents should go;
Insert → Table of Contents; update it whenever the document changes.

### 4.6 | What are the two update options, and when is each used?
**Update page numbers only** when the text has moved but the headings are
unchanged; **update entire table** when headings have been added, removed or
reworded.

### 4.6 | Why should a table of contents never be edited by hand?
The edits are discarded the next time it updates, and until then the list
disagrees with the document.

### 4.6 | When should the table of contents be updated?
As the **last** step before printing or exporting, so it reflects the finished
document.

### 4.6 | What is a table of figures built from?
The **captions** applied to figures and tables — which is why captions should
be inserted as captions rather than typed.

### 4.6 | Why should a heading level never be chosen for its appearance?
The level sets the item's place in the document's structure and in the
contents. If a level looks wrong, change the style, not the level.

## Questions

### 4.6 | mcq | 1 mark | difficulty 2
A word processor generates a table of contents by finding

- A. every sentence ending in a colon
- B. paragraphs formatted with heading styles
- C. all bold text in the document
- D. the first line of every page

**Answer:** B

**Working:** Heading styles are what identify a heading to the word processor.
Text that merely looks like a heading is an ordinary paragraph.

### 4.6 | mcq | 1 mark | difficulty 3
A student makes every chapter title 16 pt bold by hand, then inserts a table of
contents. What appears?

- A. All the chapter titles, correctly
- B. The chapter titles without page numbers
- C. No entries, because no heading styles were used
- D. An error message

**Answer:** C

**Working:** Nothing in the document carries a heading style, so there is
nothing for the word processor to list. The fix is to apply heading styles and
regenerate.

### 4.6 | mcq | 1 mark | difficulty 2
Two pages of text are added to Chapter 1 of a report. What must be done to the
generated table of contents?

- A. Nothing — it is always current
- B. It must be updated
- C. It must be deleted and retyped
- D. The page numbers must be corrected by hand

**Answer:** B

**Working:** A generated table is not live; it is refreshed when you update it.
Correcting it by hand is the one thing to avoid, since the edits are lost at
the next update.

### 4.6 | mcq | 1 mark | difficulty 3
A student reworded three chapter titles. Which update option should be chosen?

- A. Update page numbers only
- B. Update entire table
- C. Either gives the same result
- D. The table must be reinserted

**Answer:** B

**Working:** The headings themselves changed, so the entries must be rebuilt.
Updating page numbers only would leave the old wording in place.

### 4.6 | mcq | 1 mark | difficulty 2
A table of figures is generated from

- A. every image in the document
- B. the captions applied to figures and tables
- C. the headings in the document
- D. the file names of inserted pictures

**Answer:** B

**Working:** Captions are what identify a figure and supply its number and
description — which is why they are inserted as captions rather than typed as
ordinary text.

### 4.6 | structured | 8 marks | difficulty 3
A student has written a 25-page project with chapters and sections, and needs a
contents page.

(a) State **two** advantages of generating the table of contents rather than
typing it. **(2 marks)**

(b) Describe the steps the student must take to generate it. **(3 marks)**

(c) The student's chapter titles were formatted by hand as 16 pt bold. Explain
why no entries appear in the generated table, and state what must be done.
**(2 marks)**

(d) State when the table of contents should be updated for the last time.
**(1 mark)**

**Answer:** (a) 1 mark each, any two: page numbers remain correct after
editing; it can be updated in one action instead of re-checking every entry;
the entries are clickable; it reflects the document's structure automatically.
(b) 3 marks: apply heading styles to the chapter and section titles (1); place
the cursor where the contents is to appear (1); use Insert → Table of Contents
and choose the number of levels (1).
(c) 1 mark — the titles carry no heading style, so the word processor finds no
headings to list; 1 mark — apply `Heading 1` (and `Heading 2` for sections) to
them, then update the table.
(d) After all editing is complete, immediately before printing or exporting —
1 mark.

**Working:** (c) This is the standard failure, and the reason is worth stating
precisely: the word processor searches for a *style*, not for an appearance.

(d) Updating earlier is not wrong, but a table generated before the last edit
is out of date again — which defeats the purpose.
