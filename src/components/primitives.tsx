import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'motion/react'

/** Centered content column at the design's 1120px inner width. */
export function Container({
  children,
  style,
  className,
}: {
  children: ReactNode
  style?: CSSProperties
  className?: string
}) {
  return (
    <div
      className={className}
      style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', ...style }}
    >
      {children}
    </div>
  )
}

/** Uppercase brand eyebrow. `tone` picks light (on white) vs olive vs on-dark. */
export function Eyebrow({
  children,
  tone = 'olive',
  style,
}: {
  children: ReactNode
  tone?: 'olive' | 'muted' | 'on-olive'
  style?: CSSProperties
}) {
  const color =
    tone === 'olive'
      ? 'var(--pom-olive)'
      : tone === 'on-olive'
        ? 'rgba(255,255,255,.65)'
        : 'var(--pom-stone-500)'
  return (
    <div className="pom-eyebrow" style={{ color, marginBottom: 16, ...style }}>
      {children}
    </div>
  )
}

/** Subtle scroll-reveal. Respects reduced motion via MotionConfig (see App). */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  style,
}: {
  children: ReactNode
  delay?: number
  y?: number
  style?: CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
