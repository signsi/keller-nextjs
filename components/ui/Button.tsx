import { forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
}

const base =
  'ui-button tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--border-focus) focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 cursor-pointer'

const variants: Record<Variant, string> = {
  primary: 'ui-button-primary',
  secondary: 'ui-button-secondary',
  ghost: 'text-(--text-secondary) bg-transparent hover:text-(--text-primary) hover:bg-(--bg-secondary)',
}

const sizes: Record<Size, string> = {
  sm: 'ui-button-sm',
  md: '',
  lg: 'h-12 px-8 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            {children}
          </span>
        ) : children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
