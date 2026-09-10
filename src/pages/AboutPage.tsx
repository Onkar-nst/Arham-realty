import { ABOUT_PAGE, LEADERSHIP, TIMELINE } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Motion'
import { Timeline } from '../sections/About'
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

          <div className="leaders">
            {LEADERSHIP.map((l, i) => (
              <Reveal key={l.name} delay={Math.min(i, 2) * 0.06}>
                <article className="leader">
                  <div className="leader__head">
                    <h2 className="h-section leader__heading">
                      <MaskedLines lines={l.heading} accentIndex={l.accentIndex} />
                    </h2>
                    <p className="leader__name">{l.name}</p>
                    <p className="leader__role">{l.role}</p>
                  </div>
                  <div className="leader__body">
                    {l.paras.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                    <p className="leader__quote">{l.quote}</p>
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
