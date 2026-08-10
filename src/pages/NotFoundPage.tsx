import { ArrowRight } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Motion'
import PageHead from '../components/PageHead'
import { Link } from '../router'

export default function NotFoundPage() {
  return (
    <>
      <PageHead title="Page not found · Arham Realty" />
      <header className="phead phead--tall">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              404
            </p>
          </Reveal>
          <h1 className="h-display phead__title">
            <MaskedLines lines={['This page', 'is not here']} accentIndex={1} />
          </h1>
          <Reveal delay={0.14}>
            <p className="lead phead__lead">
              The address may have changed, or the project you are after may not have a page
              of its own yet. The full portfolio is one click away.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="phead__actions">
              <Link className="btn btn--solid" to="/projects">
                View All Projects
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link className="btn btn--ghost" to="/">
                Back Home
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </header>
    </>
  )
}
