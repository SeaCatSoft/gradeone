---
subject: IT
topic: spreadsheets
lesson: basic-functions
title: Pre-defined Functions
objectives: ["5.3"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 5.3 (use basic pre-defined systems functions). Statistical, mathematical and date functions; the conditional ones are taught in the next lesson. NOT YET checked against textbook for depth."
---

## Lesson

A **function** is a calculation already built into the spreadsheet, ready to be
called by name. You supply the data; it supplies the method.

Adding twelve monthly figures by hand gives

```
=B2+B3+B4+B5+B6+B7+B8+B9+B10+B11+B12+B13
```

which is long, easy to mistype, and breaks the moment a row is inserted in the
middle. The function does the same job:

```
=SUM(B2:B13)
```

### How a function is written

```
=NAME(argument1, argument2, ...)
```

- the `=` that starts every formula,
- the function's **name**,
- brackets — required even when there is nothing to put in them,
- the **arguments** inside, separated by commas.

An argument may be a range (`B2:B13`), a single cell (`A1`), a typed value
(`2`), or another function. Most of the functions below take one range.

### The statistical functions

Take a column of test marks in `B2:B11`.

| Function | Gives | Example |
|---|---|---|
| `SUM` | The total | `=SUM(B2:B11)` |
| `AVERAGE` | The mean | `=AVERAGE(B2:B11)` |
| `MAX` | The largest value | `=MAX(B2:B11)` |
| `MIN` | The smallest value | `=MIN(B2:B11)` |
| `COUNT` | How many cells hold **numbers** | `=COUNT(B2:B11)` |
| `COUNTA` | How many cells are **not empty** | `=COUNTA(A2:A11)` |

### COUNT and COUNTA — the distinction that gets examined

`COUNT` counts only cells containing numbers. `COUNTA` counts every cell that
has anything in it at all, text included.

Given this list:

| | A | B |
|---|---|---|
| **1** | Student | Mark |
| **2** | Ayesha | 68 |
| **3** | Marlon | absent |
| **4** | Shanice | 77 |
| **5** | Devon | |

- `=COUNT(B2:B5)` gives **2** — only 68 and 77 are numbers.
- `=COUNTA(B2:B5)` gives **3** — 68, `absent` and 77; B5 is empty.
- `=COUNTA(A2:A5)` gives **4** — the four names.

So `COUNT` on a column of names gives zero, which surprises people. Use
`COUNTA` to count students and `COUNT` to count marks actually recorded.

### How functions treat empty and text cells

`AVERAGE` divides by the number of *numeric* cells, not by the size of the
range. In the table above, `=AVERAGE(B2:B5)` gives (68 + 77) ÷ 2 = 72.5, not
÷ 4. Empty cells and the word `absent` are ignored entirely.

Whether that is what you want depends on the situation. If an absent student
should score zero in the class average, the cell must contain `0` — a blank is
not the same as a zero. This is a genuine trap: leaving a mark blank quietly
raises the average.

### Rounding

`ROUND` takes two arguments: the number, and how many decimal places.

```
=ROUND(A1, 2)      two decimal places
=ROUND(A1, 0)      to the nearest whole number
```

`=ROUND(3.14159, 2)` gives `3.14`, and `=ROUND(27.6, 0)` gives `28`.

Rounding and formatting are easily confused. **Formatting** a cell to two
decimals changes only what is displayed; the full value is still stored and
still used in later calculations. `ROUND` changes the value itself. Where money
must add up exactly to the last cent, round; where you only want a tidy
display, format.

You can nest it: `=ROUND(AVERAGE(B2:B11), 1)` averages the marks and then
rounds the result to one decimal place. The inner function runs first, just as
with brackets in arithmetic.

### Date functions

`TODAY()` returns the current date. It takes **no arguments**, but the brackets
are still required — `=TODAY` alone gives `#NAME?`.

It is *volatile*: it updates every time the sheet recalculates. That makes it
right for "today's date" on a printed invoice, and wrong for recording the date
an order was placed, which must not change tomorrow.

`NOW()` does the same with the time included.

`DATE(year, month, day)` builds a date from three numbers:
`=DATE(2026, 9, 21)` gives 21 September 2026.

Because dates are stored as numbers, you can do arithmetic on them.
`=TODAY()-B2`, where `B2` holds a date of birth, gives an age in **days**;
divide by 365.25 for years.

### Selecting the range

Two mistakes account for most wrong function answers.

**Including the heading.** `=SUM(B1:B11)` where `B1` holds the word `Mark` is
harmless for SUM, which ignores text — but `=COUNTA(B1:B11)` now counts the
heading as data.

**Including the answer cell.** Putting `=SUM(B2:B12)` into `B12` is a circular
reference: the total is being asked to include itself.

### Functions can take separate arguments

Ranges are usual, but a function will accept a list:

```
=SUM(B2:B11, D2:D11)       two ranges
=MAX(A1, B7, 100)          two cells and a typed value
```

This is useful when the figures you want are not side by side.

### Why not just use arithmetic?

Beyond being shorter, a function **adjusts when rows are inserted**. Insert a
new student inside `B2:B11` and `=SUM(B2:B11)` becomes `=SUM(B2:B12)`
automatically, counting the newcomer. A hand-written chain of `+` signs does
not, and the missing student is invisible.

## Flashcards

### 5.3 | What is a function in a spreadsheet?
A calculation already built into the program, called by name — for example
`=SUM(B2:B10)`. You supply the data; it supplies the method.

### 5.3 | Write the general form of a function.
`=NAME(argument1, argument2, ...)` — the equals sign, the name, brackets, and
the arguments inside separated by commas.

### 5.3 | What is the difference between COUNT and COUNTA?
`COUNT` counts only cells containing **numbers**. `COUNTA` counts every
**non-empty** cell, including text.

> Hint: which one would count a column of names?

### 5.3 | A range of 6 cells holds 3 numbers, 1 word and 2 blanks. What do COUNT and COUNTA give?
`COUNT` gives **3** (the numbers only). `COUNTA` gives **4** (the numbers plus
the word). Blank cells are never counted.

### 5.3 | Does AVERAGE include empty cells in its division?
No. It divides by the number of cells containing numbers, ignoring blanks and
text. So a missing mark raises the average rather than lowering it — enter `0`
if it should count as zero.

### 5.3 | What does `=ROUND(A1, 2)` do?
Rounds the value in `A1` to two decimal places, changing the **value** itself.

### 5.3 | Distinguish between rounding a value and formatting a cell.
`ROUND` changes the stored value. Formatting changes only what is displayed —
the full value is still used in later calculations.

### 5.3 | What does `TODAY()` return, and why does it need brackets?
The current date. Every function needs brackets even with no arguments;
`=TODAY` without them gives `#NAME?`.

### 5.3 | Why is `TODAY()` unsuitable for recording the date an order was placed?
It is volatile — it recalculates to the current date every time the sheet is
opened, so yesterday's order would show today's date. Type the date instead.

### 5.3 | Write a function to find the highest of the marks in `C2:C40`.
`=MAX(C2:C40)`

### 5.3 | Why does `=SUM(B2:B11)` survive an inserted row when `=B2+B3+...+B11` does not?
The function's range expands to include a row inserted inside it. A chain of
`+` signs keeps the cells it was written with, so the new row is silently left
out.

## Questions

### 5.3 | mcq | 1 mark | difficulty 1
Which function would you use to find the smallest value in a range?

- A. `MIN`
- B. `MAX`
- C. `COUNT`
- D. `SUM`

**Answer:** A

**Working:** `MIN` returns the smallest value; `MAX` the largest.

### 5.3 | mcq | 1 mark | difficulty 2
Cells `A1:A6` contain: `45`, `Kingston`, `12`, blank, `8`, `absent`.

What does `=COUNT(A1:A6)` give?

- A. 6
- B. 5
- C. 4
- D. 3

**Answer:** D

**Working:** `COUNT` counts numbers only: 45, 12 and 8 — three of them.
`COUNTA` would give 5, counting the two text entries as well but never the
blank.

### 5.3 | mcq | 1 mark | difficulty 3
Cells `B2:B6` contain `80`, `60`, blank, `40` and `20`. What does
`=AVERAGE(B2:B6)` display?

- A. 40
- B. 50
- C. 44
- D. 200

**Answer:** B

**Working:** `AVERAGE` ignores the blank, so it divides by 4, not 5:
(80 + 60 + 40 + 20) ÷ 4 = 200 ÷ 4 = **50**. Option A is what you would get if
the blank counted as a zero.

### 5.3 | mcq | 1 mark | difficulty 2
Which formula correctly rounds the average of `C2:C20` to one decimal place?

- A. `=ROUND(C2:C20, 1)`
- B. `=AVERAGE(ROUND(C2:C20), 1)`
- C. `=ROUND(AVERAGE(C2:C20), 1)`
- D. `=AVERAGE(C2:C20, 1)`

**Answer:** C

**Working:** The inner function runs first, so the average is worked out and
then rounded. Option A tries to round a whole range, and D passes 1 to AVERAGE
as an extra value to be averaged.

### 5.3 | mcq | 1 mark | difficulty 3
A clerk enters `=SUM(D2:D15)` into cell `D15`. What is the result?

- A. The total of D2 to D14
- B. A circular reference warning
- C. `#VALUE!`
- D. `#NAME?`

**Answer:** B

**Working:** The formula's own cell, `D15`, lies inside the range it is adding,
so the total would have to include itself. The spreadsheet reports a circular
reference rather than calculating.

### 5.3 | numeric | 1 mark | difficulty 2
Cells `A1:A5` contain `12`, `7`, `19`, `4` and `8`.

What does `=MAX(A1:A5)-MIN(A1:A5)` give?

**Answer:** 15

**Working:** `MAX` gives 19 and `MIN` gives 4, so 19 − 4 = **15**. This
difference is the *range* of the data.

### 5.3 | structured | 10 marks | difficulty 3
A teacher records marks for a class of 30 students. Names are in `A2:A31` and
marks out of 100 in `B2:B31`. Some students were absent and their mark cells
were left blank.

(a) Write a function for `B33` to give the total of all marks. **(1 mark)**

(b) Write a function for `B34` to give the highest mark. **(1 mark)**

(c) Write a function for `B35` to give the number of students who actually sat
the test. **(1 mark)**

(d) Write a function for `B36` to give the number of students on the register.
**(1 mark)**

(e) The teacher writes `=AVERAGE(B2:B31)` in `B37`. Explain how the blank cells
affect this result. **(2 marks)**

(f) State what the teacher should enter in the blank cells if absent students
are to count as zero, and explain why. **(2 marks)**

(g) Write a formula for `B38` that gives the class average rounded to one
decimal place. **(2 marks)**

**Answer:** (a) `=SUM(B2:B31)`. (b) `=MAX(B2:B31)`. (c) `=COUNT(B2:B31)`.
(d) `=COUNTA(A2:A31)`. (e) 1 mark — AVERAGE ignores blanks and divides only by
the number of marks present; 1 mark — the average is therefore that of the
students who sat, which is higher than the whole-class average. (f) 1 mark —
enter `0`; 1 mark — a blank cell is ignored by AVERAGE and COUNT, whereas a
zero is a number and is included in both the total count and the division.
(g) `=ROUND(AVERAGE(B2:B31), 1)` — 2 marks; 1 mark for a correct AVERAGE
without the rounding.

**Working:** (c) `COUNT` counts numeric cells, so blanks are excluded — exactly
the students who sat.

(d) `COUNTA` on the **names** counts every student on the register, since no
name is blank. Using `COUNTA(B2:B31)` would give the same as `COUNT` here and
would not answer the question.

(e) This is the trap: leaving a mark blank quietly raises the class average.

(g) The average must be worked out before it can be rounded, so `AVERAGE` goes
inside `ROUND`.
