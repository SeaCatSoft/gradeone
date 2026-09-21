---
subject: IT
topic: program-implementation
lesson: checks-and-tests
title: Checking and Testing Programs
objectives: ["8.3"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 8.3 (perform checks and tests on programs to verify correctness). Types of error, test data and validation checks. NOT YET checked against textbook for depth."
---

## Lesson

A program that runs is not a program that works. Verifying correctness means
showing that it produces the **right** results — and behaves sensibly when it
is given data it should refuse.

### The three types of error

**Syntax errors** break the rules of the language: a missing semicolon, a
misspelt keyword, an unclosed bracket. The compiler finds them all and
translates nothing until they are fixed. They are the easiest kind — the
compiler tells you the line.

**Run-time errors** appear while the program is running and stop it. Dividing
by zero, reading past the end of a file, running out of memory. The program is
legal; the *situation* is impossible.

**Logic errors** break nothing at all. The program compiles, runs to the end,
and gives the wrong answer. Writing `+` where you meant `*`, or `>` where you
meant `>=`, or dividing by 4 when there were 5 marks.

| Type | Found by | Program state |
|---|---|---|
| Syntax | The compiler | Does not translate |
| Run-time | The computer, while running | Stops part-way |
| Logic | Only by testing | Runs to the end, answer wrong |

Logic errors are the dangerous ones, because the program looks entirely
healthy. A program that crashes at least announces that something is wrong; one
with a logic error hands you a plausible number and says nothing.

### Checking before running

Two checks are worth doing before the program is ever run.

A **dry run** is tracing the program by hand with chosen data, exactly as you
traced the algorithm — the same trace table, applied to the code.

A **desk check** is reading the code against the algorithm, line by line, to
confirm it says what the algorithm said. It catches the slip where a correct
algorithm was typed in slightly wrong.

### Testing while running

**Test data** is data chosen to make faults show themselves, and it comes in
the same three kinds as for algorithms:

**Normal** — ordinary acceptable values. Marks of 45, 67 and 88.

**Extreme (boundary)** — values at the very edge of what is allowed, and either
side of every decision. For marks out of 100 with a pass at 50: 0, 100, and 49,
50, 51.

**Abnormal (invalid)** — values that should be rejected: −5, 150, `seven`, or
nothing at all.

For every test you must state the data, what you **expect**, and what you
actually **got**. A test with no expected result is not a test; it is just
running the program.

| Test data | Expected | Actual | Pass? |
|---|---|---|---|
| 45 | FAIL | FAIL | ✓ |
| 50 | PASS | FAIL | ✗ |
| 100 | PASS | PASS | ✓ |
| −5 | Rejected | Accepted, printed FAIL | ✗ |

Two faults, found by two carefully chosen values. The 50 shows `>` was used
where `>=` was meant; the −5 shows there is no validation.

### Validation

**Validation** is the program checking, as it runs, that the data it is given
is reasonable. It is how abnormal data gets rejected instead of processed.

| Check | Rejects |
|---|---|
| **Range check** | A mark of 150 or −5 where 0 to 100 is required |
| **Type check** | The word `seven` where a number is expected |
| **Presence check** | A required field left empty |
| **Length check** | A telephone number with 6 digits instead of 10 |
| **Format check** | A date typed as `31/31/2026` |
| **Reasonableness check** | An age of 200 — possible to type, not believable |

The usual structure is a `REPEAT … UNTIL` loop: ask, check, and ask again until
the value is acceptable.

### Validation is not verification

This distinction is examined.

**Validation** checks that data is **reasonable** — of the right type, in the
right range, present. A mark of 72 passes every validation check.

**Verification** checks that data has been **entered accurately** — that it is
what the source document actually said. If the student really scored 27 and the
clerk typed 72, no validation check in the world will notice: 72 is a perfectly
reasonable mark.

Verification is done by **double entry** (typing the data twice and comparing)
or by **proofreading** (reading the entered data back against the original).

A one-line summary: validation asks *could this be right?*, verification asks
*is this what was written down?*

### Finding the fault once a test fails

A failed test tells you something is wrong, not where. Narrowing it down:

- **Use the trace table.** Follow the program with the failing data and find
  the first row where a variable is not what it should be. The fault is at or
  just before that line.
- **Print intermediate values.** Temporarily print variables inside the loop to
  see what is actually happening. Remove them afterwards.
- **Use a debugger.** Run the program one statement at a time with the
  variables on display — a trace table the computer keeps for you.
- **Re-test everything after fixing.** A correction can break something that
  worked before, so the earlier tests are run again. This is why the tests are
  written down.

## Flashcards

### 8.3 | Name the three types of program error.
**Syntax** errors, **run-time** errors and **logic** errors.

### 8.3 | What is a syntax error, and what finds it?
An error breaking the rules of the programming language, such as a missing
semicolon. The **compiler** finds it, and the program does not translate.

### 8.3 | What is a run-time error? Give an example.
An error that appears while the program is running and stops it — such as
dividing by zero or reading past the end of a file.

### 8.3 | Why are logic errors the hardest to find?
Nothing reports them. The program compiles, runs to the end and produces a
plausible but wrong answer, so only comparing output with expected results
reveals it.

### 8.3 | What are the three kinds of test data?
**Normal** (ordinary acceptable values), **extreme** or boundary (values at the
edge of what is allowed), and **abnormal** or invalid (values that should be
rejected).

### 8.3 | What must be recorded for every test?
The test data, the **expected** result, and the **actual** result. A test with
no expected result is not a test.

### 8.3 | What is validation?
The program checking, as it runs, that the data given to it is reasonable —
the right type, in range, present.

### 8.3 | Name four validation checks.
Any four: range check, type check, presence check, length check, format check,
reasonableness check.

### 8.3 | Distinguish between validation and verification.
**Validation** checks that data is reasonable. **Verification** checks that it
was entered accurately — that it matches the source document.

> Hint: a mark of 72 typed in place of 27.

### 8.3 | Name two methods of verification.
**Double entry** — typing the data twice and comparing — and **proofreading**,
reading the entered data back against the original.

### 8.3 | Why must earlier tests be run again after a fault is corrected?
A correction can break something that previously worked. This is why every test
and its expected result is written down.

## Questions

### 8.3 | mcq | 1 mark | difficulty 1
Errors that occur when the rules of the programming language are not obeyed are
called

- A. syntax errors
- B. logic errors
- C. run-time errors
- D. execution errors

**Answer:** A

**Working:** Breaking the rules of the language is exactly what a syntax error
is, and the compiler refuses to translate until they are corrected.

### 8.3 | mcq | 1 mark | difficulty 2
A program runs to completion but calculates every average incorrectly. This is

- A. a syntax error
- B. a run-time error
- C. a logic error
- D. a compilation error

**Answer:** C

**Working:** The program obeyed the language and did not stop, so the fault is
in the method — the wrong operator, or dividing by the wrong number.

### 8.3 | mcq | 1 mark | difficulty 2
A program accepts marks from 0 to 100. Which check would reject a mark of 150?

- A. Presence check
- B. Range check
- C. Type check
- D. Format check

**Answer:** B

**Working:** A range check tests whether a value lies between stated limits.
A type check would only confirm that 150 is a number, which it is.

### 8.3 | mcq | 1 mark | difficulty 3
A clerk types a student's mark as 72 when the mark sheet says 27. Which of the
following would detect this?

- A. A range check
- B. A type check
- C. Double entry of the data
- D. A presence check

**Answer:** C

**Working:** 72 is a perfectly reasonable mark, so every validation check
accepts it. Only verification — typing it twice and comparing, or proofreading
against the mark sheet — catches a value that is valid but wrong.

### 8.3 | mcq | 1 mark | difficulty 3
A program is meant to pass students scoring 50 or more. Which single test value
would show that the programmer wrote `>` instead of `>=`?

- A. 49
- B. 50
- C. 75
- D. 0

**Answer:** B

**Working:** Only the boundary value behaves differently under the two
operators: 50 should pass and would fail. Every other value gives the same
result either way, which is why boundary data is tested first.

### 8.3 | structured | 10 marks | difficulty 4
A program reads a student's name and a mark out of 100, and prints `PASS` if
the mark is 50 or more and `FAIL` otherwise.

(a) Name and describe the **three** types of error that can occur in a program.
**(6 marks)**

(b) Give **one** example each of normal, extreme and abnormal test data for
this program. **(3 marks)**

(c) The mark 50 is entered and the program prints `FAIL`. Name the type of
error and state the likely cause. **(1 mark)**

**Answer:** (a) 2 marks each. Syntax error: breaks the rules of the language,
such as a missing semicolon; found by the compiler, and the program does not
translate. Run-time error: occurs while the program is running and stops it,
such as division by zero. Logic error: the program runs to completion but gives
the wrong result, such as using the wrong operator.
(b) 1 mark each: normal — any mark such as 45 or 67; extreme — 0, 100, 49, 50
or 51; abnormal — −5, 150, or a non-numeric entry such as `seven`.
(c) A logic error, caused by using `>` instead of `>=` in the comparison —
1 mark.

**Working:** (a) Each type needs both what it is and how it shows itself for
the full 2 marks. Naming alone is worth 1.

(b) Extreme data must be at a boundary: 45 is normal data, not extreme. The
values around the pass mark — 49, 50, 51 — are the most useful of all, as part
(c) shows.
