---
subject: MATH
topic: statistics-2
lesson: inference
title: Making Inferences from Statistics
objectives: ["1.11"]
est_minutes: 15
status: draft
source: Original prose written against Module 3 syllabus objective 1.11 ("make inference(s) from statistics"). The content notes mention raw data, tables, diagrams and summary statistics. NOT YET checked against textbook for depth.
---

## Lesson

An **inference** is a conclusion drawn from data. The whole of statistics leads
here: collecting and summarising data is only worth doing if it supports a
decision.

### What a good inference looks like

- It **quotes the figures** it rests on.
- It stays **within what the data shows**.
- It says how **reliable** it is: sample size, how the sample was chosen.
- It is written in the **context** of the question, not in symbols.

> A random sample of 60 of a factory's bulbs has a mean life of 1 150 hours,
> with a small standard deviation.

A sound inference: "The factory's bulbs last about 1 150 hours on average, and
the small standard deviation suggests the lifetimes are consistent. As this is
a random sample of 60, the estimate should be reasonably reliable."

### Inferences from diagrams and summaries

| Evidence | Inference it supports |
|---|---|
| A higher median | that group is higher **on average** |
| A smaller IQR or standard deviation | that group is more **consistent** |
| A cumulative frequency curve | how many are above or below a value; percentiles |
| A frequency polygon shifted right | generally larger values |
| A histogram with a long right tail | a few unusually large values |

Two sets can share an average and differ completely in spread, so quote both.

### Estimating for a population

Scale up a sample proportion:

> In a sample of 80 households, 52 own a car. The town has 6 000 households.

$$\frac{52}{80} = 0.65 \quad\Rightarrow\quad 0.65 \times 6000 = 3900 \text{ households}$$

Call it an **estimate**, and note that it assumes the sample represents the
town.

### What the data does not show

Two cautions worth a mark in almost any question:

- **Correlation isn't cause.** Ice cream sales and sunburn both rise in summer;
  neither causes the other.
- **A biased or tiny sample** supports nothing about the wider population.

And a prediction beyond the range of the data — using a trend from 5 years to
forecast 50 — is guesswork, not inference.

## Flashcards

### 1.11 | What is an inference?
A conclusion about a population, drawn from data.

### 1.11 | What must a good inference quote?
The **figures** it is based on, in the context of the question.

### 1.11 | Two data sets have the same median. What else should you compare?
The **spread**: the IQR or the standard deviation.

### 1.11 | Does a correlation prove cause?
No. Two things can rise together without one causing the other.

### 1.11 | How do you estimate a population total from a sample?
Multiply the sample proportion by the population size.

## Questions

### 1.11 | numeric | 1 mark | difficulty 2
In a random sample of 250 voters, 90 support a proposal. The town has 20 000
voters. Estimate how many support it.

**Answer:** 7200

**Working:** $\frac{90}{250} = 0.36$, and $0.36 \times 20\,000 = 7200$.

### 1.11 | mcq | 1 mark | difficulty 2
A survey finds that towns with more libraries have higher exam results. Which
inference is justified?

- A. Building libraries causes better results.
- B. Exam results cause libraries to be built.
- C. There is an association, but the survey does not show what causes it.
- D. Libraries have no effect at all.

**Answer:** C

**Working:** The data shows the two go together. Other factors, such as town
wealth, could explain both.

### 1.11 | mcq | 1 mark | difficulty 3
Two machines have the same mean output. Machine A has a standard deviation of
1.2 units; machine B, 6.5 units. Which inference is best supported?

- A. Machine A produces more.
- B. Machine B produces more.
- C. Machine A is more consistent.
- D. Machine B is more reliable.

**Answer:** C

**Working:** Equal means, so neither produces more on average. The smaller
standard deviation shows A's output varies less.

### 1.11 | structured | 5 marks | difficulty 3
A head teacher samples 40 of the 600 students in a school and records the time
each spends on homework. The mean is 74 minutes, the median 68 minutes, and the
interquartile range 25 minutes.

(a) Estimate the total time spent on homework by all 600 students in one
night, in hours. **(2 marks)**

(b) Suggest why the mean is higher than the median. **(1 mark)**

(c) Give one reason the estimate in (a) might be unreliable, and one way to
improve it. **(2 marks)**

**Answer:** (a) 740 hours (b) A few students spending a very long time pull the
mean up. (c) The sample is small (40 of 600), and it may not represent every
year group; survey a larger, stratified random sample.

**Working:** (a) $74 \times 600 = 44\,400$ minutes (1 mark), which is
$44\,400 \div 60 = 740$ hours (1 mark).
