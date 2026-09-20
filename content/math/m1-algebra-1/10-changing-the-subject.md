---
subject: MATH
topic: algebra-1
lesson: changing-the-subject
title: Changing the Subject of a Formula
objectives: ["5.12"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objective 5.12 ("change the subject of formulae"). Covers linear rearrangements, fractions, squares and square roots. NOT YET checked against textbook for depth.
---

## Lesson

A **formula** links quantities, like $v = u + at$. The letter on its own on the
left is the **subject** — here, $v$. Changing the subject means rearranging the
formula so a different letter stands alone.

It's exactly like solving an equation, except the answer is an expression
rather than a number. The same moves apply: do the same thing to both sides,
undoing operations in reverse order.

### A basic example

Make $t$ the subject of $v = u + at$.

$$
\begin{aligned}
v &= u + at \\
v - u &= at &&\text{subtract } u \\
\frac{v - u}{a} &= t &&\text{divide by } a
\end{aligned}
$$

So $t = \dfrac{v - u}{a}$.

A good way to see the order: ask how $t$ was built up. It was multiplied by
$a$, then $u$ was added. Undo those in reverse: subtract $u$, then divide by
$a$.

### Fractions

Multiply both sides to clear the denominator first.

Make $h$ the subject of $A = \dfrac{bh}{2}$:

$$2A = bh \quad\Rightarrow\quad h = \frac{2A}{b}$$

### Squares and square roots

A square is undone by a square root, and a square root by squaring.

Make $r$ the subject of $A = \pi r^2$:

$$\frac{A}{\pi} = r^2 \quad\Rightarrow\quad r = \sqrt{\frac{A}{\pi}}$$

Make $L$ the subject of $T = 2\sqrt{L}$:

$$\frac{T}{2} = \sqrt{L} \quad\Rightarrow\quad L = \left(\frac{T}{2}\right)^2 = \frac{T^2}{4}$$

### When the new subject is subtracted

Make $x$ the subject of $y = 10 - 3x$. It's easiest to move the $x$ term to the
side where it will be **positive**:

$$
\begin{aligned}
y &= 10 - 3x \\
y + 3x &= 10 &&\text{add } 3x \\
3x &= 10 - y &&\text{subtract } y \\
x &= \frac{10 - y}{3}
\end{aligned}
$$

### Using the rearranged formula

Rearranging first and then substituting is often cleaner than substituting
into the original. But either way gives the same number, which makes a good
check.

## Flashcards

### 5.12 | What is the subject of a formula?
The letter standing alone on one side, usually the left. In $P = 2l + 2w$, it
is $P$.

### 5.12 | Make $x$ the subject of $y = mx + c$.
$$x = \frac{y - c}{m}$$

### 5.12 | Make $r$ the subject of $C = 2\pi r$.
$$r = \frac{C}{2\pi}$$

### 5.12 | What undoes a square in a formula?
A square root.

### 5.12 | Make $a$ the subject of $b = \sqrt{a}$.
$a = b^2$. Square both sides.

## Questions

### 5.12 | mcq | 1 mark | difficulty 1
Make $w$ the subject of $P = 2l + 2w$.

- A. $w = P - 2l$
- B. $w = \dfrac{P - 2l}{2}$
- C. $w = \dfrac{P}{2} - 2l$
- D. $w = 2P - 2l$

**Answer:** B

**Working:** Subtract $2l$: $P - 2l = 2w$. Divide by 2: $w = \dfrac{P - 2l}{2}$.

C divides only the $P$ by 2.

### 5.12 | mcq | 1 mark | difficulty 2
Make $u$ the subject of $v^2 = u^2 + 2as$.

- A. $u = v - \sqrt{2as}$
- B. $u = \sqrt{v^2 + 2as}$
- C. $u = \sqrt{v^2 - 2as}$
- D. $u = v^2 - 2as$

**Answer:** C

**Working:** $u^2 = v^2 - 2as$, so $u = \sqrt{v^2 - 2as}$.

A takes square roots term by term, which isn't allowed:
$\sqrt{v^2 - 2as} \neq v - \sqrt{2as}$.

### 5.12 | mcq | 1 mark | difficulty 2
Make $x$ the subject of $y = \dfrac{x + 3}{4}$.

- A. $x = 4y - 3$
- B. $x = 4y + 3$
- C. $x = \dfrac{y - 3}{4}$
- D. $x = 4(y - 3)$

**Answer:** A

**Working:** Multiply by 4: $4y = x + 3$. Subtract 3: $x = 4y - 3$.

### 5.12 | structured | 4 marks | difficulty 3
The formula $F = \dfrac{9C}{5} + 32$ converts a temperature in degrees Celsius,
$C$, to degrees Fahrenheit, $F$.

(a) Make $C$ the subject of the formula. **(2 marks)**

(b) Use your answer to convert $95\,°\text{F}$ to degrees Celsius. **(1 mark)**

(c) Check your answer to (b) using the original formula. **(1 mark)**

**Answer:** (a) $C = \dfrac{5(F - 32)}{9}$ (b) $35\,°\text{C}$
(c) $\dfrac{9(35)}{5} + 32 = 63 + 32 = 95$ ✓

**Working:** (a) $F - 32 = \dfrac{9C}{5}$ (1 mark), so $5(F - 32) = 9C$ and
$C = \dfrac{5(F - 32)}{9}$ (1 mark).

(b) $\dfrac{5(95 - 32)}{9} = \dfrac{5 \times 63}{9} = 35$.
