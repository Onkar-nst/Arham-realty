import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ABOUT, MISSION, TIMELINE, VISION } from '../data/content'
import { Caret } from '../components/Icons'
import { EASE, MaskedLines, Reveal } from '../components/Motion'

const pad = (n: number) => String(n).padStart(2, '0')

export function Timeline() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const entry = TIMELINE[i]

  const go = (next: number) => {
    setDir(next > i ? 1 : -1)
    setI(next)
  }

  return (
    <div className="tl">
      <div className="tl__head">
        <p className="tl__index">
          <b>{pad(i + 1)}</b> / {pad(TIMELINE.length)}
        </p>
        <div className="tl__eras">
          {TIMELINE.map((t, n) => (
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
              <p className="tl__body">{entry.body}</p>
            </motion.div>
          </AnimatePresence>

          <div className="tl__ctrls">
            <button
              className="circ"
              onClick={() => go(i - 1)}
              disabled={i === 0}
              aria-label="Previous milestone"
            >
              <Caret dir="left" />
            </button>
            <button
              className="circ"
              onClick={() => go(i + 1)}
              disabled={i === TIMELINE.length - 1}
              aria-label="Next milestone"
            >
              <Caret dir="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

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
                <MaskedLines lines={ABOUT.title} />
              </h2>
            </div>
            <Reveal delay={0.12}>
              <p className="about__lead">
                {ABOUT.lead.before}
                <em>{ABOUT.lead.emphasis}</em>
                {ABOUT.lead.after}
              </p>
            </Reveal>
          </div>

          <Reveal distance={30}>
            <Timeline />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight section--dark">
        <div className="wrap">
          <Reveal distance={30}>
            <div className="mv">
              {[MISSION, VISION].map((m) => (
                <div className="mv__cell" key={m.label}>
                  <p className="mv__label">{m.label}</p>
                  <p className="mv__headline">{m.headline}</p>
                  <p className="mv__body">{m.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
