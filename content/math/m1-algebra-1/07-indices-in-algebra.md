---
subject: MATH
topic: algebra-1
lesson: indices-in-algebra
title: Laws of Indices in Algebra
objectives: ["5.9"]
est_minutes: 15
status: draft
source: Original prose written against syllabus objective 5.9 ("use the laws of indices to manipulate expressions with integral indices"). Builds on the numerical treatment in Number Theory lesson 2. NOT YET checked against textbook for depth.
---

## Lesson

The laws of indices work with letters exactly as they do with numbers. With
the **same base**:

| Law | Example |
|---|---|
| $a^m \times a^n = a^{m+n}$ | $x^5 \times x^3 = x^8$ |
| $a^m \div a^n = a^{m-n}$ | $y^7 \div y^2 = y^5$ |
| $(a^m)^n = a^{mn}$ | $(p^4)^3 = p^{12}$ |
| $a^0 = 1$ | $z^0 = 1$ |
| $a^{-n} = \dfrac{1}{a^n}$ | $x^{-3} = \dfrac{1}{x^3}$ |

And one more, for a bracket containing a product:

$$(ab)^n = a^n b^n \qquad \text{e.g. } (2x)^3 = 2^3 x^3 = 8x^3$$

### Terms with coefficients

Deal with the numbers and the letters **separately**. Numbers are multiplied
or divided as normal; the indices of each letter follow the laws.

$$3x^4 \times 5x^2 = (3 \times 5) \times x^{4+2} = 15x^6$$

$$\frac{20a^5b^3}{4a^2b} = \frac{20}{4} \times a^{5-2} \times b^{3-1} = 5a^3b^2$$

The common slip is adding or multiplying the **coefficients** the way you
handle indices: $3x^4 \times 5x^2$ is not $8x^6$ and not $15x^8$.

### Brackets with coefficients

Everything inside the bracket is raised to the power — including the number:

$$(3y^2)^3 = 3^3 \times (y^2)^3 = 27y^6$$

Forgetting to cube the 3 (writing $3y^6$) loses the mark.

### Negative and zero indices

$$\frac{x^3}{x^5} = x^{3-5} = x^{-2} = \frac{1}{x^2}$$

$$\frac{a^4}{a^4} = a^0 = 1$$

When a question asks for the answer with **positive indices**, move any
negative-index factor to the other side of the fraction line.

$4x^{-2}$ means $\dfrac{4}{x^2}$ — the negative index applies only to $x$, not to
the 4.

## Flashcards

### 5.9 | Simplify $x^6 \times x^4$.
$x^{10}$. Same base, multiply: add the indices.

### 5.9 | Simplify $(m^3)^4$.
$m^{12}$. Power of a power: multiply the indices.

### 5.9 | Simplify $(2a^3)^2$.
$4a^6$. Both the 2 and the $a^3$ are squared.

### 5.9 | Simplify $6x^5 \div 2x^2$.
$3x^3$. Divide the numbers; subtract the indices.

### 5.9 | Write $x^{-4}$ with a positive index.
$\dfrac{1}{x^4}$.

## Questions

### 5.9 | mcq | 1 mark | difficulty 1
$a^3 \times a^4 =$

- A. $a^7$
- B. $a^{12}$
- C. $2a^7$
- D. $a^{34}$

**Answer:** A

**Working:** Same base, multiplying: add the indices. $3 + 4 = 7$.

B multiplies the indices, which is the rule for a power of a power.

### 5.9 | mcq | 1 mark | difficulty 2
$4p^3 \times 3p^5 =$

- A. $7p^8$
- B. $12p^8$
- C. $12p^{15}$
- D. $7p^{15}$

**Answer:** B

**Working:** Multiply the coefficients: $4 \times 3 = 12$. Add the indices:
$3 + 5 = 8$. So $12p^8$.

### 5.9 | mcq | 1 mark | difficulty 2
Simplify $(2x^4)^3$.

- A. $2x^{12}$
- B. $6x^{12}$
- C. $8x^{7}$
- D. $8x^{12}$

**Answer:** D

**Working:** $2^3 = 8$ and $(x^4)^3 = x^{12}$.

A forgets to cube the 2. B multiplies 2 by 3 instead of cubing it.

### 5.9 | mcq | 1 mark | difficulty 3
Simplify $\dfrac{15m^2n^4}{5m^5n}$, giving your answer with positive indices.

- A. $\dfrac{3n^3}{m^3}$
- B. $3m^3n^3$
- C. $\dfrac{10n^3}{m^3}$
- D. $3m^{-3}n^4$

**Answer:** A

**Working:** $15 \div 5 = 3$; $m^{2-5} = m^{-3}$; $n^{4-1} = n^3$.
So $3m^{-3}n^3 = \dfrac{3n^3}{m^3}$.

### 5.9 | structured | 4 marks | difficulty 3
Simplify, giving your answers with positive indices:

(a) $x^7 \div x^{-2}$ **(1 mark)**

(b) $\dfrac{(3a^2)^2 \times 2a}{6a^3}$ **(2 marks)**

(c) $(4y^3)^0 + y^{-1} \times y$ **(1 mark)**

**Answer:** (a) $x^9$ (b) $3a^2$ (c) $2$

**Working:** (a) $x^{7-(-2)} = x^9$.

(b) Top: $9a^4 \times 2a = 18a^5$ (1 mark). Then $\dfrac{18a^5}{6a^3} = 3a^2$
(1 mark).

(c) Anything to the power 0 is 1, and $y^{-1} \times y = y^0 = 1$. So $1 + 1 = 2$.
