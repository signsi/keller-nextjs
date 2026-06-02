'use client'

import { useState } from 'react'
import VerfahrenCard from '@/components/verfahren/VerfahrenCard'
import type { SanityVerfahren } from '@/sanity/lib/types'

const filters = ['Alle', 'Korrosionsschutz', 'Optik', 'Verschleiss', 'Werkstoff'] as const
type Filter = typeof filters[number]

interface VerfahrenGridProps {
  verfahren: SanityVerfahren[]
}

export default function VerfahrenGrid({ verfahren }: VerfahrenGridProps) {
  const [active, setActive] = useState<Filter>('Alle')

  const filtered = active === 'Alle'
    ? verfahren
    : verfahren.filter(v => v.kategorie === active)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`h-8 px-4 text-xs font-semibold rounded-full transition-colors cursor-pointer
              ${active === f
                ? 'bg-[#00a5ec] text-white'
                : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(v => (
          <VerfahrenCard
            key={v._id}
            verfahren={{
              slug: v.slug.current,
              name: v.name,
              nutzen: v.beschreibung ?? '',
              anwendung: '',
              filterTag: v.kategorie,
            }}
            variant="full"
          />
        ))}
      </div>
    </>
  )
}
