---
subject: IT
topic: word-processing-web
lesson: mail-merge
title: Mail Merge
objectives: ["4.7"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 4.7 (use mail merge feature in the preparation of a document for a variety of situations). NOT YET checked against textbook for depth."
---

## Lesson

**Mail merge** produces many personalised copies of one document by combining a
standard layout with a list of data.

Three hundred letters, each addressed to a different parent, with that
student's name and mark in the body — typed one at a time, that is a day's
work and three hundred chances to make a mistake. With mail merge it is one
letter, one list, and one action.

### The two ingredients

**The main document** — the standard text, written once, with **merge fields**
marking the places where data is to be inserted. It holds everything that is
the same in every copy.

**The data source** — the list of records supplying what differs. One record
per copy, one field per piece of information. It may be a table in the word
processor, a spreadsheet, a database table, or a contacts list.

Merging combines them and produces the **merged document**: one copy per record
in the data source.

### Merge fields

In the main document, a merge field is written as a placeholder — commonly in
chevrons:

```
                                                    12 Hope Road
                                                    Kingston 6

«Title» «Surname»
«Address»

Dear «Title» «Surname»,

I am writing about «FirstName»'s results this term. In
Information Technology «FirstName» scored «ITMark» marks.

Yours sincerely,
```

Every `«...»` is replaced with that record's value. Everything else is copied
unchanged.

Note `«FirstName»` used twice in one sentence and the fixed address at the top.
The merge does not care how often a field appears, and material that is the
same for everyone simply stays put.

### The steps

1. **Prepare the data source**, with a heading row naming each field and one
   record per row. Get this right first — most merge problems are data
   problems.
2. **Create the main document** and write the standard text.
3. **Connect** the main document to the data source.
4. **Insert the merge fields** where the data belongs.
5. **Preview** the result, stepping through several records.
6. **Complete the merge**, either printing directly or producing a new document
   containing every copy.

### Preparing the data source

A few rules save most of the trouble:

- **One heading row**, with a clear name for each field, and no blank rows
  above it.
- **One record per row**, with no blank rows in the middle — a blank row can
  make the merge think the list has ended.
- **Split the data as finely as you will need it.** Store `Title`, `FirstName`
  and `Surname` separately. You can write `«Title» «Surname»` from separate
  fields, but you cannot pull `Mr` out of a single `Name` field reliably.
- **Be consistent.** `Mr`, `mr.` and `MR` will all appear exactly as typed.

### What can be merged

The objective says "a variety of situations", and examination questions ask for
examples:

| Output | Use |
|---|---|
| **Letters** | Personalised letters to parents, customers, members |
| **Envelopes** | An addressed envelope per recipient |
| **Labels** | Sheets of address labels |
| **Email** | The same letter sent as individual emails |
| **Directory / catalogue** | One list with all records on a single page |

The last one is different from the others: a **directory** merge puts every
record on one continuous page, which is how a membership list or a price list
is produced. The rest produce one copy per record.

### Filtering and sorting

The merge need not use every record. The data can be **filtered** so that only
matching records are merged — only members in Portmore, only students who
failed — and **sorted**, so the letters come out in postcode order for posting.

### Conditional fields

Text can be made to depend on the data. An `IF … THEN … ELSE` field chooses
between two wordings:

```
«IF ITMark >= 50 "Congratulations on passing" "Please see me about
Information Technology"»
```

Now one main document handles both cases, and each parent receives a sentence
that fits their child's result.

Other useful fields: `«Next Record»`, which moves to the next record — this is
how several labels fit on one sheet — and a **skip record** field, which
excludes a record meeting some condition.

### Why mail merge is worth knowing

**Speed.** One document and one list produce hundreds of copies.

**Accuracy.** Each value is copied from the data source, so a name is misspelt
in the letters only if it is misspelt in the list. Typing three hundred letters
produces three hundred opportunities for error.

**Consistency.** Every copy has the same wording and layout.

**Reuse.** The same data source serves letters, envelopes, labels and emails;
next term, the same main document is merged with new data.

### Where merges go wrong

| Symptom | Cause |
|---|---|
| `«Surname»` printed literally | The merge was never completed, or fields were typed rather than inserted |
| Blank space where a name should be | The record's field is empty, or the field names do not match |
| Far too few copies | A blank row in the data source ended the list early |
| Copies for people who should be excluded | No filter was applied |
| `Dear Mr smith` | Inconsistent capitalisation in the data source |

Every one of these is found by **previewing** before the merge is completed.
Stepping through half a dozen records, including the first and the last, takes
a minute and prevents printing three hundred wrong letters.

## Flashcards

### 4.7 | What is mail merge?
A feature that produces many personalised copies of one document by combining a
standard layout with a list of data.

### 4.7 | Name the two documents needed for a mail merge.
The **main document**, holding the standard text and merge fields, and the
**data source**, holding one record per copy.

### 4.7 | What is a merge field?
A placeholder in the main document marking where a value from the data source
is to be inserted, such as `«Surname»`.

### 4.7 | What may be used as a data source?
A table in the word processor, a spreadsheet, a database table, or a contacts
list.

### 4.7 | List the steps in performing a mail merge.
Prepare the data source; create the main document; connect the two; insert the
merge fields; preview the result; complete the merge.

### 4.7 | Name four things a mail merge can produce.
Letters, envelopes, address labels, email messages, and a directory or
catalogue.

### 4.7 | How does a directory merge differ from a letter merge?
A **directory** puts every record on one continuous page — for a membership or
price list. A letter merge produces one separate copy per record.

### 4.7 | Why should a data source store title, first name and surname in separate fields?
They can always be combined in the main document, but a single `Name` field
cannot reliably be split back into its parts.

### 4.7 | Why must a data source contain no blank rows?
A blank row can make the merge treat the list as finished, so later records are
never merged.

### 4.7 | Give two advantages of mail merge over typing each letter.
Any two: it is far faster; values are copied from the data source so fewer
mistakes are made; every copy is consistent; the same data source can be reused
for envelopes, labels and emails.

### 4.7 | What does a conditional (IF) merge field do?
Chooses between two pieces of text depending on the data — for example
congratulating a pass and requesting a meeting for a fail.

### 4.7 | Why preview a merge before completing it?
Stepping through several records, including the first and last, reveals empty
fields, mismatched names and filter problems before hundreds of copies are
printed.

## Questions

### 4.7 | mcq | 1 mark | difficulty 1
Which two components are required for a mail merge?

- A. A main document and a data source
- B. A spreadsheet and a database
- C. A template and a style sheet
- D. A form and a report

**Answer:** A

**Working:** The main document holds the standard text and merge fields; the
data source supplies what differs between copies.

### 4.7 | mcq | 1 mark | difficulty 2
In a mail-merged letter, `«Surname»` is

- A. text that is printed exactly as shown
- B. a merge field, replaced with a value from the data source
- C. a style name
- D. a comment

**Answer:** B

**Working:** Each merge field is replaced with that record's value. If it
prints literally, the merge was not completed or the field was typed rather
than inserted.

### 4.7 | mcq | 1 mark | difficulty 3
A school merges 300 letters but only 42 are produced. The most likely cause is

- A. the printer ran out of paper
- B. a blank row part-way down the data source
- C. too many merge fields were inserted
- D. the main document was saved as PDF

**Answer:** B

**Working:** A blank row can end the record list early, so everything below it
is ignored. Previewing the last record would have shown it.

### 4.7 | mcq | 1 mark | difficulty 3
A club wants to produce a single printed list of all its members, rather than
one letter each. The merge should produce

- A. letters
- B. envelopes
- C. a directory
- D. labels

**Answer:** C

**Working:** A directory merge places every record on one continuous page,
which is exactly a membership list. Every other option produces one output per
record.

### 4.7 | mcq | 1 mark | difficulty 3
A data source stores each parent's full name in one field, `Name`, containing
values such as `Mr John Brown`. The letters must begin `Dear Mr Brown`. The
main difficulty is that

- A. the field name is invalid
- B. a single field cannot be reliably split into title, first name and surname
- C. merge fields cannot appear in a salutation
- D. the data source must be a database

**Answer:** B

**Working:** Fields can always be joined but not reliably split — some names
have two given names, some have none, and the merge has no way to tell which
part is which. The data source should have stored them separately.

### 4.7 | structured | 10 marks | difficulty 3
A school wants to send each parent a letter giving their child's end-of-term
Information Technology mark, and to print an addressed envelope for each.

(a) Name the **two** documents required for the mail merge, and state what each
contains. **(4 marks)**

(b) List **four** fields the data source should contain. **(2 marks)**

(c) Describe **two** steps the school should take before completing the merge.
**(2 marks)**

(d) The school wants to write to only those parents whose child scored below
50. State how this is done without creating a second data source. **(1 mark)**

(e) State **one** advantage of using the same data source for the envelopes.
**(1 mark)**

**Answer:** (a) 2 marks each: the **main document**, containing the standard
text of the letter with merge fields marking where data is inserted; the **data
source**, containing one record per parent with the fields that differ between
letters.
(b) 1 mark per two correct fields, e.g. `Title`, `Surname`, `Address`,
`FirstName` (the child's), `ITMark`.
(c) 1 mark each, any two: preview the merged letters, stepping through several
records including the first and last; check the data source for blank rows and
empty fields; check that the field names match those inserted; sort or filter
the records as required.
(d) Apply a **filter** to the data source so only records with a mark below 50
are merged — 1 mark.
(e) Any one, 1 mark: the addresses are guaranteed to match the letters; no
retyping, so no new errors; it saves time.

**Working:** (b) Note that `Title` and `Surname` are separate fields. A single
combined `Name` field would make `Dear Mr Brown` impossible to produce
reliably.

(d) Filtering is the answer the question is looking for — it keeps one list as
the single source of truth, rather than creating a second copy that will drift
out of date.
