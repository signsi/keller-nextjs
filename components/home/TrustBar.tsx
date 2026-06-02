import Container from '@/components/layout/Container'
import type { HomepageData } from '@/sanity/lib/types'

type Props = { items?: HomepageData['trustItems'] }

const defaultItems = [
  {
    heading: 'Präzise Oberflächen.',
    body: 'Gleichmässige Schichtdicken und engste Toleranzen — auch für komplexe Geometrien.',
  },
  {
    heading: 'Technische Beratung.',
    body: 'Von der Verfahrenswahl bis zur Spezifikation — wir begleiten Sie ohne Umwege.',
  },
  {
    heading: 'Zuverlässige Prozesse.',
    body: 'Dokumentierte Qualitätssysteme und lückenlose Rückverfolgbarkeit für jede Charge.',
  },
]

const visuals = [
  (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="bg-white rounded-[12px] w-full max-w-[220px] overflow-hidden shadow-[0_2px_12px_rgba(15,17,23,0.08)]">
        <div className="h-2.5 bg-[#00a5ec] flex items-center px-3">
          <span className="text-[8px] text-white font-medium tracking-wide">Ni-Schicht · 15 µm</span>
        </div>
        <div className="h-2 bg-[#b8bec6]" />
        <div className="h-20 bg-[#ecedef] flex flex-col justify-center px-3">
          <span className="text-[10px] text-[var(--text-secondary)] font-medium">Grundwerkstoff · Stahl</span>
        </div>
        <div className="px-3 py-2.5 flex items-center justify-between">
          <span className="text-[9px] font-mono text-[var(--text-tertiary)]">5–50 µm</span>
          <span className="text-[9px] text-[#00a5ec] font-semibold">✓ Toleranz eingehalten</span>
        </div>
      </div>
    </div>
  ),
  (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="bg-white rounded-[12px] w-full max-w-[220px] p-4 shadow-[0_2px_12px_rgba(15,17,23,0.08)]">
        <p className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-widest mb-3">Beratungsprozess</p>
        {[
          { label: 'Bauteil analysiert', done: true },
          { label: 'Verfahren definiert', done: true },
          { label: 'Offerte erstellt', done: false },
        ].map(({ label, done }) => (
          <div key={label} className="flex items-center gap-2.5 py-1.5">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${done ? 'bg-[#00a5ec]' : 'bg-[var(--bg-secondary)]'}`}>
              {done && (
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l1.5 1.5L6.5 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className={`text-xs ${done ? 'text-[var(--text-secondary)]' : 'text-[var(--text-tertiary)]'}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="bg-white rounded-[12px] w-full max-w-[220px] p-4 shadow-[0_2px_12px_rgba(15,17,23,0.08)]">
        <p className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-widest mb-3">Qualitätssicherung</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: 'ISO 9001', sub: 'Zertifiziert' },
            { value: '< 24h', sub: 'Angebotsfrist' },
            { value: '40+', sub: 'Jahre Erfahrung' },
            { value: '100%', sub: 'Rückverfolgbar' },
          ].map(({ value, sub }) => (
            <div key={sub} className="bg-[var(--bg-secondary)] rounded-[6px] px-2.5 py-2">
              <div className="text-sm font-bold text-[var(--text-primary)]">{value}</div>
              <div className="text-[9px] text-[var(--text-tertiary)] mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
]

export default function TrustBar({ items }: Props) {
  const merged = (items && items.length > 0 ? items : defaultItems).slice(0, 3)

  return (
    <section className="bg-white">
      <Container>
        <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 gap-4 py-14">
          {merged.map((item, i) => (
            <div key={i}>
              <div className="bg-[var(--bg-secondary)] rounded-[16px] h-[220px] relative overflow-hidden">
                {visuals[i]}
              </div>
              <div className="mt-5 px-1">
                <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug tracking-[-0.01em]">
                  {item?.heading ?? defaultItems[i]?.heading}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1.5">
                  {item?.body ?? defaultItems[i]?.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
