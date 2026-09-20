---
subject: MATH
topic: relations-functions-graphs-1
lesson: composite-functions
title: Composite Functions
objectives: ["3.11"]
est_minutes: 14
status: draft
source: Original prose written against Module 2 syllabus objective 3.11 ("derive the composition of functions"). NOT YET checked against textbook for depth.
---

## Lesson

A **composite function** applies one function, then another to the result.

$fg(x)$ — also written $f(g(x))$ or $f \circ g(x)$ — means:

> Do $g$ **first**, then do $f$ to the answer.

The function **nearest to $x$** acts first. That's the opposite of the order you
read it, which is why it trips people up.

### Evaluating a composite

$f(x) = 2x + 1$ and $g(x) = x^2$. Find $fg(3)$.

- $g(3) = 9$
- $f(9) = 2(9) + 1 = 19$

So $fg(3) = 19$.

And $gf(3)$?

- $f(3) = 7$
- $g(7) = 49$

So $gf(3) = 49$. **$fg$ and $gf$ are usually different.**

### Finding the composite as an expression

Replace the $x$ in the **outer** function with the **whole** inner function.

$$fg(x) = f(x^2) = 2x^2 + 1$$

$$gf(x) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1$$

Put the inner function in brackets when you substitute. $g(2x + 1)$ is
$(2x + 1)^2$, not $2x + 1^2$.

### Working backwards

> $f(x) = 3x - 1$ and $g(x) = x + 4$. Solve $fg(x) = 20$.

$fg(x) = f(x + 4) = 3(x + 4) - 1 = 3x + 11$. Then $3x + 11 = 20$, so $x = 3$.

## Flashcards

### 3.11 | In $fg(x)$, which function is applied first?
$g$ — the one nearest to $x$.

### 3.11 | $f(x) = x + 5$ and $g(x) = 3x$. Find $fg(2)$.
11. $g(2) = 6$, then $f(6) = 11$.

### 3.11 | Is $fg(x)$ the same as $gf(x)$?
Usually not. The order matters.

### 3.11 | $f(x) = x^2$ and $g(x) = x - 1$. Find $fg(x)$.
$(x - 1)^2$. Replace $x$ in $f$ with $g(x)$.

## Questions

### 3.11 | numeric | 1 mark | difficulty 1
$f(x) = 4x$ and $g(x) = x + 3$. Find $fg(2)$.

**Answer:** 20

**Working:** $g(2) = 5$, then $f(5) = 20$.

### 3.11 | numeric | 1 mark | difficulty 2
$f(x) = x^2 + 1$ and $g(x) = 2x - 3$. Find $gf(-2)$.

**Answer:** 7

**Working:** $f$ first: $f(-2) = 4 + 1 = 5$. Then $g(5) = 10 - 3 = 7$.

### 3.11 | mcq | 1 mark | difficulty 2
$f(x) = 3x + 2$ and $g(x) = x - 5$. Which is $fg(x)$?

- A. $3x - 13$
- B. $3x - 3$
- C. $3x^2 - 13x - 10$
- D. $3x + 7$

**Answer:** A

**Working:** $f(x - 5) = 3(x - 5) + 2 = 3x - 15 + 2 = 3x - 13$.

B is $gf(x) = (3x + 2) - 5$. C multiplies the functions.

### 3.11 | structured | 4 marks | difficulty 3
$f(x) = 2x - 1$ and $g(x) = \dfrac{x + 3}{2}$.

(a) Find $fg(x)$ in its simplest form. **(2 marks)**

(b) Find $gf(x)$ in its simplest form. **(1 mark)**

(c) What do your answers suggest about $f$ and $g$? **(1 mark)**

**Answer:** (a) $x + 2$ (b) $x + 1$ (c) $f$ and $g$ are not inverses of each
other, since neither composite gives $x$.

**Working:** (a) $2\left(\dfrac{x + 3}{2}\right) - 1 = x + 3 - 1 = x + 2$.

(b) $\dfrac{(2x - 1) + 3}{2} = \dfrac{2x + 2}{2} = x + 1$.

(c) For inverse functions, $fg(x) = gf(x) = x$ (see the next lesson).
