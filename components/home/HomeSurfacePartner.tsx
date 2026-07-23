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
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-brand-600 mb-5">{companyName}</p>
            <h2 className="text-5xl sm:text-6xl font-bold leading-[0.98] tracking-[-0.03em] text-(--text-primary)">
              Ihr Partner für Oberflächen
            </h2>

            <p className="mt-7 text-xl sm:text-2xl leading-[1.45] tracking-[-0.015em] text-(--text-secondary)">
              Die Keller Galvanik AG ist Ihr zuverlässiger Oberflächenpartner für hochwertige galvanische
              Beschichtungen. Mit langjähriger Erfahrung, modernster Technik und hohem Qualitätsanspruch
              entstehen Oberflächen, die funktional überzeugen und optisch begeistern.
            </p>

            <p className="mt-8 text-lg sm:text-xl leading-normal text-(--text-secondary)">
              Von der Beratung über die Entwicklung bis zur Serienproduktion begleiten wir Sie
              partnerschaftlich und sorgen für verlässliche Ergebnisse bis ins Detail.
            </p>

            <div className="mt-10">
              <Link
                href="/ueber-uns"
                className="inline-flex items-center h-12 px-7 text-base font-semibold text-white bg-steel-800 hover:bg-steel-700 rounded-xl transition-colors"
              >
                Über uns
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[22px] border border-(--border-secondary) bg-[#f4f7fa] aspect-16/10">
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
