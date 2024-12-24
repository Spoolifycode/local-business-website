'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { layoutVariants } from './variants'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: keyof typeof layoutVariants.grid.cols
  gap?: keyof typeof layoutVariants.grid.gap
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          layoutVariants.grid.base,
          layoutVariants.grid.cols[cols],
          layoutVariants.grid.gap[gap],
          className
        )}
        {...props}
      />
    )
  }
)

Grid.displayName = 'Grid'