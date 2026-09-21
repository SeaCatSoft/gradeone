---
subject: IT
topic: ict-impact
lesson: security-and-misuse
title: Security, Cybersecurity and Computer Misuse
objectives: ["3.1"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 3.1 (outline the concepts of computer security, cybersecurity and computer misuse). NOT YET checked against textbook for depth."
---

## Lesson

Three related terms, and the syllabus expects them to be told apart.

**Computer security** is protecting computer systems and the data in them from
harm — including physical harm. Locks, guards, fire suppression, backups,
passwords.

**Cybersecurity** is the part of computer security concerned with threats
arriving **over a network**: hacking, malware, phishing, denial of service.

**Computer misuse** is using a computer system for a purpose that is wrong or
illegal — whether by an outsider or by someone entitled to use it.

The relationship: cybersecurity is a **subset** of computer security. A flood
destroying a server room is a computer security failure and not a cybersecurity
one; a stolen password is both.

### What security protects — the CIA triad

Security has three goals, and naming them structures any answer:

**Confidentiality** — only those authorised can see the data. Broken by a data
breach.

**Integrity** — the data is accurate and has not been altered without
authorisation. Broken by someone changing a grade or an account balance.

**Availability** — the system is there when it is needed. Broken by a denial of
service attack, a power failure, or ransomware.

A good security question can usually be answered by asking which of the three
is threatened.

### Physical threats

Security is not only about networks:

- **Theft** of computers, phones and drives.
- **Fire, flood and hurricane damage.**
- **Power failure or surge**, corrupting data or destroying hardware.
- **Accidental damage**, spillage, dropping.
- **Unauthorised physical access** — walking up to an unlocked machine.
- **Hardware failure** — discs stop.

### Malware

**Malware** is any software written to do harm. The types are examined
individually.

**Virus** — attaches itself to a program or file and spreads when that file is
run or shared. It needs a **host** and a user action.

**Worm** — spreads **by itself** across a network, with no host file and no
user action. This is the examined distinction: **a virus needs a host and a
user; a worm spreads on its own.**

**Trojan horse** — disguised as something useful. The user installs it
willingly, believing it is a game or a utility, and it does something else.
It does not spread by itself.

**Ransomware** — encrypts the victim's files and demands payment for the key.
It attacks **availability**, and it is why an off-site backup matters: with a
good backup, you restore; without one, you pay or lose everything.

**Spyware** — secretly records what the user does and reports it.

**Keylogger** — records keystrokes, capturing passwords and card numbers.

**Adware** — displays unwanted advertisements.

**Rootkit** — hides itself and other malware deep in the system.

**Botnet** — a network of infected machines controlled remotely, used to send
spam or mount attacks. The owners usually have no idea.

### Attacks that use people

The technically strongest system can be defeated by persuading someone to open
the door.

**Social engineering** — manipulating people into giving away information or
access. It is the umbrella term for everything below, and it works because
people are helpful, busy and reluctant to challenge apparent authority.

**Phishing** — fraudulent emails or messages pretending to be from a bank,
employer or service, asking the victim to "confirm" credentials or click a
link to a fake site.

**Spear phishing** — phishing aimed at one named person, using details about
them to be convincing. Far more effective.

**Vishing and smishing** — the same by voice call and by SMS.

**Pharming** — redirecting a user to a fake website even when they typed the
correct address, by corrupting DNS.

**Shoulder surfing** — watching someone type a PIN or password.

**Dumpster diving** — searching discarded paper for useful information.

**Pretexting** — inventing a scenario: "I'm from IT, I need your password to
fix your account." No legitimate IT department ever asks for it.

### Other forms of misuse

**Hacking** — gaining unauthorised access to a system.

**Identity theft** — using someone's personal information to impersonate them,
usually for financial gain.

**Denial of service (DoS)** — flooding a system with requests so it cannot
serve genuine users. A **distributed** denial of service (DDoS) does it from
many machines at once, usually a botnet.

**Data theft and breaches** — copying confidential data without authorisation.

**Software piracy** — copying or using software in breach of its licence.

**Copyright infringement** — copying music, film, books or images without
permission.

**Plagiarism** — presenting someone else's work as your own.

**Cyberbullying** — using electronic communication to harass or intimidate.

**Cyberstalking** — persistent unwanted monitoring or contact.

**Industrial espionage** — stealing a competitor's commercial secrets.

**Fraud** — deception for gain, including fake online shops and advance-fee
schemes.

**Propagation of inappropriate or false material.**

### The insider

Not all misuse comes from outside. An employee may copy customer data, alter
records, install unlicensed software, or let someone in.

Insiders are difficult to defend against precisely because they are supposed to
be there — which is the argument for **access levels**: each person is given
access to what their job requires and nothing more. A clerk who cannot reach
the payroll file cannot leak it.

### Computer misuse and the law

Most countries, including those in the Caribbean, have legislation on computer
misuse and cybercrime. Typical offences:

- Unauthorised access to a computer system.
- Unauthorised access with intent to commit a further offence.
- Unauthorised modification of data.
- Interfering with a system's operation.
- Making or supplying tools for these purposes.

Two points that regularly surprise students: **unauthorised access is an
offence even if nothing is changed and no harm is done** — looking is enough;
and **data protection law** separately obliges organisations to keep personal
data secure and use it only for the stated purpose.

## Flashcards

### 3.1 | Define computer security.
Protecting computer systems and the data in them from harm, including physical
harm — theft, fire, power failure — as well as electronic threats.

### 3.1 | Define cybersecurity, and state how it relates to computer security.
Protection against threats arriving over a network — hacking, malware,
phishing. It is a **subset** of computer security.

### 3.1 | Define computer misuse.
Using a computer system for a purpose that is wrong or illegal, whether by an
outsider or by someone entitled to use the system.

### 3.1 | Name the three goals of security.
**Confidentiality** (only the authorised can see it), **integrity** (it has not
been altered), **availability** (it is there when needed).

### 3.1 | Which security goal does ransomware attack?
**Availability** — the data still exists but cannot be used until it is
decrypted.

### 3.1 | Distinguish between a virus and a worm.
A **virus** attaches to a host file and needs a user action to spread. A
**worm** spreads by itself across a network with no host and no user action.

> Hint: which one needs you to do something?

### 3.1 | What is a Trojan horse?
Malware disguised as something useful, which the user installs willingly. It
does not spread by itself.

### 3.1 | What is ransomware, and what is the best defence?
Malware that encrypts the victim's files and demands payment for the key. The
best defence is a recent **off-site backup**, which allows restoring instead of
paying.

### 3.1 | What is a keylogger?
Malware that records keystrokes, capturing passwords and card numbers as they
are typed.

### 3.1 | What is a botnet?
A network of infected machines controlled remotely, used to send spam or mount
attacks — usually without their owners' knowledge.

### 3.1 | What is social engineering?
Manipulating people into giving away information or access, rather than
defeating the technology. It works because people are helpful, busy and
reluctant to challenge apparent authority.

### 3.1 | What is phishing?
Fraudulent messages pretending to be from a trusted organisation, asking the
victim to confirm credentials or follow a link to a fake site.

### 3.1 | How does spear phishing differ from ordinary phishing?
It is aimed at one named person and uses details about them, which makes it far
more convincing.

### 3.1 | What is pharming?
Redirecting a user to a fake website even when they typed the correct address,
by corrupting DNS.

### 3.1 | What is a denial of service attack?
Flooding a system with requests so that it cannot serve genuine users. A
**distributed** attack does this from many machines at once.

### 3.1 | Why are insider threats particularly hard to defend against?
The person is supposed to have access. The defence is **access levels** —
giving each person only what their job requires.

### 3.1 | Is unauthorised access an offence if nothing is changed?
Yes. Under most computer misuse legislation, gaining access without
authorisation is an offence in itself, whether or not any harm is done.

## Questions

### 3.1 | mcq | 1 mark | difficulty 2
Which statement correctly relates cybersecurity to computer security?

- A. They are the same thing
- B. Cybersecurity is a subset of computer security, covering network-borne
  threats
- C. Computer security is a subset of cybersecurity
- D. Neither includes physical threats

**Answer:** B

**Working:** Computer security is the broader term and includes physical
threats such as theft and fire. Cybersecurity covers what arrives over a
network.

### 3.1 | mcq | 1 mark | difficulty 2
What is the key difference between a virus and a worm?

- A. A virus spreads over a network; a worm needs a host file
- B. A worm spreads by itself; a virus needs a host file and a user action
- C. A virus is harmless; a worm is not
- D. There is no difference

**Answer:** B

**Working:** The worm's ability to propagate unaided is what makes it spread so
much faster than a virus.

### 3.1 | mcq | 1 mark | difficulty 2
A user downloads what appears to be a free game, and it secretly installs
software that records their keystrokes. The disguised program is

- A. a worm
- B. a Trojan horse
- C. a firewall
- D. a botnet

**Answer:** B

**Working:** A Trojan horse is disguised as something useful and is installed
willingly by the user. What it installed is a keylogger.

### 3.1 | mcq | 1 mark | difficulty 3
A hospital's files are encrypted and a payment is demanded to restore them.
Which security goal has been attacked, and by what?

- A. Confidentiality, by spyware
- B. Availability, by ransomware
- C. Integrity, by a worm
- D. Availability, by phishing

**Answer:** B

**Working:** The data has not been stolen or altered — it simply cannot be
used, which is availability. Ransomware is the attack, and a recent off-site
backup is the defence.

### 3.1 | mcq | 1 mark | difficulty 3
An employee receives an email apparently from the IT department asking them to
confirm their password by following a link. This is

- A. pharming
- B. phishing
- C. a denial of service attack
- D. shoulder surfing

**Answer:** B

**Working:** A fraudulent message impersonating a trusted party to obtain
credentials is phishing. No legitimate IT department asks for a password.

### 3.1 | mcq | 1 mark | difficulty 3
Which measure best reduces the risk of misuse by employees?

- A. Installing antivirus software
- B. Giving each employee access only to what their job requires
- C. Using a firewall
- D. Encrypting the internet connection

**Answer:** B

**Working:** Access levels limit what an insider can reach, so a clerk who
cannot open the payroll file cannot leak it. The other three defend against
outside threats.

### 3.1 | structured | 10 marks | difficulty 3
A bank is reviewing the threats to its computer systems.

(a) Distinguish between **computer security** and **cybersecurity**.
**(2 marks)**

(b) Name and describe **three** types of malware the bank should guard against.
**(6 marks)**

(c) Explain what is meant by **social engineering**, and why it can defeat a
technically secure system. **(2 marks)**

**Answer:** (a) 1 mark — computer security is protecting systems and data from
harm of all kinds, including physical threats such as theft, fire and power
failure; 1 mark — cybersecurity is the part concerned with threats arriving
over a network, such as hacking, malware and phishing.
(b) 2 marks each for any three: **virus** — attaches to a host file and spreads
when it is run or shared; **worm** — spreads by itself across a network with no
host file or user action; **Trojan horse** — disguised as something useful, so
the user installs it willingly; **ransomware** — encrypts the victim's files
and demands payment; **spyware** — secretly records what the user does;
**keylogger** — records keystrokes to capture passwords.
(c) 1 mark — manipulating people into giving away information or access rather
than defeating the technology; 1 mark — no technical measure prevents an
authorised person being persuaded to hand over their password or let someone
in.

**Working:** (b) The name alone earns one mark; how it spreads or what it does
earns the second. The virus-and-worm pair is the one examiners most often ask
to be distinguished.

(c) The second mark is the important idea: security is only as strong as the
people operating it, which is why staff training appears in every list of
countermeasures.
