import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '../components/Button'
import { nav } from '../content/site'

export function Nav() {
  const [open, setOpen] = useState(false)

  // Primär-CTA: auf schmalen Screens nur das erste Wort ("Erstgespräch"),
  // "buchen" wird per CSS ausgeblendet. Quelle bleibt nav.cta.label.
  const [ctaFirst, ...ctaRestParts] = nav.cta.label.split(' ')
  const ctaRest = ctaRestParts.join(' ')

  // Menü mit Escape schließen — erwartetes Verhalten für ein Disclosure-Menü.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="nav">
      <Link
        to="/"
        style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}
        aria-label="Place of Motion - Startseite"
      >
        <img src="/logos/pom-app-logo.svg" alt="" style={{ height: 40, display: 'block' }} />
        <img
          src="/logos/pom-slate-wortmark.svg"
          alt="place of motion"
          className="nav__hide-mobile"
          style={{ height: 20 }}
        />
      </Link>

      <nav className="nav__linkgroup" aria-label="Hauptnavigation">
        {/* Sektionslinks: inline auf Desktop, im Burger-Menü auf Mobile. */}
        <div className="nav__links nav__links--inline">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Aktions-Buttons bleiben immer im Header sichtbar (nicht im Burger). */}
        <Button href={nav.login.href} variant="secondary" size="sm" external>
          {nav.login.label}
        </Button>
        <Button href={nav.cta.href} variant="primary" size="sm" external>
          {ctaFirst}
          {ctaRest && <span className="nav__cta-suffix">{' ' + ctaRest}</span>}
        </Button>

        {/* Burger nur mobil — CSS blendet ihn ab 1024px aus. */}
        <button
          type="button"
          className="nav__burger"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="nav-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobiles Dropdown mit den Sektionslinks. */}
      <div id="nav-mobile-menu" className="nav__mobile-menu" data-open={open}>
        {nav.links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
