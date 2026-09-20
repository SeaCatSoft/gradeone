---
subject: MATH
topic: algebra-2
lesson: changing-subject-harder
title: Harder Changes of Subject
objectives: ["2.2"]
est_minutes: 15
status: draft
source: Original prose written against Module 2 syllabus objective 2.2 ("change the subject of formulae"). Extends Module 1 lesson 5.12 to formulae where the new subject appears twice, or in a denominator. NOT YET checked against textbook for depth.
---

## Lesson

Module 1 handled formulae where the new subject appears **once**. Here are the
two harder cases: the subject in a **denominator**, and the subject appearing
**twice**.

### The subject in a denominator

Multiply both sides by the denominator to bring the subject up.

Make $R$ the subject of $I = \dfrac{V}{R}$:

$$IR = V \quad\Rightarrow\quad R = \frac{V}{I}$$

Make $x$ the subject of $y = \dfrac{3}{x - 2}$:

$$
\begin{aligned}
y(x - 2) &= 3 \\
x - 2 &= \frac{3}{y} \\
x &= \frac{3}{y} + 2
\end{aligned}
$$

### The subject appearing twice

When the new subject is in two terms, you can't isolate it directly. The
method:

1. Clear any fractions.
2. Collect **all** terms containing the subject on one side, everything else
   on the other.
3. **Factorise** the subject out.
4. Divide by the bracket.

> Make $x$ the subject of $ax + b = cx + d$.

$$
\begin{aligned}
ax - cx &= d - b &&\text{collect } x \text{ terms} \\
x(a - c) &= d - b &&\text{factorise} \\
x &= \frac{d - b}{a - c} &&\text{divide}
\end{aligned}
$$

> Make $x$ the subject of $y = \dfrac{x + 1}{x - 1}$.

$$
\begin{aligned}
y(x - 1) &= x + 1 \\
xy - y &= x + 1 \\
xy - x &= y + 1 \\
x(y - 1) &= y + 1 \\
x &= \frac{y + 1}{y - 1}
\end{aligned}
$$

The factorising step is the whole trick. Without it, $x$ stays stuck in two
places.

### Checking a rearrangement

Pick numbers, calculate with the original formula, then feed the answer into
your rearranged one. With $x = 3$ in $y = \frac{x + 1}{x - 1}$: $y = \frac{4}{2} = 2$.
Now $\frac{y + 1}{y - 1} = \frac{3}{1} = 3$. ✓ Back to where you started.

## Flashcards

### 2.2 | Make $t$ the subject of $s = \dfrac{d}{t}$.
$t = \dfrac{d}{s}$.

### 2.2 | What is the key step when the new subject appears twice?
Collect the terms containing it on one side, then **factorise** it out.

### 2.2 | Make $x$ the subject of $px - q = rx$.
$x = \dfrac{q}{p - r}$.

$px - rx = q$, so $x(p - r) = q$.

### 2.2 | How can you check a rearranged formula?
Substitute numbers into the original, then put the result into the rearranged
version and see if you get back the number you started with.

## Questions

### 2.2 | mcq | 1 mark | difficulty 2
Make $r$ the subject of $A = \dfrac{k}{r^2}$.

- A. $r = \sqrt{Ak}$
- B. $r = \dfrac{k}{A^2}$
- C. $r = \sqrt{\dfrac{k}{A}}$
- D. $r = \dfrac{\sqrt{k}}{A}$

**Answer:** C

**Working:** $Ar^2 = k$, so $r^2 = \dfrac{k}{A}$ and $r = \sqrt{\dfrac{k}{A}}$.

### 2.2 | mcq | 1 mark | difficulty 3
Make $a$ the subject of $3a + b = ac$.

- A. $a = \dfrac{b}{c - 3}$
- B. $a = \dfrac{b}{3 - c}$
- C. $a = \dfrac{c - b}{3}$
- D. $a = \dfrac{-b}{c + 3}$

**Answer:** A

**Working:** $b = ac - 3a = a(c - 3)$, so $a = \dfrac{b}{c - 3}$.

B has the sign of the denominator the wrong way round: that would need
$-b$ on top.

### 2.2 | mcq | 1 mark | difficulty 3
Make $x$ the subject of $y = \dfrac{2x}{x + 3}$.

- A. $x = \dfrac{3y}{2 - y}$
- B. $x = \dfrac{3y}{y - 2}$
- C. $x = \dfrac{y}{2 - 3y}$
- D. $x = \dfrac{2 - y}{3y}$

**Answer:** A

**Working:** $y(x + 3) = 2x$, so $xy + 3y = 2x$. Then $3y = 2x - xy = x(2 - y)$,
giving $x = \dfrac{3y}{2 - y}$.

### 2.2 | structured | 4 marks | difficulty 3
(a) Make $v$ the subject of $\dfrac{1}{f} = \dfrac{1}{u} + \dfrac{1}{v}$.
**(3 marks)**

(b) Find $v$ when $f = 6$ and $u = 10$. **(1 mark)**

**Answer:** (a) $v = \dfrac{uf}{u - f}$ (b) $15$

**Working:** (a) $\dfrac{1}{v} = \dfrac{1}{f} - \dfrac{1}{u} = \dfrac{u - f}{uf}$
(2 marks), so $v = \dfrac{uf}{u - f}$ (1 mark).

(b) $v = \dfrac{10 \times 6}{10 - 6} = \dfrac{60}{4} = 15$.
