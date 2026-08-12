import Eyebrow from '@/components/ui/Eyebrow'

interface HomeSectionHeaderProps {
  kicker?: string
  heading: string
  subline?: string
  className?: string
}

export default function HomeSectionHeader({ kicker, heading, subline, className = '' }: HomeSectionHeaderProps) {
  return (
    <div className={`mb-10 ${className}`}>
      {kicker && <Eyebrow reveal={false}>{kicker}</Eyebrow>}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-(--text-primary) leading-tight">
        {heading}
      </h2>
      {subline && (
        <p className="mt-3 text-sm text-(--text-secondary) leading-relaxed max-w-xl">
          {subline}
        </p>
      )}
    </div>
  )
}
