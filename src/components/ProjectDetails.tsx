import type { Project } from '../data/projects'
import { CONNECTIVITY_NOTE, PRELAUNCH_NOTE } from '../data/projects'

/**
 * The fact rows the client lists against every project (doc p.10):
 * location, category, configuration, timeline, tentative construction
 * area and MahaRERA number. Fields the client left blank for a project
 * are simply not rendered — nothing is filled in.
 */
export function ProjectFacts({ project, compact = false }: { project: Project; compact?: boolean }) {
  const rows: { label: string; value: string }[] = [
    { label: 'Location', value: project.location },
    { label: 'Category', value: project.category },
  ]
  if (project.configuration) rows.push({ label: 'Configuration', value: project.configuration })
  if (project.timeline) rows.push({ label: 'Timeline', value: project.timeline })
  rows.push({ label: 'Tentative Construction Area', value: project.areaLabel })
  if (project.rera) rows.push({ label: 'MahaRERA Number', value: project.rera })

  return (
    <dl className={compact ? 'pcard__meta' : 'facts'}>
      {rows.map((r) => (
        <div key={r.label} className={r.label === 'MahaRERA Number' && project.reraQr ? 'facts__rera' : undefined}>
          <dt>{r.label}</dt>
          <dd>
            {r.value}
            {r.label === 'MahaRERA Number' && project.reraQr && (
              <img
                className="facts__qr"
                src={project.reraQr}
                alt={`MahaRERA QR code for ${project.rera}`}
                width={156}
                height={156}
                loading="lazy"
              />
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** Connectivity list, key amenities and the neighbourhood note — the "show more" block. */
export function ProjectExtras({
  project,
  showDescription = false,
}: {
  project: Project
  showDescription?: boolean
}) {
  return (
    <div className="extras">
      {showDescription && project.blurb && (
        <div className="extras__block">
          {project.blurb.split('\n').map((p, idx) => (
            <p className="extras__para" key={idx}>
              {p}
            </p>
          ))}
        </div>
      )}

      {project.connectivity.length > 0 && (
        <div className="extras__block">
          <p className="extras__h">Connectivity</p>
          <ul className="connlist">
            {project.connectivity.map((c) => {
              const [place, ...rest] = c.split(' — ')
              return (
                <li key={c}>
                  <strong>{place}</strong>
                  {rest.length > 0 && <span> — {rest.join(' — ')}</span>}
                </li>
              )
            })}
          </ul>
          {project.connectivityFootnote && (
            <p className="extras__foot">{project.connectivityFootnote}</p>
          )}
          <p className="extras__fine">{CONNECTIVITY_NOTE}</p>
        </div>
      )}

      {project.amenities.length > 0 && (
        <div className="extras__block">
          <p className="extras__h">Key Amenities</p>
          <ul className="pcard__chips">
            {project.amenities.map((a) => (
              <li className="chip" key={a}>
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.neighbourhood && (
        <div className="extras__block">
          <p className="extras__h extras__h--accent">{project.neighbourhood.title}</p>
          {project.neighbourhood.paras.map((t) => (
            <p className="extras__para" key={t.slice(0, 40)}>
              {t}
            </p>
          ))}
        </div>
      )}

      {project.status === 'Upcoming' && <p className="extras__fine">{PRELAUNCH_NOTE}</p>}
    </div>
  )
}
