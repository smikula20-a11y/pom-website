import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { nav } from '../content/site'

export function Nav() {
  return (
    <header className="nav">
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14 }} aria-label="Place of Motion - Startseite">
        <img src="/logos/pom-app-logo.svg" alt="" style={{ height: 40, display: 'block' }} />
        <img
          src="/logos/pom-slate-wortmark.svg"
          alt="place of motion"
          className="nav__hide-mobile"
          style={{ height: 20 }}
        />
      </Link>
      <nav className="nav__linkgroup">
        <div className="nav__links nav__hide-mobile">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <Button href={nav.login.href} variant="secondary" size="sm" external className="nav__hide-md">
          {nav.login.label}
        </Button>
        <Button href={nav.cta.href} variant="primary" size="sm" external>
          {nav.cta.label}
        </Button>
      </nav>
    </header>
  )
}
