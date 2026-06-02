'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'
import SplitText from '@/components/animations/SplitText'
import type { HomepageData } from '@/sanity/lib/types'

type Props = { items?: HomepageData['faq'] }

const defaultFaq = [
  { question: 'Wie schnell erhalte ich ein Angebot?', answer: 'Standardanfragen beantworten wir innert 24 Stunden. Bei komplexen Anfragen mit Zeichnungen oder Sonderverfahren melden wir uns am nächsten Werktag mit einer ersten Einschätzung.' },
  { question: 'Welche Mengen sind möglich?', answer: 'Von Einzelteilen bis zu Grossserien — ohne Mindestbestellmenge bei Erstaufträgen.' },
  { question: 'Können mehrere Verfahren kombiniert werden?', answer: 'Ja. Typische Kombinationen sind Verzinken + Pulverbeschichten oder Chemisch Vernickeln + Elektropolieren — alles aus einer Hand.' },
  { question: 'Muss ich eine Zeichnung einreichen?', answer: 'Nicht zwingend. Eine kurze Beschreibung des Bauteils, Werkstoffs und der Anforderung genügt für eine erste Einschätzung.' },
  { question: 'Welche Zertifizierungen haben Sie?', answer: 'ISO 9001. Beschichtungen nach DIN EN ISO- und ASTM-Normen. Spezifische Zertifikate auf Anfrage.' },
]

export default function HomeFaq({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const faq = (items && items.length > 0) ? items : defaultFaq

  return (
    <section className="bg-[var(--bg-secondary)] py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div>
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">FAQ</p>
            <SplitText className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              Häufige Fragen.
            </SplitText>
            <p data-reveal className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed max-w-[22rem]">
              Alles Wichtige auf einen Blick. Weitere Fragen beantwortet Ihnen Peter Keller persönlich.
            </p>
          </div>

          <div>
            {faq.map(({ question, answer }, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className={`text-sm transition-colors duration-150 ${open === i ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}>
                    {question}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`shrink-0 mt-0.5 text-[var(--text-tertiary)] transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ease-out ${open === i ? 'max-h-40 pt-2' : 'max-h-0'}`}>
                  <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
