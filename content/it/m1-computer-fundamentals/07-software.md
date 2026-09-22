---
subject: IT
topic: computer-fundamentals
lesson: software
title: Types of Software
objectives: ["1.7"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 1.7 (explain the role of the different types of software in computer operation). NOT YET checked against textbook for depth."
---

## Lesson

**Software** is the set of programs telling the hardware what to do. Hardware
without software does nothing at all; the machine is general-purpose, and the
program is what makes it a word processor, a till or a games console.

Software divides into two kinds: **system software**, which runs the computer,
and **application software**, which does the user's work.

### System software

System software manages the computer itself. It is what the machine needs in
order to be usable — not what the user bought it for.

#### The operating system

The **operating system (OS)** is the most important program on the computer. It
starts when the machine is switched on and manages everything else. Windows,
macOS, Linux, Android and iOS are operating systems.

Its functions:

| Function | What it means |
|---|---|
| **Memory management** | Deciding which program gets which part of RAM, and reclaiming it afterwards |
| **Process/CPU management** | Sharing processor time among running programs |
| **File management** | Organising files and folders on storage; creating, saving, deleting, renaming |
| **Device management** | Controlling peripherals through their drivers |
| **Security** | User accounts, passwords, permissions |
| **User interface** | Providing the means by which the user gives commands |
| **Error handling** | Detecting problems and reporting them |

The point to grasp: **every program runs on top of the operating system.** A
word processor does not write to the disc itself — it asks the operating
system to, which is why the same word processor can work with any disc the OS
understands.

#### Utility programs

**Utilities** perform maintenance tasks, keeping the computer working well:

- **Antivirus** — detects and removes malware.
- **Backup** — copies files so they can be restored.
- **File compression** — reduces file size for storage or sending.
- **Disc defragmenter** — reorganises a hard disc so files are stored
  contiguously, speeding access. (Not used on SSDs, which have no moving
  parts.)
- **Disc clean-up** — removes temporary and unneeded files.
- **Firewall** — controls traffic entering and leaving over a network.
- **Diagnostic tools** — check the hardware and report faults.

#### Translators

**Translators** convert program code into machine language: **compilers**,
**interpreters** and **assemblers**, covered in Section 8.

#### Device drivers

A **driver** is a small program telling the operating system how to work with a
particular piece of hardware. Plug in a new printer and its driver is what
allows the OS — and therefore every program — to use it.

### Application software

**Application software** does work the user cares about. This is what the
computer was bought for.

#### General-purpose

Software useful for many different tasks, not tied to one job:

| Type | Example use |
|---|---|
| Word processor | Letters, reports |
| Spreadsheet | Calculations, budgets |
| Database management | Records and queries |
| Presentation | Slides |
| Web browser | Viewing web pages |
| Graphics and photo editing | Images |
| Email client | Messages |

A **software suite** or **integrated package** bundles several of these so they
share an interface and exchange data easily — Microsoft Office, Google
Workspace, LibreOffice.

#### Special-purpose (specialised)

Written for one particular kind of task: accounting packages, payroll,
computer-aided design, hotel booking systems, school management systems. It
does one job and does it thoroughly.

#### Custom-written against off-the-shelf

This distinction is examined.

**Off-the-shelf (general-purpose) software** is bought ready-made:

- Cheap — the cost is shared among thousands of buyers.
- Available immediately.
- Well tested, because thousands of people use it.
- Help, training and books are easy to find.
- **But** it may not do exactly what the organisation needs, and may include a
  great deal it does not.

**Custom-written (bespoke, tailor-made)** software is commissioned for one
organisation:

- Does exactly what is wanted, and nothing else.
- Can fit existing procedures rather than forcing changes.
- **But** it is expensive, takes a long time to produce, may contain faults
  because only one organisation is using it, and support depends on the
  developer who wrote it.

The rule of thumb: buy off-the-shelf unless your requirement is genuinely
unusual. Most organisations' needs are less special than they believe.

### Freeware, shareware and open source

| Term | Meaning |
|---|---|
| **Proprietary / commercial** | Bought; the source code is not provided |
| **Freeware** | Free to use; source code not provided |
| **Shareware** | Free to try for a period, then paid for |
| **Open source** | Source code available, and may be modified and shared |
| **Public domain** | No copyright; anyone may do anything with it |

Note that **free** and **open source** are not the same. Freeware costs
nothing but is closed; open-source software provides the code, and some of it
is sold.

### Firmware

**Firmware** sits between hardware and software: program code stored in ROM on
a device, controlling that device. The instructions that run when a computer
starts up are firmware, as is the program inside a washing machine or a router.

It is called firm because it is more permanent than software and less permanent
than hardware — it can be updated, but not as casually as installing a program.

### How the layers stack

```
        The user
            |
    Application software     word processor, browser
            |
    Operating system         memory, files, devices, security
            |
    Utilities and drivers
            |
        Hardware
```

A user tells the application what they want; the application asks the operating
system; the operating system works the hardware. Each layer speaks only to the
ones next to it, and that is why a program written years ago still runs on new
hardware — the layers below it changed, the interface between them did not.

## Flashcards

### 1.7 | What is software?
The set of programs telling the hardware what to do.

### 1.7 | Name the two main categories of software.
**System software**, which runs the computer, and **application software**,
which does the user's work.

### 1.7 | What is an operating system?
The program that starts when a computer is switched on and manages all its
resources — memory, processor time, files, devices, security and the user
interface.

### 1.7 | Name five functions of an operating system.
Any five: memory management; process or CPU management; file management; device
management; security; providing the user interface; error handling.

### 1.7 | Why does a word processor not write to the disc itself?
It asks the **operating system** to. That is why the same program works with
any storage the operating system understands.

### 1.7 | What are utility programs? Name four.
Programs performing maintenance tasks — antivirus, backup, file compression,
disc defragmenter, disc clean-up, firewall, diagnostic tools.

### 1.7 | What does a disc defragmenter do, and why is it not used on an SSD?
It reorganises a hard disc so files are stored contiguously, speeding access.
An SSD has no moving parts, so there is nothing to speed up.

### 1.7 | What is a device driver?
A small program telling the operating system how to work with a particular
piece of hardware, such as a printer.

### 1.7 | Distinguish between general-purpose and special-purpose application software.
**General-purpose** software is useful for many tasks — a word processor or
spreadsheet. **Special-purpose** software is written for one kind of task, such
as payroll or hotel booking.

### 1.7 | Give three advantages of off-the-shelf software.
Any three: cheaper, since the cost is shared among many buyers; available
immediately; well tested by thousands of users; training and support are easy
to find.

### 1.7 | Give three disadvantages of custom-written software.
Any three: expensive; takes a long time to produce; may contain undiscovered
faults because few people use it; support depends on the developer who wrote
it.

### 1.7 | When is custom-written software the right choice?
When the organisation's requirement is genuinely unusual and no existing
package does the job.

### 1.7 | Distinguish between freeware and open-source software.
**Freeware** costs nothing but its source code is not provided. **Open-source**
software provides the source code, which may be modified and shared — and some
of it is sold.

### 1.7 | What is shareware?
Software that is free to try for a period, after which it must be paid for.

### 1.7 | What is firmware?
Program code stored in ROM on a device, controlling that device — start-up
instructions, or the program inside a washing machine or router.

## Questions

### 1.7 | mcq | 1 mark | difficulty 1
Which of the following is system software?

- A. A spreadsheet
- B. An operating system
- C. A web browser
- D. A presentation package

**Answer:** B

**Working:** The operating system manages the computer itself. The others are
applications, doing work the user cares about.

### 1.7 | mcq | 1 mark | difficulty 2
Which is **not** a function of an operating system?

- A. Memory management
- B. File management
- C. Calculating a payroll
- D. Device management

**Answer:** C

**Working:** Calculating a payroll is the job of application software. The
operating system manages the computer's resources so that such an application
can run.

### 1.7 | mcq | 1 mark | difficulty 2
A program that compresses files to save storage space is an example of

- A. an operating system
- B. a utility program
- C. custom-written software
- D. firmware

**Answer:** B

**Working:** Utilities perform maintenance tasks that keep the computer working
well — compression, backup, antivirus, defragmentation.

### 1.7 | mcq | 1 mark | difficulty 3
A hotel needs a booking system that matches its own unusual room-pricing rules,
which no existing package supports. The better choice is

- A. off-the-shelf software, because it is cheaper
- B. custom-written software, because it can be made to do exactly what is needed
- C. freeware, because it costs nothing
- D. a spreadsheet, because it is general-purpose

**Answer:** B

**Working:** The requirement is genuinely unusual and no package meets it,
which is exactly the case where the cost and delay of custom software are
justified.

### 1.7 | mcq | 1 mark | difficulty 3
Which statement about freeware and open-source software is correct?

- A. They are the same thing
- B. Freeware costs nothing but its source code is not provided
- C. Open-source software is always free of charge
- D. Freeware may be modified and redistributed

**Answer:** B

**Working:** Freeware is free but closed. Open source is about access to the
code, and some open-source software is sold.

### 1.7 | mcq | 1 mark | difficulty 3
Program code stored in ROM that controls a device such as a router is called

- A. application software
- B. firmware
- C. a utility
- D. an operating system

**Answer:** B

**Working:** Firmware sits between hardware and software — more permanent than
a program, less permanent than the hardware itself, and updatable.

### 1.7 | structured | 10 marks | difficulty 3
A school is setting up a new computer laboratory.

(a) Distinguish between **system software** and **application software**, giving
an example of each. **(4 marks)**

(b) State **four** functions of an operating system. **(4 marks)**

(c) The school needs a student-records system. Give **one** advantage of buying
an off-the-shelf package and **one** advantage of having software written
specially. **(2 marks)**

**Answer:** (a) 1 mark — system software manages and runs the computer itself;
1 mark — an example, such as an operating system, a utility or a driver;
1 mark — application software performs tasks for the user; 1 mark — an example,
such as a word processor or spreadsheet.
(b) 1 mark each, any four: memory management; process or CPU management; file
management; device management; security and user accounts; providing the user
interface; error handling.
(c) 1 mark — off-the-shelf: cheaper, available immediately, or already well
tested; 1 mark — custom-written: it does exactly what the school needs and can
fit the school's own procedures.

**Working:** (a) The examples carry half the marks, so an answer that defines
both categories without naming one of each scores two.

(c) Both sides are wanted. The strongest answers note that most schools' needs
are ordinary enough for a package, and that custom software is justified only
where the requirement is genuinely unusual.
