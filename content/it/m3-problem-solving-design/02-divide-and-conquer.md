---
subject: IT
topic: problem-solving-design
lesson: divide-and-conquer
title: Divide and Conquer
objectives: ["7.2"]
est_minutes: 16
status: draft
source: "Original prose written against syllabus objective 7.2 (use the divide-and-conquer approach to decompose large everyday problems into smaller tasks). NOT YET checked against textbook for depth."
---

## Lesson

Some problems are too big to hold in your head at once. **Divide and conquer**
is the habit of breaking such a problem into smaller tasks, solving those, and
putting the answers back together.

The small tasks are easier for the same reason a shopping list is easier than
"do the shopping": each item is something you can actually start.

### Decomposition

Breaking a problem into parts is called **decomposition**. The parts are
usually broken down again, until every task is small enough to be described in
a few clear steps.

Take an everyday problem — preparing a meal for twenty people:

- **Plan the menu**
  - decide the dishes
  - check what guests cannot eat
- **Buy the ingredients**
  - list what is needed
  - check what is already in the kitchen
  - go to the market
- **Prepare the food**
  - wash and chop
  - cook each dish
- **Serve**
  - set the tables
  - serve the food

"Prepare a meal for twenty" is daunting. "Wash and chop the vegetables" is
not. Nothing about the work has changed; it has only been made startable.

### Top-down design

Working from the whole problem downwards into smaller and smaller parts is
called **top-down design**. You begin with the single statement of what must
be done, split it into its main tasks, then split each of those, and stop when
a task is simple enough to solve directly.

The alternative — starting with small pieces and hoping they combine — is
called bottom-up, and it tends to produce parts that do not fit together. Start
at the top.

### A computing example

A program to produce end-of-term reports for a whole school:

- **Read the data**
  - read each student's details
  - read each subject mark
- **Process the data**
  - calculate each student's average
  - decide each student's grade
  - rank the students in the class
- **Produce the output**
  - print a report for each student
  - print a class summary

Each of those lowest-level tasks — "calculate the average", "decide the grade"
— is a small problem with its own input, processing and output. Each can be
written and tested on its own.

### Why it helps

**Each part is easier.** A task you can describe in a sentence is a task you
can write an algorithm for.

**Parts can be shared out.** Several people can work at once, because the
pieces are separate.

**Faults are easier to find.** When a report shows the wrong grade, the fault
is in the part that decides grades — not somewhere in a thousand lines.

**Parts can be re-used.** "Calculate an average" is needed by the student
report and the class summary. Write it once and use it twice.

**Parts can be tested on their own.** Test "decide the grade" with a handful
of marks and you know it works, whatever else is going on.

**Changes stay local.** If the pass mark changes, only the part that decides
grades is touched.

### Doing it well

A decomposition can be done badly. Two tests for a good one:

**Each task should do one thing.** A task called "read the marks and calculate
the averages and print them" has not been decomposed — it has only been
renamed. If you need the word *and* to describe a task, it is probably two
tasks.

**The parts should be independent.** Tasks that constantly need to know what
the others are doing have been split in the wrong place. Each part should take
something in, do its job, and hand something back.

### Structure charts

The result of top-down design is often drawn as a **structure chart** — a
diagram like a family tree, with the whole problem in a box at the top and its
tasks branching out below.

<svg viewBox="0 0 340 200" role="img" aria-label="A structure chart with 'Produce reports' in a box at the top, branching down to three boxes: Read data, Process data, Produce output. Process data branches again to Calculate average and Decide grade.">
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="115" y="10" width="110" height="30" rx="5"/>
    <rect x="10" y="80" width="90" height="30" rx="5"/>
    <rect x="125" y="80" width="90" height="30" rx="5"/>
    <rect x="240" y="80" width="90" height="30" rx="5"/>
    <rect x="100" y="150" width="70" height="32" rx="5"/>
    <rect x="180" y="150" width="70" height="32" rx="5"/>
  </g>
  <g stroke="currentColor" stroke-width="1.1" opacity="0.7">
    <line x1="170" y1="40" x2="170" y2="60"/>
    <line x1="55" y1="60" x2="285" y2="60"/>
    <line x1="55" y1="60" x2="55" y2="80"/>
    <line x1="170" y1="60" x2="170" y2="80"/>
    <line x1="285" y1="60" x2="285" y2="80"/>
    <line x1="170" y1="110" x2="170" y2="130"/>
    <line x1="135" y1="130" x2="215" y2="130"/>
    <line x1="135" y1="130" x2="135" y2="150"/>
    <line x1="215" y1="130" x2="215" y2="150"/>
  </g>
  <g font-size="10" fill="currentColor" text-anchor="middle">
    <text x="170" y="29">Produce reports</text>
    <text x="55" y="99">Read data</text>
    <text x="170" y="99">Process data</text>
    <text x="285" y="99">Produce output</text>
    <text x="135" y="165">Calculate</text>
    <text x="135" y="176">average</text>
    <text x="215" y="165">Decide</text>
    <text x="215" y="176">grade</text>
  </g>
</svg>

Read it downwards: each box is entirely made up of the boxes beneath it. The
chart says *what* each part does, never *how* — the how is the algorithm, and
that comes later.

## Flashcards

### 7.2 | What is meant by divide and conquer?
Breaking a large problem into smaller tasks, solving each one, and combining
the results.

### 7.2 | What is decomposition?
Breaking a problem into its component tasks, repeatedly, until each task is
small enough to solve directly.

### 7.2 | What is top-down design?
Starting with the whole problem and splitting it into smaller and smaller
tasks, rather than building up from small pieces.

### 7.2 | Give three benefits of decomposing a problem.
Any three: each part is easier to solve; parts can be shared among several
people; faults are easier to locate; parts can be re-used; parts can be tested
separately; changes affect only one part.

### 7.2 | How can you tell a task has not been properly decomposed?
It needs the word *and* to describe it — "read the marks **and** calculate the
averages **and** print them" is three tasks wearing one name.

### 7.2 | What is a structure chart?
A diagram showing the result of top-down design: the whole problem in a box at
the top, with its tasks branching out below it.

### 7.2 | Does a structure chart show how a task is carried out?
No. It shows **what** each part does and how the parts relate. How it is done
is the algorithm, written later.

## Questions

### 7.2 | mcq | 1 mark | difficulty 1
Breaking a large problem into smaller, more manageable tasks is known as

- A. implementation
- B. decomposition
- C. validation
- D. compilation

**Answer:** B

**Working:** Decomposition is the breaking down; divide and conquer is the
approach that uses it.

### 7.2 | mcq | 1 mark | difficulty 2
Which of the following best describes top-down design?

- A. Writing the smallest parts first and joining them together
- B. Starting with the whole problem and splitting it into smaller tasks
- C. Testing a program from the last line backwards
- D. Writing the program before the algorithm

**Answer:** B

**Working:** Top-down works from the whole downwards. Option A describes a
bottom-up approach, which tends to produce parts that do not fit together.

### 7.2 | mcq | 1 mark | difficulty 3
Which of these has been decomposed **least** successfully?

- A. Calculate the average mark
- B. Print the class summary
- C. Read the marks, calculate the averages and print the reports
- D. Decide the grade

**Answer:** C

**Working:** It describes three separate jobs joined by *and*, so it has been
renamed rather than broken down. The others each do one thing.

### 7.2 | mcq | 1 mark | difficulty 3
A report program gives the wrong grade for some students, although the averages
printed are correct. Because the problem was decomposed, the programmer can

- A. rewrite the whole program more quickly
- B. look only at the task that decides grades
- C. avoid testing the program
- D. run the program without an algorithm

**Answer:** B

**Working:** The averages are right, so the fault lies in the separate task
that turns an average into a grade. Locating faults quickly is one of the main
benefits of decomposition.

### 7.2 | structured | 8 marks | difficulty 3
A community centre wants a system that registers members, records the classes
each member attends, and prints a monthly attendance report.

(a) Explain what is meant by the **divide-and-conquer** approach. **(2 marks)**

(b) Decompose the system above into **three** main tasks. **(3 marks)**

(c) Break **one** of your three tasks into two smaller sub-tasks. **(2 marks)**

(d) State **one** advantage of decomposing the system in this way. **(1 mark)**

**Answer:** (a) 1 mark — breaking a large problem into smaller tasks; 1 mark —
solving each task separately and combining the results.
(b) 1 mark each for three sensible, single-purpose tasks, such as: register
members; record class attendance; produce the monthly report.
(c) 2 marks for two sub-tasks that genuinely belong to the chosen task — for
example, "produce the monthly report" splits into "total each member's
attendances" and "print the report". 1 mark for one acceptable sub-task.
(d) Any one, 1 mark: each part is easier to solve; parts can be worked on by
different people; faults are easier to locate; parts can be tested separately
or re-used; changes affect only one part.

**Working:** (b) Credit any reasonable split, provided each task does one
thing. A task joining two jobs with *and* does not score.

(c) The sub-tasks must sit beneath the chosen task, not beside it. "Print the
report" belongs under "produce the monthly report"; "register members" does
not.
