import type { CSSProperties, ReactNode } from 'react'
import { Button } from './Button'
import { cta } from '../content/site'

/** Ein Knopf mit einer kurzen Zeile darunter, was nach dem Klick passiert. */
export function KnopfMitZeile({ zeile, children }: { zeile: string; children: ReactNode }) {
  return (
    <div className="knopf-mit-zeile">
      {children}
      <span className="knopf-zeile">{zeile}</span>
    </div>
  )
}

/**
 * Die zwei Knöpfe der Website, überall gleich (Befund 2, Stefan 22.11.2026):
 * zuerst „Erstgespräch buchen“ (grün), daneben „Kostenlos BASIC starten“ (olivfarben umrandet),
 * unter jedem eine Zeile aus `cta` in site.ts. Auf dem olivfarbenen Schlussband ist der
 * Hauptknopf weiß.
 */
export function KnopfPaar({
  mitte = false,
  aufOlive = false,
  style,
}: {
  mitte?: boolean
  aufOlive?: boolean
  style?: CSSProperties
}) {
  const klassen = ['knopf-paar', mitte ? 'knopf-paar--mitte' : '', aufOlive ? 'knopf-paar--olive' : '']
    .filter(Boolean)
    .join(' ')
  return (
    <div className={klassen} style={style}>
      <KnopfMitZeile zeile={cta.primary.zeile}>
        <Button href={cta.primary.href} variant={aufOlive ? 'white' : 'primary'} size="lg" external>
          {cta.primary.label}
        </Button>
      </KnopfMitZeile>
      <KnopfMitZeile zeile={cta.secondary.zeile}>
        <Button
          href={cta.secondary.href}
          variant="secondary"
          size="lg"
          uppercase={false}
          external
          className={aufOlive ? 'btn-on-olive' : undefined}
        >
          {cta.secondary.label}
        </Button>
      </KnopfMitZeile>
    </div>
  )
}
