'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { animationVariants } from './variants'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number
  height?: string | number
  color?: keyof typeof animationVariants.skeleton.color
  circle?: boolean
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className,
    width,
    height,
    color = 'light',
    circle = false,
    style,
    ...props 
  }, ref) => {
    const styles = {
      width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
      height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
      borderRadius: circle ? '9999px' : undefined,
      ...style
    }

    return (
      <div
        ref={ref}
        className={cn(
          animationVariants.skeleton.base,
          animationVariants.skeleton.color[color],
          className
        )}
        style={styles}
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'