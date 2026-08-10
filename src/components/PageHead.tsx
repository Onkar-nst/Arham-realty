import { useEffect } from 'react'

/**
 * Sets the document title and meta description for a route. The site is
 * client-rendered, so this is for people scanning browser tabs and for
 * crawlers that execute JS — not a substitute for server rendering. If
 * search visibility becomes a priority, prerender the four routes at
 * build time and this hook keeps working unchanged.
 */
export default function PageHead({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  useEffect(() => {
    document.title = title
    if (!description) return

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])

  return null
}
