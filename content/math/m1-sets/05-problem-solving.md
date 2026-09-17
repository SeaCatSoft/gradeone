---
subject: MATH
topic: sets
lesson: problem-solving-with-sets
title: Solving Problems with Sets
objectives: ["3.8"]
est_minutes: 20
status: draft
source: Original prose written against syllabus objective 3.8 ("solve problems in Number Theory, Algebra and Geometry using concepts in set theory"). NOT YET checked against textbook for depth.
---

## Lesson

This is where sets earn their place on the syllabus, and where the marks are.
The questions arrive as paragraphs of English and have to be turned into a
diagram before anything can be solved.

### The method, every time

1. **Name the sets** and write down $n(U)$.
2. **Draw the diagram** — rectangle, circles.
3. **Fill in the overlap first**, then work outwards.
4. **Make the regions add to $n(U)$** and solve.

Step 3 is the one people skip, and skipping it is why the arithmetic goes
wrong. Always start from the middle.

### Worked example — both quantities known

*In a class of 30 students, 18 study French and 14 study Spanish. Every student
studies at least one of the two. How many study both?*

Let $F$ and $S$ be the sets. "At least one" means nobody is outside the
circles, so $n(F \cup S) = 30$.

Use the counting formula:

$$n(F \cup S) = n(F) + n(S) - n(F \cap S)$$
$$30 = 18 + 14 - n(F \cap S)$$
$$30 = 32 - n(F \cap S)$$
$$n(F \cap S) = 2$$

**2 students study both.**

Sanity check by filling the regions: French only $= 18 - 2 = 16$, Spanish only
$= 14 - 2 = 12$, both $= 2$. Total $16 + 12 + 2 = 30$ ✓

### Worked example — some outside the sets

*In a group of 40 people, 25 like cricket, 20 like football and 6 like neither.
How many like both?*

Now the 6 sit outside both circles, so the union is not everything:

$$n(C \cup F) = 40 - 6 = 34$$

Then:

$$34 = 25 + 20 - n(C \cap F)$$
$$n(C \cap F) = 45 - 34 = 11$$

**11 people like both.**

That subtraction of "neither" at the start is the step examiners are testing.
Miss it and every later number is wrong.

### Using algebra when the overlap is unknown

Sometimes it is cleaner to call the overlap $x$ and let the diagram build the
equation for you.

*In a survey of 50 households, 32 own a car and 27 own a bicycle. If 8 own
neither, how many own both?*

Let $x = n(\text{car} \cap \text{bike})$. Then:

- car only $= 32 - x$
- both $= x$
- bike only $= 27 - x$
- neither $= 8$

Everything must add to 50:

$$(32 - x) + x + (27 - x) + 8 = 50$$
$$67 - x = 50$$
$$x = 17$$

**17 households own both.**

Notice how the $x$ terms collapse: $32 - x + x - x$ leaves $32 - x$. If your
$x$ terms don't simplify like that, you have probably written a region as $32$
instead of $32 - x$ — the commonest slip in the whole topic.

### Three sets

Same method, more regions, and the centre matters even more.

*Of 100 students, 52 take Maths, 45 take Physics, 38 take Chemistry, 20 take
Maths and Physics, 15 take Maths and Chemistry, 12 take Physics and Chemistry,
and 5 take all three. How many take none?*

Work **outwards from the centre**:

- All three: $5$
- Maths and Physics only: $20 - 5 = 15$
- Maths and Chemistry only: $15 - 5 = 10$
- Physics and Chemistry only: $12 - 5 = 7$
- Maths only: $52 - 15 - 10 - 5 = 22$
- Physics only: $45 - 15 - 7 - 5 = 18$
- Chemistry only: $38 - 10 - 7 - 5 = 16$

Add the seven regions: $5+15+10+7+22+18+16 = 93$.

**None: $100 - 93 = 7$ students.**

The reason "20 take Maths and Physics" does **not** mean 15 is that it includes
the 5 taking all three. Read those figures as totals for the whole overlap
unless the question says "only".

### Sets in number theory

Objective 3.8 mentions Number Theory, and it usually looks like this: define
sets by a rule, then intersect them.

If $A = \{$multiples of 4 up to 40$\}$ and $B = \{$multiples of 6 up to 40$\}$,
then $A \cap B$ is the multiples of **both** — that is, multiples of the LCM of
4 and 6, which is 12. So $A \cap B = \{12, 24, 36\}$.

That shortcut — intersection of two multiple-sets is the set of multiples of
their LCM — saves a great deal of listing.

## Flashcards

### 3.8 | In a Venn problem, what do you fill in first?
The **centre** — the region belonging to all the sets — then work outwards.

Filling the outer regions first is what makes the arithmetic go wrong.

### 3.8 | A question says 20 take Maths and Physics, and 5 take all three subjects. How many take Maths and Physics *only*?
$$20 - 5 = 15$$

"Maths and Physics" counts the whole overlap, including those taking all three,
unless the question says "only".

### 3.8 | How do you handle people who are in none of the sets?
Subtract them from $n(U)$ before using the union formula, or write them as a
separate region that still counts toward the total.

> Hint: what does $n(A \cup B)$ equal if 6 out of 40 are outside both?

### 3.8 | Set up the region expressions if $n(A) = 32$, $n(B) = 27$ and the overlap is $x$.
- $A$ only: $32 - x$
- Both: $x$
- $B$ only: $27 - x$

If your $x$ terms don't cancel when you add up, you have probably written a
region as $32$ rather than $32 - x$.

### 3.8 | $A$ is the multiples of 4 and $B$ the multiples of 6. What is $A \cap B$?
The multiples of the **LCM** of 4 and 6, which is 12 — so 12, 24, 36, and so on.

### 3.8 | State the formula that solves most two-set word problems.
$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

## Questions

### 3.8 | numeric | 1 mark | difficulty 2
In a class of 35 students, 22 play cricket and 18 play netball. Every student
plays at least one sport.

How many play both?

**Answer:** 5

**Working:** "At least one" means nobody is outside, so $n(C \cup N) = 35$.

$$35 = 22 + 18 - n(C \cap N)$$
$$n(C \cap N) = 40 - 35 = 5$$

### 3.8 | numeric | 2 marks | difficulty 3
Of 60 people surveyed, 34 read the newspaper, 29 listen to the radio, and 11 do
neither.

How many both read the newspaper and listen to the radio?

**Answer:** 14

**Working:** First remove those outside both sets:

$$n(N \cup R) = 60 - 11 = 49$$

Then apply the formula:

$$49 = 34 + 29 - n(N \cap R)$$
$$n(N \cap R) = 63 - 49 = 14$$

Forgetting to subtract the 11 first gives 3, which is the standard wrong answer
here.

### 3.8 | mcq | 1 mark | difficulty 3
In a Venn diagram, 18 students take Art and $x$ take both Art and Music. Which
expression gives the number taking **Art only**?

- A. $18 + x$
- B. $18 - x$
- C. $x - 18$
- D. $18$

**Answer:** B

**Working:** The 18 is the whole of set Art, which is made of two regions — Art
only, and the overlap. So Art only $= 18 - x$.

Option D is the trap: it treats the whole set as though it were the "only"
region.

### 3.8 | numeric | 1 mark | difficulty 3
$A$ is the set of multiples of 6 less than 60, and $B$ is the set of multiples
of 8 less than 60.

Find $n(A \cap B)$.

**Answer:** 2

**Working:** A number in both sets is a multiple of both 6 and 8, so it is a
multiple of their LCM.

$$\text{LCM}(6, 8) = 24$$

The multiples of 24 below 60 are 24 and 48, so $n(A \cap B) = 2$.

### 3.8 | structured | 7 marks | difficulty 4
In a group of 80 students, 45 study Biology, 38 study Chemistry and 12 study
neither subject. Let $x$ be the number who study both.

(a) Draw a Venn diagram to represent this information, writing each region in
terms of $x$ where necessary. **(3 marks)**

(b) Write an equation in $x$ and solve it. **(3 marks)**

(c) Hence state how many students study Biology only. **(1 mark)**

**Answer:** (a) Rectangle $U$ with two overlapping circles $B$ and $C$;
regions $45 - x$, $x$, $38 - x$, and 12 outside — 3 marks.
(b) $(45 - x) + x + (38 - x) + 12 = 80$, giving $95 - x = 80$ and $x = 15$ —
3 marks. (c) $45 - 15 = 30$ — 1 mark, follow through from (b).

**Working:** (a) The overlap is $x$. Since the circle for Biology holds 45
altogether, the Biology-only region must be $45 - x$; similarly Chemistry only
is $38 - x$. The 12 who study neither go outside both circles.

(b) Every student falls in exactly one region, so the four regions total 80:

$$(45 - x) + x + (38 - x) + 12 = 80$$
$$95 - x = 80$$
$$x = 15$$

(c) Biology only $= 45 - x = 45 - 15 = 30$.

Check: $30 + 15 + 23 + 12 = 80$ ✓
