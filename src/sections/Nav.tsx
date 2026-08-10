import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NAV } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { EASE } from '../components/Motion'
import { Link, useRouter } from '../router'
import Logo from '../components/Logo'

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { path, navigate } = useRouter()

  const onHome = path === '/'

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Section highlighting only applies to the home page's anchors. */
  useEffect(() => {
    if (!onHome) return
    const ids = NAV.filter((n) => n.href.startsWith('/#')).map((n) => n.href.slice(2))
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive('/#' + visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.05, 0.3, 0.6] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [onHome, path])

  const isActive = (href: string) =>
    href.startsWith('/#') ? onHome && active === href : path.startsWith(href) && href !== '/'

  const go = (href: string) => {
    setOpen(false)
    navigate(href)
  }

  /* Off the home page there is no dark hero behind the bar, so it must
     always wear its light treatment. */
  const solid = stuck || !onHome

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />

      <header className={`nav${solid ? ' nav--stuck' : ''}`}>
        <div className="wrap">
          <div className="nav__inner">
            <Link to="/" className="logo" aria-label="Arham Realty, home">
              <Logo />
            </Link>

            <nav aria-label="Primary">
              <ul className="nav__links">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      className={`nav__link${isActive(item.href) ? ' nav__link--active' : ''}`}
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
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                go('/#contact')
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
                      href="/#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        go('/#contact')
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
