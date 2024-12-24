'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { layoutVariants } from './variants'

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: keyof typeof layoutVariants.stack.spacing
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, spacing = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          layoutVariants.stack.base,
          layoutVariants.stack.spacing[spacing],
          className
        )}
        {...props}
      />
    )
  }
)

Stack.displayName = 'Stack'