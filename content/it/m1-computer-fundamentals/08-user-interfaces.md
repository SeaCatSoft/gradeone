---
subject: IT
topic: computer-fundamentals
lesson: user-interfaces
title: Types of User Interface
objectives: ["1.8"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 1.8 (discuss the relative merits of the various types of user interface). NOT YET checked against textbook for depth."
---

## Lesson

A **user interface** is the means by which a person communicates with a
computer — how commands go in and how results come back. It is part of the
operating system's job to provide one.

The objective says "discuss the relative merits", so every interface below
comes with both sides. An answer listing only advantages is half an answer.

### Command line interface (CLI)

The user types commands, and the computer responds with text. There is nothing
on screen but a prompt.

```
copy report.docx D:\backup\
del *.tmp
```

**Advantages**

- **Powerful.** Options and combinations are available that a menu never
  offers.
- **Fast for an expert.** Typing a command beats navigating several menus.
- **Uses few resources** — little memory, no graphics hardware. It will run on
  old or minimal equipment, and over a slow network connection.
- **Automatable.** Commands can be written into a script and run repeatedly,
  which is how system administrators manage hundreds of machines.

**Disadvantages**

- **Hard to learn.** Commands must be memorised; nothing on screen tells you
  what is available.
- **Unforgiving.** A mistyped command fails, or worse, does something you did
  not intend.
- **No visual feedback** or discovery — a beginner cannot explore.

Used by system administrators, programmers and servers.

### Graphical user interface (GUI)

The user interacts with **windows, icons, menus and pointers** — often
abbreviated **WIMP**. Commands are given by clicking rather than typing.

**Advantages**

- **Easy to learn.** Icons and menus show what is available, so a user can
  explore rather than memorise.
- **Consistent.** Programs work alike, so knowledge transfers.
- **Forgiving** — actions can usually be undone, and dialogue boxes confirm
  dangerous ones.
- **Several programs at once**, in separate windows.
- **Suits non-technical users**, which is nearly everyone.

**Disadvantages**

- **Needs more resources** — memory, processing power and graphics hardware.
- **Slower for an expert** than typing a command.
- **Less powerful** — only what the designer provided is available.
- **Harder to automate.**

Used on nearly every personal computer.

### Menu-driven interface

The user is offered a list of options and chooses one, which may lead to
another list. An ATM, a ticket machine and a telephone answering system all
work this way.

**Advantages**

- **Very easy to use.** No commands to remember, and the choices are in front
  of you.
- **Restricts the user to valid options**, so invalid input is impossible.
- **No training required** — important for a machine used by the public.

**Disadvantages**

- **Slow** if the menus are deep — several screens to reach one option.
- **Inflexible**: if what you want is not on a menu, you cannot do it.
- **Frustrating for experienced users**, who must step through the same screens
  every time.

Used where the public operates the machine and only a few operations are
allowed.

### Touch interface

The user touches the screen directly — taps, swipes, pinches. Phones, tablets,
kiosks and modern ticket machines.

**Advantages**

- **Intuitive** — you touch what you want, so it needs no explanation.
- **No separate keyboard or mouse**, which suits public machines where a
  peripheral could be stolen or damaged.
- **Compact**, since the screen is both input and output.

**Disadvantages**

- **Poor for long text entry.** An on-screen keyboard is slower and less
  accurate than a real one, and it covers half the screen.
- **Less precise** than a mouse — fingers are wide, so targets must be large.
- **The screen gets dirty**, and it can be hard to read in bright sunlight.
- **Difficult for users with limited dexterity.**

### Voice (speech) interface

The user speaks; the computer recognises the words and responds. Voice
assistants, in-car systems, dictation, telephone systems.

**Advantages**

- **Hands-free and eyes-free** — usable while driving or carrying something.
- **Fast for dictation**, since speaking is quicker than typing.
- **Valuable accessibility route** for users who cannot use a keyboard, mouse
  or screen.
- **No screen needed at all.**

**Disadvantages**

- **Accuracy suffers** with background noise, accents and unusual words.
- **Not private.** Both command and answer are audible, so it is unsuitable in
  an open office or for confidential matters.
- **Difficult for complex tasks** — describing a layout change aloud is far
  harder than doing it.
- **Raises privacy concerns**, since a device that listens for a command is
  always listening.

### Gesture and other interfaces

**Gesture** interfaces read body movement — games consoles, some vehicle
controls, contactless kiosks. Natural for some tasks, tiring for long use, and
imprecise.

**Form-based** interfaces present fields to complete, used for data entry and
on the web.

**Biometric** input — fingerprint or face — is increasingly the way a device is
unlocked, and is really a special case of input rather than a whole interface.

### Comparing them

| Interface | Ease of learning | Speed for an expert | Resources needed | Flexibility |
|---|---|---|---|---|
| Command line | Poor | Best | Least | Greatest |
| GUI | Good | Moderate | High | Moderate |
| Menu-driven | Best | Poor | Low | Least |
| Touch | Very good | Moderate | High | Moderate |
| Voice | Very good | Variable | High | Low for complex work |

Read across the first two columns: **the easiest interfaces to learn are the
slowest to use well, and the fastest are the hardest to learn.** That trade-off
is the heart of this objective, and stating it earns marks in a discussion
question.

### Choosing for a situation

| Situation | Interface | Why |
|---|---|---|
| A bank ATM | Menu-driven or touch | Public users, no training, only a few valid operations |
| Managing a server | Command line | Powerful, scriptable, works over a slow connection |
| A home computer | GUI | Easy to learn, several programs at once |
| A phone | Touch | Compact; the screen is both input and output |
| A driver navigating | Voice | Hands and eyes are needed for driving |
| A user who cannot see the screen | Voice | No display required |
| A supermarket self-checkout | Touch with a menu | Public use, limited set of operations, nothing to steal |

## Flashcards

### 1.8 | What is a user interface?
The means by which a person communicates with a computer — how commands are
given and results presented.

### 1.8 | What does WIMP stand for?
**Windows, Icons, Menus, Pointers** — the elements of a graphical user
interface.

### 1.8 | Give three advantages of a command line interface.
Any three: it is powerful, offering options a menu does not; fast for an expert;
uses very few resources; commands can be scripted and automated.

### 1.8 | Give two disadvantages of a command line interface.
Commands must be memorised, so it is hard to learn; a mistyped command fails or
does something unintended; there is no visual feedback for a beginner.

### 1.8 | Give three advantages of a GUI.
Any three: easy to learn because options are visible; consistent between
programs; forgiving, with undo and confirmation; several programs can run in
separate windows.

### 1.8 | Give two disadvantages of a GUI.
It needs far more memory and processing power than a command line; it is slower
for an expert and harder to automate.

### 1.8 | Why is a menu-driven interface suitable for an ATM?
The public uses it without training, the choices are visible, and it restricts
users to the few valid operations, making invalid input impossible.

### 1.8 | Give two disadvantages of a menu-driven interface.
It is slow when the menus are deep, and it is inflexible — anything not on a
menu cannot be done.

### 1.8 | Give two disadvantages of a touch interface.
Any two: poor for long text entry; less precise than a mouse; the screen gets
dirty and can be hard to read in sunlight; difficult for users with limited
dexterity.

### 1.8 | Give two advantages of a voice interface.
Any two: hands-free and eyes-free, so usable while driving; faster than typing
for dictation; accessible to users who cannot use a keyboard or screen; no
display needed.

### 1.8 | Give two disadvantages of a voice interface.
Any two: accuracy suffers with background noise and accents; it is not private,
since commands and answers are audible; complex tasks are hard to describe
aloud; always-listening devices raise privacy concerns.

### 1.8 | State the central trade-off between interface types.
The interfaces easiest to learn are the slowest to use well; the fastest and
most powerful are the hardest to learn.

> Hint: compare a menu with a command line.

### 1.8 | Which interface suits a system administrator managing many servers, and why?
A **command line** — it is powerful, uses few resources over a slow connection,
and commands can be scripted to run on many machines at once.

## Questions

### 1.8 | mcq | 1 mark | difficulty 1
What do the letters WIMP stand for?

- A. Windows, Internet, Menus, Pointers
- B. Windows, Icons, Menus, Pointers
- C. Wireless, Icons, Mouse, Printers
- D. Windows, Input, Memory, Processing

**Answer:** B

**Working:** Windows, Icons, Menus and Pointers are the four elements of a
graphical user interface.

### 1.8 | mcq | 1 mark | difficulty 2
Which interface is most suitable for a bank ATM used by the general public?

- A. Command line
- B. Menu-driven or touch
- C. Voice
- D. Gesture

**Answer:** B

**Working:** The public needs no training, the options are visible, and the
user is restricted to the few operations the bank allows. A command line would
be unusable and voice would not be private.

### 1.8 | mcq | 1 mark | difficulty 2
Which is an advantage of a command line interface over a GUI?

- A. It is easier for a beginner to learn
- B. It uses fewer system resources and can be scripted
- C. It shows the available options on screen
- D. It allows several programs to be seen at once

**Answer:** B

**Working:** Low resource use and automation are the CLI's real strengths. The
other three options describe a GUI.

### 1.8 | mcq | 1 mark | difficulty 3
A driver wants to set a destination without taking their hands off the wheel.
The most suitable interface is

- A. touch
- B. command line
- C. voice
- D. menu-driven

**Answer:** C

**Working:** A voice interface is hands-free and eyes-free, which is exactly
what driving requires. Every other option needs a hand and a glance.

### 1.8 | mcq | 1 mark | difficulty 3
Which statement best describes the trade-off between interface types?

- A. Graphical interfaces are better in every way
- B. The interfaces easiest to learn tend to be the slowest for an expert
- C. Command line interfaces are easier to learn than menus
- D. All interfaces require the same resources

**Answer:** B

**Working:** A menu is easy to learn and slow to use repeatedly; a command line
is hard to learn and fast once known. Neither is better in general — it depends
on who is using it and for what.

### 1.8 | mcq | 1 mark | difficulty 3
Which is a genuine disadvantage of a touch interface?

- A. It requires a separate keyboard and mouse
- B. It is poor for entering long passages of text
- C. It cannot display graphics
- D. It cannot be used by the public

**Answer:** B

**Working:** An on-screen keyboard is slower and less accurate than a real one
and covers much of the screen. Needing no separate peripherals is an advantage,
not a drawback.

### 1.8 | structured | 10 marks | difficulty 3
A supermarket is installing self-service checkouts for customers, and also
needs a way for its technical staff to manage the store's servers remotely over
a slow connection.

(a) Name the most suitable interface for the self-service checkouts, and give
**two** reasons. **(3 marks)**

(b) Name the most suitable interface for managing the servers, and give **two**
reasons. **(3 marks)**

(c) State **two** disadvantages of a graphical user interface. **(2 marks)**

(d) Discuss **one** situation in which a voice interface would be preferable to
a touch interface. **(2 marks)**

**Answer:** (a) 1 mark — a touch interface, or a menu-driven one; 2 marks for
any two reasons: customers need no training; the options presented restrict
them to valid operations; there is no separate keyboard or mouse to be stolen
or damaged; it is compact.
(b) 1 mark — a command line interface; 2 marks for any two reasons: it uses
very few resources, so it works over a slow connection; it is powerful and
offers options a graphical tool may not; commands can be scripted to run on
many machines; experienced staff work faster with it.
(c) 1 mark each, any two: it requires much more memory and processing power; it
is slower than a command line for an expert; it is harder to automate; only the
options the designer provided are available.
(d) 2 marks for a developed answer, such as: a driver setting a destination, or
a user carrying something, because a voice interface is hands-free and
eyes-free while a touchscreen demands both; or a user who cannot see the
screen, because voice needs no display.

**Working:** (b) The slow connection in the question is the clue. A graphical
remote session sends a whole screen image; a command line sends a line of text.

(d) The mark scheme wants a situation *and* the reason it favours voice, not a
general list of voice advantages.
