import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import SplitText from '@/components/animations/SplitText'
import { urlFor } from '@/sanity/lib/image'
import type { SanitySettings } from '@/sanity/lib/types'

export default function PersonCta({ settings }: { settings?: SanitySettings | null }) {
  const person = settings?.ansprechperson
  const telefon = person?.telefon ?? settings?.telefon ?? '+41 00 000 00 00'
  const name = person?.name ?? 'Peter Keller'
  const titel = person?.titel ?? 'Geschäftsführer'
  const portraitUrl = person?.portrait
    ? urlFor(person.portrait).width(240).height(280).fit('crop').url()
    : '/peter-keller-portrait.webp'

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div>
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">Ihr Ansprechpartner</p>
            <SplitText className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              Direkt zu {name.split(' ')[1] ?? name}.
            </SplitText>
            <p data-reveal className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Ich berate Sie persönlich — von der Verfahrenswahl bis zur fertigen Beschichtung. Rufen Sie mich an oder schreiben Sie mir direkt.
            </p>
          </div>

          <div data-reveal className="flex items-start gap-7">
            <div className="shrink-0 w-[120px] h-[140px] rounded-[14px] overflow-hidden bg-[var(--bg-tertiary)]">
              <Image
                src={portraitUrl}
                alt={name}
                width={120}
                height={140}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="pt-1">
              <p className="text-base font-bold text-[var(--text-primary)] tracking-[-0.01em]">{name}</p>
              <p className="text-sm text-[var(--text-tertiary)] mt-0.5 mb-5">{titel}</p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={`tel:${telefon.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 h-10 px-5 w-fit text-sm font-semibold text-white bg-[#00a5ec] hover:bg-[#0091d4] rounded-[6px] transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M1.5 2.5C1.5 2 2 1.5 2.5 1.5h2l1 2.5-1.5 1a7.5 7.5 0 0 0 4.5 4.5l1-1.5L12 9v2c0 .5-.5 1-1 1C5 12 2 7 1.5 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Jetzt anrufen
                </a>
                <Link href="/kontakt" className="inline-flex items-center h-10 px-5 w-fit text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  Nachricht schreiben →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
