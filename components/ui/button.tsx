import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    `relative z-10 transition-all w-full inline-flex items-center justify-center rounded-lg disabled:pointer-events-none disabled:opacity-80`,
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary',
        destructive: 'bg-destructive',
        ghost: 'border border-primary',
      },
      size: {
        default: 'h-8 px-2 ',
        sm: 'h-9 px-3',
        lg: 'h-10 px-4',
        icon: 'h-10 w-10 min-w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const divVariants = cva([`absolute -bottom-1 left-0 right-0 top-1 rounded-lg`], {
  variants: {
    variant: {
      default: 'bg-secondary',
      destructive: 'bg-secondary',
      ghost: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, ...props }, ref) => {
    const notShowTranslate = variant === 'ghost' || size === 'icon'

    return (
      <div className={cn('group relative', className)}>
        <button
          ref={ref}
          className={cn(
            buttonVariants({ variant, size, className }),
            !notShowTranslate && 'group-hover:translate-y-1',
          )}
          disabled={loading}
          {...props}
          type='button'
        >
          {children}
          {loading ? <Loader2 className='ml-2 h-4 w-4 animate-spin' /> : null}
        </button>
        {!notShowTranslate ? <div className={cn(divVariants({ variant, className }))} /> : null}
      </div>
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
