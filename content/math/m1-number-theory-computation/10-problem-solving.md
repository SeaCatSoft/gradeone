---
subject: MATH
topic: number-theory-computation
lesson: problem-solving
title: Solving Problems with Number
objectives: ["1.19"]
est_minutes: 18
status: draft
source: Original prose written against syllabus objective 1.19 ("solve problems involving concepts in number theory and computation"). Draws on every other lesson in the topic. NOT YET checked against textbook for depth.
---

## Lesson

The last objective in the topic isn't a new skill. It asks you to **use** the
others — often two or three in one question. Paper 02 number questions are
usually built this way: a short story, several parts, each leaning on the
last.

### A way in

1. **Read to the end first.** Later parts often tell you what the early parts
   are for.
2. **Underline the numbers and the units.** Circle anything that needs
   converting.
3. **Name the skill.** "Largest equal groups" is HCF. "Shared in the ratio" is
   ratio. "What percentage" is part over whole.
4. **Write each step.** Method marks are given for correct working, even when
   the final answer slips.
5. **Check it makes sense.** A share bigger than the total, or a percentage
   over 100 when it can't be, means something went wrong.

### Worked example

> A school spends \$4 800 on a trip. Transport costs 35% of the total, and the
> rest is split between food and tickets in the ratio $5 : 7$.
>
> (a) How much is spent on transport?
>
> (b) How much is spent on tickets?
>
> (c) Tickets cost \$20 each. How many students go?

**(a)** Percentage of a quantity: $0.35 \times 4800 = \$1680$.

**(b)** First, what's left: $4800 - 1680 = \$3120$.

Share it $5 : 7$: that's 12 shares, one share is $3120 \div 12 = \$260$.
Tickets: $7 \times 260 = \$1820$.

**(c)** Divide the ticket money by the price of one ticket:
$1820 \div 20 = 91$ students.

Exam numbers are chosen to work out. If a count of students comes out as
$90.8$, don't round it and move on — go back and check the earlier parts,
because the mistake is almost certainly there.

### Watch for the "remaining" trap

"$\frac{1}{4}$ of the money, then $\frac{1}{3}$ **of the rest**" is not
$\frac{1}{4} + \frac{1}{3}$ of the total. Work step by step with actual amounts:

> Out of \$600, spend $\frac{1}{4}$, then $\frac{1}{3}$ of what remains.

- Spent first: $\frac{1}{4} \times 600 = 150$. Left: $450$.
- Spent second: $\frac{1}{3} \times 450 = 150$. Left: $300$.

So half the money is left — not $1 - \frac{1}{4} - \frac{1}{3} = \frac{5}{12}$.

### Using a calculator well

CSEC allows a calculator on Paper 02, but it doesn't earn method marks on its
own. Write down what you're calculating, then the result. And round **only at
the end** — rounding in the middle of a calculation lets errors pile up.

## Flashcards

### 1.19 | "Largest equal groups" in a word problem signals which skill?
The **HCF**.

### 1.19 | "Next time they happen together" signals which skill?
The **LCM**.

### 1.19 | When should you round in a multi-step calculation?
**Only at the end.** Rounding along the way lets errors build up.

### 1.19 | Spend $\frac{1}{2}$ of \$80, then $\frac{1}{4}$ of the rest. How much is left?
\$30.

Half of 80 is 40, leaving 40. A quarter of 40 is 10, leaving 30.

### 1.19 | Why write down working when a calculator gives the answer?
Method marks. Correct working earns marks even when the final answer is wrong.

## Questions

### 1.19 | numeric | 1 mark | difficulty 2
A tank holds 2.4 L of water. Water is poured into glasses that hold 150 mL
each. How many glasses can be filled?

**Answer:** 16

**Working:** $2.4 \text{ L} = 2400 \text{ mL}$. $2400 \div 150 = 16$ glasses.

### 1.19 | mcq | 1 mark | difficulty 3
Three lighthouses flash every 6, 10 and 15 seconds. They all flash together at
midnight. After how many seconds will they next flash together?

- A. 30
- B. 31
- C. 60
- D. 900

**Answer:** A

**Working:** "Next together" is the LCM. $6 = 2 \times 3$, $10 = 2 \times 5$,
$15 = 3 \times 5$, so the LCM is $2 \times 3 \times 5 = 30$ seconds.

D is $6 \times 10 \times 15$, a common multiple but not the lowest one.

### 1.19 | numeric | 1 mark | difficulty 3
A farmer has \$900. He spends $\frac{2}{5}$ of it on seed, then 25% of the
**remaining** money on fertiliser. How many dollars does he have left?

**Answer:** 405

**Working:** Seed: $\frac{2}{5} \times 900 = 360$. Left: $900 - 360 = 540$.

Fertiliser: $25\% \text{ of } 540 = 135$. Left: $540 - 135 = 405$.

### 1.19 | structured | 6 marks | difficulty 4
A club raised \$2 400. It spent 15% on a party, and divided the rest among
three charities, A, B and C, in the ratio $3 : 5 : 9$.

(a) How much was spent on the party? **(1 mark)**

(b) How much did charity C receive? **(3 marks)**

(c) What percentage of the **original** \$2 400 did charity A receive? Give
your answer correct to 1 decimal place. **(2 marks)**

**Answer:** (a) \$360 (b) \$1080 (c) 15.0%

**Working:** (a) $0.15 \times 2400 = 360$.

(b) Remaining: $2400 - 360 = 2040$. (1 mark.)
Shares: $3 + 5 + 9 = 17$, so one share is $2040 \div 17 = 120$. (1 mark.)
Charity C: $9 \times 120 = 1080$. (1 mark.)

(c) Charity A: $3 \times 120 = 360$. As a percentage of \$2 400:
$\dfrac{360}{2400} \times 100\% = 15.0\%$. (1 mark for the fraction, 1 for the
answer.)

The trap in (c) is using \$2 040 as the whole. The question asks about the
**original** amount.
