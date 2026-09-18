import { motion } from 'framer-motion'
import { HERO, HERO_STATS } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { Counter, EASE, MaskedLines, useParallax } from '../components/Motion'
import { Link } from '../router'

export default function Hero() {
  const { ref, y } = useParallax(56)

  return (
    <>
      <section className="hero" id="home" ref={ref}>
        <motion.div className="hero__media" style={{ y }}>
          <motion.img
            src={HERO.image}
            alt="Premia Towers B & C, Tilak Nagar, Chembur"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
            fetchPriority="high"
          />
        </motion.div>
        <div className="hero__scrim" />
        <div className="hero__grain" />

        <div className="hero__inner">
          <div className="wrap">
            <motion.p
              className="eyebrow hero__eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            >
              {HERO.eyebrow}
            </motion.p>

            <h1 className="h-display hero__title">
              <MaskedLines lines={HERO.titleLines} delay={0.28} accentIndex={HERO.accentIndex} />
            </h1>

            <motion.p
              className="hero__body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
            >
              {HERO.body}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.74 }}
            >
              <Link className="btn btn--onDark" to={HERO.primary.href}>
                {HERO.primary.label}
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
              <Link className="btn btn--ghostDark" to={HERO.secondary.href}>
                {HERO.secondary.label}
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Company at a glance">
        <div className="wrap">
          <div className="stats__grid">
            {HERO_STATS.map((s, i) => (
              <motion.div
                className="stats__item"
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              >
                <div className="stats__value">
                  <Counter value={s.value} decimals={s.decimals} />
                  <span className="stats__suffix">{s.suffix}</span>
                </div>
                <div className="stats__label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
