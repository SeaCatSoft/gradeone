---
subject: IT
topic: problem-solving-design
lesson: variables-and-constants
title: Variables and Constants
objectives: ["7.4"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 7.4 (distinguish between variables and constants). NOT YET checked against textbook for depth."
---

## Lesson

An algorithm has to keep track of values while it runs — a mark just read, a
running total, a decision it has reached. Each value is held in a named storage
location. There are two kinds.

### Variables

A **variable** is a named storage location whose value **can change** while the
algorithm runs.

`total` is a variable. It starts at 0, becomes 68 when the first mark is added,
then 142, then 219. Same name, same location, different contents at different
moments.

A useful picture: a variable is a labelled box. The label is the name and never
changes; the contents can be replaced as often as you like. Looking in the box
tells you only what is there **now**.

The value a variable holds at a given moment is its **current value**, and only
the most recent one survives. Assigning a new value throws the old one away:

```
count = 5
count = 8
```

After these two lines `count` holds 8. The 5 is gone — not stored alongside it,
not recoverable.

### Constants

A **constant** is a named storage location whose value is **fixed** when the
algorithm is written and **cannot change** while it runs.

```
PassMark = 50
Pi = 3.14
TaxRate = 0.15
```

A constant is a box that has been sealed. It is given its value once, and every
later use reads the same thing.

### The difference, stated plainly

| | Variable | Constant |
|---|---|---|
| Value can change while running | Yes | No |
| Set when | Any time, repeatedly | Once, when written |
| Example | `total`, `mark`, `count` | `PassMark`, `Pi`, `TaxRate` |

That is the whole distinction, and it is the answer to "distinguish between a
variable and a constant": **a variable's value may change during execution; a
constant's may not.**

### Why bother with constants

You could type `50` wherever the pass mark is needed. Naming it is better for
three reasons.

**One place to change.** If the pass mark becomes 45, a named constant is
corrected once. A `50` typed into eleven places must be found eleven times —
and some of those 50s will mean something else entirely.

**It says what it means.** `IF average >= PassMark` explains itself.
`IF average >= 50` leaves the next reader guessing what 50 was.

**It cannot be changed by accident.** Because a constant may not be assigned to
while the algorithm runs, an instruction that tries to alter it is an error —
caught, rather than quietly producing wrong answers.

### Naming

Names should say what the value is. `x` and `n2` tell a reader nothing;
`total`, `highestMark` and `numberOfStudents` tell them everything.

The usual rules for a name are: start with a letter, use letters, digits and
underscores only, no spaces, and avoid words the language already uses (`PRINT`,
`IF`, `WHILE`). A common convention writes constants in capitals — `PASSMARK`
— so a reader can see at a glance which values cannot change.

### Data types

Each variable holds one kind of data, and the kind matters:

| Type | Holds | Example |
|---|---|---|
| Integer | Whole numbers | `count = 30` |
| Real (float) | Numbers with a decimal part | `average = 67.25` |
| Character | A single character | `grade = "A"` |
| String | Text | `name = "Ayesha"` |
| Boolean | True or false | `passed = TRUE` |

Choose the type that fits the value. A number of students is an integer —
there is no such thing as 30.5 students. An average mark is real, because
dividing by 4 rarely comes out whole. A telephone number is a **string**,
despite being made of digits: you never do arithmetic on it, and storing it as
a number would lose a leading zero.

### Initialising

A variable that is used before it has been given a value is a genuine bug: the
algorithm reads whatever happens to be in the location.

Counters and running totals must therefore be set to zero before the loop that
uses them:

```
total = 0
count = 0
```

Forgetting this is one of the most common faults in an exam algorithm, and
tracing the algorithm by hand catches it immediately — the first line of the
trace table has nowhere to start.

### Assignment

Giving a variable a value is called **assignment**, written with `=` or `←`:

```
total = total + mark
```

Read it right to left: *work out the value on the right, then put it into the
variable on the left.* As a statement of fact "total equals total plus mark" is
nonsense; as an instruction it is perfectly sensible — take what `total` holds
now, add `mark`, and store the answer back in `total`.

This one line is how every running total in every algorithm works, so it is
worth being comfortable with.

## Flashcards

### 7.4 | Distinguish between a variable and a constant.
A **variable's** value can change while the algorithm runs. A **constant's**
value is fixed when it is written and cannot change during execution.

### 7.4 | What is a variable?
A named storage location holding a value that may change as the algorithm
runs.

### 7.4 | What happens to the old value when a variable is assigned a new one?
It is lost. Only the current value is held — `count = 5` followed by
`count = 8` leaves 8, and the 5 is gone.

### 7.4 | Give two reasons for using a named constant rather than typing the number.
Any two: it is changed in one place if the value changes; the name explains
what the number means; it cannot be altered by accident while the algorithm
runs.

### 7.4 | Name five data types and give an example of each.
Integer (`count = 30`), real (`average = 67.25`), character (`grade = "A"`),
string (`name = "Ayesha"`), Boolean (`passed = TRUE`).

### 7.4 | Why is a telephone number stored as a string rather than a number?
No arithmetic is ever done on it, and storing it as a number would drop a
leading zero.

### 7.4 | Why must a running total be set to zero before a loop?
A variable used before it is given a value holds whatever happens to be in that
location, so the total would start from an unknown figure.

### 7.4 | What does `total = total + mark` mean?
Work out the value on the right — the current total plus the mark — and store
that answer back in `total`. It is an instruction, not a statement of fact.

> Hint: read it right to left.

### 7.4 | Which data type suits the number of students in a class, and why?
**Integer** — the count is always a whole number; there is no such thing as
30.5 students.

## Questions

### 7.4 | mcq | 1 mark | difficulty 1
Which statement about a constant is correct?

- A. Its value changes each time the algorithm runs a loop
- B. Its value is fixed and cannot change during execution
- C. It can hold only whole numbers
- D. It must be read in as input

**Answer:** B

**Working:** A fixed value is exactly what makes it a constant. Nothing about
it restricts the data type, and it is set in the algorithm rather than read in.

### 7.4 | mcq | 1 mark | difficulty 2
In an algorithm that calculates sales tax at a fixed rate of 15%, which is most
suitably declared as a **constant**?

- A. The sale amount
- B. The tax payable
- C. The rate of 0.15
- D. The customer's name

**Answer:** C

**Working:** The rate is fixed for every sale, so it is a constant. The amount
and name are input, and the tax payable is calculated and changes with each
sale.

### 7.4 | mcq | 1 mark | difficulty 2
After the instructions `num = 12`, `num = 20`, `num = num + 5`, what value does
`num` hold?

- A. 12
- B. 20
- C. 25
- D. 37

**Answer:** C

**Working:** Each assignment replaces what came before. `num` becomes 12, then
20, then 20 + 5 = **25**. The 12 was discarded at the second instruction.

### 7.4 | mcq | 1 mark | difficulty 2
Which data type is most suitable for storing a student's average mark?

- A. Integer
- B. Real
- C. Boolean
- D. Character

**Answer:** B

**Working:** An average is rarely a whole number, so it needs a type that holds
a decimal part. Storing it as an integer would throw away the fraction.

### 7.4 | mcq | 1 mark | difficulty 3
An algorithm adds 30 marks to a running total but the final answer is wrong,
and differs each time it is run. The most likely cause is that

- A. `total` was not set to zero before the loop
- B. `total` was declared as a constant
- C. the marks were stored as strings
- D. the loop ran 30 times

**Answer:** A

**Working:** An uninitialised variable starts with whatever value happens to
occupy that location, so the total is wrong by an unpredictable amount. A
constant would have caused an error rather than a varying answer.

### 7.4 | structured | 8 marks | difficulty 3
A program calculates electricity bills. Every customer pays a fixed standing
charge of \$850, plus \$32 for each unit of electricity used.

(a) Distinguish between a **variable** and a **constant**. **(2 marks)**

(b) Name **two** values in this problem that should be stored as constants, and
give a reason. **(3 marks)**

(c) Name **two** values that must be stored as variables. **(2 marks)**

(d) State the most suitable data type for the number of units used, and give a
reason. **(1 mark)**

**Answer:** (a) 1 mark — a variable's value can change while the algorithm
runs; 1 mark — a constant's value is fixed when written and cannot change
during execution.
(b) 1 mark each for the standing charge of 850 and the rate of 32 per unit;
1 mark for a reason — they are the same for every customer and do not change
while the program runs (accept: changing the rate then means changing one
line).
(c) 1 mark each, any two: the units used; the customer's name; the cost of the
units; the total bill.
(d) Integer, because units used are counted in whole numbers — 1 mark. (Accept
real with the reason that part-units may be metered.)

**Working:** (a) The single distinguishing feature is whether the value may
change during execution. Answers describing only what each one stores do not
score.

(c) Anything that differs from customer to customer, or is worked out as the
program runs, must be a variable.
