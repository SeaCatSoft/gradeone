# Grade One — Design System (Master)

Source of truth for every page. A file in `pages/` overrides this for that page
only. Generated with the **ui-ux-pro-max** skill (design-system search plus
per-domain searches), then corrected where the database's defaults did not fit
this product. Every correction is listed with its reason — do not quietly
revert one.

## Audience and product

CSEC students, **15–17**, studying on phones, often at night, often on patchy
mobile data. Product type in the skill database: *Educational App* /
*Online Course / E-learning*. Gamified: daily quests, XP, levels, streaks.

## Style — Vibrant & Block-based, with clay softness

From the database: **Vibrant & Block-based** ("youth-focused, gaming,
energetic; bold blocks, large type, high contrast") blended with the tactile
side of **Claymorphism**, the database's primary recommendation for e-learning.

In practice:

- **Chunky surfaces.** Cards are solid (no glass, no blur) with a 2px border
  and a solid bottom edge (`--shadow-*` tokens), so every surface reads as a
  physical block.
- **3D buttons that press down.** Solid fill, darker edge underneath; on press
  the button moves down and the edge disappears (100ms). Feedback is on the
  press, not the release.
- **Flat colour blocks** for module heroes, each with its own darker edge.
- **A static dot-grid** on the page ground. Static on purpose — see overrides.

## Colour

Built on the database's *Educational App* palette (learning indigo +
energetic orange + progress green), **re-shaded wherever text sits on colour**
because the database's own values fail contrast.

| Role | Light | Dark | Notes |
|---|---|---|---|
| Page | `#EEF2FF` | `#0F1024` | |
| Surface | `#FFFFFF` | `#1A1B3A` | |
| Line / edge | `#D6DAF3` | `#2F3263` | borders and the 3D edge |
| Text | `#1E1B4B` | `#EEF0FF` | 14.3 / 16.6 : 1 |
| Muted | `#4B5078` | `#A5A9CF` | 6.9 / 7.3 : 1 |
| Tertiary | `#5F6390` | `#8A8EBF` | 5.1 / 5.3 : 1 |
| Primary (buttons) | `#4F46E5` | `#5850EE` | white text 6.3 / 5.5 : 1 |
| Energy / streak | `#F97316` | `#FB923C` | ink text only (5.7 : 1), never white |
| Success | `#15803D` | `#4ADE80` | |
| Error | `#DC2626` | `#F87171` | |

**Modules** (fill carries white text; bright is for dark-mode text and accents):

| Module | Fill | Edge | Bright |
|---|---|---|---|
| 1 Fundamentals | `#15803D` green | `#14532D` | `#4ADE80` |
| 2 Intermediate | `#0369A1` sky | `#0C4A6E` | `#38BDF8` |
| 3 Higher Concepts | `#9333EA` purple | `#6B21A8` | `#C084FC` |

**Quests:** Learn `#4F46E5` indigo · Review `#C2410C` orange · Practice `#0369A1` sky.
Progress bars are the quest colour; completion is also stated in text, so
colour is never the only signal.

## Typography

Database pairing **"Playful Creative": Fredoka (headings) + Nunito (body)** —
"educational, gaming". Fredoka is rounded and friendly without being childish;
Nunito stays readable at length, which matters for lessons.

- Base 17px, line-height 1.6 for body, 1.1–1.2 for display.
- Headings at near-zero tracking: rounded display faces do not want the
  negative tracking a grotesk does.
- Maths is KaTeX and unaffected.

## Motion

- 100–150ms for press feedback, 200–300ms for transitions (skill rule).
- The flashcard swipe keeps the spring physics from `$lib/spring` — gesture
  motion is behaviour, not decoration, and is covered by `npm run test:motion`.
- `prefers-reduced-motion` honoured throughout.

## Overrides of the database — and why

| Database said | We do | Why |
|---|---|---|
| Body font **Comic Neue** | **Nunito** | Comic Neue is for children's apps. For 16-year-olds reading maths it reads as patronising — the fastest way to lose this audience. |
| **Avoid dark modes** | **Keep dark mode** | A children's-app rule. These students revise at night. |
| **App Store landing** (download buttons, QR, star ratings) | Feature showcase, no ratings | It is a website, not a store app — and there are no reviews; inventing ratings would be dishonest. |
| **Animated background patterns**, continuous motion | **Static** dot grid | The skill's own UX rules forbid decorative-only and continuous motion; it drains attention and battery. |
| CTA `#F97316` with white text | Indigo buttons; orange only with dark ink | White on `#F97316` is 2.8 : 1 (fails). |
| Progress green `#22C55E` with white text | `#15803D` for text-bearing fills | White on `#22C55E` is 2.3 : 1 (fails). |

## Pre-delivery checklist (skill)

- [ ] No emoji as icons (SVG only)
- [ ] `cursor: pointer` on everything clickable
- [ ] Hover transitions 150–300ms
- [ ] Text contrast ≥ 4.5 : 1 in light **and** dark
- [ ] Visible focus states for keyboard users
- [ ] `prefers-reduced-motion` respected
- [ ] Touch targets ≥ 44 × 44px
- [ ] Responsive at 375, 768, 1024, 1440 — no horizontal scroll
