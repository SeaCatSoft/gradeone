---
subject: IT
topic: spreadsheets
lesson: manipulating-data
title: Sorting, Filtering and Formatting Data
objectives: ["5.7"]
est_minutes: 24
status: draft
source: "Original prose written against syllabus objective 5.7 (manipulate data in a spreadsheet). Sorting on one and several keys, filtering with criteria, and cell formatting. NOT YET checked against textbook for depth."
---

## Lesson

Data is easier to read in the right order, and easier still when the rows you
do not care about are out of the way. This lesson covers putting a list in
order, hiding the rows that do not qualify, and presenting what is left
sensibly.

### Sorting

**Sorting** arranges rows into order on the values in a chosen column. That
column is the **sort key**.

**Ascending** runs A to Z for text, smallest to largest for numbers, and
earliest to latest for dates. **Descending** is the reverse.

The single most important rule: **select the whole table, not just the column
you are sorting on.** Sort column B alone and the marks are reordered while the
names in column A stay where they are. Every student now has somebody else's
mark, and nothing on screen looks wrong. This is the classic spreadsheet
disaster, and it is not easy to undo once the file has been saved.

Most programs guard against it by detecting the extent of your data and
offering to "expand the selection". Accept. Better still, click any single cell
inside the table and let the program select the whole block itself.

Tell the sort whether your data **has a header row**, so the headings stay at
the top instead of being sorted in among the data.

### Sorting on more than one key

A single key leaves ties unresolved. Sorting a class by grade puts all the As
together, but in no particular order within the group.

A second key settles the tie. Sort by **Grade** ascending, then by **Name**
ascending, and the As appear alphabetically, then the Bs, and so on.

The **order of the keys matters**, and swapping them gives a different result
entirely. "Sort by branch, then by sales" groups the rows branch by branch;
"sort by sales, then by branch" puts them in order of sales and only consults
the branch when two figures are identical.

The first key is called the **primary** key, the second the **secondary**, and
so on. Each is set to ascending or descending independently — "branch A to Z,
then sales largest first" is a normal request.

### Filtering

**Filtering** hides the rows that do not meet a condition. It does not delete
them and it does not reorder anything: the rows are still there, temporarily
out of sight.

Switch on AutoFilter and each heading gains a drop-down arrow. From it you can
tick the values you want, or set a condition:

| Criterion | Keeps |
|---|---|
| Equals `Portmore` | Rows for that branch only |
| Greater than `50` | Rows with a mark above 50 |
| Between `40` and `60` | Rows in that band |
| Begins with `S` | Names starting with S |
| Top 10 | The ten largest values |

Filters on different columns combine: filter branch = Portmore **and** sales >
10 000, and only rows meeting both remain visible.

Two things to watch. A filtered column's arrow changes appearance, and the row
numbers skip — your signal that rows are hidden. And a `SUM` over a filtered
range still totals **every** row, hidden ones included, because filtering is a
display action. To total only what is visible you need the `SUBTOTAL` function.

### Filtering compared with sorting

| | Sorting | Filtering |
|---|---|---|
| What it does | Rearranges rows | Hides rows |
| Rows visible afterwards | All | Only those matching |
| Original order | Changed | Kept |
| Reversible | Not easily once saved | Yes — clear the filter |

They are often used together: filter to this term's entries, then sort those by
mark.

### Find and replace

**Find** locates an entry; **Replace** swaps it for another, either one at a
time or everywhere at once.

Replace All is quick and unforgiving. Replacing `St` with `Saint` across a
whole sheet also rewrites `Stone` as `Saintone`. Use the "match entire cell
contents" option, or step through with Replace rather than Replace All, when
the text you are looking for might appear inside longer words.

### Formatting the data

Formatting changes how a value is displayed, never the value itself.

**Number formats** — the important ones:

| Format | `1234.5` appears as |
|---|---|
| General | `1234.5` |
| Number, 2 decimals | `1234.50` |
| Currency | `$1,234.50` |
| Percentage | applied to `0.15`, shows `15%` |
| Date | applied to a date serial number, shows `21/09/2026` |

The percentage format catches people out. It multiplies the display by 100, so
a cell holding `0.15` shows `15%`. Type `15` into a cell already formatted as a
percentage and you get `1500%` — the stored value is fifteen, not fifteen
hundredths.

**Alignment** — text left, numbers right by default, and these can be
overridden. Headings are usually centred. Remember the diagnostic from earlier:
a number sitting on the left has been stored as text.

**Merge and centre** joins cells into one, normally to centre a title across a
table. Use it sparingly — merged cells interfere with sorting and filtering,
which is why merging inside a data table is a bad idea. Keep it for titles
above the table.

**Conditional formatting** changes a cell's appearance depending on its value
— for instance, showing every mark below 50 in red. The rule is applied to the
cell, so the colour follows the data if the value changes. It is display only:
no value and no formula is affected, and the red cells are still included in
every total.

### Keeping data clean

Three habits that make sorting and filtering work properly:

1. **One heading row, then data.** No blank rows inside the table, and no
   second set of headings part-way down — a blank row makes the program think
   the table has ended.
2. **One kind of thing per column.** Do not put `45 kg` in a column of
   weights; the unit makes it text, and it will neither sort nor total
   correctly. Put the unit in the heading.
3. **Be consistent.** `Portmore`, `portmore` and `Portmore` with a trailing
   space are three different entries to a filter, and will be listed
   separately.

## Flashcards

### 5.7 | What is sorting?
Arranging rows into order on the values in a chosen column, ascending or
descending.

### 5.7 | Why must you select the whole table before sorting?
Sorting a single column reorders it while the other columns stay put, so every
row ends up with the wrong data. Nothing on screen shows the error.

### 5.7 | What is a sort key?
The column whose values decide the order. The first is the primary key, the
next the secondary key, and so on.

### 5.7 | When is a secondary sort key needed?
When the primary key produces ties. Sorting by grade then by name puts the As
in alphabetical order within the group.

### 5.7 | Does "sort by branch then by sales" give the same result as "sort by sales then by branch"?
No. The first groups the rows branch by branch; the second orders them by
sales and uses the branch only to break ties.

### 5.7 | What is filtering?
Temporarily hiding the rows that do not meet a stated condition. Nothing is
deleted and the order is unchanged.

### 5.7 | State two differences between sorting and filtering.
Sorting rearranges rows and keeps them all visible; filtering hides
non-matching rows and leaves the order alone. Filtering is easily reversed;
a sort is not, once saved.

### 5.7 | Does `=SUM(B2:B100)` change when the list is filtered?
No. Filtering hides rows but they are still in the range, so the total covers
them all. `SUBTOTAL` is needed to add only the visible rows.

> Hint: filtering is a display action.

### 5.7 | A cell formatted as a percentage holds the value `0.15`. What does it display?
`15%`. The percentage format multiplies the display by 100 — so typing `15`
into such a cell would show `1500%`.

### 5.7 | What is conditional formatting?
Formatting that changes a cell's appearance according to its value — showing
marks below 50 in red, for example. It changes appearance only.

### 5.7 | Give one risk of using Replace All.
It replaces the text inside longer entries too: replacing `St` with `Saint`
turns `Stone` into `Saintone`. Match the whole cell, or replace one at a time.

### 5.7 | Why should `45 kg` not be typed into a column of weights?
The unit makes the entry text, so it will not sort or total correctly. Put the
unit in the column heading and enter `45`.

## Questions

### 5.7 | mcq | 1 mark | difficulty 2
A student selects only column C, which contains marks, and sorts it into
descending order. The names remain in column A. What is the result?

- A. The whole table is reordered correctly
- B. The marks are reordered but are no longer matched to the right names
- C. The sort is refused
- D. Column C is hidden

**Answer:** B

**Working:** Only the selected column moves, so each name keeps its row while
the marks rearrange around it. The sheet looks perfectly normal, which is what
makes this error so damaging.

### 5.7 | mcq | 1 mark | difficulty 2
Which statement about filtering is correct?

- A. Rows that do not match are deleted
- B. Rows that do not match are hidden
- C. Rows are rearranged into order
- D. Only the first matching row is shown

**Answer:** B

**Working:** Filtering hides non-matching rows temporarily; clearing the filter
brings them back. Rearranging into order is sorting.

### 5.7 | mcq | 1 mark | difficulty 3
A list of 200 sales rows is filtered to show only the Portmore branch, leaving
15 rows visible. Cell `D201` contains `=SUM(D2:D200)`. What does it show?

- A. The total for the 15 visible rows
- B. The total for all 199 rows
- C. `#REF!`
- D. Zero

**Answer:** B

**Working:** The hidden rows are still inside the range, so `SUM` adds them.
Only `SUBTOTAL` restricts itself to the visible rows.

### 5.7 | mcq | 1 mark | difficulty 3
A teacher wants the register listed by form, and the students within each form
in alphabetical order. The sort should be

- A. primary key Name ascending, secondary key Form ascending
- B. primary key Form ascending, secondary key Name ascending
- C. primary key Name descending only
- D. primary key Form descending only

**Answer:** B

**Working:** The grouping you want is by form, so Form is the primary key. Name
then settles the order within each form. Reversing the keys would list the
whole school alphabetically.

### 5.7 | mcq | 1 mark | difficulty 3
A cell is formatted as a percentage. The user types `25` into it. What is
displayed?

- A. `25%`
- B. `0.25%`
- C. `2500%`
- D. `#VALUE!`

**Answer:** C

**Working:** The percentage format displays the stored value multiplied by 100.
The stored value is 25, so it shows `2500%`. To display `25%` the cell must
hold `0.25`, or be typed as `25%`.

### 5.7 | structured | 9 marks | difficulty 3
A supermarket keeps a worksheet of 450 sales. Row 1 holds headings; `A` holds
the branch, `B` the salesperson, `C` the date and `D` the amount.

(a) Describe how to list the sales grouped by branch, with the largest sale
first within each branch. Name the keys and their order. **(3 marks)**

(b) The manager wants to see only sales from the Portmore branch over
\$10 000. Name the operation and state the criteria used. **(3 marks)**

(c) After the operation in (b), cell `D452` still contains `=SUM(D2:D451)`.
State what this now shows and explain why. **(2 marks)**

(d) State **one** reason why merged cells should be avoided inside the data
table. **(1 mark)**

**Answer:** (a) 1 mark — sort (selecting the whole table, with a header row);
1 mark — primary key Branch, ascending; 1 mark — secondary key Amount,
descending.
(b) 1 mark — filtering (AutoFilter); 1 mark — Branch equals `Portmore`;
1 mark — Amount greater than `10000`. Accept the two criteria described as
applied together.
(c) 1 mark — it still shows the total of all 450 sales; 1 mark — filtering
hides rows but does not remove them from the range, so `SUM` includes them.
(Accept: `SUBTOTAL` would be needed to total the visible rows.)
(d) Any one: merged cells interfere with sorting and filtering; they can
prevent a range being selected properly; they make cell references ambiguous —
1 mark.

**Working:** (a) The key that decides the grouping always goes first. Ascending
and descending are set for each key separately, so "branch A to Z, largest
amount first" is one sort with two keys.

(b) Criteria on two different columns apply together, so only rows meeting both
stay visible.

(c) This is the standard misconception: a filtered total looks as though it
should follow the filter, and it does not.
