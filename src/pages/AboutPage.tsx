import { ABOUT_PAGE, LEADERSHIP, TIMELINE, MISSION, VISION } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Motion'
import { Timeline } from '../sections/About'
import Values from '../sections/Values'
import PageHead from '../components/PageHead'
import { Link } from '../router'

/** About page — doc pp.6–9: about, our story, milestones, leadership. */
export default function AboutPage() {
  const { story, milestones, leadership } = ABOUT_PAGE

  return (
    <>
      <PageHead
        title="About · Arham Realty"
        description={ABOUT_PAGE.intro[0]}
      />

      <header className="phead">
        <div className="wrap">
          <div className="sec-head sec-head__split">
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 22 }}>
                  {ABOUT_PAGE.eyebrow}
                </p>
              </Reveal>
              <h1 className="h-display phead__title">
                <MaskedLines lines={ABOUT_PAGE.title} accentIndex={1} />
              </h1>
            </div>
            <Reveal delay={0.14}>
              <p className="about__lead phead__lead">{ABOUT_PAGE.intro[0]}</p>
            </Reveal>
          </div>

          <Reveal distance={30}>
            <div className="mv mv--inline" style={{ marginTop: '64px' }}>
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
      </header>

     

      <Values />

      <section className="section section--alt">
        <div className="wrap">
          <div className="sec-head">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                {story.eyebrow}
              </p>
            </Reveal>
            <h2 className="h-section">
              <MaskedLines lines={story.title} accentIndex={1} />
            </h2>
          </div>

          <div className="storycols">
            {story.columns.map((c, i) => (
              <Reveal key={c.lead.slice(0, 30)} delay={i * 0.06}>
                <div className="storycol">
                  <p className="storycol__lead">{c.lead}</p>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="tagline">
              <p className="tagline__main">{story.tagline}</p>
              <p className="tagline__sub">{story.taglineSub}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head sec-head--tight">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                {milestones.eyebrow}
              </p>
            </Reveal>
            <h2 className="h-section">
              <MaskedLines lines={milestones.title} accentIndex={1} />
            </h2>
          </div>
          <Reveal distance={30}>
            <Timeline entries={TIMELINE} />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" id="leadership">
        <div className="wrap">
          <div className="sec-head sec-head--tight">
            <Reveal>
              <p className="eyebrow">{leadership.eyebrow}</p>
            </Reveal>
          </div>

          <div className="projects__list">
            {LEADERSHIP.map((l, i) => (
              <Reveal key={l.name} delay={Math.min(i, 2) * 0.06} distance={30}>
                <article className="pcard">
                  <div className="pcard__media">
                    <div className="plate" aria-hidden="true">
                      <img className="plate__mark" src="/brand/arham-mark.png" alt="" />
                      <span className="plate__year">{l.role}</span>
                    </div>
                    <span className="pcard__status">
                      <i className="dot dot--Completed" />
                      {l.role}
                    </span>
                  </div>

                  <div className="pcard__body">
                    <p className="pcard__dev">Our Leadership · {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="h-card pcard__title">{l.name}</h3>
                    <p className="pcard__loc">{l.role}</p>

                    {l.paras.map((p, pIdx) => (
                      <p key={pIdx} className="pcard__desc">{p}</p>
                    ))}

                    {l.quote && (
                      <p className="leader__quote">{l.quote}</p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="projects__more">
            <Link className="btn btn--solid" to="/projects">
              See every address
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
