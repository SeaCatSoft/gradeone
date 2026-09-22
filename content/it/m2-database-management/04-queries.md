---
subject: IT
topic: database-management
lesson: queries
title: Querying a Database
objectives: ["6.4"]
est_minutes: 24
status: draft
source: "Original prose written against syllabus objective 6.4 (manipulate data in a database), covering searching, sorting and queries. Forms and reports are the next lesson. NOT YET checked against textbook for depth."
---

## Lesson

Storing data is only worth doing if you can get it back out. A **query** is a
request to the database for the records that meet stated conditions.

Take a table of 3000 members. "Which members in Portmore joined before 2020 and
have not paid this year's fee?" is a question no one would answer by reading.
A query answers it in a moment, and can be saved and asked again next month.

### What a query specifies

A query is built from up to four things:

1. **Which table or tables** to look in.
2. **Which fields** to show — rarely all of them.
3. **The criteria** — the conditions a record must meet to be included.
4. **The sort order** of the results.

The answer is a set of records, shown as a table. It is not a copy: the results
come from the live data, so running the query again next week gives next week's
answer.

### Criteria

A criterion is a condition applied to one field:

| Criterion | Matches |
|---|---|
| `"Portmore"` | Records whose field is exactly Portmore |
| `> 50` | Values greater than 50 |
| `>= 50` | 50 and above |
| `< 2020` | Before 2020 |
| `<> "Kingston"` | Everything except Kingston |
| `Between 40 And 60` | Values from 40 to 60 inclusive |
| `Is Null` | Records where the field is empty |
| `Is Not Null` | Records where the field has been filled in |

Text criteria go in quotation marks; numbers and dates do not need them.

`Is Null` is more useful than it looks: "which members have no telephone
number recorded?" is a data-quality question that comes up constantly.

### Combining criteria: AND and OR

**AND** — every condition must be true. Criteria placed on the **same row** of
the query grid are combined with AND.

> `Town = "Portmore"` AND `Fee > 500`
> — members in Portmore who also pay more than 500.

**OR** — at least one condition must be true. Criteria on **different rows**
are combined with OR.

> `Town = "Portmore"` OR `Town = "Spanish Town"`
> — members in either town.

Getting these the wrong way round is the single commonest query error, and it
is worth a moment's thought because ordinary English is misleading here.

Someone asks for "all members in Portmore and Spanish Town". Written as AND,
that query asks for members whose town is Portmore **and** whose town is
Spanish Town — and since a member has one town, it returns **nothing**. The
question means OR.

The rule: **AND narrows, OR widens.** Adding an AND can only reduce the number
of records returned; adding an OR can only increase it. If a query returns no
records and you expected some, suspect an AND that should be an OR.

### Wildcards

A **wildcard** stands for unknown characters, for searching on part of a value:

| Pattern | Matches |
|---|---|
| `Like "S*"` | Anything beginning with S — Samuels, Smith |
| `Like "*son"` | Anything ending in son — Johnson, Watson |
| `Like "*ann*"` | Anything containing ann — Joanne, Hannah |
| `Like "S?mith"` | S, any one character, then mith |

`*` stands for any number of characters, including none; `?` stands for exactly
one. (Some systems use `%` and `_` instead — the idea is the same.)

### Sorting the results

Results can be sorted **ascending** (A–Z, smallest first, earliest first) or
**descending**, on one field or several.

As with a spreadsheet, a second sort field breaks ties in the first: sort by
`FormClass` then by `Surname` and each class comes out alphabetical.

Note the difference from a spreadsheet: sorting a query **does not reorder the
stored data**. It changes how these results are presented, and the table
underneath is untouched. There is no risk of detaching a name from its mark,
because the record moves as a whole.

### Calculated fields

A query can produce a field that is not stored anywhere, worked out from the
ones that are:

```
Total: [Price] * [Quantity]
```

The name before the colon is what the new column is called; the expression
after it is how the value is found. Square brackets refer to fields.

This is the database's answer to "do not store what can be calculated". The
total is worked out from the current price and quantity each time the query
runs, so it cannot fall out of step with them.

### Querying more than one table

Where the answer needs data from two tables, the query uses both and follows
the relationship between them.

"List the surname of every member with an unreturned loan" needs `Surname` from
Members and `Returned` from Loans. The query includes both tables, joins them
on `MemberID`, shows `Surname`, and applies the criterion `Returned = No`.

This is what all the key-and-relationship work was for. Because each loan
carries the borrower's `MemberID`, the database can put the two tables together
on demand — without ever having stored the member's name against the loan.

### Queries, filters and sorts

Three related ideas that examiners like to separate:

| | Does what | Saved? |
|---|---|---|
| **Sort** | Puts records in order | No |
| **Filter** | Temporarily shows only matching records in a table | Usually not |
| **Query** | Selects fields and records, from one or more tables | Yes — saved and re-run |

A filter is quick and applies to the table you are looking at. A query is a
saved object that can combine tables, choose fields, calculate and sort — and
can be used as the source of a report.

### Other kinds of query

The queries above are **select** queries: they find records and show them.
Databases also provide **action** queries, which change data:

- **Update** — change a field in every matching record, such as raising all
  fees by 10%.
- **Delete** — remove every matching record.
- **Append** — add matching records to another table.

These are powerful and unforgiving. A delete query with the criteria slightly
wrong removes the wrong records, and there is no undo. The safe habit is to
run it as a **select** query first, look at exactly which records come back,
and only then change it to a delete.

## Flashcards

### 6.4 | What is a query?
A request to the database for the records that meet stated conditions.

### 6.4 | What four things does a query specify?
Which table or tables to search, which fields to show, the criteria records
must meet, and the order to sort the results in.

### 6.4 | How are criteria combined with AND, and what is the effect?
Every condition must be true. AND **narrows** the results — it can only reduce
the number of records returned.

### 6.4 | How are criteria combined with OR, and what is the effect?
At least one condition must be true. OR **widens** the results — it can only
increase the number of records returned.

### 6.4 | Why does `Town = "Portmore" AND Town = "Spanish Town"` return nothing?
No member's town can be both at once. "Members in Portmore and Spanish Town"
means OR, even though English says and.

> Hint: can one field hold two values?

### 6.4 | What does the wildcard `*` mean, and what does `?` mean?
`*` stands for any number of characters, including none. `?` stands for exactly
one character.

### 6.4 | Write a criterion matching every surname beginning with S.
`Like "S*"`

### 6.4 | What does the criterion `Is Null` match?
Records where the field has been left empty — useful for finding incomplete
data.

### 6.4 | What is a calculated field in a query?
A column not stored in any table, worked out from stored fields — for example
`Total: [Price] * [Quantity]`.

### 6.4 | Why does a calculated field never fall out of date?
It is worked out afresh each time the query runs, from the current values of
the fields it uses.

### 6.4 | Does sorting a query change the order of the stored data?
No. It changes only how these results are presented; the table underneath is
untouched.

### 6.4 | Distinguish between a filter and a query.
A **filter** temporarily shows only matching records in the table you are
viewing. A **query** is saved, can combine several tables, choose fields,
calculate and sort, and can be re-run.

### 6.4 | Name three kinds of action query.
**Update** (change matching records), **delete** (remove them) and **append**
(add them to another table).

### 6.4 | What is the safe way to run a delete query?
Run it first as a select query to see exactly which records match, then change
it to a delete. There is no undo.

## Questions

### 6.4 | mcq | 1 mark | difficulty 1
A request to a database for records meeting stated conditions is called

- A. a report
- B. a query
- C. a form
- D. a field

**Answer:** B

**Working:** A query selects records. A report presents them, and a form is for
entering and viewing one record at a time.

### 6.4 | mcq | 1 mark | difficulty 2
A query uses the criteria `Town = "Portmore"` AND `Fee > 500`. Which records
are returned?

- A. All members in Portmore
- B. All members paying more than 500
- C. Members in Portmore who also pay more than 500
- D. Members in Portmore plus all members paying more than 500

**Answer:** C

**Working:** AND requires both conditions to be true, so only records
satisfying each are returned. Option D describes OR.

### 6.4 | mcq | 1 mark | difficulty 3
A librarian wants every member living in Portmore **or** Spanish Town. Using
AND instead of OR would return

- A. all members
- B. no records at all
- C. only the Portmore members
- D. only the Spanish Town members

**Answer:** B

**Working:** No member's town can be both values at once, so no record
satisfies both conditions. A query that unexpectedly returns nothing is usually
an AND that should have been an OR.

### 6.4 | mcq | 1 mark | difficulty 2
Which criterion finds all surnames beginning with the letter M?

- A. `= "M"`
- B. `Like "M*"`
- C. `Like "*M"`
- D. `Between "M" And "N"`

**Answer:** B

**Working:** `*` stands for any number of characters following the M. Option C
would find surnames **ending** in M.

### 6.4 | mcq | 1 mark | difficulty 3
A query includes the field `Total: [Price] * [Quantity]`. This is

- A. a field stored in the table
- B. a calculated field worked out when the query runs
- C. a primary key
- D. a validation rule

**Answer:** B

**Working:** Nothing is stored — the value is computed from the current price
and quantity each time the query runs, so it cannot become out of date.

### 6.4 | mcq | 1 mark | difficulty 3
Which criterion would find members who have no telephone number recorded?

- A. `= 0`
- B. `= ""`
- C. `Is Null`
- D. `Like "*"`

**Answer:** C

**Working:** `Is Null` matches records where the field has been left empty.
Option D would match every record that has *something* in the field.

### 6.4 | structured | 10 marks | difficulty 4
A school database has two tables:

**Students**: `StudentID`, `Surname`, `FirstName`, `FormClass`

**Results**: `ResultID`, `StudentID`, `SubjectCode`, `Mark`

(a) State the criteria needed for a query listing students in form `4A`.
**(1 mark)**

(b) State the criteria needed for a query listing results with a mark of 50 or
more in `IT`. **(2 marks)**

(c) A teacher wants every student in form `4A` **or** form `4B`. Explain why
using AND for this query would return no records. **(2 marks)**

(d) Write a criterion that finds every surname beginning with `S`. **(1 mark)**

(e) The teacher wants a list showing each student's surname alongside their
marks. Explain how the database produces this from two tables. **(2 marks)**

(f) State **one** precaution to take before running a delete query.
**(2 marks)**

**Answer:** (a) `FormClass = "4A"` — 1 mark.
(b) 1 mark — `SubjectCode = "IT"`; 1 mark — `Mark >= 50`, both on the same row
so they combine with AND.
(c) 1 mark — AND requires both conditions to be true of the same record;
1 mark — a student's form class is a single value and cannot be both 4A and 4B,
so no record qualifies. The query needs OR.
(d) `Like "S*"` — 1 mark.
(e) 1 mark — the query includes both tables and joins them on `StudentID`,
which is the primary key of Students and a foreign key in Results; 1 mark — the
database matches each result to the student with that ID and shows the surname
beside the mark.
(f) 2 marks: run it first as a select query to see exactly which records match,
and only then change it to a delete — because a delete cannot be undone.
(Accept: take a backup of the database first.)

**Working:** (b) Criteria on the same row are combined with AND, which is what
is wanted: a record must be an IT result **and** be 50 or more.

(e) This is what the keys were for. The member's surname was never stored
against the result — the database puts the two together on demand by following
the relationship.
