import Link from 'next/link'
import Container from '@/components/layout/Container'

interface CtaStripProps {
  heading: string
  subline?: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'blue' | 'dark'
}

export default function CtaStrip({
  heading,
  subline,
  primaryCta,
  secondaryCta,
  variant = 'dark',
}: CtaStripProps) {
  const isBlue = variant === 'blue'

  return (
    <section className={`py-16 ${isBlue ? 'bg-[#00a5ec]' : 'bg-steel-800'}`}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white leading-tight">
              {heading}
            </h2>
            {subline && (
              <p className={`mt-2 text-sm leading-relaxed max-w-md ${isBlue ? 'text-white/80' : 'text-white/50'}`}>
                {subline}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href={primaryCta.href}
              className={`ui-button
                ${isBlue
                  ? 'bg-white text-[#0083bd] hover:bg-white/90'
                  : 'ui-button-primary'
                }`}
            >
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`ui-button ${isBlue ? 'text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20' : 'ui-button-secondary'}`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
