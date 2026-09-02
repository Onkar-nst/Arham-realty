import { ABOUT_PAGE, MISSION, VALUES, VALUES_HEADER, VISION } from '../data/content'
import { AREA_TOTALS, PROJECTS, PROJECT_COUNTS } from '../data/projects'
import { ArrowRight } from '../components/Icons'
import { Counter, MaskedLines, Reveal } from '../components/Motion'
import { Timeline } from '../sections/About'
import PageHead from '../components/PageHead'
import { Link } from '../router'

/* The group entities that actually delivered the work, in the order they
   first appear on the schedule. Derived so it can never contradict the
   project list. */
const GROUP_COMPANIES = Array.from(
  new Set([...PROJECTS].sort((a, b) => a.start - b.start).map((p) => p.developer)),
)

const FIGURES = [
  { value: PROJECTS.length, suffix: '', label: 'Projects since 1994' },
  { value: PROJECT_COUNTS.Completed, suffix: '', label: 'Completed & handed over' },
  {
    value: Math.round((AREA_TOTALS.Completed / 100000) * 10) / 10,
    suffix: 'L',
    label: 'Sq ft delivered',
    decimals: 1,
  },
  {
    value: Math.round((AREA_TOTALS.Upcoming / 100000) * 10) / 10,
    suffix: 'L',
    label: 'Sq ft in the pipeline',
    decimals: 1,
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About · Arham Realty"
        description="Arham Realty has been building across Mumbai and Thane since 1994. Fourteen completed projects, two under construction and six more in the pipeline."
      />

      <header className="phead">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              {ABOUT_PAGE.eyebrow}
            </p>
          </Reveal>
          <h1 className="h-display phead__title">
            <MaskedLines lines={ABOUT_PAGE.title} accentIndex={1} />
          </h1>
          <Reveal delay={0.14}>
            <p className="about__lead phead__lead">{ABOUT_PAGE.intro[0]}</p>
          </Reveal>
        </div>
      </header>

      {/* Approved brand-guideline copy, set as a two-column read. */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="introcols">
            {ABOUT_PAGE.intro.slice(1).map((p, i) => (
              <Reveal key={p.slice(0, 30)} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--dark">
        <div className="wrap">
          <div className="figures">
            {FIGURES.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.07}>
                <div className="figures__cell">
                  <p className="figures__n">
                    <Counter value={f.value} decimals={f.decimals} />
                    <span>{f.suffix}</span>
                  </p>
                  <p className="figures__label">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head sec-head__split">
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 22 }}>
                  Our Story
                </p>
              </Reveal>
              <h2 className="h-section">
                <MaskedLines lines={['From Nalasopara', 'to the island city']} accentIndex={1} />
              </h2>
            </div>
          </div>

          <div className="storycols">
            {ABOUT_PAGE.story.map((p, i) => (
              <Reveal key={p.slice(0, 30)} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="wrap">
          <div className="sec-head sec-head--tight">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                Milestones
              </p>
            </Reveal>
            <h2 className="h-section">
              <MaskedLines lines={['Three decades,', 'five chapters']} accentIndex={1} />
            </h2>
          </div>
          <Reveal distance={30}>
            <Timeline />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head sec-head__split">
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 22 }}>
                  Structure
                </p>
              </Reveal>
              <h2 className="h-section">
                <MaskedLines lines={[ABOUT_PAGE.groupsTitle]} />
              </h2>
            </div>
            <Reveal delay={0.12}>
              <p className="lead">{ABOUT_PAGE.groupsBody}</p>
            </Reveal>
          </div>

          <div className="companies">
            {GROUP_COMPANIES.map((c, i) => (
              <Reveal key={c} delay={Math.min(i, 8) * 0.04}>
                <div className="companies__cell">
                  <span className="companies__n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
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

      <section className="section">
        <div className="wrap">
          <div className="sec-head sec-head__split">
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 22 }}>
                  {VALUES_HEADER.eyebrow}
                </p>
              </Reveal>
              <h2 className="h-section">
                <MaskedLines lines={VALUES_HEADER.title} accentIndex={1} />
              </h2>
            </div>
            <Reveal delay={0.12}>
              <p className="lead">{VALUES_HEADER.body}</p>
            </Reveal>
          </div>

          <div className="valuegrid">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.07}>
                <div className="valuegrid__cell">
                  <span className="valuegrid__n">{v.n}</span>
                  <p className="valuegrid__kicker">{v.kicker}</p>
                  <h3 className="h-card">{v.title}</h3>
                  <p className="valuegrid__body">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="projects__more">
            <Link className="btn btn--solid" to="/projects">
              See the {PROJECTS.length} projects behind it
              <span className="btn__arrow">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
