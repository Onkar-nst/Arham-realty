import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT } from '../data/content'
import { ArrowRight, Check } from '../components/Icons'
import { EASE, MaskedLines, Reveal } from '../components/Motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  /* No backend on this build — the form validates and confirms locally.
     Wire `onSubmit` to the enquiry endpoint when one exists. */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact__grid">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 24 }}>
                {CONTACT.eyebrow}
              </p>
            </Reveal>

            <h2 className="contact__title">
              <MaskedLines lines={CONTACT.title} accentIndex={1} />
            </h2>

            <Reveal delay={0.1}>
              <p className="contact__sub">
                {CONTACT.sub[0]}
                <br />
                {CONTACT.sub[1]}
              </p>
              <p className="lead">{CONTACT.body}</p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="details">
                {CONTACT.details.map((d) => (
                  <div className="detail" key={d.label}>
                    <div className="detail__label">{d.label}</div>
                    <div className="detail__value">
                      {d.href ? (
                        <a href={d.href}>{d.lines[0]}</a>
                      ) : (
                        d.lines.map((l) => <div key={l}>{l}</div>)
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14} distance={30}>
            <div className="form">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    className="form__done"
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <div className="form__done__mark">
                      <Check />
                    </div>
                    <h3 className="form__title">Enquiry received</h3>
                    <p className="form__sub" style={{ marginBottom: 0 }}>
                      Thank you. Our team will be in touch within one business day.
                    </p>
                    <button className="btn btn--ghost" onClick={() => setSent(false)}>
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <h3 className="form__title">{CONTACT.form.title}</h3>
                    <p className="form__sub">{CONTACT.form.body}</p>

                    <div className="field">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" name="name" required placeholder="Your name" />
                    </div>

                    <div className="field field--row">
                      <div>
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          required
                          placeholder="+91"
                          pattern="[0-9+\s\-]{7,}"
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="field field--row">
                      <div>
                        <label htmlFor="interest">Interested In</label>
                        <select id="interest" name="interest" defaultValue="">
                          <option value="" disabled>
                            Select a project
                          </option>
                          {CONTACT.form.interests.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="config">Configuration</label>
                        <select id="config" name="config" defaultValue="Any">
                          {CONTACT.form.configurations.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us what you're looking for…"
                      />
                    </div>

                    <label className="consent">
                      <input type="checkbox" name="consent" required />
                      <span>{CONTACT.form.consent}</span>
                    </label>

                    <button className="btn btn--solid form__submit" type="submit">
                      {CONTACT.form.submit}
                      <span className="btn__arrow">
                        <ArrowRight />
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
