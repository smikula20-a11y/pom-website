import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { nichtGefunden, seiten, type Seitenpfad } from '../content/seo'

/** Setzt Titel und Beschreibung beim Seitenwechsel im Browser. */
export function Seitentitel() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seite = seiten[pathname as Seitenpfad] ?? nichtGefunden
    document.title = seite.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', seite.description)
  }, [pathname])
  return null
}
