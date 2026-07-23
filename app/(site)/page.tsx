import HomeHero from '@/components/home/HomeHero'
import HomeSurfacePartner from '@/components/home/HomeSurfacePartner'
import HomeCategoryTeaserGrid from '@/components/home/HomeCategoryTeaserGrid'
import HomeTopicsBento from '@/components/home/HomeTopicsBento'
import VerfahrenBento from '@/components/home/VerfahrenBento'
import QualitaetTeaser from '@/components/home/QualitaetTeaser'
import HomeFaq from '@/components/home/HomeFaq'
import PersonCta from '@/components/home/PersonCta'
import BrancheTile from '@/components/branchen/BrancheTile'
import InquiryForm from '@/components/forms/InquiryForm'
import SplitText from '@/components/animations/SplitText'
import Container from '@/components/layout/Container'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { allBranchenQuery, siteSettingsQuery, homepageQuery } from '@/sanity/lib/queries'
import type { SanityBranche, SanitySettings, HomepageData } from '@/sanity/lib/types'

export default async function Home() {
  const [branchen, settings, homepage]: [SanityBranche[], SanitySettings | null, HomepageData | null] = await Promise.all([
    client.fetch(allBranchenQuery),
    client.fetch(siteSettingsQuery),
    client.fetch(homepageQuery),
  ])

  const branchenPreview = branchen.slice(0, 4)
  const inq = homepage?.inquiry

  return (
    <>
      <HomeHero data={homepage?.hero} />
      <HomeSurfacePartner settings={settings} />
      <HomeCategoryTeaserGrid />
      <HomeTopicsBento />
      <VerfahrenBento />

      {/* Branchen */}
      {branchenPreview.length > 0 && (
        <section className="bg-[var(--bg-secondary)] py-16 lg:py-24">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">Branchen</p>
                <SplitText className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Für wen wir arbeiten.
                </SplitText>
              </div>
              <Link data-reveal href="/branchen" className="shrink-0 text-sm font-semibold text-[#0091d4] hover:text-[#007ab8] transition-colors whitespace-nowrap">
                Alle Branchen →
              </Link>
            </div>
            <div data-reveal-stagger className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {branchenPreview.map(b => (
                <BrancheTile key={b._id} branche={b} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <QualitaetTeaser data={homepage?.qualitaet} />
      <HomeFaq items={homepage?.faq} />
      <PersonCta settings={settings} />

      {/* Quick inquiry */}
      <section className="py-16 lg:py-24 bg-[var(--bg-secondary)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">
                {inq?.kicker ?? 'Offerte anfragen'}
              </p>
              <SplitText className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-4">
                {inq?.heading ?? 'Schnell zum Angebot.'}
              </SplitText>
              <p data-reveal className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm mb-6">
                {inq?.body ?? 'Beschreiben Sie Ihr Bauteil und Ihre Anforderungen — wir melden uns innert 24 Stunden.'}
              </p>
              <ul data-reveal-stagger className="space-y-3">
                {(inq?.bullets && inq.bullets.length > 0
                  ? inq.bullets
                  : ['Antwort innert 24 Stunden', 'Kostenlose technische Erstberatung', 'Kein Minimum bei Erstaufträgen']
                ).map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a5ec] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <InquiryForm layout="inline" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
