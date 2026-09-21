---
subject: IT
topic: spreadsheets
lesson: building-formulae
title: Building Arithmetic Formulae
objectives: ["5.4"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 5.4 (create advanced arithmetic formulae). Covers operators, order of operations, nesting brackets and the common error values. NOT YET checked against textbook for depth."
---

## Lesson

A **formula** is an instruction to work something out. Every formula begins
with an equals sign — that is how the spreadsheet knows you want a calculation
rather than a piece of text.

Type `B2*C2` and the cell shows the letters `B2*C2`. Type `=B2*C2` and it shows
the answer.

### Refer to cells, not to numbers

Suppose `B2` holds a quantity of 12 and `C2` a price of 45. Both of these give
250:

```
=12*45        the numbers typed in
=B2*C2        the cells referred to
```

The second is almost always right, for two reasons.

**It updates.** Change the price in `C2` and the second formula follows; the
first is stuck with 45 for ever, and worse, it is stuck *invisibly* — the sheet
looks correct while being wrong.

**It can be copied.** A formula written with cell references can be replicated
down a whole column and will adjust as it goes (the next lesson but one).

Type a number into a formula only when it is a genuine constant of the
calculation, such as the 100 in a percentage, or the 12 in "months per year".
Even then, many people prefer to put it in a labelled cell so it can be seen
and changed.

### The operators

| Operator | Meaning | Example |
|---|---|---|
| `+` | Add | `=A1+A2` |
| `-` | Subtract | `=A1-A2` |
| `*` | Multiply | `=A1*A2` |
| `/` | Divide | `=A1/A2` |
| `^` | Raise to a power | `=A1^2` |
| `%` | Percent | `=A1*15%` |

Note the ones that differ from handwritten maths: multiplication is a star, not
a cross or an invisible gap. `=2A1` is meaningless; you must write `=2*A1`.
Division is a slash, never a horizontal line.

### Order of operations

The spreadsheet follows the same order you use in Mathematics:

1. **B**rackets
2. **O**rders (powers, `^`)
3. **D**ivision and **M**ultiplication, left to right
4. **A**ddition and **S**ubtraction, left to right

So `=2+3*4` gives **14**, not 20, because the multiplication happens first.

This is where most formula marks are lost. Take an average of three marks in
`B2`, `C2` and `D2`:

```
=B2+C2+D2/3         WRONG - divides only D2 by 3
=(B2+C2+D2)/3       right - adds first, then divides
```

Read the first one aloud: "B2, plus C2, plus a third of D2". Nothing about it
looks wrong on screen, and the answer is plausible, which is exactly what makes
the error dangerous.

**When in doubt, bracket.** Extra brackets never change a correct answer, and
they make your intention readable.

### Building up a longer formula

Brackets can sit inside brackets — this is called **nesting** — and the
innermost pair is worked out first.

A shopkeeper wants the amount due on an order: quantity in `B2`, unit price in
`C2`, a discount rate in `D2` and a tax rate of 15%.

Work outwards, one step at a time:

```
=B2*C2                          the gross amount
=B2*C2*(1-D2)                   less the discount
=B2*C2*(1-D2)*1.15              plus 15% tax
```

Why `(1-D2)` rather than subtracting the discount separately? If `D2` holds
0.10, then `1-D2` is 0.90, and multiplying by 0.90 *is* taking 10% off. It is
shorter than `=B2*C2 - B2*C2*D2` and there is only one place to make a mistake.

Multiplying by `1.15` adds 15% for the same reason. If the tax rate might
change, put it in a cell — say `F1` — and write `=B2*C2*(1-D2)*(1+F1)`, which
is both clearer and adjustable.

### Percentages and proportions

Two patterns worth memorising:

**A as a percentage of B**: `=A2/B2*100`, or `=A2/B2` with the cell formatted
as a percentage.

**Percentage change**: `=(New-Old)/Old*100`, so with the old figure in `B2` and
the new in `C2`, `=(C2-B2)/B2*100`.

The brackets in the second are not optional. Without them you would divide `B2`
by `B2` first and get a nonsense answer.

### Errors the spreadsheet reports

When a formula cannot be worked out, the cell shows a code rather than an
answer. Each one tells you something specific:

| Shown | Meaning | Usual cause |
|---|---|---|
| `#DIV/0!` | Division by zero | Dividing by an empty or zero cell |
| `#VALUE!` | Wrong type of data | Arithmetic on a cell holding text |
| `#NAME?` | Unrecognised name | A function name is misspelt, e.g. `=SUMM(A1:A5)` |
| `#REF!` | Invalid reference | A cell the formula pointed at was deleted |
| `#####` | *Not an error* | Column too narrow — widen it |

A **circular reference** is a different kind of fault: a formula that refers,
directly or indirectly, to its own cell. Putting `=A1+B1` into `A1` asks the
sheet to use an answer it has not worked out yet. The program warns you instead
of calculating.

### Checking your work

Three habits that catch most mistakes:

1. **Estimate first.** Know roughly what the answer should be before you read
   it off the screen.
2. **Test with easy numbers.** If every quantity is 1, the totals should be
   obvious.
3. **Read the formula bar, not the cell.** The cell shows a number; only the
   formula bar shows whether that number was arrived at correctly.

## Flashcards

### 5.4 | How does every spreadsheet formula begin?
With an equals sign, `=`. Without it the entry is stored as a label.

### 5.4 | Why refer to cells in a formula rather than typing the numbers?
Because the formula then updates when the data changes, and it can be copied to
other rows. Typed-in numbers are frozen and invisible from the screen.

### 5.4 | What does `=2+3*4` give, and why?
**14**. Multiplication is done before addition, so it is 2 + 12.

### 5.4 | What is wrong with `=B2+C2+D2/3` as an average of three marks?
Only `D2` is divided by 3. The addition must be bracketed first:
`=(B2+C2+D2)/3`.

> Hint: read it aloud as it is written.

### 5.4 | State the order of operations a spreadsheet follows.
Brackets, then Orders (powers), then Division and Multiplication left to right,
then Addition and Subtraction left to right — BODMAS.

### 5.4 | Write a formula for percentage change from an old figure in `B2` to a new one in `C2`.
`=(C2-B2)/B2*100`

The brackets are essential; without them only `B2` would be divided by `B2`.

### 5.4 | What does `#DIV/0!` mean?
The formula tried to divide by zero or by an empty cell.

### 5.4 | What does `#NAME?` usually mean?
A name in the formula is not recognised — most often a misspelt function name,
such as `=AVRAGE(A1:A5)`.

### 5.4 | What does `#REF!` mean?
The formula points at a cell that no longer exists, usually because a row,
column or cell it referred to was deleted.

### 5.4 | What is a circular reference?
A formula that refers to its own cell, directly or through a chain of other
formulas — for example `=A1+B1` entered into `A1`. The spreadsheet cannot
calculate it and warns you.

### 5.4 | How do you take 10% off an amount in a single formula?
Multiply by `(1-0.10)`, that is by 0.90. With the rate in `D2`, write
`=B2*C2*(1-D2)`.

## Questions

### 5.4 | mcq | 1 mark | difficulty 1
Which entry would a spreadsheet treat as a formula?

- A. `B2*C2`
- B. `=B2*C2`
- C. `"B2*C2"`
- D. `+B2 x C2`

**Answer:** B

**Working:** A formula must begin with `=`. Option A is stored as a label, and
`x` in option D is not a valid operator.

### 5.4 | mcq | 1 mark | difficulty 2
Cell `A1` contains 10 and cell `A2` contains 4. What does `=A1-A2/2` display?

- A. 3
- B. 8
- C. 7
- D. 2

**Answer:** B

**Working:** Division comes before subtraction, so the sheet computes
4 ÷ 2 = 2 first, then 10 − 2 = **8**. Option A is what you would get from
`=(A1-A2)/2`.

### 5.4 | mcq | 1 mark | difficulty 2
A cell displays `#DIV/0!`. The most likely cause is that the formula

- A. contains a misspelt function name
- B. divides by a cell that is empty or contains zero
- C. is too wide for the column
- D. refers to a deleted cell

**Answer:** B

**Working:** A is `#NAME?`, C shows `#####`, and D gives `#REF!`.

### 5.4 | mcq | 1 mark | difficulty 3
Prices are in column C and a tax rate of 15% is to be added. Which formula
gives the price including tax for row 2?

- A. `=C2+15%`
- B. `=C2*15%`
- C. `=C2*1.15`
- D. `=C2/1.15`

**Answer:** C

**Working:** Multiplying by 1.15 keeps the original amount and adds 15% of it.
Option B gives the tax alone, option A adds 0.15 to the price, and option D
removes tax from a price that already includes it.

### 5.4 | numeric | 1 mark | difficulty 2
Cell `B1` contains 6, `B2` contains 2 and `B3` contains 5.

What value does `=(B1+B3)*B2` display?

**Answer:** 22

**Working:** The bracket is evaluated first: 6 + 5 = 11. Then 11 × 2 = **22**.

### 5.4 | numeric | 1 mark | difficulty 3
Cell `D1` contains 4 and `D2` contains 3.

What value does `=D1^2+D2*2` display?

**Answer:** 22

**Working:** Powers first: `D1^2` = 16. Then multiplication: 3 × 2 = 6. Then
addition: 16 + 6 = **22**.

### 5.4 | structured | 9 marks | difficulty 4
A hardware store records each order on one row:

| | A | B | C | D |
|---|---|---|---|---|
| **1** | Item | Quantity | Unit price | Discount rate |
| **2** | Cement | 20 | 1350 | 0.05 |

Sales tax of 15% is charged on the discounted amount. The tax rate is stored in
cell `G1` as `0.15`.

(a) Write a formula for cell `E2` to calculate the amount before discount.
**(1 mark)**

(b) Write a formula for cell `F2` to calculate the amount after the discount in
`D2` has been taken off. **(2 marks)**

(c) Write a formula for cell `H2` to calculate the final amount, including tax
at the rate stored in `G1`. **(2 marks)**

(d) A clerk writes `=B2*C2*1-D2` in `F2`. Explain what this calculates and why
it is wrong. **(2 marks)**

(e) Give **two** reasons why the tax rate is better stored in cell `G1` than
typed into the formula. **(2 marks)**

**Answer:** (a) `=B2*C2`. (b) `=B2*C2*(1-D2)`, or `=E2*(1-D2)` — 2 marks;
1 mark for a correct but longer form such as `=E2-E2*D2`.
(c) `=F2*(1+G1)`, or `=B2*C2*(1-D2)*(1+G1)` — 2 marks.
(d) 1 mark — without brackets it multiplies quantity, price and 1, then
subtracts the discount **rate** 0.05; 1 mark — it subtracts 0.05 instead of
taking off 5%, giving 26 999.95 rather than 25 650.
(e) Any two, 1 mark each: the rate can be changed in one place and every row
updates; the rate is visible on the sheet rather than hidden inside formulas;
it avoids retyping the same number in many formulas, so there is one chance of
a typing error rather than many; it documents the assumption for anyone reading
the sheet.

**Working:** (a) 20 × 1350 = 27 000.

(b) 1 − 0.05 = 0.95, and 27 000 × 0.95 = **25 650**.

(c) 25 650 × 1.15 = **29 497.50**.

(d) BODMAS multiplies before subtracting, so the sheet works out
20 × 1350 × 1 = 27 000, then subtracts 0.05. The result is nearly right, which
is why this error survives a quick glance.

(e) The general principle: a figure that might change belongs in a cell of its
own, not buried in a formula.
