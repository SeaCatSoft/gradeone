---
subject: IT
topic: spreadsheets
lesson: conditional-functions
title: IF, COUNTIF, SUMIF and Lookups
objectives: ["5.3"]
est_minutes: 25
status: draft
source: "Original prose written against syllabus objective 5.3 (use basic pre-defined systems functions), covering the logical and conditional functions and VLOOKUP. NOT YET checked against textbook for depth."
---

## Lesson

The functions in the last lesson treat every cell in the range alike. The ones
here first ask a **question** about each cell, and act on the answer.

### Comparison operators

A condition compares two things and comes out either TRUE or FALSE:

| Operator | Meaning |
|---|---|
| `=` | equal to |
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal to |
| `<=` | less than or equal to |
| `<>` | not equal to |

Note the last two. "Not equal" is `<>`, not `!=`, and "at least" is `>=` with
the arrow first — `=>` is an error.

### The IF function

`IF` chooses between two results:

```
=IF(condition, value_if_true, value_if_false)
```

Three arguments, in that order. To mark a pass at 50 or more, with the mark in
`B2`:

```
=IF(B2>=50, "Pass", "Fail")
```

Text in a formula goes in **double quotation marks**. Numbers do not:
`=IF(B2>=50, 1, 0)`.

The two results can be anything — text, a number, or a further calculation. A
10% bonus for sales over 5000:

```
=IF(B2>5000, B2*0.10, 0)
```

The commission cell now works for every salesperson, whatever their figure.

**A caution about the boundary.** `>50` and `>=50` are different rules, and a
student scoring exactly 50 is the one who finds out. Read the requirement
carefully: "50 and over" is `>=50`; "over 50" is `>50`.

### Nested IF

`IF` chooses between two outcomes. For three or more, put another `IF` in place
of one of the results — this is called **nesting**.

Grades: A for 80 and above, B for 65 and above, otherwise C.

```
=IF(B2>=80, "A", IF(B2>=65, "B", "C"))
```

Read it as a chain of questions: *Is it 80 or more? If yes, "A". If no, ask the
next question: is it 65 or more? If yes, "B", otherwise "C".*

**Order matters enormously.** Written the other way round:

```
=IF(B2>=65, "B", IF(B2>=80, "A", "C"))      WRONG
```

a mark of 90 meets the first test and is graded B; the test for A is never
reached. Work from one end of the scale to the other — highest first with `>=`,
or lowest first with `<=` — and never jump about.

Two practical points: every `IF` opened needs a closing bracket, so a nest of
three ends in `)))`; and count your commas, since a misplaced one is the usual
cause of a nested IF refusing to be accepted.

### COUNTIF

`COUNT` counts everything numeric; `COUNTIF` counts only what matches a
condition:

```
=COUNTIF(range, criterion)
```

With marks in `B2:B31`:

```
=COUNTIF(B2:B31, ">=50")        how many passed
=COUNTIF(B2:B31, 100)           how many scored full marks
=COUNTIF(C2:C31, "Female")      how many in a column of sexes
```

Note that a criterion using an operator is written **inside quotation marks** —
`">=50"`, not `>=50`. A plain value need not be quoted, though it does no harm.

### SUMIF

`SUMIF` adds only the values that match:

```
=SUMIF(range, criterion, sum_range)
```

The third argument is what makes it powerful. Given a list of sales with the
branch in column A and the amount in column B:

```
=SUMIF(A2:A100, "Montego Bay", B2:B100)
```

This checks column A for the branch, but adds the corresponding amounts from
column B. Leave the third argument out and the range being tested is also the
range being added: `=SUMIF(B2:B100, ">1000")` totals just the large sales.

The two ranges must be the same size and line up row for row, or the wrong
amounts are added.

### VLOOKUP

`VLOOKUP` searches down the first column of a table and returns something from
the same row.

```
=VLOOKUP(lookup_value, table_range, column_number, FALSE)
```

Suppose a price list sits in `H2:J20`, with product codes in column H,
descriptions in I and prices in J. With a code typed into `A2`:

```
=VLOOKUP(A2, $H$2:$J$20, 3, FALSE)
```

- `A2` — what to look for,
- `$H$2:$J$20` — where to look (fixed with `$` so it survives copying — see the
  next lesson),
- `3` — return the third column of that table, the price,
- `FALSE` — demand an exact match.

Three rules save most of the marks: the column number is counted **within the
table**, not from column A of the sheet; the value searched for must be in the
**first column** of the table range; and `FALSE` should be used unless you
deliberately want the nearest lower match.

A code with no entry in the table returns `#N/A` — "not available". That is
information, not a fault: it is telling you the code does not exist.

### Choosing the right one

| Question | Function |
|---|---|
| Which of two results applies here? | `IF` |
| Which of several results applies? | nested `IF` |
| How many entries meet this condition? | `COUNTIF` |
| What do the matching entries add up to? | `SUMIF` |
| What is the matching entry in a table? | `VLOOKUP` |

## Flashcards

### 5.3 | Write the general form of the IF function.
`=IF(condition, value_if_true, value_if_false)` — three arguments in that
order.

### 5.3 | Write a formula to display "Pass" if `B2` is 50 or more, otherwise "Fail".
`=IF(B2>=50, "Pass", "Fail")`

Text results must be in double quotation marks.

### 5.3 | What is the spreadsheet operator for "not equal to"?
`<>` — for example `=IF(A1<>0, B1/A1, 0)`.

### 5.3 | What is a nested IF?
An `IF` placed inside another as one of its results, so more than two outcomes
can be chosen between.

`=IF(B2>=80,"A",IF(B2>=65,"B","C"))`

### 5.3 | Why does `=IF(B2>=65,"B",IF(B2>=80,"A","C"))` give the wrong grade?
A mark of 90 satisfies the first test and is graded B, so the test for A is
never reached. Nested conditions must run in order through the scale, highest
first.

> Hint: what happens to a mark of 90?

### 5.3 | Write a formula to count how many marks in `B2:B31` are 50 or more.
`=COUNTIF(B2:B31, ">=50")`

A criterion containing an operator goes inside quotation marks.

### 5.3 | What is the difference between COUNT and COUNTIF?
`COUNT` counts every numeric cell in the range. `COUNTIF` counts only those
meeting a stated condition.

### 5.3 | What does the third argument of SUMIF do?
It gives a different range to add from. `=SUMIF(A2:A100,"Montego Bay",B2:B100)`
tests column A but totals the matching amounts in column B.

### 5.3 | What are the four arguments of VLOOKUP?
The value to look for, the table range, the column number **within that table**
to return, and `FALSE` for an exact match.

### 5.3 | What does `#N/A` from a VLOOKUP mean?
The value searched for was not found in the first column of the table.

### 5.3 | In `=VLOOKUP(A2, $H$2:$J$20, 3, FALSE)`, what does the 3 refer to?
The third column **of the table range**, that is column J — not column C of the
worksheet.

## Questions

### 5.3 | mcq | 1 mark | difficulty 2
Cell `B2` contains 50. What does `=IF(B2>50, "Pass", "Fail")` display?

- A. `Pass`
- B. `Fail`
- C. `50`
- D. `#VALUE!`

**Answer:** B

**Working:** `>50` is strictly greater than 50, and 50 is not greater than
itself, so the false result is shown. `>=50` would have given `Pass` — which is
exactly why the boundary must be read carefully.

### 5.3 | mcq | 1 mark | difficulty 2
Which formula gives a 5% bonus on the sales figure in `C2` when sales exceed
10 000, and nothing otherwise?

- A. `=IF(C2>10000, 0.05, 0)`
- B. `=IF(C2>10000, C2*0.05, 0)`
- C. `=IF(C2*0.05>10000, C2, 0)`
- D. `=IF(C2>10000, C2, C2*0.05)`

**Answer:** B

**Working:** The bonus is 5% **of the sales figure**, so the true result must
be `C2*0.05`. Option A returns the rate itself, and D has the two results
reversed.

### 5.3 | mcq | 1 mark | difficulty 3
Cells `A1:A6` contain `45`, `72`, `50`, `38`, `91` and `50`.

What does `=COUNTIF(A1:A6, ">=50")` give?

- A. 2
- B. 3
- C. 4
- D. 5

**Answer:** C

**Working:** The values 50, 72, 91 and the second 50 all meet the condition —
**4** of them. Using `">50"` instead would exclude both 50s and give 2.

### 5.3 | mcq | 1 mark | difficulty 4
A worksheet lists branch names in `A2:A50` and sales amounts in `B2:B50`. Which
formula gives the total sales for the branch named in `D1`?

- A. `=SUMIF(A2:A50, D1, B2:B50)`
- B. `=SUMIF(B2:B50, D1, A2:A50)`
- C. `=SUM(A2:A50, D1, B2:B50)`
- D. `=COUNTIF(A2:A50, D1)`

**Answer:** A

**Working:** The condition is tested against the branch names in column A, and
the amounts added come from column B. Option B has the ranges the wrong way
round, and D counts the branch's sales rather than totalling them.

### 5.3 | mcq | 1 mark | difficulty 3
A price table occupies `H2:J20`, with codes in H, descriptions in I and prices
in J. Which formula returns the price for the code in `A2`?

- A. `=VLOOKUP(A2, H2:J20, 10, FALSE)`
- B. `=VLOOKUP(A2, H2:J20, 3, FALSE)`
- C. `=VLOOKUP(H2:J20, A2, 3, FALSE)`
- D. `=VLOOKUP(A2, H2:J20, J, FALSE)`

**Answer:** B

**Working:** The column number is counted within the table range: H is 1, I is
2, J is 3. It is not the worksheet column letter, and not a count from column A.

### 5.3 | structured | 10 marks | difficulty 4
A sports club records members' details. Names are in `A2:A61`, ages in
`B2:B61`, the branch each belongs to in `C2:C61`, and the fee each has paid in
`D2:D61`.

(a) Write a formula for `E2` that displays `Junior` if the member's age is
under 18 and `Senior` otherwise. **(2 marks)**

(b) Write a formula for `G1` that counts how many members belong to the
`Portmore` branch. **(2 marks)**

(c) Write a formula for `G2` that totals the fees paid by members of the
`Portmore` branch. **(2 marks)**

(d) The club now classes members as `Junior` under 18, `Adult` from 18 to 59,
and `Senior` at 60 and over. Write a single formula for `E2` that does this.
**(3 marks)**

(e) A member writes `=IF(B2>=18,"Adult",IF(B2>=60,"Senior","Junior"))`. State
what grade a member aged 72 would be given, and explain why. **(1 mark)**

**Answer:** (a) `=IF(B2<18, "Junior", "Senior")` — 2 marks; accept
`=IF(B2>=18,"Senior","Junior")`. 1 mark for correct IF structure with the wrong
comparison or missing quotation marks.
(b) `=COUNTIF(C2:C61, "Portmore")` — 2 marks.
(c) `=SUMIF(C2:C61, "Portmore", D2:D61)` — 3 ranges/arguments correct, 2 marks;
1 mark for `SUMIF` with the sum range missing or wrong.
(d) `=IF(B2<18, "Junior", IF(B2<60, "Adult", "Senior"))` — 3 marks; accept
`=IF(B2>=60,"Senior",IF(B2>=18,"Adult","Junior"))`. Award 2 marks for correct
logic with a bracket or quotation mark missing.
(e) `Adult` — 1 mark; 72 satisfies the first condition `>=18`, so the test for
60 and over is never reached.

**Working:** (a) Either comparison works as long as the two results are the
right way round for it.

(c) The tested range is the branch column, the summed range is the fee column,
and the two must line up row for row.

(d) The conditions must run in order through the scale. Going lowest-first,
anyone not caught by `<18` is at least 18, so the second test only has to ask
whether they are under 60.

(e) This is the standard nested-IF error: an out-of-order chain stops at the
first condition that happens to be true.
