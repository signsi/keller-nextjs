import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import { urlFor } from '@/sanity/lib/image'
import type { SanitySettings } from '@/sanity/lib/types'

type Props = {
  settings?: SanitySettings | null
}

export default function HomeDirectContactCta({ settings }: Props) {
  const person = settings?.ansprechperson
  const name = person?.name ?? 'Peter Keller'
  const email = settings?.email ?? 'pk@keller-galvanik.ch'
  const portraitUrl = person?.portrait
    ? urlFor(person.portrait).width(900).height(900).fit('crop').url()
    : '/peter-keller-portrait.webp'

  return (
    <section className="bg-(--bg-secondary) py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="overflow-hidden rounded-[22px] border border-black/5 bg-[#f2f4f5] shadow-[0_18px_40px_rgba(15,17,23,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_1.18fr] items-center">
            <div className="relative h-[300px] sm:h-[360px] lg:h-[440px] overflow-hidden bg-[#dfeaf1]">
              <Image
                src={portraitUrl}
                alt={name}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
              <h2 className="text-[2.2rem] font-bold leading-[0.96] tracking-[-0.045em] text-brand-500 sm:text-[2.8rem] lg:text-[4rem]">
                <span className="block">Ihr Partner für</span>
                <span className="block">Oberflächenverfahren</span>
                <span className="block">Wir beraten gerne.</span>
              </h2>

              <p className="mt-6 text-lg text-(--text-secondary) sm:text-xl">
                {name} ist für Sie da.
              </p>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-md bg-[#111827] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1a2333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  Termin buchen
                </Link>

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center rounded-md border border-brand-500 bg-transparent px-6 py-4 text-base font-semibold text-brand-500 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
