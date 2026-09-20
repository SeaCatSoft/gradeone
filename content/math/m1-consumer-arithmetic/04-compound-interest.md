---
subject: MATH
topic: consumer-arithmetic
lesson: compound-interest
title: Compound Interest
objectives: ["2.7"]
est_minutes: 16
status: draft
source: Original prose written against syllabus objective 2.7 ("solve problems involving compound interest"). Covers yearly compounding by the year-by-year method and by formula. NOT YET checked against textbook for depth.
---

## Lesson

With simple interest, the interest is always worked out on the original
principal. With **compound interest**, each year's interest is **added to the
principal**, and next year's interest is worked out on that bigger total.
Interest earns interest.

### Year by year

> \$5 000 is invested at 4% per annum, compounded yearly. Find the amount
> after 3 years.

| Year | Principal at start | Interest (4%) | Amount at end |
|---|---|---|---|
| 1 | \$5 000.00 | \$200.00 | \$5 200.00 |
| 2 | \$5 200.00 | \$208.00 | \$5 408.00 |
| 3 | \$5 408.00 | \$216.32 | \$5 624.32 |

The amount after 3 years is \$5 624.32, so the compound interest is
$5624.32 - 5000 = \$624.32$.

Simple interest at the same rate would give $3 \times 200 = \$600$. The extra
\$24.32 is interest earned on interest.

### The formula

Each year multiplies the money by the same factor. At 4%, every year's
amount is $1.04$ times the year before. After $n$ years:

$$A = P\left(1 + \frac{R}{100}\right)^n$$

For the example above:

$$A = 5000 \times 1.04^3 = 5000 \times 1.124864 = \$5624.32$$

The formula is quicker, especially for many years; the table shows clearly
what's happening. CSEC accepts either — but show your working whichever you
use.

The formula gives the **amount**. For the compound **interest**, subtract the
principal:

$$\text{Compound interest} = A - P$$

### Rounding

Money is rounded to the nearest cent, but in the year-by-year method, don't
round each year's figure more than you have to — carry the cents exactly, as
in the table. Rounding a lot along the way can shift the final answer.

### Simple or compound?

Read the question. "Compound interest", "compounded yearly" or "interest is
added to the account each year" all mean compound. If it just says
"interest", or "simple interest", use $I = \frac{PRT}{100}$.

Over one year, simple and compound interest are the same. The difference
only appears from the second year on — and grows every year after that.

## Flashcards

### 2.7 | What is the difference between simple and compound interest?
Simple interest is always calculated on the **original** principal. Compound
interest is calculated on the principal **plus the interest already earned**.

### 2.7 | State the compound interest formula for the amount.
$$A = P\left(1 + \frac{R}{100}\right)^n$$

$n$ is the number of years.

### 2.7 | The formula gives $A$. How do you find the compound interest?
Subtract the principal: $\text{CI} = A - P$.

### 2.7 | What is the multiplier each year at 6% compound interest?
$1.06$ — the amount is multiplied by $1.06$ every year.

### 2.7 | Over one year, is compound interest more than simple interest?
No — they are equal for the first year. Compound interest only pulls ahead
from the second year.

## Questions

### 2.7 | numeric | 1 mark | difficulty 2
\$2 000 is invested at 5% per annum compound interest. Find the amount after 2
years, in dollars.

**Answer:** 2205

**Working:** $A = 2000 \times 1.05^2 = 2000 \times 1.1025 = 2205$.

Year by year: $2000 \to 2100 \to 2205$.

### 2.7 | numeric | 1 mark | difficulty 2
Find the compound interest on \$8 000 at 10% per annum for 3 years, in dollars.

**Answer:** 2648

**Working:** $A = 8000 \times 1.1^3 = 8000 \times 1.331 = 10\,648$.

Compound interest $= 10\,648 - 8000 = 2648$.

### 2.7 | mcq | 1 mark | difficulty 3
\$10 000 is invested for 2 years at 6% per annum. How much **more** does it earn
with compound interest than with simple interest?

- A. \$0
- B. \$36
- C. \$600
- D. \$1 236

**Answer:** B

**Working:** Simple: $I = \frac{10\,000 \times 6 \times 2}{100} = 1200$.

Compound: $A = 10\,000 \times 1.06^2 = 11\,236$, so the interest is \$1 236.

Difference: $1236 - 1200 = 36$. That \$36 is 6% of the first year's \$600
interest, earned in year 2.

### 2.7 | structured | 5 marks | difficulty 3
Dwayne deposits \$4 000 in an account paying 3% per annum compound interest.

(a) Copy and complete the table. **(3 marks)**

| Year | Principal | Interest | Amount |
|---|---|---|---|
| 1 | \$4 000.00 | | |
| 2 | | | |

(b) Calculate the total compound interest earned over the 2 years.
**(1 mark)**

(c) Verify your answer to (a) using the formula $A = P\left(1 + \frac{R}{100}\right)^n$.
**(1 mark)**

**Answer:** (a) Year 1: interest \$120.00, amount \$4120.00. Year 2: principal
\$4120.00, interest \$123.60, amount \$4243.60. (b) \$243.60
(c) $4000 \times 1.03^2 = 4243.60$

**Working:** (a) Year 1 interest: $0.03 \times 4000 = 120$, amount 4120 (1 mark).
Year 2 principal is the year 1 amount, 4120 (1 mark). Year 2 interest:
$0.03 \times 4120 = 123.60$, amount $4243.60$ (1 mark).

(b) $4243.60 - 4000 = 243.60$.

(c) $1.03^2 = 1.0609$, and $4000 \times 1.0609 = 4243.60$. ✓
