---
subject: MATH
topic: algebra-1
lesson: word-problems-identities
title: Word Problems and Identities
objectives: ["5.14", "5.15"]
est_minutes: 18
status: draft
source: Original prose written against syllabus objectives 5.14 (solve worded problems; content note mentions equations versus identities) and 5.15 (prove two algebraic expressions to be identical; still flagged for review, as its extracted text is mixed with a neighbouring column). NOT YET checked against textbook for depth.
---

## Lesson

### Turning words into an equation

Most word problems follow the same four steps:

1. **Choose a letter** for the unknown, and say what it stands for.
2. **Write the other quantities** in terms of that letter.
3. **Form an equation** from the fact the question gives you.
4. **Solve, then answer the question** — in words, with units.

> Three consecutive whole numbers add up to 72. Find them.

1. Let the smallest number be $n$.
2. The others are $n + 1$ and $n + 2$.
3. $n + (n + 1) + (n + 2) = 72$
4. $3n + 3 = 72$, so $3n = 69$ and $n = 23$.

The numbers are **23, 24 and 25**. Check: $23 + 24 + 25 = 72$. ✓

> A father is 4 times as old as his son. In 5 years, he will be 3 times as old
> as his son. How old is the son now?

Let the son be $s$ years old now; the father is $4s$.

In 5 years: the son is $s + 5$, the father $4s + 5$.

$$4s + 5 = 3(s + 5) \quad\Rightarrow\quad 4s + 5 = 3s + 15 \quad\Rightarrow\quad s = 10$$

The son is **10** (and the father 40). Check: in 5 years, 45 is 3 times 15. ✓

A table often helps with problems about ages, money or mixtures: one row per
person or item, one column per time or quantity.

### Equations versus identities

An **equation** is true only for particular values of the unknown.
$2x + 1 = 7$ is true when $x = 3$, and false otherwise.

An **identity** is true for **every** value of the unknown. For example:

$$2(x + 3) \equiv 2x + 6$$

Whatever you put in for $x$, both sides are equal. The symbol $\equiv$ means
"is identically equal to".

If you try to "solve" an identity, the unknown disappears and you're left with
something always true, like $6 = 6$. If you try to solve an equation with **no**
solution, you get something always false, like $6 = 4$.

### Proving an identity

To show two expressions are identical, work on **one side** (usually the more
complicated one) until it becomes the other side exactly. Don't move terms
across the $\equiv$ as you would with an equation.

> Prove that $(x + 3)^2 - (x - 3)^2 \equiv 12x$.

$$
\begin{aligned}
\text{LHS} &= (x^2 + 6x + 9) - (x^2 - 6x + 9) \\
&= x^2 + 6x + 9 - x^2 + 6x - 9 \\
&= 12x \\
&= \text{RHS}
\end{aligned}
$$

End by stating that the left-hand side equals the right-hand side.

Substituting a few numbers can **disprove** an identity (one failure is
enough) but can never **prove** one — you'd have to try every number.

## Flashcards

### 5.14 | What are the four steps for solving a word problem with algebra?
Choose a letter for the unknown; write the other quantities using it; form an
equation; solve and answer in words, with units.

### 5.14 | Write the three consecutive numbers starting at $n$.
$n$, $n + 1$, $n + 2$.

### 5.15 | What is the difference between an equation and an identity?
An **equation** is true only for certain values. An **identity** is true for
**every** value.

### 5.15 | What does the symbol $\equiv$ mean?
"Is identically equal to": true for all values of the variable.

### 5.15 | How do you prove an identity?
Work on one side, step by step, until it is exactly the other side.

### 5.15 | Can checking a few values prove an identity?
No. Examples can disprove an identity, but a proof needs algebra.

## Questions

### 5.14 | numeric | 1 mark | difficulty 2
The sum of three consecutive even numbers is 78. What is the largest of the
three numbers?

**Answer:** 28

**Working:** Let them be $n$, $n + 2$, $n + 4$. Then $3n + 6 = 78$, so $3n = 72$
and $n = 24$. The numbers are 24, 26, 28.

### 5.14 | numeric | 1 mark | difficulty 2
A rectangle's length is 5 cm more than its width. Its perimeter is 46 cm. Find
its width, in cm.

**Answer:** 9

**Working:** Let the width be $w$; the length is $w + 5$.
$2w + 2(w + 5) = 46$, so $4w + 10 = 46$, $4w = 36$ and $w = 9$ cm.

### 5.15 | mcq | 1 mark | difficulty 2
Which of these is an **identity**?

- A. $3x + 2 = 11$
- B. $x^2 = 25$
- C. $4(x - 1) = 4x - 4$
- D. $2x = x + 5$

**Answer:** C

**Working:** Expanding $4(x - 1)$ gives $4x - 4$, so C is true for every $x$.

A, B and D are equations, each true only for particular values ($x = 3$,
$x = \pm 5$, $x = 5$).

### 5.14 | mcq | 1 mark | difficulty 3
Tickets to a show cost \$15 for adults and \$8 for children. A group of 12
people paid \$145. How many adults were in the group?

- A. 5
- B. 7
- C. 8
- D. 9

**Answer:** B

**Working:** Let $a$ be the number of adults; there are $12 - a$ children.

$15a + 8(12 - a) = 145$, so $15a + 96 - 8a = 145$, $7a = 49$ and $a = 7$.

Check: $7 \times 15 + 5 \times 8 = 105 + 40 = 145$. ✓

### 5.15 | structured | 5 marks | difficulty 3
(a) Prove that $(n + 1)^2 - n^2 \equiv 2n + 1$. **(3 marks)**

(b) Hence explain why the difference between two consecutive square numbers
is always odd. **(2 marks)**

**Answer:** (a) See working. (b) $2n + 1$ is always odd.

**Working:** (a) LHS $= n^2 + 2n + 1 - n^2$ (2 marks for correct expansion)
$= 2n + 1 =$ RHS (1 mark).

(b) $n^2$ and $(n + 1)^2$ are consecutive square numbers, and by (a) their
difference is $2n + 1$ (1 mark). $2n$ is always even, so $2n + 1$ is always one
more than an even number — always odd (1 mark).
