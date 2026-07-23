import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import SplitText from '@/components/animations/SplitText'
import { urlFor } from '@/sanity/lib/image'
import type { SanitySettings } from '@/sanity/lib/types'

export default function PersonCta({ settings }: { settings?: SanitySettings | null }) {
  const person = settings?.ansprechperson
  const telefon = person?.telefon ?? settings?.telefon ?? '+41 00 000 00 00'
  const email = settings?.email ?? 'info@keller-galvanik.ch'
  const name = person?.name ?? 'Peter Keller'
  const titel = person?.titel ?? 'Geschäftsführer'
  const portraitUrl = person?.portrait
    ? urlFor(person.portrait).width(480).height(480).fit('crop').url()
    : '/peter-keller-portrait.webp'

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[22px] bg-brand-800 px-7 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_6.5rem] lg:gap-10">
            <div>
              <p data-reveal className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">Ihr Ansprechpartner</p>
              <SplitText className="mt-3 max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
                Aus Ideen werden Taten - starten Sie Ihr Projekt mit uns.
              </SplitText>

              <div className="mt-7">
                <Link
                  href="/kontakt"
                  className="ui-button bg-white/10 text-white hover:bg-white/20 border border-white/20"
                >
                  Kontakt aufnehmen
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-5 text-white/75 sm:grid-cols-2 lg:mt-14">
                <div>
                  <p className="text-base font-semibold text-white">{name}</p>
                  <p className="text-sm">{titel}</p>
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <a href={`tel:${telefon.replace(/\s/g, '')}`} className="block underline-offset-4 hover:text-white hover:underline">
                    {telefon}
                  </a>
                  <a href={`mailto:${email}`} className="block underline-offset-4 hover:text-white hover:underline">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div data-reveal className="mx-auto w-22 lg:mx-0 lg:w-24 lg:self-end">
              <div className="overflow-hidden rounded-full border border-white/25 bg-white/10 p-1 backdrop-blur-sm">
                <div className="relative aspect-square overflow-hidden rounded-full">
                  <Image
                    src={portraitUrl}
                    alt={name}
                    fill
                    sizes="(max-width: 1024px) 88px, 96px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
