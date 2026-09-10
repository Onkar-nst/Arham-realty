import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../data/projects'
import { PRELAUNCH_NOTE, PROJECTS } from '../data/projects'
import { PROJECTS_DISCLAIMER } from '../data/legal'
import { ArrowRight, Caret } from '../components/Icons'
import { EASE, MaskedLines, Reveal } from '../components/Motion'
import PageHead from '../components/PageHead'
import { Plate } from '../components/ProjectCard'
import { ProjectExtras, ProjectFacts } from '../components/ProjectDetails'
import { Link } from '../router'

/* ------------------------------- Gallery ------------------------- */

function Gallery({ project }: { project: Project }) {
  const [i, setI] = useState(0)
  const total = project.images.length
  const current = project.images[i]

  /* No client photography for this one — the plate says so rather than
     standing in a render of somebody else's building. */
  if (!total) {
    return (
      <div className="pgal">
        <div className="pgal__stage pgal__stage--empty">
          <Plate project={project} />
        </div>
        <p className="pgal__caption">Photography for this project is not yet released.</p>
      </div>
    )
  }

  const step = (d: number) => setI((n) => (n + d + total) % total)

  return (
    <div className="pgal">
      <div className="pgal__stage">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.img
            key={i}
            src={current.src}
            alt={current.alt}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              className="pgal__arrow pgal__arrow--prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <Caret dir="left" />
            </button>
            <button
              className="pgal__arrow pgal__arrow--next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <Caret dir="right" />
            </button>
          </>
        )}
      </div>

      {current.caption && <p className="pgal__caption">{current.caption}</p>}

      {total > 1 && (
        <div className="pgal__thumbs">
          {project.images.map((img, n) => (
            <button
              key={img.src}
              className="pgal__thumb"
              data-active={n === i}
              onClick={() => setI(n)}
              aria-label={`Show image ${n + 1}: ${img.alt}`}
            >
              <img src={img.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ------------------------------- Page ---------------------------- */

const STATUS_TAG: Record<Project['status'], string> = {
  Ongoing: 'On-Going Project',
  Completed: 'Completed Project',
  Upcoming: 'Upcoming Project',
}

export default function ProjectPage({ project }: { project: Project }) {
  /* Three siblings, preferring the same status so a completed building
     leads to other completed work rather than the pipeline. */
  const rest = PROJECTS.filter((p) => p.slug !== project.slug)
  const others = [
    ...rest.filter((p) => p.status === project.status),
    ...rest.filter((p) => p.status !== project.status),
  ].slice(0, 3)

  return (
    <>
      <PageHead
        title={`${project.name} · ${project.location} · Arham Realty`}
        description={project.summary}
      />

      <article className="pdetail">
        <header className="pdetail__head">
          <div className="wrap">
            <Reveal>
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link to="/projects">Projects</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{project.name}</span>
              </nav>
            </Reveal>

            <div className="pdetail__title">
              <div>
                <Reveal>
                  <p className="eyebrow" style={{ marginBottom: 20 }}>
                    <i className={`dot dot--${project.status}`} />
                    {STATUS_TAG[project.status]}
                    {project.timeline && ` · ${project.timeline}`}
                  </p>
                </Reveal>
                <h1 className="h-display">
                  <MaskedLines lines={[project.name]} />
                </h1>
                <Reveal delay={0.08}>
                  <p className="pdetail__loc">
                    {project.nameWithheld ? 'Building name to be announced.' : project.locality}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.14}>
                <p className="lead pdetail__blurb">{project.blurb}</p>
              </Reveal>
            </div>
          </div>
        </header>

        <div className="wrap">
          <Reveal>
            <Gallery project={project} />
          </Reveal>
        </div>

        <section className="section section--tight">
          <div className="wrap">
            <div className="pdetail__grid">
              <div className="pdetail__main">
                <Reveal>
                  <ProjectExtras project={project} />
                </Reveal>
              </div>

              <aside className="pdetail__aside">
                <Reveal delay={0.1}>
                  <div className="factcard">
                    <ProjectFacts project={project} />

                    {project.status === 'Upcoming' && (
                      <p className="extras__fine factcard__fine">{PRELAUNCH_NOTE}</p>
                    )}

                    <a
                      className="btn btn--ghost factcard__btn"
                      href={project.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Google Maps
                      <span className="btn__arrow">
                        <ArrowRight />
                      </span>
                    </a>
                    <Link className="btn btn--solid factcard__btn" to="/#contact">
                      Enquire About This Project
                      <span className="btn__arrow">
                        <ArrowRight />
                      </span>
                    </Link>
                  </div>
                </Reveal>
              </aside>
            </div>

            <Reveal>
              <p className="projects__disclaimer">{PROJECTS_DISCLAIMER}</p>
            </Reveal>
          </div>
        </section>

        {others.length > 0 && (
          <section className="section section--tight section--alt">
            <div className="wrap">
              <div className="sec-head">
                <h2 className="h-section">
                  <MaskedLines lines={['More projects']} />
                </h2>
              </div>
              <div className="nextgrid">
                {others.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 0.08}>
                    <Link className="nextcard" to={`/projects/${p.slug}`}>
                      {p.images[0] ? (
                        <img src={p.images[0].src} alt="" loading="lazy" />
                      ) : (
                        <span className="nextcard__plate">
                          <Plate project={p} />
                        </span>
                      )}
                      <div className="nextcard__body">
                        <p className="nextcard__status">
                          <i className={`dot dot--${p.status}`} />
                          {p.status}
                        </p>
                        <h3 className="h-card">{p.name}</h3>
                        <p className="nextcard__loc">{p.location}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
              <div className="projects__more">
                <Link className="btn btn--ghost" to="/projects">
                  Back to All Projects
                  <span className="btn__arrow">
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  )
}
