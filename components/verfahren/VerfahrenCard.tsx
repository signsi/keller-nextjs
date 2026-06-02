import Link from 'next/link'

export interface VerfahrenCardData {
  slug: string
  name: string
  nutzen: string
  anwendung: string
  filterTag?: string
}

interface VerfahrenCardProps {
  verfahren: VerfahrenCardData
  variant?: 'compact' | 'full'
}

const tagColors: Record<string, string> = {
  Korrosionsschutz: 'bg-[#e6f7fd] text-[#007ab8]',
  Optik:            'bg-[var(--bg-tertiary)] text-[var(--text-secondary)]',
  Verschleiss:      'bg-[#fff8f5] text-[#c0531a]',
  Werkstoff:        'bg-[#f2f7f2] text-[#4a7a50]',
}

export default function VerfahrenCard({ verfahren, variant = 'full' }: VerfahrenCardProps) {
  const { slug, name, nutzen, anwendung, filterTag } = verfahren
  const isCompact = variant === 'compact'

  return (
    <Link
      href={`/verfahren/${slug}`}
      className={`group flex flex-col bg-white rounded-[6px]
        shadow-[0_1px_4px_rgba(15,17,23,0.06)]
        hover:shadow-[0_8px_28px_rgba(15,17,23,0.10)] hover:-translate-y-0.5
        transition-all duration-200
        ${isCompact ? 'p-5' : 'p-6'}`}
    >
      {filterTag && (
        <span className={`self-start text-[10px] font-semibold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[3px] mb-4 ${tagColors[filterTag] ?? 'bg-[var(--bg-secondary)] text-[var(--text-tertiary)]'}`}>
          {filterTag}
        </span>
      )}

      <h3 className={`font-semibold text-[var(--text-primary)] leading-snug group-hover:text-[#0091d4] transition-colors
        ${isCompact ? 'text-base' : 'text-lg'}`}>
        {name}
      </h3>

      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2 flex-1">
        {nutzen}
      </p>

      {!isCompact && (
        <p className="text-xs text-[var(--text-tertiary)] mt-3 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#00a5ec] shrink-0" />
          {anwendung}
        </p>
      )}

      <div className={`flex items-center gap-1 text-xs font-semibold text-[#0091d4]
        group-hover:gap-2 transition-all duration-150 mt-5`}>
        Mehr erfahren
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}
