---
subject: IT
topic: word-processing-web
lesson: fillable-forms
title: Creating a Fillable Electronic Form
objectives: ["4.8"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 4.8 (create a fillable electronic form for online use). NOT YET checked against textbook for depth."
---

## Lesson

A **fillable electronic form** is a document with spaces the user completes on
screen. The questions are fixed; only the answers can be entered.

An application form, a survey, a booking request, a registration form — each is
a document where the person filling it in must be able to add their answers and
must not be able to change the questions.

### Why not just send a document?

Send an ordinary document and people will type over the questions, delete
sections, change the layout and return it in a form nothing can process. Some
will answer in the wrong place.

A proper form fixes all of that:

**The questions are protected.** Only the fields can be filled in.

**Answers arrive in a known place**, which is what makes them possible to
collect and count.

**Input can be controlled.** A drop-down list offers only the valid answers, a
date picker cannot produce 31 February, and a tick box has exactly two states.

**It can be completed and returned without printing**, which is what "for
online use" means.

### The controls

| Control | Used for | Example |
|---|---|---|
| **Text field** | Free typing | Name, address |
| **Number / date field** | A number or a date | Date of birth |
| **Check box** | A yes/no answer, or several choices at once | "Tick all subjects taken" |
| **Radio button (option button)** | Exactly one choice from a few | Sex: M or F |
| **Drop-down list (combo box)** | One choice from many | Parish, form class |
| **List box** | One choice from a visible list | Country |
| **Label / static text** | The questions themselves | "Surname:" |
| **Button** | An action | Submit, Clear |

The distinction worth holding: **check boxes allow several choices at once;
radio buttons allow exactly one.** "Which subjects do you take?" needs check
boxes. "Which parish do you live in?" needs radio buttons or a drop-down.

Use a **drop-down** rather than radio buttons when the list is long — fourteen
parishes as radio buttons fills the page.

### Choosing the right control

The general rule is to **let the user choose rather than type** whenever the
valid answers are known. Every free-text field is an invitation to spelling
variations: a parish field typed by hand will collect `St Catherine`,
`St. Catherine`, `Saint Catherine` and `st catherine`, and nothing can count
them without cleaning them up first.

A drop-down list makes the wrong answer impossible rather than merely
discouraged.

### Building the form

1. **Plan the form.** Decide what information is needed, in a sensible order,
   and what type each answer is.
2. **Lay out the questions**, often in a table so that labels and fields line
   up.
3. **Show the Developer tab**, which is where the form controls live in most
   word processors.
4. **Insert a control** for each answer, choosing the appropriate type.
5. **Set each control's properties** — the items in a drop-down, the date
   format, a default value, whether the field is required, and **placeholder
   text** telling the user what to enter.
6. **Protect the form** by restricting editing to "filling in forms", so only
   the fields may be completed.
7. **Test it** by filling it in yourself, including leaving required fields
   blank and entering a deliberately wrong value.
8. **Distribute it**, as a file or through an online form service.

Step 6 is the one that makes it a form rather than a document with boxes drawn
on it.

### Designing a form people can complete

- **Group related questions** — all the personal details together, all the
  subject choices together.
- **Order the questions** as the person will have the information to hand, and
  as any paper original does.
- **Label every field clearly**, and say what format is wanted:
  `Date of birth (dd/mm/yyyy)`.
- **Mark which fields are required**, so nobody guesses.
- **Keep it as short as it can be.** Every extra question costs you completed
  forms.
- **Give clear instructions** at the top.
- **Leave enough room** in text fields for a long answer.
- **Provide feedback** — a message saying the form has been submitted.

### Validation on a form

The same idea as in a spreadsheet or a database, applied at the point of entry:

| Check | Rejects |
|---|---|
| Required field | A blank where an answer is needed |
| Range | An age of 200 |
| Type | Letters in a number field |
| Length | A telephone number of six digits |
| Format | A date typed as `31/31/2026` |

Validation on the form catches an error while the person is still there to
correct it, which is far better than discovering it later with no way to ask.

### Online forms

A form may be a protected word-processor document that is emailed back, or it
may be a genuinely online form — a web page built with a service such as Google
Forms or Microsoft Forms.

The online kind has real advantages: responses are **collected automatically**,
usually straight into a spreadsheet, so no one retypes them; the form can be
filled in on a phone; and the results can be summarised as they arrive.

The trade-offs are that it needs an internet connection, the responses sit on
somebody else's service, and any personal data collected has to be looked
after properly.

### Forms in other applications

A form in a **database** does the same job for one record of a table, and a web
page can carry a form whose fields are `<input>` elements. The principles are
identical everywhere: fixed questions, controlled answers, validation at the
point of entry.

## Flashcards

### 4.8 | What is a fillable electronic form?
A document with fields a user completes on screen, where the questions are
fixed and only the answers can be entered.

### 4.8 | Name five controls used on a form.
Any five: text field, number or date field, check box, radio (option) button,
drop-down list, list box, label, button.

### 4.8 | What is the difference between a check box and a radio button?
**Check boxes** allow several choices at once. **Radio buttons** allow exactly
one choice from the group.

> Hint: "tick all that apply" against "choose one".

### 4.8 | When is a drop-down list better than radio buttons?
When the list of choices is long — fourteen parishes as radio buttons would
fill the page.

### 4.8 | Why offer a drop-down list instead of a text field where the valid answers are known?
Typed answers collect spelling variations — `St Catherine`, `Saint Catherine`,
`st. catherine` — which cannot be counted without cleaning. A list makes the
wrong answer impossible.

### 4.8 | Which setting turns a document with controls into a working form?
Restrict Editing set to **filling in forms**, so only the fields may be
completed and the questions are locked.

### 4.8 | List the steps in creating a fillable form.
Plan the questions; lay them out, often in a table; show the Developer tab;
insert a control for each answer; set each control's properties; protect the
form for filling in only; test it; distribute it.

### 4.8 | Name four validation checks that can be applied to a form field.
Any four: required field; range check; type check; length check; format check.

### 4.8 | Why is validation on a form better than checking the answers later?
The error is caught while the person is still there to correct it, rather than
discovered afterwards with no way to ask.

### 4.8 | Give two advantages of an online form over a form emailed as a document.
Any two: responses are collected automatically, often into a spreadsheet, so
nobody retypes them; it can be completed on a phone; results can be summarised
as they arrive.

### 4.8 | Give two disadvantages of an online form.
It requires an internet connection; the responses are held on someone else's
service; any personal data collected must be protected properly.

### 4.8 | Name three things that make a form easier to complete.
Any three: group related questions; label every field and state the format
wanted; mark required fields; keep it short; give clear instructions; leave
enough room for long answers.

## Questions

### 4.8 | mcq | 1 mark | difficulty 2
A form asks "Which subjects do you take?" and the student may take several.
The appropriate control is

- A. a radio button group
- B. check boxes
- C. a single text field
- D. a date picker

**Answer:** B

**Working:** Check boxes allow more than one to be ticked. Radio buttons allow
only one choice from the group, which would prevent a student naming all their
subjects.

### 4.8 | mcq | 1 mark | difficulty 2
A form must record which **one** of fourteen parishes a person lives in. The
best control is

- A. a text field
- B. a drop-down list
- C. check boxes
- D. a button

**Answer:** B

**Working:** Only one answer is wanted, and fourteen radio buttons would fill
the page. A drop-down offers one choice from many in little space — and unlike
a text field, it cannot be misspelt.

### 4.8 | mcq | 1 mark | difficulty 3
Which setting prevents a user from altering the questions on a word-processor
form while still allowing the fields to be completed?

- A. Mark as Final
- B. A password to open
- C. Restrict Editing — filling in forms
- D. Save as PDF

**Answer:** C

**Working:** This option locks everything except the form fields. Marking as
final can be switched off, and a password to open would prevent the form being
read at all.

### 4.8 | mcq | 1 mark | difficulty 3
A survey collects the parish as free text, and the results include
`St Catherine`, `St. Catherine` and `saint catherine`. The best way to prevent
this is to

- A. add a note asking people to spell carefully
- B. replace the text field with a drop-down list of the parishes
- C. make the field required
- D. increase the field length

**Answer:** B

**Working:** A list makes an invalid answer impossible, rather than merely
discouraged. Instructions depend on people reading them, and neither a required
field nor a longer one addresses spelling.

### 4.8 | mcq | 1 mark | difficulty 2
Which is an advantage of an online form over a form emailed as a document?

- A. It works without an internet connection
- B. Responses are collected automatically, often into a spreadsheet
- C. The responses are stored only on the user's own computer
- D. It cannot be completed on a phone

**Answer:** B

**Working:** Automatic collection removes the retyping step, which is the main
practical gain. The other three options are either false or state a
disadvantage.

### 4.8 | structured | 10 marks | difficulty 3
A school wants an electronic form for students to register for after-school
clubs. It must collect the student's name, form class (one of 24), date of
birth, the clubs they wish to join (they may choose several), and whether they
need transport home.

(a) State the most suitable control for each of the following, with a reason:

(i) the form class **(2 marks)**

(ii) the clubs they wish to join **(2 marks)**

(iii) whether transport is needed **(1 mark)**

(b) State the feature used to prevent students from altering the questions.
**(1 mark)**

(c) State **two** validation checks the form should apply, naming the field in
each case. **(2 marks)**

(d) State **two** things the designer should do to make the form easier to
complete. **(2 marks)**

**Answer:** (a)(i) 1 mark — a drop-down list; 1 mark — one choice is needed
from 24, too many for radio buttons, and a list prevents misspelling.
(ii) 1 mark — check boxes; 1 mark — several clubs may be chosen at once.
(iii) A check box (accept: radio buttons for Yes/No) — 1 mark.
(b) Restrict Editing set to "filling in forms" — 1 mark.
(c) 1 mark each, any two with the field named: name is a required field; date
of birth must be a valid date, or within a sensible range; at least one club
must be chosen; form class must be selected from the list.
(d) 1 mark each, any two: group related questions together; label each field
and state the format wanted; mark which fields are required; keep the form
short; give clear instructions at the top; provide confirmation once submitted.

**Working:** (a) The three parts test the same decision in three forms: how
many answers are allowed, and how many choices there are. One of many →
drop-down; several of few → check boxes; yes or no → a single check box.
