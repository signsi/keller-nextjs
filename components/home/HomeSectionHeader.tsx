interface HomeSectionHeaderProps {
  kicker?: string
  heading: string
  subline?: string
  className?: string
}

export default function HomeSectionHeader({ kicker, heading, subline, className = '' }: HomeSectionHeaderProps) {
  return (
    <div className={`mb-10 ${className}`}>
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a5ec] mb-3">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[var(--text-primary)] leading-tight">
        {heading}
      </h2>
      {subline && (
        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl">
          {subline}
        </p>
      )}
    </div>
  )
}
