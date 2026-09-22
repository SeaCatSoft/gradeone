---
subject: IT
topic: computer-fundamentals
lesson: choosing-checks
title: Choosing Checks for a Scenario
objectives: ["1.14"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 1.14 (identify appropriate validation and verification checks given a particular scenario). NOT YET checked against textbook for depth."
---

## Lesson

The previous lesson defined the checks. This one is about **choosing** them:
given a field and a situation, say which check applies and why.

Questions on this objective nearly always take the same shape — a table of
fields, and an instruction to name a suitable check for each. The marks go to
the check *and* the justification.

### Work from the field

For each field, ask four questions in order:

1. **Must it be filled in?** → presence check
2. **What type of data is it?** → type check
3. **What values are possible?** → range or reasonableness check
4. **What shape must it take?** → format or length check

Then ask a fifth about the whole record: **does it have to agree with another
field?** → consistency check.

Most fields need **more than one** check, and saying so is usually worth a
mark. A date of birth needs a presence check, a format check and a
reasonableness check — one field, three defences.

### Worked examples

**A student's mark, out of 100**

| Check | Why |
|---|---|
| Presence | A missing mark is not the same as zero |
| Type | It must be numeric |
| Range | Between 0 and 100 |

**A telephone number**

| Check | Why |
|---|---|
| Length | Exactly 10 digits, say |
| Type | Digits only (stored as text, but only digits allowed) |
| Presence | If it is required |

Note the trap: a telephone number is stored as **text**, not as a number, so
that leading zeros survive. The type check tests that the characters are
digits, not that the field is numeric.

**A date of birth**

| Check | Why |
|---|---|
| Presence | Required |
| Format | `dd/mm/yyyy` |
| Reasonableness | Not in the future, and not more than about 120 years ago |

**A sex or gender field**

| Check | Why |
|---|---|
| Presence | Required |
| Format / lookup | Must be one of the permitted values |

Better still, offer a **drop-down list** so an invalid value cannot be entered
at all. Preventing the error beats detecting it.

**An account number**

| Check | Why |
|---|---|
| Length | The right number of digits |
| Check digit | Catches a mistyped or transposed digit |
| Presence | Required |

**A price**

| Check | Why |
|---|---|
| Type | Numeric |
| Range | Greater than zero, and below a sensible maximum |
| Reasonableness | A price of \$1 000 000 for a pencil is possible to type, not credible |

**A username at sign-up**

| Check | Why |
|---|---|
| Presence | Required |
| Length | Between, say, 5 and 20 characters |
| Uniqueness | Nobody else already has it |

**A password at sign-up**

| Check | Why |
|---|---|
| Length | A minimum length |
| Format | Must contain letters, digits and a symbol |
| **Verification by double entry** | Typed twice, because it is not displayed |

The password is the neatest illustration of the two ideas working together.
Validation enforces that it is strong enough; verification confirms the user
typed what they intended — and since the characters are hidden, double entry is
the only way to know.

### Choosing verification

Verification is chosen by **how the data arrives**:

| Situation | Method | Why |
|---|---|---|
| Copying from paper forms | Double entry | Two people rarely err identically |
| A single important field, such as a password | Double entry | It is not displayed, so it cannot be read back |
| A short entry the user can see | Screen verification | Quick, and the user knows what they meant |
| A long document already typed | Proofreading | The only option when re-entry is impractical |
| An ATM withdrawal | Screen verification | The user confirms before it is completed |

### Consistency checks

Worth a separate mention because they are the check students forget.

A consistency check compares two fields that must agree:

- Date of birth against age.
- `Date returned` not earlier than `date borrowed`.
- `Title = Mrs` against `Sex = Male`.
- A postcode against the town.
- `Form class = 4A` against `Year group = 4`.

They catch errors no single-field check can, because each field is individually
reasonable and only the combination is impossible.

### Prevention beats detection

The best check is the one that makes the error impossible:

- A **drop-down list** instead of a text field, so an invalid parish cannot be
  typed.
- A **date picker**, so `31/02/2026` cannot be entered.
- **Radio buttons** or a **tick box** for a two-value field.
- A **default value** where one answer is far commonest.
- **Automatic entry** of what the system already knows — today's date, the
  logged-in user.

An examination answer that names a control preventing the error usually scores,
and it is better practice than validating afterwards.

### How to answer this objective

For each field: name the check, name the field, and state what it rejects.

> `Age`: a **range check**, accepting only values from 0 to 120, so an entry of
> 200 or −5 is rejected.

Three elements, one sentence. An answer naming only the check —
"a range check" — is worth less than one that says what it would reject.

## Flashcards

### 1.14 | What four questions identify the validation checks a field needs?
Must it be filled in (presence)? What type is it (type)? What values are
possible (range or reasonableness)? What shape must it take (format or length)?

### 1.14 | Why does one field often need more than one check?
Each check tests a different thing. A date of birth needs a presence check, a
format check and a reasonableness check before it can be trusted.

### 1.14 | Name three checks suitable for a mark out of 100.
A presence check, a type check (numeric), and a range check of 0 to 100.

### 1.14 | Why is a telephone number's type check not a "numeric" check?
It is stored as **text** so leading zeros survive. The check tests that the
characters are digits, not that the field is a number.

### 1.14 | Name three checks suitable for a date of birth.
A presence check; a format check for `dd/mm/yyyy`; a reasonableness check that
it is not in the future or more than about 120 years ago.

### 1.14 | Which check is best for an account number, and why?
A **check digit** — it is the only check that detects a transposed digit, such
as `4287` typed for `4827`.

### 1.14 | What is a consistency check? Give two examples.
A check that two fields agree — a date returned not earlier than the date
borrowed; `Title = Mrs` against `Sex = Male`.

### 1.14 | Why do consistency checks catch errors that single-field checks cannot?
Each field is individually reasonable; only the combination is impossible.

### 1.14 | Which checks suit a password entered at sign-up?
Validation for length and format (letters, digits and a symbol), plus
**verification by double entry** — it is typed twice because it is not
displayed.

### 1.14 | Name four ways of preventing an invalid entry rather than detecting it.
A drop-down list; a date picker; radio buttons or a tick box; a default value;
automatic entry of what the system already knows.

### 1.14 | Which verification method suits copying many records from paper forms?
**Double entry** — the data is typed twice and compared, because two people
rarely make the same mistake in the same place.

### 1.14 | What three elements should an answer naming a check contain?
The **check**, the **field** it applies to, and what it would **reject**.

> Hint: "a range check" alone is half an answer.

## Questions

### 1.14 | mcq | 1 mark | difficulty 2
A field must record whether a student is male or female. Which is the best
approach?

- A. A text field with a length check
- B. A drop-down list of the permitted values
- C. A range check
- D. A check digit

**Answer:** B

**Working:** A drop-down makes an invalid entry impossible rather than merely
detecting it afterwards — and it removes spelling variations at the same time.

### 1.14 | mcq | 1 mark | difficulty 2
A library system must ensure that the date a book is returned is never earlier
than the date it was borrowed. The appropriate check is a

- A. range check
- B. presence check
- C. consistency check
- D. length check

**Answer:** C

**Working:** Each date is individually reasonable; only the combination is
impossible. Comparing two fields is a consistency check.

### 1.14 | mcq | 1 mark | difficulty 3
Which set of checks is most appropriate for a telephone number field?

- A. Range check and check digit
- B. Length check and a check that all characters are digits
- C. Numeric type check and range check
- D. Reasonableness check only

**Answer:** B

**Working:** A telephone number is stored as text so leading zeros survive, so
a numeric type check is wrong. Length and a digits-only check are what fit.

### 1.14 | mcq | 1 mark | difficulty 3
A data entry clerk copies 500 records from paper forms. Which verification
method is most appropriate?

- A. A range check on each field
- B. Double entry of the data
- C. A format check
- D. A presence check

**Answer:** B

**Working:** The other three are validation checks, which cannot detect a
correctly formed but mistyped value. Double entry compares two independent
typings.

### 1.14 | mcq | 1 mark | difficulty 3
Which check would reject an entry of `31/02/2026` in a date field?

- A. A presence check
- B. A length check
- C. A format check
- D. A type check

**Answer:** C

**Working:** The entry is present, the right length and of the right type. It
is the pattern that fails, since no February has 31 days. Better still, a date
picker would prevent the entry entirely.

### 1.14 | structured | 10 marks | difficulty 3
A sports club is computerising its membership records. Each record holds:
`MemberID` (a unique 6-digit number), `Surname`, `DateOfBirth`, `Sex`,
`Telephone` and `AnnualFee`.

(a) For each of the following fields, name **one** suitable validation check
and state what it would reject:

(i) `Surname` **(2 marks)**

(ii) `DateOfBirth` **(2 marks)**

(iii) `AnnualFee` **(2 marks)**

(b) Name a check suitable for `MemberID` that would detect two digits being
typed the wrong way round, and explain how it works. **(2 marks)**

(c) The records are copied from paper application forms. Name a suitable
verification method and state why validation alone is not enough. **(2 marks)**

**Answer:** (a)(i) 1 mark — a presence check; 1 mark — it rejects a record
where the surname has been left blank. (Accept a length check rejecting an
entry that is too long or too short.)
(ii) 1 mark — a format check (or reasonableness check); 1 mark — it rejects a
date not matching `dd/mm/yyyy`, such as `31/02/2026` (or a date in the future).
(iii) 1 mark — a range check (or type check); 1 mark — it rejects a fee outside
the permitted amounts, such as a negative value (or a non-numeric entry).
(b) 1 mark — a check digit; 1 mark — an extra digit is calculated from the
others and stored with the number; when it is entered the computer recalculates
and compares, and a transposition makes the two disagree.
(c) 1 mark — double entry (accept proofreading against the forms); 1 mark —
validation can only test whether a value is reasonable, so a correctly formed
but mistyped value, such as one digit of a date, passes every check.

**Working:** (a) The second mark in each part comes from saying what is
rejected. Naming the check alone is half the answer, and this is the commonest
way marks are lost on this objective.

(b) The check digit is the only validation check that catches a transposition —
the length, type and format of `481726` and `481762` are identical.
