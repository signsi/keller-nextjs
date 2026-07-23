import Container from '@/components/layout/Container'

type TeaserCard = {
  id: string
  title: string
  body: string
  badge: string
  gradient: string
}

const teaserCards: TeaserCard[] = [
  {
    id: 'oberflaechenverfahren',
    title: 'Oberflächenverfahren',
    body: 'Unser Angebot umfasst Lackierverfahren und verschiedene galvanische und chemische Oberflaechenverfahren.',
    badge: 'Verfahren',
    gradient: 'bg-linear-to-br from-[#004b8e] via-[#0b78c8] to-[#3fd2ff]',
  },
  {
    id: 'ueber-uns',
    title: 'Keller Galvanik AG',
    body: 'Lernen Sie uns kennen und erfahren Sie, fuer was wir stehen und wie wir handeln. Gerne beraten wir Sie spezifisch.',
    badge: 'Über uns',
    gradient: 'bg-linear-to-br from-[#055497] via-[#2f86c9] to-[#67d8ff]',
  },
  {
    id: 'geschaeftsfelder',
    title: 'Geschäftsfelder',
    body: 'Wir sind Spezialisten von der Einzelteil-Bearbeitung bis zur effizienten Grossserienproduktion.',
    badge: 'Branchen',
    gradient: 'bg-linear-to-br from-[#003f82] via-[#2a73ba] to-[#52d0ff]',
  },
  {
    id: 'arbeitsbereich',
    title: 'Arbeitsbereich',
    body: 'Haben Sie Fragen oder wuenschen Sie sich eine Gratisofferte? Dann nehmen Sie bereits jetzt mit uns Kontakt auf.',
    badge: 'Kontakt',
    gradient: 'bg-linear-to-br from-[#005a7f] via-[#1c92b8] to-[#4fe0ef]',
  },
  {
    id: 'erfolgsgeheimnis',
    title: 'Unser Erfolgsgeheimnis',
    body: 'Erfahren Sie auf welche Faktoren sich die Keller Galvanik fokussiert, um ihre Beduerfnisse optimal zu bedienen.',
    badge: 'Qualitaet',
    gradient: 'bg-linear-to-br from-[#044f9a] via-[#3278d3] to-[#67baff]',
  },
  {
    id: 'neuigkeiten',
    title: 'Neuigkeiten',
    body: 'Erfahren Sie auf welche Faktoren sich die Keller Galvanik fokussiert, um ihre Beduerfnisse optimal zu bedienen.',
    badge: 'Updates',
    gradient: 'bg-linear-to-br from-[#004a90] via-[#2876c2] to-[#4dcfff]',
  },
]

function ImagePlaceholder({ badge, gradient }: { badge: string; gradient: string }) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-2xl ${gradient}`}>
      <div className="absolute -left-6 top-6 h-24 w-24 rounded-full bg-white/35 blur-2xl" />
      <div className="absolute -right-10 bottom-2 h-28 w-28 rounded-full bg-cyan-200/30 blur-2xl" />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 28%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '100% 100%, 16px 16px',
        }}
      />
      <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/35 bg-black/20 px-3 py-2 backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/90">{badge}</p>
      </div>
    </div>
  )
}

export default function HomeCategoryTeaserGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {teaserCards.map(card => (
            <article key={card.id} className="group rounded-[1.4rem] border border-slate-200/80 bg-white p-3 shadow-[0_8px_30px_rgba(14,31,53,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(14,31,53,0.12)]">
              <ImagePlaceholder badge={card.badge} gradient={card.gradient} />
              <div className="px-2 pb-2 pt-6 sm:px-3">
                <h3 className="text-3xl font-semibold tracking-[-0.03em] text-(--text-primary)">{card.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-(--text-secondary)">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
