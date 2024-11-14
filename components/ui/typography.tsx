import { HTMLAttributes, ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva(``, {
  variants: {
    size: {
      'xs-soft': 'text-xs sm:text-sm font-normal',
      'xs-medium': 'text-xs sm:text-sm font-medium',
      'xs-strong': 'text-xs sm:text-sm font-semibold',
      'xs-black': 'text-xs sm:text-sm font-bold',

      'sm-soft': 'text-sm sm:text-base font-normal',
      'sm-medium': 'text-sm sm:text-md font-medium',
      'sm-strong': 'text-sm sm:text-base font-semiboldld',
      'sm-black': 'text-sm sm:text-base font-bold',

      'md-soft': 'text-md sm:text-lg font-normal',
      'md-medium': 'text-md sm:text-lg font-medium',
      'md-strong': 'text-md sm:text-lg font-semibold',
      'md-black': 'text-md sm:text-lg font-bold',

      'lg-soft': 'text-lg sm:text-xl font-normal',
      'lg-medium': 'text-lg sm:text-xl font-medium',
      'lg-strong': 'text-lg sm:text-xl font-semibold',
      'lg-black': 'text-lg sm:text-xl font-bold',

      'xl-soft': 'text-xl sm:text-2xl font-normal',
      'xl-medium': 'text-xl sm:text-2xl font-medium',
      'xl-strong': 'text-xl sm:text-2xl font-semibold',
      'xl-black': 'text-xl sm:text-2xl font-bold',

      '2xl-soft': 'text-2xl sm:text-3xl font-normal',
      '2xl-medium': 'text-2xl sm:text-3xl font-medium',
      '2xl-strong': 'text-2xl sm:text-3xl font-semibold',
      '2xl-black': 'text-2xl sm:text-3xl font-bold',

      '3xl-soft': 'text-3xl sm:text-4xl font-normal',
      '3xl-medium': 'text-3xl sm:text-4xl font-medium',
      '3xl-strong': 'text-3xl sm:text-4xl font-semibold',
      '3xl-black': 'text-3xl sm:text-4xl font-bold',

      '4xl-soft': 'text-4xl sm:text-5xl font-normal',
      '4xl-medium': 'text-4xl sm:text-5xl font-medium',
      '4xl-strong': 'text-4xl sm:text-5xl font-semibold',
      '4xl-black': 'text-4xl sm:text-5xl font-bold',
    },
    textColor: {
      white: 'text-white',
      black: 'text-black',
    },
  },
  defaultVariants: {
    size: 'md-soft',
    textColor: 'white',
  },
})

export interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  iconStart?: ReactNode
  iconEnd?: ReactNode
  formatNumber?: boolean
}

export default function Typography({
  children,
  className,
  size: PropSize,
  textColor,
  variant = 'p',
  iconStart,
  iconEnd,
  ...props
}: TypographyProps) {
  const Tag = variant
  const flexClass = iconStart || iconEnd ? 'flex items-center gap-2' : ''
  const variantSize = {
    h1: '4xl-black',
    h2: '3xl-black',
    h3: '2xl-black',
    h4: 'xl-black',
    p: 'md-soft',
    span: 'md-soft',
  }
  const size = PropSize || (variantSize[variant] as VariantProps<typeof typographyVariants>['size'])

  return (
    <Tag className={cn(typographyVariants({ size, className, textColor }), flexClass)} {...props}>
      {iconStart ? iconStart : null}
      {children}
      {iconEnd ? iconEnd : null}
    </Tag>
  )
}
