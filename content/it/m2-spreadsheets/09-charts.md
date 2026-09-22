---
subject: IT
topic: spreadsheets
lesson: charts
title: Charting Operations
objectives: ["5.8"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 5.8 (perform charting operations). Chart types, chart elements and choosing an appropriate chart. NOT YET checked against textbook for depth."
---

## Lesson

A table of forty numbers tells you everything and shows you nothing. A
**chart** turns those numbers into a picture, so a pattern — a rise, a drop, an
outlier — is visible at a glance.

Charts in a spreadsheet are **linked to the data**. Change a figure in the
cells and the chart redraws itself. It is not a picture you paste in; it is
another view of the same data.

### Making one

1. **Select the data**, including the row and column headings. The headings
   become the axis labels and the legend, so leaving them out gives a chart
   labelled `Series1`, `Series2` and nothing useful.
2. **Choose the chart type.**
3. **Add the titles and labels** — the chart title and a label on each axis.
4. **Choose where it goes**: *embedded* in the worksheet beside the data, or on
   a *chart sheet* of its own.

To chart figures from columns that are not side by side, select the first
range, then hold **Ctrl** while selecting the others.

### The chart types

**Column chart** — vertical bars, for comparing separate items. Sales by
branch, marks by subject. The usual default, and rarely a bad choice.

**Bar chart** — the same thing lying on its side. Better when the category
names are long, since a horizontal bar has room for its label.

**Line chart** — points joined up, for showing a **trend over time**. Monthly
temperatures, annual enrolment. The joining line implies the values are
connected in sequence, which is true of months and false of school subjects —
so a line chart of Maths, English and IT marks is wrong even though the program
will happily draw it.

**Pie chart** — a circle divided into slices, showing each item's **share of a
whole**. Each slice is a percentage of the total, and they add to 100%.

Three rules for pie charts. The parts must genuinely make up a whole — a pie of
sales for January, March and July is meaningless, since those are not all the
months. It takes **one** data series only; comparing two years needs two pies
or a column chart. And beyond about six slices it becomes unreadable.

**XY (scatter) chart** — plots pairs of values to show whether two quantities
are **related**: hours studied against marks scored, rainfall against crop
yield. Unlike a line chart, both axes carry numbers, so the points can be
unevenly spaced.

### Choosing correctly

This is the most commonly examined part of the topic. Match the chart to the
question being asked:

| The question | Chart |
|---|---|
| How do these items compare? | Column or bar |
| How has this changed over time? | Line |
| What share of the total is each? | Pie |
| Are these two quantities related? | XY (scatter) |
| Long category names? | Bar (horizontal) |

If a question says *trend*, *over the year* or *month by month*, it wants a
line chart. If it says *proportion*, *share* or *percentage of total*, it wants
a pie.

### The parts of a chart

Marks are given for labelling, so learn the names:

- **Chart title** — what the chart is about. `Sales` is weak; `Sales by Branch,
  January 2026` tells the reader what, where and when.
- **Category axis (x-axis)** — the horizontal axis, carrying the categories:
  branches, months, subjects.
- **Value axis (y-axis)** — the vertical axis, carrying the numbers. It needs a
  title saying what is measured and in what unit, such as `Sales ($)`.
- **Axis titles** — the labels on each axis.
- **Legend (key)** — which colour means which data series. A chart with only
  one series does not need a legend; delete it, because it adds nothing.
- **Data series** — one set of related values, usually one row or column.
- **Data labels** — the actual values printed on the bars or slices. Useful on
  a pie chart, where a slice's exact size is hard to judge.
- **Gridlines** — faint horizontal lines helping the eye read values off the
  value axis.

A chart that scores full marks has a title, both axes labelled, and either a
legend or a single clearly identified series.

### Embedded or on its own sheet

An **embedded chart** sits on the worksheet beside its data — right for a
report where the reader wants to see both.

A **chart sheet** holds the chart alone, filling the page. Right for
presenting or printing the chart by itself, or when the chart is too big to sit
comfortably next to the figures.

Either way the chart stays linked to the data.

### Editing afterwards

Anything can be changed once the chart exists: the type (a column chart becomes
a line chart without re-selecting the data), the colours, the titles, whether
the legend shows, and the range being charted. Extending the range is how you
bring new rows into an existing chart.

### Reading charts honestly

One caution worth carrying. A value axis that does not start at zero
exaggerates differences — bars of 98 and 100 look twice as tall as each other
if the axis starts at 96. The picture is not lying about the numbers, but it
misleads about their importance. Check where the axis starts before believing
a dramatic-looking chart.

## Flashcards

### 5.8 | What happens to a chart when the data it was made from changes?
It redraws automatically. A spreadsheet chart stays linked to its cells.

### 5.8 | Why should headings be included when selecting data for a chart?
They become the axis labels and the legend. Without them the chart is labelled
`Series1`, `Series2` and so on.

### 5.8 | Which chart shows a trend over time?
A **line chart** — points joined in sequence.

### 5.8 | Which chart shows each item's share of a whole?
A **pie chart**. The slices are percentages of the total and add to 100%.

### 5.8 | Why is a pie chart wrong for comparing marks in five subjects?
The subjects are separate items, not parts of one total — a student's Maths
mark is not a share of their overall marks. A column chart compares them
properly.

### 5.8 | How many data series can a pie chart show?
One. Comparing two years needs two pie charts or a single column chart.

### 5.8 | When is a bar chart better than a column chart?
When the category names are long — a horizontal bar leaves room for the label.

### 5.8 | What is an XY (scatter) chart used for?
Showing whether two quantities are related, such as hours studied against marks
scored. Both axes carry numbers.

### 5.8 | What is the legend of a chart?
The key showing which colour represents which data series. A single-series
chart does not need one.

### 5.8 | Name four elements a well-labelled chart should have.
A chart title, a category (x) axis title, a value (y) axis title, and a legend
or other clear identification of the series.

### 5.8 | What is the difference between an embedded chart and a chart sheet?
An embedded chart sits on the worksheet beside its data; a chart sheet holds
the chart alone on its own page. Both stay linked to the data.

### 5.8 | Why can a value axis that does not start at zero be misleading?
Small differences look large. Bars of 98 and 100 appear twice the size of one
another if the axis starts at 96.

## Questions

### 5.8 | mcq | 1 mark | difficulty 1
Which chart type is most suitable for showing how a company's monthly sales
changed over a year?

- A. Pie chart
- B. Line chart
- C. XY scatter chart
- D. Bar chart

**Answer:** B

**Working:** The data is a sequence over time, which is exactly what a line
chart shows. A pie chart would show each month's share of the year's total —
a different question.

### 5.8 | mcq | 1 mark | difficulty 2
A school wants to show what percentage of its budget goes to salaries, books,
utilities and maintenance. The most suitable chart is a

- A. line chart
- B. XY scatter chart
- C. pie chart
- D. column chart showing two series

**Answer:** C

**Working:** The four items make up one whole — the budget — and the question
asks for shares of it. That is a pie chart.

### 5.8 | mcq | 1 mark | difficulty 3
A student produces a chart with no headings selected. The legend reads
`Series1` and `Series2`. To correct this, the student should

- A. delete the legend
- B. change the chart type
- C. re-select the data to include the row and column headings
- D. add data labels

**Answer:** C

**Working:** The legend takes its names from the headings. Deleting it removes
the symptom while leaving the series unidentified.

### 5.8 | mcq | 1 mark | difficulty 3
Which chart would best show whether the number of hours students revised is
related to the marks they scored?

- A. Pie chart
- B. Line chart
- C. XY (scatter) chart
- D. Bar chart

**Answer:** C

**Working:** Two numeric quantities are being compared to see if they are
related, which is what a scatter chart is for. A line chart would wrongly join
the students in sequence.

### 5.8 | mcq | 1 mark | difficulty 2
Which axis of a column chart normally carries the categories being compared?

- A. The vertical axis, called the value axis
- B. The horizontal axis, called the category axis
- C. The legend
- D. The gridlines

**Answer:** B

**Working:** In a column chart the categories run along the horizontal
(category or x) axis, and the numbers are measured up the vertical (value or y)
axis.

### 5.8 | structured | 9 marks | difficulty 3
A farmer records the mass of produce sold, in kilograms, for each of four crops
over six months.

(a) Name the most suitable chart to show how the total mass sold changed from
month to month, and give a reason. **(2 marks)**

(b) Name the most suitable chart to show each crop's share of the year's total
sales, and give a reason. **(2 marks)**

(c) The farmer produces a chart but selects only the numbers, leaving out the
month names and crop names. State **two** effects this has on the chart.
**(2 marks)**

(d) Name **three** elements the farmer should add so that the chart can be
understood without the worksheet. **(3 marks)**

**Answer:** (a) 1 mark — a line chart; 1 mark — it shows a trend over time,
with the months in sequence along the category axis.
(b) 1 mark — a pie chart; 1 mark — the four crops make up one whole, and the
slices show each as a share of the total.
(c) Any two, 1 mark each: the category axis is numbered 1, 2, 3 … instead of
naming the months; the legend reads `Series1`, `Series2` … instead of naming
the crops; the chart cannot be interpreted without referring back to the
worksheet.
(d) Any three, 1 mark each: chart title; category (x) axis title; value (y)
axis title; legend; data labels.

**Working:** (a) The giveaway phrase is "from month to month" — a sequence over
time.

(b) The giveaway word is "share".

(d) Note that the value axis title should give the unit as well as the
quantity, for example `Mass sold (kg)`.
