import { DEVELOPMENTS } from '../data/content'
import { FEATURED } from '../data/projects'
import { ArrowRight } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Motion'
import ProjectCard from '../components/ProjectCard'
import { Marquee } from './Closing'
import { Link } from '../router'

/**
 * "Our Developments" — doc p.2. The three projects the client has full
 * material for, under the locality band. Everything else is on /projects.
 */
export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="sec-head sec-head__split">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                {DEVELOPMENTS.eyebrow}
              </p>
            </Reveal>
            <h2 className="h-section">
              <MaskedLines lines={DEVELOPMENTS.title} accentIndex={1} />
            </h2>
          </div>
          <Reveal delay={0.12}>
            <p className="lead">{DEVELOPMENTS.body}</p>
          </Reveal>
        </div>
      </div>

      <Marquee items={DEVELOPMENTS.marquee} />

      <div className="wrap">
        <div className="projects__list">
          {FEATURED.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.slug} variant="feature" />
          ))}
        </div>

        <Reveal>
          <div className="projects__more">
            <Link className="btn btn--ghost" to="/projects">
              View All Projects
              <span className="btn__arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
