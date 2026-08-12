import Link from 'next/link'
import Container from '@/components/layout/Container'
import SplitText from '@/components/animations/SplitText'
import type { HomepageData } from '@/sanity/lib/types'
import Eyebrow from '@/components/ui/Eyebrow'

type Props = { data?: HomepageData['qualitaet'] }

const defaults = {
  kicker: 'Qualität & Zertifizierung',
  heading: 'Jeder Auftrag dokumentiert.',
  body: 'Unsere Prozesse sind nach ISO 9001 zertifiziert. Jede Charge wird dokumentiert, geprüft und rückverfolgbar archiviert.',
  stats: [
    { value: '99%', label: 'Kundenzufriedenheit' },
    { value: '40+', label: 'Jahre Erfahrung' },
    { value: '< 24h', label: 'Angebotsfrist' },
  ],
  cta: { label: 'Qualitätssystem ansehen', href: '/qualitaet' },
}

export default function QualitaetTeaser({ data }: Props) {
  const d = { ...defaults, ...data }
  const stats = (data?.stats && data.stats.length > 0) ? data.stats : defaults.stats

  return (
    <section className="bg-steel-800 py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div>
            <Eyebrow className="mb-3">
              {d.kicker}
            </Eyebrow>
            <SplitText className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.02em] text-white">
              {d.heading}
            </SplitText>
            <p data-reveal className="mt-5 text-sm text-white/50 leading-relaxed max-w-sm">
              {d.body}
            </p>
            <Link
              data-reveal
              href={d.cta?.href ?? '/qualitaet'}
              className="inline-flex items-center gap-1.5 mt-7 text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              {d.cta?.label ?? 'Qualitätssystem ansehen'}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div data-reveal-stagger className="grid grid-cols-3 gap-3">
            {stats.slice(0, 3).map(({ value, label }) => (
              <div key={label} className="bg-white/[0.06] rounded-lg px-4 py-8 flex flex-col items-center text-center">
                <span className="text-2xl lg:text-3xl font-bold text-white tracking-tight tabular-nums">{value}</span>
                <span className="text-xs text-white/40 mt-2 leading-snug">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
