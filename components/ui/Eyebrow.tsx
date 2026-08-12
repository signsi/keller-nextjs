interface EyebrowProps {
  children: React.ReactNode
  className?: string
  reveal?: boolean
}

export default function Eyebrow({ children, className = 'mb-3', reveal = true }: EyebrowProps) {
  return (
    <p
      {...(reveal ? { 'data-reveal': true } : {})}
      className={`text-xs font-semibold uppercase tracking-[0.2em] text-brand-500 ${className}`}
    >
      {children}
    </p>
  )
}
