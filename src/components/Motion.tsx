import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

/* The theme's one easing curve: cubic-bezier(0.25, 0.1, 0.25, 1) */
export const EASE = [0.25, 0.1, 0.25, 1] as const
export const DUR = 0.4

/**
 * Scroll-triggered fade-up. Framer's appear effects move 10/20/30px —
 * `distance` picks which band, `delay` staggers siblings.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 20,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  distance?: number
  className?: string
  as?: 'div' | 'span' | 'li' | 'section'
}) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: DUR + 0.25, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}

/** Reveals children in sequence with a fixed stagger. */
export function RevealGroup({
  children,
  stagger = 0.08,
  className,
}: {
  children: ReactNode
  stagger?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const revealItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: DUR + 0.25, ease: EASE } },
}

/**
 * Per-line masked rise, used on display headings. Each line sits in an
 * overflow-hidden track and slides up from below the mask.
 */
/** A line is either plain text, or plain text followed by an accented tail
    that must stay on the same line (e.g. "Since 1994"). */
export type MaskedLine = string | { text: string; accent: string }

const lineKey = (line: MaskedLine) => (typeof line === 'string' ? line : line.text + line.accent)

export function MaskedLines({
  lines,
  className,
  delay = 0,
  accentIndex,
}: {
  lines: MaskedLine[]
  className?: string
  delay?: number
  /** Render this line in the accent serif-italic treatment. */
  accentIndex?: number
}) {
  /* The observer must sit on the wrapper, not on the sliding line: each
     line starts translated fully below its own overflow:hidden mask, so an
     observer attached to it would report 0% visibility and never fire. */
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <span className={['mask-lines', className].filter(Boolean).join(' ')} ref={ref}>
      {lines.map((line, i) => (
        <span className="mask-line" key={lineKey(line) + i}>
          <motion.span
            className={i === accentIndex ? 'accent-line' : undefined}
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : { y: '110%' }}
            transition={{
              duration: 0.75,
              ease: EASE,
              delay: delay + i * 0.085,
            }}
          >
            {typeof line === 'string' ? (
              line
            ) : (
              <>
                {line.text} <span className="accent-line">{line.accent}</span>
              </>
            )}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Counts up to `value` once scrolled into view. */
export function Counter({
  value,
  decimals = 0,
  duration = 1.6,
}: {
  value: number
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(decimals ? (0).toFixed(decimals) : '0')

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      // easeOutExpo — fast start, long settle
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setDisplay((value * eased).toFixed(decimals))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, decimals, duration])

  return <span ref={ref}>{display}</span>
}

/** Subtle parallax — translates content as the element crosses the viewport. */
export function useParallax(strength = 40) {
  const ref = useRef<HTMLDivElement>(null)
  const raw = useMotionValue(0)
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (r.bottom < 0 || r.top > vh) return
      // -1 (entering from below) → 1 (leaving at top)
      const progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2)
      raw.set(progress * strength)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [raw, strength])

  return { ref, y }
}
