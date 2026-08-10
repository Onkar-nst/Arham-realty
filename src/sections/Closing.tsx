import { BRAND, CTA, FOOTER, NAV, CONTACT } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Motion'

/** Infinite band of region names — the theme's repeated-services marquee. */
export function Marquee() {
  const items = [
    'Chembur',
    'Ghatkopar',
    'Bandra',
    'Santacruz',
    'Worli',
    'Mahalaxmi',
    'Andheri',
    'Borivali',
    'Malad',
    'Thane',
    'Bhandup',
    'Mulund',
  ]
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
          <a className="btn btn--onDark" href="#contact">
            {CTA.action}
            <span className="btn__arrow">
              <ArrowRight />
            </span>
          </a>
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
            <div className="logo">
              <span>{BRAND.markTop}</span>
              <span>{BRAND.markBottom}</span>
            </div>
            <p className="footer__blurb">{BRAND.blurb}</p>
          </div>

          <div>
            <p className="footer__h">Navigate</p>
            <ul className="footer__list">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__h">Projects</p>
            <ul className="footer__list">
              {FOOTER.projects.map((p) => (
                <li key={p}>
                  <a href="#projects">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__h">Get in Touch</p>
            <ul className="footer__list">
              <li>
                <a href="tel:+919819091599">+91 98190 91599</a>
              </li>
              <li>
                <a href="mailto:arhamlanddevelopers@gmail.com">arhamlanddevelopers@gmail.com</a>
              </li>
              <li>
                <span>{CONTACT.details[0].lines[1]}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{FOOTER.copyright}</span>
          <div className="footer__legal">
            {FOOTER.legal.map((l) => (
              <a href="#" key={l}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
