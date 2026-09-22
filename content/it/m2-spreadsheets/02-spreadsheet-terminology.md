---
subject: IT
topic: spreadsheets
lesson: spreadsheet-terminology
title: Spreadsheet Terminology
objectives: ["5.2"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 5.2 (use appropriate terminologies and notions commonly associated with spreadsheets). NOT YET checked against textbook for depth."
---

## Lesson

Almost every mark you lose in this section comes from using the wrong word.
"Cell" and "cell address" are not the same thing; neither are "value" and
"label". This lesson fixes the vocabulary so the rest of the topic makes sense.

### The container: workbook and worksheet

A **workbook** is the file you save. A **worksheet** (or *sheet*) is one page
of grid inside it. A workbook can hold many worksheets, named along tabs at the
bottom of the window.

So `Budget2026.xlsx` is a workbook; `January`, `February` and `Summary` inside
it are worksheets.

### The grid: rows, columns, cells

- A **column** runs vertically and is labelled with a letter: A, B, C … Z, AA,
  AB, and so on.
- A **row** runs horizontally and is numbered: 1, 2, 3 …
- A **cell** is the box where one column meets one row. It is the smallest unit
  you can put data into.

A memory hook: a row of seats in a cinema runs across; a column in a building
stands up.

### Cell address (cell reference)

Every cell has an address made of its **column letter followed by its row
number**: `C7` is the cell in column C, row 7. Always that way round — `7C` is
meaningless.

The **active cell** is the one currently selected, outlined by the **cell
pointer**. Its address appears in the **Name Box** at the top-left, and its
contents appear in the **formula bar** beside it.

That distinction matters. If `D5` holds `=B5*C5`, the cell *displays* `450`
while the formula bar *shows* `=B5*C5`. The cell shows the result; the formula
bar shows what produced it.

### Range

A **range** is a rectangular block of cells, written as the top-left address, a
colon, and the bottom-right address:

| Written | Means |
|---|---|
| `B2:B10` | a column strip, B2 down to B10 (9 cells) |
| `A1:D1` | a row strip, A1 across to D1 (4 cells) |
| `A1:C4` | a block, 3 columns × 4 rows = 12 cells |

Counting a range is a common exam question. `B2:B10` is 10 − 2 + 1 = **9**
cells — subtracting alone forgets that both ends are included.

### What can go in a cell

Exactly three kinds of thing, and telling them apart is essential:

**Label** — text. A heading like `Student Name`, or an entry like `Kingston`.
Labels are not calculated with. By default they line up on the **left** of the
cell.

**Value** — a number entered directly: `45`, `19.99`, a date, a percentage.
Values can be calculated with and line up on the **right** by default.

**Formula** — an instruction that works something out, always beginning with
`=`, such as `=B5*C5`. The cell shows the *result*.

Those default alignments are a useful diagnostic. If you type a number and it
sits on the left, the spreadsheet has read it as text — often because of a stray
space or a letter — and it will not calculate correctly.

A note on numbers that are really labels: a telephone number such as `876 555
0123` or an ID like `007` should be stored as a label. You never do arithmetic
on them, and storing `007` as a value loses the leading zeros.

### Formula, function, operator

- A **formula** is anything you write beginning with `=`.
- A **function** is a ready-made calculation built into the program, called by
  name: `=SUM(B2:B10)`, `=AVERAGE(C1:C20)`.
- An **operator** is a symbol for an operation: `+ - * / ^` for arithmetic,
  `> < =` and so on for comparison.

Every function sits inside a formula, but not every formula contains a
function. `=B2+B3+B4` is a formula with no function; `=SUM(B2:B4)` does the same
job using one.

The values a function is given are its **arguments**, written in the brackets
and separated by commas. In `=ROUND(A1, 2)` the arguments are `A1` and `2`.

### Terms about the display

**Gridlines** — the faint lines marking the cells on screen. They guide the eye
and are not printed unless you ask for it. They are not the same as **borders**,
which you add deliberately and which do print.

**Freeze panes** — locks chosen rows or columns in place so headings stay
visible while you scroll through a long list.

**Wrap text** — makes a long label continue on a second line inside its cell
instead of spilling over the neighbour.

**Merge cells** — joins several cells into one, usually to centre a title
across a table.

**Cell format** — how a value is *displayed*: as currency, a percentage, a date,
or to a set number of decimal places. Formatting changes appearance only; the
stored value is untouched. A cell holding `3.14159` formatted to two decimals
displays `3.14` but still calculates with `3.14159`.

**`#####`** — not an error. The column is simply too narrow to show the number;
widen it and the figure reappears.

### The vocabulary, in one place

| Term | Meaning |
|---|---|
| Workbook | The whole file |
| Worksheet | One grid page inside the workbook |
| Cell | Where one column meets one row |
| Cell address | Column letter + row number, e.g. `C7` |
| Active cell | The currently selected cell |
| Cell pointer | The outline marking the active cell |
| Range | A rectangular block, e.g. `A1:C4` |
| Label | Text entry; aligns left |
| Value | Number entry; aligns right |
| Formula | An instruction beginning with `=` |
| Function | A built-in calculation, e.g. `SUM` |
| Argument | A value given to a function, inside its brackets |
| Formula bar | Shows what the active cell actually contains |
| Name Box | Shows the active cell's address |
| Gridlines | On-screen guide lines, not normally printed |

## Flashcards

### 5.2 | What is the difference between a workbook and a worksheet?
A **workbook** is the file you save. A **worksheet** is one grid page inside
it; a workbook may contain many, shown as tabs.

### 5.2 | How is a cell address written?
Column letter first, then row number — `C7` means column C, row 7. Never the
other way round.

### 5.2 | What is a range, and how is `A1:C4` written out?
A rectangular block of cells, written top-left `:` bottom-right. `A1:C4` is 3
columns × 4 rows = **12 cells**.

### 5.2 | How many cells are in the range `B2:B10`?
Nine. Both ends are included, so it is 10 − 2 + 1 = 9.

> Hint: subtracting alone forgets one end.

### 5.2 | Distinguish between a label and a value.
A **label** is text and is not calculated with (aligns left by default). A
**value** is a number and can be calculated with (aligns right by default).

### 5.2 | What is the difference between a formula and a function?
A **formula** is anything beginning with `=`. A **function** is a built-in
calculation called by name inside a formula.

`=B2+B3+B4` is a formula with no function; `=SUM(B2:B4)` uses one.

### 5.2 | A cell displays `450` but the formula bar shows `=B5*C5`. Explain.
The cell displays the **result** of the formula; the formula bar shows what the
cell actually **contains**.

### 5.2 | A cell shows `#####`. What does it mean and how is it fixed?
The column is too narrow to display the number. Widen the column. It is not an
error in the data.

### 5.2 | What does "freeze panes" do?
Locks chosen rows or columns on screen so headings stay visible while you
scroll through a long list.

### 5.2 | What are the arguments of a function?
The values given to it inside its brackets, separated by commas. In
`=ROUND(A1, 2)` the arguments are `A1` and `2`.

## Questions

### 5.2 | mcq | 1 mark | difficulty 1
Which of the following is a valid cell address?

- A. `7C`
- B. `C7`
- C. `C:7`
- D. `C-7`

**Answer:** B

**Working:** A cell address is the column letter followed by the row number.
The colon in option C is the range separator.

### 5.2 | mcq | 1 mark | difficulty 2
How many cells does the range `A1:C4` contain?

- A. 7
- B. 8
- C. 12
- D. 16

**Answer:** C

**Working:** Columns A to C is 3 columns; rows 1 to 4 is 4 rows. 3 × 4 = 12.

### 5.2 | mcq | 1 mark | difficulty 2
A student types a quantity into a cell and it appears on the **left** of the
cell. This most likely means the entry

- A. is too wide for the column
- B. has been read as a label rather than a value
- C. contains a formula
- D. has been formatted as currency

**Answer:** B

**Working:** Values align right by default and labels align left, so a number
sitting on the left has been stored as text — usually because of a stray space
or letter. It will not calculate correctly.

### 5.2 | mcq | 1 mark | difficulty 3
Which of these is a formula that contains **no** function?

- A. `=SUM(A1:A5)`
- B. `=AVERAGE(A1,A5)`
- C. `=A1+A2+A3`
- D. `=MAX(A1:A5)`

**Answer:** C

**Working:** `=A1+A2+A3` uses only operators. The others call the built-in
functions SUM, AVERAGE and MAX.

### 5.2 | mcq | 1 mark | difficulty 2
Cell `F3` contains the value `3.14159` and is formatted to show two decimal
places. The cell displays `3.14`. If `F3` is used in another calculation, which
number is used?

- A. `3.14`
- B. `3.14159`
- C. `3.2`
- D. `3`

**Answer:** B

**Working:** Formatting changes only how a value is **displayed**. The stored
value is unchanged, so calculations use `3.14159`. To change the stored value
you would need the ROUND function.

### 5.2 | structured | 8 marks | difficulty 3
The table below shows part of a worksheet named `Term1` in a workbook called
`Marks.xlsx`.

| | A | B | C |
|---|---|---|---|
| **1** | Student | Test 1 | Test 2 |
| **2** | Ayesha | 68 | 74 |
| **3** | Marlon | 55 | 61 |
| **4** | Shanice | 80 | 77 |

(a) State the cell address of the cell containing `61`. **(1 mark)**

(b) Write the range containing all six marks. **(1 mark)**

(c) How many cells are in the range `A1:C4`? **(1 mark)**

(d) State whether the entry in `A2` is a label or a value, and give a reason.
**(2 marks)**

(e) Distinguish between a **workbook** and a **worksheet**, using the names
above in your answer. **(2 marks)**

(f) Cell `D2` shows `142`, but the formula bar shows `=B2+C2`. Explain why the
two differ. **(1 mark)**

**Answer:** (a) `C3`. (b) `B2:C4`. (c) 12. (d) A label — 1 mark; it is text and
is not used in calculations (accept: it aligns left) — 1 mark. (e) A workbook is
the saved file, `Marks.xlsx` — 1 mark; a worksheet is one grid page inside it,
`Term1` — 1 mark. (f) The cell displays the result of the formula, while the
formula bar shows what the cell contains.

**Working:** (a) `61` sits in column C, row 3.

(b) The marks occupy columns B and C, rows 2 to 4, so top-left `B2` to
bottom-right `C4`.

(c) 3 columns × 4 rows = 12 cells. This range includes the headings and the
names, not just the marks.

(d) `Ayesha` is text.

(f) 68 + 74 = 142, the value displayed.
