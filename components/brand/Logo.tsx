import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
}

export default function Logo({ className = '', variant = 'default' }: LogoProps) {
  return (
    <Link href="/" aria-label="Keller Galvanik – Startseite">
      <Image
        src="/logo.svg"
        alt="Keller Galvanik"
        width={200}
        height={50}
        priority
        className={`h-9 w-auto ${variant === 'white' ? 'brightness-0 invert' : ''} ${className}`}
      />
    </Link>
  )
}
