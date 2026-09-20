import { motion } from 'framer-motion'
import { VALUES, VALUES_HEADER } from '../data/content'
import { EASE, MaskedLines, Reveal } from '../components/Motion'

/** "Why Arham?" — doc p.4: the four values, then mission and vision. */
export default function Values() {
  return (
    <section className="section section--dark" id="values">
      <div className="wrap">
        <div className="sec-head sec-head__split">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 22 }}>
                {VALUES_HEADER.eyebrow}
              </p>
            </Reveal>
            <h2 className="h-section">
              <MaskedLines lines={VALUES_HEADER.title} accentIndex={1} />
            </h2>
          </div>
          
        </div>

        <div className="values">
          {VALUES.map((v, i) => (
            <motion.article
              className="value"
              key={v.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.09 }}
            >
              <span className="value__icon" style={{ maskImage: `url(${v.icon})`, WebkitMaskImage: `url(${v.icon})` }} aria-hidden="true" />
              <p className="value__kicker">{v.kicker}</p>
              <h3 className="value__title">{v.title}</h3>
              <p className="value__body">{v.body}</p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
