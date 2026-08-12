import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import CtaStrip from '@/components/layout/CtaStrip'
import SplitText from '@/components/animations/SplitText'
import { client } from '@/sanity/lib/client'
import { allBranchenQuery, seitenInhalteQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { SanityBranche, SeitenInhalteData } from '@/sanity/lib/types'
import Eyebrow from '@/components/ui/Eyebrow'

export const metadata: Metadata = {
  title: 'Branchen',
  description: 'Keller Galvanik AG beschichtet für Maschinenbau, Medizinalindustrie, Elektronik, Fahrzeugbau und viele weitere Branchen.',
}

export default async function BranchenPage() {
  const [branchen, seiten]: [SanityBranche[], SeitenInhalteData | null] = await Promise.all([
    client.fetch(allBranchenQuery),
    client.fetch(seitenInhalteQuery),
  ])

  const s = seiten?.branchen

  return (
    <>
      <section className="bg-white pt-10 pb-0">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-(--text-tertiary) mb-8">
            <Link href="/" className="hover:text-(--text-primary) transition-colors">Home</Link>
            <span>/</span>
            <span className="text-(--text-secondary)">Branchen</span>
          </nav>
          <div className="max-w-2xl pb-14">
            <Eyebrow className="mb-4">
              {s?.kicker ?? 'Branchen'}
            </Eyebrow>
            <SplitText as="h1" trigger="mount" className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] text-(--text-primary) leading-tight mb-5">
              {s?.heading ?? 'Breite Erfahrung aus verschiedensten Bereichen.'}
            </SplitText>
            <p data-reveal className="text-base sm:text-lg text-(--text-secondary) leading-relaxed">
              {s?.intro ?? 'Wir bringen eine breite Erfahrung aus verschiedensten Bereichen mit — von der Feinmechanik über die Medizintechnik bis hin zur Elektro- und Maschinenindustrie.'}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-(--bg-secondary) py-14 lg:py-20">
        <Container>
          <div data-reveal-stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {branchen.map(b => (
              <Link key={b._id} href={`/branchen/${b.slug.current}`} className="group block">
                <div className="rounded-lg overflow-hidden bg-white aspect-square relative shadow-[0_1px_4px_rgba(15,17,23,0.07)] group-hover:shadow-[0_6px_20px_rgba(15,17,23,0.12)] transition-shadow duration-200">
                  {b.bild ? (
                    <Image
                      src={urlFor(b.bild).width(400).height(400).fit('crop').url()}
                      alt={b.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <Image
                      src={`/branchen/${b.slug.current}.webp`}
                      alt={b.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <p className="mt-2.5 px-0.5 text-sm font-semibold text-(--text-primary) group-hover:text-brand-600 transition-colors leading-snug">
                  {b.name}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaStrip
        heading={s?.cta ?? 'Ihre Branche dabei?'}
        subline={s?.ctaSubline ?? 'Senden Sie uns Ihre Anforderungen — wir finden das passende Verfahren für Ihr Bauteil.'}
        primaryCta={{ label: 'Offerte anfragen', href: '/kontakt' }}
        secondaryCta={{ label: 'Alle Verfahren', href: '/verfahren' }}
        variant="dark"
      />
    </>
  )
}
