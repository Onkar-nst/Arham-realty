import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../data/projects'
import { ArrowRight, Caret, Chevron } from '../components/Icons'
import { EASE, Reveal } from '../components/Motion'
import { ProjectExtras, ProjectFacts } from './ProjectDetails'
import { Link } from '../router'

/**
 * The plate shown where the client has supplied no photograph. Saying so
 * plainly beats dressing an unphotographed 1999 society in stock imagery
 * of a building that is not theirs.
 */
export function Plate({ project }: { project: Project }) {
  return (
    <div className="plate" aria-hidden="true">
      <img className="plate__mark" src="/brand/arham-mark.png" alt="" />
      <span className="plate__year">{project.timeline ?? project.location}</span>
    </div>
  )
}

function Gallery({ project }: { project: Project }) {
  const [slide, setSlide] = useState(0)
  const total = project.images.length

  if (!total) return <Plate project={project} />

  const step = (d: number) => setSlide((s) => (s + d + total) % total)

  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={slide}
          src={project.images[slide].src}
          alt={project.images[slide].alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          loading="lazy"
        />
      </AnimatePresence>

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
    </>
  )
}

const STATUS_TAG: Record<Project['status'], string> = {
  Ongoing: 'On-Going Project',
  Completed: 'Completed Project',
  Upcoming: 'Upcoming Project',
}

/**
 * Two faces of the same card.
 *
 * `feature` is the home-page version (doc p.2): a short summary, an
 * amenity teaser and four facts. `listing` is the portfolio version
 * (doc p.10): the full blurb, every fact, and a "show more" that opens
 * connectivity, amenities and the neighbourhood note in place.
 */
export default function ProjectCard({
  project,
  index = 0,
  variant = 'listing',
}: {
  project: Project
  index?: number
  variant?: 'feature' | 'listing'
}) {
  const [open, setOpen] = useState(false)
  const feature = variant === 'feature'
  const title = feature ? (project.cardName ?? project.name) : project.name

  return (
    <Reveal delay={Math.min(index, 3) * 0.06} distance={30}>
      <article className="pcard" data-open={open}>
        <div className="pcard__media">
          <Gallery project={project} />
          <span className="pcard__status">
            <i className={`dot dot--${project.status}`} />
            {STATUS_TAG[project.status]}
          </span>
        </div>

        <div className="pcard__body">
          <h3 className="h-card pcard__title">{title}</h3>
          {project.nameWithheld ? (
            <p className="pcard__withheld">Building name to be announced.</p>
          ) : (
            !feature && <p className="pcard__loc">{project.locality}</p>
          )}

          {feature ? (
            <>
              <p className="pcard__desc">{project.summary}</p>
              {project.cardAmenities && (
                <div className="pcard__amen">
                  <p className="pcard__amen-label">Key Amenities</p>
                  <p className="pcard__amen-text">
                    {project.cardAmenities}
                    {project.cardMore && (
                      <span className="pcard__amen-more">{project.cardMore}</span>
                    )}
                  </p>
                </div>
              )}
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
                  <dt>Construction Area</dt>
                  <dd>{project.areaLabel}</dd>
                </div>
              </dl>
            </>
          ) : (
            <>
              <p className="pcard__blurb">{project.blurb}</p>
              <ProjectFacts project={project} compact />

              <button
                className="pcard__toggle"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
              >
                {open ? 'Show less' : 'Show more'}
                <span className="pcard__toggle-chev">
                  <Chevron />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    className="pcard__extras"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <ProjectExtras project={project} />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}

          <div className="pcard__links">
            <Link className="link-arrow" to={`/projects/${project.slug}`}>
              Explore Details
              <ArrowRight />
            </Link>
            {!feature && (
              <>
                <a className="link-arrow" href={project.mapUrl} target="_blank" rel="noreferrer">
                  View on Google Maps
                  <ArrowRight />
                </a>
                <Link className="link-arrow" to="/#contact">
                  Enquire About This Project
                  <ArrowRight />
                </Link>
              </>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
