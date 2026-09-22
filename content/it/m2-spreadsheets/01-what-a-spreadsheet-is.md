---
subject: IT
topic: spreadsheets
lesson: what-a-spreadsheet-is
title: What a Spreadsheet Is For
objectives: ["5.1"]
est_minutes: 15
status: draft
source: "Original prose written against syllabus objective 5.1 (explain the purpose of a spreadsheet). NOT YET checked against textbook for depth."
---

## Lesson

A **spreadsheet** is a program that stores data in a grid and recalculates
every result the moment any figure it depends on changes.

That second half is the whole point. Anyone can arrange numbers in rows and
columns on paper. What paper cannot do is notice that you changed one number
and fix the forty totals that depended on it.

### The problem it solves

Imagine a shopkeeper working out a month's profit on paper. She lists twenty
items, multiplies each quantity by its price, adds the column, subtracts costs.
Twenty minutes later she realises the price of rice was wrong.

On paper, that one mistake means re-doing the multiplication, the column total,
the subtraction, and anything she copied the answer into. With a calculator it
is no faster — the calculator has no memory of how the answer was built.

In a spreadsheet she changes the price of rice and everything downstream
updates by itself. This is called **automatic recalculation**, and it is the
single feature that makes spreadsheets worth learning.

### What it is good at

**Calculation.** Formulas do arithmetic on whatever is currently in the cells
they point at, so the working is stored, not just the answer.

**"What-if" analysis.** Because results recalculate instantly, you can ask
questions rather than just record facts. *What if we raised every price by 5%?
What if enrolment fell by 30 students?* Change the input, read the new answer.
Doing this by hand is so slow that most people simply never ask.

**Presenting data.** Numbers can be formatted as currency, percentages or dates,
and turned into charts that show a pattern the raw figures hide.

**Organising data.** Rows can be sorted and filtered, so a list of 500 students
can be put in order of mark, or reduced to just those who failed.

**Repeating work.** Once a formula is written it can be copied down a whole
column in one action, which is why a spreadsheet handles 500 rows about as
easily as five.

### Where you meet them

| Setting | Typical use |
|---|---|
| Business | Invoices, payroll, budgets, stock control |
| School | Mark sheets, averages, attendance registers |
| Home | Household budget, loan repayment planning |
| Science | Recording experiment readings and graphing them |

### What it is *not*

A spreadsheet is not a database. Both hold rows of data, but a database is
built for large volumes of related records, enforces what may be typed into
each field, and lets many people work safely at once. A spreadsheet is built
for **calculation** on a comparatively small set of figures.

The rough rule: if the work is mostly arithmetic and analysis, reach for a
spreadsheet; if it is mostly storing, relating and querying records, reach for
a database.

Nor is it a word processor. You *can* type paragraphs into cells, but you get
none of the tools — styles, footnotes, mail merge — that make long documents
manageable.

### Common examples

Microsoft Excel, Google Sheets, LibreOffice Calc and Apple Numbers. They differ
in detail, but every idea in this topic works in all of them.

## Flashcards

### 5.1 | What is a spreadsheet?
A program that stores data in a grid of rows and columns and **recalculates
results automatically** whenever a value they depend on changes.

> Hint: the grid is the easy part — what does it do that paper cannot?

### 5.1 | Name four purposes of a spreadsheet.
Performing calculations, "what-if" analysis, organising data (sorting and
filtering), and presenting data as formatted figures or charts.

### 5.1 | What is meant by automatic recalculation?
When a value in a cell changes, every formula that depends on that cell updates
immediately, without being told to.

### 5.1 | What is "what-if" analysis?
Changing an input value to see its effect on the results — for example, raising
every price by 5% to see the new profit.

It is practical only because recalculation is automatic.

### 5.1 | Give one reason to use a database instead of a spreadsheet.
Databases handle large volumes of related records, control what may be entered
in each field, and support many users at once. A spreadsheet is built for
calculation, not record management.

### 5.1 | Name three spreadsheet programs.
Microsoft Excel, Google Sheets and LibreOffice Calc. (Apple Numbers also
counts.)

## Questions

### 5.1 | mcq | 1 mark | difficulty 1
Which of the following best describes the main purpose of a spreadsheet?

- A. To store large numbers of related records for many users
- B. To organise data in a grid and perform calculations that update automatically
- C. To produce long documents with headings and footnotes
- D. To design web pages

**Answer:** B

**Working:** The grid plus **automatic recalculation** is what defines a
spreadsheet. Option A describes a database, C a word processor, and D a web
authoring package.

### 5.1 | mcq | 1 mark | difficulty 2
A manager changes the unit cost in one cell of a budget, and twelve totals
elsewhere in the sheet change immediately. This illustrates

- A. replication
- B. filtering
- C. automatic recalculation
- D. formatting

**Answer:** C

**Working:** Formulas that refer to the changed cell recalculate on their own.
Replication is copying a formula to other cells; filtering hides rows that do
not meet a condition; formatting changes appearance only.

### 5.1 | mcq | 1 mark | difficulty 3
A school wants to see how its total wage bill would change if every teacher
received a 7% raise. Doing this in a spreadsheet is an example of

- A. what-if analysis
- B. data validation
- C. charting
- D. sorting

**Answer:** A

**Working:** An input is changed to observe the effect on the results, which is
exactly what-if analysis.

### 5.1 | structured | 6 marks | difficulty 3
Mr Grant records his shop's sales for the month on paper and works out the
totals with a calculator.

(a) State **two** advantages he would gain by using a spreadsheet instead.
**(2 marks)**

(b) Explain what is meant by **automatic recalculation**, and why it matters to
Mr Grant. **(2 marks)**

(c) Mr Grant also wants to store the name, address and telephone number of
every customer, and to look up any customer quickly. Name the type of software
better suited to this, and give **one** reason. **(2 marks)**

**Answer:** (a) Any two, 1 mark each: totals recalculate automatically when a
figure is corrected; formulas can be copied down a column instead of repeating
the arithmetic; data can be sorted or filtered; results can be charted; figures
can be formatted as currency; what-if analysis becomes possible.
(b) 1 mark — when a value changes, every formula depending on it updates by
itself; 1 mark — correcting one wrong price fixes all affected totals without
re-doing the arithmetic.
(c) 1 mark — a database (database management system); 1 mark — it is designed
to store many related records and retrieve them quickly by querying, and it
controls what may be entered in each field.

**Working:** (a) Credit any genuine advantage over paper and a calculator. Note
that "it is faster" on its own is too vague to score — say *why* it is faster.

(b) The examiner is looking for the dependency idea: the spreadsheet remembers
how each answer was built, so it can rebuild it.

(c) A spreadsheet could hold the list, but looking records up, keeping entries
consistent and letting several staff work at once are database strengths.
