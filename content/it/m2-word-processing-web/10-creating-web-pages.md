---
subject: IT
topic: word-processing-web
lesson: creating-web-pages
title: Creating Simple Web Pages
objectives: ["4.10"]
est_minutes: 24
status: draft
source: "Original prose written against syllabus objective 4.10 (create simple web pages using a variety of design features). HTML is used for illustration; the syllabus does not require a particular authoring tool. NOT YET checked against textbook for depth."
---

## Lesson

A web page is a text file containing **HTML** — HyperText Markup Language. The
browser reads the HTML and works out what to display.

Pages can be produced by typing HTML directly, or with a **WYSIWYG** editor
("what you see is what you get") which lets you lay the page out visually and
writes the HTML for you. Knowing some HTML is worth it either way: every editor
eventually produces something you need to look underneath.

### Tags and elements

HTML marks up text with **tags**, written in angle brackets. Most come in
pairs — an opening tag and a closing tag with a slash — and the pair plus its
contents is an **element**:

```html
<p>This is a paragraph.</p>
```

A few elements have no content and no closing tag, such as the line break
`<br>` and the image `<img>`.

Tags may carry **attributes**, which give extra information as
`name="value"`:

```html
<img src="logo.png" alt="School logo">
```

### The skeleton of a page

Every page has the same frame:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Green Hill High School</title>
</head>
<body>
    <h1>Welcome to Green Hill High</h1>
    <p>We have served the community since 1954.</p>
</body>
</html>
```

- `<!DOCTYPE html>` says this is HTML.
- `<html>` wraps the whole document.
- `<head>` holds information **about** the page — the `<title>`, which appears
  on the browser tab, character encoding, and links to stylesheets.
- `<body>` holds everything that is **displayed**.

The distinction between head and body is examined: the title goes in the head
and is not shown on the page; anything to be seen goes in the body.

### Text elements

| Element | Purpose |
|---|---|
| `<h1>` … `<h6>` | Headings, `<h1>` largest and most important |
| `<p>` | A paragraph |
| `<br>` | A line break |
| `<hr>` | A horizontal rule |
| `<strong>` | Important text, shown bold |
| `<em>` | Emphasised text, shown italic |

Use headings in order — `<h1>` then `<h2>` beneath it — and use them for
structure, not for size. This is the same discipline as heading styles in a
word processor, and for the same reasons: search engines and screen readers
read the structure from them.

### Lists

```html
<ul>
    <li>Mathematics</li>
    <li>Information Technology</li>
</ul>

<ol>
    <li>Complete the form</li>
    <li>Pay the fee</li>
</ol>
```

`<ul>` is an **unordered** list (bullets), `<ol>` an **ordered** list
(numbers), and each item is an `<li>`. Choose by whether the order matters.

### Images

```html
<img src="library.jpg" alt="Students in the school library" width="400">
```

- `src` — the image file.
- `alt` — **alternative text**, describing the image. It is read aloud by
  screen readers and displayed if the image fails to load. It is required for
  accessibility and is the attribute most often left out.
- `width` and `height` — the displayed size.

Keep image files small. A photograph straight from a phone may be several
megabytes and will make the page slow, especially on mobile data. Resize it
before using it, and use JPEG for photographs, PNG where a transparent
background is needed, and SVG for logos and diagrams.

### Tables

```html
<table border="1">
    <tr>
        <th>Subject</th>
        <th>Teacher</th>
    </tr>
    <tr>
        <td>Information Technology</td>
        <td>Mr Grant</td>
    </tr>
</table>
```

`<tr>` is a row, `<th>` a header cell, `<td>` an ordinary cell.

Tables are for **tabular data**. Using them to lay a page out was once common
and is now wrong: it confuses screen readers and does not adapt to a phone
screen.

### Colour, fonts and layout: CSS

Appearance is controlled by **CSS** — Cascading Style Sheets. HTML says what
things *are*; CSS says how they *look*.

```html
<style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
    h1   { color: #005a32; text-align: center; }
    p    { line-height: 1.6; }
</style>
```

CSS can live in three places:

| Where | Written as | Use |
|---|---|---|
| **Inline** | A `style` attribute on one element | A single exception |
| **Internal** | A `<style>` block in the head | One page |
| **External** | A separate `.css` file linked from each page | A whole site |

**External is the right answer for a site.** One file controls every page, so a
change to the colour scheme is made once rather than on every page — exactly
the argument for styles in a word processor.

Colours are written as names (`red`), or as hexadecimal values (`#005a32`)
giving the amounts of red, green and blue.

### Other design features

**Navigation bar** — a list of links styled to run across or down the page,
repeated identically on every page.

**Background colours and images** — used sparingly. A patterned background
behind text is the commonest way to make a page unreadable.

**Forms** — `<input>`, `<select>` and `<textarea>` elements collecting data,
exactly as in the forms lesson.

**Audio and video** — `<audio>` and `<video>` elements. Do not set them to play
automatically; visitors dislike it and it wastes their data.

**Responsive design** — CSS that adapts the layout to the screen width, so the
page works on a phone as well as a laptop. Most visitors are on a phone, so
this is not an optional extra.

### Design guidance

- **Be consistent** across pages — the same header, menu, colours and fonts.
- **Contrast matters**: dark text on a light background, or the reverse. Pale
  grey on white is fashionable and unreadable.
- **Two or three fonts at most**, and web-safe ones unless you load a font
  deliberately.
- **Keep pages short enough to scan**, with headings breaking up the text.
- **Every image gets `alt` text.**
- **Test in more than one browser**, and at phone width.

### Saving and publishing

Save the file with a `.html` extension, the home page as `index.html`. Use
lower-case names with no spaces, and keep images in their own folder.

To publish, the files are copied to a **web server** — commonly with **FTP**
(File Transfer Protocol) or through a hosting service's own uploader. The site
is then reached through a **domain name** pointing at that server.

A page can be opened from your own disc to test it, and it will work; but
nobody else can see it until it is on a server.

## Flashcards

### 4.10 | What does HTML stand for, and what does it do?
**HyperText Markup Language**. It marks up the content of a web page so the
browser knows what to display.

### 4.10 | What is the difference between a tag and an element?
A **tag** is the marker in angle brackets. An **element** is the opening tag,
the content and the closing tag together.

### 4.10 | What is an attribute? Give an example.
Extra information on a tag, written `name="value"` — for example
`<img src="logo.png" alt="School logo">`.

### 4.10 | What goes in the `<head>` and what goes in the `<body>`?
The `<head>` holds information **about** the page, such as the `<title>`. The
`<body>` holds everything that is **displayed**.

### 4.10 | Which tag creates a paragraph, and which creates the largest heading?
`<p>` for a paragraph and `<h1>` for the largest heading.

### 4.10 | What is the difference between `<ul>` and `<ol>`?
`<ul>` is an unordered list, shown with bullets. `<ol>` is an ordered list,
shown with numbers. Each item is an `<li>`.

### 4.10 | What does the `alt` attribute of an image do, and why does it matter?
It gives alternative text describing the image. Screen readers read it aloud
and it is displayed if the image fails to load, so it is required for
accessibility.

### 4.10 | Name the three table tags and what each does.
`<tr>` a row, `<th>` a header cell, `<td>` an ordinary data cell.

### 4.10 | Why should tables not be used to lay out a page?
They confuse screen readers and do not adapt to small screens. Tables are for
tabular data; layout is CSS's job.

### 4.10 | What does CSS stand for and what is it for?
**Cascading Style Sheets** — it controls how a page looks, while HTML says what
the content is.

### 4.10 | Name the three places CSS can be written, and which suits a whole site.
**Inline**, **internal** and **external**. An **external** stylesheet suits a
site: one file controls every page.

### 4.10 | What is WYSIWYG?
"What you see is what you get" — an editor in which the page is laid out
visually and the HTML is written for you.

### 4.10 | Why should photographs be resized before being put on a web page?
A photograph straight from a phone may be several megabytes, making the page
slow to load and wasting visitors' mobile data.

### 4.10 | What is responsive design?
Styling that adapts the layout to the width of the screen, so the page works on
a phone as well as a laptop.

### 4.10 | How is a finished website made available to the public?
Its files are copied to a **web server**, usually by FTP or a hosting service's
uploader, and reached through a domain name.

## Questions

### 4.10 | mcq | 1 mark | difficulty 1
Which tag is used to create a paragraph in HTML?

- A. `<par>`
- B. `<p>`
- C. `<text>`
- D. `<br>`

**Answer:** B

**Working:** `<p>` marks a paragraph. `<br>` is a line break, which is not the
same thing — it moves to a new line without starting a new paragraph.

### 4.10 | mcq | 1 mark | difficulty 2
Where in an HTML document does the `<title>` element belong, and where does it
appear?

- A. In the body; at the top of the page
- B. In the head; on the browser tab
- C. In the head; at the top of the page
- D. In the body; on the browser tab

**Answer:** B

**Working:** The head holds information about the page rather than content to
display. The title appears on the tab, not on the page itself — a visible
heading needs `<h1>`.

### 4.10 | mcq | 1 mark | difficulty 2
Which attribute provides text that is read by a screen reader and shown if an
image fails to load?

- A. `src`
- B. `title`
- C. `alt`
- D. `name`

**Answer:** C

**Working:** `alt` gives the alternative text. `src` names the image file.

### 4.10 | mcq | 1 mark | difficulty 3
A school site of 20 pages must have its colour scheme changed. The change can
be made in one place if the styling was written as

- A. inline styles on each element
- B. an internal style block in each page
- C. an external stylesheet linked from every page
- D. attributes on each tag

**Answer:** C

**Working:** An external stylesheet is one file shared by every page, so one
edit changes the whole site. The other three would need all 20 pages altered.

### 4.10 | mcq | 1 mark | difficulty 2
Which pair of tags would produce a numbered list?

- A. `<ul>` and `<li>`
- B. `<ol>` and `<li>`
- C. `<list>` and `<item>`
- D. `<ol>` and `<td>`

**Answer:** B

**Working:** `<ol>` is the ordered (numbered) list and each entry is an `<li>`.
`<ul>` would give bullets.

### 4.10 | mcq | 1 mark | difficulty 3
A designer uses an HTML table to position the menu, the heading and the text on
each page. The main objection is that

- A. tables cannot contain images
- B. it confuses screen readers and does not adapt to small screens
- C. tables are not supported by modern browsers
- D. the page will not load

**Answer:** B

**Working:** Tables still work, and the page displays. The problem is that a
table announces "tabular data" to assistive technology and fixes a layout that
cannot reflow on a phone. CSS is the right tool for layout.

### 4.10 | structured | 10 marks | difficulty 3
A student is building a two-page website for a school club.

(a) Name the language used to mark up the content of a web page, and the
language used to control its appearance. **(2 marks)**

(b) State the purpose of each of the following: **(3 marks)**

(i) `<head>`

(ii) `<body>`

(iii) the `alt` attribute of an image

(c) Write the HTML for an unordered list containing the items `Football` and
`Netball`. **(3 marks)**

(d) The student wants both pages to share one colour scheme that can be changed
in a single place. State how the styling should be written, and give a reason.
**(2 marks)**

**Answer:** (a) 1 mark — HTML (HyperText Markup Language); 1 mark — CSS
(Cascading Style Sheets).
(b)(i) Holds information about the page, such as the title, which is not
displayed on the page. (ii) Holds the content that is displayed. (iii) Gives
alternative text describing the image, read by screen readers and shown if the
image does not load.
(c) 3 marks: the `<ul>` opening and closing tags (1); each item wrapped in its
own `<li>` tags (1 mark each item, maximum 2).

```html
<ul>
    <li>Football</li>
    <li>Netball</li>
</ul>
```

(d) 1 mark — as an external stylesheet, linked from both pages; 1 mark — one
file then controls every page, so the colour scheme is changed once instead of
in each page separately.

**Working:** (c) Marks are for correct nesting and matching closing tags.
Indentation is not required but makes the structure visible.

(d) With only two pages the saving is small; the point is that it does not
grow. At twenty pages, an internal style block means twenty edits.
