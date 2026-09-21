---
subject: IT
topic: computer-fundamentals
lesson: validation-and-verification
title: Validation and Verification
objectives: ["1.13"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 1.13 (differentiate between validation and verification of data). Choosing checks for a scenario is the next lesson. NOT YET checked against textbook for depth."
---

## Lesson

Garbage in, garbage out. Processing cannot repair bad data, so bad data must be
stopped as it is entered. There are two defences, and telling them apart is the
whole of this objective.

**Validation** is an automatic check, made by the computer, that data is
**reasonable** — of the right type, in the right range, present, correctly
formed.

**Verification** is a check that data has been **entered accurately** — that
what was typed matches the source it was copied from.

### Why both are needed

A student's mark is written on a paper mark sheet as `27`. The clerk types
`72`.

**Validation** examines `72` and finds nothing wrong. It is a number, it lies
between 0 and 100, it is present and correctly formed. Every check passes,
because 72 is a perfectly reasonable mark.

**Verification** compares what was typed against the mark sheet and finds the
mismatch at once.

That single example is the answer to any question asking you to differentiate
them:

> **Validation** asks *could this be right?*
> **Verification** asks *is this what was written down?*

And the consequence: **validation cannot detect a valid but wrong value.** A
number in range, of the right type, correctly formatted — and simply not the
number on the form. Only verification catches that.

### The comparison

| | Validation | Verification |
|---|---|---|
| Checks | That data is reasonable | That data was entered accurately |
| Compares against | Rules built into the system | The original source |
| Carried out by | The computer, automatically | A person, or by double entry |
| Catches | Impossible or malformed values | Typing and transcription errors |
| Misses | A valid but incorrect value | A wrong value that was on the source document |

Note the last row. Verification has its own blind spot: if the **source
document itself** is wrong, verification faithfully confirms the wrong value.
Neither check guarantees correct data; each covers what the other cannot.

### Validation checks

| Check | Tests | Rejects |
|---|---|---|
| **Range check** | The value lies between limits | A mark of 150 where 0–100 is allowed |
| **Type check** (data type) | The data is of the right type | The word `seven` in a numeric field |
| **Presence check** | A required field is not empty | A blank surname |
| **Length check** | The right number of characters | A 6-digit telephone number where 10 are needed |
| **Format check** (picture) | The right pattern | A date typed `31/31/2026`; an ID not matching `A999999` |
| **Consistency check** | Two fields agree | `Sex = Male` with `Title = Mrs` |
| **Reasonableness check** | The value is believable | An age of 200 — possible to type, not credible |
| **Check digit** | An extra digit calculated from the others | A mistyped or transposed account number |

**Check digits** are worth understanding. An extra digit is calculated from the
rest of a number and appended to it — as on barcodes, ISBNs and bank account
numbers. When the number is entered, the computer recalculates the digit and
compares. If a digit was mistyped, or two digits were swapped, the calculation
no longer agrees and the entry is rejected.

It is the one validation check that catches a **transposition** — typing
`12435` for `12345` — which every other check accepts happily.

### Verification methods

**Double entry.** The data is entered twice, by two people or twice by the
same person, and the computer compares. A mismatch is queried. This is why you
type a new password twice.

**Proofreading (visual check).** A person reads the entered data back against
the source document. Cheap, slow, and unreliable over long stretches — the eye
stops seeing errors after a while.

**Screen verification.** The system displays what was entered and asks the user
to confirm it before it is accepted. This is what an ATM does before completing
a transaction.

Double entry is the most reliable, because two people rarely make the same
mistake in the same place. Proofreading is the weakest, but it is the only
option when the data cannot be entered twice.

### Where each happens

**Validation happens as the data is entered**, automatically, by rules built
into the program or database. It applies to every user and every entry, without
anyone remembering to do it. This is why validation rules belong in the
**database**, not in a note pinned to the wall.

**Verification happens around the entry** — before it, by reading carefully;
during it, by typing twice; or after it, by checking a printout.

### A common confusion

Validation and verification are also used in a second sense in system
development — verification meaning "did we build the system right?" and
validation "did we build the right system?"

That is a different topic. For this objective, stay with data entry.

## Flashcards

### 1.13 | Define validation.
An automatic check made by the computer that data is **reasonable** — of the
right type, in range, present and correctly formed.

### 1.13 | Define verification.
A check that data has been **entered accurately** — that what was typed matches
the original source.

### 1.13 | State the one-line difference between validation and verification.
Validation asks *could this be right?*; verification asks *is this what was
written down?*

### 1.13 | A mark of 27 is typed as 72. Which check catches it and why?
**Verification.** Validation accepts 72 because it is a number in range and
therefore perfectly reasonable; only a comparison against the mark sheet
reveals the error.

> Hint: is 72 an unreasonable mark?

### 1.13 | What can validation never detect?
A **valid but incorrect** value — one of the right type, in range and correctly
formatted, that simply is not the value on the source document.

### 1.13 | What is verification's own blind spot?
If the source document itself is wrong, verification faithfully confirms the
wrong value.

### 1.13 | Name six validation checks.
Any six: range check; type check; presence check; length check; format check;
consistency check; reasonableness check; check digit.

### 1.13 | What does a range check test? Give an example.
That a value lies between stated limits — for example a mark between 0 and 100,
rejecting 150.

### 1.13 | What does a presence check test?
That a required field has not been left empty.

### 1.13 | What is a format (picture) check?
A check that data follows a required pattern — a date as `dd/mm/yyyy`, or an ID
matching a letter followed by six digits.

### 1.13 | What is a check digit, and which error does only it catch?
An extra digit calculated from the others and appended to a number. It is the
only check that detects a **transposition**, such as typing `12435` for
`12345`.

### 1.13 | Name three methods of verification.
**Double entry** (typing it twice and comparing); **proofreading** (reading it
back against the source); **screen verification** (displaying it for the user
to confirm).

### 1.13 | Why is double entry more reliable than proofreading?
Two people rarely make the same mistake in the same place, whereas the eye
stops noticing errors when reading long stretches.

### 1.13 | Why should validation rules live in the database rather than in staff instructions?
The database applies them to every user and every entry automatically, instead
of depending on each person remembering.

## Questions

### 1.13 | mcq | 1 mark | difficulty 1
Which of the following is a **validation** check?

- A. Reading the entered data back against the source document
- B. Checking that a mark lies between 0 and 100
- C. Typing the data twice and comparing
- D. Asking the user to confirm what is displayed

**Answer:** B

**Working:** Testing that a value lies between limits is a range check, made
automatically by the computer. The other three are verification methods.

### 1.13 | mcq | 1 mark | difficulty 2
A clerk types a customer's age as 34 when the form says 43. Which would detect
this?

- A. A range check
- B. A presence check
- C. Verification by double entry
- D. A type check

**Answer:** C

**Working:** 34 is a number, present and within any sensible range, so every
validation check accepts it. Only comparing against the form reveals that it is
the wrong number.

### 1.13 | mcq | 1 mark | difficulty 2
A field must contain a date written as `dd/mm/yyyy`. The appropriate check is a

- A. range check
- B. presence check
- C. format check
- D. check digit

**Answer:** C

**Working:** A format, or picture, check tests that the data follows a required
pattern.

### 1.13 | mcq | 1 mark | difficulty 3
An account number `4827` is typed as `4287`. Which validation check is most
likely to detect this?

- A. A length check
- B. A check digit
- C. A presence check
- D. A type check

**Answer:** B

**Working:** The digits have been transposed, so the length, type and presence
are all still correct. Only a check digit, recalculated from the number, no
longer agrees.

### 1.13 | mcq | 1 mark | difficulty 3
Which statement about validation is correct?

- A. It guarantees the data is correct
- B. It confirms the data matches the source document
- C. It checks that the data is reasonable, but cannot detect a valid wrong value
- D. It is carried out by a person reading the data back

**Answer:** C

**Working:** Validation tests reasonableness only. A value that is of the right
type and in range passes even when it is not the value that should have been
entered.

### 1.13 | mcq | 1 mark | difficulty 3
Why is a user asked to type a new password twice?

- A. To validate its length
- B. To verify that it was typed as intended
- C. To check it against a dictionary
- D. To encrypt it

**Answer:** B

**Working:** This is double entry — a verification method. Since the password
is not displayed, there is no other way to confirm the user typed what they
meant.

### 1.13 | structured | 10 marks | difficulty 3
A clinic enters patients' details from paper forms into a computer system.

(a) Distinguish between **validation** and **verification**. **(4 marks)**

(b) A patient's age is written as 45 on the form but entered as 54.

(i) State whether validation would detect this, giving a reason. **(2 marks)**

(ii) Name a method that would detect it, and describe how it works.
**(2 marks)**

(c) Name **two** validation checks the clinic could apply, naming the field in
each case. **(2 marks)**

**Answer:** (a) 1 mark — validation is an automatic check by the computer;
1 mark — that data is reasonable, such as of the right type or within a range;
1 mark — verification checks that data was entered accurately; 1 mark — by
comparing it against the original source document.
(b)(i) 1 mark — no; 1 mark — 54 is a number within a reasonable range for an
age, so every validation check accepts it. It is valid but wrong.
(ii) 1 mark — double entry (accept proofreading or screen verification);
1 mark — the data is entered twice and the computer compares the two entries,
querying any mismatch.
(c) 1 mark each, any two with the field named: a presence check on surname; a
range check on age, for example 0 to 120; a format check on the date of birth;
a length check on the telephone number; a type check on any numeric field.

**Working:** (a) The four marks split as definition plus mechanism for each.
Saying only "validation is done by the computer and verification by a person"
scores two — what each one checks is the other half.

(b)(i) The reason is where the mark is. "No" alone earns nothing; the point is
that 54 is a *reasonable* age, which is all validation can test for.
