---
subject: MATH
topic: algebra-1
lesson: algebraic-fractions
title: Algebraic Fractions
objectives: ["5.8"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objective 5.8 ("simplify algebraic fractions"). Covers cancelling, multiplying, dividing, adding and subtracting with numerical and simple algebraic denominators. NOT YET checked against textbook for depth.
---

## Lesson

Algebraic fractions follow exactly the same rules as number fractions. When
you're unsure, try the same step with numbers first.

### Cancelling

You can only cancel **factors** — things that multiply the whole top and the
whole bottom.

$$\frac{6x^2}{9x} = \frac{2x}{3} \qquad \text{(divide top and bottom by } 3x\text{)}$$

When there are sums, **factorise first**, then cancel whole brackets:

$$\frac{4x + 12}{x^2 + 3x} = \frac{4(x + 3)}{x(x + 3)} = \frac{4}{x}$$

The trap: in $\frac{x + 3}{3}$ you **cannot** cancel the 3s. The 3 on top is
added, not multiplied. Test with $x = 6$: $\frac{6 + 3}{3} = 3$, but "cancelling"
gives $x + 1 = 7$. Wrong.

### Multiplying and dividing

**Multiply:** tops times tops, bottoms times bottoms, then cancel.

$$\frac{3a}{4} \times \frac{2}{a^2} = \frac{6a}{4a^2} = \frac{3}{2a}$$

**Divide:** flip the second fraction and multiply.

$$\frac{x}{5} \div \frac{x^2}{10} = \frac{x}{5} \times \frac{10}{x^2} = \frac{10x}{5x^2} = \frac{2}{x}$$

### Adding and subtracting

You need a **common denominator**, just as with $\frac{1}{3} + \frac{1}{4}$.

$$\frac{x}{3} + \frac{x}{4} = \frac{4x}{12} + \frac{3x}{12} = \frac{7x}{12}$$

With brackets on top, keep them until the end — especially when subtracting:

$$\frac{x + 1}{2} - \frac{x - 3}{5} = \frac{5(x + 1) - 2(x - 3)}{10} = \frac{5x + 5 - 2x + 6}{10} = \frac{3x + 11}{10}$$

The minus sign applies to the **whole** second top, so $-2 \times -3 = +6$.
Losing that sign is the most common error in this topic.

Letters in the denominator work the same way:

$$\frac{2}{x} + \frac{3}{y} = \frac{2y}{xy} + \frac{3x}{xy} = \frac{2y + 3x}{xy}$$

## Flashcards

### 5.8 | When can you cancel in an algebraic fraction?
Only when the same **factor** multiplies the whole top and the whole bottom.
Factorise first.

### 5.8 | Simplify $\frac{5x + 10}{5}$.
$x + 2$. Factorise: $\frac{5(x + 2)}{5}$, then cancel the 5.

### 5.8 | Can $\frac{x + 4}{4}$ be simplified to $x + 1$?
No. The 4 on top is added, not multiplied, so it isn't a common factor.

### 5.8 | How do you divide by an algebraic fraction?
Flip it and multiply.

### 5.8 | Simplify $\frac{x}{2} + \frac{x}{5}$.
$\frac{7x}{10}$. Common denominator 10: $\frac{5x}{10} + \frac{2x}{10}$.

## Questions

### 5.8 | mcq | 1 mark | difficulty 1
Simplify $\dfrac{12ab^2}{3b}$.

- A. $4ab$
- B. $4ab^2$
- C. $9ab$
- D. $4a$

**Answer:** A

**Working:** $12 \div 3 = 4$, and $b^2 \div b = b$. So $4ab$.

### 5.8 | mcq | 1 mark | difficulty 2
Express $\dfrac{2x}{3} - \dfrac{x}{4}$ as a single fraction.

- A. $\dfrac{x}{12}$
- B. $\dfrac{x}{-1}$
- C. $\dfrac{5x}{12}$
- D. $\dfrac{11x}{12}$

**Answer:** C

**Working:** $\dfrac{8x}{12} - \dfrac{3x}{12} = \dfrac{5x}{12}$.

B subtracts the tops and the bottoms separately, which is never allowed. D
adds instead of subtracting.

### 5.8 | mcq | 1 mark | difficulty 3
Simplify $\dfrac{x^2 - 9}{x + 3}$.

- A. $x - 3$
- B. $x + 3$
- C. $x^2 - 3$
- D. $-3$

**Answer:** A

**Working:** Factorise the top as a difference of two squares:
$\dfrac{(x + 3)(x - 3)}{x + 3} = x - 3$.

### 5.8 | structured | 4 marks | difficulty 3
Express as a single fraction in its simplest form:

(a) $\dfrac{3}{a} \times \dfrac{a^2}{6}$ **(1 mark)**

(b) $\dfrac{x + 2}{3} - \dfrac{x - 4}{2}$ **(3 marks)**

**Answer:** (a) $\dfrac{a}{2}$ (b) $\dfrac{16 - x}{6}$

**Working:** (a) $\dfrac{3a^2}{6a} = \dfrac{a}{2}$.

(b) Common denominator 6:
$\dfrac{2(x + 2) - 3(x - 4)}{6}$ (1 mark)
$= \dfrac{2x + 4 - 3x + 12}{6}$ (1 mark for $+12$)
$= \dfrac{16 - x}{6}$ (1 mark).
