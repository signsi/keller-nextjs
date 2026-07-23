import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/layout/Container'
import CtaStrip from '@/components/layout/CtaStrip'
import Accordion from '@/components/ui/Accordion'
import SplitText from '@/components/animations/SplitText'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { allVerfahrenQuery, verfahrenBySlugQuery } from '@/sanity/lib/queries'
import type { SanityVerfahren } from '@/sanity/lib/types'

const tagColors: Record<string, { bg: string; text: string }> = {
  Korrosionsschutz: { bg: '#dff0fb', text: '#1a6fa0' },
  Optik:            { bg: '#f0f4ff', text: '#4060c0' },
  Verschleiss:      { bg: '#fff8f5', text: '#c0531a' },
  Werkstoff:        { bg: '#f2f7f2', text: '#4a7a50' },
}

export async function generateStaticParams() {
  const verfahren: SanityVerfahren[] = await client.fetch(allVerfahrenQuery)
  return verfahren.map(v => ({ slug: v.slug.current }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const v: SanityVerfahren | null = await client.fetch(verfahrenBySlugQuery, { slug })
  if (!v) return {}
  return {
    title: v.name,
    description: v.beschreibung?.slice(0, 160),
  }
}

export default async function VerfahrenDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const v: SanityVerfahren | null = await client.fetch(verfahrenBySlugQuery, { slug })
  if (!v) notFound()

  const tagColor = tagColors[v.kategorie ?? ''] ?? { bg: '#dff0fb', text: '#1a6fa0' }

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-8">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/verfahren" className="hover:text-[var(--text-primary)] transition-colors">Verfahren</Link>
            <span>/</span>
            <span className="text-[var(--text-secondary)]">{v.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 pb-14 items-start">
            <div>
              {v.kategorie && (
                <span
                  className="inline-flex text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-[4px] mb-5"
                  style={{ background: tagColor.bg, color: tagColor.text }}
                >
                  {v.kategorie}
                </span>
              )}
              <SplitText
                as="h1"
                trigger="mount"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] text-[var(--text-primary)] leading-tight mb-5"
              >
                {v.name}
              </SplitText>
              {v.beschreibung && (
                <p data-reveal className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                  {v.beschreibung}
                </p>
              )}
            </div>

            {/* Specs card */}
            {v.merkmale && v.merkmale.length > 0 && (
              <div data-reveal className="lg:sticky lg:top-24 bg-[var(--bg-secondary)] rounded-[16px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-4">
                  Technische Daten
                </p>
                <dl className="space-y-3">
                  {v.merkmale.map(({ label, wert }) => (
                    <div key={label}>
                      <dt className="text-xs text-[var(--text-tertiary)] mb-0.5">{label}</dt>
                      <dd className="text-sm font-medium text-[var(--text-primary)]">{wert}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 pt-4 border-t border-[var(--border-secondary)]">
                  <Link
                    href={`/kontakt?verfahren=${encodeURIComponent(v.name)}`}
                    className="ui-button ui-button-primary flex w-full"
                  >
                    Offerte anfragen
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Intro body text */}
      {v.intro && v.intro.length > 0 && (
        <section className="bg-white pb-14">
          <Container>
            <div data-reveal className="max-w-2xl prose prose-sm text-[var(--text-secondary)] leading-relaxed">
              <PortableText value={v.intro} />
            </div>
          </Container>
        </section>
      )}

      {/* Vorteile */}
      {v.vorteile && v.vorteile.length > 0 && (
        <section className="bg-[var(--bg-secondary)] py-14 lg:py-20">
          <Container>
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">
              Vorteile
            </p>
            <SplitText className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-10">
              Warum {v.name}?
            </SplitText>
            <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {v.vorteile.map(({ titel, text }, i) => (
                <div key={titel ?? i} className="bg-white rounded-[14px] p-6">
                  <span className="text-2xl font-black text-[var(--bg-tertiary)] tabular-nums leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mt-3 mb-2 leading-snug">{titel}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      {v.faq && v.faq.length > 0 && (
        <section className="bg-white py-14 lg:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
              <div>
                <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">FAQ</p>
                <SplitText className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Häufige Fragen.
                </SplitText>
              </div>
              <div data-reveal>
                <Accordion items={v.faq.map(({ frage, antwort }) => ({ question: frage, answer: antwort }))} />
              </div>
            </div>
          </Container>
        </section>
      )}

      <CtaStrip
        heading={`Interesse an ${v.name}?`}
        subline="Beschreiben Sie Ihr Bauteil und Ihre Anforderungen — wir melden uns innert 24 Stunden."
        primaryCta={{ label: 'Offerte anfragen', href: `/kontakt?verfahren=${encodeURIComponent(v.name)}` }}
        secondaryCta={{ label: 'Alle Verfahren', href: '/verfahren' }}
        variant="dark"
      />
    </>
  )
}
