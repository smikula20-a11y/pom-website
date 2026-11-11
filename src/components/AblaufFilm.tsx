import { useEffect, useRef } from 'react'
import { Container } from './primitives'
import { Button } from './Button'
import { cta, demo, hero } from '../content/site'

/**
 * AblaufFilm - „So läuft's live“ auf der Startseite (ersetzt FlowLoop, Stefan 11.11.2026).
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
    <section id="demo" style={{ background: '#eceae4' }}>
      <Container className="section ablauf">
        <div className="pom-eyebrow ablauf__eyebrow">{demo.eyebrow}</div>

        <div className="ablauf-film">
          <FilmVideo format="hoch" />
          <FilmVideo format="quer" />
        </div>

        {/* Die vier Schritte als lesbarer Text (auch für Suchmaschinen) */}
        <ol className="ablauf__schritte">
          {demo.schritte.map((schritt, i) => (
            <li key={schritt.text}>
              <span className="ablauf__nr">{i + 1}</span>
              {schritt.text}
              {schritt.pro && <span className="ablauf__pro">PRO</span>}
            </li>
          ))}
        </ol>

        <div className="ablauf__cta">
          <Button href={cta.secondary.href} variant="primary" size="lg" external>
            {cta.secondary.label}
          </Button>
          <div className="ablauf__microcopy">{hero.microcopy}</div>
        </div>
      </Container>
    </section>
  )
}
