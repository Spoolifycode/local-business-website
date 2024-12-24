'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { animationVariants } from './variants'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof animationVariants.spinner.size
  color?: keyof typeof animationVariants.spinner.color
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ 
    className,
    size = 'md',
    color = 'primary',
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn("flex items-center justify-center", className)}
        {...props}
      >
        <Loader2 
          className={cn(
            animationVariants.spinner.base,
            animationVariants.spinner.size[size],
            animationVariants.spinner.color[color]
          )} 
        />
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'