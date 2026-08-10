import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../data/projects'
import { hasDetailPage, lakh } from '../data/projects'
import { ArrowRight, Caret } from '../components/Icons'
import { EASE, Reveal } from '../components/Motion'
import { Link } from '../router'

/**
 * The plate shown where the client has supplied no photograph. Saying so
 * plainly beats dressing an unphotographed 1999 society in stock imagery
 * of a building that is not theirs.
 */
function Plate({ project }: { project: Project }) {
  return (
    <div className="plate" aria-hidden="true">
      <img className="plate__mark" src="/brand/arham-mark.png" alt="" />
      <span className="plate__year">{project.timeline}</span>
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

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  const detail = hasDetailPage(project)

  return (
    <Reveal delay={Math.min(index, 3) * 0.06} distance={30}>
      <article className="pcard">
        <div className="pcard__media">
          <Gallery project={project} />
          <span className="pcard__status">
            <i className={`dot dot--${project.status}`} />
            {project.status}
          </span>
        </div>

        <div className="pcard__body">
          <p className="pcard__dev">{project.developer}</p>
          <h3 className="h-card pcard__title">{project.name}</h3>
          {project.nameWithheld && (
            <p className="pcard__withheld">Building name to be announced</p>
          )}
          <p className="pcard__desc">{project.summary}</p>

          {project.amenities && (
            <div className="pcard__amen">
              <p className="pcard__amen-label">Key Amenities</p>
              <ul className="pcard__chips">
                {project.amenities
                  .flatMap((g) => g.items)
                  .slice(0, 3)
                  .map((a) => (
                    <li className="chip" key={a}>
                      {a}
                    </li>
                  ))}
              </ul>
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
              <dd>{lakh(project.areaSqFt)} L sq ft</dd>
            </div>
          </dl>

          {detail ? (
            <Link className="link-arrow" to={`/projects/${project.slug}`}>
              Explore Details
              <ArrowRight />
            </Link>
          ) : (
            <a
              className="link-arrow"
              href={project.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on Map
              <ArrowRight />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}
