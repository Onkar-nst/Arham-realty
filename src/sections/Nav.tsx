import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BRAND, NAV } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { EASE } from '../components/Motion'

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Highlight the nav item whose section owns the upper third of the viewport. */
  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive('#' + visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.05, 0.3, 0.6] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />

      <header className={`nav${stuck ? ' nav--stuck' : ''}`}>
        <div className="wrap">
          <div className="nav__inner">
            <a
              className="logo"
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                go('#home')
              }}
            >
              <span>{BRAND.markTop}</span>
              <span>{BRAND.markBottom}</span>
            </a>

            <nav aria-label="Primary">
              <ul className="nav__links">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      className={`nav__link${active === item.href ? ' nav__link--active' : ''}`}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        go(item.href)
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              className="btn btn--solid nav__cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                go('#contact')
              }}
            >
              Enquire Now
              <span className="btn__arrow">
                <ArrowRight />
              </span>
            </a>

            <button
              className="nav__burger"
              data-open={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <i />
              <i />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                className="nav__mobile"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <ul>
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          go(item.href)
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        go('#contact')
                      }}
                      style={{ color: 'var(--accent)' }}
                    >
                      Enquire Now →
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  )
}
