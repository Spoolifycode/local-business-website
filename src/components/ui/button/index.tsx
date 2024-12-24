'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'
import { buttonVariants } from './variants'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    disabled, 
    loading = false,
    icon,
    iconPosition = 'left',
    children,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading

    return (
      <button
        className={cn(
          buttonVariants.base,
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          loading && buttonVariants.loading,
          className
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <Loader2 className={cn(
            "h-4 w-4 animate-spin",
            children ? buttonVariants.iconLeft : ""
          )} />
        )}
        {!loading && icon && iconPosition === 'left' && (
          <span className={cn(
            children ? buttonVariants.iconLeft : ""
          )}>
            {icon}
          </span>
        )}
        {children}
        {!loading && icon && iconPosition === 'right' && (
          <span className={buttonVariants.iconRight}>
            {icon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }