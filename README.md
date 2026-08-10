# Arham Realty

Marketing site for Arham Realty — the content and section flow of the previous
site (`arham-realty.vercel.app`) rebuilt on the visual language of the
Ironwood/Framer construction theme.

## Running

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle to dist/
npm run preview  # serve the built bundle
```

## Structure

```
src/
  data/content.ts     all copy, projects, clusters, values — edit here first
  styles/tokens.css   design tokens + reset
  styles/app.css      section styles
  components/
    Motion.tsx        Reveal, MaskedLines, Counter, useParallax
    Icons.tsx
  sections/           Nav, Hero, Projects, About, Footprint, Values, Contact, Closing
```

Content is centralised in `src/data/content.ts`. Sections read from it, so copy
and project changes do not require touching components.

## Design system

Lifted from the Framer theme and retuned for Arham:

| | |
|---|---|
| Surfaces | cream `#f5f3ee`, ink `#171614`, warm border `#e0d6c7` |
| Accent | brass `#a87020`, bright `#f7b74a` |
| Type | Geist (display), Plus Jakarta Sans (body), Fragment Mono (eyebrows) |
| Radii | 4 / 8 / 16 / 999px |
| Motion | `0.4s cubic-bezier(0.25, 0.1, 0.25, 1)` |

Motion vocabulary: scroll-triggered fade-ups (10/20/30px), per-line masked
heading rises, count-up statistics, hero parallax with image scale-in, image
scale on card hover, and an infinite region marquee.

### One gotcha

`MaskedLines` puts its IntersectionObserver on the **wrapper**, not on the
sliding line. Each line starts translated fully below its own
`overflow: hidden` mask, so an observer on the line itself reports 0%
visibility and the reveal never fires.

## Known gaps

- **Timeline copy for 2000s–2026 is authored, not carried over.** The old site
  loaded those entries client-side and never rendered them, so only the 1994
  entry could be recovered; the rest are reconstructed from the project record.
  Replace in `TIMELINE` (`src/data/content.ts`) with the real history.
- **Project imagery is Unsplash placeholder.** Swap the `images` arrays for real
  photography.
- **The enquiry form has no backend.** It validates and confirms locally; wire
  `onSubmit` in `src/sections/Contact.tsx` to a real endpoint.
- **Portfolio tab counts (14/2/6) are the old site's totals** but only 10
  projects were recoverable, so the lists are shorter than the counts.
- The old site's interactive map is represented as the expandable region
  clusters rather than a live map.
