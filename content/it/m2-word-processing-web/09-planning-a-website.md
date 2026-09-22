---
subject: IT
topic: word-processing-web
lesson: planning-a-website
title: Planning a Website
objectives: ["4.9"]
est_minutes: 20
status: draft
source: "Original prose written against syllabus objective 4.9 (plan a website structure and organization of page). NOT YET checked against textbook for depth."
---

## Lesson

A **website** is a collection of related web pages held under one address. A
**web page** is one document within it, and the **home page** is the one
visitors arrive at first.

Building a site without planning it produces the same result as programming
without an algorithm: something that works, in a shape nobody can navigate or
extend.

### Start with purpose and audience

Two questions come before any design decision.

**What is the site for?** To sell something, to inform, to teach, to take
bookings, to publish news. A site with no stated purpose cannot be judged
finished, because nothing says what it was meant to do.

**Who is it for?** A site for primary-school children, one for parents and one
for suppliers look nothing alike. The audience decides the reading level, the
amount of text, the colours, and how much explanation each page needs.

Everything that follows is answerable only once these two are settled.

### Deciding the content

List the information the site must carry, then group related items. Each group
becomes a page or a section.

A school site might need: about the school, admissions, academic programmes,
news and events, staff, photographs, and contact details. That list is already
close to a menu.

The test of a grouping is whether a visitor could guess which page holds what
they want. If you have to explain the grouping, it is wrong.

### Site structure

The **structure** is how the pages relate to one another. Three arrangements
are standard.

<svg viewBox="0 0 300 250" role="img" aria-label="Three website structures. Linear: four pages in a row, each linking to the next. Hierarchical: a home page at the top branching to three pages below it. Webbed: four pages connected to one another in several directions.">
  <g font-size="10" fill="currentColor" font-weight="bold">
    <text x="4" y="16">Linear</text>
    <text x="4" y="76">Hierarchical</text>
    <text x="4" y="166">Webbed</text>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.3">
    <rect x="8" y="26" width="50" height="20" rx="3"/>
    <rect x="84" y="26" width="50" height="20" rx="3"/>
    <rect x="160" y="26" width="50" height="20" rx="3"/>
    <rect x="236" y="26" width="50" height="20" rx="3"/>
    <rect x="120" y="86" width="60" height="20" rx="3"/>
    <rect x="20" y="136" width="56" height="20" rx="3"/>
    <rect x="122" y="136" width="56" height="20" rx="3"/>
    <rect x="224" y="136" width="56" height="20" rx="3"/>
    <rect x="15" y="186" width="54" height="20" rx="3"/>
    <rect x="123" y="176" width="54" height="20" rx="3"/>
    <rect x="123" y="216" width="54" height="20" rx="3"/>
    <rect x="231" y="196" width="54" height="20" rx="3"/>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <line x1="58" y1="36" x2="79" y2="36"/>
    <line x1="134" y1="36" x2="155" y2="36"/>
    <line x1="210" y1="36" x2="231" y2="36"/>
    <line x1="150" y1="106" x2="150" y2="121"/>
    <line x1="48" y1="121" x2="252" y2="121"/>
    <line x1="48" y1="121" x2="48" y2="136"/>
    <line x1="150" y1="121" x2="150" y2="136"/>
    <line x1="252" y1="121" x2="252" y2="136"/>
    <line x1="69" y1="192" x2="123" y2="186"/>
    <line x1="69" y1="200" x2="123" y2="222"/>
    <line x1="150" y1="196" x2="150" y2="216"/>
    <line x1="177" y1="186" x2="231" y2="202"/>
    <line x1="177" y1="226" x2="231" y2="212"/>
  </g>
  <g fill="currentColor">
    <polygon points="76,32 76,40 83,36"/>
    <polygon points="152,32 152,40 159,36"/>
    <polygon points="228,32 228,40 235,36"/>
  </g>
</svg>

**Linear** — pages in a fixed order, each leading to the next. Right where the
order genuinely matters: a tutorial, a set of instructions, a checkout process.
Wrong for most sites, because a visitor who wants page four must pass through
pages one to three.

**Hierarchical (tree)** — a home page branching into sections, each of which
may branch again. This is the structure of nearly every real website, because
it matches how people expect to find things: general at the top, specific
further down.

**Webbed (network)** — pages linked to one another in many directions, with no
fixed path. It offers freedom and it is easy to get lost in, so it is used
*within* a hierarchy — related articles linking to one another — rather than
as the whole design.

Most real sites are hierarchical with some webbed links across it.

### Depth and breadth

In a hierarchy there is a choice between few menus with many items (**broad**)
and many menus with few items (**deep**).

Deep structures make visitors click repeatedly and guess at each step. The
common guidance is the **three-click rule**: anything important should be
reachable in about three clicks from the home page. It is a rule of thumb
rather than a law, but it is a good check on a structure that has grown too
deep.

### The storyboard

A **storyboard** is a set of sketches, one per page, showing what each page
contains and where the links go. It is drawn on paper before anything is built.

For each page: its title, its main content, its images, its links, and where it
sits in the structure.

Planning this way is cheap. Moving a section on a sketch takes seconds; moving
it once twenty pages link to it takes an afternoon.

A **site map** grows out of the storyboard — a diagram of all the pages and
their links. It is a planning document, and it is often published on the site
too, as a page listing everything for visitors who cannot find what they want.

### Planning a single page

A page has a conventional layout, and following it helps visitors because they
already know it:

- **Header** — the site name or logo, at the top of every page.
- **Navigation** — the menu of main sections, in the same place on every page.
- **Main content** — what this particular page is about.
- **Footer** — contact details, copyright, a link to the site map.

Header, navigation and footer are the same throughout. Only the main content
changes — which is what makes a site feel like one site.

### Consistency and navigation

**Consistency** is the single most valuable property of a plan. The same layout,
the same colours, the same fonts and the same menu in the same place on every
page. A visitor learns the site once, on the first page, and then knows it.

For navigation specifically:

- Every page carries the **main menu**.
- Every page links back to the **home page** — usually through the logo.
- Link text says where it goes. `Admissions` is a good link; `click here` is
  not, and it is useless to anyone using a screen reader.
- Show the visitor **where they are**, by highlighting the current section.
- On a deep site, add **breadcrumbs**: `Home → Programmes → Sixth Form`.
- No page should be an **orphan** — reachable by no link at all.

### Other planning decisions

**File and folder names.** Lower case, no spaces, meaningful:
`admissions.html`, not `Page 2 FINAL.html`. Images in an `images` folder.

**The home page's name.** Usually `index.html`, which is what a web server
serves when no page is named.

**Devices.** Most visitors arrive on a phone, so the design must work at phone
width, not only on a laptop.

**Accessibility.** Alternative text for images, sufficient colour contrast,
text that can be enlarged.

### The planning steps

1. Decide the **purpose** and the **audience**.
2. List and **group the content**.
3. Choose the **structure** and draw the **site map**.
4. **Storyboard** each page.
5. Decide the **common layout** — header, navigation, content, footer.
6. Decide the **look**: colours, fonts, images.
7. Plan the **navigation** and the file names.
8. Build, test on more than one device, and publish.

## Flashcards

### 4.9 | Distinguish between a website, a web page and a home page.
A **website** is a collection of related pages under one address. A **web
page** is one document within it. The **home page** is the page visitors arrive
at first.

### 4.9 | What two questions come before any design decision?
What is the site **for** (its purpose), and **who** is it for (its audience).

### 4.9 | Name the three website structures.
**Linear**, **hierarchical** (tree) and **webbed** (network).

### 4.9 | What is a linear structure, and when is it appropriate?
Pages in a fixed order, each leading to the next. Suitable where the order
genuinely matters — a tutorial or a checkout process.

### 4.9 | What is a hierarchical structure and why is it the commonest?
A home page branching into sections that may branch again. It matches how
people expect to find things: general at the top, specific further down.

### 4.9 | What is the drawback of a webbed structure?
With no fixed path, visitors easily get lost. It works best used within a
hierarchy rather than as the whole design.

### 4.9 | What is the three-click rule?
A guideline that anything important should be reachable in about three clicks
from the home page — a check against a structure that has grown too deep.

### 4.9 | What is a storyboard?
A set of sketches, one per page, showing each page's content, images and links
before anything is built.

### 4.9 | What is a site map?
A diagram of all the pages in a site and the links between them. It is a
planning document and is often published for visitors too.

### 4.9 | Name the four standard areas of a web page layout.
**Header**, **navigation**, **main content** and **footer**.

### 4.9 | Why is consistency across pages so important?
A visitor learns the layout once and then knows the whole site. Changing the
menu or the colours from page to page makes every page a fresh puzzle.

### 4.9 | Why is `click here` poor link text?
It does not say where the link goes, and it is useless to someone using a
screen reader, which may list the links on their own.

### 4.9 | What is an orphan page?
A page that no link points to, so visitors cannot reach it.

### 4.9 | What is usually the file name of a site's home page?
`index.html` — what a web server serves when no particular page is named.

## Questions

### 4.9 | mcq | 1 mark | difficulty 1
The page a visitor arrives at first when entering a website's address is called

- A. the site map
- B. the home page
- C. the index
- D. the storyboard

**Answer:** B

**Working:** The home page is the entry point. A site map is a diagram of the
whole site, and a storyboard is a planning sketch.

### 4.9 | mcq | 1 mark | difficulty 2
Which website structure has a home page branching into sections, which may
branch again?

- A. Linear
- B. Hierarchical
- C. Webbed
- D. Random

**Answer:** B

**Working:** A hierarchy, or tree, runs from general at the top to specific
below, which is why nearly every real site uses it.

### 4.9 | mcq | 1 mark | difficulty 2
An online tutorial must be worked through in a fixed order, one topic after
another. The most suitable structure is

- A. linear
- B. hierarchical
- C. webbed
- D. a single page

**Answer:** A

**Working:** A linear structure enforces the order, which is exactly what a
step-by-step tutorial needs. Elsewhere it would be a nuisance.

### 4.9 | mcq | 1 mark | difficulty 3
Which is the best reason for drawing a storyboard before building a site?

- A. It is required before a domain name can be registered
- B. Changing the design on paper is far cheaper than changing it once built
- C. It makes the pages load faster
- D. It replaces the need to test the site

**Answer:** B

**Working:** Moving a section on a sketch takes seconds; moving it once twenty
pages link to it takes far longer. Planning is cheap precisely because nothing
has been built yet.

### 4.9 | mcq | 1 mark | difficulty 3
A site's navigation menu appears in a different place, with different wording,
on each page. The main problem is that

- A. the pages will not load
- B. visitors must relearn the site on every page
- C. the site cannot be published
- D. the home page becomes an orphan

**Answer:** B

**Working:** Consistency is what lets a visitor learn the layout once. Moving
the menu makes every page a fresh puzzle, even though each page works.

### 4.9 | structured | 10 marks | difficulty 3
A secondary school wants a website carrying information about the school,
admissions, subjects offered, news, staff and contact details.

(a) State **two** questions the designer should answer before making any design
decisions. **(2 marks)**

(b) Name the most suitable structure for this site, and give a reason.
**(2 marks)**

(c) Name and describe **two** planning documents the designer should produce
before building. **(4 marks)**

(d) State **two** features the designer should keep the same on every page.
**(2 marks)**

**Answer:** (a) 1 mark each: what is the purpose of the site; who is the
intended audience.
(b) 1 mark — hierarchical (tree); 1 mark — the content falls into distinct
sections beneath a home page, and visitors expect to move from general to
specific. (Accept: hierarchical with some webbed links between related pages.)
(c) 2 marks each: a **storyboard**, a sketch of each page showing its content,
images and links, drawn before building; a **site map**, a diagram of all the
pages and the links between them, showing the structure.
(d) 1 mark each, any two: the header or logo; the navigation menu, in the same
position; the colour scheme; the fonts; the footer.

**Working:** (b) The reason carries the second mark, and it must refer to this
site: the content naturally groups into sections. A linear structure would
force a parent wanting contact details to pass through the news first.

(d) The point is that only the **main content** should change from page to
page. Everything framing it stays put.
