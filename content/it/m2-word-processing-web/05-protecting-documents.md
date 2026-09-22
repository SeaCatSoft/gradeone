---
subject: IT
topic: word-processing-web
lesson: protecting-documents
title: Protecting a Document
objectives: ["4.5"]
est_minutes: 16
status: draft
source: "Original prose written against syllabus objective 4.5 (appropriately use features that allow the protection of a document). NOT YET checked against textbook for depth."
---

## Lesson

A document may need protecting from two different things: people **seeing** it
who should not, and people **changing** it who should not. Word processors
provide separate features for each, and choosing the right one is what the
objective means by "appropriately".

### Password to open

A **password to open** encrypts the document. Without the password the file
cannot be read at all — opening it produces nothing but scrambled data.

This is the strongest protection available, and it is the right choice for
genuinely confidential material: examination papers, medical records, payroll.

Two warnings. **The password cannot be recovered.** There is no help desk; a
forgotten password usually means the document is gone. And a password is only
as good as its secrecy — one written on a note beside the computer, or emailed
alongside the file, protects nothing.

### Password to modify

A **password to modify** lets anyone open and read the document, but only
someone with the password may save changes to it. Everyone else can open it
**read-only**.

The right choice for a document that should be widely read but centrally
controlled: a policy, a price list, a form everyone works from.

The distinction is examined, so hold it clearly:

| | Password to open | Password to modify |
|---|---|---|
| Can others read it? | No | Yes |
| Can others change it? | No | Not without the password |
| Protects against | Unauthorised viewing | Unauthorised alteration |

### Read-only and Mark as Final

**Read-only recommended** asks whoever opens the document whether they want it
read-only. It is a courtesy, not a control — the reader may decline.

**Mark as Final** sets the document to read-only and shows a message saying it
is finished. Again, any reader may turn it off in a couple of clicks.

Both say *this is not meant to be edited*. Neither stops anyone determined. Use
them to prevent accidents, not to enforce anything.

### Restrict editing

**Restrict editing** allows fine control over what may be changed:

- **No changes (read-only)** — nothing may be altered.
- **Tracked changes only** — edits are allowed but always recorded.
- **Comments only** — readers may annotate but not alter the text.
- **Filling in forms** — only the form fields may be completed, and the rest
  of the document is locked. This is what makes a fillable form work, and it
  reappears in the forms lesson.

**Exceptions** can be granted, allowing named people or groups to edit
particular parts while the rest stays locked.

### Protection against loss

Protecting a document also means not losing it.

**Save regularly**, and rely on **AutoRecover** only as a backstop — it
recovers *most* of your work after a crash, not all of it.

**Keep backups**, and keep at least one somewhere else: a copy on the same
disc as the original is no protection against the disc failing, and none at all
against theft or fire.

**Version history**, offered by cloud services, keeps earlier versions of a
document so a bad edit can be undone long after the fact.

### Other protective features

**Digital signature** — a means of confirming who produced a document and that
it has not been altered since. If a single character changes, the signature no
longer validates.

**Redaction** — permanently removing sensitive text before a document is
shared. Note that drawing a black box over text does **not** redact it; the
words are still in the file underneath, and can be copied straight out. This
is a genuine and frequent failure.

**Inspect document / remove personal information** — strips hidden data such
as the author's name, comments, tracked changes and editing time before the
file leaves.

**Save as PDF** — not security exactly, but a practical protection: a PDF is
awkward to edit and preserves the layout, so it is the usual way to send a
finished document.

### Choosing appropriately

| Requirement | Feature |
|---|---|
| Nobody may read it without permission | Password to open |
| Anyone may read, only staff may change | Password to modify |
| Readers may suggest but not alter | Restrict editing — comments or tracked changes only |
| Users fill in fields, rest stays fixed | Restrict editing — filling in forms |
| Prove who wrote it and that it is unchanged | Digital signature |
| Remove author and comments before sending | Inspect document |
| Send a finished document unaltered | Save as PDF |

The general principle: **match the protection to the risk.** Password-protecting
a class newsletter is a nuisance to everyone and protects nothing worth
protecting. Marking an examination paper "final" and leaving it unencrypted
protects nothing either.

## Flashcards

### 4.5 | What does a password to open do?
Encrypts the document, so it cannot be read at all without the password.

### 4.5 | What does a password to modify do?
Lets anyone open and read the document, but only someone with the password may
save changes. Everyone else opens it read-only.

### 4.5 | Which protection would you use for a price list everyone must read but only head office may change?
A **password to modify** — readers can open it freely, but changes need the
password.

### 4.5 | Why is "Mark as Final" not real protection?
It only sets the document read-only and displays a message. Any reader can
switch it off in a couple of clicks; it prevents accidents, not determined
editing.

### 4.5 | Name four options offered by Restrict Editing.
No changes (read-only); tracked changes only; comments only; filling in forms
only.

### 4.5 | Which Restrict Editing option makes a fillable form work?
**Filling in forms** — only the form fields may be completed and the rest of
the document is locked.

### 4.5 | What happens if a password to open is forgotten?
The document usually cannot be recovered. There is no way to retrieve or reset
it.

### 4.5 | What does a digital signature confirm?
Who produced the document, and that it has not been altered since — if one
character changes, the signature no longer validates.

### 4.5 | Why does drawing a black box over text not redact it?
The text is still in the file underneath the box and can be copied out. Proper
redaction removes it.

### 4.5 | What does "Inspect document" remove?
Hidden data such as the author's name, comments, tracked changes and editing
time, before the file is shared.

### 4.5 | Why is a backup on the same disc as the original not a backup?
If the disc fails, both copies are lost. A backup must be kept somewhere else.

## Questions

### 4.5 | mcq | 1 mark | difficulty 2
A school wants staff to be able to read a policy document but not change it,
except for the principal. The most appropriate feature is

- A. a password to open
- B. a password to modify
- C. Mark as Final
- D. Save as PDF

**Answer:** B

**Working:** Everyone needs to read it, so encryption would be wrong. A
password to modify allows open reading while restricting who may save changes.

### 4.5 | mcq | 1 mark | difficulty 2
Which feature prevents a document from being read at all without the correct
password?

- A. Password to open
- B. Password to modify
- C. Read-only recommended
- D. Restrict editing

**Answer:** A

**Working:** A password to open encrypts the file, so its contents cannot be
read without it. The others all allow reading.

### 4.5 | mcq | 1 mark | difficulty 3
A user forgets the password used to open an encrypted document. What is the
likely outcome?

- A. The password can be reset from the File menu
- B. The document generally cannot be recovered
- C. The document opens read-only instead
- D. The software emails the password to the author

**Answer:** B

**Working:** Encryption without a recovery mechanism means the data is
genuinely inaccessible. This is why the password must be recorded somewhere
safe and separate.

### 4.5 | mcq | 1 mark | difficulty 3
Reviewers should be able to suggest wording but not alter the agreed text. The
most appropriate setting is Restrict Editing with

- A. no changes (read-only)
- B. comments only
- C. filling in forms
- D. no restriction

**Answer:** B

**Working:** Comments let a reviewer say something about the text without
changing it. Tracked changes only would also be defensible, but it does allow
the text itself to be edited.

### 4.5 | mcq | 1 mark | difficulty 3
A civil servant covers confidential names in a report with black rectangles and
sends the file out. Why is this unsafe?

- A. The rectangles will not print
- B. The text remains in the file beneath them and can be copied out
- C. The file becomes too large to email
- D. The document cannot be opened by other software

**Answer:** B

**Working:** A drawn shape sits on top of the text without removing it. Proper
redaction deletes the words from the file.

### 4.5 | structured | 9 marks | difficulty 3
A medical clinic keeps several documents in electronic form.

(a) Name the most appropriate protection feature for each, with a reason:

(i) a patient's medical record, which only doctors may read **(2 marks)**

(ii) a price list that all staff read but only the manager may change
**(2 marks)**

(iii) a questionnaire in which patients complete fields but must not alter the
questions **(2 marks)**

(b) State **two** things the clinic should do to protect its documents against
loss. **(2 marks)**

(c) State **one** reason why "Mark as Final" would be inadequate for the
patient record. **(1 mark)**

**Answer:** (a)(i) 1 mark — a password to open (encryption); 1 mark — it
prevents the document being read at all by anyone without the password.
(ii) 1 mark — a password to modify; 1 mark — all staff can open and read it,
but only someone with the password can save changes.
(iii) 1 mark — Restrict Editing set to "filling in forms"; 1 mark — only the
form fields can be completed and the rest of the document is locked.
(b) 1 mark each, any two: keep regular backups; keep at least one backup in a
different location; save work frequently; use version history so a bad edit can
be undone.
(c) It only sets the document read-only and can be switched off by any reader,
so it does not prevent unauthorised people reading the record — 1 mark.

**Working:** (a) Each part needs the feature *and* a reason tied to the
requirement. The three cases are deliberately different: one restricts reading,
one restricts saving, one restricts which parts may be altered.

(b) "Back it up" alone is worth one mark. The second comes from keeping a copy
elsewhere — a backup on the same machine is lost with it.
