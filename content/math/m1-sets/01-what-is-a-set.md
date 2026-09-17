---
subject: MATH
topic: sets
lesson: what-is-a-set
title: What Is a Set?
objectives: ["3.1", "3.2"]
est_minutes: 12
status: draft
source: Original prose written against syllabus objectives 3.1-3.2. NOT YET checked against textbook for depth.
---

## Lesson

A **set** is a collection of things that is *well defined* — meaning you can
always say, without arguing about it, whether something belongs to it or not.

"The set of even numbers between 1 and 11" is a set: 2, 4, 6, 8 and 10 are in,
everything else is out, and nobody can dispute it. "The set of good songs" is
not a set, because two people will disagree about what belongs. That word
*well defined* is doing real work, and CXC asks about it.

The things in a set are its **elements** or **members**.

### Writing a set down

There are three ways, and the syllabus expects all three.

**Listing (roster) form** — write the members inside curly brackets:

$$A = \{2, 4, 6, 8, 10\}$$

**Description form** — say in words what the members are:

$$A = \{\text{even numbers between 1 and 11}\}$$

**Set-builder form** — state the rule a member must satisfy:

$$A = \{x : x \text{ is even}, 1 < x < 11\}$$

Read the colon as **"such that"**. So that line says: *A is the set of all x
such that x is even and x lies between 1 and 11.*

Two things trip students up here. Order never matters — $\{2, 4\}$ and
$\{4, 2\}$ are the same set. And repeats count once: $\{2, 2, 4\}$ is just
$\{2, 4\}$.

### Is it in or not?

Use $\in$ for "is a member of" and $\notin$ for "is not a member of":

$$4 \in A \qquad 5 \notin A$$

### Sets you must know by name

The **empty set** has no members at all. Write it $\emptyset$ or $\{\ \}$ —
but never $\{\emptyset\}$, which is a set containing one thing, namely the
empty set. That distinction is a favourite examiner trap.

The **universal set** $U$ is everything under discussion in a particular
problem. It is not "everything in the world" — it changes with the question.
If a question is about students in a school, $U$ is that school's students.

A **finite** set has a countable number of members and an end. An **infinite**
set does not: $\{1, 2, 3, \ldots\}$ runs forever.

### How many members?

The number of elements in a set is its **cardinality**, written $n(A)$.

If $A = \{2, 4, 6, 8, 10\}$ then $n(A) = 5$, and $n(\emptyset) = 0$.

### Equal sets

Two sets are **equal** when they contain exactly the same members — regardless
of order. So $\{a, b, c\} = \{c, a, b\}$.

Be careful not to confuse this with **equivalent** sets, which merely have the
same *number* of members. $\{1, 2, 3\}$ and $\{a, b, c\}$ are equivalent but
not equal.

## Flashcards

### 3.1 | What makes a collection a set?
It must be **well defined** — you can always tell whether any given thing is a
member or not, with no room for opinion.

> Hint: why is "the set of tall students" not a set?

### 3.1 | What is the difference between $\emptyset$ and $\{\emptyset\}$?
$\emptyset$ is the empty set and has **no** members, so $n(\emptyset) = 0$.

$\{\emptyset\}$ is a set containing **one** member — the empty set itself — so
$n(\{\emptyset\}) = 1$.

### 3.1 | What does the universal set $U$ mean?
Everything under discussion **in that particular problem** — not everything
that exists. It changes from question to question.

> Hint: in a question about a school, what would U be?

### 3.1 | What is the difference between equal sets and equivalent sets?
**Equal** sets have exactly the same members: $\{a, b\} = \{b, a\}$.

**Equivalent** sets only have the same *number* of members: $\{1, 2\}$ and
$\{a, b\}$ are equivalent but not equal.

### 3.2 | How do you read the colon in $\{x : x > 3\}$?
As **"such that"**. The whole thing reads: the set of all $x$ such that $x$ is
greater than 3.

### 3.2 | Write $\{3, 6, 9, 12\}$ in set-builder form.
$$\{x : x \text{ is a multiple of } 3,\ 0 < x < 15\}$$

Other correct rules are possible, as long as they produce exactly these four
members and no others.

### 3.2 | Does $\{1, 2, 2, 3\}$ have four members?
No — three. A repeated element is only counted once, so the set is $\{1, 2, 3\}$
and $n = 3$.

## Questions

### 3.1 | mcq | 1 mark | difficulty 2
Which of the following collections is **not** a well-defined set?

- A. The set of prime numbers less than 20
- B. The set of interesting books in the library
- C. The set of letters in the word MATHEMATICS
- D. The set of factors of 12

**Answer:** B

**Working:** A set must be well defined — there must be no dispute about what
belongs. "Interesting" is a matter of opinion, so two people would produce
different collections. The other three each have a rule anyone can apply and
get the same answer.

### 3.1 | mcq | 1 mark | difficulty 3
If $P = \{\emptyset\}$, what is $n(P)$?

- A. 0
- B. 1
- C. 2
- D. Undefined

**Answer:** B

**Working:** $P$ is a set containing one thing — the empty set. So $n(P) = 1$.

Compare this with $n(\emptyset) = 0$, where the set itself is empty. The outer
brackets in $\{\emptyset\}$ are what make the difference.

### 3.2 | numeric | 1 mark | difficulty 2
$M = \{x : x \text{ is a letter in the word } \textbf{SUCCESS}\}$

State $n(M)$.

**Answer:** 4

**Working:** The letters of SUCCESS are S, U, C, C, E, S, S. Listing the set
without repeats gives $M = \{S, U, C, E\}$, so $n(M) = 4$.

Repeated elements are counted once — this is the whole point of the question.

### 3.2 | mcq | 1 mark | difficulty 2
Which set is equal to $\{x : x \text{ is an odd number},\ 2 < x < 10\}$?

- A. $\{3, 5, 7\}$
- B. $\{3, 5, 7, 9\}$
- C. $\{1, 3, 5, 7, 9\}$
- D. $\{5, 7, 9\}$

**Answer:** B

**Working:** The condition $2 < x < 10$ is strict at both ends, so $x$ runs
from 3 to 9. The odd numbers in that range are 3, 5, 7 and 9.

Option A drops 9; option C wrongly includes 1, which is not greater than 2.

### 3.1 | structured | 4 marks | difficulty 3
$U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$ and $A = \{x : x \text{ is a factor of } 10\}$.

(a) List the members of $A$. **(2 marks)**

(b) State $n(A)$. **(1 mark)**

(c) Write down one member of $U$ that is **not** a member of $A$. **(1 mark)**

**Answer:** (a) $A = \{1, 2, 5, 10\}$ — 2 marks, or 1 mark if one member is
missing or one extra is included. (b) $n(A) = 4$ — 1 mark, follow through from
(a). (c) Any one of 3, 4, 6, 7, 8, 9 — 1 mark.

**Working:** A factor of 10 divides into 10 exactly. Testing each member of
$U$: 1 ✓, 2 ✓, 5 ✓, 10 ✓; the rest leave a remainder. Note that 10 is a factor
of itself, which candidates often forget, and that 1 is a factor of every
number.
