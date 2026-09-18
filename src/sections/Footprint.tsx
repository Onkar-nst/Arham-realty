import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { CLUSTERS, FOOTPRINT, FOOTPRINT_PINS } from '../data/content'
import type { ProjectStatus } from '../data/projects'
import { ArrowRight, Chevron } from '../components/Icons'
import { EASE, MaskedLines, Reveal } from '../components/Motion'
import FootprintMap from '../components/FootprintMap'
import { Link, useRouter } from '../router'

const LEGEND: ProjectStatus[] = ['Completed', 'Ongoing', 'Upcoming']

export default function Footprint() {
  const { navigate } = useRouter()
  const [open, setOpen] = useState<string | null>(null)
  const [hidden, setHidden] = useState<ProjectStatus[]>([])

  const pins = useMemo(
    () => FOOTPRINT_PINS.filter((p) => !hidden.includes(p.status)),
    [hidden],
  )

  const toggleStatus = (s: ProjectStatus) =>
    setHidden((h) => (h.includes(s) ? h.filter((x) => x !== s) : [...h, s]))

  return (
    <section className="section section--alt">
      <div className="wrap">
        <div className="sec-head sec-head__split">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                {FOOTPRINT.index}
              </p>
            </Reveal>
            <h2 className="h-section">
              <MaskedLines lines={FOOTPRINT.title} accentIndex={1} />
            </h2>
          </div>
          <Reveal delay={0.12}>
            <p className="lead">{FOOTPRINT.body}</p>
          </Reveal>
        </div>

        {/* <Reveal distance={30}>
          <div className="fp__stats">
            {FOOTPRINT_STATS.map((s) => (
              <div className="fp__stat" key={s.label}>
                <div className="stats__value">
                  <Counter value={s.value} decimals={s.decimals ?? 0} />
                  <span className="stats__suffix">{s.suffix}</span>
                </div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal> */}

        <div className="fp__grid">
          <Reveal>
            <div>
              <h3 className="fp__caption">
                {FOOTPRINT.caption[0]}
                <br />
                <span>{FOOTPRINT.caption[1]}</span>
              </h3>

              <div className="clusters">
                {CLUSTERS.map((c) => {
                  const isOpen = open === c.region
                  return (
                    <div className="cluster" key={c.region} data-open={isOpen}>
                      <button
                        className="cluster__btn"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : c.region)}
                      >
                        <span className="cluster__name">{c.region}</span>
                        <span className="cluster__right">
                          <span className="cluster__count">({c.count} Projects)</span>
                          <span className="cluster__chev">
                            <Chevron />
                          </span>
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            className="cluster__panel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE }}
                          >
                            <ul className="cluster__list">
                              {c.entries.map((e) => (
                                <li key={e.slug}>
                                  <i className={`dot dot--${e.status}`} />
                                  {e.name}
                                  <span className="cluster__status">{e.status}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>

              <Link className="btn btn--ghost fp__story" to="/about">
                Our Story
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} distance={30}>
            <div className="fp__plot">
              <div className="fp__plot-head">
                <p className=""></p>
                <div className="legend">
                  {LEGEND.map((l) => (
                    <button
                      key={l}
                      className={`legend__chip legend__chip--${l}`}
                      aria-pressed={!hidden.includes(l)}
                      onClick={() => toggleStatus(l)}
                    >
                      <i className={`dot dot--${l}`} />
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <FootprintMap
                pins={pins}
                focus={open}
                onSelect={(href) => navigate(href)}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
