import { useEffect, useRef } from 'react'
import L from 'leaflet'
import type { Pin } from '../data/content'

/**
 * The geographical plot for the Footprint section.
 *
 * Leaflet is driven imperatively rather than through a React wrapper so
 * the marker layer can be rebuilt on a filter change without tearing the
 * map down.
 *
 * Tiles are Esri's World Dark Gray Canvas, split into a base and a
 * separate label layer. It is keyless, and the dark plate matches the
 * reference the client approved while leaving the status pins as the
 * only colour on the map. CARTO's basemaps were the obvious first
 * choice but now stamp "API KEY REQUIRED" across every tile — the same
 * watermark visible on the reference site.
 */

const ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas'
const BASE = `${ESRI}/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}`
const LABELS = `${ESRI}/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}`
const ATTRIB = '&copy; <a href="https://www.esri.com/">Esri</a>, HERE, Garmin, OpenStreetMap'

/* Mumbai and Thane, wide enough to hold Worli and Nalasopara at once. */
const BOUNDS = L.latLngBounds([18.98, 72.78], [19.44, 72.99])

interface Props {
  pins: Pin[]
  /** Region to fly to; null shows the whole footprint. */
  focus: string | null
  onSelect: (href: string) => void
}

export default function FootprintMap({ pins, focus, onSelect }: Props) {
  const host = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const layer = useRef<L.LayerGroup | null>(null)
  const select = useRef(onSelect)
  select.current = onSelect

  /* Create once. */
  useEffect(() => {
    if (!host.current || map.current) return
    const m = L.map(host.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      /* On a phone the map is full-bleed, so a one-finger drag would
         trap the page scroll. Pan is left to the zoom buttons there. */
      dragging: !L.Browser.mobile,
      attributionControl: true,
      minZoom: 9,
      maxZoom: 16,
    })
    L.tileLayer(BASE, { attribution: ATTRIB, maxZoom: 16 }).addTo(m)
    L.tileLayer(LABELS, { maxZoom: 16, pane: 'shadowPane', className: 'fp-labels' }).addTo(m)
    L.control.zoom({ position: 'topleft' }).addTo(m)
    m.fitBounds(BOUNDS, { padding: [24, 24] })
    layer.current = L.layerGroup().addTo(m)
    map.current = m

    /* The section animates in, so the container has no size on mount. */
    let fitted = false
    const ro = new ResizeObserver(() => {
      m.invalidateSize()
      /* First real size: re-fit, since the mount-time fit had none. */
      if (!fitted && host.current?.clientWidth) {
        fitted = true
        m.fitBounds(BOUNDS, { padding: [24, 24] })
      }
    })
    ro.observe(host.current)
    return () => {
      ro.disconnect()
      m.remove()
      map.current = null
    }
  }, [])

  /* Rebuild markers whenever the filtered set changes. */
  useEffect(() => {
    const g = layer.current
    if (!g) return
    g.clearLayers()
    for (const p of pins) {
      const icon = L.divIcon({
        className: 'fp-pin-wrap',
        html: `<span class="fp-pin fp-pin--${p.status}"></span>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })
      L.marker(p.coords, { icon, title: p.name, riseOnHover: true })
        .bindTooltip(
          `<strong>${p.name}</strong><span>${p.location} · ${p.status}</span>`,
          { className: 'fp-tip', direction: 'top', offset: [0, -10] },
        )
        .on('click', () => select.current(p.href))
        .addTo(g)
    }
  }, [pins])

  /* Fly to the selected corridor, or back out to the whole footprint. */
  useEffect(() => {
    const m = map.current
    if (!m) return
    const inRegion = focus ? pins.filter((p) => p.region === focus) : []
    if (inRegion.length) {
      m.flyToBounds(L.latLngBounds(inRegion.map((p) => p.coords)), {
        padding: [70, 70],
        maxZoom: 14,
        duration: 0.9,
      })
    } else {
      m.flyToBounds(BOUNDS, { padding: [24, 24], duration: 0.9 })
    }
  }, [focus, pins])

  return <div className="fp__map" ref={host} role="application" aria-label="Map of Arham Realty projects across Mumbai and Thane" />
}
