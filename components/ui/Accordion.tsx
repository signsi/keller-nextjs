'use client'

import { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[var(--bg-tertiary)]">
      {items.map(({ question, answer }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            aria-expanded={open === i}
          >
            <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#0091d4] transition-colors">
              {question}
            </span>
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className={`shrink-0 text-[var(--text-tertiary)] transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
            >
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ease-out
              ${open === i ? 'max-h-96 pb-5' : 'max-h-0'}`}
          >
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
