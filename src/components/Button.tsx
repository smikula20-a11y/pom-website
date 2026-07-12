import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'dark' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: Variant
  size?: Size
  /** Eyebrow-style caps (brand default for CTAs). Set false for softer links. */
  uppercase?: boolean
  /** Open in a new tab (external targets like Calendly / the app). */
  external?: boolean
  icon?: ReactNode
  iconRight?: ReactNode
  fullWidth?: boolean
  className?: string
  onClick?: () => void
}

/**
 * Button — Place of Motion §11 action control.
 * Fixed 8px corners; hover lift + olive glow live in index.css (.btn*).
 */
export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  uppercase = true,
  external = false,
  icon,
  iconRight,
  fullWidth = false,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    uppercase ? '' : 'btn--caps-off',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const style = fullWidth ? { width: '100%' } : undefined

  const inner = (
    <>
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex' }}>{iconRight}</span>}
    </>
  )

  if (href) {
    const rel = external ? 'noopener noreferrer' : undefined
    const target = external ? '_blank' : undefined
    return (
      <a className={classes} href={href} target={target} rel={rel} style={style} onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <button className={classes} style={style} onClick={onClick} type="button">
      {inner}
    </button>
  )
}
