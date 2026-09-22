---
subject: IT
topic: program-implementation
lesson: documenting-programs
title: Documenting Programs
objectives: ["8.6"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 8.6 (effectively document programs). Internal and external documentation. NOT YET checked against textbook for depth."
---

## Lesson

**Documentation** is everything written to explain a program — to the people
who will use it, and to the programmers who will have to change it later.

It is not decoration. Maintenance costs more over a program's life than writing
it did, and every hour of that maintenance is spent by somebody trying to work
out what the program does. Usually that somebody is the original programmer,
six months on, remembering nothing.

There are two kinds, and the distinction is the examinable part.

### Internal documentation

**Internal documentation** is inside the source code itself, written for
programmers. It is what makes a program readable.

**Comments.** Notes in the code that the compiler ignores. In Pascal they are
written between braces:

```pascal
{ Calculate the class average, excluding absentees }
average := total / present;
```

A comment should explain **why**, not what. This adds nothing:

```pascal
total := total + mark;   { add mark to total }
```

Anyone can see that. This earns its space:

```pascal
{ Absentees are excluded from the average, so divide
  by the number who sat, not the class size }
average := total / present;
```

The rule of thumb: if the code already says it, the comment is noise. Comment
the decisions, the assumptions and anything surprising.

**A header comment** at the top of the program, recording what it does, who
wrote it, when, and what it expects:

```pascal
{ ------------------------------------------------------
  Program : ClassResults
  Author  : A. Morris
  Date    : 21 September 2026
  Purpose : Reads 25 marks, prints the number who passed
            and the class average.
  Input   : 25 integer marks, 0 to 100
  Output  : Count of passes, class average
  ------------------------------------------------------ }
```

**Meaningful names.** `totalMarks` documents itself; `t` needs a comment to
rescue it. Good names are the cheapest documentation there is, because they
cannot go out of date the way a comment can.

**Indentation.** Indenting the body of every loop and decision shows the
structure at a glance. Code all flush to the left is legal and unreadable.

**White space and blank lines** separating the sections of a program.

### External documentation

**External documentation** is written outside the code, for the people who use
the system or who have to maintain it.

**A user manual** or user guide — for the people who operate the program:

- how to install and start it
- what each screen and option does
- what data to enter and in what form
- what the error messages mean and what to do about them
- worked examples

It is written in plain language, for someone who does not program and does not
want to. Jargon in a user manual is a failure of the manual.

**Technical (programmer) documentation** — for whoever maintains it:

- the problem definition, and the algorithm as pseudocode or a flowchart
- the program's structure and how the parts fit together
- the variables and data types used
- test data, expected results and actual results
- known limitations
- a change history

### The distinction, stated plainly

| | Internal | External |
|---|---|---|
| Where | Inside the source code | In separate documents |
| Written for | Programmers reading the code | Users, and maintainers |
| Examples | Comments, meaningful names, indentation | User manual, technical manual |

A question asking you to "distinguish between internal and external
documentation" wants exactly that: **inside the code, for programmers** against
**outside the code, for users and maintainers**.

### Why it matters

**Maintenance.** Most of a program's life is spent being changed. A program
nobody can understand cannot safely be changed, and eventually gets rewritten
from scratch — expensively.

**Handover.** Programmers leave. Undocumented programs leave with them.

**Users can work independently.** A good manual saves every user asking the
same question.

**It finds faults while you write.** Explaining a section in a comment and
finding you cannot is a reliable sign that it is wrong, or does too much.

**Marks.** In an examination and in the SBA, documentation is assessed
directly. Comments, meaningful names and indentation are the easiest marks in
the paper, and the easiest to forget.

### When to write it

Comments go in **as you write the code**, not afterwards. Documentation left
until the end is documentation that never happens, and if it does, it is
written by someone who has forgotten why they made the decisions.

The one thing worse than no comment is a **wrong** comment — one that was true
before the code changed underneath it. When you change code, change the comment
with it. A comment that lies is worse than silence, because it is believed.

## Flashcards

### 8.6 | What is documentation?
Everything written to explain a program — to the people who use it and to the
programmers who must maintain it.

### 8.6 | Distinguish between internal and external documentation.
**Internal** documentation is inside the source code, written for programmers.
**External** documentation is in separate documents, written for users and
maintainers.

### 8.6 | Give three examples of internal documentation.
Comments, meaningful variable names, and indentation. (Also white space and a
header comment.)

### 8.6 | Give two examples of external documentation.
A **user manual** and **technical (programmer) documentation**.

### 8.6 | What should a comment explain?
**Why** something is done — the decision, the assumption, the surprise. If the
code already says what is happening, the comment adds nothing.

### 8.6 | What should a program's header comment record?
What the program does, who wrote it, when, and what input it expects and output
it produces.

### 8.6 | What should a user manual contain?
How to install and start the program, what each option does, what data to
enter, what the error messages mean, and worked examples — in plain language.

### 8.6 | Name four things technical documentation should contain.
Any four: the problem definition; the algorithm (pseudocode or flowchart); the
program structure; the variables and data types; test data with expected and
actual results; known limitations; a change history.

### 8.6 | Why are meaningful variable names the cheapest documentation?
They cost nothing to write, explain themselves wherever they appear, and cannot
fall out of date the way a comment can.

### 8.6 | Why is a wrong comment worse than no comment?
It is believed. A comment left unchanged when the code changed misleads the
next reader, who trusts it instead of reading the code.

### 8.6 | When should comments be written?
As the code is written. Documentation left until the end is usually never
written, and if it is, the reasons behind the decisions have been forgotten.

### 8.6 | Why does documentation matter most for maintenance?
Most of a program's life is spent being changed, and a program nobody
understands cannot be changed safely.

## Questions

### 8.6 | mcq | 1 mark | difficulty 1
Which of the following is an example of **internal** documentation?

- A. A user manual
- B. Comments within the source code
- C. A training video
- D. An installation guide

**Answer:** B

**Working:** Internal documentation is inside the source code. The others are
all separate documents or materials, so they are external.

### 8.6 | mcq | 1 mark | difficulty 2
Which is the **best** comment for the statement `average := total / present;`?

- A. `{ divide total by present }`
- B. `{ calculate the average }`
- C. `{ absentees are excluded, so divide by the number who sat }`
- D. No comment is needed

**Answer:** C

**Working:** It explains **why** the divisor is `present` rather than the class
size — something the code cannot say for itself. Options A and B only repeat
what is already visible.

### 8.6 | mcq | 1 mark | difficulty 2
A user manual should be written for

- A. the programmer who will maintain the program
- B. the person who will operate the program
- C. the compiler
- D. the examiner only

**Answer:** B

**Working:** The user manual serves the operator and is written in plain
language. Maintainers are served by technical documentation.

### 8.6 | mcq | 1 mark | difficulty 3
Which of the following would **not** normally appear in technical
documentation?

- A. The algorithm as pseudocode or a flowchart
- B. The test data and its expected results
- C. Step-by-step instructions for a first-time user
- D. A list of the variables and their data types

**Answer:** C

**Working:** Instructions for a first-time user belong in the user manual. The
other three serve whoever must understand and change the program.

### 8.6 | mcq | 1 mark | difficulty 3
Why is a comment that no longer matches the code considered worse than no
comment at all?

- A. It makes the program run more slowly
- B. It is believed, and misleads the next person to read the code
- C. The compiler reports it as an error
- D. It increases the size of the executable file

**Answer:** B

**Working:** Comments are ignored by the compiler, so there is no effect on
speed, errors or file size. The harm is entirely to the reader, who trusts a
statement that is no longer true.

### 8.6 | structured | 9 marks | difficulty 3
A student has written a program that calculates electricity bills and is
preparing to hand it over to the office staff who will use it.

(a) Distinguish between **internal** and **external** documentation.
**(2 marks)**

(b) State **three** forms of internal documentation the student should include
in the program. **(3 marks)**

(c) State **three** items that should appear in the user manual. **(3 marks)**

(d) Give **one** reason why documentation is important even after the program
is working correctly. **(1 mark)**

**Answer:** (a) 1 mark — internal documentation is written inside the source
code, for programmers; 1 mark — external documentation is in separate
documents, for users and maintainers.
(b) 1 mark each, any three: comments explaining the code; a header comment
giving the program's purpose, author and date; meaningful variable names;
indentation of loops and decisions; blank lines separating sections.
(c) 1 mark each, any three: how to install and start the program; what each
option or screen does; what data to enter and in what form; the meaning of
error messages and what to do about them; worked examples; contact or support
details.
(d) Any one, 1 mark: the program will need to be changed later, and a program
nobody understands cannot be changed safely; the original programmer may leave;
users can work without asking for help.

**Working:** (a) Both halves are needed. Stating only "one is in the code"
scores one mark; the second comes from saying who each is written for.

(c) Items must be aimed at a **user**, not a programmer. Listing the variables
or the algorithm belongs in technical documentation and does not score here.
