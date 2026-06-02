interface ContainerProps {
  children: React.ReactNode
  className?: string
  wide?: boolean
}

export default function Container({ children, className = '', wide = false }: ContainerProps) {
  const maxW = wide ? 'max-w-[1280px]' : 'max-w-[1280px]'
  return (
    <div className={`${maxW} mx-auto px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  )
}
