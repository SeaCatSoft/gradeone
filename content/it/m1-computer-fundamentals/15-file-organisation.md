---
subject: IT
topic: computer-fundamentals
lesson: file-organisation
title: File Organisation and Access
objectives: ["1.15"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 1.15 (select appropriate file organization for particular application). NOT YET checked against textbook for depth."
---

## Lesson

A **file** is a collection of related records held in storage. **File
organisation** is how those records are arranged, and it decides how quickly a
particular record can be found.

The objective is to **select** an organisation for an application, so each one
below comes with what it suits.

### Serial organisation

Records are stored **one after another in the order they arrive**, with no
sorting at all.

- **Access**: serial only — start at the beginning and read through.
- **Adding a record**: instant; it goes on the end.
- **Finding a record**: slow, on average half the file must be read.
- **Medium**: any, including tape.

**Suits**: data that arrives continuously and is processed later as a batch —
a transaction log, sensor readings, a till's record of the day's sales.

The point of serial organisation is that **writing is free**. Nothing must be
found, moved or sorted, so it suits the case where records pour in and nobody
needs to look anything up until later.

### Sequential organisation

Records are stored in **order of a key field** — account number, student ID,
surname.

- **Access**: sequential — read through in order, but you may stop once you
  pass where the record would be.
- **Adding a record**: slow. The record must go in its correct place, so the
  file is usually rewritten.
- **Finding a record**: faster than serial, but still involves reading through.
- **Medium**: any, including tape.

**Suits**: applications where **most or all records are processed every time**,
in key order — payroll, monthly billing, producing statements for every
customer.

The insight: if you are going to touch every record anyway, being in order
costs nothing and makes reporting and matching far easier. The **hit rate** —
the proportion of records used in a run — is the deciding measure. A high hit
rate favours sequential.

### Indexed sequential organisation

Records are held **in key order**, and an **index** is kept alongside, listing
keys and where to find them — exactly like the index of a book.

- **Access**: both. Records can be read in order, or one can be found directly
  through the index.
- **Adding a record**: moderate; the index must be updated too.
- **Finding a record**: fast, via the index.
- **Medium**: direct-access only — a disc, not tape.

**Suits**: applications needing **both** individual lookups and ordered
processing. A bank does both: a customer at an ATM needs one account found
instantly, and at month end every account is processed in order.

This is the commonest organisation in business systems, because most systems
need both kinds of access. The price is the space the index occupies and the
work of keeping it current.

### Direct (random) organisation

The record's position is calculated **from its key**, using a **hashing
algorithm**. To find a record, the same calculation is done again and the
computer goes straight to it.

- **Access**: direct — a single calculation, no searching.
- **Adding a record**: fast.
- **Finding a record**: fastest of all, and the file's size barely matters.
- **Reading in order**: not possible without sorting first.
- **Medium**: direct-access only — a disc.

**Suits**: applications needing an **immediate answer for one record**, where
order does not matter — airline seat reservation, a stock enquiry at a counter,
checking a PIN, a website looking up a user account.

Two records can hash to the same position, which is called a **collision**, and
the system must have a rule for handling it. That overhead is the price of the
speed.

### The comparison

| | Serial | Sequential | Indexed sequential | Direct |
|---|---|---|---|---|
| Order | As they arrive | By key | By key, plus index | Calculated |
| Access | Serial | Sequential | Both | Direct |
| Speed of single lookup | Slowest | Slow | Fast | Fastest |
| Ordered processing | No | Yes | Yes | No |
| Adding records | Easiest | Hardest | Moderate | Easy |
| Works on tape | Yes | Yes | No | No |
| Extra space needed | None | None | Index | Some, for collisions |

### Choosing: the two questions

Almost every question on this objective is settled by asking two things.

**1. Does the application need one record quickly, or all records in order?**

- One record, immediately → **direct**
- All records, in order → **sequential**
- Both → **indexed sequential**
- Neither; just recording as it arrives → **serial**

**2. What is the hit rate?**

The proportion of records used in a single run.

- **High** (most records used) → sequential is efficient
- **Low** (a few records used) → direct or indexed, so the rest are not read

| Application | Organisation | Why |
|---|---|---|
| Monthly payroll for all staff | Sequential | Every record processed, in order |
| Airline seat booking | Direct | One record needed instantly, order irrelevant |
| Bank accounts | Indexed sequential | ATM lookups and month-end statements both needed |
| Supermarket till log | Serial | Records arrive continuously, processed later |
| Utility billing for all customers | Sequential | Every account processed each cycle |
| Checking a PIN at an ATM | Direct | Immediate answer for one record |
| A school's student records | Indexed sequential | Individual lookups and whole-year reports |
| Sensor readings from a weather station | Serial | Continuous arrival, analysed afterwards |

### Access methods against organisation

Keep the two words apart, because questions exploit the confusion.

**File organisation** is how records are **stored**. **Access method** is how
they are **retrieved**.

They are related but not identical: an indexed sequential file can be accessed
either sequentially or directly, which is the whole reason for choosing it.

| Access method | Means |
|---|---|
| **Serial** | Read from the start, one after another |
| **Sequential** | Read in key order |
| **Direct (random)** | Go straight to the record |

### Batch and real-time

One more distinction that decides the choice.

**Batch processing** collects transactions and processes them together later —
payroll, billing, end-of-day banking. Order matters, immediacy does not, so
**sequential** fits.

**Real-time (online) processing** handles each transaction as it happens —
booking a seat, withdrawing cash. Immediacy is everything, so **direct** or
**indexed** fits.

A seat cannot be sold twice, so a booking system must be real time and
therefore direct. A payslip can be produced overnight, so payroll is batch and
therefore sequential. That single observation answers most of the examination
questions on this objective.

## Flashcards

### 1.15 | What is file organisation?
The way records in a file are arranged in storage, which decides how quickly a
particular record can be found.

### 1.15 | Describe serial organisation and what it suits.
Records are stored one after another in the order they arrive, with no sorting.
It suits data arriving continuously and processed later — a transaction log or
sensor readings.

### 1.15 | Describe sequential organisation and what it suits.
Records are stored in order of a key field. It suits applications where most or
all records are processed each run, such as payroll or monthly billing.

### 1.15 | Describe indexed sequential organisation.
Records are held in key order with an **index** alongside, so they can be read
in order **or** found directly through the index.

### 1.15 | Why is indexed sequential the commonest choice in business systems?
Most systems need both kinds of access — a bank needs an instant lookup at an
ATM and ordered processing of every account at month end.

### 1.15 | Describe direct (random) organisation.
The record's position is calculated from its key by a hashing algorithm, so the
computer goes straight to it without searching.

### 1.15 | What is a collision in direct organisation?
Two keys calculating to the same storage position. The system must have a rule
for handling it, which is the overhead paid for the speed.

### 1.15 | Which organisations cannot be used on magnetic tape, and why?
**Indexed sequential** and **direct** — both need direct access to any
position, and tape can only be read from one end.

### 1.15 | What is the hit rate, and how does it guide the choice?
The proportion of records used in a single run. A **high** hit rate favours
sequential; a **low** one favours direct or indexed, so the unused records are
not read.

### 1.15 | Which organisation suits an airline seat booking system, and why?
**Direct** — one record must be found immediately, and the order of records
does not matter.

### 1.15 | Which organisation suits a monthly payroll, and why?
**Sequential** — every record is processed each run, in key order, so a high
hit rate makes ordered access efficient.

### 1.15 | Distinguish between file organisation and access method.
**Organisation** is how records are stored; **access method** is how they are
retrieved. An indexed sequential file can be accessed either way.

### 1.15 | Distinguish between batch and real-time processing, and the organisation each suits.
**Batch** collects transactions and processes them later — sequential.
**Real-time** handles each as it happens — direct or indexed.

> Hint: can a seat be sold twice while the booking waits for tonight's run?

## Questions

### 1.15 | mcq | 1 mark | difficulty 2
Records stored one after another in the order they arrive, with no sorting, are
organised

- A. serially
- B. sequentially
- C. indexed sequentially
- D. directly

**Answer:** A

**Working:** Serial means the order of arrival. Sequential means sorted on a
key field.

### 1.15 | mcq | 1 mark | difficulty 2
Which file organisation is most suitable for an airline seat reservation
system?

- A. Serial
- B. Sequential
- C. Direct
- D. Batch

**Answer:** C

**Working:** A single record must be found and updated immediately, and the
order of records is irrelevant. Direct access gives the answer in one
calculation.

### 1.15 | mcq | 1 mark | difficulty 2
A company produces payslips for all 800 employees at the end of each month. The
most suitable organisation is

- A. serial
- B. sequential
- C. direct
- D. indexed sequential

**Answer:** B

**Working:** Every record is processed in the run — a hit rate of 100% — and
order is convenient for reporting, so sequential is the efficient choice.

### 1.15 | mcq | 1 mark | difficulty 3
A bank needs instant access to one account when a customer uses an ATM, and
must also process every account in order at the end of the month. The most
suitable organisation is

- A. serial
- B. sequential
- C. direct
- D. indexed sequential

**Answer:** D

**Working:** Both kinds of access are needed. Indexed sequential provides
direct lookup through the index and ordered processing through the sequence.

### 1.15 | mcq | 1 mark | difficulty 3
Which organisation **cannot** be used on magnetic tape?

- A. Serial
- B. Sequential
- C. Direct
- D. Both serial and sequential

**Answer:** C

**Working:** Direct organisation requires jumping straight to a calculated
position, and tape must be read from one end. Serial and sequential both suit
tape.

### 1.15 | mcq | 1 mark | difficulty 3
In direct file organisation, the position of a record is found by

- A. searching from the start of the file
- B. applying a hashing algorithm to the record's key
- C. consulting an index held separately
- D. reading the records in key order

**Answer:** B

**Working:** Hashing calculates the address from the key, so no search is
needed. Option C describes indexed organisation.

### 1.15 | structured | 10 marks | difficulty 3
A utility company has 50 000 customers. Each month it produces a bill for every
customer. Its staff must also be able to answer a telephone enquiry about any
single customer's account immediately.

(a) Name the file organisation most suitable for producing the monthly bills,
and give a reason. **(2 marks)**

(b) Name the file organisation most suitable for answering a single telephone
enquiry, and give a reason. **(2 marks)**

(c) Name **one** organisation that would serve both requirements, and explain
how. **(3 marks)**

(d) Define the term **hit rate** and state how it affects the choice of
organisation. **(3 marks)**

**Answer:** (a) 1 mark — sequential; 1 mark — every customer record is
processed in the run, in key order, so reading straight through is efficient.
(b) 1 mark — direct (random); 1 mark — one record must be found immediately and
the order of records does not matter, so hashing the key goes straight to it.
(c) 1 mark — indexed sequential; 2 marks — records are stored in key order so
they can be read through for the monthly billing run, and an index alongside
allows any single record to be found directly for a telephone enquiry.
(d) 1 mark — the proportion of records in a file that are used in a single
processing run; 1 mark — a high hit rate favours sequential organisation, since
most records are needed anyway; 1 mark — a low hit rate favours direct or
indexed organisation, so the unused records are not read.

**Working:** (c) This is the realistic answer, and it is why indexed sequential
is so common: real organisations almost always need both kinds of access, and
choosing one pure organisation means failing at the other task.

(d) The hit rate is the quantitative version of the whole objective — it turns
"which do I need?" into a measure.
