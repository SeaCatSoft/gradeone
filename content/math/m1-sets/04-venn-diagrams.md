---
subject: MATH
topic: sets
lesson: venn-diagrams
title: Venn Diagrams
objectives: ["3.6", "3.7"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objectives 3.6-3.7. Syllabus limits diagrams to no more than 4 sets including the universal set. Diagrams are inline SVG. NOT YET checked against textbook for depth.
---

## Lesson

A Venn diagram turns set relationships into a picture. Once you can read one,
problems that look impossible in words become obvious.

### The conventions

The **universal set** $U$ is a rectangle. Every other set lives inside it, drawn
as a circle. Anything in $U$ that belongs to none of the circles sits in the
rectangle but outside them all.

<svg viewBox="0 0 320 190" role="img" aria-label="Two overlapping circles A and B inside a rectangle labelled U">
  <rect x="5" y="5" width="310" height="180" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="14" y="26" font-size="15" fill="currentColor">U</text>
  <circle cx="125" cy="95" r="68" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="195" cy="95" r="68" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="52" font-size="15" fill="currentColor">A</text>
  <text x="243" y="52" font-size="15" fill="currentColor">B</text>
</svg>

That overlap in the middle is $A \cap B$. Everything inside either circle is
$A \cup B$. The space in the rectangle outside both circles is
$(A \cup B)'$ — in the universe, but in neither set.

The syllabus allows **at most four sets including $U$**, so you will never face
more than three circles.

### The four regions of a two-set diagram

Any two overlapping sets split $U$ into exactly four regions. Naming them is
the whole skill:

| Region | In $A$? | In $B$? | Description |
|---|---|---|---|
| $A \cap B$ | yes | yes | the overlap |
| $A \cap B'$ | yes | no | $A$ only |
| $A' \cap B$ | no | yes | $B$ only |
| $(A \cup B)'$ | no | no | outside both |

"$A$ only" is worth dwelling on. It is **not** $A$ — it is the part of $A$ that
excludes the overlap, written $A \cap B'$. Confusing those two is the single
most common error in this topic.

### Three shapes of relationship

Not every pair of sets overlaps. How you *draw* them says what is true.

**Overlapping** — some but not all members shared. The standard picture above.

**Disjoint** — nothing in common, so $A \cap B = \emptyset$. Draw the circles
apart, not touching:

<svg viewBox="0 0 320 190" role="img" aria-label="Two separate non-touching circles A and B inside rectangle U">
  <rect x="5" y="5" width="310" height="180" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="14" y="26" font-size="15" fill="currentColor">U</text>
  <circle cx="98" cy="98" r="58" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="225" cy="98" r="58" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="92" y="103" font-size="15" fill="currentColor">A</text>
  <text x="219" y="103" font-size="15" fill="currentColor">B</text>
</svg>

**Subset** — every member of $A$ is in $B$, so $A \subseteq B$. Draw $A$
entirely inside $B$:

<svg viewBox="0 0 320 190" role="img" aria-label="Circle A drawn entirely inside larger circle B, both inside rectangle U">
  <rect x="5" y="5" width="310" height="180" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="14" y="26" font-size="15" fill="currentColor">U</text>
  <circle cx="160" cy="95" r="76" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="138" cy="103" r="38" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="133" y="108" font-size="15" fill="currentColor">A</text>
  <text x="215" y="45" font-size="15" fill="currentColor">B</text>
</svg>

Note what the subset picture tells you for free: if $A \subseteq B$ then
$A \cap B = A$ and $A \cup B = B$. Read it off the diagram rather than
memorising it.

### Reading numbers off a diagram

Examiners usually write **how many** are in each region rather than listing
members. Suppose:

<svg viewBox="0 0 320 190" role="img" aria-label="Two overlapping circles with 7 in A only, 5 in the overlap, 9 in B only, and 4 outside both">
  <rect x="5" y="5" width="310" height="180" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="14" y="26" font-size="15" fill="currentColor">U</text>
  <circle cx="125" cy="95" r="68" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <circle cx="195" cy="95" r="68" fill="none" stroke="currentColor" stroke-width="1.5"/>
  <text x="70" y="52" font-size="15" fill="currentColor">A</text>
  <text x="243" y="52" font-size="15" fill="currentColor">B</text>
  <text x="88" y="102" font-size="17" fill="currentColor">7</text>
  <text x="155" y="102" font-size="17" fill="currentColor">5</text>
  <text x="225" y="102" font-size="17" fill="currentColor">9</text>
  <text x="288" y="170" font-size="17" fill="currentColor">4</text>
</svg>

Then read straight off it:

- $n(A \cap B) = 5$ — the overlap
- $n(A) = 7 + 5 = 12$ — **both** of $A$'s regions
- $n(B) = 5 + 9 = 14$
- $n(A \cup B) = 7 + 5 + 9 = 21$
- $n(U) = 7 + 5 + 9 + 4 = 25$

The trap is reading $n(A)$ as 7. The 7 is $A$ *only*; the full set $A$ includes
the overlap too.

And the counting formula falls out of the picture: $n(A) + n(B) = 12 + 14 = 26$,
which is one overlap too many — exactly the 5 we subtract to get 21.

### Three sets

With three circles you get eight regions, including the one outside all three.
The principle is unchanged — work out from the **centre**, because the middle
region $A \cap B \cap C$ is part of every other overlap and must be filled in
first.

## Flashcards

### 3.6 | What shape represents the universal set in a Venn diagram?
A **rectangle**, with every other set drawn as a circle inside it.

Anything in $U$ belonging to no set sits inside the rectangle but outside all
the circles.

### 3.6 | How do you draw two disjoint sets?
As two circles that do not touch or overlap at all, since $A \cap B = \emptyset$.

### 3.6 | How do you draw $A \subseteq B$?
Circle $A$ drawn entirely inside circle $B$.

> Hint: what does that picture tell you $A \cap B$ must equal?

### 3.7 | If $A \subseteq B$, what are $A \cap B$ and $A \cup B$?
$$A \cap B = A \qquad A \cup B = B$$

Read straight off the diagram: $A$ sits wholly inside $B$, so the overlap is
all of $A$ and the union is all of $B$.

### 3.7 | On a Venn diagram, what does the region $A \cap B'$ mean?
"**$A$ only**" — the part of $A$ outside the overlap.

It is **not** the same as $A$, which also includes $A \cap B$.

### 3.7 | A two-set Venn diagram shows 7 in $A$ only and 5 in the overlap. What is $n(A)$?
$$n(A) = 7 + 5 = 12$$

A set is *both* of its regions. Reading $n(A) = 7$ is the classic error.

### 3.6 | How many sets can a CSEC Venn diagram question use?
At most **four including the universal set** — so never more than three
circles.

## Questions

### 3.7 | mcq | 1 mark | difficulty 2
In a Venn diagram, which region represents members of $B$ that are **not** in
$A$?

- A. $A \cap B$
- B. $A \cap B'$
- C. $A' \cap B$
- D. $(A \cup B)'$

**Answer:** C

**Working:** "Not in $A$" means $A'$; "in $B$" means $B$. Together: $A' \cap B$.

Option B is the mirror image — $A$ only — and option D is outside both sets.

### 3.7 | numeric | 1 mark | difficulty 2
A Venn diagram shows 11 in $A$ only, 6 in $A \cap B$, 8 in $B$ only, and 3
outside both sets.

Find $n(B)$.

**Answer:** 14

**Working:** $B$ is made of two regions — $B$ only, and the overlap:

$$n(B) = 8 + 6 = 14$$

Answering 8 uses only the "$B$ only" region and forgets that the overlap is
part of $B$ as well.

### 3.7 | numeric | 1 mark | difficulty 2
Using the same diagram — 11 in $A$ only, 6 in the overlap, 8 in $B$ only, 3
outside — find $n(U)$.

**Answer:** 28

**Working:** The universal set is every region added together, including the
one outside the circles:

$$n(U) = 11 + 6 + 8 + 3 = 28$$

### 3.7 | mcq | 1 mark | difficulty 3
$P$ and $Q$ are drawn as two circles that do not touch. Which statement must be
true?

- A. $P \subseteq Q$
- B. $P \cap Q = \emptyset$
- C. $P \cup Q = U$
- D. $n(P) = n(Q)$

**Answer:** B

**Working:** Circles drawn apart means the sets share no members, which is
exactly $P \cap Q = \emptyset$ — they are disjoint.

Nothing in the picture says the sets are the same size, that either contains
the other, or that together they fill $U$.

### 3.6 | structured | 6 marks | difficulty 3
$U = \{x : x \text{ is a whole number},\ 1 \leq x \leq 10\}$

$A = \{x : x \text{ is a factor of } 10\}$ and $B = \{x : x \text{ is odd}\}$

(a) List the members of $A$ and of $B$. **(2 marks)**

(b) State the members in each of the four regions of a Venn diagram of $A$ and
$B$. **(3 marks)**

(c) State $n(A \cup B)$. **(1 mark)**

**Answer:** (a) $A = \{1,2,5,10\}$, $B = \{1,3,5,7,9\}$ — 1 mark each.
(b) $A \cap B = \{1, 5\}$; $A$ only $= \{2, 10\}$; $B$ only $= \{3,7,9\}$;
outside both $= \{4,6,8\}$ — 3 marks, 1 per region with the fourth following.
(c) 7 — 1 mark.

**Working:** (a) The factors of 10 are 1, 2, 5 and 10. The odd numbers from 1
to 10 are 1, 3, 5, 7, 9.

(b) Take the overlap first: the numbers in both lists are 1 and 5. Remove those
from each set to get the "only" regions — $A$ keeps 2 and 10, $B$ keeps 3, 7
and 9. Whatever is left in $U$ goes outside: 4, 6 and 8.

Check the regions add to $n(U)$: $2 + 2 + 3 + 3 = 10$ ✓

(c) $n(A \cup B) = 2 + 2 + 3 = 7$, or equivalently $4 + 5 - 2 = 7$.
