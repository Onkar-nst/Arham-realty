import type { LegalDoc } from '../data/legal'
import { LEGAL } from '../data/legal'
import { MaskedLines, Reveal } from '../components/Motion'
import PageHead from '../components/PageHead'
import { Link } from '../router'

const letter = (n: number) => String.fromCharCode(97 + n)

/**
 * One page per legal text — Disclaimer, Terms, Privacy, Cookies — with
 * the others tabbed across the top. The copy is rendered exactly as the
 * client's lawyers supplied it; only the section numbering is added.
 */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHead title={`${doc.title} · Arham Realty`} description={doc.intro[0]?.text ?? doc.title} />

      <header className="phead">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              Legal
            </p>
          </Reveal>
          <h1 className="h-display phead__title">
            <MaskedLines lines={[doc.title]} />
          </h1>
          <Reveal delay={0.12}>
            <p className="legal__updated">{doc.updated}</p>
          </Reveal>
        </div>
      </header>

      <section className="section section--tight">
        <div className="wrap">
          <nav className="legal__tabs" aria-label="Legal documents">
            {LEGAL.map((d) => (
              <Link
                key={d.slug}
                to={`/legal/${d.slug}`}
                className="filter"
                data-active={d.slug === doc.slug}
                aria-current={d.slug === doc.slug ? 'page' : undefined}
              >
                {d.title}
              </Link>
            ))}
          </nav>

          <div className="legal">
            {doc.intro.map((p) => (
              <p className="legal__intro" key={p.text.slice(0, 40)}>
                {p.text}
              </p>
            ))}

            {doc.sections.map((s, n) => {
              /* Lettered items restart per section, as in the source. */
              let li = 0
              return (
                <section className="legal__section" key={s.heading}>
                  <h2 className="legal__h">
                    <span className="legal__n">{n + 1}.</span>
                    {s.heading}
                  </h2>
                  {s.paras.map((p) =>
                    p.list ? (
                      <p className="legal__li" key={p.text.slice(0, 40)}>
                        <span className="legal__letter">{letter(li++)})</span>
                        {p.text}
                      </p>
                    ) : (
                      <p key={p.text.slice(0, 40)}>{p.text}</p>
                    ),
                  )}
                </section>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
