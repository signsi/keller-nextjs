import Link from 'next/link'
import { kategorieTagStyles, defaultKategorieTagStyle } from '@/lib/verfahren-kategorien'

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

export default function VerfahrenCard({ verfahren, variant = 'full' }: VerfahrenCardProps) {
  const { slug, name, nutzen, anwendung, filterTag } = verfahren
  const isCompact = variant === 'compact'

  return (
    <Link
      href={`/verfahren/${slug}`}
      className={`ui-card ui-card-interactive group flex h-full flex-col ${isCompact ? 'p-5' : 'p-6'}`}
    >
      {filterTag && (
        <span className={`mb-3 self-start rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${kategorieTagStyles[filterTag] ?? defaultKategorieTagStyle}`}>
          {filterTag}
        </span>
      )}

      <h3 className={`font-semibold leading-snug tracking-[-0.015em] text-(--text-primary) transition-colors group-hover:text-brand-600
        ${isCompact ? 'text-lg' : 'text-2xl'}`}>
        {name}
      </h3>

      <p className="mt-2 flex-1 text-base leading-relaxed text-(--text-secondary)">
        {nutzen}
      </p>

      {!isCompact && (
        <p className="mt-3 flex items-center gap-1.5 text-sm text-(--text-tertiary)">
          <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
          {anwendung}
        </p>
      )}
    </Link>
  )
}
