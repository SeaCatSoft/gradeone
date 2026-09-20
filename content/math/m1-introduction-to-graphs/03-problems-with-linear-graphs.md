---
subject: MATH
topic: introduction-to-graphs
lesson: problems-with-linear-graphs
title: Solving Problems with Linear Graphs
objectives: ["6.3"]
est_minutes: 17
status: draft
source: Original prose written against syllabus objective 6.3 ("solve problems involving graphs of linear functions"). Covers real-life linear models, reading values from graphs, and using the meaning of the gradient and intercept. The extracted objective text also contains unrelated teaching suggestions from another column, which were ignored. NOT YET checked against textbook for depth.
---

## Lesson

Straight-line graphs describe lots of everyday situations: anything with a
**fixed amount** plus a **steady rate**.

### Reading a situation as $y = mx + c$

> A plumber charges a call-out fee of \$60, plus \$45 for each hour of work.

If $h$ is the number of hours and $C$ the cost in dollars:

$$C = 45h + 60$$

- The **intercept**, 60, is the fixed charge: what you pay for 0 hours.
- The **gradient**, 45, is the rate: how much the cost rises for each extra
  hour.

That's the pattern to look for. The number that's paid **once** is $c$; the
number paid **per** unit is $m$.

### Reading values from a graph

To use a graph:

- **Given $x$, find $y$:** go up from the $x$ value to the line, then across
  to the $y$-axis.
- **Given $y$, find $x$:** go across from the $y$ value to the line, then down
  to the $x$-axis.

Draw these guide lines faintly on the graph in the exam. They show your method
and earn marks even if your reading is slightly off.

Readings from a graph are only as accurate as the scale allows. If the
answer is between grid lines, estimate sensibly — the mark scheme accepts a
small range.

### Conversion graphs

A conversion graph is a line through the origin. Zero in one unit is zero in
the other, so $c = 0$.

> US\$1 = EC\$2.70

The graph of $E = 2.7U$ lets you convert either way by reading across or down.
Its gradient, 2.7, is the exchange rate.

### Comparing two options

When two plans are drawn on the same axes, the point where the lines **cross**
is where they cost the same. Before it, one line is lower (cheaper); after it,
the other is.

> Plan A: \$20 a month plus \$0.10 per text. Plan B: no monthly fee, \$0.30 per
> text.

- A: $C = 0.1t + 20$
- B: $C = 0.3t$

They're equal when $0.3t = 0.1t + 20$, so $0.2t = 20$ and $t = 100$ texts.

Below 100 texts, B is cheaper. Above 100, A is. Algebra gives the crossing
point exactly; the graph shows the whole picture at a glance.

## Flashcards

### 6.3 | In a cost formula $C = mx + c$, what does $c$ represent?
The **fixed** amount: the cost when $x = 0$, such as a call-out fee.

### 6.3 | In a cost formula $C = mx + c$, what does $m$ represent?
The **rate**: how much the cost goes up for each extra unit.

### 6.3 | How do you read $y$ from a graph for a given $x$?
Go up from $x$ to the line, then across to the $y$-axis.

### 6.3 | What does the crossing point of two cost lines tell you?
Where the two options cost the **same**.

### 6.3 | Why does a conversion graph pass through the origin?
Zero in one unit is zero in the other, so there's no fixed amount: $c = 0$.

## Questions

### 6.3 | numeric | 1 mark | difficulty 1
A taxi fare is given by $F = 2.5d + 6$, where $d$ is the distance in km and $F$
is the fare in dollars. Find the fare for a 12 km journey, in dollars.

**Answer:** 36

**Working:** $F = 2.5(12) + 6 = 30 + 6 = 36$.

### 6.3 | mcq | 1 mark | difficulty 2
An electrician charges a fixed fee plus an hourly rate. A 2-hour job costs
\$130, and a 5-hour job costs \$265. What is the hourly rate?

- A. \$26
- B. \$45
- C. \$53
- D. \$65

**Answer:** B

**Working:** 3 extra hours cost $265 - 130 = \$135$, so one hour costs
$135 \div 3 = \$45$. That's the gradient.

D is \$130 divided by 2, which wrongly assumes there's no fixed fee.

### 6.3 | numeric | 1 mark | difficulty 2
For the electrician in the previous question (\$45 per hour, and a 2-hour job
costing \$130), what is the fixed fee, in dollars?

**Answer:** 40

**Working:** $130 = 45(2) + c$, so $c = 130 - 90 = 40$.

### 6.3 | numeric | 1 mark | difficulty 3
Gym A charges \$50 to join plus \$15 per visit. Gym B charges no joining fee
but \$25 per visit. After how many visits do the two gyms cost the same?

**Answer:** 5

**Working:** $15v + 50 = 25v$, so $50 = 10v$ and $v = 5$ visits.

Check: A costs $75 + 50 = 125$ and B costs $125$. ✓

### 6.3 | structured | 5 marks | difficulty 3
A water tank holds 400 litres. It is drained at a steady 25 litres per minute.
The volume left, $V$ litres, after $t$ minutes is given by $V = 400 - 25t$.

(a) State the gradient of the graph of $V$ against $t$, and explain what it
means. **(2 marks)**

(b) State the $V$-intercept and explain what it means. **(1 mark)**

(c) Find the $t$-intercept, and explain what it means. **(2 marks)**

**Answer:** (a) $-25$: the volume falls by 25 litres every minute. (b) 400: the
tank starts with 400 litres. (c) 16: the tank is empty after 16 minutes.

**Working:** (a) The coefficient of $t$ is $-25$ (1 mark). Negative, because the
volume is going down: 25 litres less each minute (1 mark).

(b) At $t = 0$, $V = 400$: the starting volume.

(c) Put $V = 0$: $400 - 25t = 0$, so $t = 16$ (1 mark). The tank is empty after
16 minutes (1 mark).
