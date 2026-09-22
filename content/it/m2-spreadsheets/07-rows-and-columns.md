---
subject: IT
topic: spreadsheets
lesson: rows-and-columns
title: Manipulating Columns and Rows
objectives: ["5.6"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 5.6 (manipulate columns and rows). NOT YET checked against textbook for depth."
---

## Lesson

A worksheet is rarely right first time. Data arrives in the wrong order, a
heading is forgotten, someone needs a column you did not plan for. Reshaping
the grid is ordinary work — but it moves data that formulas are pointing at, so
it needs care.

### Selecting whole rows and columns

Click the **row number** at the left edge to select a whole row, or the
**column letter** at the top for a whole column. Drag across several headings
to select a block of them.

You must select this way before inserting, deleting, hiding or resizing. A
common beginner's error is to select a few *cells* and choose Delete: that
removes the cells and shifts their neighbours, leaving the rows around them
misaligned.

### Inserting

Inserting a row pushes everything below it down; inserting a column pushes
everything to its right along. The new row or column takes the position of the
one you selected — so selecting row 5 and inserting puts the new row *above*
the old row 5.

Formulas adjust by themselves. If `B12` holds `=SUM(B2:B11)` and you insert a
new row at 6, the total becomes `=SUM(B2:B12)` and includes the newcomer.

This is a strong argument for using functions rather than chains of `+`. A
hand-written `=B2+B3+B4+B5+B6+B7+B8+B9+B10+B11` does **not** pick up the
inserted row. The total is simply wrong, with nothing on screen to say so.

To add rows at the very bottom of a list you need no insert at all — just type
in the first empty row. But check that any total beneath it still covers the
new figures: a `=SUM(B2:B11)` sitting in `B12` will not stretch to a row typed
into 12.

### Deleting

Deleting a row closes the gap: rows below move up and the numbering
re-sequences. Nothing is left behind.

Deleting is where damage happens. Any formula that referred to a deleted cell
now shows **`#REF!`** — the reference has nowhere to point. If `D2` held
`=B2*C2` and you delete column B, `D2` becomes `=#REF!*C2`.

Before deleting, ask what else is reading those cells. `#REF!` at least
announces itself; a formula whose *range* shrank silently does not. Delete a
row inside `=SUM(B2:B11)` and the range quietly becomes `B2:B10`, which is
correct — but delete a row that a `VLOOKUP` table depended on and the lookup
starts returning `#N/A` for entries that used to work.

**Deleting is not the same as clearing.** Clearing (the Delete key) empties the
cells but leaves the row in place, so the numbering and everything below stay
put. Deleting removes the row itself. When you only want to get rid of the
*contents*, clear.

### Adjusting width and height

A column too narrow for its numbers shows `#####`. This is not an error — the
value is intact and only the display is squeezed. Widen the column and it
returns.

Text behaves differently: a long label spills over the next cell if that cell
is empty, and is cut off at the boundary if it is not. The data is still all
there in both cases; only the display changes.

Ways to adjust:

- Drag the boundary between two column letters.
- Double-click that boundary for **best fit** — the column resizes to its
  widest entry.
- Use the Format menu to set an exact width, or to fit several selected columns
  at once.

If a heading is much longer than the data beneath it, widening the whole column
wastes space. **Wrap text** is usually the better answer: the label continues
on a second line inside its own cell, and the row grows taller to fit.

### Hiding

Hiding removes a row or column from view without deleting anything. The data
stays, formulas that refer to it keep working, and it is not printed.

It is used to tidy a printout — working columns, ID codes, intermediate
calculations — while keeping them available. Select the headings either side of
the hidden one and choose Unhide to bring it back.

The giveaway that something is hidden is a **break in the numbering**: row
headings running 5, 6, 9, 10 mean rows 7 and 8 are hidden. Watch for this when
checking someone else's sheet, because a hidden column still counts in every
total.

### Freezing panes

Scroll down a list of 300 students and the headings disappear off the top,
leaving columns of unlabelled numbers. **Freeze panes** locks chosen rows or
columns in place so they stay on screen while the rest scrolls.

The usual rule: select the cell **below and to the right of** everything you
want frozen, then apply Freeze Panes. To freeze row 1 only, select `A2`; to
freeze row 1 and column A together, select `B2`.

Freezing affects the screen only. It changes no data, no formula and nothing
about the printout — for repeating headings on every printed page you need
*print titles* instead.

### What does and does not change data

| Action | Effect on the data |
|---|---|
| Insert row or column | Nothing removed; formulas adjust |
| Delete row or column | Data removed; references may become `#REF!` |
| Clear | Contents removed, the row itself stays |
| Adjust width | Display only |
| Hide | Display only — still counted in formulas |
| Freeze panes | Display only |
| Wrap text | Display only |

Only insert, delete and clear touch the data at all. Everything else is
appearance — worth remembering, because exam questions like to ask whether a
hidden row is still included in a total. It is.

## Flashcards

### 5.6 | How do you select an entire column?
Click its column letter at the top of the grid. Clicking a row number selects
an entire row.

### 5.6 | Where does a new row appear when you select row 5 and insert?
Above the old row 5. Everything from row 5 down is pushed down one place.

### 5.6 | What happens to `=SUM(B2:B11)` when a row is inserted at row 6?
The range expands to `=SUM(B2:B12)`, so the new row is included automatically.

### 5.6 | Why does inserting a row break `=B2+B3+B4+B5` but not `=SUM(B2:B5)`?
A range adjusts to include the inserted row; a chain of individual references
keeps only the cells it was written with, so the new row is left out silently.

### 5.6 | What does `#REF!` mean and what usually causes it?
A formula is pointing at a cell that no longer exists — usually because the
row, column or cell it referred to was deleted.

### 5.6 | What is the difference between clearing and deleting a row?
**Clearing** empties the cells but leaves the row in place. **Deleting**
removes the row itself, so rows below move up and are renumbered.

### 5.6 | A column shows `#####`. What has happened?
The column is too narrow to display the number. The value is unaffected — widen
the column.

### 5.6 | What does hiding a column do, and is the data still used in calculations?
It removes the column from view and from printouts without deleting anything.
Formulas that refer to it keep working, so hidden data **is** still included in
totals.

### 5.6 | How can you tell that rows have been hidden?
The row numbering skips — headings running 5, 6, 9, 10 mean rows 7 and 8 are
hidden.

### 5.6 | What is the purpose of freezing panes?
It locks chosen rows or columns on screen so headings stay visible while you
scroll through a long list.

### 5.6 | Which cell do you select to freeze row 1 and column A together?
`B2` — the cell below and to the right of everything to be frozen.

### 5.6 | Name two ways to deal with a heading too long for its column.
Widen the column (drag the boundary, or double-click it for best fit), or
switch on **wrap text** so the label continues on a second line inside the
cell.

## Questions

### 5.6 | mcq | 1 mark | difficulty 1
A cell displays `#####`. What should be done?

- A. Retype the value
- B. Widen the column
- C. Delete the row
- D. Change the formula

**Answer:** B

**Working:** `#####` means the column is too narrow to display the number. The
stored value is perfectly good.

### 5.6 | mcq | 1 mark | difficulty 2
Cell `B12` contains `=SUM(B2:B11)`. A new row is inserted at row 7. What does
`B13` now contain?

- A. `=SUM(B2:B11)`
- B. `=SUM(B2:B12)`
- C. `=SUM(B3:B12)`
- D. `#REF!`

**Answer:** B

**Working:** The formula moves down to `B13` and its range expands to cover the
inserted row, so the new figure is included.

### 5.6 | mcq | 1 mark | difficulty 3
Column C is hidden. Cell `E1` contains `=SUM(A1:D1)`. The total shown

- A. excludes the value in `C1`
- B. includes the value in `C1`
- C. shows `#REF!`
- D. shows `#####`

**Answer:** B

**Working:** Hiding affects the display only. The data is still there and is
still included in every formula that refers to it — which is why a hidden
column can make a total look wrong.

### 5.6 | mcq | 1 mark | difficulty 2
A student wants to empty a row of marks but keep the row and its numbering in
place. The student should

- A. delete the row
- B. hide the row
- C. clear the row
- D. freeze the row

**Answer:** C

**Working:** Clearing removes the contents and leaves the row. Deleting would
remove the row itself and renumber everything below.

### 5.6 | mcq | 1 mark | difficulty 3
Cell `D2` contains `=B2*C2`. Column B is deleted. What does the formula in the
cell now show?

- A. `=B2*C2`
- B. `=A2*B2`
- C. `#REF!`
- D. `#VALUE!`

**Answer:** C

**Working:** The cell the formula multiplied by no longer exists, so the
reference cannot be resolved and the cell reports `#REF!`.

### 5.6 | structured | 8 marks | difficulty 3
A club keeps a membership list with headings in row 1 and 240 members in rows 2
to 241. Column F holds a reference code that is needed by formulas but should
not appear on the printout.

(a) State how the secretary can keep the headings in row 1 visible while
scrolling to row 200, and name the cell that should be selected first.
**(2 marks)**

(b) Explain how to keep column F out of the printout without losing the data,
and state whether formulas using column F will still work. **(2 marks)**

(c) A new member must be added between rows 12 and 13. Describe what happens to
the rows below when a row is inserted at row 13. **(2 marks)**

(d) Cell `D242` contains `=SUM(D2:D241)`. Explain why this total remains
correct after the insertion. **(1 mark)**

(e) State **one** risk of deleting a row rather than clearing it. **(1 mark)**

**Answer:** (a) 1 mark — use Freeze Panes; 1 mark — select `A2` first (the cell
below the row to be frozen). (b) 1 mark — hide column F (select the column
heading and choose Hide); 1 mark — yes, formulas referring to it still work,
because hiding affects the display only. (c) 1 mark — the existing row 13 and
every row below it move down one place; 1 mark — they are renumbered, so the
last member is now in row 242. (d) The range expands automatically to include
the inserted row, becoming `=SUM(D2:D242)` — 1 mark. (e) Any one: formulas
referring to the deleted cells show `#REF!`; the data is lost; rows below are
renumbered, so printed or quoted row numbers no longer match — 1 mark.

**Working:** (a) Freezing is a screen setting and does not change the data or
the printout.

(c) Insertion never overwrites: the new row takes position 13 and the old
occupant becomes row 14.

(d) Note that the total cell itself also moves down, from `D242` to `D243`.
