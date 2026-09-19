---
subject: MATH
topic: algebra-2
lesson: simultaneous-equations
title: Simultaneous Linear Equations
objectives: ["2.3"]
est_minutes: 18
status: draft
source: Original prose written against Module 2 syllabus objective 2.3 ("solve simultaneous linear equations, in two unknowns, algebraically"). Covers elimination and substitution. The graphical method belongs to Relations, Functions and Graphs 1 (objective 3.10). NOT YET checked against textbook for depth.
---

## Lesson

One equation with two unknowns, like $x + y = 10$, has endless solutions:
$(1, 9)$, $(4, 6)$, $(2.5, 7.5)$… A **second** equation pins down the one pair
that satisfies both at the same time — **simultaneously**.

### Method 1: elimination

Add or subtract the equations to **eliminate** one unknown.

$$
\begin{aligned}
3x + 2y &= 16 &&(1) \\
x - 2y &= 0 &&(2)
\end{aligned}
$$

The $y$ terms are $+2y$ and $-2y$. **Adding** cancels them:

$$4x = 16 \quad\Rightarrow\quad x = 4$$

Substitute back into (2): $4 - 2y = 0$, so $y = 2$.

**Check** in (1): $3(4) + 2(2) = 16$. ✓

The rule for choosing: **same signs, subtract; different signs, add.**

### When the coefficients don't match

Multiply one or both equations first to make a pair of coefficients equal.

$$
\begin{aligned}
2x + 3y &= 12 &&(1) \\
5x + 2y &= 19 &&(2)
\end{aligned}
$$

To eliminate $y$, make both $y$ coefficients 6:

$$
\begin{aligned}
4x + 6y &= 24 &&(1) \times 2 \\
15x + 6y &= 57 &&(2) \times 3
\end{aligned}
$$

Same signs, so subtract: $11x = 33$, giving $x = 3$.

Into (1): $6 + 3y = 12$, so $y = 2$.

Multiply **every** term, including the number on the right. Forgetting to
multiply the right-hand side is the most common slip.

### Method 2: substitution

When one equation already gives one letter in terms of the other, substitute
it into the second equation.

$$
\begin{aligned}
y &= 2x - 1 &&(1) \\
3x + 2y &= 19 &&(2)
\end{aligned}
$$

Replace $y$ in (2): $3x + 2(2x - 1) = 19$, so $7x - 2 = 19$ and $x = 3$.

Then $y = 2(3) - 1 = 5$.

### Word problems

> Two pens and three rulers cost \$13. One pen and two rulers cost \$8. Find
> the cost of each.

Let a pen cost $p$ and a ruler $r$ dollars:

$$2p + 3r = 13 \qquad p + 2r = 8$$

Double the second: $2p + 4r = 16$. Subtract the first: $r = 3$. Then
$p = 8 - 6 = 2$.

A pen costs \$2 and a ruler \$3.

## Flashcards

### 2.3 | In elimination, when do you add the equations and when do you subtract?
**Same signs: subtract. Different signs: add.**

### 2.3 | What must you remember when multiplying an equation to match coefficients?
Multiply **every** term, including the right-hand side.

### 2.3 | When is substitution the easier method?
When one equation already gives one unknown in terms of the other, such as
$y = 3x + 1$.

### 2.3 | Solve $x + y = 7$, $x - y = 1$.
$x = 4$, $y = 3$. Adding gives $2x = 8$.

### 2.3 | How do you check a solution to simultaneous equations?
Substitute both values into the equation you **didn't** use to find the
second value.

## Questions

### 2.3 | mcq | 1 mark | difficulty 1
Solve $x + y = 9$ and $x - y = 3$.

- A. $x = 6, y = 3$
- B. $x = 3, y = 6$
- C. $x = 5, y = 4$
- D. $x = 12, y = -3$

**Answer:** A

**Working:** Add: $2x = 12$, so $x = 6$. Then $y = 9 - 6 = 3$.

### 2.3 | numeric | 1 mark | difficulty 2
Solve the simultaneous equations $4x + y = 14$ and $2x + y = 8$. What is the
value of $x$?

**Answer:** 3

**Working:** Same signs on $y$, so subtract: $2x = 6$ and $x = 3$.
(Then $y = 8 - 6 = 2$.)

### 2.3 | numeric | 1 mark | difficulty 3
Solve $3x - 2y = 4$ and $2x + 3y = 7$. What is the value of $y$?

**Answer:** 1

**Working:** Make the $x$ coefficients 6: $6x - 4y = 8$ and $6x + 9y = 21$.
Subtract: $13y = 13$, so $y = 1$. (Then $3x - 2 = 4$ and $x = 2$.)

### 2.3 | structured | 5 marks | difficulty 3
At a school fair, adult tickets cost \$a and child tickets cost \$c. The
Browne family paid \$34 for 2 adult and 3 child tickets. The Singh family paid
\$41 for 3 adult and 2 child tickets.

(a) Write two equations in $a$ and $c$. **(2 marks)**

(b) Solve the equations to find the price of each ticket. **(3 marks)**

**Answer:** (a) $2a + 3c = 34$ and $3a + 2c = 41$ (b) adult \$11, child \$4

**Working:** (a) 1 mark each.

(b) Multiply to match $a$: $6a + 9c = 102$ and $6a + 4c = 82$ (1 mark).
Subtract: $5c = 20$, so $c = 4$ (1 mark). Then $2a + 12 = 34$, so $a = 11$
(1 mark).

Check: $3(11) + 2(4) = 41$. ✓
