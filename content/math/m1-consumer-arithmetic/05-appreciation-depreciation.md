---
subject: MATH
topic: consumer-arithmetic
lesson: appreciation-depreciation
title: Appreciation and Depreciation
objectives: ["2.8"]
est_minutes: 14
status: draft
source: Original prose written against syllabus objective 2.8 ("solve problems involving appreciation and depreciation"). Uses a percentage of the current value each year (reducing balance), the usual CSEC model. NOT YET checked against textbook for depth.
---

## Lesson

Things change in value over time. Land and houses usually go up — they
**appreciate**. Cars, phones and machinery usually go down — they
**depreciate**.

The maths is the same as compound interest: each year, the value changes by
a percentage of **its value at the start of that year**.

### Appreciation

> A plot of land worth \$120 000 appreciates by 8% per year. Find its value
> after 2 years.

Each year the value is multiplied by $1.08$:

| Year | Value at start | Increase (8%) | Value at end |
|---|---|---|---|
| 1 | \$120 000 | \$9 600 | \$129 600 |
| 2 | \$129 600 | \$10 368 | \$139 968 |

In one step: $120\,000 \times 1.08^2 = 120\,000 \times 1.1664 = \$139\,968$.

### Depreciation

> A car bought for \$60 000 depreciates by 15% per year. Find its value after
> 2 years.

Losing 15% leaves **85%**, so each year the value is multiplied by $0.85$:

| Year | Value at start | Decrease (15%) | Value at end |
|---|---|---|---|
| 1 | \$60 000 | \$9 000 | \$51 000 |
| 2 | \$51 000 | \$7 650 | \$43 350 |

In one step: $60\,000 \times 0.85^2 = 60\,000 \times 0.7225 = \$43\,350$.

The formulas side by side, with $P$ the original value, $R$ the yearly rate
and $n$ the number of years:

$$\text{Appreciation: } V = P\left(1 + \frac{R}{100}\right)^n \qquad \text{Depreciation: } V = P\left(1 - \frac{R}{100}\right)^n$$

### The mistake to avoid

Two years of 15% depreciation is **not** 30%. The second year's 15% is taken
from \$51 000, not from \$60 000, so it's a smaller drop.
$30\%$ of \$60 000 would give \$42 000 — wrong.

The total loss in value over the two years is $60\,000 - 43\,350 = \$16\,650$,
which is $\frac{16\,650}{60\,000} \times 100\% = 27.75\%$.

## Flashcards

### 2.8 | What is the difference between appreciation and depreciation?
**Appreciation** is an increase in value; **depreciation** is a decrease.

### 2.8 | An item depreciates by 20% a year. What is the yearly multiplier?
$0.8$. It keeps 80% of its value each year.

### 2.8 | State the depreciation formula.
$$V = P\left(1 - \frac{R}{100}\right)^n$$

### 2.8 | Is 10% depreciation for 2 years the same as 20% depreciation?
No. The second 10% is taken from a smaller value. Two years at 10% leaves
$0.9^2 = 0.81$, which is 81% — a 19% loss, not 20%.

## Questions

### 2.8 | mcq | 1 mark | difficulty 2
A phone bought for \$3 000 depreciates by 10% each year. What is its value
after 2 years?

- A. \$570
- B. \$2 400
- C. \$2 430
- D. \$2 700

**Answer:** C

**Working:** $3000 \times 0.9^2 = 3000 \times 0.81 = 2430$.

B takes 20% off in one go. D is the value after one year. A is the total
loss in value.

### 2.8 | numeric | 1 mark | difficulty 2
A house valued at \$250 000 appreciates by 5% per year. Find its value after 2
years, in dollars.

**Answer:** 275625

**Working:** $250\,000 \times 1.05^2 = 250\,000 \times 1.1025 = 275\,625$.

### 2.8 | numeric | 1 mark | difficulty 3
A machine costing \$25 000 depreciates by 20% per year. Find its value after 3
years, in dollars.

**Answer:** 12800

**Working:** $25\,000 \times 0.8^3 = 25\,000 \times 0.512 = 12\,800$.

### 2.8 | structured | 4 marks | difficulty 3
A minibus is bought for \$180 000. Its value depreciates by 12% per year.

(a) Calculate its value at the end of the first year. **(1 mark)**

(b) Calculate its value at the end of the second year. **(1 mark)**

(c) Calculate the total depreciation over the two years, as a percentage of
the original price. Give your answer to 2 decimal places. **(2 marks)**

**Answer:** (a) \$158400 (b) \$139392 (c) 22.56%

**Working:** (a) $0.88 \times 180\,000 = 158\,400$.

(b) $0.88 \times 158\,400 = 139\,392$.

(c) Total depreciation $= 180\,000 - 139\,392 = 40\,608$ (1 mark).
$\frac{40\,608}{180\,000} \times 100\% = 22.56\%$ (1 mark).

It's less than $2 \times 12\% = 24\%$, because the second year's 12% is of a
smaller value.
