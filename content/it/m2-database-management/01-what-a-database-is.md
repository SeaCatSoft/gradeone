---
subject: IT
topic: database-management
lesson: what-a-database-is
title: What a Database Is For
objectives: ["6.1"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 6.1 (explain the concept of a database). NOT YET checked against textbook for depth."
---

## Lesson

A **database** is an organised collection of related data, stored so that it
can be retrieved, updated and reported on easily.

The word doing the work there is **related**. A pile of facts is not a
database; a database is facts arranged so that the connections between them can
be followed — this student sits these subjects, this subject is taught by this
teacher.

### The DBMS

A **database management system (DBMS)** is the software that creates and
manages the database. Microsoft Access, MySQL, Oracle and PostgreSQL are all
database management systems.

The distinction is worth keeping straight, because examiners test it. The
**database** is the data. The **DBMS** is the program that looks after it. A
DBMS with no data in it is still a DBMS; the school's student records are still
a database whichever program holds them.

The DBMS does four things you would otherwise do by hand: it stores the data,
enforces rules about what may be stored, retrieves what is asked for, and
controls who may see or change it.

### The problem databases solve

Imagine a school keeping records in separate files: one for the office, one for
the library, one for the sports department. Each holds the student's name,
address and telephone number.

**The same fact is stored three times.** This is **data redundancy**, and it is
wasteful — but the waste is the smallest problem.

**The copies disagree.** A student moves house and tells the office. The
library and the sports department are never told. Now there are three addresses
and no way to know which is right. This is a loss of **data integrity** — data
that should agree with itself no longer does.

**Changes take three times the work**, and must be remembered three times.

**Nobody can answer a question across the files.** "Which students who owe
library fines are also in the football squad?" needs both files and a lot of
patience.

A database fixes this by storing each fact **once** and letting every part of
the school refer to it. Change the address in one place and every department
sees the new one, because there is only one.

### What a database gives you

**Reduced redundancy.** Each fact stored once, not once per department.

**Data integrity.** Because there is one copy, it cannot disagree with itself.
The DBMS also enforces rules — a mark must be 0 to 100, a student must have a
form class — so bad data is rejected as it is entered.

**Data sharing.** Several users can work with the same data at once, and the
DBMS keeps them from overwriting one another.

**Security.** Access can be granted per user or per group. The office sees
financial records; the sports department does not.

**Fast retrieval.** Queries find matching records in a large file in moments.

**Data independence.** How the data is stored can be changed without rewriting
every program that uses it.

**Backup and recovery.** The DBMS provides ways to copy the data and restore
it after a failure.

### And the costs

Databases are not free, and an examination may ask for the other side:

- A DBMS can be **expensive** to buy and needs capable hardware.
- It is **complex**, so staff need training and often a specialist to design
  and administer it.
- Putting everything in one place makes that place **valuable to attack** and
  costly to lose — so security and backups matter more, not less.
- For a genuinely small, simple set of data, a spreadsheet may be the more
  sensible tool.

### Database or spreadsheet?

Both hold rows of data, and students meet them in the same term, so the
distinction is worth drawing plainly:

| | Spreadsheet | Database |
|---|---|---|
| Built for | Calculation and analysis | Storing and retrieving records |
| Volume | Modest | Large |
| Relationships between tables | Not really | Central to it |
| Rules on what may be entered | Limited | Enforced per field |
| Several users at once | Awkward | Designed for it |
| Finding records | Sort and filter | Queries |

The working rule from the spreadsheets topic still holds: if the work is mostly
arithmetic, use a spreadsheet; if it is mostly storing, relating and querying
records, use a database.

### Flat file and relational

A **flat file** database is a single table, standing alone. A class list with
every student's details in one table is a flat file, and for something that
simple it is perfectly adequate.

A **relational** database holds several tables that are **linked** to one
another — Students, Subjects, Teachers — so that data in one can be matched
with data in another. Almost every real database is relational, and the next
lesson covers how the links are made.

The reason for the split is the same redundancy problem in miniature. Keep
every student's form teacher's name in the student table, and that teacher's
name is repeated in thirty rows; correct a spelling and you correct it thirty
times. Put teachers in their own table and link to it, and the name is stored
once.

## Flashcards

### 6.1 | What is a database?
An organised collection of **related** data, stored so that it can be
retrieved, updated and reported on easily.

### 6.1 | What is a DBMS, and how does it differ from a database?
A **database management system** is the software that creates and manages the
database. The database is the data; the DBMS is the program that looks after
it.

### 6.1 | Name three database management systems.
Microsoft Access, MySQL and Oracle. (PostgreSQL also counts.)

### 6.1 | What is data redundancy?
Storing the same fact more than once — for example a student's address held
separately by three departments.

### 6.1 | Why is data redundancy dangerous, beyond wasting space?
The copies drift apart. Update one and not the others and the data disagrees
with itself, so there is no way to know which copy is right.

### 6.1 | What is data integrity?
Data being accurate and consistent with itself. A database protects it by
storing each fact once and enforcing rules on what may be entered.

### 6.1 | Give four advantages of using a database.
Any four: reduced data redundancy; better data integrity; data can be shared by
many users; security controls per user; fast retrieval through queries; data
independence; backup and recovery facilities.

### 6.1 | Give two disadvantages of using a database.
Any two: a DBMS is expensive and needs capable hardware; it is complex and
requires trained staff; concentrating all data in one place makes security and
backup more critical.

### 6.1 | When is a spreadsheet the better tool than a database?
When the work is mostly calculation and analysis on a modest amount of data. A
database suits storing, relating and querying large numbers of records.

### 6.1 | Distinguish between a flat file and a relational database.
A **flat file** database is a single standalone table. A **relational**
database holds several tables linked to one another, so data in one can be
matched with data in another.

## Questions

### 6.1 | mcq | 1 mark | difficulty 1
A database is best described as

- A. a program that stores and manages data
- B. an organised collection of related data
- C. a single table of numbers
- D. a spreadsheet with more rows

**Answer:** B

**Working:** The database is the data itself; option A describes the DBMS, the
software that manages it.

### 6.1 | mcq | 1 mark | difficulty 2
A school stores each student's address in three separate departmental files.
This is an example of

- A. data integrity
- B. data redundancy
- C. data independence
- D. data validation

**Answer:** B

**Working:** The same fact is stored more than once, which is redundancy. Its
main danger is that the copies stop agreeing — a loss of integrity.

### 6.1 | mcq | 1 mark | difficulty 3
A student changes address and the office updates its records, but the library's
records still show the old address. Which has been lost?

- A. Data independence
- B. Data integrity
- C. Data security
- D. Data redundancy

**Answer:** B

**Working:** The data no longer agrees with itself, so it is no longer reliable
— that is a loss of integrity. Redundancy is the *cause*, not the thing lost.

### 6.1 | mcq | 1 mark | difficulty 2
Which of the following is a database management system?

- A. Microsoft Excel
- B. Microsoft Access
- C. Microsoft Word
- D. Microsoft PowerPoint

**Answer:** B

**Working:** Access is a DBMS. Excel is a spreadsheet, Word a word processor
and PowerPoint presentation software.

### 6.1 | mcq | 1 mark | difficulty 3
Which of the following is a **disadvantage** of using a database?

- A. Data is stored only once
- B. Several users can access the data at the same time
- C. A DBMS is costly and requires trained staff
- D. Queries retrieve records quickly

**Answer:** C

**Working:** The other three are advantages. Cost, complexity and the need for
training are the genuine drawbacks, along with the risk concentrated in holding
everything in one place.

### 6.1 | structured | 9 marks | difficulty 3
A community clinic keeps patient details in three separate files: one at
reception, one in the pharmacy and one in the accounts office. Each file
contains the patient's name, address and telephone number.

(a) Name the problem created by storing the patient's details in three files,
and explain **one** consequence of it. **(3 marks)**

(b) Explain how a database would address this problem. **(2 marks)**

(c) State **three** other advantages the clinic would gain from using a
database. **(3 marks)**

(d) State **one** disadvantage the clinic should consider. **(1 mark)**

**Answer:** (a) 1 mark — data redundancy; 2 marks for a developed consequence,
such as: when a patient changes address only one file is updated, so the three
copies disagree and staff cannot tell which is correct — a loss of data
integrity. (Accept: updating takes three times the work; storage is wasted.)
(b) 1 mark — each fact is stored once in a single database; 1 mark — every
department refers to that one copy, so an update is seen immediately by all of
them.
(c) 1 mark each, any three: data can be shared by several users at once;
security can be set per user or department; queries retrieve records quickly;
rules can be enforced on what may be entered; backup and recovery facilities;
questions spanning departments can be answered.
(d) Any one, 1 mark: the DBMS is expensive; it is complex and staff need
training; a specialist may be needed to design and maintain it; all the data
in one place raises the cost of a security breach or failure.

**Working:** (a) Naming redundancy is worth one mark; the other two come from
following the consequence through. "It wastes space" is true but much weaker
than the integrity argument.

(c) Do not repeat part (b): reduced redundancy has already been credited there.
