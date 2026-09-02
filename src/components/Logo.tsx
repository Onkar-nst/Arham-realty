import { BRAND } from '../data/content'

/**
 * The client's registered lockup, extracted from
 * "Arham Realty Colour Logo with New Font.pdf" and matted onto
 * transparency. The wordmark is part of the artwork, so it must not be
 * re-set in a system font — per the brand guidelines the logotype is BDO
 * Grotesk Medium, which we do not license.
 *
 * The horizontal lockup ships as three files — the building mark, the
 * ARHAM logotype and the REALTY descender — so each can be sized
 * independently of the others without redrawing the art or growing the nav.
 */
export default function Logo({ variant = 'full' }: { variant?: 'full' | 'mark' }) {
  if (variant === 'mark') {
    return (
      <img
        className="brandmark brandmark--mark"
        src="/brand/arham-mark.png"
        alt={`${BRAND.name} logo`}
        width={480}
        height={298}
        decoding="async"
      />
    )
  }

  return (
    <span className="brandmark-lockup" role="img" aria-label={`${BRAND.name} logo`}>
      <img
        className="brandmark brandmark--full"
        src="/brand/arham-logo-mark.png"
        alt=""
        width={710}
        height={433}
        decoding="async"
      />
      <span className="brandmark-type">
        <img
          className="brandmark brandmark--name"
          src="/brand/arham-logo-name.png"
          alt=""
          width={488}
          height={94}
          decoding="async"
        />
        <img
          className="brandmark brandmark--sub"
          src="/brand/arham-logo-realty.png"
          alt=""
          width={152}
          height={27}
          decoding="async"
        />
      </span>
    </span>
  )
}
