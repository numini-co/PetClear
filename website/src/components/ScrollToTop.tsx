import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollWindowToTop() {
  const root = document.documentElement
  const previous = root.style.scrollBehavior
  // Site CSS sets `html { scroll-behavior: smooth }`; override so route
  // changes jump instead of animating from the previous page's offset.
  root.style.scrollBehavior = 'auto'
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  root.style.scrollBehavior = previous
}

function scrollToHashTarget(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  if (!id) return false
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView()
  return true
}

/** Reset window scroll on client-side navigations; honor in-page #anchors. */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Hash target may not exist yet on lazy routes — retry after paint.
      if (scrollToHashTarget(hash)) return
      scrollWindowToTop()
      const frame = window.requestAnimationFrame(() => {
        if (!scrollToHashTarget(hash)) scrollWindowToTop()
      })
      return () => window.cancelAnimationFrame(frame)
    }

    scrollWindowToTop()
  }, [pathname, search, hash])

  return null
}
