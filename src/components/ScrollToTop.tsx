import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrollt bei Routenwechsel nach oben — oder, wenn ein Hash gesetzt ist,
 * zur Ziel-Section. So funktionieren die Nav-Anker (z. B. /#preise) auch
 * von einer Unterseite (Impressum/Datenschutz/AGB) aus.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // rAF: warten, bis die Home-Sektionen im DOM sind (Route gerade gewechselt).
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo(0, 0)
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
