---
subject: IT
topic: spreadsheets
lesson: worksheets
title: Working with Several Worksheets
objectives: ["5.9"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 5.9 (manipulate one or more worksheets). Includes linking between sheets and 3-D references. NOT YET checked against textbook for depth."
---

## Lesson

A workbook can hold many worksheets, shown as tabs along the bottom of the
window. Splitting work across them keeps related data together in one file
while giving each part room to breathe.

### Why use more than one

Twelve months of sales could go on one enormous sheet, but twelve sheets named
`January` to `December` are easier to read, easier to print and easier to
compare. A thirteenth, `Summary`, can pull a total from each.

The usual pattern is **one sheet per period or per category, plus a summary
sheet that reads from them all**. Each detail sheet has the same layout, so a
formula written for one works for any.

### The everyday operations

**Insert** a new sheet with the `+` button beside the tabs, or from the menu.

**Rename** by double-clicking the tab and typing. Do it straight away:
`Sheet1`, `Sheet2`, `Sheet3` tells the next reader nothing, and formulas that
refer to other sheets carry the name in them, so a meaningful name makes them
readable.

**Move or copy** by dragging a tab along the row, or by right-clicking and
choosing Move or Copy — which can also place the sheet into a *different*
workbook. Copying is how you reuse a layout: duplicate `January`, rename it
`February`, clear the figures, and the headings and formulas are already in
place.

**Colour** a tab to group related sheets visually.

**Delete** by right-clicking the tab. This one deserves care: deleting a sheet
**cannot be undone** in most spreadsheet programs, and any formula elsewhere
that referred to it collapses to `#REF!`. Check what reads from a sheet before
removing it.

**Hide** a sheet to keep it out of the way without deleting it. Formulas
referring to a hidden sheet keep working normally.

### Selecting several sheets at once

Hold **Ctrl** and click several tabs to group them. Anything you now type or
format applies to **all** the selected sheets at once — the quickest way to put
the same headings on twelve monthly sheets.

The danger is forgetting. While sheets are grouped, every edit goes to all of
them, and it is easy to overwrite eleven sheets of data without noticing. Click
a single tab to ungroup as soon as you are done.

### Referring to a cell on another sheet

Put the sheet name, an exclamation mark, and the cell address:

```
=January!B10
```

That means cell `B10` on the sheet named `January`. If the name contains a
space it must be wrapped in single quotation marks:

```
='Term 1'!B10
```

These references behave like any other. They can be part of a longer formula,
and they update automatically when the source changes:

```
=January!B10 + February!B10 + March!B10
```

The easiest way to write one is to start the formula, then click the other
sheet's tab and click the cell — the reference is inserted for you, correctly
punctuated.

### Linking, and why it matters

When a summary sheet reads from the monthly sheets, the figures are **linked**,
not copied. Correct a mistake in `January` and the summary changes with it.

Typing the total into the summary by hand would look identical today and be
wrong tomorrow. The rule is the same one behind cell references generally:
never store a figure twice. One place holds it; everywhere else points at it.

Links can also reach into a different workbook, in which case the file name
appears too. Those links break if the other file is moved or renamed, so a
single workbook of many sheets is safer than many workbooks pointing at one
another.

### 3-D references

When the same cell is to be totalled across a run of sheets, there is a
shorthand. Instead of

```
=January!B10 + February!B10 + March!B10
```

write

```
=SUM(January:March!B10)
```

This is a **3-D reference**: it adds `B10` on every sheet from `January` to
`March` inclusive, in tab order. The name comes from the third dimension —
across the stack of sheets, as well as down rows and across columns.

Two things follow from "in tab order". Move a sheet into the range and it is
included; move one out and it is not. And any sheet inserted **between** the
two named ones joins the total automatically, which is convenient if you meant
it and a quiet error if you did not.

For a 3-D reference to work, every sheet in the range must have the same
layout, so that `B10` means the same thing on each.

## Flashcards

### 5.9 | Where are worksheets shown, and how is one renamed?
As tabs along the bottom of the window. Double-click the tab and type the new
name.

### 5.9 | Why rename sheets rather than leaving them as `Sheet1`, `Sheet2`?
The names appear inside every formula that refers to another sheet, so
meaningful names make the formulas readable — and any reader can tell what each
sheet holds.

### 5.9 | How do you refer to cell `B10` on a sheet named `January`?
`=January!B10` — the sheet name, an exclamation mark, then the cell address.

### 5.9 | How is a sheet name containing a space written in a formula?
In single quotation marks: `='Term 1'!B10`.

### 5.9 | What is a 3-D reference?
A reference across a run of sheets, such as `=SUM(January:March!B10)`, which
adds `B10` on every sheet from January to March inclusive.

### 5.9 | Why must sheets in a 3-D reference share the same layout?
The reference uses the same cell address on each sheet, so `B10` must hold the
same kind of figure on all of them.

### 5.9 | What happens to a summary total when a figure on a monthly sheet is corrected?
It updates automatically. The summary is **linked** to the monthly sheets, not
copied from them.

### 5.9 | What is the risk of deleting a worksheet?
It usually cannot be undone, and every formula that referred to it shows
`#REF!`.

### 5.9 | What does holding Ctrl and clicking several tabs allow you to do?
Group the sheets, so anything typed or formatted applies to all of them at
once. Click a single tab to ungroup — while grouped, every edit affects every
selected sheet.

### 5.9 | How would you create a `February` sheet identical in layout to `January`?
Right-click the `January` tab, choose Move or Copy with "create a copy" ticked,
rename the copy `February`, then clear the figures. The headings and formulas
are already in place.

## Questions

### 5.9 | mcq | 1 mark | difficulty 1
Which formula correctly refers to cell `C5` on a worksheet named `Sales`?

- A. `=Sales.C5`
- B. `=Sales!C5`
- C. `=C5(Sales)`
- D. `=Sales:C5`

**Answer:** B

**Working:** The sheet name is separated from the cell address by an
exclamation mark. A colon is the range separator.

### 5.9 | mcq | 1 mark | difficulty 2
A workbook has sheets `Term1`, `Term2` and `Term3`, each laid out identically.
Which formula totals cell `D20` across all three?

- A. `=SUM(Term1:Term3!D20)`
- B. `=SUM(Term1!D20:Term3!D20)`
- C. `=SUM(Term1-Term3!D20)`
- D. `=Term1!D20:Term3!D20`

**Answer:** A

**Working:** This is a 3-D reference: the sheet range comes first, then the
exclamation mark, then the cell address common to all of them.

### 5.9 | mcq | 1 mark | difficulty 3
A summary sheet contains `=January!B10`. The figure in `January!B10` is
corrected from 4500 to 5400. The summary sheet

- A. keeps showing 4500 until it is retyped
- B. shows 5400 automatically
- C. shows `#REF!`
- D. shows both values

**Answer:** B

**Working:** The cells are linked, not copied, so the summary follows the
source. This is why totals should be linked rather than typed in by hand.

### 5.9 | mcq | 1 mark | difficulty 3
A worksheet is deleted from a workbook. Formulas on other sheets that referred
to it will show

- A. the last value calculated
- B. zero
- C. `#REF!`
- D. `#NAME?`

**Answer:** C

**Working:** The cells they pointed at no longer exist, so the references
cannot be resolved. In most spreadsheet programs deleting a sheet cannot be
undone, which makes this worth checking beforehand.

### 5.9 | mcq | 1 mark | difficulty 2
A user holds Ctrl, clicks the tabs of all twelve monthly sheets, and types a
heading into `A1`. The result is that the heading appears

- A. on the first sheet only
- B. on all twelve sheets
- C. on the last sheet only
- D. nowhere, as grouped sheets cannot be edited

**Answer:** B

**Working:** Grouping applies every edit to all selected sheets. It is the
quickest way to give twelve sheets the same headings — and the easiest way to
overwrite eleven sheets by mistake if you forget to ungroup.

### 5.9 | structured | 8 marks | difficulty 3
A hardware store keeps one worksheet for each month of the first quarter, named
`January`, `February` and `March`. Each has an identical layout, with the
month's total sales in cell `D30`. A fourth sheet named `Summary` collects the
figures.

(a) Write a formula for `Summary!B2` that shows January's total sales.
**(1 mark)**

(b) Write a formula for `Summary!B5` that totals the sales for all three months
using a 3-D reference. **(2 marks)**

(c) An error in January's figures is corrected. State what happens to the
Summary sheet and explain why. **(2 marks)**

(d) Describe how the store could create an `April` sheet with the same layout
and formulas, without retyping them. **(2 marks)**

(e) State **one** reason why the sheets should be named as they are rather than
left as `Sheet1`, `Sheet2` and `Sheet3`. **(1 mark)**

**Answer:** (a) `=January!D30` — 1 mark.
(b) `=SUM(January:March!D30)` — 2 marks; accept
`=January!D30+February!D30+March!D30` for 2 marks. 1 mark for a 3-D reference
with the punctuation wrong.
(c) 1 mark — the Summary updates automatically; 1 mark — the cells are linked
to the January sheet rather than holding copies of its figures.
(d) 1 mark — right-click a month's tab and choose Move or Copy with "create a
copy" ticked (accept: drag the tab while holding Ctrl); 1 mark — rename the new
sheet `April` and clear the figures, leaving headings and formulas in place.
(e) Any one: the names appear in every cross-sheet formula, so meaningful names
make formulas readable; a reader can tell at a glance what each sheet holds;
a 3-D reference such as `January:March` reads as what it does — 1 mark.

**Working:** (b) The 3-D form covers every sheet between the two named, in tab
order — so a sheet inserted between `January` and `March` would be added to the
total automatically.

(c) The general rule behind this: store a figure in one place and point at it
from everywhere else. A total typed into the Summary by hand would be right
today and wrong after the first correction.
