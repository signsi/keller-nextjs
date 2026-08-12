import HomeHero from '@/components/home/HomeHero'
import HomeSurfacePartner from '@/components/home/HomeSurfacePartner'
import HomeCategoryTeaserGrid from '@/components/home/HomeCategoryTeaserGrid'
import QualitaetTeaser from '@/components/home/QualitaetTeaser'
import HomeFaq from '@/components/home/HomeFaq'
import HomeDirectContactCta from '@/components/home/HomeDirectContactCta'
import HomeKontaktCta from '@/components/home/HomeKontaktCta'
import BrancheTile from '@/components/branchen/BrancheTile'
import SplitText from '@/components/animations/SplitText'
import Container from '@/components/layout/Container'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { allBranchenQuery, siteSettingsQuery, homepageQuery } from '@/sanity/lib/queries'
import type { SanityBranche, SanitySettings, HomepageData } from '@/sanity/lib/types'
import Eyebrow from '@/components/ui/Eyebrow'

export default async function Home() {
  const [branchen, settings, homepage]: [SanityBranche[], SanitySettings | null, HomepageData | null] = await Promise.all([
    client.fetch(allBranchenQuery),
    client.fetch(siteSettingsQuery),
    client.fetch(homepageQuery),
  ])

  const branchenPreview = branchen.slice(0, 4)

  return (
    <>
      <HomeHero data={homepage?.hero} />
      <HomeSurfacePartner settings={settings} />
      <HomeCategoryTeaserGrid />

      {/* Branchen */}
      {branchenPreview.length > 0 && (
        <section className="bg-(--bg-secondary) py-16 lg:py-24">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <Eyebrow className="mb-3">Branchen</Eyebrow>
                <SplitText className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-(--text-primary)">
                  Für wen wir arbeiten.
                </SplitText>
              </div>
              <Link data-reveal href="/branchen" className="shrink-0 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors whitespace-nowrap">
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
      <HomeDirectContactCta settings={settings} />
      <HomeKontaktCta settings={settings} data={homepage?.inquiry} />
    </>
  )
}
