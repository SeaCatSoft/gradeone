---
subject: MATH
topic: statistics-2
lesson: probability
title: Experimental and Theoretical Probability
objectives: ["1.10"]
est_minutes: 18
status: draft
source: Original prose written against Module 3 syllabus objective 1.10 ("determine experimental and theoretical probabilities of simple events"), still flagged for review. The content notes mention contingency tables, addition for mutually exclusive events and multiplication for independent events. NOT YET checked against textbook for depth.
---

## Lesson

### Theoretical and experimental probability

**Theoretical** probability is worked out from the situation itself, when
outcomes are equally likely:

$$P(A) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$$

**Experimental** probability (relative frequency) comes from actually trying it:

$$P(A) \approx \frac{\text{number of times } A \text{ happened}}{\text{number of trials}}$$

A fair coin has a theoretical $P(\text{head}) = 0.5$. Tossed 100 times it might
give 54 heads, an experimental probability of 0.54. The more trials, the closer
the experimental value usually gets to the theoretical one.

Experimental probability is the only option when outcomes **aren't** equally
likely — a drawing pin, a biased die, whether a bus is late.

### Mutually exclusive events: add

Two events are **mutually exclusive** if they **cannot both happen** at once —
rolling a 2 and rolling a 5 on one die.

$$P(A \text{ or } B) = P(A) + P(B)$$

For one die: $P(2 \text{ or } 5) = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$.

Careful: drawing a red card and drawing a king are **not** mutually exclusive —
the king of hearts is both. Adding would count it twice.

### Independent events: multiply

Two events are **independent** if one happening doesn't change the probability
of the other — two separate coin tosses, or a die and a spinner.

$$P(A \text{ and } B) = P(A) \times P(B)$$

$$P(\text{head and a six}) = \frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$$

Two words to look for: **"or"** usually means **add**; **"and"** usually means
**multiply**.

### Contingency tables

A two-way table makes probabilities easy to read: count the cell, divide by the
relevant total.

| | Plays sport | No sport | Total |
|---|---|---|---|
| **Boys** | 18 | 6 | 24 |
| **Girls** | 15 | 11 | 26 |
| **Total** | 33 | 17 | 50 |

- $P(\text{a girl}) = \frac{26}{50} = 0.52$
- $P(\text{a girl who plays sport}) = \frac{15}{50} = 0.3$
- $P(\text{plays sport, given a boy}) = \frac{18}{24} = 0.75$ — here the total is
  the boys' row, not everyone.

Read which total the question wants: "of the students" uses 50, "of the boys"
uses 24.

### Expected frequency

$$\text{expected number} = P(\text{event}) \times \text{number of trials}$$

If $P(\text{six}) = \frac{1}{6}$, in 300 rolls you'd expect about 50 sixes —
though the actual number will vary.

## Flashcards

### 1.10 | What is experimental probability?
The relative frequency: how often something happened, divided by the number of
trials.

### 1.10 | When do you add probabilities?
For **mutually exclusive** events — "$A$ or $B$" where both cannot happen at
once.

### 1.10 | When do you multiply probabilities?
For **independent** events — "$A$ and $B$" where one doesn't affect the other.

### 1.10 | What does "mutually exclusive" mean?
The two events cannot both happen at the same time.

### 1.10 | How do you find an expected frequency?
Probability × number of trials.

### 1.10 | Why does experimental probability get closer to theoretical probability with more trials?
Random variation evens out as the number of trials grows.

## Questions

### 1.10 | numeric | 1 mark | difficulty 1
A spinner is spun 200 times and lands on red 46 times. What is the experimental
probability of red, as a decimal?

**Answer:** 0.23

**Working:** $\frac{46}{200} = 0.23$.

### 1.10 | mcq | 1 mark | difficulty 2
A fair die is rolled and a fair coin is tossed. What is the probability of a 6
and a tail?

- A. $\frac{1}{12}$
- B. $\frac{2}{3}$
- C. $\frac{7}{12}$
- D. $\frac{1}{3}$

**Answer:** A

**Working:** Independent events, so multiply:
$\frac{1}{6} \times \frac{1}{2} = \frac{1}{12}$.

### 1.10 | numeric | 1 mark | difficulty 2
A bag has 4 red, 5 blue and 11 green counters. Find the probability of drawing
a red **or** a blue counter, as a decimal.

**Answer:** 0.45

**Working:** Mutually exclusive, so add:
$\frac{4}{20} + \frac{5}{20} = \frac{9}{20} = 0.45$.

### 1.10 | numeric | 1 mark | difficulty 3
The probability that a seed germinates is 0.8. A gardener plants 350 seeds. How
many would he expect to germinate?

**Answer:** 280

**Working:** $0.8 \times 350 = 280$.

### 1.10 | structured | 5 marks | difficulty 3
The table shows how 120 students travel to school.

| | Walk | Bus | Total |
|---|---|---|---|
| **Form 4** | 28 | 42 | 70 |
| **Form 5** | 22 | 28 | 50 |
| **Total** | 50 | 70 | 120 |

A student is chosen at random.

(a) Find the probability that the student walks. **(1 mark)**

(b) Find the probability that the student is in Form 5 and takes the bus.
**(1 mark)**

(c) Find the probability that a student chosen from Form 4 walks. **(2 marks)**

(d) Two students are chosen at random from the whole school, with the first
returned before the second is chosen. Find the probability that both walk.
**(1 mark)**

**Answer:** (a) $\frac{50}{120} = \frac{5}{12}$ (b) $\frac{28}{120} = \frac{7}{30}$
(c) $\frac{28}{70} = 0.4$ (d) $\frac{25}{144}$

**Working:** (c) The total is the Form 4 row, 70, not 120 (1 mark for using 70,
1 for the answer).

(d) The choices are independent because the first student is returned:
$\frac{5}{12} \times \frac{5}{12} = \frac{25}{144}$.
