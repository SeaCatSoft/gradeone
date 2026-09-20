---
subject: MATH
topic: algebra-2
lesson: worded-problems
title: Word Problems Leading to Quadratics
objectives: ["2.6"]
est_minutes: 17
status: draft
source: Original prose written against Module 2 syllabus objective 2.6 ("solve worded problems"), which is still flagged for review. Focuses on problems that lead to quadratic equations, since linear and simultaneous word problems appear in Module 1 lesson 5.14 and lesson 2.3 here. NOT YET checked against textbook for depth.
---

## Lesson

Many real problems lead to a quadratic equation — anything involving area,
products of two unknown numbers, or a speed and a time that depend on each
other. The steps are the same as for any word problem, with one extra at the
end.

1. Choose a letter for the unknown, and say what it stands for.
2. Write the other quantities in terms of it.
3. Form an equation, and rearrange to $ax^2 + bx + c = 0$.
4. Solve.
5. **Reject any solution that doesn't make sense** — a negative length, a
   fraction of a person — and say why.

### Area problems

> A rectangle is 3 cm longer than it is wide. Its area is 40 cm². Find its
> dimensions.

Let the width be $w$ cm; the length is $w + 3$ cm.

$$
\begin{aligned}
w(w + 3) &= 40 \\
w^2 + 3w - 40 &= 0 \\
(w + 8)(w - 5) &= 0
\end{aligned}
$$

$w = -8$ or $w = 5$. A width can't be negative, so **reject $w = -8$**.

The rectangle is **5 cm wide and 8 cm long**. Check: $5 \times 8 = 40$. ✓

### Number problems

> The product of two consecutive positive integers is 132. Find them.

Let them be $n$ and $n + 1$: $n(n + 1) = 132$, so $n^2 + n - 132 = 0$, which
factorises as $(n + 12)(n - 11) = 0$.

$n = 11$ (reject $-12$, since the integers are positive). The numbers are
**11 and 12**.

### Problems with fractions

> A number plus its reciprocal is $\frac{10}{3}$. Find the number.

$$x + \frac{1}{x} = \frac{10}{3}$$

Multiply every term by $3x$: $3x^2 + 3 = 10x$, so $3x^2 - 10x + 3 = 0$ and
$(3x - 1)(x - 3) = 0$.

$x = 3$ or $x = \frac{1}{3}$. **Both** work here — check: $3 + \frac{1}{3} = \frac{10}{3}$. ✓

So don't reject a root automatically. Reject it only if it breaks a condition
in the question.

## Flashcards

### 2.6 | What is the extra step at the end of a quadratic word problem?
**Reject** any root that doesn't fit the situation, such as a negative length,
and say why.

### 2.6 | A rectangle's length is 2 more than its width $w$, and its area is 24. What equation do you form?
$w(w + 2) = 24$, or $w^2 + 2w - 24 = 0$.

### 2.6 | Two consecutive integers are $n$ and…?
$n + 1$.

### 2.6 | Should you always reject the second root of a quadratic?
No. Keep both unless one breaks a condition in the question.

## Questions

### 2.6 | numeric | 1 mark | difficulty 2
The square of a positive number is 6 more than the number itself. Find the
number.

**Answer:** 3

**Working:** $x^2 = x + 6$, so $x^2 - x - 6 = 0$ and $(x - 3)(x + 2) = 0$.
Since the number is positive, $x = 3$.

### 2.6 | numeric | 1 mark | difficulty 2
A rectangular garden is 4 m longer than it is wide, and has an area of 60 m².
Find its width, in metres.

**Answer:** 6

**Working:** $w(w + 4) = 60$, so $w^2 + 4w - 60 = 0$ and $(w + 10)(w - 6) = 0$.
$w = 6$ (a width can't be $-10$).

### 2.6 | mcq | 1 mark | difficulty 3
The sum of the squares of two consecutive positive even numbers is 100. What is
the smaller number?

- A. 4
- B. 6
- C. 8
- D. 10

**Answer:** B

**Working:** Let them be $n$ and $n + 2$: $n^2 + (n + 2)^2 = 100$.
$2n^2 + 4n + 4 = 100$, so $n^2 + 2n - 48 = 0$ and $(n + 8)(n - 6) = 0$.

$n = 6$ (reject $-8$). Check: $36 + 64 = 100$. ✓

### 2.6 | structured | 6 marks | difficulty 4
A right-angled triangle has sides of $x$ cm, $(x + 7)$ cm and a hypotenuse of
$(x + 8)$ cm.

(a) Use Pythagoras' theorem to show that $x^2 - 2x - 15 = 0$. **(3 marks)**

(b) Solve the equation, and hence find the lengths of the three sides.
**(3 marks)**

**Answer:** (b) $x = 5$; the sides are 5 cm, 12 cm and 13 cm.

**Working:** (a) $x^2 + (x + 7)^2 = (x + 8)^2$ (1 mark).
$x^2 + x^2 + 14x + 49 = x^2 + 16x + 64$ (1 mark).
$x^2 - 2x - 15 = 0$ (1 mark).

(b) $(x - 5)(x + 3) = 0$, so $x = 5$ or $x = -3$ (1 mark). A length can't be
negative, so $x = 5$ (1 mark). The sides are 5, 12 and 13 cm (1 mark).
Check: $25 + 144 = 169$. ✓
