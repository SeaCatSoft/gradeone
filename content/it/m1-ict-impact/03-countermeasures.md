---
subject: IT
topic: ict-impact
lesson: countermeasures
title: Countermeasures Against Threats
objectives: ["3.3"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 3.3 (describe suitable countermeasures to mitigate effects of identified threats). NOT YET checked against textbook for depth."
---

## Lesson

A **countermeasure** is a step taken to prevent a threat, reduce its effect, or
recover from it.

The objective says "to mitigate the effects of **identified** threats", so an
answer must **match the countermeasure to the threat**. Listing every security
measure you can remember scores poorly; naming the one that addresses the
stated threat, and saying how, scores well.

### Physical countermeasures

Against theft, damage and unauthorised physical access:

- **Locks** on rooms holding servers and equipment.
- **Security guards** and **CCTV**.
- **Access cards or biometric locks**, which also record who entered and when.
- **Alarms.**
- **Cable locks** securing laptops to desks.
- **Fire detection and suppression** designed for computer rooms.
- **An uninterruptible power supply (UPS)**, keeping systems running long
  enough to shut down properly during a power cut, and smoothing surges.
- **Siting equipment sensibly** — not in a basement that floods, not by a
  window.

### Access control

Against unauthorised use, by outsiders and insiders:

**Strong passwords** — long, mixed characters, not reused, not guessable. A
long passphrase beats a short complicated one.

**Two-factor authentication (2FA)** — something you know (a password) plus
something you have (a code on a phone) or something you are (a fingerprint).
This is the single most effective measure against stolen passwords: the
password alone is no longer enough, so phishing it achieves nothing.

**Biometrics** — fingerprint, face or iris, which cannot be lent or forgotten.

**Access levels (user privileges)** — each person given access only to what
their job requires. The defence against insider misuse.

**Automatic lock** after a period of inactivity.

**Audit logs** recording who did what, so misuse can be traced.

**Removing accounts promptly** when staff leave.

### Software and network countermeasures

**Antivirus / anti-malware**, kept **up to date**. Out-of-date antivirus
protects against last year's malware only, so the updating matters as much as
the installing.

**Firewall** — controls traffic entering and leaving the network, blocking what
is not permitted.

**Software updates and patches.** Most successful attacks exploit a weakness
for which a fix already existed. Updating promptly closes the door.

**Encryption** — scrambling data so it is unreadable without the key. It
protects data **in transit** (HTTPS, a VPN) and **at rest** (an encrypted disc
or phone). Its importance is that it makes a breach far less harmful: stolen
data that cannot be read is much less use to a thief.

**VPN** — a virtual private network, encrypting traffic over a public
connection.

**Spam filters** to remove most phishing attempts before anyone sees them.

**Disabling unused services and ports**, to reduce what can be attacked.

### Backup

The countermeasure that matters when everything else has failed.

- **Regular**, and **automatic**, so it does not depend on remembering.
- **Off-site** or in the cloud, because a backup beside the original is
  destroyed with it.
- **Tested.** An untested backup is a hope. Restoring from it is the only way
  to find out whether it works, and organisations discover their backups were
  empty at exactly the wrong moment.
- The **3-2-1 rule**: three copies, on two kinds of media, one off-site.

Backup is the specific answer to **ransomware**: with a recent, tested,
off-site backup you restore and refuse to pay; without one, you pay or lose
everything.

### People

Since social engineering defeats technology by going around it, staff are part
of the defence.

- **Training** to recognise phishing, and to verify unusual requests through a
  known channel rather than by replying.
- **Clear policies** on passwords, data handling, personal devices and internet
  use.
- **A culture in which challenging a stranger is expected**, not rude.
- **Never sharing passwords** — and IT departments never asking for them.
- **Reporting incidents** immediately, without fear of blame. Staff who expect
  punishment hide their mistakes, and a hidden breach grows.

### Recovery

**A disaster recovery plan** — written in advance, stating who does what, in
what order, when a serious incident occurs. Rehearsed, not merely filed.

**Incident response procedures** — isolating affected machines, preserving
evidence, notifying those affected.

**Insurance** against cyber losses.

### Matching countermeasure to threat

This table is the heart of the objective:

| Threat | Countermeasure | Why it works |
|---|---|---|
| Virus or worm | Antivirus, kept updated; firewall | Detects and blocks malicious code |
| Ransomware | Regular tested off-site backups | Restore instead of paying |
| Phishing | Staff training; spam filters; 2FA | People recognise it; 2FA makes a stolen password useless |
| Stolen password | Two-factor authentication | The password alone no longer grants access |
| Hacking | Firewall; updates; strong authentication | Closes the routes in |
| Insider misuse | Access levels; audit logs | Limits reach and makes actions traceable |
| Data theft | Encryption | Stolen data cannot be read |
| Theft of hardware | Locks, CCTV, cable locks; disc encryption | Prevents removal; protects data if it is removed |
| Power failure | UPS; backups | Allows a safe shutdown; data survives |
| Fire or flood | Off-site backup; suppression systems | Data survives loss of the building |
| Denial of service | Filtering; extra capacity; provider protection | Absorbs or blocks the flood |
| Accidental deletion | Backups; access levels; version history | The earlier copy can be restored |

### Defence in depth

No single countermeasure is enough, and a good answer says so.

**Defence in depth** means layering measures so that the failure of one does
not expose everything: a firewall *and* antivirus *and* access levels *and*
training *and* backups. Each layer catches what the previous one missed.

The related idea is that security is about **reducing risk**, not eliminating
it. Perfect security would mean a computer that nobody could use. The aim is
to make an attack difficult enough to be unlikely, and its effects survivable
when it happens anyway — which is precisely what backups are for.

## Flashcards

### 3.3 | What is a countermeasure?
A step taken to prevent a threat, reduce its effect, or recover from it.

### 3.3 | Why must an answer match the countermeasure to the threat?
The objective is about mitigating **identified** threats. Listing every
security measure scores poorly; naming the one that addresses the stated threat
and explaining how scores well.

### 3.3 | Name four physical security countermeasures.
Any four: locks on server rooms; security guards and CCTV; access cards or
biometric locks; alarms; cable locks for laptops; fire suppression; a UPS.

### 3.3 | What is two-factor authentication, and why is it so effective?
Something you know plus something you have or are. A stolen or phished password
alone no longer grants access.

### 3.3 | What are access levels, and which threat do they address?
Giving each user access only to what their job requires. They limit the damage
an **insider** can do.

### 3.3 | Why does antivirus software have to be kept up to date?
Out-of-date antivirus recognises only older malware. New threats appear
constantly, so the updating matters as much as the installing.

### 3.3 | Why do software updates matter for security?
Most successful attacks exploit a weakness for which a fix already existed.
Updating promptly closes the door.

### 3.3 | What does encryption protect against, and how?
Data theft. It scrambles data so it is unreadable without the key, so stolen
data is of little use.

### 3.3 | What is the best countermeasure against ransomware, and why?
A **regular, tested, off-site backup** — you restore your files and refuse to
pay.

### 3.3 | State the three requirements of a good backup.
It must be **regular** (ideally automatic), kept **off-site**, and **tested**
by actually restoring from it.

### 3.3 | Why is an untested backup a hope rather than a countermeasure?
Restoring is the only way to know it works, and organisations discover their
backups were empty at exactly the wrong moment.

### 3.3 | Why is staff training a security countermeasure?
Social engineering defeats technology by going around it. Staff who recognise
phishing and verify unusual requests are part of the defence.

### 3.3 | Why should incident reporting be free of blame?
Staff who expect punishment hide their mistakes, and a hidden breach grows.

### 3.3 | What is a disaster recovery plan?
A written plan, prepared and rehearsed in advance, stating who does what and in
what order when a serious incident occurs.

### 3.3 | What is defence in depth?
Layering countermeasures so that the failure of one does not expose everything
— firewall and antivirus and access levels and training and backups.

### 3.3 | Why is the aim to reduce risk rather than eliminate it?
Perfect security would mean a computer nobody could use. The aim is to make an
attack unlikely and its effects survivable.

## Questions

### 3.3 | mcq | 1 mark | difficulty 2
Which is the most effective countermeasure against **ransomware**?

- A. A firewall
- B. Regular, tested, off-site backups
- C. A strong password
- D. Encryption of the hard disc

**Answer:** B

**Working:** Ransomware attacks availability by encrypting your files. With a
recent backup you restore them and refuse to pay; without one, the other
measures do not help once the attack has succeeded.

### 3.3 | mcq | 1 mark | difficulty 2
A company wants to limit the damage a dishonest employee could do. The most
appropriate measure is

- A. installing antivirus software
- B. setting access levels so each user reaches only what their job requires
- C. using HTTPS on the website
- D. buying a UPS

**Answer:** B

**Working:** The insider already has legitimate access, so perimeter defences
do not help. Restricting reach is what limits the damage.

### 3.3 | mcq | 1 mark | difficulty 3
Why does two-factor authentication protect against phishing?

- A. It prevents the email arriving
- B. The stolen password alone is not enough to gain access
- C. It encrypts the password
- D. It blocks the fake website

**Answer:** B

**Working:** Phishing captures the password. With 2FA the attacker also needs
the second factor, which they do not have — so the phished password is
worthless.

### 3.3 | mcq | 1 mark | difficulty 3
A backup is taken every night to an external drive kept beside the server. What
is the main weakness?

- A. External drives are too slow
- B. A fire, flood or theft would destroy the backup along with the original
- C. Nightly backups are too frequent
- D. External drives cannot store enough

**Answer:** B

**Working:** A backup in the same room shares the original's risks. At least
one copy must be kept elsewhere — the "1" of the 3-2-1 rule.

### 3.3 | mcq | 1 mark | difficulty 3
Which countermeasure most directly reduces the harm if a laptop full of
customer data is stolen?

- A. A cable lock
- B. Encryption of the laptop's disc
- C. Antivirus software
- D. A firewall

**Answer:** B

**Working:** The theft has already happened, so the question is harm reduction.
Encrypted data cannot be read without the key, so the thief gets a laptop
rather than a customer database.

### 3.3 | mcq | 1 mark | difficulty 3
What does "defence in depth" mean?

- A. Using the single strongest available countermeasure
- B. Layering several countermeasures so one failing does not expose everything
- C. Encrypting data twice
- D. Keeping servers underground

**Answer:** B

**Working:** Each layer catches what the previous one missed. No single measure
is sufficient, which is why security is always described as a set.

### 3.3 | structured | 10 marks | difficulty 3
A small business has identified four threats to its systems: malware infection,
phishing emails aimed at staff, theft of laptops containing client data, and
loss of data in a fire.

For each threat, name a suitable countermeasure and explain how it mitigates
that threat:

(a) malware infection **(2 marks)**

(b) phishing emails **(2 marks)**

(c) theft of laptops containing client data **(3 marks)**

(d) loss of data in a fire **(3 marks)**

**Answer:** (a) 1 mark — antivirus software kept up to date (accept a
firewall); 1 mark — it detects and removes malicious code before it can run,
and updating keeps it able to recognise new threats.
(b) 1 mark — staff training (accept spam filters or two-factor authentication);
1 mark — trained staff recognise fraudulent messages and verify unusual
requests through a known channel rather than replying. (Accept for 2FA: a
phished password alone no longer grants access.)
(c) 1 mark — encryption of the laptops' discs; 1 mark — the data cannot be read
without the key, so the thief obtains hardware rather than client data; 1 mark
for a second measure such as cable locks or restricting what is stored locally.
(d) 1 mark — regular backups; 1 mark — kept **off-site** or in the cloud;
1 mark — because a backup stored in the same building would be destroyed by the
same fire. (Credit "tested" as an alternative third point.)

**Working:** Each part needs the countermeasure **and** the mechanism. Naming
encryption in (c) earns one mark; saying that it makes the stolen data
unreadable earns the second.

Part (d) is where the off-site requirement carries the marks. "Take backups" on
its own does not address a fire at all.
