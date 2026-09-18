import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ABOUT, LEGACY, TIMELINE } from '../data/content'
import { Caret } from '../components/Icons'
import { EASE, MaskedLines, Reveal } from '../components/Motion'

const pad = (n: number) => String(n).padStart(2, '0')

export interface TimelineEntry {
  era: string
  kicker: string
  title: string
  body: string[]
  image: string | null
}

/**
 * Era-by-era slider. Used twice with different copy: the home page's
 * "legacy" chapters and the About page's milestones.
 */
export function Timeline({ entries = TIMELINE }: { entries?: TimelineEntry[] }) {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const entry = entries[i]

  const go = (next: number) => {
    setDir(next > i ? 1 : -1)
    setI(next)
  }

  return (
    <div className="tl">
      <div className="tl__head">
        <p className="tl__index">
          <b>{pad(i + 1)}</b> / {pad(entries.length)}
        </p>
        <div className="tl__eras">
          {entries.map((t, n) => (
            <button
              key={t.era}
              className="tl__era"
              data-active={n === i}
              onClick={() => go(n)}
              aria-label={`Show ${t.era}`}
            >
              {t.era}
            </button>
          ))}
        </div>
      </div>

      <div className="tl__panel">
        <div className="tl__media">
          <AnimatePresence initial={false} mode="popLayout">
            {entry.image ? (
              <motion.img
                key={entry.era}
                src={entry.image}
                alt={entry.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                loading="lazy"
              />
            ) : (
              /* No renders survive from the 1990s projects — say so with
                 the brand plate rather than a stock photograph. */
              <motion.div
                key={entry.era}
                className="tl__plate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                aria-hidden="true"
              >
                <img src="/brand/arham-mark.png" alt="" />
                <span>{entry.era}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={entry.era}
              initial={{ opacity: 0, y: dir * 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: dir * -18 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <p className="tl__kicker">{entry.kicker}</p>
              <p className="tl__year">{entry.era}</p>
              <h3 className="tl__title">{entry.title}</h3>
              {entry.body.map((b) => (
                <p className="tl__body" key={b.slice(0, 30)}>
                  {b}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="tl__ctrls">
            <button
              className="circ"
              onClick={() => go(i - 1)}
              disabled={i === 0}
              aria-label="Previous"
            >
              <Caret dir="left" />
            </button>
            <button
              className="circ"
              onClick={() => go(i + 1)}
              disabled={i === entries.length - 1}
              aria-label="Next"
            >
              <Caret dir="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Home page "About Arham Realty" — doc p.3, in the client's order. */
export default function About() {
  return (
    <>
      <section className="section section--alt" id="about">
        <div className="wrap">
          <div className="sec-head sec-head__split">
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 22 }}>
                  {ABOUT.eyebrow}
                </p>
              </Reveal>
              <h2 className="h-section">
                <MaskedLines lines={ABOUT.title} accentIndex={1} />
              </h2>
            </div>
            <Reveal delay={0.12}>
              <div className="about__lead">
                {ABOUT.paras.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          

          <Reveal distance={30}>
            <Timeline entries={LEGACY.chapters} />
          </Reveal>

          <Reveal>
            <p className="legacy__closing">
              {LEGACY.closing[0]}
              <br />
              <span className="accent-line">{LEGACY.closing[1]}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="intent">
            <div>
              <h2 className="h-section">
                <MaskedLines lines={['Many neighbourhoods.', 'One intent.']} accentIndex={1} />
              </h2>
            </div>

            <div className="intent__copy">
              <Reveal delay={0}>
                <p>
                  Arham Realty’s story began in 1994 with a modest development in Nalasopara and a
                  straightforward belief: good homes should be dependable, thoughtfully planned and
                  made for the people who live in them. Three decades later, that belief continues
                  to shape the way we approach every opportunity.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p>
                  From Nalasopara and Bhayandar in the early years to established addresses across
                  Mumbai, each project has brought a new setting, a new set of challenges and a
                  deeper understanding of the city we work in. The places may have changed, the
                  scale may have grown, but the intent has stayed familiar —{' '}
                  <strong>
                    to build with care, to build with purpose and to leave something that continues
                    to matter after the keys are handed over.
                  </strong>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section section--alt">
        <div className="wrap">
          <div className="sec-head sec-head__split">
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 22 }}>
                  {STORY.eyebrow}
                </p>
              </Reveal>
              <h2 className="h-section">
                <MaskedLines lines={STORY.title} accentIndex={1} />
              </h2>
            </div>
            <Reveal delay={0.12}>
              <p className="lead">{STORY.lead}</p>
            </Reveal>
          </div>

          <div className="story">
            {STORY.paras.map((p, i) => (
              <Reveal key={p.text.slice(0, 30)} delay={Math.min(i, 4) * 0.05}>
                <p className="story__para">
                  {p.lead && <strong>{p.lead} </strong>}
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="projects__more">
              <Link className="btn btn--ghost" to="/about">
                Our Story
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section> */}
    </>
  )
}
