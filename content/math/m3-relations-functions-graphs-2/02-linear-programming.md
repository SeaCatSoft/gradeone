---
subject: MATH
topic: relations-functions-graphs-2
lesson: linear-programming
title: Linear Programming
objectives: ["2.3"]
est_minutes: 18
status: draft
source: Original prose written against Module 3 syllabus objective 2.3 ("use linear programming techniques to graphically solve problems involving two variables"). NOT YET checked against textbook for depth.
---

## Lesson

**Linear programming** finds the best possible outcome — the biggest profit, the
lowest cost — when choices are limited by **constraints**.

### The method

1. **Define the variables**: let $x$ be the number of…, let $y$ be…
2. **Write the constraints** as inequalities, including the obvious ones
   ($x \geq 0$, $y \geq 0$, since you can't make $-3$ chairs).
3. **Draw** the region satisfying all of them: the **feasible region**.
4. **Write the objective function**: the quantity to maximise or minimise, such
   as $P = 5x + 8y$.
5. **Test the vertices** of the feasible region in the objective function. The
   best value is always at a **vertex**.
6. **Answer in words**, in the context of the question.

### Worked example

> A workshop makes tables ($x$) and chairs ($y$). Each table needs 4 hours of
> work; each chair needs 2 hours. There are at most 40 hours available. Wood
> limits them to at most 12 items in total. The profit is \$60 a table and \$30
> a chair. How many of each should they make?

**Constraints:**

$$4x + 2y \leq 40 \qquad x + y \leq 12 \qquad x \geq 0 \qquad y \geq 0$$

The first simplifies to $2x + y \leq 20$.

**Objective:** maximise $P = 60x + 30y$.

**Vertices** of the feasible region: $(0, 0)$, $(10, 0)$, $(0, 12)$, and where
$2x + y = 20$ crosses $x + y = 12$. Subtracting: $x = 8$, so $y = 4$: the point
$(8, 4)$.

**Test each vertex:**

| Vertex | $P = 60x + 30y$ |
|---|---|
| $(0, 0)$ | 0 |
| $(10, 0)$ | 600 |
| $(8, 4)$ | **600** |
| $(0, 12)$ | 360 |

The maximum profit is **\$600**, from 10 tables and no chairs — or equally from
8 tables and 4 chairs. When two vertices tie, both are valid answers, and it's
worth saying so.

### Why the vertices?

The objective function has the same value all along a straight line (an
**objective line**). Sliding that line across the region, the last point it
touches before leaving is always a **corner**. So only the corners need
checking.

### Common slips

- Forgetting $x \geq 0$ and $y \geq 0$, which opens the region up.
- Reading "at most" as "at least". "At most" is $\leq$; "at least" is $\geq$.
- Giving a fractional answer for things that must be whole. If the best vertex
  has $x = 6.5$ chairs, test the whole-number points inside the region nearby.

## Flashcards

### 2.3 | What is the feasible region?
The region satisfying **all** the constraints at once.

### 2.3 | Where does the maximum or minimum of the objective function occur?
At a **vertex** (corner) of the feasible region.

### 2.3 | What two constraints are usually implied in a real-world problem?
$x \geq 0$ and $y \geq 0$: you can't have a negative number of items.

### 2.3 | How do you write "at most 30 hours" as an inequality?
$\leq 30$.

### 2.3 | What is the objective function?
The expression for the quantity being maximised or minimised, such as profit
or cost.

## Questions

### 2.3 | mcq | 1 mark | difficulty 1
"A shop must stock at least 20 fans" is written as

- A. $f < 20$
- B. $f \leq 20$
- C. $f \geq 20$
- D. $f > 20$

**Answer:** C

**Working:** "At least 20" means 20 or more.

### 2.3 | numeric | 1 mark | difficulty 2
The feasible region has vertices $(0, 0)$, $(6, 0)$, $(4, 5)$ and $(0, 7)$.
Find the maximum value of $P = 3x + 4y$.

**Answer:** 32

**Working:** $(0,0)$: 0. $(6,0)$: 18. $(4,5)$: $12 + 20 = 32$. $(0,7)$: 28.
The maximum is 32.

### 2.3 | mcq | 1 mark | difficulty 2
Why is it enough to test only the vertices of the feasible region?

- A. The other points are not allowed.
- B. The objective function's best value always occurs at a corner.
- C. The vertices are the only whole-number points.
- D. It is a rule with no reason.

**Answer:** B

**Working:** Sliding the objective line across the region, the last point it
touches is a corner.

### 2.3 | structured | 6 marks | difficulty 4
A baker makes loaves ($x$) and cakes ($y$). Each loaf uses 2 cups of flour;
each cake uses 3. There are at most 24 cups of flour. The oven holds at most 10
items in total. The profit is \$4 a loaf and \$6 a cake.

(a) Write down four inequalities. **(2 marks)**

(b) Find the vertices of the feasible region. **(2 marks)**

(c) Find the number of loaves and cakes that maximise the profit, and state
that profit. **(2 marks)**

**Answer:** (a) $2x + 3y \leq 24$, $x + y \leq 10$, $x \geq 0$, $y \geq 0$
(b) $(0, 0)$, $(10, 0)$, $(6, 4)$, $(0, 8)$ (c) 6 loaves and 4 cakes, profit \$48

**Working:** (b) $2x + 3y = 24$ meets $x + y = 10$ where $y = 4$ and $x = 6$.

(c) $(10, 0)$: \$40. $(6, 4)$: $24 + 24 = \$48$. $(0, 8)$: \$48.
Both $(6, 4)$ and $(0, 8)$ give \$48, so either is acceptable if stated clearly
(2 marks).
