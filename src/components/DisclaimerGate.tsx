import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LAUNCH_DISCLAIMER } from '../data/legal'
import { ArrowRight } from './Icons'
import { EASE } from './Motion'
import { Link } from '../router'

const KEY = 'arham:disclaimer-accepted'

/**
 * The launch-page popup (doc p.1). Shown once per browser session; the
 * visitor has to click "I Agree & Continue" to reach the site. It is
 * deliberately not a one-time thing — the lawyers' text asks for the
 * acknowledgement on entry, so a new session sees it again.
 */
export default function DisclaimerGate() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let accepted = false
    try {
      accepted = sessionStorage.getItem(KEY) === '1'
    } catch {
      /* Storage blocked — show it and move on. */
    }
    if (!accepted) setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const accept = () => {
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {
      /* ignore */
    }
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="gate"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gate-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <motion.div
            className="gate__card"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.05 }}
          >
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              {LAUNCH_DISCLAIMER.title}
            </p>

            {LAUNCH_DISCLAIMER.paras.map((t) => (
              <p className="gate__para" key={t.slice(0, 30)}>
                {t}
              </p>
            ))}

            <p className="gate__notice">
              <strong>{LAUNCH_DISCLAIMER.noticeLabel}:</strong> {LAUNCH_DISCLAIMER.notice}
            </p>

            <p className="gate__agree">
              {LAUNCH_DISCLAIMER.agree}{' '}
              <Link to="/legal/disclaimer" onClick={accept}>
                Read the Disclaimer & Terms of Use
              </Link>
            </p>

            <button className="btn btn--solid gate__btn" onClick={accept} autoFocus>
              {LAUNCH_DISCLAIMER.button}
              <span className="btn__arrow">
                <ArrowRight />
              </span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
