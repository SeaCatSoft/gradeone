---
subject: IT
topic: database-management
lesson: forms-and-reports
title: Forms and Reports
objectives: ["6.4"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 6.4 (manipulate data in a database), covering forms, reports and editing records. Queries are the previous lesson. NOT YET checked against textbook for depth."
---

## Lesson

Tables store data and queries find it. **Forms** are how data goes in, and
**reports** are how it comes out on paper.

Together with tables and queries, these are the four objects an elementary
database is built from.

### Forms

A **form** is an on-screen layout showing **one record at a time**, with each
field labelled and arranged sensibly.

Data can be typed straight into the table grid, so why bother?

**Fewer mistakes.** In a grid of 40 columns and 3000 rows it is easy to type
into the wrong row, or to lose track of which column you are in. A form shows
one record, so there is no wrong row to be in.

**Clear labels.** A form can say `Date of birth (dd/mm/yyyy)` where the column
heading only had room for `DOB`.

**Only the fields that matter.** A form can leave out fields the user must not
see or change.

**A sensible order and grouping.** Fields can be arranged to follow the paper
form being copied from, rather than the order the table happens to store them
in, which saves the eye jumping about.

**Controls that prevent errors.** A drop-down list of the valid form classes
cannot be misspelt. A date picker cannot produce 31 February. A tick box has
only two states.

A form can also carry buttons — save, next record, new record — so that a user
who knows nothing about databases can still use the system correctly.

Forms are usually built on a table, but can be built on a **query**, so that
the form shows only the records the query selects.

### Editing records through a form

Three operations, and each does exactly what it says:

**Add** a new record — a blank form is displayed and filled in.

**Edit** an existing record — find it, change the fields, and the change is
saved to the table.

**Delete** a record — the record is removed. This deserves the same caution as
a delete query: it cannot be undone, and if referential integrity is switched
on, the database will refuse to delete a record that others still refer to,
such as a member with loans outstanding.

The important point is that a form is a **window onto the table**. Changing a
value on a form changes it in the table; there is no separate copy. The same is
true of a query's results — edit a value there and the underlying record
changes.

### Reports

A **report** is a formatted presentation of data, designed to be **printed**.

Where a form serves one person entering one record, a report serves whoever
needs the data on paper: an end-of-term report sheet, a list of overdue books,
a monthly summary of takings.

A report is built on a table or, more usefully, on a **query** — so the report
shows exactly the records the query selected, in the order the query sorted
them.

### The parts of a report

| Section | Appears | Typically holds |
|---|---|---|
| Report header | Once, at the very start | The title, the date |
| Page header | At the top of every page | Column headings |
| Group header | At the start of each group | The group's name, e.g. the form class |
| Detail | Once per record | The record's fields |
| Group footer | At the end of each group | Subtotals for that group |
| Page footer | At the bottom of every page | Page number |
| Report footer | Once, at the very end | Grand totals |

Knowing these sections is what makes the difference between a printed table and
an actual report.

### Grouping and totalling

**Grouping** gathers records with the same value together — all the 4A students,
then all the 4B students — with a heading before each group.

**Totals** can then be placed in the group footer (a subtotal for each form
class) and in the report footer (a grand total for the school). Counts,
averages, highest and lowest can be produced the same way.

This is where a report earns its keep. A list of 3000 results is data; the same
results grouped by form class with an average for each is information somebody
can act on.

### Forms and reports compared

| | Form | Report |
|---|---|---|
| Purpose | Entering and viewing data | Presenting data, usually printed |
| Shows | One record at a time | Many records |
| Data can be changed | Yes | No |
| Designed for | The screen | The page |
| Typical features | Labels, drop-downs, buttons | Grouping, subtotals, page numbers |

The distinction that carries marks: a form is for **input** and is interactive;
a report is for **output** and is read-only.

### The four objects

| Object | What it is for |
|---|---|
| **Table** | Stores the data |
| **Query** | Selects the records and fields wanted |
| **Form** | Enters and displays data, one record at a time |
| **Report** | Presents data in printed form |

A typical system uses all four together: data is entered on a **form**, stored
in **tables**, selected by a **query**, and printed as a **report**.

## Flashcards

### 6.4 | What is a form in a database?
An on-screen layout for entering and viewing data **one record at a time**,
with each field labelled.

### 6.4 | Give three advantages of entering data through a form rather than the table grid.
Any three: there is no wrong row to type into; fields can be fully labelled;
fields the user should not see can be omitted; fields can be arranged in a
sensible order; controls such as drop-down lists prevent invalid entries.

### 6.4 | If you change a value on a form, what happens to the table?
It changes too. A form is a window onto the table, not a separate copy.

### 6.4 | What is a report?
A formatted presentation of data from the database, designed to be printed.

### 6.4 | Name four sections of a report.
Any four: report header; page header; group header; detail; group footer; page
footer; report footer.

### 6.4 | Which report section holds a subtotal for each group?
The **group footer**. The grand total goes in the report footer.

### 6.4 | What does grouping in a report do?
Gathers records with the same value together, with a heading before each group
— and allows a subtotal to be printed for each.

### 6.4 | State two differences between a form and a report.
A form shows one record at a time and data can be changed through it; a report
shows many records, is designed for printing, and is read-only.

### 6.4 | Why is a report usually based on a query rather than a table?
So it prints exactly the records the query selected, in the order the query
sorted them, rather than the whole table.

### 6.4 | Name the four objects an elementary database is built from.
**Tables** store the data, **queries** select it, **forms** enter and display
it, **reports** present it in printed form.

### 6.4 | What happens if you try to delete a member who still has loans recorded?
With referential integrity switched on, the database refuses — deleting would
leave the loan records pointing at a member who no longer exists.

## Questions

### 6.4 | mcq | 1 mark | difficulty 1
Which database object is used to enter and view data one record at a time?

- A. Table
- B. Query
- C. Form
- D. Report

**Answer:** C

**Working:** A form shows a single record with labelled fields. A report
presents many records for printing.

### 6.4 | mcq | 1 mark | difficulty 2
Which database object is designed mainly to produce printed output?

- A. Form
- B. Report
- C. Query
- D. Table

**Answer:** B

**Working:** Reports are laid out for the page, with headers, page numbers and
totals. Queries select the data a report presents.

### 6.4 | mcq | 1 mark | difficulty 2
A user changes a student's surname on a form. What happens to the record in the
table?

- A. Nothing — the form holds a separate copy
- B. The surname in the table changes too
- C. A new record is created
- D. The change is lost when the form is closed

**Answer:** B

**Working:** A form is a window onto the table. There is only one copy of the
data, so editing it on the form edits the record itself.

### 6.4 | mcq | 1 mark | difficulty 3
A report lists students grouped by form class, with the average mark for each
class. Where is that average placed?

- A. The page header
- B. The detail section
- C. The group footer
- D. The report header

**Answer:** C

**Working:** A figure summarising one group is printed at the end of that
group, in the group footer. A school-wide average would go in the report
footer.

### 6.4 | mcq | 1 mark | difficulty 3
Which feature of a form most reduces the chance of an invalid form class being
entered?

- A. A larger font
- B. A drop-down list of the valid classes
- C. Placing the field last
- D. Naming the field clearly

**Answer:** B

**Working:** A drop-down offers only valid values, so a misspelling is
impossible. Clear naming helps, but the user can still type anything.

### 6.4 | structured | 9 marks | difficulty 3
A sports club keeps a database of members and the fees they have paid. The
secretary enters new members and prints a monthly statement grouped by branch,
showing the total fees for each branch and for the club as a whole.

(a) Name the database object the secretary should use to enter new members, and
give **two** reasons. **(3 marks)**

(b) Name the object used to produce the monthly statement. **(1 mark)**

(c) State the report section in which each of the following should appear:

(i) the total fees for each branch **(1 mark)**

(ii) the total fees for the whole club **(1 mark)**

(iii) the page number **(1 mark)**

(d) State **two** differences between a form and a report. **(2 marks)**

**Answer:** (a) 1 mark — a form; 2 marks for any two reasons: it shows one
record at a time so data cannot be typed into the wrong row; fields can be
fully labelled; fields the user should not change can be omitted; controls such
as drop-down lists prevent invalid entries; fields can be ordered to match the
paper application form.
(b) A report — 1 mark.
(c)(i) The group footer. (ii) The report footer. (iii) The page footer.
(d) Any two, 1 mark each: a form shows one record, a report shows many; data
can be changed through a form but not through a report; a form is designed for
the screen, a report for printing; a report can group records and print totals.

**Working:** (c) Distinguish the three footers by their scope: group footer is
per group, report footer is once at the very end, page footer is on every page.
A page number cannot go in the report footer, since it must appear on all of
them.
