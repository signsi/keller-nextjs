import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import type { SanitySettings } from '@/sanity/lib/types'

type Props = {
  settings?: SanitySettings | null
}

export default function HomeSurfacePartner({ settings }: Props) {
  const companyName = settings?.firmenname?.trim() || 'Keller Galvanik AG'

  return (
    <section className="bg-brand-500 py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-steel-800/70 mb-5">{companyName}</p>
            <h2 className="text-5xl sm:text-6xl font-bold leading-[0.98] tracking-[-0.03em] text-steel-800">
              Ihr Partner für Oberflächen
            </h2>

            <p className="mt-6 text-xl sm:text-2xl leading-[1.4] tracking-[-0.015em] text-steel-800/88">
              Seit über 40 Jahren veredeln wir Bauteile für Maschinenbau, Medizinaltechnik und Elektronik.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-steel-800/70">
              Galvanische und chemische Beschichtungen nach ISO 9001, von der Beratung bis zur
              Serienproduktion, jede Charge dokumentiert und rückverfolgbar.
            </p>

            <div className="mt-10">
              <Link
                href="/ueber-uns"
                className="ui-button h-12 px-7 text-base border border-steel-800/25 bg-steel-800/8 text-steel-800 hover:bg-steel-800/15"
              >
                Über uns
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[22px] border border-steel-800/20 bg-steel-800/8 aspect-16/10">
              <Image
                src="/home/mitarbeiterportrait_location_17.jpeg.webp"
                alt="Mitarbeiterportrait Keller Galvanik"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
