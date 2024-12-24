'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { layoutVariants } from './variants'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof layoutVariants.container.size
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = '2xl', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          layoutVariants.container.base,
          layoutVariants.container.size[size],
          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'