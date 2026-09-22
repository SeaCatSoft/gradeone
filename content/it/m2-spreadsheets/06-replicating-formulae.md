---
subject: IT
topic: spreadsheets
lesson: replicating-formulae
title: Replicating Formulae
objectives: ["5.5"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 5.5 (replicate formulae into other cells). Relative, absolute and mixed referencing. NOT YET checked against textbook for depth."
---

## Lesson

**Replication** means copying a formula into other cells. It is the reason a
spreadsheet handles 500 rows as easily as five: you write the calculation once
and copy it down.

Write `=B2*C2` in `D2` to find the value of the first order, then copy it into
`D3`, and what appears there is not `=B2*C2` but `=B3*C3`. The formula has
adjusted itself to its new row — which is exactly what you wanted, since row 3
is a different order.

### How to replicate

- Drag the **fill handle**, the small square at the bottom-right corner of the
  selected cell, down or across.
- Or copy the cell and paste into the destination range.
- Double-clicking the fill handle fills down as far as the neighbouring column
  has data — the quickest way to fill a long column.

### Relative referencing

A reference written plainly, like `B2`, is **relative**. The spreadsheet does
not really store "cell B2"; it stores *where that cell is in relation to this
one* — "two columns to my left, same row". Copy the formula one row down and
that instruction still means two columns left, same row, which is now `B3`.

This is the default, and it is what you want for calculations that run row by
row: quantity × price, mark ÷ total, debit − credit.

Copying across columns works the same way. Copy `=B2*C2` from `D2` to `E2` and
you get `=C2*D2`, with the letters shifted instead of the numbers. If you copy
both down and across, both adjust.

### When relative referencing goes wrong

Now a case where the default fails. A shop applies one tax rate, stored in
`F1`, to every order:

| | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| **1** | Item | Qty | Price | Amount | Tax | 0.15 |
| **2** | Cement | 20 | 1350 | 27000 | | |
| **3** | Nails | 5 | 240 | 1200 | | |
| **4** | Paint | 8 | 2100 | 16800 | | |

In `E2` you write `=D2*F1` and get 4050. Correct. Copy it down to `E3` and the
formula becomes `=D3*F2` — and `F2` is empty. The tax comes out as zero.

The reference to `D2` *should* move, because each row has its own amount. The
reference to `F1` should **not** move, because there is only one tax rate and
it is in one place. Relative referencing moves both, because it cannot tell the
difference.

### Absolute referencing

Putting a dollar sign in front of a part of a reference locks that part so
copying cannot change it.

```
=D2*$F$1
```

`$F$1` means "column F, row 1, always". Copy this formula anywhere and it still
reads the tax rate from `F1`, while `D2` continues to follow the row.

A reference like `$F$1` is **absolute**; a plain `F1` is **relative**. Most
keyboards have a shortcut — select the reference in the formula bar and press
**F4** — which cycles through `F1`, `$F$1`, `F$1`, `$F1`.

The test to apply before copying: *does this reference mean a fixed place, or a
place relative to the row I am on?* Fixed places — a tax rate, an exchange
rate, a target, a lookup table — get dollar signs.

### Mixed referencing

Either part can be locked on its own:

| Written | Meaning |
|---|---|
| `B2` | Relative — both parts move |
| `$B$2` | Absolute — neither part moves |
| `$B2` | Mixed — column fixed, row moves |
| `B$2` | Mixed — row fixed, column moves |

The dollar sign locks whatever comes immediately **after** it. `$B2` locks the
B; `B$2` locks the 2.

Mixed references earn their keep in a grid that is filled both down and across.
A multiplication table with the numbers 1–10 along row 1 and down column A
needs one formula, written in `B2` and filled over the whole block:

```
=$A2*B$1
```

Filling across, `$A2` keeps pointing at column A (the row heading), while
`B$1` moves along row 1. Filling down, `$A2` moves down column A, while `B$1`
stays on row 1. One formula, a hundred cells.

### Reading the result of a copy

Exam questions usually ask what a copied formula becomes. The method is
mechanical:

1. Work out how far the formula moved — how many rows down or up, how many
   columns left or right.
2. Shift every **relative** part by that much.
3. Leave every part with a `$` in front of it exactly as it is.

*Cell `C3` contains `=A1+$B$1`. What appears in `E6`?*

From `C3` to `E6` is 2 columns right and 3 rows down. `A1` is fully relative,
so it becomes `C4`. `$B$1` has both parts locked, so it stays `$B$1`. The
answer is `=C4+$B$1`.

### Two things replication does not fix

**Deleted references.** If a copied formula points at a row that is later
deleted, it shows `#REF!`.

**Ranges running off the data.** Copying `=SUM(B2:B11)` down one row gives
`=SUM(B3:B12)`, which may reach past the last figure and short-change the
first. Totals of a whole column are usually best written once, not replicated.

## Flashcards

### 5.5 | What does replication mean?
Copying a formula into other cells, so a calculation written once can serve a
whole column or block.

### 5.5 | What is the fill handle?
The small square at the bottom-right corner of the selected cell. Dragging it
copies the formula into the cells you drag across.

### 5.5 | What is a relative reference?
A reference written plainly, such as `B2`. It stores the cell's position
*relative* to the formula, so it adjusts when the formula is copied.

### 5.5 | What is an absolute reference and how is it written?
One that never changes when copied, written with dollar signs before both
parts: `$F$1`.

### 5.5 | `D2` contains `=B2*C2`. What appears when it is copied to `D5`?
`=B5*C5` — both references are relative, so they move down three rows with the
formula.

### 5.5 | In `$B2`, which part is locked?
The **column**. The dollar sign locks whatever follows it, so B is fixed and
the row number still adjusts.

### 5.5 | Why does a formula using a single tax rate need an absolute reference?
Copying it down would otherwise move the reference to the rate along with the
row, pointing at an empty cell and giving a tax of zero.

### 5.5 | `C3` contains `=A1+$B$1`. What appears when it is copied to `E6`?
`=C4+$B$1`

The move is 2 columns right and 3 rows down. `A1` shifts by that much; `$B$1`
is locked and does not move.

> Hint: shift the relative parts, leave anything with a `$` alone.

### 5.5 | Which keyboard key usually cycles a reference through its absolute and mixed forms?
**F4**, pressed with the reference selected in the formula bar.

### 5.5 | Why is `=$A2*B$1` the right formula for a multiplication table filled down and across?
`$A2` always reads the row heading in column A, while `B$1` always reads the
column heading in row 1. Each keeps the part that must not move.

## Questions

### 5.5 | mcq | 1 mark | difficulty 1
Cell `D2` contains `=B2+C2`. The formula is copied to `D3`. What does `D3`
contain?

- A. `=B2+C2`
- B. `=B3+C3`
- C. `=C2+D2`
- D. `=B3+C2`

**Answer:** B

**Working:** Both references are relative, so both move down one row with the
formula.

### 5.5 | mcq | 1 mark | difficulty 2
Which reference will **not** change when the formula containing it is copied?

- A. `B2`
- B. `B$2`
- C. `$B2`
- D. `$B$2`

**Answer:** D

**Working:** Only `$B$2` has both parts locked. Options B and C are mixed
references — one part still adjusts.

### 5.5 | mcq | 1 mark | difficulty 3
Cell `E2` contains `=D2*$F$1`. The formula is copied to `E7`. What does `E7`
contain?

- A. `=D7*$F$1`
- B. `=D7*$F$6`
- C. `=D2*$F$1`
- D. `=D7*F6`

**Answer:** A

**Working:** `D2` is relative and moves down five rows to `D7`. `$F$1` is
absolute and stays exactly where it is.

### 5.5 | mcq | 1 mark | difficulty 4
Cell `B3` contains `=$A3*B$2`. The formula is copied to `D5`. What does `D5`
contain?

- A. `=$A5*D$2`
- B. `=$C5*D$4`
- C. `=$A3*B$2`
- D. `=$A5*B$2`

**Answer:** A

**Working:** The move is 2 columns right and 2 rows down. In `$A3` the column
is locked, so only the row moves: `$A5`. In `B$2` the row is locked, so only
the column moves: `D$2`.

### 5.5 | mcq | 1 mark | difficulty 3
A student writes `=C2*E1` in `F2` to add commission at a rate stored in `E1`,
then copies it down the column. Every row below the first shows zero. The most
likely reason is that

- A. the rate in `E1` is wrong
- B. `E1` should have been written as an absolute reference
- C. the column is too narrow
- D. `C2` should have been written as an absolute reference

**Answer:** B

**Working:** Copied down, `E1` becomes `E2`, `E3` and so on — empty cells,
which multiply to zero. Writing `$E$1` locks it on the rate. `C2` must stay
relative, since each row has its own sales figure.

### 5.5 | structured | 8 marks | difficulty 4
A shop's worksheet is set out as follows. The discount rate that applies to all
orders is stored in cell `H1`.

| | A | B | C | D | E |
|---|---|---|---|---|---|
| **1** | Item | Qty | Price | Amount | Payable |
| **2** | Cement | 20 | 1350 | | |
| **3** | Nails | 5 | 240 | | |
| **4** | Paint | 8 | 2100 | | |

(a) Write the formula for `D2` to calculate the amount, so that it can be
copied down the column. **(2 marks)**

(b) State what formula appears in `D4` after the formula in `D2` is copied
down. **(1 mark)**

(c) Write the formula for `E2` to calculate the amount after the discount in
`H1` has been deducted, so that it can be copied down the column. **(2 marks)**

(d) Explain what would go wrong if `H1` were written without dollar signs.
**(2 marks)**

(e) Define the term **replication**. **(1 mark)**

**Answer:** (a) `=B2*C2` — 2 marks. (b) `=B4*C4` — 1 mark.
(c) `=D2*(1-$H$1)` — 2 marks; accept `=D2-D2*$H$1`. Award 1 mark if the
calculation is right but `H1` is left relative.
(d) 1 mark — copying down would change `H1` to `H2`, `H3` and so on; 1 mark —
those cells are empty, so no discount would be deducted and rows 3 and 4 would
show the full amount.
(e) Copying a formula into other cells — 1 mark.

**Working:** (a) Both references must stay relative so that each row uses its
own quantity and price.

(c) `1 - 0.05` is 0.95, so multiplying by `(1-$H$1)` takes the discount off in
one step. The reference to the rate is fixed because there is only one rate,
in one cell.

(d) An empty cell is read as zero, so `=D3*(1-0)` returns the amount unchanged
— a wrong answer that looks perfectly reasonable on screen.
