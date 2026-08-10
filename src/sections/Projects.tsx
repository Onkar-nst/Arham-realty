import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { Project, ProjectStatus } from '../data/content'
import { PROJECTS, PROJECT_COUNTS } from '../data/content'
import { ArrowDown, ArrowRight, Caret } from '../components/Icons'
import { EASE, MaskedLines, Reveal } from '../components/Motion'

const TABS: ProjectStatus[] = ['Completed', 'Ongoing', 'Upcoming']

/** Image carousel + detail panel for one project. */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [slide, setSlide] = useState(0)
  const [dir, setDir] = useState(1)
  const total = project.images.length

  const step = (d: number) => {
    setDir(d)
    setSlide((s) => (s + d + total) % total)
  }

  return (
    <Reveal delay={Math.min(index, 3) * 0.06} distance={30}>
      <article className="pcard">
        <div className="pcard__media">
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.img
              key={slide}
              src={project.images[slide]}
              alt={`${project.name} — view ${slide + 1} of ${total}`}
              custom={dir}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              loading="lazy"
            />
          </AnimatePresence>

          <span className="pcard__status">
            <i className={`dot dot--${project.status}`} />
            {project.status}
          </span>

          {total > 1 && (
            <div className="pcard__nav">
              <button
                className="pcard__arrow"
                onClick={() => step(-1)}
                aria-label={`Previous image of ${project.name}`}
              >
                <Caret dir="left" />
              </button>
              <span className="pcard__count">
                {slide + 1} / {total}
              </span>
              <button
                className="pcard__arrow"
                onClick={() => step(1)}
                aria-label={`Next image of ${project.name}`}
              >
                <Caret dir="right" />
              </button>
            </div>
          )}
        </div>

        <div className="pcard__body">
          <p className="pcard__dev">{project.developer}</p>
          <h3 className="h-card pcard__title">{project.name}</h3>
          {project.description && <p className="pcard__desc">{project.description}</p>}

          <dl className="pcard__meta">
            <div>
              <dt>Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{project.timeline}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Developer</dt>
              <dd>{project.developer}</dd>
            </div>
          </dl>

          <a className="link-arrow" href="#contact">
            Explore Details
            <ArrowRight />
          </a>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const [tab, setTab] = useState<ProjectStatus>('Completed')
  const shown = PROJECTS.filter((p) => p.status === tab)

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="sec-head sec-head__split">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                Our Portfolio
              </p>
            </Reveal>
            <h2 className="h-section">
              <MaskedLines lines={['Our', 'Projects']} accentIndex={1} />
            </h2>
          </div>
          <Reveal delay={0.12}>
            <p className="lead">
              A showcase of landmark spaces designed to elevate living standards and deliver
              lasting value across Mumbai &amp; Thane.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="filters" role="tablist" aria-label="Filter projects by status">
            {TABS.map((t) => (
              <button
                key={t}
                className="filter"
                data-active={tab === t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
              >
                {t}
                <span className="filter__count">({PROJECT_COUNTS[t]})</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects__list">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              className="projects__list"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {shown.map((p, i) => (
                <ProjectCard project={p} index={i} key={p.name} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal>
          <div className="projects__more">
            <a className="btn btn--ghost" href="#contact">
              View More Projects
              <span className="btn__arrow">
                <ArrowDown />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
