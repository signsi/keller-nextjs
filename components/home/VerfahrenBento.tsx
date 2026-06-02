import Link from 'next/link'
import Container from '@/components/layout/Container'

const cards = [
  {
    slug: 'chemisch-vernickeln',
    tag: 'Korrosionsschutz',
    tagColor: 'bg-[#ddf0fb] text-[#007ab8]',
    heading: 'Gleichmässige Beschichtung — auch für komplexe Geometrien.',
    body: 'Chemisch Vernickeln erzeugt eine gleichmässige Ni-P-Schicht unabhängig von der Bauteilform. Ideal für Innenbohrungen, Gewinde und feine Konturen.',
    visual: (
      <div className="absolute bottom-0 left-0 right-0 h-[160px] overflow-hidden flex items-end justify-center pb-0">
        <div className="w-full">
          {/* Cross-section layers */}
          <div className="mx-8 overflow-hidden rounded-t-[8px]">
            <div className="h-4 bg-[#00a5ec] flex items-center px-4 gap-3">
              <span className="text-[9px] text-white font-medium tracking-wide">Ni-P-Schicht · 15–25 µm</span>
              <span className="ml-auto text-[9px] text-white/70">gleichmässig</span>
            </div>
            <div className="h-2 bg-[#8fc8e8]" />
            <div className="h-14 bg-[#d0d6de] flex items-center px-4">
              <span className="text-[10px] text-[var(--text-secondary)]">Grundwerkstoff · Stahl / Al</span>
            </div>
          </div>
          {/* Dimension annotation */}
          <div className="mx-8 flex items-center gap-2 pt-2 pb-3">
            <div className="h-px flex-1 bg-[var(--border-primary)]" />
            <span className="text-[9px] font-mono text-[var(--text-tertiary)]">Schichtdicke 5–50 µm</span>
            <div className="h-px flex-1 bg-[var(--border-primary)]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: 'elektropolieren',
    tag: 'Optik & Hygiene',
    tagColor: 'bg-[#f0f4ff] text-[#4060c0]',
    heading: 'Glatte, hygienegerechte Edelstahloberflächen.',
    body: 'Elektropolieren entfernt Rauheitsspitzen elektrochemisch und erzeugt spiegelglatte, passivierte Oberflächen — normkonform für Medizin und Lebensmittel.',
    visual: (
      <div className="absolute bottom-0 left-0 right-0 h-[160px] overflow-hidden">
        {/* Polished surface gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 mx-8 rounded-t-[8px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #f0f5ff 0%, #c8d8f0 30%, #e8eef8 50%, #b0c8e8 70%, #dce8f8 100%)',
            }}
          />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-[9px] font-mono text-[#4060c0]/70">Ra &lt; 0.2 µm</span>
            <span className="text-[9px] text-[#4060c0]/70 font-medium">✓ DIN EN ISO 15730</span>
          </div>
        </div>
        {/* Before/after label */}
        <div className="absolute bottom-4 left-8 right-8 flex justify-between">
          <span className="text-[9px] text-[var(--text-tertiary)]">vor dem Polieren</span>
          <span className="text-[9px] text-[#4060c0] font-semibold">nach dem Polieren →</span>
        </div>
      </div>
    ),
  },
]

export default function VerfahrenBento() {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-16 lg:py-24">

          {/* Section heading */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">
                Unsere Verfahren
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] leading-tight max-w-lg">
                Das richtige Verfahren für Ihr Bauteil.
              </h2>
            </div>
            <Link
              href="/verfahren"
              className="shrink-0 text-sm font-semibold text-[#0091d4] hover:text-[#007ab8] transition-colors whitespace-nowrap"
            >
              Alle Verfahren ansehen →
            </Link>
          </div>

          {/* 2 large bento cards */}
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {cards.map(({ slug, tag, tagColor, heading, body, visual }) => (
              <Link
                key={slug}
                href={`/verfahren/${slug}`}
                className="group bg-[var(--bg-secondary)] rounded-[16px] overflow-hidden
                  min-h-[380px] flex flex-col relative
                  hover:bg-[#e2f0fb] transition-colors duration-200"
              >
                {/* Text top */}
                <div className="p-8 pb-0 flex-1">
                  <span className={`inline-flex text-[10px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[4px] mb-4 ${tagColor}`}>
                    {tag}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] leading-snug tracking-[-0.015em] max-w-[280px] group-hover:text-[#0083bd] transition-colors">
                    {heading}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2.5 max-w-[300px]">
                    {body}
                  </p>
                </div>
                {/* Visual bottom */}
                <div className="relative h-[160px] mt-4">
                  {visual}
                </div>
              </Link>
            ))}
          </div>

          {/* 4 smaller cards below */}
          <div data-reveal-stagger className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { slug: 'galvanisch-verzinken', name: 'Galvanisch Verzinken', tag: 'Korrosionsschutz' },
              { slug: 'hartchrom', name: 'Hartchrom', tag: 'Verschleissschutz' },
              { slug: 'chemisch-kupfern', name: 'Chemisch Kupfern', tag: 'Leitfähigkeit' },
              { slug: 'anodisieren', name: 'Anodisieren', tag: 'Aluminium' },
            ].map(({ slug, name, tag }) => (
              <Link
                key={slug}
                href={`/verfahren/${slug}`}
                className="group bg-[var(--bg-secondary)] rounded-[12px] p-5
                  hover:bg-[#e2f0fb] transition-colors duration-200"
              >
                <span className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-widest">
                  {tag}
                </span>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mt-2 group-hover:text-[#0083bd] transition-colors leading-snug">
                  {name}
                </h4>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[var(--text-tertiary)] group-hover:text-[#0091d4] mt-3 transition-colors">
                  Mehr
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
