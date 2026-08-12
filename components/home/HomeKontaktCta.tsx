import Image from 'next/image'
import Container from '@/components/layout/Container'
import SplitText from '@/components/animations/SplitText'
import InquiryForm from '@/components/forms/InquiryForm'
import { urlFor } from '@/sanity/lib/image'
import type { SanitySettings, HomepageData } from '@/sanity/lib/types'

type Props = {
  settings?: SanitySettings | null
  data?: HomepageData['inquiry']
}

export default function HomeKontaktCta({ settings, data }: Props) {
  const person = settings?.ansprechperson
  const telefon = person?.telefon ?? settings?.telefon ?? '+41 00 000 00 00'
  const email = settings?.email ?? 'info@keller-galvanik.ch'
  const name = person?.name ?? 'Kontakt'
  const titel = person?.titel ?? 'Technische Beratung'
  const portraitUrl = person?.portrait
    ? urlFor(person.portrait).width(480).height(480).fit('crop').url()
    : '/peter-keller-portrait.webp'

  const bullets = data?.bullets && data.bullets.length > 0
    ? data.bullets
    : ['Antwort innert 24 Stunden', 'Kostenlose Erstberatung']

  return (
    <section className="bg-white py-12 lg:py-20">
      <Container>
        <div className="rounded-[22px] bg-brand-800 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:items-center">
            <div className="lg:pr-4">
              <p data-reveal className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                {data?.kicker ?? 'Offerte anfragen'}
              </p>
              <SplitText className="mt-3 max-w-xl text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl">
                {data?.heading ?? 'Schnell zum Angebot.'}
              </SplitText>
              <p data-reveal className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                {data?.body ?? 'Beschreiben Sie Ihr Projekt — wir melden uns schnell und geben Ihnen eine klare Ersteinschätzung.'}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/80">
                {bullets.slice(0, 2).map(item => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div data-reveal className="lg:max-w-xl lg:justify-self-end">
              <InquiryForm layout="inline" contactName={name} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
