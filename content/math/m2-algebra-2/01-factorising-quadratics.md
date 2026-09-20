---
subject: MATH
topic: algebra-2
lesson: factorising-quadratics
title: Factorising Quadratic Expressions
objectives: ["2.1"]
est_minutes: 18
status: draft
source: Original prose written against Module 2 syllabus objective 2.1 ("factorise algebraic expressions"). Builds on Module 1 Algebra 1 lesson 5 and extends to quadratics ax^2 + bx + c with a not equal to 1 and to complete factorisation. NOT YET checked against textbook for depth.
---

## Lesson

Module 1 covered common factors, grouping, the difference of two squares and
$x^2 + bx + c$. This lesson finishes the job: quadratics where the $x^2$ term
has a coefficient other than 1, and expressions that need more than one method.

### Quick review: $x^2 + bx + c$

Find two numbers that **multiply to $c$** and **add to $b$**:

$$x^2 - 3x - 10 = (x - 5)(x + 2) \qquad (-5 \times 2 = -10,\; -5 + 2 = -3)$$

### Quadratics $ax^2 + bx + c$

When $a \neq 1$, the **grouping method** is the most reliable:

1. Multiply $a \times c$.
2. Find two numbers that multiply to $ac$ and add to $b$.
3. Use them to **split the middle term**.
4. Factorise the four terms in pairs.

> Factorise $2x^2 + 7x + 3$.

1. $ac = 2 \times 3 = 6$.
2. Multiply to 6, add to 7: **6 and 1**.
3. $2x^2 + 6x + x + 3$
4. $2x(x + 3) + 1(x + 3) = (x + 3)(2x + 1)$

**Check** by expanding: $2x^2 + x + 6x + 3 = 2x^2 + 7x + 3$. ✓

> Factorise $3x^2 - 10x - 8$.

1. $ac = 3 \times (-8) = -24$.
2. Multiply to $-24$, add to $-10$: **$-12$ and $2$**.
3. $3x^2 - 12x + 2x - 8$
4. $3x(x - 4) + 2(x - 4) = (x - 4)(3x + 2)$

In step 4, the two brackets **must match**. If they don't, recheck the signs in
step 3 — the second pair often needs a negative common factor taken out.

### Factorise completely

Always look for a **common factor first**. It makes everything after it
simpler.

$$2x^2 - 18 = 2(x^2 - 9) = 2(x + 3)(x - 3)$$

$$3x^2 + 6x - 24 = 3(x^2 + 2x - 8) = 3(x + 4)(x - 2)$$

"Factorise completely" means keep going until no bracket can be factorised
further. Leaving $2(x^2 - 9)$ loses a mark.

### Difference of two squares in disguise

$$4x^2 - 25y^2 = (2x + 5y)(2x - 5y)$$

$$x^4 - 16 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)$$

## Flashcards

### 2.1 | What is the first step when factorising $ax^2 + bx + c$ with $a \neq 1$?
Multiply $a \times c$, then find two numbers that multiply to $ac$ and add to $b$.

### 2.1 | Factorise $2x^2 + 5x + 2$.
$(2x + 1)(x + 2)$.

$ac = 4$; the numbers 4 and 1 multiply to 4 and add to 5.

### 2.1 | What does "factorise completely" require you to check first?
A **common factor** — take it out before anything else.

### 2.1 | Factorise completely: $5x^2 - 20$.
$5(x + 2)(x - 2)$.

### 2.1 | When grouping, what must be true of the two brackets?
They must be **identical**, so they can be taken out as a common factor.

## Questions

### 2.1 | mcq | 1 mark | difficulty 2
Factorise $2x^2 + 9x + 4$.

- A. $(2x + 4)(x + 1)$
- B. $(2x + 1)(x + 4)$
- C. $(2x + 2)(x + 2)$
- D. $(x + 1)(x + 4)$

**Answer:** B

**Working:** $ac = 8$. Multiply to 8, add to 9: 8 and 1.
$2x^2 + 8x + x + 4 = 2x(x + 4) + 1(x + 4) = (2x + 1)(x + 4)$.

A expands to $2x^2 + 6x + 4$.

### 2.1 | mcq | 1 mark | difficulty 3
Factorise $3x^2 - 5x - 2$.

- A. $(3x - 1)(x + 2)$
- B. $(3x + 2)(x - 1)$
- C. $(3x + 1)(x - 2)$
- D. $(3x - 2)(x + 1)$

**Answer:** C

**Working:** $ac = -6$. Multiply to $-6$, add to $-5$: $-6$ and $1$.
$3x^2 - 6x + x - 2 = 3x(x - 2) + 1(x - 2) = (3x + 1)(x - 2)$.

Check: $3x^2 - 6x + x - 2 = 3x^2 - 5x - 2$. ✓

### 2.1 | mcq | 1 mark | difficulty 2
Factorise completely: $4x^2 - 36$.

- A. $(2x - 6)(2x + 6)$
- B. $4(x^2 - 9)$
- C. $4(x - 3)(x + 3)$
- D. $(4x - 6)(x + 6)$

**Answer:** C

**Working:** Common factor first: $4(x^2 - 9)$. Then the difference of two
squares: $4(x - 3)(x + 3)$.

A is correct but not complete — each bracket still has a factor of 2. B stops
too early.

### 2.1 | structured | 5 marks | difficulty 3
Factorise completely:

(a) $6x^2 + x - 2$ **(2 marks)**

(b) $2x^3 - 8x$ **(2 marks)**

(c) $9a^2 - 16b^2$ **(1 mark)**

**Answer:** (a) $(3x + 2)(2x - 1)$ (b) $2x(x + 2)(x - 2)$
(c) $(3a + 4b)(3a - 4b)$

**Working:** (a) $ac = -12$; multiply to $-12$, add to 1: $4$ and $-3$.
$6x^2 + 4x - 3x - 2 = 2x(3x + 2) - 1(3x + 2) = (3x + 2)(2x - 1)$.

(b) Common factor $2x$: $2x(x^2 - 4) = 2x(x + 2)(x - 2)$.

(c) $(3a)^2 - (4b)^2$: difference of two squares.
