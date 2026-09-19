/**
 * Markdown to HTML, with LaTeX rendered by KaTeX.
 *
 * Maths is pulled out BEFORE markdown runs and put back afterwards. Letting
 * marked see `$x_1 \cdot y$` first would eat the underscores as emphasis and
 * mangle backslashes -- the failure is silent and looks like a KaTeX bug.
 * Placeholders are plain alphanumerics so markdown has nothing to grab.
 */
import { marked } from 'marked';
import katex from 'katex';

marked.setOptions({ gfm: true, breaks: false });

const PLACEHOLDER = (i: number) => 'zZmathzZ' + i + 'zZ';

type Slot = { tex: string; display: boolean };

/**
 * Pull out $$...$$ and $...$ spans. Skips anything inside a fenced code block
 * or inline code, where a dollar sign is a dollar sign.
 */
function extractMath(src: string): { text: string; slots: Slot[] } {
  const slots: Slot[] = [];
  const parts: string[] = [];
  let i = 0;

  while (i < src.length) {
    // Leave fenced code blocks and inline code untouched.
    if (src.startsWith('```', i)) {
      const end = src.indexOf('```', i + 3);
      const stop = end === -1 ? src.length : end + 3;
      parts.push(src.slice(i, stop));
      i = stop;
      continue;
    }
    if (src[i] === '`') {
      const end = src.indexOf('`', i + 1);
      const stop = end === -1 ? src.length : end + 1;
      parts.push(src.slice(i, stop));
      i = stop;
      continue;
    }

    // \$ is a literal dollar sign (a price), never a maths delimiter. It is
    // passed through for marked, which turns the escape into a plain "$".
    if (src[i] === '\\' && src[i + 1] === '$') {
      parts.push('\\$');
      i += 2;
      continue;
    }

    if (src.startsWith('$$', i)) {
      const end = src.indexOf('$$', i + 2);
      if (end !== -1) {
        slots.push({ tex: src.slice(i + 2, end).trim(), display: true });
        parts.push(PLACEHOLDER(slots.length - 1));
        i = end + 2;
        continue;
      }
    }
    if (src[i] === '$') {
      let end = src.indexOf('$', i + 1);
      while (end !== -1 && src[end - 1] === '\\') end = src.indexOf('$', end + 1);
      // A lone dollar (a price, say) has no closing partner on the same line.
      if (end !== -1 && !src.slice(i + 1, end).includes('\n')) {
        slots.push({ tex: src.slice(i + 1, end).trim(), display: false });
        parts.push(PLACEHOLDER(slots.length - 1));
        i = end + 1;
        continue;
      }
    }

    parts.push(src[i]);
    i++;
  }
  return { text: parts.join(''), slots };
}

function renderSlots(html: string, slots: Slot[]): string {
  return slots.reduce((acc, slot, idx) => {
    let rendered: string;
    try {
      rendered = katex.renderToString(slot.tex, {
        displayMode: slot.display,
        throwOnError: false,
        output: 'html'
      });
    } catch {
      // Never let one bad expression blank a whole lesson -- show the source.
      rendered = '<code class="math-error">' + escapeHtml(slot.tex) + '</code>';
    }
    return acc.split(PLACEHOLDER(idx)).join(rendered);
  }, html);
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Render lesson or question markdown. Inline SVG in the source passes through. */
export function renderMarkdown(src: string): string {
  if (!src) return '';
  const { text, slots } = extractMath(src);
  const html = marked.parse(text, { async: false }) as string;
  return renderSlots(html, slots);
}

/** Render a short fragment (a flashcard face, an option) without a wrapping <p>. */
export function renderInline(src: string): string {
  if (!src) return '';
  const { text, slots } = extractMath(src);
  const html = marked.parseInline(text, { async: false }) as string;
  return renderSlots(html, slots);
}
