---
subject: IT
topic: problem-solving-design
lesson: defining-the-problem
title: Defining the Problem
objectives: ["7.3"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 7.3 (define a problem by decomposing it into its significant components). Covers the IPO defining diagram. NOT YET checked against textbook for depth."
---

## Lesson

Every problem, however it is worded, has three significant components:

- **Input** — what you are given.
- **Processing** — what must be done with it.
- **Output** — what must be produced.

Picking these out of a problem statement is what "defining the problem" means
in practice. It is examined in almost every paper, and it is the foundation
everything else in this section stands on.

### The defining diagram

The three components are set out in a table called a **defining diagram** (also
called an IPO chart, for Input–Processing–Output):

| Input | Processing | Output |
|---|---|---|
| length, width | multiply length by width | area |

Read it left to right: given the length and the width, multiply them, and
produce the area.

### Working from the wording

*Write an algorithm that reads a student's four subject marks, calculates the
average, and prints the average together with `PASS` if it is at least 50 and
`FAIL` otherwise.*

Take the components one at a time.

**Input** — what is given from outside? The four marks. Read the words that
say so: *reads a student's four subject marks*. Call them `mark1`, `mark2`,
`mark3`, `mark4`.

**Output** — what must the algorithm produce? The average, and the word `PASS`
or `FAIL`. Two things, so both are listed.

**Processing** — what has to happen in between? Add the four marks, divide by
4, compare the result with 50, and decide which word to print.

| Input | Processing | Output |
|---|---|---|
| `mark1`, `mark2`, `mark3`, `mark4` | add the four marks; divide the total by 4; compare the average with 50 | `average`, `PASS` or `FAIL` |

### What counts as input

Input is what comes **from outside** the algorithm — typed in by a user, read
from a file, taken from a sensor. It is not everything the algorithm knows.

Two things are regularly mistaken for input:

**Values the algorithm works out itself.** The average is not an input. It is
produced by the processing, from the marks. If a value can be calculated from
what you already have, it is not given to you.

**Fixed values written into the algorithm.** The 50 in the pass rule and the 4
in the division are **constants**, not inputs. Nobody types them in; they are
part of the method. (Constants get a lesson of their own next.)

The test: *would the algorithm still need to ask someone for this?* If yes, it
is input.

### What counts as output

Output is what the problem says must be **produced** — printed, displayed,
written to a file. Look for the words *print*, *display*, *output*, *produce*
or *report*.

A value worked out along the way is not output unless the problem asks for it.
If the problem said only "print PASS or FAIL", then the average is a working
value, not output, even though it had to be calculated.

### What goes in the processing column

The processing column lists the **steps**, in order, in ordinary language. It
is not the algorithm itself — no pseudocode, no `IF … THEN`, no variable
assignment. Those come later. Here you are saying *what must happen*, not
writing it out formally.

"Calculate the average" is acceptable. "Calculate" on its own is not — it does
not say what is being worked out.

### A worked example

*A shop gives a 10% discount on any purchase over \$5000. Write an algorithm
that reads the purchase amount, works out the discount and the amount payable,
and prints both.*

| Input | Processing | Output |
|---|---|---|
| `amount` | compare the amount with 5000; if it is over 5000, work out 10% of the amount as the discount, otherwise set the discount to zero; subtract the discount from the amount | `discount`, `payable` |

Note what did **not** go in the input column: the 5000 and the 10% are fixed
rules of the shop, not values a customer supplies.

### Common mistakes

| Mistake | Why it is wrong |
|---|---|
| Listing a calculated value as input | It is produced by the processing, not given |
| Listing a constant as input | Nobody supplies it; it is part of the method |
| Writing pseudocode in the processing column | That is step 4, not step 1 |
| Leaving out one of the outputs | The problem asked for both |
| Vague processing such as "work it out" | It must say what is worked out |

### Why this is worth the trouble

A defining diagram is small, but it settles the argument before it starts. Two
people who agree on the inputs and outputs are solving the same problem. Two
people who have not written them down usually are not — and they find out much
later, when the pieces refuse to fit.

## Flashcards

### 7.3 | What are the three significant components of a problem?
**Input** (what is given), **processing** (what must be done), and **output**
(what must be produced).

### 7.3 | What is a defining diagram?
A table setting out a problem's input, processing and output. Also called an
IPO chart.

### 7.3 | Is a calculated average an input or an output?
An **output** — or a working value. It is produced by the processing from the
marks, so it is never an input.

### 7.3 | In "a pass is 50 or more", is the 50 an input?
No. It is a **constant** — a fixed part of the method, not a value anyone
supplies.

### 7.3 | What test tells you whether something is an input?
Ask whether the algorithm would still have to obtain it from outside — from a
user, a file or a sensor. If it can be calculated or is fixed, it is not input.

### 7.3 | Which words in a problem statement usually signal the output?
*Print*, *display*, *output*, *produce* and *report*.

### 7.3 | Should the processing column contain pseudocode?
No. It lists the steps in ordinary language, in order. Writing the algorithm
formally is a later step.

### 7.3 | Give the defining diagram for finding the area of a rectangle.
Input: length, width. Processing: multiply length by width. Output: area.

## Questions

### 7.3 | mcq | 1 mark | difficulty 1
In a defining diagram, the **input** column lists

- A. the values the algorithm produces
- B. the values the algorithm is given from outside
- C. the steps to be carried out
- D. the constants used in the calculation

**Answer:** B

**Working:** Input is what comes from outside — typed in, read from a file or
taken from a sensor. Option A is the output and option C the processing.

### 7.3 | mcq | 1 mark | difficulty 2
An algorithm reads a length and a width, calculates the area and the perimeter,
and prints both. Which is the correct output?

- A. length, width
- B. area only
- C. area, perimeter
- D. length, width, area, perimeter

**Answer:** C

**Working:** The problem says to print the area and the perimeter, so both are
outputs. The length and width are inputs; printing them was not asked for.

### 7.3 | mcq | 1 mark | difficulty 3
A problem states: "Read a worker's hours and hourly rate. Pay is hours × rate,
with a bonus of \$500 if hours exceed 40." Which of these is **not** an input?

- A. hours
- B. hourly rate
- C. the bonus of 500
- D. Both A and B are inputs

**Answer:** C

**Working:** The 500 and the 40 are constants — fixed rules of the payroll, not
values a user supplies. Only the hours and the rate are given from outside.

### 7.3 | mcq | 1 mark | difficulty 2
Which entry would be acceptable in the **processing** column of a defining
diagram?

- A. `READ mark1, mark2`
- B. `IF average >= 50 THEN PRINT "PASS"`
- C. compare the average with 50 and decide whether it is a pass
- D. work it out

**Answer:** C

**Working:** The processing column describes the steps in ordinary language.
Options A and B are pseudocode, which belongs to a later step, and D says
nothing about what is being worked out.

### 7.3 | structured | 9 marks | difficulty 3
A cinema charges \$1200 per ticket. Customers buying more than 10 tickets
receive a 15% discount on the whole purchase.

Write an algorithm that reads the customer's name and the number of tickets
bought, calculates the total cost before discount, the discount given and the
amount payable, and prints the customer's name and the amount payable.

(a) State the **inputs**. **(2 marks)**

(b) State the **outputs**. **(2 marks)**

(c) List the steps that belong in the **processing** column. **(4 marks)**

(d) Explain why the \$1200 is not listed as an input. **(1 mark)**

**Answer:** (a) The customer's name and the number of tickets — 1 mark each.
(b) The customer's name and the amount payable — 1 mark each. (Do not credit
the discount or the total cost: the problem asks only for the name and the
payable amount.)
(c) 1 mark each, any four: multiply the number of tickets by 1200 to give the
total cost; compare the number of tickets with 10; if more than 10, calculate
15% of the total cost as the discount, otherwise set the discount to zero;
subtract the discount from the total cost to give the amount payable.
(d) It is a constant — a fixed price built into the method, not a value the
customer supplies — 1 mark.

**Working:** (b) This part rewards reading the question. The total cost and the
discount must both be **calculated**, but the problem never asks for them to be
printed, so they are working values rather than outputs.

(c) The steps must be in a sensible order and must say what is being worked
out. "Calculate the discount" alone is weak; "calculate 15% of the total cost
as the discount" is what earns the mark.

(d) The same reasoning rules out the 10 and the 15%.
