import Link from 'next/link'
import Container from '@/components/layout/Container'
import Eyebrow from '@/components/ui/Eyebrow'

interface Crumb { label: string; href: string }

interface PageHeroProps {
  kicker?: string
  title: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  breadcrumbs?: Crumb[]
  size?: 'default' | 'large'
}

export default function PageHero({
  kicker,
  title,
  description,
  primaryCta,
  secondaryCta,
  breadcrumbs,
  size = 'default',
}: PageHeroProps) {
  return (
    <section className="bg-white pt-10 pb-14">
      <Container>
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-(--text-tertiary) mb-8" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                <Link href={crumb.href} className="hover:text-(--text-primary) transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
            <span>/</span>
            <span className="text-(--text-secondary)">{title}</span>
          </nav>
        )}

        {/* Kicker */}
        {kicker && <Eyebrow reveal={false} className="mb-4">{kicker}</Eyebrow>}

        {/* Title */}
        <h1 className={`font-bold tracking-[-0.025em] text-(--text-primary) leading-tight max-w-3xl
          ${size === 'large'
            ? 'text-4xl sm:text-5xl lg:text-[3.25rem]'
            : 'text-3xl sm:text-4xl lg:text-[2.75rem]'
          }`}>
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-base sm:text-lg text-(--text-secondary) leading-relaxed max-w-2xl">
            {description}
          </p>
        )}

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="ui-button ui-button-primary"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="ui-button ui-button-secondary"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
