import { BRAND } from '../data/content'

/**
 * The client's registered lockup, extracted from
 * "Arham Realty Colour Logo with New Font.pdf" and matted onto
 * transparency. The wordmark is part of the artwork, so it must not be
 * re-set in a system font — per the brand guidelines the logotype is BDO
 * Grotesk Medium, which we do not license.
 */
export default function Logo({ variant = 'full' }: { variant?: 'full' | 'mark' }) {
  const src = variant === 'mark' ? '/brand/arham-mark.png' : '/brand/arham-logo.png'
  return (
    <img
      className={`brandmark brandmark--${variant}`}
      src={src}
      alt={`${BRAND.name} logo`}
      width={variant === 'mark' ? 480 : 1200}
      height={variant === 'mark' ? 298 : 447}
      decoding="async"
    />
  )
}
