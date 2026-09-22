---
subject: IT
topic: database-management
lesson: creating-a-database
title: Creating a Database
objectives: ["6.3"]
est_minutes: 22
status: draft
source: "Original prose written against syllabus objective 6.3 (create a database). Table design, field properties, keys and relationships. NOT YET checked against textbook for depth."
---

## Lesson

Creating a database is mostly **design**. The typing is quick; deciding what
the tables are, and what belongs in each, is the work — and it is far easier to
get right at the start than to correct once there is data in it.

### The steps

1. **Decide what the database must store**, and what questions it must answer.
2. **Identify the tables** — one per kind of thing.
3. **Decide the fields** in each table, and their data types.
4. **Choose a primary key** for each table.
5. **Create the tables** in the DBMS.
6. **Define the relationships** between them.
7. **Enter the data**, usually through a form.

### One table per kind of thing

The most common beginner's design is one enormous table holding everything:

| StudentID | Name | FormClass | FormTeacher | TeacherPhone | Subject | Grade |
|---|---|---|---|---|---|---|
| S1042 | Ayesha Brown | 4A | Mr Grant | 8765550123 | IT | 1 |
| S1042 | Ayesha Brown | 4A | Mr Grant | 8765550123 | Maths | 2 |
| S1043 | Marlon Grant | 4A | Mr Grant | 8765550123 | IT | 3 |

Look at what is repeated. Ayesha's name appears on every subject she sits. Mr
Grant's telephone number appears on every row of his form. Correct that number
and you must correct it everywhere it appears — and if you miss one, the
database now disagrees with itself.

The fix is to split it: **one table per kind of thing**, linked by keys.

- **Students**: `StudentID`, `Surname`, `FirstName`, `FormClass`
- **Teachers**: `TeacherID`, `Surname`, `Telephone`
- **Entries**: `EntryID`, `StudentID`, `SubjectCode`, `Grade`

Now Mr Grant's telephone number is stored **once**. Every row that needs it
holds his `TeacherID` and follows the link.

A quick test for whether a table should be split: **if correcting one real-world
fact means editing more than one row, the design is wrong.**

### Choosing the fields

Two rules.

**Store the smallest useful pieces.** A single `Name` field holding
`Ayesha Brown` cannot be sorted by surname or used to write "Dear Ayesha". Use
`Surname` and `FirstName` separately — you can always join them, but you cannot
reliably split them.

**Do not store what can be calculated.** If you hold `DateOfBirth`, do not also
hold `Age`: age can be worked out, and a stored age is wrong within a year.
The same goes for totals that can be added up on demand.

### Field properties

When a field is created, more than its name and type can be set:

**Field size** — the maximum length. A `FormClass` of 3 characters rejects a
paragraph typed by accident.

**Format** — how the value is displayed: a date as `12/03/2010`, currency with
a sign and two decimals. Display only; the stored value is unchanged.

**Default value** — what appears automatically when a new record is created.
Setting `Country` to `Jamaica` saves typing it hundreds of times.

**Required** — whether the field may be left empty. A student record with no
surname is useless, so `Surname` is required.

**Validation rule** — a condition the value must satisfy, with a **validation
text** message shown when it fails:

| Field | Validation rule | Rejects |
|---|---|---|
| `Mark` | Between 0 and 100 | 150, −5 |
| `Sex` | `M` or `F` | Anything else |
| `DateBorrowed` | Not later than today | Next month's date |
| `FormClass` | Length of 2 | A typed paragraph |

The point of validation is that bad data is stopped **as it is entered**, by
the database, for every user and every program. This is far stronger than
hoping each person types carefully — and it is a real advantage of a database
over a spreadsheet.

**Indexed** — whether the DBMS keeps an index for fast searching on this
field. Worth setting on fields often searched or sorted; not worth it on every
field, because each index takes space and slows down adding records.

### Setting the primary key

Every table needs one. It must be unique for every record and never empty.

Where no natural field qualifies — and usually none does — create an ID field
for the purpose. Many database systems offer an **AutoNumber** type that
allocates the next unused number automatically, which guarantees uniqueness
without anyone having to check.

### Defining relationships

Once the tables exist, the links between them are declared: this foreign key
matches that primary key.

Declaring a relationship lets the DBMS enforce **referential integrity** — a
rule that a foreign key must refer to a record that actually exists. With it
switched on, the database will not accept a loan for a `MemberID` that is not
in the Members table, and will not let you delete a member who still has loans
recorded.

That rule prevents *orphan records* — rows pointing at something that is no
longer there — and it is one of the things a database gives you that a
spreadsheet cannot.

### Entering the data

Data can be typed into the table grid directly, but a **form** is better for
everyday use: one record at a time, labelled clearly, in a sensible order, with
no risk of typing into the wrong row. Forms are covered in a later lesson.

Data can also be **imported** from another source — a spreadsheet, or a text
file of comma-separated values. This is how an existing spreadsheet of records
becomes a database table. The field names and types must line up, and it is
worth importing a few rows first to check they do.

### A worked design

*A clinic must record its patients and their appointments.*

**Tables:** Patients, Appointments — two kinds of thing, so two tables.

**Patients**

| Field | Type | Notes |
|---|---|---|
| `PatientID` | AutoNumber | Primary key |
| `Surname` | Text (30) | Required |
| `FirstName` | Text (30) | Required |
| `DateOfBirth` | Date/Time | Not `Age` — that changes |
| `Telephone` | Text (15) | Text, not Number |

**Appointments**

| Field | Type | Notes |
|---|---|---|
| `AppointmentID` | AutoNumber | Primary key |
| `PatientID` | Number | Foreign key to Patients |
| `AppointmentDate` | Date/Time | Validation: not in the past |
| `Attended` | Boolean | Yes/No |

**Relationship:** one-to-many from Patients to Appointments — one patient has
many appointments, each appointment belongs to one patient.

## Flashcards

### 6.3 | List the steps in creating a database.
Decide what must be stored and what questions it must answer; identify the
tables; decide the fields and their data types; choose a primary key for each;
create the tables; define the relationships; enter the data.

### 6.3 | What is the rule for deciding how many tables a database needs?
One table per kind of thing. If correcting one real-world fact means editing
more than one row, the design needs splitting.

### 6.3 | Why should `Name` be stored as separate surname and first-name fields?
A combined field cannot be sorted by surname or used to address someone by
first name. Fields can always be joined; they cannot reliably be split.

### 6.3 | Why should a person's age not be stored if the date of birth is?
Age can be calculated from the date of birth, and a stored age becomes wrong
within a year.

### 6.3 | Name four field properties that can be set when creating a field.
Any four: field size; format; default value; required; validation rule;
indexed.

### 6.3 | What is a validation rule?
A condition the DBMS enforces on what may be entered in a field — for example a
mark between 0 and 100 — with a message shown when it fails.

### 6.3 | Why is validation in a database stronger than checking by hand?
The rule is enforced by the database itself, for every user and every program
that enters data, rather than depending on each person typing carefully.

### 6.3 | What is a default value?
A value that appears automatically in a field when a new record is created,
such as `Jamaica` in a country field.

### 6.3 | What does the AutoNumber data type do, and why is it useful for a key?
It allocates the next unused number automatically, so every record gets a
unique value without anyone having to check.

### 6.3 | What is referential integrity?
A rule that a foreign key must refer to a record that actually exists — so a
loan cannot be recorded for a member who is not in the Members table.

### 6.3 | What is an orphan record?
A record whose foreign key points at a record that no longer exists.
Referential integrity prevents them.

### 6.3 | Why not index every field?
Each index takes storage space and slows down adding new records. Index the
fields that are often searched or sorted.

## Questions

### 6.3 | mcq | 1 mark | difficulty 2
A table stores each student's form teacher's telephone number against every
student in that form. The main problem with this design is that

- A. the telephone number field is the wrong data type
- B. the number is repeated, so correcting it means editing many rows
- C. the table has too few fields
- D. no primary key can be chosen

**Answer:** B

**Working:** One real-world fact is stored many times. The fix is to move
teachers into their own table and link to it with a foreign key.

### 6.3 | mcq | 1 mark | difficulty 2
A database designer wants to prevent a mark outside the range 0 to 100 from
being entered. This is done by setting

- A. a default value
- B. a validation rule
- C. a field size
- D. an index

**Answer:** B

**Working:** A validation rule states a condition the value must satisfy before
the DBMS accepts it. A field size would limit the number of characters, not the
value.

### 6.3 | mcq | 1 mark | difficulty 3
A database holds `DateOfBirth` for each member. Storing `Age` as well would be
poor design because

- A. age cannot be stored as a number
- B. age can be calculated from the date of birth and would soon be out of date
- C. two members may have the same age
- D. age is not a valid field name

**Answer:** B

**Working:** Anything that can be worked out from data already held should not
be stored separately — a stored age is wrong within a year of being entered.

### 6.3 | mcq | 1 mark | difficulty 3
Referential integrity would prevent which of the following?

- A. Entering a mark of 150
- B. Recording a loan for a `MemberID` that does not exist in the Members table
- C. Leaving a surname field empty
- D. Entering a telephone number as text

**Answer:** B

**Working:** Referential integrity governs the link between tables: a foreign
key must match a real record. Option A is a validation rule and option C a
required field.

### 6.3 | mcq | 1 mark | difficulty 2
Which field property would automatically enter `Jamaica` into a `Country` field
each time a new record is created?

- A. Validation rule
- B. Field size
- C. Default value
- D. Format

**Answer:** C

**Working:** A default value is what appears in the field before anything is
typed, saving repeated entry of the commonest value.

### 6.3 | structured | 10 marks | difficulty 4
A video rental shop wants a database to record its members and the films they
rent. Each member may rent many films; each rental is by one member.

(a) State how many tables the database should have, and name them. **(2 marks)**

(b) For the members table, list **four** suitable fields with their data types.
**(4 marks)**

(c) Name a suitable primary key for the members table and state the **two**
conditions a primary key must satisfy. **(2 marks)**

(d) State the field that links the two tables, and what it is called.
**(1 mark)**

(e) State **one** validation rule the shop could apply, and the field it would
apply to. **(1 mark)**

**Answer:** (a) 1 mark — two; 1 mark — Members and Rentals (accept Loans,
Hires).
(b) 1 mark each for any four sensible field-and-type pairs, such as:
`MemberID` AutoNumber; `Surname` Text; `FirstName` Text; `Address` Text;
`Telephone` Text; `DateJoined` Date/Time. Do not credit `Telephone` given as
Number.
(c) 1 mark — `MemberID`; 1 mark — it must be unique for every record and must
never be empty (both needed).
(d) `MemberID` in the Rentals table, called a foreign key — 1 mark.
(e) Any one sensible pairing, 1 mark: `DateReturned` not earlier than
`DateRented`; `Telephone` must be 10 characters; `MemberID` required;
`DateRented` not later than today.

**Working:** (a) Two kinds of thing — members and rentals — so two tables. A
single table would repeat the member's details on every rental.

(b) The data type carries as much weight as the field name. `Telephone` as
Number is the standard error: no arithmetic is done on it and a leading zero
would be lost.
