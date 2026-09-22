---
subject: IT
topic: database-management
lesson: database-terminology
title: Database Terminology
objectives: ["6.2"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 6.2 (use terminology commonly associated with a database). NOT YET checked against textbook for depth."
---

## Lesson

Database vocabulary is precise, and marks are lost for using the words loosely.
This lesson fixes the terms.

### The structure: table, record, field

A **table** (also called a *file*) holds data about one kind of thing —
students, books, patients. A relational database has several.

A **record** is all the data about **one** of those things: one student, one
book. In a table, a record is a **row**.

A **field** is one item of data within a record: the student's surname, the
book's title. In a table, a field is a **column**.

| StudentID | Surname | FirstName | FormClass | DateOfBirth |
|---|---|---|---|---|
| S1042 | Brown | Ayesha | 4A | 12/03/2010 |
| S1043 | Grant | Marlon | 4B | 28/11/2009 |
| S1044 | Samuels | Shanice | 4A | 05/07/2010 |

Three records, five fields. The row for Ayesha is one record; the column
`Surname` is one field.

Two more terms you may meet: a **data item** or **field value** is the actual
content of one field in one record — `Brown` — and a group of related records
is sometimes called a **file**, which is why "table" and "file" are used
interchangeably.

Remember the hierarchy: a **database** holds **tables**, a table holds
**records**, a record holds **fields**, and a field holds one **value**.

### Field names and data types

Every field has a **name** and a **data type** saying what kind of data it may
hold:

| Data type | Holds | Example |
|---|---|---|
| Text (character) | Letters, digits, symbols | `Brown`, `S1042` |
| Number (numeric) | Values used in arithmetic | `72` |
| Date/Time | Dates and times | `12/03/2010` |
| Currency | Money | `1350.00` |
| Boolean (Yes/No, logical) | Two states only | `Yes` |
| Memo | Long text | A paragraph of notes |
| AutoNumber | A number the DBMS allocates | `1`, `2`, `3` |

Choosing the type matters for the same reasons it did in a spreadsheet. A
telephone number is **text**, not a number: no arithmetic is done on it and a
leading zero would be lost. A student ID like `S1042` is text because it
contains a letter. A mark is a number, because averages must be worked out
from it.

**Field size** limits how much can go in — a `Surname` of 30 characters. It
saves space and it rejects nonsense.

### Keys

**Primary key** — a field (or combination of fields) whose value is **unique**
for every record, used to identify that record. `StudentID` is the primary key
above: two students may both be called Marlon Grant, but no two share `S1043`.

A primary key must be unique and must never be empty. That is why names, which
repeat, and telephone numbers, which are shared and change, make poor keys, and
why databases so often invent an ID field for the purpose.

**Foreign key** — a field in one table that holds the primary key of another,
creating the link between them.

Suppose a second table records subject entries:

| EntryID | StudentID | SubjectCode | Grade |
|---|---|---|---|
| E001 | S1042 | IT | 1 |
| E002 | S1042 | MATH | 2 |
| E003 | S1043 | IT | 3 |

`EntryID` is this table's primary key. `StudentID` is a **foreign key** — it is
the primary key of the Students table, appearing here to say which student each
entry belongs to.

That single idea is how relational databases avoid storing a student's name
against every one of their subject entries. The name lives once, in Students,
and everything else points at it.

**Composite (compound) key** — a primary key made of more than one field, used
where no single field is unique. `StudentID` + `SubjectCode` together identify
an entry uniquely, since a student sits a given subject once.

### Relationships

A **relationship** is the link between two tables, made by a foreign key. There
are three kinds:

**One-to-one** — one record in each table matches exactly one in the other.
One student has one medical record.

**One-to-many** — one record in the first table matches many in the second.
One student has many subject entries; one teacher teaches many students. This
is by far the commonest.

**Many-to-many** — many match many. Many students sit many subjects. A
relational database cannot store this directly; it is broken into two
one-to-many relationships using a third table in the middle — which is exactly
what the Entries table above is doing.

### Other terms you need

**Query** — a request to the database for records meeting stated conditions.
"All students in form 4A", "all books overdue by more than a week."

**Form** — an on-screen layout for entering and viewing data one record at a
time, instead of typing into a grid.

**Report** — a formatted, usually printed, presentation of data from the
database, often grouped and totalled.

**Index** — an internal structure the DBMS keeps to find records in a field
quickly, like the index of a book.

**Validation rule** — a condition the DBMS enforces on what may be entered in
a field, such as a mark between 0 and 100.

**Sorting** — arranging records in order on a chosen field.

**Filtering** — showing only the records meeting a condition, leaving the rest
hidden.

### The terms in one place

| Term | Meaning |
|---|---|
| Table (file) | Data about one kind of thing |
| Record (row) | All the data about one item |
| Field (column) | One item of data within a record |
| Data type | The kind of data a field may hold |
| Primary key | Field uniquely identifying each record |
| Foreign key | A field holding another table's primary key |
| Composite key | A primary key made of more than one field |
| Relationship | The link between two tables |
| Query | A request for records meeting conditions |
| Form | A screen layout for entering one record |
| Report | Formatted output, usually for printing |

## Flashcards

### 6.2 | Define table, record and field.
A **table** holds data about one kind of thing. A **record** is all the data
about one item (a row). A **field** is one item of data within a record (a
column).

### 6.2 | State the database hierarchy from largest to smallest.
Database → table → record → field → value.

### 6.2 | What is a primary key?
A field, or combination of fields, whose value is unique for every record and
which identifies that record.

### 6.2 | What two conditions must a primary key satisfy?
It must be **unique** for every record and must **never be empty**.

### 6.2 | Why is a person's name a poor primary key?
Names repeat — two students may share one — and a key must be unique for every
record.

### 6.2 | What is a foreign key?
A field in one table that holds the primary key of another table, creating the
link between them.

### 6.2 | What is a composite key?
A primary key made up of more than one field, used where no single field is
unique on its own.

### 6.2 | Name the three types of relationship between tables.
**One-to-one**, **one-to-many** and **many-to-many**.

### 6.2 | Give an example of a one-to-many relationship.
One student has many subject entries; one teacher teaches many students; one
customer places many orders.

### 6.2 | How is a many-to-many relationship handled in a relational database?
It cannot be stored directly. A third table is placed between the two, turning
it into two one-to-many relationships.

### 6.2 | Which data type suits a telephone number, and why?
**Text** — no arithmetic is done on it, and storing it as a number would drop a
leading zero.

### 6.2 | Distinguish between a form and a report.
A **form** is an on-screen layout for entering and viewing one record at a
time. A **report** is formatted output, usually printed, often grouped and
totalled.

### 6.2 | What is a query?
A request to the database for the records meeting stated conditions.

## Questions

### 6.2 | mcq | 1 mark | difficulty 1
In a database table, all the data about one student is called

- A. a field
- B. a record
- C. a table
- D. a key

**Answer:** B

**Working:** A record is one row — everything about one item. A field is a
single column within it.

### 6.2 | mcq | 1 mark | difficulty 2
Which field would make the most suitable primary key for a table of students?

- A. Surname
- B. FormClass
- C. StudentID
- D. DateOfBirth

**Answer:** C

**Working:** Only `StudentID` is guaranteed unique for every student. Surnames
repeat, a form class is shared by a whole class, and two students can share a
birthday.

### 6.2 | mcq | 1 mark | difficulty 3
A table of subject entries contains the field `StudentID`, which is the primary
key of the Students table. In the entries table, `StudentID` is

- A. a primary key
- B. a foreign key
- C. a composite key
- D. an index

**Answer:** B

**Working:** A field holding another table's primary key is a foreign key, and
it is what creates the relationship between the two tables.

### 6.2 | mcq | 1 mark | difficulty 2
One teacher teaches many students, and each student has one form teacher. This
relationship is

- A. one-to-one
- B. one-to-many
- C. many-to-many
- D. many-to-one only

**Answer:** B

**Working:** One record in the Teachers table matches many in the Students
table, which is one-to-many — the commonest kind.

### 6.2 | mcq | 1 mark | difficulty 3
Which data type is most suitable for a field storing a student's identification
number `S1042`?

- A. Number
- B. Text
- C. Currency
- D. Boolean

**Answer:** B

**Working:** It contains the letter S, so it is not a number at all — and no
arithmetic would ever be done on it.

### 6.2 | structured | 10 marks | difficulty 3
A library keeps two tables:

**Members**: `MemberID`, `Surname`, `FirstName`, `Address`, `Telephone`

**Loans**: `LoanID`, `MemberID`, `BookCode`, `DateBorrowed`, `Returned`

(a) State the number of fields in the Members table. **(1 mark)**

(b) Name the most suitable primary key for each table. **(2 marks)**

(c) Name the foreign key in the Loans table and explain its purpose.
**(2 marks)**

(d) State the type of relationship between Members and Loans, and give a reason.
**(2 marks)**

(e) State the most suitable data type for each of the following, with a reason
in each case:

(i) `Telephone` **(2 marks)**

(ii) `Returned` **(1 mark)**

**Answer:** (a) Five — 1 mark.
(b) 1 mark each: `MemberID` for Members; `LoanID` for Loans.
(c) 1 mark — `MemberID`; 1 mark — it holds the primary key of the Members
table, linking each loan to the member who borrowed the book.
(d) 1 mark — one-to-many; 1 mark — one member may have many loans, but each
loan belongs to only one member.
(e)(i) 1 mark — text; 1 mark — no arithmetic is performed on it and a leading
zero would be lost if stored as a number.
(ii) Boolean (Yes/No) — the book has either been returned or it has not —
1 mark.

**Working:** (b) A key must be unique and never empty. `Surname` fails the
first test, which is why the library issues an ID.

(d) The test for one-to-many is to ask the question both ways: can one member
have many loans? Yes. Can one loan belong to many members? No. That pattern is
one-to-many.
