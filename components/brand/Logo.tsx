import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
  mode?: 'full' | 'symbol'
}

export default function Logo({ className = '', variant = 'default', mode = 'full' }: LogoProps) {
  const isSymbol = mode === 'symbol'
  const src = isSymbol
    ? (variant === 'white' ? '/logo-weiss.svg' : '/logo-schnitt.svg')
    : '/logo.svg'
  const width = isSymbol ? 44 : 200
  const height = isSymbol ? 44 : 50

  return (
    <Link href="/" aria-label="Keller Galvanik – Startseite">
      <Image
        src={src}
        alt="Keller Galvanik"
        width={width}
        height={height}
        priority
        className={`h-9 w-auto ${!isSymbol && variant === 'white' ? 'brightness-0 invert' : ''} ${className}`}
      />
    </Link>
  )
}
