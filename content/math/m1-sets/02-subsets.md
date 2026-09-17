---
subject: MATH
topic: sets
lesson: subsets
title: Subsets
objectives: ["3.3"]
est_minutes: 14
status: draft
source: Original prose written against syllabus objective 3.3 and its content note ("Identifying the subsets as well as determining the number of subsets of a set with n elements"). NOT YET checked against textbook for depth.
---

## Lesson

A set $A$ is a **subset** of a set $B$ if *every* member of $A$ is also a
member of $B$. We write:

$$A \subseteq B$$

So if $B = \{1, 2, 3, 4, 5\}$ and $A = \{2, 4\}$, then $A \subseteq B$, because
both 2 and 4 are in $B$.

If even one member of $A$ is missing from $B$, it isn't a subset. $\{2, 7\}$ is
**not** a subset of $B$, because 7 isn't there. We write that $\{2,7\} \nsubseteq B$.

### Two subsets everybody forgets

These two come up constantly and cost marks:

**Every set is a subset of itself.** $B \subseteq B$ — every member of $B$ is
certainly in $B$. It sounds like a trick, but it follows straight from the
definition.

**The empty set is a subset of every set.** $\emptyset \subseteq B$, always.
The reasoning: to *disprove* it you'd have to find a member of $\emptyset$ that
isn't in $B$ — and $\emptyset$ has no members, so you can't. It is true because
there is nothing to make it false.

### Proper subsets

A **proper subset** is a subset that isn't the whole set. We write:

$$A \subset B$$

which means $A \subseteq B$ *and* $A \neq B$.

So for $B = \{1, 2, 3\}$: the set $\{1, 2\}$ is a proper subset, but $\{1,2,3\}$
is a subset without being a proper one.

Watch the symbols. $\subseteq$ allows the set itself; $\subset$ excludes it.
Read the question carefully — "list the subsets" and "list the proper subsets"
have different answers.

### Listing subsets without missing any

Be systematic. Work up by size. For $A = \{1, 2, 3\}$:

| Size | Subsets |
|---|---|
| 0 | $\emptyset$ |
| 1 | $\{1\}$, $\{2\}$, $\{3\}$ |
| 2 | $\{1,2\}$, $\{1,3\}$, $\{2,3\}$ |
| 3 | $\{1,2,3\}$ |

That's 8 altogether. Listing at random is how members go missing.

### How many subsets?

You don't have to list them to count them. Think of building a subset by going
through each element and deciding **in or out** — two choices, made
independently, for each of the $n$ elements:

$$\text{number of subsets} = 2^n$$

For $A = \{1,2,3\}$, that's $2^3 = 8$. ✓

And since exactly one of those 8 is the whole set itself:

$$\text{number of proper subsets} = 2^n - 1$$

So $\{1,2,3\}$ has 7 proper subsets.

A quick sanity check on the formula: the empty set has $n = 0$, giving
$2^0 = 1$ subset — namely $\emptyset$ itself. Which is right.

## Flashcards

### 3.3 | What does $A \subseteq B$ mean?
Every member of $A$ is also a member of $B$ — $A$ is a **subset** of $B$.

> Hint: what would you have to find to prove it false?

### 3.3 | Why is $\emptyset$ a subset of every set?
To disprove it you would need a member of $\emptyset$ that is missing from the
other set. $\emptyset$ has no members, so no such thing can be found.

It is true because there is nothing available to make it false.

### 3.3 | What is the difference between $\subseteq$ and $\subset$?
$A \subseteq B$ allows $A$ to *be* $B$.

$A \subset B$ is a **proper** subset: $A \subseteq B$ **and** $A \neq B$, so
the whole set is excluded.

### 3.3 | How many subsets does a set with $n$ elements have?
$$2^n$$

Each element is independently either in or out — two choices, $n$ times.

### 3.3 | How many *proper* subsets does a set with $n$ elements have?
$$2^n - 1$$

All $2^n$ subsets, minus the set itself.

### 3.3 | List all the subsets of $\{p, q\}$.
$\emptyset$, $\{p\}$, $\{q\}$, $\{p, q\}$ — four of them, which agrees with
$2^2 = 4$.

## Questions

### 3.3 | mcq | 1 mark | difficulty 2
How many subsets does the set $\{a, b, c, d\}$ have?

- A. 8
- B. 15
- C. 16
- D. 24

**Answer:** C

**Working:** The set has $n = 4$ elements, so the number of subsets is
$2^4 = 16$.

Option B is the number of *proper* subsets ($2^4 - 1 = 15$), which is the
answer to a different question — read the wording carefully.

### 3.3 | mcq | 1 mark | difficulty 3
Which of the following is **not** a subset of $\{1, 2, 3\}$?

- A. $\emptyset$
- B. $\{1, 3\}$
- C. $\{1, 2, 3\}$
- D. $\{1, 4\}$

**Answer:** D

**Working:** $\{1, 4\}$ contains 4, which is not a member of $\{1,2,3\}$, so it
fails the definition.

The other three are all genuine subsets: $\emptyset$ is a subset of every set,
and every set is a subset of itself.

### 3.3 | numeric | 1 mark | difficulty 2
A set $T$ has 32 subsets. How many elements does $T$ have?

**Answer:** 5

**Working:** We need $2^n = 32$. Since $2^5 = 32$, $n = 5$.

### 3.3 | numeric | 1 mark | difficulty 3
$P = \{x : x \text{ is a factor of } 6\}$

How many **proper** subsets does $P$ have?

**Answer:** 15

**Working:** First list $P$. The factor pairs of 6 are $1 \times 6$ and
$2 \times 3$, so the factors are 1, 2, 3 and 6, giving $P = \{1, 2, 3, 6\}$ and
$n = 4$.

Number of proper subsets $= 2^4 - 1 = 16 - 1 = 15$.

The common slip here is forgetting that 6 is a factor of itself, which would
give $n = 3$ and the wrong answer of 7.

### 3.3 | structured | 4 marks | difficulty 3
$A = \{2, 4, 6\}$.

(a) List **all** the subsets of $A$ that have exactly two elements. **(2 marks)**

(b) State the total number of subsets of $A$. **(1 mark)**

(c) State how many of those are proper subsets. **(1 mark)**

**Answer:** (a) $\{2,4\}$, $\{2,6\}$, $\{4,6\}$ — 2 marks for all three, 1 mark
for two correct. (b) 8 — 1 mark. (c) 7 — 1 mark, follow through from (b).

**Working:** (a) Work systematically by holding the first element fixed: pairs
starting with 2 give $\{2,4\}$ and $\{2,6\}$; then the remaining pair is
$\{4,6\}$. Three in total.

(b) $n = 3$, so $2^3 = 8$ subsets.

(c) $2^3 - 1 = 7$, excluding $A$ itself.
