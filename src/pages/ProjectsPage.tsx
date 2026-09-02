import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { ProjectStatus } from '../data/projects'
import {
  AREA_TOTALS,
  PROJECTS,
  PROJECT_COUNTS,
  STATUSES,
  byStatus,
  lakh,
} from '../data/projects'
import { ArrowDown } from '../components/Icons'
import { Counter, EASE, MaskedLines, Reveal } from '../components/Motion'
import ProjectCard from '../components/ProjectCard'
import PageHead from '../components/PageHead'

/** Cards revealed before "Show more" is needed. */
const PAGE = 6

export default function ProjectsPage() {
  const [tab, setTab] = useState<ProjectStatus>('Ongoing')
  const [limit, setLimit] = useState(PAGE)

  const inTab = byStatus(tab)
  const shown = inTab.slice(0, limit)
  const remaining = inTab.length - shown.length

  const selectTab = (t: ProjectStatus) => {
    setTab(t)
    setLimit(PAGE)
  }

  return (
    <>
      <PageHead
        title="Projects · Arham Realty"
        description={`Every Arham Group project since 1994. ${PROJECT_COUNTS.Completed} completed, ${PROJECT_COUNTS.Ongoing} under construction and ${PROJECT_COUNTS.Upcoming} still to come across Mumbai and Thane.`}
      />

      <header className="phead">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              Portfolio · 1994 to 2032
            </p>
          </Reveal>
          <h1 className="h-display phead__title">
            <MaskedLines lines={['Every project', 'we have built']} accentIndex={1} />
          </h1>
          <Reveal delay={0.14}>
            <p className="lead phead__lead">
              {PROJECTS.length} projects across Mumbai and Thane, from a 46,000 sq ft start at
              Nalasopara in 1994 to a 17.5 lakh sq ft scheme at Bhandup. Areas shown are
              construction areas taken from the Arham Group project schedule.
            </p>
          </Reveal>

          <div className="phead__stats">
            {STATUSES.map((s, i) => (
              <Reveal key={s} delay={0.1 + i * 0.06}>
                <button
                  className="tally"
                  data-active={tab === s}
                  onClick={() => selectTab(s)}
                >
                  <span className="tally__n">
                    <Counter value={PROJECT_COUNTS[s]} />
                  </span>
                  <span className="tally__label">{s}</span>
                  <span className="tally__area">
                    {lakh(AREA_TOTALS[s])} lakh sq ft
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="filters" role="tablist" aria-label="Filter projects by status">
              {STATUSES.map((t) => (
                <button
                  key={t}
                  className="filter"
                  data-active={tab === t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => selectTab(t)}
                >
                  {t}
                  <span className="filter__count">({PROJECT_COUNTS[t]})</span>
                </button>
              ))}
            </div>
          </Reveal>

          {tab === 'Upcoming' && (
            <Reveal>
              <p className="note">
                Building names for upcoming projects are withheld until statutory approvals
                come through. Locality, scale and timeline are all shown in full.
              </p>
            </Reveal>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              className="projects__list projects__list--grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {shown.map((p, i) => (
                <ProjectCard project={p} index={i} key={p.slug} />
              ))}
            </motion.div>
          </AnimatePresence>

          {remaining > 0 && (
            <div className="projects__more">
              <button className="btn btn--ghost" onClick={() => setLimit((l) => l + PAGE)}>
                Show {Math.min(remaining, PAGE)} More
                <span className="filter__count">({remaining} left)</span>
                <span className="btn__arrow">
                  <ArrowDown />
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
