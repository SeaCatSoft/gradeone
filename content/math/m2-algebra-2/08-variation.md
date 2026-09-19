---
subject: MATH
topic: algebra-2
lesson: variation
title: Direct and Inverse Variation
objectives: ["2.8", "2.9"]
est_minutes: 17
status: draft
source: Original prose written against Module 2 syllabus objectives 2.8 (represent direct and inverse variation symbolically; still flagged for review) and 2.9 (solve problems involving direct and inverse variation). NOT YET checked against textbook for depth.
---

## Lesson

### Direct variation

Two quantities **vary directly** (are **directly proportional**) when one is
always a fixed multiple of the other. Double one, and the other doubles.

The cost of petrol varies directly as the number of litres. Written with the
symbol $\propto$ ("is proportional to"):

$$C \propto L \quad\Longleftrightarrow\quad C = kL$$

$k$ is the **constant of proportionality** — here, the price per litre.

Direct variation can involve powers too. "$A$ varies directly as the square of
$r$" is $A \propto r^2$, or $A = kr^2$.

### Inverse variation

Two quantities **vary inversely** when one gets **smaller** as the other gets
bigger, so that their product stays fixed. Double one, and the other halves.

The time a journey takes varies inversely as the speed:

$$T \propto \frac{1}{S} \quad\Longleftrightarrow\quad T = \frac{k}{S}$$

"$y$ varies inversely as the square of $x$" is $y = \dfrac{k}{x^2}$.

### Solving variation problems

It's the same three steps every time:

1. **Write the equation** with $k$.
2. **Find $k$** using the pair of values you're given.
3. **Use the equation** (with $k$ now known) to answer the question.

> $y$ varies directly as the square of $x$. When $x = 3$, $y = 36$. Find $y$
> when $x = 5$.

1. $y = kx^2$
2. $36 = k \times 9$, so $k = 4$. The equation is $y = 4x^2$.
3. $y = 4 \times 25 = 100$.

> $P$ is inversely proportional to $V$. When $V = 8$, $P = 15$. Find $P$ when
> $V = 20$.

1. $P = \dfrac{k}{V}$
2. $15 = \dfrac{k}{8}$, so $k = 120$. The equation is $P = \dfrac{120}{V}$.
3. $P = \dfrac{120}{20} = 6$.

Always write out the equation with the value of $k$ before step 3. Many
questions have several parts that reuse it.

### Recognising variation from a table

- Direct: $\dfrac{y}{x}$ is the same for every pair.
- Inverse: $xy$ is the same for every pair.

| $x$ | 2 | 4 | 5 |
|---|---|---|---|
| $y$ | 30 | 15 | 12 |

Here $xy = 60$ every time, so $y = \dfrac{60}{x}$: inverse variation.

## Flashcards

### 2.8 | Write "$y$ varies directly as $x$" as an equation.
$y = kx$.

### 2.8 | Write "$y$ varies inversely as the square of $x$" as an equation.
$$y = \frac{k}{x^2}$$

### 2.9 | What are the three steps in a variation problem?
Write the equation with $k$; find $k$ from the given values; use the equation.

### 2.9 | In inverse variation, what stays constant?
The **product** $xy$.

### 2.9 | $y$ varies directly as $x$, and $y = 12$ when $x = 3$. Find $y$ when $x = 7$.
28. $k = 4$, so $y = 4x = 28$.

## Questions

### 2.9 | numeric | 1 mark | difficulty 1
$y$ varies directly as $x$. When $x = 5$, $y = 35$. Find $y$ when $x = 9$.

**Answer:** 63

**Working:** $y = kx$; $35 = 5k$, so $k = 7$. When $x = 9$, $y = 63$.

### 2.9 | numeric | 1 mark | difficulty 2
$y$ is inversely proportional to $x$. When $x = 6$, $y = 10$. Find $y$ when
$x = 4$.

**Answer:** 15

**Working:** $y = \dfrac{k}{x}$; $10 = \dfrac{k}{6}$, so $k = 60$.
When $x = 4$, $y = \dfrac{60}{4} = 15$.

### 2.8 | mcq | 1 mark | difficulty 2
The time, $t$, needed to build a wall varies inversely as the number of workers,
$n$. Which equation represents this?

- A. $t = kn$
- B. $t = \dfrac{k}{n}$
- C. $t = k + n$
- D. $t = kn^2$

**Answer:** B

**Working:** More workers means less time, and the product $tn$ is fixed:
$t = \dfrac{k}{n}$.

### 2.9 | numeric | 1 mark | difficulty 3
The distance, $d$ metres, a ball falls varies directly as the square of the
time, $t$ seconds. It falls 20 m in 2 s. How far does it fall in 5 s?

**Answer:** 125

**Working:** $d = kt^2$; $20 = 4k$, so $k = 5$ and $d = 5t^2$.
When $t = 5$: $d = 5 \times 25 = 125$ m.

### 2.9 | structured | 5 marks | difficulty 3
The force, $F$ newtons, between two magnets varies inversely as the square of
the distance, $d$ cm, between them. When $d = 2$, $F = 45$.

(a) Find an equation connecting $F$ and $d$. **(2 marks)**

(b) Find $F$ when $d = 3$. **(1 mark)**

(c) Find $d$ when $F = 5$. **(2 marks)**

**Answer:** (a) $F = \dfrac{180}{d^2}$ (b) 20 N (c) 6 cm

**Working:** (a) $F = \dfrac{k}{d^2}$; $45 = \dfrac{k}{4}$, so $k = 180$.

(b) $F = \dfrac{180}{9} = 20$.

(c) $5 = \dfrac{180}{d^2}$, so $d^2 = 36$ (1 mark) and $d = 6$ — the positive
root, since a distance can't be negative (1 mark).
