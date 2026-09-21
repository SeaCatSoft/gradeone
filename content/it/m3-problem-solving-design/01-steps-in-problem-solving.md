---
subject: IT
topic: problem-solving-design
lesson: steps-in-problem-solving
title: The Steps in Problem-Solving
objectives: ["7.1"]
est_minutes: 16
status: draft
source: "Original prose written against syllabus objective 7.1 (outline the steps in problem-solving). NOT YET checked against textbook for depth."
---

## Lesson

A computer cannot solve a problem. It can only carry out a solution someone
else has already worked out. All the thinking happens before a single line of
code is written, and this section is about that thinking.

The work is done in a fixed order, because each step needs the one before it.

### The five steps

**1. Define the problem.** State exactly what has to be done: what information
you will be given, and what result you must produce. Nothing else.

**2. Propose and evaluate possible solutions.** There is usually more than one
way. List them and weigh them up.

**3. Determine the most efficient solution.** Choose one, on stated grounds —
speed, memory used, simplicity, cost.

**4. Develop and represent the algorithm.** Write the chosen method out as a
precise sequence of steps, as pseudocode or a flowchart.

**5. Test and validate the solution.** Work through the algorithm by hand with
chosen data and check that it gives the right answers.

Learn these in order. A question asking you to "outline the steps in
problem-solving" wants these five, and marks are given for the sequence as much
as the names.

### Why definition comes first

Most failed programs solve the wrong problem — correctly.

"Work out the students' results" is not a definition. Results out of what? Is
a pass 50 or 40? What happens to a student who was absent? Are marks rounded
before or after averaging? Until those are settled, no algorithm can be right,
because there is nothing for it to be right *about*.

A properly defined problem states the **input** (what you are given), the
**processing** (what must be done with it) and the **output** (what must be
produced). That structure is the subject of a later lesson, but the habit
starts here: before solving, say precisely what solving means.

### Why more than one solution

Step 2 exists because the first idea is rarely the best one, and you cannot
know that until you have a second to compare it against.

Take finding the highest mark in a list of 500. One method sorts the whole list
into order and takes the last entry. Another runs through once, remembering the
largest seen so far. Both give the right answer. The second does far less work.

Without step 2 you would have written the first one and never known.

### Choosing on stated grounds

"Most efficient" needs a measure, and there is more than one:

| Measure | Question it asks |
|---|---|
| Speed | How many steps does it take? |
| Memory | How much data must be held at once? |
| Simplicity | How easy is it to write, read and correct? |
| Cost | What does it need — hardware, software, training? |

These pull against one another. The fastest method often needs the most memory;
the simplest is often not the fastest. Part of the skill is saying which
mattered and why — "sorting first is simpler to describe, but it does far more
work than a single pass, so the single pass is chosen".

### Representing the algorithm

Step 4 is where the method is written down properly, in a form precise enough
for someone else to follow without guessing. Two forms are used:
**pseudocode**, which reads like structured English, and a **flowchart**, which
is a diagram. Both are covered later in this section.

### Testing before implementing

Step 5 is done **by hand**, on paper, before the program is written. You choose
data, follow your own algorithm exactly as written, and record what happens at
each step.

The discipline is to follow it *as written*, not as intended. It is the only
way to catch the gap between what you meant and what you actually said, and
that gap is where the errors live.

### Where writing the program fits

Notice that none of the five steps is "write the program". Turning a tested
algorithm into a language a computer accepts is **implementation**, and it is
the subject of Section 8. It comes after all five, and it is the easy part: by
then every decision has been made.

The order is worth defending when you are tempted to skip ahead. An hour spent
defining and testing on paper is cheaper than a day spent correcting a program
built on a misunderstanding.

## Flashcards

### 7.1 | List the five steps in problem-solving, in order.
1. Define the problem. 2. Propose and evaluate possible solutions.
3. Determine the most efficient solution. 4. Develop and represent the
algorithm. 5. Test and validate the solution.

### 7.1 | Why is defining the problem the first step?
Until you know exactly what is given and what must be produced, there is
nothing for a solution to be right about. A program that solves the wrong
problem correctly is still wrong.

### 7.1 | What should a problem definition state?
The **input** (what you are given), the **processing** (what must be done) and
the **output** (what must be produced).

### 7.1 | Why propose more than one solution?
The first idea is rarely the best, and you cannot judge it without something to
compare it against.

### 7.1 | Name four measures by which one solution may be more efficient than another.
Speed (number of steps), memory used, simplicity, and cost.

### 7.1 | Name the two ways an algorithm is usually represented.
**Pseudocode** — structured English — and a **flowchart** — a diagram.

### 7.1 | At which step is the algorithm tested, and how?
Step 5, before any program is written: work through the algorithm by hand with
chosen data and check the results.

> Hint: what does it cost to find the error later?

### 7.1 | Is writing the program one of the five problem-solving steps?
No. Writing the program is **implementation**, and it comes after all five
steps, once the algorithm has been tested.

## Questions

### 7.1 | mcq | 1 mark | difficulty 1
Which is the **first** step in problem-solving?

- A. Write the program
- B. Define the problem
- C. Test the solution
- D. Draw a flowchart

**Answer:** B

**Working:** Nothing can be designed, chosen or tested until the problem has
been stated exactly. Writing the program is not one of the five steps at all —
it is implementation, which follows them.

### 7.1 | mcq | 1 mark | difficulty 2
A student writes an algorithm, codes it, and then discovers it calculates the
average incorrectly because "pass mark" was never agreed. Which step was
skipped or done badly?

- A. Defining the problem
- B. Representing the algorithm
- C. Testing the algorithm
- D. Evaluating solutions

**Answer:** A

**Working:** The requirement itself was never pinned down, so the algorithm had
nothing correct to aim at. This is the most expensive error to make, because
everything built afterwards inherits it.

### 7.1 | mcq | 1 mark | difficulty 2
Two algorithms both find the largest value in a list of 500 numbers. One sorts
the list and takes the last item; the other checks each number once, keeping
the largest so far. Choosing the second is an example of

- A. defining the problem
- B. determining the most efficient solution
- C. testing and validating
- D. implementing the solution

**Answer:** B

**Working:** Both solutions are correct, so the choice is made on efficiency —
the single pass does far less work than sorting the whole list.

### 7.1 | mcq | 1 mark | difficulty 3
Testing and validating an algorithm should be carried out

- A. after the program has been written and run
- B. by hand, before the program is written
- C. only if the program produces an error
- D. by the end users after delivery

**Answer:** B

**Working:** The algorithm is traced on paper with chosen data so that faults
in the *method* are found before any code depends on them. Testing the finished
program is a later and separate activity.

### 7.1 | structured | 8 marks | difficulty 3
A school needs a program that reads each student's four subject marks, works
out the average, and prints the student's name together with `PASS` if the
average is at least 50 and `FAIL` otherwise.

(a) List the five steps in problem-solving, in the correct order. **(5 marks)**

(b) The programmer begins coding immediately, without carrying out step 1.
State **one** consequence this could have, with reference to the task above.
**(1 mark)**

(c) State **two** grounds on which one proposed solution might be judged more
efficient than another. **(2 marks)**

**Answer:** (a) 1 mark each, in order: define the problem; propose and evaluate
possible solutions; determine the most efficient solution; develop and
represent the algorithm; test and validate the solution. (Deduct for an answer
listed out of order.)
(b) Any one, 1 mark: an undefined requirement is coded wrongly — for example
whether a student with exactly 50 passes, or what happens when a mark is
missing; the program then solves the wrong problem and must be rewritten.
(c) Any two, 1 mark each: speed or number of steps; memory used; simplicity or
ease of correction; cost.

**Working:** (a) The sequence carries marks. Each step supplies what the next
one needs, which is why the order is fixed.

(b) A specific consequence tied to the task scores better than "it would not
work". The boundary at 50 is the obvious candidate: "at least 50" means a mark
of exactly 50 passes, and a programmer who guesses may well guess otherwise.
