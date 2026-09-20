---
subject: MATH
topic: number-theory-computation
lesson: powers-and-operations
title: Powers and the Order of Operations
objectives: ["1.2", "1.3", "1.10"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objectives 1.2, 1.3 and 1.10. Objective 1.2 is still flagged for review (its index condition was lost in extraction), so this lesson covers positive, zero and negative integer indices only; extend it once the printed wording is confirmed. NOT YET checked against textbook for depth.
---

## Lesson

### What a power means

A **power** is repeated multiplication. In $2^5$, the 2 is the **base** and the
5 is the **index** (or exponent):

$$2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32$$

The index counts how many times the base appears, **not** what to multiply by.
$2^5$ is not $2 \times 5$. That slip is the single most common one with
powers.

Negative bases need brackets. $(-3)^2 = (-3) \times (-3) = 9$, but $-3^2$ means
$-(3^2) = -9$. An even power of a negative number is positive; an odd power
stays negative: $(-2)^3 = -8$.

### Powers of zero and negative powers

Look at the pattern as the index goes down by one — each step divides by 2:

| $2^3$ | $2^2$ | $2^1$ | $2^0$ | $2^{-1}$ | $2^{-2}$ |
|---|---|---|---|---|---|
| 8 | 4 | 2 | 1 | $\frac{1}{2}$ | $\frac{1}{4}$ |

The pattern forces two rules:

$$a^0 = 1 \qquad a^{-n} = \frac{1}{a^n}$$

(for any $a \neq 0$). So $5^0 = 1$, and $10^{-3} = \frac{1}{1000} = 0.001$.

A negative index does **not** make the answer negative. It makes it a
reciprocal: $4^{-2} = \frac{1}{16}$, which is positive.

### The laws of indices

When the **bases are the same**:

| Rule | Example |
|---|---|
| $a^m \times a^n = a^{m+n}$ | $3^4 \times 3^2 = 3^6$ |
| $a^m \div a^n = a^{m-n}$ | $5^7 \div 5^3 = 5^4$ |
| $(a^m)^n = a^{mn}$ | $(2^3)^2 = 2^6$ |

You can check any of them by writing the powers out in full. $3^4 \times 3^2$
is four 3s times two 3s, which is six 3s.

These laws only work with the same base. $2^3 \times 5^2$ can't be combined
into one power — work out each part: $8 \times 25 = 200$.

### Order of operations

When an expression mixes operations, the order matters. $2 + 3 \times 4$ is
14, not 20. The agreed order is often remembered as **BODMAS**:

1. **B**rackets
2. **O**rders — powers and roots
3. **D**ivision and **M**ultiplication, working left to right
4. **A**ddition and **S**ubtraction, working left to right

Division and multiplication are **equal** partners, done in the order they
appear from left to right. So are addition and subtraction.
$12 \div 4 \times 3$ is $3 \times 3 = 9$, not $12 \div 12 = 1$.

A worked example:

$$
\begin{aligned}
18 - 2 \times (7 - 4)^2 &= 18 - 2 \times 3^2 &&\text{brackets} \\
&= 18 - 2 \times 9 &&\text{orders} \\
&= 18 - 18 &&\text{multiplication} \\
&= 0 &&\text{subtraction}
\end{aligned}
$$

A fraction bar acts as a bracket around the top and around the bottom:
$\frac{6 + 4}{2}$ means $(6+4) \div 2 = 5$.

### Properties that make computing easier

Some properties of numbers let you rearrange a calculation into an easier one.

**Commutative:** order doesn't matter for $+$ and $\times$.
$a + b = b + a$ and $a \times b = b \times a$.

**Associative:** grouping doesn't matter for $+$ and $\times$.
$(a + b) + c = a + (b + c)$.

**Distributive:** multiplication spreads over addition.
$a(b + c) = ab + ac$.

**Identity:** adding 0 or multiplying by 1 changes nothing.

**Inverse:** $a + (-a) = 0$ and $a \times \frac{1}{a} = 1$.

Subtraction and division are **not** commutative: $7 - 3 \neq 3 - 7$.

These properties turn awkward sums into mental arithmetic:

- $25 \times 17 \times 4 = (25 \times 4) \times 17 = 100 \times 17 = 1700$
- $8 \times 103 = 8 \times 100 + 8 \times 3 = 800 + 24 = 824$
- $36 + 58 + 64 = (36 + 64) + 58 = 158$

## Flashcards

### 1.2 | What does $a^0$ equal (for $a \neq 0$)?
$$a^0 = 1$$

> Hint: continue the pattern $2^2 = 4$, $2^1 = 2$, $2^0 = ?$

### 1.2 | What does a negative index mean?
A reciprocal, not a negative number:
$$a^{-n} = \frac{1}{a^n}$$

For example, $3^{-2} = \frac{1}{9}$.

### 1.2 | State the three laws of indices for the same base.
$a^m \times a^n = a^{m+n}$

$a^m \div a^n = a^{m-n}$

$(a^m)^n = a^{mn}$

### 1.2 | What is the difference between $(-3)^2$ and $-3^2$?
$(-3)^2 = 9$: the whole of $-3$ is squared.

$-3^2 = -9$: only the 3 is squared, then made negative.

### 1.3 | What order are operations carried out in?
**BODMAS:** Brackets, Orders (powers and roots), then Division and
Multiplication left to right, then Addition and Subtraction left to right.

### 1.3 | Evaluate $12 \div 4 \times 3$.
**9.** Division and multiplication have equal priority, so work left to right:
$12 \div 4 = 3$, then $3 \times 3 = 9$.

### 1.10 | What does the distributive property say?
$$a(b + c) = ab + ac$$

For example, $7 \times 102 = 7 \times 100 + 7 \times 2 = 714$.

### 1.10 | Which two operations are commutative?
Addition and multiplication. $a + b = b + a$ and $ab = ba$.

Subtraction and division are not.

## Questions

### 1.2 | numeric | 1 mark | difficulty 1
Evaluate $3^4$.

**Answer:** 81

**Working:** $3^4 = 3 \times 3 \times 3 \times 3 = 9 \times 9 = 81$.

The common wrong answer is 12, from calculating $3 \times 4$.

### 1.2 | mcq | 1 mark | difficulty 2
$2^{-3}$ is equal to

- A. $-8$
- B. $-6$
- C. $\frac{1}{8}$
- D. $\frac{1}{6}$

**Answer:** C

**Working:** $2^{-3} = \frac{1}{2^3} = \frac{1}{8}$.

A negative index gives a reciprocal, so the answer is positive. A and B
both treat it as a negative number, and B and D multiply instead of using a
power.

### 1.2 | numeric | 1 mark | difficulty 3
Evaluate $\dfrac{5^6 \times 5^2}{5^5}$.

**Answer:** 125

**Working:** Same base, so use the laws of indices.

Top: $5^6 \times 5^2 = 5^{6+2} = 5^8$.

Divide: $5^8 \div 5^5 = 5^{8-5} = 5^3 = 125$.

### 1.3 | numeric | 1 mark | difficulty 2
Evaluate $20 - 3 \times (8 - 5)^2$.

**Answer:** -7

**Working:** Brackets: $8 - 5 = 3$. Orders: $3^2 = 9$. Multiplication:
$3 \times 9 = 27$. Subtraction: $20 - 27 = -7$.

Working left to right without BODMAS gives $17 \times 9 = 153$, which is wrong.

### 1.10 | mcq | 1 mark | difficulty 2
Which calculation uses the **distributive** property?

- A. $6 + 9 = 9 + 6$
- B. $4 \times (25 \times 3) = (4 \times 25) \times 3$
- C. $5 \times 98 = 5 \times 100 - 5 \times 2$
- D. $13 + 0 = 13$

**Answer:** C

**Working:** C spreads the multiplication across a subtraction:
$5(100 - 2) = 500 - 10 = 490$.

A is commutative, B is associative and D is the identity property.

### 1.3 | structured | 4 marks | difficulty 3
(a) Evaluate $\dfrac{4^2 + 2^3}{6}$, showing your working. **(2 marks)**

(b) Using a property of numbers, calculate $25 \times 36 \times 4$ without a
calculator. State the property you used. **(2 marks)**

**Answer:** (a) 4 — 1 mark for the numerator 24, 1 mark for the answer.
(b) 3600, commutative (or associative) property — 1 mark for the answer,
1 mark for naming the property.

**Working:** (a) The fraction bar groups the top: $4^2 + 2^3 = 16 + 8 = 24$,
then $24 \div 6 = 4$.

(b) Rearrange so 25 and 4 are together:
$25 \times 4 \times 36 = 100 \times 36 = 3600$. Reordering uses the
commutative property; regrouping uses the associative property. Either
earns the mark.
