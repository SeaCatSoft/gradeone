---
subject: MATH
topic: algebra-2
lesson: quadratic-equations
title: Solving Quadratic Equations
objectives: ["2.5"]
est_minutes: 20
status: draft
source: Original prose written against Module 2 syllabus objective 2.5 ("solve quadratic equations algebraically"). Covers factorising, completing the square and the quadratic formula. NOT YET checked against textbook for depth.
---

## Lesson

A **quadratic equation** has an $x^2$ term as its highest power:
$ax^2 + bx + c = 0$. It usually has **two** solutions, called **roots**.

There are three algebraic methods. Always rearrange so one side is **zero**
first.

### Method 1: factorising

If two things multiply to give zero, at least one of them must be zero.

$$
\begin{aligned}
x^2 - 5x + 6 &= 0 \\
(x - 2)(x - 3) &= 0 \\
x - 2 = 0 \quad &\text{or} \quad x - 3 = 0 \\
x = 2 \quad &\text{or} \quad x = 3
\end{aligned}
$$

With $a \neq 1$: $2x^2 + x - 6 = 0$ factorises to $(2x - 3)(x + 2) = 0$, so
$x = \frac{3}{2}$ or $x = -2$.

**Never divide by $x$.** In $x^2 = 5x$, dividing by $x$ loses the root $x = 0$.
Instead: $x^2 - 5x = 0$, so $x(x - 5) = 0$, giving $x = 0$ or $x = 5$.

### Method 2: completing the square

Useful when the quadratic won't factorise.

$$
\begin{aligned}
x^2 + 6x - 2 &= 0 \\
(x + 3)^2 - 9 - 2 &= 0 \\
(x + 3)^2 &= 11 \\
x + 3 &= \pm\sqrt{11} \\
x &= -3 \pm \sqrt{11}
\end{aligned}
$$

So $x = 0.317$ or $x = -6.317$ (3 d.p.). Don't forget the $\pm$: a square root
has a positive and a negative value.

### Method 3: the quadratic formula

This works for **every** quadratic $ax^2 + bx + c = 0$:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

> Solve $2x^2 - 3x - 4 = 0$, giving answers to 2 decimal places.

$a = 2$, $b = -3$, $c = -4$.

$$x = \frac{-(-3) \pm \sqrt{(-3)^2 - 4(2)(-4)}}{2(2)} = \frac{3 \pm \sqrt{9 + 32}}{4} = \frac{3 \pm \sqrt{41}}{4}$$

$x = \dfrac{3 + 6.403}{4} = 2.35$ or $x = \dfrac{3 - 6.403}{4} = -0.85$.

Write down $a$, $b$ and $c$ with their **signs** before substituting. The two
favourite errors are $-b$ when $b$ is negative (here $-(-3) = +3$), and
$b^2$ when $b$ is negative ($(-3)^2 = +9$).

### Which method?

- If the question asks for **exact** or **factorised** answers, or the
  numbers look friendly, try **factorising** first.
- "To 2 decimal places" is a strong hint the answer involves a square root:
  use the **formula**.
- "Hence" after completing the square means use that form.

### How many roots?

The part under the square root, $b^2 - 4ac$, decides:

| $b^2 - 4ac$ | Roots |
|---|---|
| positive | two different real roots |
| zero | one repeated root |
| negative | no real roots |

## Flashcards

### 2.5 | What must you do before solving a quadratic by factorising?
Rearrange so one side is **zero**.

### 2.5 | Solve $(x + 4)(x - 7) = 0$.
$x = -4$ or $x = 7$.

### 2.5 | State the quadratic formula.
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### 2.5 | Why should you never divide both sides of $x^2 = 3x$ by $x$?
It loses the root $x = 0$. Factorise instead: $x(x - 3) = 0$.

### 2.5 | What does a negative value of $b^2 - 4ac$ tell you?
The equation has **no real roots**.

## Questions

### 2.5 | mcq | 1 mark | difficulty 1
Solve $x^2 - 7x + 12 = 0$.

- A. $x = 3$ or $x = 4$
- B. $x = -3$ or $x = -4$
- C. $x = 2$ or $x = 6$
- D. $x = 1$ or $x = 12$

**Answer:** A

**Working:** $(x - 3)(x - 4) = 0$, so $x = 3$ or $x = 4$.

B has the signs reversed: those are the roots of $x^2 + 7x + 12 = 0$.

### 2.5 | mcq | 1 mark | difficulty 2
Solve $3x^2 - 12x = 0$.

- A. $x = 4$ only
- B. $x = 0$ or $x = 4$
- C. $x = 0$ or $x = -4$
- D. $x = 2$ or $x = -2$

**Answer:** B

**Working:** $3x(x - 4) = 0$, so $x = 0$ or $x = 4$.

A divides by $x$ and loses the root $x = 0$.

### 2.5 | numeric | 1 mark | difficulty 3
Solve $x^2 + 4x - 1 = 0$. Give the **positive** root correct to 2 decimal places.

**Answer:** 0.24

**Working:** $a = 1$, $b = 4$, $c = -1$.
$x = \dfrac{-4 \pm \sqrt{16 + 4}}{2} = \dfrac{-4 \pm \sqrt{20}}{2}$.

Positive root: $\dfrac{-4 + 4.472}{2} = 0.236 \approx 0.24$.

### 2.5 | numeric | 1 mark | difficulty 3
Solve $3x^2 + 5x - 2 = 0$. What is the **negative** root?

**Answer:** -2

**Working:** $ac = -6$; multiply to $-6$, add to 5: $6$ and $-1$.
$3x^2 + 6x - x - 2 = 3x(x + 2) - 1(x + 2) = (3x - 1)(x + 2) = 0$.

So $x = \frac{1}{3}$ or $x = -2$.

### 2.5 | structured | 5 marks | difficulty 4
(a) Show that the equation $\dfrac{3}{x} = 2x - 5$ can be written as
$2x^2 - 5x - 3 = 0$. **(2 marks)**

(b) Solve $2x^2 - 5x - 3 = 0$ using the quadratic formula. **(3 marks)**

**Answer:** (a) See working (b) $x = 3$ or $x = -\frac{1}{2}$

**Working:** (a) Multiply both sides by $x$: $3 = 2x^2 - 5x$ (1 mark).
Subtract 3: $2x^2 - 5x - 3 = 0$ (1 mark).

(b) $a = 2$, $b = -5$, $c = -3$.
$x = \dfrac{5 \pm \sqrt{25 + 24}}{4} = \dfrac{5 \pm 7}{4}$ (2 marks).
$x = \dfrac{12}{4} = 3$ or $x = \dfrac{-2}{4} = -\dfrac{1}{2}$ (1 mark).

The square root came out exact, which tells you this one would also have
factorised.
