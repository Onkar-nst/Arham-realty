import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { EASE } from './Motion'
import { Link } from '../router'

const KEY = 'arham:cookie-consent'
const EVENT = 'arham:cookie-preferences'

export interface CookieConsent {
  necessary: true
  analytics: boolean
  marketing: boolean
}

export function readConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as CookieConsent) : null
  } catch {
    return null
  }
}

/** The footer's "Cookie Preferences" link re-opens the banner through this. */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(EVENT))
}

/**
 * Cookie consent banner, as described in the Cookie Policy (doc, Footer
 * section §3): shown on first visit, with accept-all or a customised
 * choice, and reachable again from the footer. Nothing on this build
 * sets analytics or marketing cookies yet — the choice is recorded so
 * that whatever is added later can honour it.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false)
  const [custom, setCustom] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const stored = readConsent()
    if (!stored) setOpen(true)
    else {
      setAnalytics(stored.analytics)
      setMarketing(stored.marketing)
    }
    const reopen = () => {
      setCustom(true)
      setOpen(true)
    }
    window.addEventListener(EVENT, reopen)
    return () => window.removeEventListener(EVENT, reopen)
  }, [])

  const save = (c: CookieConsent) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(c))
    } catch {
      /* ignore */
    }
    setOpen(false)
    setCustom(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="cookies"
          role="region"
          aria-label="Cookie preferences"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="cookies__text">
            <p className="cookies__h">Cookies on this website</p>
            <p>
              We use strictly necessary cookies to make this website work. With your consent we
              may also use analytics and marketing cookies. See our{' '}
              <Link to="/legal/cookies">Cookie Policy</Link> and{' '}
              <Link to="/legal/privacy">Privacy Policy</Link>.
            </p>

            {custom && (
              <div className="cookies__opts">
                <label>
                  <input type="checkbox" checked disabled />
                  <span>Strictly necessary</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span>Analytics</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  <span>Marketing / Advertising</span>
                </label>
              </div>
            )}
          </div>

          <div className="cookies__actions">
            {custom ? (
              <button
                className="btn btn--ghost"
                onClick={() => save({ necessary: true, analytics, marketing })}
              >
                Save preferences
              </button>
            ) : (
              <button className="btn btn--ghost" onClick={() => setCustom(true)}>
                Customise
              </button>
            )}
            <button
              className="btn btn--solid"
              onClick={() => save({ necessary: true, analytics: true, marketing: true })}
            >
              Accept all
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
