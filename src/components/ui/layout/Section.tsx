'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { layoutVariants } from './variants'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: keyof typeof layoutVariants.section.spacing
  variant?: keyof typeof layoutVariants.section.variant
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'md', variant = 'default', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          layoutVariants.section.base,
          layoutVariants.section.spacing[spacing],
          layoutVariants.section.variant[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'