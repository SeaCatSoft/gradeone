---
subject: MATH
topic: relations-functions-graphs-1
lesson: inverse-functions
title: Inverse Functions
objectives: ["3.12", "3.13"]
est_minutes: 16
status: draft
source: Original prose written against Module 2 syllabus objectives 3.12 (state the relationship between a function and its inverse) and 3.13 (derive the inverse of a function; still flagged for review). NOT YET checked against textbook for depth.
---

## Lesson

The **inverse** of a function **undoes** it. If $f$ takes 3 to 11, then its
inverse, written $f^{-1}$, takes 11 back to 3.

$$f(3) = 11 \quad\Longleftrightarrow\quad f^{-1}(11) = 3$$

Note that $f^{-1}(x)$ does **not** mean $\frac{1}{f(x)}$. The $-1$ here is a
label, not a power.

### The relationship

Applying a function and then its inverse (in either order) gets you back
where you started:

$$f^{-1}f(x) = x \qquad \text{and} \qquad ff^{-1}(x) = x$$

Graphically, the graph of $f^{-1}$ is the **reflection** of the graph of $f$ in
the line $y = x$.

Only **one-to-one** functions have inverses. A many-to-one function can't be
undone: if $f(2) = 4$ and $f(-2) = 4$, where should $f^{-1}(4)$ go?

### Finding an inverse

1. Write $y = f(x)$.
2. Make $x$ the subject.
3. Swap $x$ and $y$ — or simply write the answer as $f^{-1}(x)$.

> Find the inverse of $f(x) = 3x + 5$.

$$y = 3x + 5 \quad\Rightarrow\quad x = \frac{y - 5}{3}$$

$$f^{-1}(x) = \frac{x - 5}{3}$$

**Check:** $f(2) = 11$ and $f^{-1}(11) = \frac{11 - 5}{3} = 2$. ✓

Notice how the inverse reverses **both the operations and their order**. $f$
multiplies by 3 then adds 5; $f^{-1}$ subtracts 5 then divides by 3 — like
taking off shoes and socks in the opposite order to putting them on.

> Find the inverse of $g(x) = \dfrac{2x - 1}{4}$.

$$y = \frac{2x - 1}{4} \;\Rightarrow\; 4y = 2x - 1 \;\Rightarrow\; x = \frac{4y + 1}{2}$$

$$g^{-1}(x) = \frac{4x + 1}{2}$$

## Flashcards

### 3.12 | What does an inverse function do?
It **undoes** the original function: if $f(a) = b$, then $f^{-1}(b) = a$.

### 3.12 | What is $ff^{-1}(x)$?
$x$. A function and its inverse cancel out.

### 3.12 | Does $f^{-1}(x)$ mean $\frac{1}{f(x)}$?
No. It is the inverse function, not the reciprocal.

### 3.13 | Find the inverse of $f(x) = x - 7$.
$f^{-1}(x) = x + 7$.

### 3.12 | How is the graph of $f^{-1}$ related to the graph of $f$?
It is the reflection of the graph of $f$ in the line $y = x$.

## Questions

### 3.13 | mcq | 1 mark | difficulty 1
The inverse of $f(x) = 4x$ is

- A. $f^{-1}(x) = -4x$
- B. $f^{-1}(x) = \dfrac{x}{4}$
- C. $f^{-1}(x) = \dfrac{4}{x}$
- D. $f^{-1}(x) = x - 4$

**Answer:** B

**Working:** $f$ multiplies by 4, so the inverse divides by 4.

### 3.13 | mcq | 1 mark | difficulty 2
The inverse of $f(x) = 2x - 7$ is

- A. $\dfrac{x + 7}{2}$
- B. $\dfrac{x}{2} + 7$
- C. $2x + 7$
- D. $\dfrac{x - 7}{2}$

**Answer:** A

**Working:** $y = 2x - 7$, so $x = \dfrac{y + 7}{2}$. Undo "subtract 7" first,
then undo "multiply by 2".

B undoes the steps in the wrong order.

### 3.12 | numeric | 1 mark | difficulty 2
$f(x) = 5x + 2$. Find $f^{-1}(17)$.

**Answer:** 3

**Working:** $f^{-1}(x) = \dfrac{x - 2}{5}$, so $f^{-1}(17) = \dfrac{15}{5} = 3$.

Or directly: which input gives 17? $5x + 2 = 17$, so $x = 3$.

### 3.13 | structured | 4 marks | difficulty 3
$h(x) = \dfrac{3x + 4}{2}$.

(a) Find $h^{-1}(x)$. **(2 marks)**

(b) Find $h(2)$ and $h^{-1}(5)$. **(1 mark)**

(c) Verify that $hh^{-1}(x) = x$. **(1 mark)**

**Answer:** (a) $h^{-1}(x) = \dfrac{2x - 4}{3}$ (b) $h(2) = 5$, $h^{-1}(5) = 2$
(c) See working

**Working:** (a) $y = \dfrac{3x + 4}{2}$, so $2y = 3x + 4$ and
$x = \dfrac{2y - 4}{3}$.

(c) $h\left(\dfrac{2x - 4}{3}\right) = \dfrac{3 \cdot \frac{2x - 4}{3} + 4}{2} = \dfrac{2x - 4 + 4}{2} = x$. ✓
