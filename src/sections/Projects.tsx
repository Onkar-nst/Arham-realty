import { FEATURED, PROJECTS } from '../data/projects'
import { ArrowRight } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Motion'
import ProjectCard from '../components/ProjectCard'
import { Link } from '../router'

/**
 * The home page shows the three projects the client has full material
 * for. Everything else lives on /projects — the home page is a shop
 * window, not the catalogue.
 */
export default function Projects() {
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
              <MaskedLines lines={['Selected', 'Projects']} accentIndex={1} />
            </h2>
          </div>
          <Reveal delay={0.12}>
            <p className="lead">
              Two towers going up at Chembur, a society rebuild underway at Andheri, and the
              finished first phase behind them both. The full record of {PROJECTS.length}{' '}
              projects across Mumbai and Thane is in the portfolio.
            </p>
          </Reveal>
        </div>

        <div className="projects__list">
          {FEATURED.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.slug} />
          ))}
        </div>

        <Reveal>
          <div className="projects__more">
            <Link className="btn btn--ghost" to="/projects">
              View All {PROJECTS.length} Projects
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
