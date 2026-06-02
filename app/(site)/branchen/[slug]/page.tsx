import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import CtaStrip from '@/components/layout/CtaStrip'
import SplitText from '@/components/animations/SplitText'
import { client } from '@/sanity/lib/client'
import { allBranchenQuery, brancheBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityBranche } from '@/sanity/lib/types'

export async function generateStaticParams() {
  const branchen: SanityBranche[] = await client.fetch(allBranchenQuery)
  return branchen.map(b => ({ slug: b.slug.current }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const b: SanityBranche | null = await client.fetch(brancheBySlugQuery, { slug })
  if (!b) return {}
  return {
    title: b.name,
    description: b.lead?.slice(0, 160) ?? b.beschreibung?.slice(0, 160),
  }
}

export default async function BrancheDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const [b, allBranchen]: [SanityBranche | null, SanityBranche[]] = await Promise.all([
    client.fetch(brancheBySlugQuery, { slug }),
    client.fetch(allBranchenQuery),
  ])
  if (!b) notFound()

  const otherBranchen = allBranchen.filter(br => br.slug.current !== slug)

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-8">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/branchen" className="hover:text-[var(--text-primary)] transition-colors">Branchen</Link>
            <span>/</span>
            <span className="text-[var(--text-secondary)]">{b.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 pb-14">
            <div className="flex flex-col justify-center">
              <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-4">Branche</p>
              <SplitText as="h1" trigger="mount" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] text-[var(--text-primary)] leading-tight mb-5">
                {b.name}
              </SplitText>
              {(b.lead ?? b.beschreibung) && (
                <p data-reveal className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                  {b.lead ?? b.beschreibung}
                </p>
              )}
              <div data-reveal className="mt-8">
                <Link
                  href={`/kontakt?branche=${encodeURIComponent(b.name)}`}
                  className="inline-flex items-center h-11 px-6 text-sm font-semibold text-white bg-[#00a5ec] hover:bg-[#0091d4] rounded-[4px] transition-colors"
                >
                  Offerte anfragen
                </Link>
              </div>
            </div>

            <div data-reveal className="rounded-[16px] overflow-hidden aspect-square relative bg-[var(--bg-secondary)]">
              {b.bild ? (
                <Image
                  src={urlFor(b.bild).width(840).height(840).fit('crop').url()}
                  alt={b.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-[var(--bg-tertiary)]" />
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Relevante Verfahren */}
      {b.verfahren && b.verfahren.length > 0 && (
        <section className="bg-[var(--bg-secondary)] py-14 lg:py-20">
          <Container>
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">Typische Verfahren</p>
            <SplitText className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-8">
              Empfohlene Beschichtungen.
            </SplitText>
            <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {b.verfahren.map(v => (
                <Link
                  key={v._id}
                  href={`/verfahren/${v.slug.current}`}
                  className="group bg-white rounded-[14px] p-6 hover:shadow-[0_6px_24px_rgba(15,17,23,0.10)] transition-shadow duration-200"
                >
                  <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[#0091d4] transition-colors mb-2">
                    {v.name}
                  </h3>
                  {v.beschreibung && (
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{v.beschreibung}</p>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0091d4] opacity-0 group-hover:opacity-100 transition-opacity">
                    Mehr erfahren
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Weitere Branchen */}
      {otherBranchen.length > 0 && (
        <section className="bg-white py-14 lg:py-20">
          <Container>
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">Weitere Branchen</p>
            <div data-reveal-stagger className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
              {otherBranchen.map(br => (
                <Link key={br._id} href={`/branchen/${br.slug.current}`} className="group block">
                  <div className="rounded-[10px] overflow-hidden aspect-square relative bg-[var(--bg-secondary)]">
                    {br.bild ? (
                      <Image
                        src={urlFor(br.bild).width(200).height(200).fit('crop').url()}
                        alt={br.name}
                        fill
                        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[var(--bg-tertiary)]" />
                    )}
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-[var(--text-secondary)] group-hover:text-[#0091d4] transition-colors leading-snug text-center">
                    {br.name}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaStrip
        heading={`${b.name} — bereit für Ihre Anfrage?`}
        subline="Senden Sie uns Ihre Zeichnung oder beschreiben Sie Ihre Anforderungen — wir melden uns innert 24 Stunden."
        primaryCta={{ label: 'Offerte anfragen', href: `/kontakt?branche=${encodeURIComponent(b.name)}` }}
        secondaryCta={{ label: 'Alle Branchen', href: '/branchen' }}
        variant="dark"
      />
    </>
  )
}
