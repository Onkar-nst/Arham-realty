import { motion } from 'framer-motion'
import { HERO, HERO_STATS } from '../data/content'
import { ArrowRight } from '../components/Icons'
import { Counter, EASE, MaskedLines, useParallax } from '../components/Motion'

export default function Hero() {
  const { ref, y } = useParallax(56)

  return (
    <>
      <section className="hero" id="home" ref={ref}>
        <motion.div className="hero__media" style={{ y }}>
          <motion.img
            src={HERO.image}
            alt="Arham Realty landmark tower at Worli Sea Face"
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
              <MaskedLines lines={HERO.titleLines} delay={0.28} accentIndex={2} />
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
              <a className="btn btn--onDark" href={HERO.primary.href}>
                {HERO.primary.label}
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </a>
              <a className="btn btn--ghostDark" href={HERO.secondary.href}>
                {HERO.secondary.label}
                <span className="btn__arrow">
                  <ArrowRight />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Scroll
        </motion.div>
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
                  <Counter value={s.value} />
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
