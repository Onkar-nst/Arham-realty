# Arham Realty

Marketing site for Arham Realty, built on the visual language of the
Ironwood/Framer construction theme and the client's own brand guidelines.

## Running

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle to dist/
npm run preview  # serve the built bundle
```

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, three selected projects, story, footprint, values, contact |
| `/projects` | Full portfolio, all 22 projects, filterable by status |
| `/projects/:slug` | Project detail — three projects only, see below |
| `/about` | Company story, figures, milestones, group companies, values |
| anything else | 404 with routes back into the site |

Routing is a ~60-line history router in `src/router.tsx` — real URLs, no
dependency. `vercel.json` rewrites every path to `index.html`; any other host
needs the same SPA fallback or deep links will 404 at the CDN.

Detail pages exist for **Premia Tower A**, **Premia Towers B & C** and
**Anvaya — Medinee Niketan CHSL**, the three the client supplied brochures and
renders for. The other 19 appear on `/projects` and link to their Google Maps
pin. To give one its own page, add its slug to `DETAIL_SLUGS` in
`src/data/projects.ts` and fill in `body`, `images` and `amenities`.

## Structure

```
src/
  data/projects.ts    the 22-project catalogue — source of truth for all figures
  data/content.ts     site copy; imports totals from projects.ts
  router.tsx          history router + <Link>
  pages/              ProjectsPage, ProjectPage, AboutPage, NotFoundPage
  sections/           Nav, Hero, Projects, About, Footprint, Values, Contact, Closing
  components/         ProjectCard, Logo, PageHead, Motion, Icons
  styles/             tokens.css (design tokens + reset), app.css
public/
  brand/              logo lockup + logomark, matted from the client's PDF
  projects/           project photography and renders
```

## Where the data comes from

Everything in `src/data/projects.ts` traces to client-supplied material in
`data from client/`:

- **`Arham Group of Companies Past, On-Going & Up-Coming Projects.xlsx`** —
  group company, project name, type, start/end year, location, construction
  area and Google Maps pin for all 22 projects. Counts and areas on the site are
  summed from this, never typed by hand, so the headline figures cannot drift
  from the project list.
- **Kenarc e-brochures** (Premia Tower A, Premia Towers B & C) — amenity
  schedules, project highlights and renders, quoted verbatim.
- **AR Visualzation renders + June 2022 site photography** — Anvaya.
- **`Arham Brand Guidelines Final.pdf`** (Evolved Monkeys v1.0, 26 May 2026) —
  colour, logo and the four approved introduction paragraphs on `/about`.

Two rules are enforced in code and should not be quietly undone:

1. The spreadsheet marks the up-coming block **"DON'T DISCLOSE BUILDING
   NAMES"**. Those six projects are listed by locality; the society/plot name
   sits in `internalRef` and is never rendered. `/projects` states the reason
   on the Upcoming tab.
2. **Nothing is invented.** Where the client supplied no photograph, `images` is
   empty and the card falls back to a branded plate rather than a stock
   stand-in. Where no amenity list was supplied, none is claimed.

## Design system

Colour follows the brand guidelines: white plus the three brand greens.
Neutrals are tinted toward those greens so the page sits under the logo rather
than beside it.

| | |
|---|---|
| Brand green | `#017C60` primary, `#12A87A` light, `#0C5C37` deep |
| Surfaces | `#f7f9f8`, alt `#eef3f1`, surface `#ffffff` |
| Ink | `#14201c`, muted `#556862` |
| Dark bands | `#0b1a15` |
| Type | Geist (display), Plus Jakarta Sans (body), Fragment Mono (eyebrows) |
| Radii | 4 / 8 / 16 / 999px |
| Motion | `0.4s cubic-bezier(0.25, 0.1, 0.25, 1)` |

The guidelines specify **BDO Grotesk Medium** for the logotype and **Random
Grotesque Spacious Book** for display type; neither is licensed here, which is
why the logo ships as artwork rather than live text. If those licences are
bought, swap `--font-display` and drop the raster lockup.

Motion vocabulary: scroll-triggered fade-ups (10/20/30px), per-line masked
heading rises, count-up statistics, hero parallax with image scale-in, image
scale on card hover, and an infinite region marquee.

### One gotcha

`MaskedLines` puts its IntersectionObserver on the **wrapper**, not on the
sliding line. Each line starts translated fully below its own
`overflow: hidden` mask, so an observer on the line itself reports 0%
visibility and the reveal never fires.

## Open items for the client

- **Photography for 12 completed projects.** Pramod, Shailesh, Navtarun, Shri
  Ganesh, Pooja Park, Toral, Jesal, Sai Dhara and Vardaman Park have no usable
  image. The five files supplied for these (`Sai Dhara.png`, `Vardaman
  Park.png`, `Toral Apartments.png`, `Jesal Apartments.png`, `Ganesh CHSL.png`)
  are Google Street View captures carrying "© 2026 Google" watermarks and
  blurred faces — using them commercially breaches Google's terms, and they
  show the buildings at their worst. They are deliberately not shipped.
- **RERA registration numbers** for the ongoing projects, if they should be
  displayed. The previous site showed numbers that do not appear in any client
  document, so they were dropped.
- **Configuration and floor counts** beyond Premia Tower A (1 & 2 BHK, from its
  brochure). The previous site's figures contradicted the brochure and were
  dropped.
- **The enquiry form has no backend.** It validates and confirms locally; wire
  `onSubmit` in `src/sections/Contact.tsx` to a real endpoint.
- **Timeline copy for 2000s–2026 is authored**, reconstructed from the project
  record. Replace `TIMELINE` in `src/data/content.ts` with the real history if
  the client has it.
- **`/about` group-company list is derived from the project schedule.** Confirm
  every entity there should be public.
