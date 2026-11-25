import { useEffect, useRef } from 'react'
import { Container } from './primitives'
import { KnopfPaar } from './KnopfPaar'
import { demo } from '../content/site'

/**
 * AblaufFilm - „So funktioniert's“ auf der Startseite (ersetzt FlowLoop, Stefan 11.11.2026;
 * seit 23.11.2026 mit den vier Schritten als Text, der frühere Abschnitt „So funktioniert's“ entfällt).
 * Gerechneter Film ohne Ton, 12 s, nahtlose Schleife: Plan erstellen, Teilen, Üben, Verkaufen.
 * Gebaut mit HyperFrames in C:\Users\smiku\claude code\pom-videos\videos\startseite-ablauf
 * (Querformat wird daraus erzeugt: startseite-ablauf-quer).
 *
 * Unter 880 px Breite das Hochformat (4:5), darüber das Querformat (16:10). Nur das sichtbare
 * Video lädt (preload="none"), es startet erst beim Hinscrollen und hält an, wenn es aus dem Bild ist.
 * Bei „Bewegung reduzieren“ oder wenn das Gerät nicht abspielt, steht das Bild „Üben.“ da.
 */

function FilmVideo({ format }: { format: 'hoch' | 'quer' }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const standbild = () => {
      video.poster = `/video/startseite-ablauf-${format}-ueben.jpg`
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      standbild()
      return
    }
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting) video.play().catch(standbild)
        else video.pause()
      },
      { threshold: 0.3 },
    )
    beobachter.observe(video)
    return () => beobachter.disconnect()
  }, [format])

  const hoch = format === 'hoch'
  return (
    <video
      ref={ref}
      className={`ablauf-film__video ablauf-film__video--${format}`}
      poster={`/video/startseite-ablauf-${format}-start.jpg`}
      muted
      loop
      playsInline
      preload="none"
      width={hoch ? 1080 : 1600}
      height={hoch ? 1350 : 1000}
      aria-label={demo.filmLabel}
    >
      {hoch && <source src="/video/startseite-ablauf-hoch.webm" type="video/webm" />}
      <source src={`/video/startseite-ablauf-${format}.mp4`} type="video/mp4" />
    </video>
  )
}

export function AblaufFilm() {
  return (
    // Seit 23.11.2026 auch „So funktioniert's“ (Befund 8): eigener Abschnitt entfällt, Anker bleibt für die Navigation.
    <section id="so-funktionierts" style={{ background: '#eceae4' }}>
      <Container className="section ablauf">
        <div className="pom-eyebrow ablauf__eyebrow">{demo.eyebrow}</div>
        <h2 className="ablauf__titel">{demo.heading}</h2>

        <div className="ablauf-film">
          <FilmVideo format="hoch" />
          <FilmVideo format="quer" />
        </div>

        {/* Die vier Schritte als lesbarer Text (auch für Suchmaschinen) */}
        <ol className="ablauf__schritte">
          {demo.schritte.map((schritt, i) => (
            <li key={schritt.titel}>
              <span className="ablauf__nr">{i + 1}</span>
              <span>
                <span className="ablauf__schritt-titel">
                  {schritt.titel}
                  {schritt.pro && <span className="ablauf__pro">PRO</span>}
                </span>
                <span className="ablauf__schritt-text">{schritt.text}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="ablauf__cta">
          <KnopfPaar stelle="film" mitte />
        </div>
      </Container>
    </section>
  )
}
