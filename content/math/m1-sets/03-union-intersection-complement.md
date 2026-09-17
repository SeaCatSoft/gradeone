---
subject: MATH
topic: sets
lesson: union-intersection-complement
title: Union, Intersection and Complement
objectives: ["3.4", "3.5"]
est_minutes: 18
status: draft
source: Original prose written against syllabus objectives 3.4-3.5. Syllabus limits this to no more than three sets and requires the result n(A∪B) = n(A) + n(B) - n(A∩B). NOT YET checked against textbook for depth.
---

## Lesson

Once you have sets, you need ways to combine them. There are three operations
CXC expects you to know cold.

Throughout, take $U = \{1,2,3,4,5,6,7,8,9,10\}$, $A = \{1,2,3,4,5\}$ and
$B = \{4,5,6,7\}$.

### Union — $A \cup B$

The **union** is everything that is in $A$, or in $B$, or in both:

$$A \cup B = \{1,2,3,4,5,6,7\}$$

Think of the word **or**. Notice 4 and 5 appear once each, not twice — a set
never repeats a member.

### Intersection — $A \cap B$

The **intersection** is everything in $A$ **and** $B$ at the same time:

$$A \cap B = \{4, 5\}$$

Think of the word **and**. Only the overlap survives.

A reliable way to keep the symbols apart: $\cup$ looks like a **c**up, and
**c**up goes with the **u** of **u**nion. $\cap$ is the other one.

### Disjoint sets

If two sets share nothing at all, their intersection is empty:

$$A \cap B = \emptyset$$

Such sets are called **disjoint**. For example $\{1,2\}$ and $\{5,6\}$ are
disjoint. Saying "the intersection is $\emptyset$" and "the sets are disjoint"
are the same statement.

### Complement — $A'$

The **complement** of $A$ is everything in the universal set that is **not** in
$A$:

$$A' = \{6,7,8,9,10\}$$

This is why $U$ matters so much. The complement is meaningless until you know
what universe you are working in — change $U$ and $A'$ changes with it.

Two facts worth carrying:

$$A \cup A' = U \qquad A \cap A' = \emptyset$$

Every element is either in $A$ or outside it, and nothing manages both.

### Putting them together

Operations combine, and **brackets decide the order** — work from the inside
out, exactly as in arithmetic.

Find $(A \cap B)'$:

1. $A \cap B = \{4,5\}$
2. Everything in $U$ except 4 and 5: $(A \cap B)' = \{1,2,3,6,7,8,9,10\}$

Be careful: $(A \cap B)'$ and $A' \cap B'$ are **not** the same set. Compute
the second one and see — $A' = \{6,7,8,9,10\}$, $B' = \{1,2,3,8,9,10\}$, so
$A' \cap B' = \{8,9,10\}$. Quite different.

The syllabus allows questions on up to **three** sets, so expect things like
$A \cap B \cap C$ or $(A \cup B) \cap C$. The method never changes: innermost
bracket first.

### Counting a union

Suppose you know how many are in each set and want the size of the union. The
obvious guess, $n(A) + n(B)$, is wrong — it counts the overlap twice, once from
each set. Subtract it back:

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

Check it on our sets: $n(A) = 5$, $n(B) = 4$, $n(A \cap B) = 2$, so
$n(A \cup B) = 5 + 4 - 2 = 7$. And we listed $A \cup B$ as having 7 members. ✓

This formula is on the syllabus explicitly, and it is the engine behind almost
every Venn diagram word problem you will meet.

### The vocabulary, in one place

| Term | Symbol | Meaning |
|---|---|---|
| Union | $A \cup B$ | in $A$ **or** $B$ (or both) |
| Intersection | $A \cap B$ | in $A$ **and** $B$ |
| Complement | $A'$ | in $U$ but **not** in $A$ |
| Subset | $A \subseteq B$ | every member of $A$ is in $B$ |
| Disjoint | $A \cap B = \emptyset$ | no members in common |
| Equal sets | $A = B$ | exactly the same members |
| Equivalent sets | — | the same *number* of members |

## Flashcards

### 3.4 | What does $A \cup B$ contain?
Everything in $A$, **or** in $B$, or in both. Shared members are listed once.

> Hint: which word goes with the cup-shaped symbol?

### 3.4 | What does $A \cap B$ contain?
Only what is in $A$ **and** $B$ at the same time — the overlap.

### 3.4 | What does $A'$ mean?
The **complement** of $A$: everything in the universal set $U$ that is not in
$A$.

It is meaningless without knowing $U$ — change the universe and $A'$ changes.

### 3.5 | What does it mean for two sets to be disjoint?
They share no members at all, so $A \cap B = \emptyset$.

### 3.4 | Simplify $A \cup A'$ and $A \cap A'$.
$$A \cup A' = U \qquad A \cap A' = \emptyset$$

Everything is either in $A$ or outside it, and nothing is both.

### 3.4 | State the formula for $n(A \cup B)$.
$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

The overlap gets counted once by each set, so subtract it back once.

### 3.5 | Are $(A \cap B)'$ and $A' \cap B'$ the same set?
No. With $U = \{1,\ldots,10\}$, $A = \{1,2,3,4,5\}$, $B=\{4,5,6,7\}$:
$(A \cap B)' = \{1,2,3,6,7,8,9,10\}$ but $A' \cap B' = \{8,9,10\}$.

> Hint: work the brackets from the inside out.

## Questions

### 3.4 | mcq | 1 mark | difficulty 2
$P = \{1, 3, 5, 7\}$ and $Q = \{3, 4, 5\}$. What is $P \cap Q$?

- A. $\{3, 5\}$
- B. $\{1, 4, 7\}$
- C. $\{1, 3, 4, 5, 7\}$
- D. $\emptyset$

**Answer:** A

**Working:** The intersection keeps only what appears in **both** sets. Going
through $Q$: 3 is in $P$ ✓, 4 is not ✗, 5 is in $P$ ✓.

So $P \cap Q = \{3,5\}$. Option C is the union, not the intersection.

### 3.4 | mcq | 1 mark | difficulty 3
$U = \{1,2,3,4,5,6\}$ and $R = \{2,4,6\}$. What is $R'$?

- A. $\{2, 4, 6\}$
- B. $\{1, 3, 5\}$
- C. $\{1,2,3,4,5,6\}$
- D. $\emptyset$

**Answer:** B

**Working:** The complement is everything in $U$ that is **not** in $R$.
Removing 2, 4 and 6 from $U$ leaves $\{1, 3, 5\}$.

### 3.4 | numeric | 1 mark | difficulty 2
$n(A) = 12$, $n(B) = 9$ and $n(A \cap B) = 4$.

Find $n(A \cup B)$.

**Answer:** 17

**Working:** Using $n(A \cup B) = n(A) + n(B) - n(A \cap B)$:

$$n(A \cup B) = 12 + 9 - 4 = 17$$

Adding 12 and 9 alone gives 21, which double-counts the 4 members in both sets.

### 3.4 | numeric | 1 mark | difficulty 3
$n(A) = 15$, $n(B) = 11$ and $n(A \cup B) = 20$.

Find $n(A \cap B)$.

**Answer:** 6

**Working:** Rearrange the formula to make the intersection the subject:

$$n(A \cap B) = n(A) + n(B) - n(A \cup B)$$
$$n(A \cap B) = 15 + 11 - 20 = 6$$

### 3.5 | structured | 6 marks | difficulty 3
$U = \{x : x \text{ is a whole number},\ 1 \leq x \leq 12\}$

$A = \{x : x \text{ is a multiple of } 3\}$ and $B = \{x : x \text{ is even}\}$

(a) List the members of $A$ and of $B$. **(2 marks)**

(b) Find $A \cap B$. **(1 mark)**

(c) Find $A \cup B$. **(1 mark)**

(d) Find $B'$. **(1 mark)**

(e) Verify that $n(A \cup B) = n(A) + n(B) - n(A \cap B)$. **(1 mark)**

**Answer:** (a) $A = \{3,6,9,12\}$, $B = \{2,4,6,8,10,12\}$ — 1 mark each.
(b) $\{6, 12\}$ — 1 mark. (c) $\{2,3,4,6,8,9,10,12\}$ — 1 mark.
(d) $\{1,3,5,7,9,11\}$ — 1 mark. (e) $8 = 4 + 6 - 2$ ✓ — 1 mark.

**Working:** (a) $U$ runs from 1 to 12 inclusive. Multiples of 3 within it are
3, 6, 9, 12; the even numbers are 2, 4, 6, 8, 10, 12.

(b) The numbers in both lists are 6 and 12 — the multiples of 6, which makes
sense.

(c) Everything appearing in either list, each written once.

(d) Everything in $U$ that is not even, which is the odd numbers 1 to 11.

(e) $n(A \cup B) = 8$, and $n(A) + n(B) - n(A \cap B) = 4 + 6 - 2 = 8$. ✓
