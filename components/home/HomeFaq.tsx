'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'
import SplitText from '@/components/animations/SplitText'
import type { HomepageData } from '@/sanity/lib/types'
import Eyebrow from '@/components/ui/Eyebrow'

type Props = { items?: HomepageData['faq'] }

const defaultFaq = [
  { question: 'Wie schnell erhalte ich ein Angebot?', answer: 'Standardanfragen beantworten wir innert 24 Stunden. Bei komplexen Anfragen mit Zeichnungen oder Sonderverfahren melden wir uns am nächsten Werktag mit einer ersten Einschätzung.' },
  { question: 'Welche Mengen sind möglich?', answer: 'Von Einzelteilen bis zu Grossserien — ohne Mindestbestellmenge bei Erstaufträgen.' },
  { question: 'Können mehrere Verfahren kombiniert werden?', answer: 'Ja. Typische Kombinationen sind Verzinken + Pulverbeschichten oder Chemisch Vernickeln + Elektropolieren — alles aus einer Hand.' },
  { question: 'Muss ich eine Zeichnung einreichen?', answer: 'Nicht zwingend. Eine kurze Beschreibung des Bauteils, Werkstoffs und der Anforderung genügt für eine erste Einschätzung.' }
]

export default function HomeFaq({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)
  const faq = (items && items.length > 0) ? items : defaultFaq

  return (
    <section className="bg-(--bg-secondary) py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div>
            <Eyebrow className="mb-3">FAQ</Eyebrow>
            <SplitText className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-(--text-primary)">
              Häufige Fragen.
            </SplitText>
            <p data-reveal className="mt-4 text-sm text-(--text-secondary) leading-relaxed max-w-[22rem]">
              Alles Wichtige auf einen Blick. Weitere Fragen beantwortet Ihnen Peter Keller persönlich.
            </p>
          </div>

          <div>
            {faq.map(({ question, answer }, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left group rounded-(--radius-sm) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--border-focus)"
                  aria-expanded={open === i}
                >
                  <span className={`text-sm transition-colors duration-150 ${open === i ? 'text-(--text-primary) font-medium' : 'text-(--text-secondary) group-hover:text-(--text-primary)'}`}>
                    {question}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`shrink-0 mt-0.5 text-(--text-tertiary) transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ease-out ${open === i ? 'max-h-40 pt-2' : 'max-h-0'}`}>
                  <p className="text-sm text-(--text-tertiary) leading-relaxed">{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
