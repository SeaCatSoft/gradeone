---
subject: IT
topic: word-processing-web
lesson: hyperlinks
title: Inserting Hyperlinks
objectives: ["4.11"]
est_minutes: 18
status: draft
source: "Original prose written against syllabus objective 4.11 (insert hyperlinks within different locations of a typical web page). NOT YET checked against textbook for depth."
---

## Lesson

A **hyperlink** is text or an image that takes you somewhere else when clicked.
It is what makes the web a web rather than a pile of separate documents — the
*hypertext* in HyperText Markup Language.

### The anchor element

A link is written with the **anchor** element, `<a>`. Its `href` attribute
("hypertext reference") says where the link goes; the content between the tags
is what the visitor sees and clicks:

```html
<a href="admissions.html">Admissions</a>
```

The word `Admissions` appears on the page; clicking it opens `admissions.html`.

### The four kinds of link

The objective says "within different locations", and these are the four
locations examined.

**1. To another page on the same site — an internal link**

```html
<a href="contact.html">Contact us</a>
```

Just the file name, because the page is in the same folder.

**2. To another website — an external link**

```html
<a href="https://www.cxc.org">CXC website</a>
```

The full address, including `https://`. Leave that out and the browser treats
it as a file on your own site and reports it missing.

**3. To a place within the same page — an internal anchor or bookmark**

Two steps. First give the destination an `id`:

```html
<h2 id="fees">School fees</h2>
```

Then link to it with a `#` in front of that id:

```html
<a href="#fees">Jump to school fees</a>
```

This is how a long page gets a contents list at the top, and how a "back to
top" link works:

```html
<a href="#top">Back to top</a>
```

**4. To an email address — a mailto link**

```html
<a href="mailto:office@greenhill.edu.jm">Email the office</a>
```

Clicking it opens the visitor's email program with the address filled in. Note
that it does not send anything itself — and that publishing an address this way
exposes it to programs that harvest addresses for spam, which is why many sites
use a contact form instead.

| Link to | `href` value |
|---|---|
| Another page on this site | `about.html` |
| Another website | `https://www.cxc.org` |
| A place on this page | `#fees` |
| A place on another page of this site | `fees.html#deadlines` |
| An email address | `mailto:office@school.edu.jm` |
| A file to download | `prospectus.pdf` |

### Relative and absolute paths

An **absolute** path gives the full address, starting with the protocol:
`https://www.greenhill.edu.jm/admissions.html`. It works from anywhere, and it
is what external links need.

A **relative** path gives the location relative to the current page:
`admissions.html`, or `images/logo.png`, or `../index.html` to go up one
folder.

Use **relative paths within your own site**. They keep working when the site is
moved from your computer to the web server, or to a different domain — absolute
ones would all have to be rewritten. This is the reason the answer is relative,
and it is worth stating that way in an examination.

### Images as links

Any content can be a link, including an image:

```html
<a href="index.html">
    <img src="logo.png" alt="Green Hill High School home page">
</a>
```

This is how a logo takes visitors home — a convention so widespread that
visitors try it without being told. The `alt` text should say where the link
goes, since for a screen reader it is the link's only text.

### Link text

Link text is read out of context. Screen readers can list a page's links on
their own, and visitors scan for them, so each one must make sense by itself.

| Poor | Better |
|---|---|
| `Click here` | `Download the prospectus` |
| `More` | `More about our sixth form` |
| `http://www.school.edu.jm/adm.html` | `Admissions` |

Three rules: say where it goes, keep it short, and do not write the raw address
as the text.

### How links look and behave

Browsers style links by default: underlined, blue when unvisited, purple when
visited, and the pointer changes to a hand. CSS can change all of this, but
changing it too far is a mistake — a link nobody recognises as a link does not
get clicked.

`target="_blank"` opens the link in a new tab:

```html
<a href="https://www.cxc.org" target="_blank">CXC website</a>
```

Use it for **external** links, so visitors do not lose your site, and not for
internal ones, where it just accumulates tabs and breaks the back button.

### Navigation bars

A navigation bar is a list of links, repeated identically on every page:

```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="admissions.html">Admissions</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

It is a list because that is what it is, and CSS makes it run across the page.
Every page carries the same one, in the same place — the consistency point from
the planning lesson, made concrete.

### Testing links

A **broken link** is one whose destination does not exist, and it produces the
`404 Not Found` error. The usual causes:

| Cause | Example |
|---|---|
| Misspelt file name | `contect.html` |
| Wrong case | `About.html` when the file is `about.html` — servers are usually case-sensitive |
| Missing folder | `logo.png` when it is in `images/logo.png` |
| Missing `https://` | `www.cxc.org` treated as a local file |
| The other site moved the page | Nothing wrong at your end |

Two of these bite students in particular. A site that works perfectly from your
own computer can break entirely once uploaded, because Windows ignores the
difference between `About.html` and `about.html` and most web servers do not.
And a page that has been moved on someone else's site will break without
warning, which is why external links need re-checking from time to time.

Test **every** link after building, and again after publishing.

## Flashcards

### 4.11 | What is a hyperlink?
Text or an image that takes the visitor somewhere else when clicked.

### 4.11 | Which HTML element creates a hyperlink, and which attribute says where it goes?
The anchor element `<a>`, with the `href` attribute.

### 4.11 | Write a link to a page called `contact.html` on the same site.
```html
<a href="contact.html">Contact us</a>
```

### 4.11 | What must an external link's `href` include that an internal one need not?
The full address including the protocol, `https://`. Without it the browser
looks for a file on your own site.

### 4.11 | How do you link to a place within the same page?
Give the destination an `id`, then link to it with `#` before that id:
`<a href="#fees">` jumps to the element with `id="fees"`.

### 4.11 | How do you create a link that opens the visitor's email program?
`<a href="mailto:office@school.edu.jm">Email us</a>`

### 4.11 | What does `fees.html#deadlines` link to?
A specific place — the element with `id="deadlines"` — on another page of the
same site.

### 4.11 | Distinguish between a relative and an absolute path.
A **relative** path gives the location relative to the current page
(`about.html`). An **absolute** path gives the full address
(`https://www.school.edu.jm/about.html`).

### 4.11 | Why use relative paths for links within your own site?
They keep working when the site is moved to a web server or a different domain.
Absolute paths would all have to be rewritten.

> Hint: what happens when the site changes address?

### 4.11 | How is an image made into a link?
Place the `<img>` element between the opening and closing `<a>` tags. Its `alt`
text should say where the link goes.

### 4.11 | Why is `click here` poor link text?
It does not say where the link goes. Screen readers can list links on their
own, and visitors scan for them, so each must make sense out of context.

### 4.11 | What does `target="_blank"` do, and when should it be used?
Opens the link in a new tab. Use it for **external** links so visitors do not
lose your site; not for internal ones, where it breaks the back button.

### 4.11 | What is a broken link, and what error does it produce?
A link whose destination does not exist. The browser reports `404 Not Found`.

### 4.11 | Give two reasons why a link that worked locally breaks after publishing.
Any two: the file name's capitalisation differs and the server is
case-sensitive; a folder was left out of the path; the file was not uploaded;
an external page has moved.

## Questions

### 4.11 | mcq | 1 mark | difficulty 1
Which HTML element is used to create a hyperlink?

- A. `<link>`
- B. `<a>`
- C. `<href>`
- D. `<url>`

**Answer:** B

**Working:** The anchor element `<a>` creates links. `href` is its attribute,
not an element of its own.

### 4.11 | mcq | 1 mark | difficulty 2
Which `href` value links to a place further down the **same** page?

- A. `fees.html`
- B. `#fees`
- C. `mailto:fees`
- D. `https://fees`

**Answer:** B

**Working:** A `#` followed by an id jumps to the element carrying that id on
the current page. Option A opens a different page.

### 4.11 | mcq | 1 mark | difficulty 2
Which link opens the visitor's email program with the address already filled
in?

- A. `<a href="office@school.edu.jm">Email</a>`
- B. `<a href="mailto:office@school.edu.jm">Email</a>`
- C. `<a href="email:office@school.edu.jm">Email</a>`
- D. `<a href="send:office@school.edu.jm">Email</a>`

**Answer:** B

**Working:** The `mailto:` prefix tells the browser to hand the address to the
email program. Without it, the browser looks for a file of that name.

### 4.11 | mcq | 1 mark | difficulty 3
Why should links within your own site use relative rather than absolute paths?

- A. Relative paths load faster
- B. They keep working if the site is moved to a different server or domain
- C. Absolute paths are not supported by browsers
- D. Relative paths can link to other websites

**Answer:** B

**Working:** A relative path describes where a file is in relation to the
current page, so moving the whole site keeps every link valid. Absolute paths
name the old address and would all need rewriting.

### 4.11 | mcq | 1 mark | difficulty 3
A site works perfectly on the student's computer, but after uploading, a link
to `About.html` gives `404 Not Found`. The file on the server is `about.html`.
The most likely cause is that

- A. the file did not upload
- B. the server is case-sensitive and the link's capitalisation does not match
- C. the link needs `https://` added
- D. `.html` is not a valid extension

**Answer:** B

**Working:** Windows treats `About.html` and `about.html` as the same file;
most web servers do not. This is why a site can work locally and break entirely
once published.

### 4.11 | mcq | 1 mark | difficulty 2
Which is the best text for a link leading to the school's prospectus?

- A. `Click here`
- B. `More`
- C. `Download the prospectus`
- D. `http://www.school.edu.jm/pros.pdf`

**Answer:** C

**Working:** It says where the link goes and makes sense read on its own, which
matters because screen readers can list a page's links separately.

### 4.11 | structured | 10 marks | difficulty 3
A school website has pages `index.html`, `about.html` and `fees.html`, all in
the same folder. The `fees.html` page is long and has a section headed
`Payment deadlines`.

(a) Write the HTML for a link on `index.html` to the about page, with the link
text `About our school`. **(2 marks)**

(b) Write the HTML for a link to the CXC website at `www.cxc.org`. **(2 marks)**

(c) Describe the **two** steps needed to create a link from the top of
`fees.html` to its `Payment deadlines` section. **(3 marks)**

(d) State **one** reason for using `target="_blank"` on the CXC link but not on
the about link. **(1 mark)**

(e) After publishing, the link to `about.html` gives a `404` error although the
file was uploaded. State **two** possible causes. **(2 marks)**

**Answer:** (a) 2 marks — 1 for the correct `href`, 1 for the correct link text
between the tags:

```html
<a href="about.html">About our school</a>
```

(b) 2 marks — 1 for the anchor, 1 for including `https://`. Deduct the second
mark if the protocol is missing:

```html
<a href="https://www.cxc.org">CXC website</a>
```

(c) 3 marks: give the heading an id (2 marks), then link to it with a `#` and
that id (1 mark):

```html
<h2 id="deadlines">Payment deadlines</h2>

<a href="#deadlines">Payment deadlines</a>
```

(d) It is an external site, so opening it in a new tab keeps the school's own
site open behind it — 1 mark.
(e) 1 mark each, any two: the capitalisation of the file name does not match
and the server is case-sensitive; the file name is misspelt in the link; the
file is in a different folder from the one the link assumes.

**Working:** (b) The missing `https://` is the classic error: without it the
browser looks for a local file called `www.cxc.org` and reports it missing.

(c) Both halves are needed. An `href="#deadlines"` with no element carrying
that id goes nowhere.
