/* ------------------------------------------------------------------
   A ~60 line history router.

   The site is four routes deep and ships as a static bundle, so pulling
   in react-router would cost more than it returns. This gives us real
   URLs (/projects/premia-tower-a, not #premia-tower-a) so pages can be
   linked, shared and indexed — which is the point of splitting them out.

   Vercel rewrites every path to index.html; see vercel.json.
   ------------------------------------------------------------------ */

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface RouterValue {
  path: string
  navigate: (to: string, opts?: { replace?: boolean }) => void
}

const RouterContext = createContext<RouterValue>({ path: '/', navigate: () => {} })

const clean = (p: string) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p)

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => clean(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(clean(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to: string, opts?: { replace?: boolean }) => {
    /* An in-page anchor on the current route just scrolls. */
    if (to.startsWith('#')) {
      document.querySelector(to)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    const [target, hash] = to.split('#')
    const next = clean(target || window.location.pathname)

    if (next !== clean(window.location.pathname)) {
      window.history[opts?.replace ? 'replaceState' : 'pushState']({}, '', to)
      setPath(next)
      /* New page: start at the top unless the link asked for a section. */
      if (!hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    } else if (!hash) {
      /* Already here: treat the click as "take me back to the top". */
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (hash) {
      /* Let the new route paint before hunting for the target. */
      requestAnimationFrame(() =>
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }),
      )
    }
  }, [])

  return (
    <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
  )
}

export const useRouter = () => useContext(RouterContext)

/** An <a> that routes internally but behaves like a link for the browser. */
export function Link({
  to,
  children,
  ...rest
}: { to: string; children: ReactNode } & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
>) {
  const { navigate } = useRouter()
  return (
    <a
      href={to}
      onClick={(e) => {
        /* Leave modified clicks to the browser — open in new tab still works. */
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
