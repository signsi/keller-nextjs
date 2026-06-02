import type { Metadata } from 'next'
import VerfahrenGrid from '@/components/verfahren/VerfahrenGrid'
import CtaStrip from '@/components/layout/CtaStrip'
import Container from '@/components/layout/Container'
import SplitText from '@/components/animations/SplitText'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { allVerfahrenQuery, seitenInhalteQuery } from '@/sanity/lib/queries'
import type { SanityVerfahren, SeitenInhalteData } from '@/sanity/lib/types'

export const metadata: Metadata = {
  title: 'Verfahren',
  description: 'Galvanische und chemische Beschichtungsverfahren für industrielle Bauteile — von Chemisch Vernickeln bis Elektropolieren.',
}

export default async function VerfahrenPage() {
  const [verfahren, seiten]: [SanityVerfahren[], SeitenInhalteData | null] = await Promise.all([
    client.fetch(allVerfahrenQuery),
    client.fetch(seitenInhalteQuery),
  ])

  const s = seiten?.verfahren

  return (
    <>
      <section className="bg-white pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-8">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--text-secondary)]">Verfahren</span>
          </nav>
          <div className="max-w-2xl pb-14">
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-4">
              {s?.kicker ?? 'Oberflächentechnik'}
            </p>
            <SplitText as="h1" trigger="mount" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] text-[var(--text-primary)] leading-tight mb-5">
              {s?.heading ?? 'Das richtige Verfahren für Ihr Bauteil.'}
            </SplitText>
            <p data-reveal className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {s?.intro ?? 'Galvanische und chemische Beschichtungsverfahren für Korrosionsschutz, Verschleissbeständigkeit, Optik und Werkstoffeigenschaften.'}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--bg-secondary)] py-12 lg:py-16">
        <Container>
          <VerfahrenGrid verfahren={verfahren} />
        </Container>
      </section>

      <CtaStrip
        heading={s?.cta ?? 'Unsicher welches Verfahren?'}
        subline={s?.ctaSubline ?? 'Unsere Techniker beraten Sie kostenlos — von der Verfahrenswahl bis zur Spezifikation.'}
        primaryCta={{ label: 'Beratung anfragen', href: '/kontakt' }}
        secondaryCta={{ label: 'Offerte anfragen', href: '/kontakt' }}
        variant="dark"
      />
    </>
  )
}
