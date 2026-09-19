---
subject: MATH
topic: statistics-1
lesson: probability-sample-space
title: Probability and Sample Spaces
objectives: ["1.10"]
est_minutes: 16
status: draft
source: Original prose written against Module 2 syllabus objective 1.10 ("identify the sample space for simple experiment"), still flagged for review; the content notes mention simple probabilities using coins, dice and playing cards. NOT YET checked against textbook for depth.
---

## Lesson

**Probability** measures how likely something is to happen, on a scale from 0
(impossible) to 1 (certain).

### Outcomes and sample spaces

An **experiment** is anything with an uncertain result: tossing a coin, rolling
a die. Each possible result is an **outcome**, and the set of **all** possible
outcomes is the **sample space**.

| Experiment | Sample space |
|---|---|
| Toss a coin | $\{H, T\}$ |
| Roll a die | $\{1, 2, 3, 4, 5, 6\}$ |
| Toss two coins | $\{HH, HT, TH, TT\}$ |

Note that $HT$ and $TH$ are **different** outcomes when tossing two coins: the
first coin heads and the second tails isn't the same as the other way round.

### Calculating probability

When all outcomes are **equally likely**:

$$P(\text{event}) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$$

Rolling a die, $P(\text{even number}) = \frac{3}{6} = \frac{1}{2}$ (the favourable
outcomes are 2, 4, 6).

Since something either happens or it doesn't:

$$P(\text{not } A) = 1 - P(A)$$

### Two dice: a sample-space table

For two dice, draw a grid. Each cell is one of the 36 equally likely outcomes.
For **the sum** of the two dice:

| $+$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **1** | 2 | 3 | 4 | 5 | 6 | 7 |
| **2** | 3 | 4 | 5 | 6 | 7 | 8 |
| **3** | 4 | 5 | 6 | 7 | 8 | 9 |
| **4** | 5 | 6 | 7 | 8 | 9 | 10 |
| **5** | 6 | 7 | 8 | 9 | 10 | 11 |
| **6** | 7 | 8 | 9 | 10 | 11 | 12 |

$P(\text{sum of } 7) = \frac{6}{36} = \frac{1}{6}$ — seven is the most likely sum.

### Playing cards

A standard pack has **52** cards in 4 suits of 13: hearts and diamonds (red),
clubs and spades (black). Each suit runs Ace, 2–10, Jack, Queen, King.

- $P(\text{a heart}) = \frac{13}{52} = \frac{1}{4}$
- $P(\text{a king}) = \frac{4}{52} = \frac{1}{13}$
- $P(\text{a red card}) = \frac{26}{52} = \frac{1}{2}$

### Experimental probability

When outcomes aren't equally likely, estimate probability from an experiment:

$$\text{relative frequency} = \frac{\text{number of times it happened}}{\text{number of trials}}$$

A drawing pin lands point up 36 times in 60 throws: estimate
$P(\text{point up}) = \frac{36}{60} = 0.6$. More trials give a more reliable
estimate.

## Flashcards

### 1.10 | What is a sample space?
The set of **all** possible outcomes of an experiment.

### 1.10 | Write the sample space for tossing two coins.
$\{HH, HT, TH, TT\}$ — four outcomes.

### 1.10 | State the formula for probability with equally likely outcomes.
$$P = \frac{\text{favourable outcomes}}{\text{total outcomes}}$$

### 1.10 | If $P(A) = 0.3$, what is $P(\text{not } A)$?
$0.7$. $P(\text{not } A) = 1 - P(A)$.

### 1.10 | How many outcomes are there when two dice are rolled?
36 ($6 \times 6$).

### 1.10 | How many cards are in a standard pack, and how many kings?
52 cards, including 4 kings.

## Questions

### 1.10 | mcq | 1 mark | difficulty 1
A fair die is rolled. What is the probability of getting a number greater
than 4?

- A. $\frac{1}{6}$
- B. $\frac{1}{3}$
- C. $\frac{1}{2}$
- D. $\frac{2}{3}$

**Answer:** B

**Working:** Greater than 4: 5 and 6. $P = \frac{2}{6} = \frac{1}{3}$.

### 1.10 | mcq | 1 mark | difficulty 2
Two coins are tossed. What is the probability of getting exactly one head?

- A. $\frac{1}{4}$
- B. $\frac{1}{3}$
- C. $\frac{1}{2}$
- D. $\frac{3}{4}$

**Answer:** C

**Working:** Sample space: $\{HH, HT, TH, TT\}$. Exactly one head: $HT$ and $TH$.
$P = \frac{2}{4} = \frac{1}{2}$.

B wrongly treats "one head" as one of three outcomes (0, 1 or 2 heads), which
aren't equally likely.

### 1.10 | numeric | 1 mark | difficulty 2
A card is drawn from a standard pack of 52. Find the probability that it is a
**black** queen. Give your answer as a decimal to 3 decimal places.

**Answer:** 0.038

**Working:** Black queens: the queens of clubs and spades — 2 cards.
$P = \frac{2}{52} = 0.0384\ldots \approx 0.038$.

### 1.10 | numeric | 1 mark | difficulty 3
Two fair dice are rolled and the scores added. What is the probability that the
sum is 10 or more? Give your answer as a decimal to 3 decimal places.

**Answer:** 0.167

**Working:** From the table: sum 10 in 3 ways, 11 in 2 ways, 12 in 1 way: 6
outcomes. $P = \frac{6}{36} = \frac{1}{6} = 0.1666\ldots \approx 0.167$.

### 1.10 | structured | 4 marks | difficulty 3
A bag contains 5 red, 3 blue and 2 green counters. One counter is taken at
random.

(a) Write down the sample space of colours. **(1 mark)**

(b) Find the probability that the counter is blue. **(1 mark)**

(c) Find the probability that the counter is **not** red. **(1 mark)**

(d) The experiment is repeated 200 times, replacing the counter each time.
About how many times would you expect a green counter? **(1 mark)**

**Answer:** (a) {red, blue, green} (b) $\frac{3}{10}$ (c) $\frac{1}{2}$ (d) 40

**Working:** (b) 3 blue out of 10 counters.

(c) $1 - \frac{5}{10} = \frac{5}{10} = \frac{1}{2}$.

(d) $P(\text{green}) = \frac{2}{10} = 0.2$, and $0.2 \times 200 = 40$.
