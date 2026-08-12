import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import InquiryForm from '@/components/forms/InquiryForm'
import SplitText from '@/components/animations/SplitText'
import { client } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanitySettings } from '@/sanity/lib/types'
import Eyebrow from '@/components/ui/Eyebrow'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Offerte anfragen oder technische Beratung — wir melden uns innert 24 Stunden.',
}

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ verfahren?: string; branche?: string }>
}) {
  const [params, settings]: [Awaited<typeof searchParams>, SanitySettings | null] = await Promise.all([
    searchParams,
    client.fetch(siteSettingsQuery),
  ])
  const preselected = params.verfahren ?? ''

  const telefon = settings?.ansprechperson?.telefon ?? settings?.telefon ?? '+41 00 000 00 00'
  const email = settings?.email ?? 'info@keller-galvanik.ch'
  const firmenname = settings?.firmenname ?? 'Keller Galvanik AG'
  const strasse = settings?.strasse ?? 'Musterstrasse 1'
  const plzOrt = settings?.plzOrt ?? '0000 Musterort'
  const person = settings?.ansprechperson
  const oeffnungszeiten = settings?.oeffnungszeiten ?? [
    { tag: 'Mo – Do', zeit: '07:30 – 12:00 / 13:00 – 17:00' },
    { tag: 'Fr', zeit: '07:30 – 12:00 / 13:00 – 16:00' },
    { tag: 'Sa – So', zeit: 'Geschlossen' },
  ]

  const portraitUrl = person?.portrait
    ? urlFor(person.portrait).width(128).height(148).fit('crop').url()
    : '/peter-keller-portrait.webp'

  return (
    <>
      <section className="bg-white pt-10 pb-16 lg:pb-24">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-(--text-tertiary) mb-8">
            <Link href="/" className="hover:text-(--text-primary) transition-colors">Home</Link>
            <span>/</span>
            <span className="text-(--text-secondary)">Kontakt</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">

            <div>
              <Eyebrow className="mb-4">Kontakt</Eyebrow>
              <SplitText as="h1" trigger="mount" className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-(--text-primary) leading-tight mb-2">
                Offerte anfragen.
              </SplitText>
              <p data-reveal className="text-base text-(--text-secondary) leading-relaxed mb-8 max-w-lg">
                Beschreiben Sie Ihr Bauteil und Ihre Anforderungen — wir melden uns innert 24 Stunden mit einer ersten Einschätzung oder einem unverbindlichen Angebot.
              </p>
              <div data-reveal>
                <InquiryForm layout="full" preselectedVerfahren={preselected} />
              </div>
            </div>

            <div data-reveal className="lg:sticky lg:top-24 space-y-6">

              <div className="bg-(--bg-secondary) rounded-[16px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-4">Ihr Ansprechpartner</p>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-16 h-[74px] rounded-[10px] overflow-hidden bg-(--bg-tertiary)">
                    <Image
                      src={portraitUrl}
                      alt={person?.name ?? 'Ansprechpartner'}
                      width={64}
                      height={74}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-(--text-primary)">{person?.name ?? 'Peter Keller'}</p>
                    <p className="text-xs text-(--text-tertiary) mt-0.5 mb-3">{person?.titel ?? 'Geschäftsführer'}</p>
                    <a href={`tel:${telefon.replace(/\s/g, '')}`} className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors">
                      {telefon}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-(--bg-secondary) rounded-[16px] p-6 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary)">Adresse</p>
                <div className="text-sm text-(--text-secondary) leading-relaxed">
                  <p className="font-semibold text-(--text-primary)">{firmenname}</p>
                  <p>{strasse}</p>
                  <p>{plzOrt}</p>
                  <p>Schweiz</p>
                </div>
                <div className="pt-2 space-y-2 text-sm">
                  <a href={`tel:${telefon.replace(/\s/g, '')}`} className="flex items-center gap-2 text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-(--text-tertiary)">
                      <path d="M1.5 2.5C1.5 2 2 1.5 2.5 1.5h2l.75 2.25L4 5a8 8 0 0 0 5 5l1.25-1.25L12.5 9.5v2c0 .5-.5 1-1 1C5 12.5 1.5 8 1.5 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {telefon}
                  </a>
                  <a href={`mailto:${email}`} className="flex items-center gap-2 text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-(--text-tertiary)">
                      <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M1.5 4.5L7 8l5.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    {email}
                  </a>
                </div>
              </div>

              <div className="bg-(--bg-secondary) rounded-[16px] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-(--text-tertiary) mb-4">Öffnungszeiten</p>
                <div className="space-y-2 text-sm text-(--text-secondary)">
                  {oeffnungszeiten.map(({ tag, zeit }) => (
                    <div key={tag} className="flex justify-between gap-4">
                      <span className="font-medium text-(--text-primary) shrink-0">{tag}</span>
                      <span className="text-right">{zeit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
