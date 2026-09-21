---
subject: IT
topic: program-implementation
lesson: implementing-a-program
title: The Steps in Implementing a Program
objectives: ["8.2"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 8.2 (describe the sequence of steps in implementing a program). NOT YET checked against textbook for depth."
---

## Lesson

**Implementation** is turning a tested algorithm into a working program. It
begins where Section 7 ended: the method has already been worked out, written
as pseudocode or a flowchart, and traced by hand.

The steps below are a sequence, and an examination will ask for them in order.

### The five steps

**1. Create the source code.** Type the program, in a chosen high-level
language, following the algorithm. What you have typed is the **source code**,
and it is saved as an ordinary text file.

**2. Compile (translate) the source code.** The compiler checks the program
against the rules of the language and translates it into machine language. Any
statement breaking those rules is reported as a **syntax error** and nothing is
produced until they are all corrected. The output of a successful compilation
is the **object code**.

**3. Link the object code.** Programs use ready-made routines that the
programmer did not write — printing to the screen, calculating a square root,
opening a file. The **linker** joins the object code to those library routines,
producing a single complete **executable** file.

**4. Execute (run) the program.** The executable is loaded into memory and
carried out. This is where run-time and logic errors appear, because they
cannot show up until the program actually runs.

**5. Maintain the program.** Correct faults found later, and change the program
as requirements change. This step never really ends, and over a program's life
it costs more than all the others together.

| Step | What it produces |
|---|---|
| Create source code | Source code (text) |
| Compile | Object code (machine language) |
| Link | An executable file |
| Execute | Results |
| Maintain | A corrected or updated program |

### Why linking is a separate step

It is easy to assume compiling produces something ready to run. It does not,
quite.

Your program calls routines held in libraries, and it may itself be built from
several separately compiled files. The object code from compilation contains
gaps where those calls are — the compiler knows a routine is being called but
not where it lives. The linker fills the gaps and produces one complete file.

This is worth remembering because "linking" is a favourite examination answer,
and because it explains a common error message: a program that compiles
successfully can still fail to link if a routine it calls cannot be found.

### Errors, and where each one appears

The step at which a fault shows up tells you what kind of fault it is.

**Syntax errors** break the rules of the language — a missing semicolon, a
misspelt keyword. The **compiler** finds them, and the program does not
translate at all.

**Run-time errors** stop a running program: dividing by zero, or reading past
the end of a file. The program compiles and links perfectly and then fails
during **execution**.

**Logic errors** break nothing. The program compiles, links, runs to the end,
and gives the wrong answer. Nothing reports them — only testing against
expected results finds them.

That progression matters: as you move down the list, the errors get harder to
find, because there is less and less to tell you they are there.

### Debugging

**Debugging** is locating and correcting errors. It is not a separate step so
much as something that sends you back to step 1 — every correction means
editing the source code and compiling again.

A **debugger** is a tool that helps by letting you run the program one
statement at a time and look at the variables as it goes. It is the computer's
version of the trace table.

### Interpreted programs

A program run by an **interpreter** does not follow all five steps. There is no
separate compile-and-link producing an executable: the interpreter reads a
statement, translates it and carries it out, then moves to the next.

That is why an interpreted program stops at its **first** error rather than
listing them all — it had not looked at the rest of the program yet.

### Where implementation sits

Implementation comes **after** the five problem-solving steps of Section 7, and
it is deliberately last. By the time you start typing, the problem has been
defined, a solution chosen, an algorithm written and traced. All the thinking
is done; typing it into a language is comparatively mechanical.

Beginners reverse this and start at the keyboard. The result is a program that
compiles, links, runs, and answers the wrong question — the one error none of
the five steps will catch for you.

## Flashcards

### 8.2 | List the steps in implementing a program, in order.
1. Create the source code. 2. Compile it. 3. Link the object code.
4. Execute (run) the program. 5. Maintain it.

### 8.2 | What is source code?
The program as typed by the programmer in a high-level language, before
translation.

### 8.2 | What does compiling produce?
**Object code** — the machine-language version of the program, not yet ready to
run.

### 8.2 | What does the linker do?
Joins the object code to the library routines the program uses, producing a
single complete **executable** file.

### 8.2 | Why can a program compile successfully and still fail to link?
Compiling checks only the program's own statements. Linking must find every
library routine it calls, and fails if one cannot be found.

### 8.2 | At which step are syntax errors found?
At **compilation**. The program breaks the rules of the language, so it does
not translate at all.

### 8.2 | At which step do run-time errors appear, and why?
At **execution** — they depend on what actually happens while the program runs,
such as dividing by zero, so they cannot show up earlier.

### 8.2 | Which kind of error is reported by nothing at all?
A **logic error**. The program compiles, links and runs to the end, but gives
the wrong answer. Only testing against expected results finds it.

### 8.2 | What is debugging?
Locating and correcting errors in a program. Each correction means editing the
source code and translating again.

### 8.2 | Why does an interpreted program not produce an executable file?
The interpreter translates and carries out one statement at a time as the
program runs, so nothing translated is kept.

### 8.2 | Which step costs the most over a program's lifetime?
**Maintenance** — correcting faults found later and changing the program as
requirements change.

## Questions

### 8.2 | mcq | 1 mark | difficulty 2
Program implementation involves a number of steps. Which of the following is
**not** one of them?

- A. Linking
- B. Bonding
- C. Executing
- D. Compiling

**Answer:** B

**Working:** Bonding is not a stage of implementation. The genuine steps are
creating the source code, compiling, linking, executing and maintaining.

### 8.2 | mcq | 1 mark | difficulty 2
What is produced when source code is compiled successfully?

- A. An executable file
- B. Object code
- C. A flowchart
- D. Source code

**Answer:** B

**Working:** Compilation produces object code. It becomes an executable only
after linking joins it to the library routines it uses.

### 8.2 | mcq | 1 mark | difficulty 3
A program compiles and links with no errors reported, runs to completion, but
prints an average that is too high. This is

- A. a syntax error
- B. a run-time error
- C. a logic error
- D. a linking error

**Answer:** C

**Working:** Nothing was broken in the rules of the language and nothing
stopped the program, so the fault is in the method. Logic errors are reported
by nothing and are found only by comparing output with expected results.

### 8.2 | mcq | 1 mark | difficulty 2
Which step joins a program's object code to the library routines it uses?

- A. Compiling
- B. Linking
- C. Executing
- D. Interpreting

**Answer:** B

**Working:** The compiler leaves gaps where library routines are called; the
linker fills them and produces one complete executable file.

### 8.2 | mcq | 1 mark | difficulty 3
A program divides a total by a count that turns out to be zero, and stops
during execution. This is best described as

- A. a syntax error found by the compiler
- B. a run-time error
- C. a logic error that produces a wrong answer
- D. a linking error

**Answer:** B

**Working:** The statement is perfectly legal, so it compiles; it fails only
when the data makes the division impossible. Errors that appear only while the
program runs are run-time errors.

### 8.2 | structured | 9 marks | difficulty 3
A student has written and tested an algorithm for calculating electricity
bills, and now wishes to implement it.

(a) State, in order, the **five** steps in implementing the program.
**(5 marks)**

(b) Name the file produced by each of the following:

(i) compiling the source code **(1 mark)**

(ii) linking **(1 mark)**

(c) The program compiles and runs, but every bill printed is ten times too
large. Name the type of error, and state how it would be found. **(2 marks)**

**Answer:** (a) 1 mark each, in order: create (type) the source code; compile
the source code; link the object code; execute (run) the program; maintain the
program.
(b)(i) Object code. (ii) An executable file.
(c) 1 mark — a logic error; 1 mark — by testing the program with data whose
correct results are known, and comparing the output with those results (accept:
by tracing or using a debugger).

**Working:** (a) The order carries the marks. Note that "debugging" is not one
of the five: correcting an error sends you back to editing the source code.

(c) The program obeys the language's rules and does not stop, so neither the
compiler nor the run gives any warning. Only a comparison with an expected
result reveals it — which is why the algorithm is traced by hand first.
