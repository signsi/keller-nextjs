import Image from 'next/image'
import Container from '@/components/layout/Container'

type TeaserCard = {
  id: string
  title: string
  body: string
  badge: string
  gradient: string
  image?: string
}

const teaserCards: TeaserCard[] = [
  {
    id: 'oberflaechenverfahren',
    title: 'Oberflächenverfahren',
    body: 'Unser Angebot umfasst Lackierverfahren und verschiedene galvanische und chemische Oberflaechenverfahren.',
    badge: 'Verfahren',
    image: '/home-links/keller-galvanik-alle-verfahren.webp',
    gradient: 'bg-linear-to-br from-[#004b8e] via-[#0b78c8] to-[#3fd2ff]',
  },
  {
    id: 'ueber-uns',
    title: 'Keller Galvanik AG',
    body: 'Lernen Sie uns kennen und erfahren Sie, fuer was wir stehen und wie wir handeln. Gerne beraten wir Sie spezifisch.',
    badge: 'Über uns',
    image: '/home-links/keller-galvanik-team-platzhalter.webp',
    gradient: 'bg-linear-to-br from-[#055497] via-[#2f86c9] to-[#67d8ff]',
  },
  {
    id: 'geschaeftsfelder',
    title: 'Geschäftsfelder',
    body: 'Wir sind Spezialisten von der Einzelteil-Bearbeitung bis zur effizienten Grossserienproduktion.',
    badge: 'Branchen',
    image: '/home-links/keller-galvanik-geschaeftsfelder-platzhalter-2.webp',
    gradient: 'bg-linear-to-br from-[#003f82] via-[#2a73ba] to-[#52d0ff]',
  },
  {
    id: 'arbeitsbereich',
    title: 'Arbeitsbereich',
    body: 'Haben Sie Fragen oder wuenschen Sie sich eine Gratisofferte? Dann nehmen Sie bereits jetzt mit uns Kontakt auf.',
    badge: 'Kontakt',
    image: '/home-links/keller-galvanik-arbeitsbereich-platzhalter.webp',
    gradient: 'bg-linear-to-br from-[#005a7f] via-[#1c92b8] to-[#4fe0ef]',
  },
  {
    id: 'erfolgsgeheimnis',
    title: 'Unser Erfolgsgeheimnis',
    body: 'Erfahren Sie auf welche Faktoren sich die Keller Galvanik fokussiert, um ihre Beduerfnisse optimal zu bedienen.',
    badge: 'Qualität',
    image: '/home-links/keller-galvanik-erfolgsgeheimnis-platzhalter.webp',
    gradient: 'bg-linear-to-br from-[#044f9a] via-[#3278d3] to-[#67baff]',
  },
  {
    id: 'neuigkeiten',
    title: 'Neuigkeiten',
    body: 'Erfahren Sie auf welche Faktoren sich die Keller Galvanik fokussiert, um ihre Beduerfnisse optimal zu bedienen.',
    badge: 'Updates',
    image: '/home-links/keller-galvanik-news-platzhalter.webp',
    gradient: 'bg-linear-to-br from-[#004a90] via-[#2876c2] to-[#4dcfff]',
  },
]

function ImagePlaceholder({ badge, gradient, image, alt }: { badge: string; gradient: string; image?: string; alt?: string }) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden ${gradient} transition-transform duration-500 group-hover:scale-[1.03]`}>
      {image ? (
        <Image
          src={image}
          alt={alt ?? badge}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
      <span className="absolute left-3 top-3 z-10 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
        {badge}
      </span>
    </div>
  )
}

export default function HomeCategoryTeaserGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teaserCards.map(card => (
            <article key={card.id} className="ui-card ui-card-interactive ui-card-flush group h-full overflow-hidden">
              <ImagePlaceholder badge={card.badge} gradient={card.gradient} image={card.image} alt={card.title} />
              <div className="px-4 pb-4 pt-4">
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-(--text-primary) transition-colors group-hover:text-brand-600">{card.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-(--text-secondary) line-clamp-3">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
