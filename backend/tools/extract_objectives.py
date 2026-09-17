"""Pull specific objectives out of the CXC Mathematics syllabus PDF text.

Two failure modes matter here, and they are not equally dangerous.

1. TRUNCATION. The syllabus prints two columns. Splitting them at the
   'CONTENT/EXPLANATORY NOTES' header was wrong -- the header sits left of
   where its column's text actually starts, so the split cut the tail off
   left-column objectives. '1.1 distinguish among sets of' silently lost
   'numbers'. A truncation that still reads as a sentence is worse than an
   obvious gap, so the split is now measured from the text: the widest run of
   columns blank on essentially every line of the page.

2. LOST NOTATION. pdftotext drops mathematics set in symbol fonts. '1.2
   compute powers of real numbers of the form , where ;' is missing its a^n
   and n in Z. The words survive; the maths does not.

Neither is fully fixable by machine, so `needs_review` flags generously. A
false flag costs one glance at the printed syllabus; a missed one ships a
broken objective that every lesson and question beneath it inherits.
"""
import re, sys, json
from collections import Counter

OBJ   = re.compile(r"^\s{0,10}(\d{1,2})\.(\d{1,2})\s+(\S.*)$")
MODULE = re.compile(r"MODULE\s+(\d)\s*:")
NOISE = re.compile(r"CXC \d+/G/SYLL|www\.cxc\.org|^\s*MODULE \d|SPECIFIC OBJECTIVES"
                   r"|CONTENT\s*/\s*EXPLANATORY|Students should be able to"
                   r"|^\s*\d+\s*$|\(cont'd\)")

TRAILING_WORD = re.compile(
    r"\b(of|in|to|for|from|with|the|a|an|and|or|as|at|by|on|involving|using|"
    r"where|form|given|between|among|into|than)\s*[;.,]?\s*$", re.I)


def gutter(lines):
    """Column where the right-hand column begins, or None if undetectable."""
    body = [l for l in lines if len(l.strip()) > 12]
    if len(body) < 6:
        return None
    width = max(len(l) for l in body)
    blank = [sum(1 for l in body if c >= len(l) or l[c] == " ") for c in range(width)]
    need = len(body) - 1                     # tolerate one stray crossing
    best, run = None, None
    for c in range(28, width):               # never split before column 28
        if blank[c] >= need:
            if run is None:
                run = c
        else:
            if run is not None and (best is None or c - run > best[1] - best[0]):
                best = (run, c)
            run = None
    if run is not None and (best is None or width - run > best[1] - best[0]):
        best = (run, width)
    return best[0] if best and best[1] - best[0] >= 2 else None


def needs_review(s):
    return bool(
        TRAILING_WORD.search(s)
        or re.search(r"\(\s*[,)]", s)            # '( , )' -- symbols gone
        or re.search(r"\s,\s*(where|for|such)?\s*[;.]?\s*$", s)
        or re.search(r"\s{2,},|,\s*,", s)
        or re.search(r"[=<>+\-]\s*$", s)
        or re.search(r"\b(form|value|function|vector|matrix|point)\b[^a-zA-Z]{0,3}$", s)
        or len(s) < 28
    )


# Topic order within each module, exactly as 007_seed_math_structure.sql
# seeds it. Objective codes restart at 1.1 for each topic, so (module, code
# prefix) identifies the topic deterministically. Detecting the printed topic
# headings instead was fragile -- the two-column split kept eating them, and a
# missed heading silently filed objectives under the previous topic.
TOPICS = {
    1: {1: "Number Theory and Computation", 2: "Consumer Arithmetic",
        3: "Sets", 4: "Measurement", 5: "Algebra 1",
        6: "Introduction to Graphs"},
    2: {1: "Statistics 1", 2: "Algebra 2",
        3: "Relations, Functions and Graphs 1",
        4: "Geometry and Trigonometry 1", 5: "Vectors and Matrices 1"},
    3: {1: "Statistics 2", 2: "Relations, Functions and Graphs 2",
        3: "Geometry and Trigonometry 2", 4: "Vectors and Matrices 2"},
}


def extract(path):
    pages = open(path, encoding="utf-8", errors="replace").read().split("\f")
    out, module = [], None
    for page in pages:
        lines = page.split("\n")
        mm = MODULE.search(page)
        if mm:
            module = int(mm.group(1))
        split_at = gutter(lines)
        cur = None
        for ln in lines:
            if NOISE.search(ln):
                continue
            left = ln[:split_at] if split_at else ln
            if not left.strip():
                continue
            om = OBJ.match(left)
            if om:
                if cur:
                    out.append(cur)
                tno = int(om.group(1))
                topic = TOPICS.get(module, {}).get(tno)
                if topic is None:
                    cur = None          # outside the objective tables
                    continue
                cur = {"module": module, "topic": topic,
                       "code": "%s.%s" % (om.group(1), om.group(2)),
                       "statement": om.group(3).strip()}
            elif cur is not None and left.startswith(("     ", "\t")):
                cur["statement"] += " " + left.strip()
        if cur:
            out.append(cur)

    seen, clean = set(), []
    for o in out:
        s = re.sub(r"\s+", " ", o["statement"]).strip().rstrip(";").strip()
        key = (o["module"], o["topic"], o["code"])
        if key in seen or len(s) < 6:
            continue
        seen.add(key)
        o["statement"] = s
        o["needs_review"] = needs_review(s)
        clean.append(o)
    return clean


if __name__ == "__main__":
    rows = extract(sys.argv[1])
    json.dump(rows, open(sys.argv[2], "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    flagged = sum(1 for r in rows if r["needs_review"])
    print("%d objectives, %d flagged for review (%d%%)"
          % (len(rows), flagged, round(100 * flagged / max(len(rows), 1))))
    for (mod, t), n in sorted(Counter((r["module"], r["topic"]) for r in rows).items()):
        print("  M%d  %3d  %s" % (mod, n, t))
