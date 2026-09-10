import { BRAND, CTA, FOOTER, NAV, CONTACT } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Motion'
import { Link } from '../router'
import Logo from '../components/Logo'
import { openCookiePreferences } from '../components/CookieBanner'

/** Infinite band of locality names — doc p.2, "… · Mulund · Chembur · …". */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((dup) => (
          <div className="marquee__item" key={dup}>
            {items.map((t) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 44 }}>
                {t}
                <i />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Cta() {
  return (
    <section className="section section--tight section--dark cta">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            {CTA.eyebrow}
          </p>
        </Reveal>
        <h2 className="cta__title">
          <MaskedLines lines={CTA.title} accentIndex={1} />
        </h2>
        <Reveal delay={0.2}>
          <Link className="btn btn--onDark" to="/#contact">
            {CTA.action}
            <span className="btn__arrow">
              <ArrowRight />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo" aria-label="Arham Realty, home">
              <Logo />
            </Link>
            <p className="footer__blurb">{BRAND.blurb}</p>
          </div>

          <div>
            <p className="footer__h">Navigate</p>
            <ul className="footer__list">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link to={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__h">Projects</p>
            <ul className="footer__list">
              {FOOTER.projects.map((p) => (
                <li key={p.href}>
                  <Link to={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__h">Get in Touch</p>
            <ul className="footer__list">
              {CONTACT.details
                .flatMap((d) => d.links ?? [])
                .map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              <li>
                <span>{FOOTER.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{FOOTER.copyright}</span>
          <div className="footer__legal">
            {FOOTER.legal.map((l) =>
              l.href === '#cookies' ? (
                <button type="button" key={l.href} onClick={openCookiePreferences}>
                  {l.label}
                </button>
              ) : (
                <Link to={l.href} key={l.href}>
                  {l.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
