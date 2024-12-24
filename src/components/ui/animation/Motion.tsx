'use client'

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Duration = 'fast' | 'normal' | 'slow'
type Direction = 'up' | 'down' | 'left' | 'right'
type ElementType = keyof JSX.IntrinsicElements

interface BaseVariant {
  base: string
  duration: Record<Duration, string>
}

interface FadeVariant extends BaseVariant {
  type: 'fade'
  state: {
    from: string
    to: string
  }
}

interface SlideVariant extends BaseVariant {
  type: 'slide'
  direction: Record<Direction, {
    from: string
    to: string
  }>
}

interface ScaleVariant extends BaseVariant {
  type: 'scale'
  state: {
    from: string
    to: string
  }
}

type AnimationVariant = FadeVariant | SlideVariant | ScaleVariant

const variants: Record<string, AnimationVariant> = {
  fade: {
    type: 'fade',
    base: 'transition-opacity',
    duration: {
      fast: 'duration-200',
      normal: 'duration-300',
      slow: 'duration-500'
    },
    state: {
      from: 'opacity-0',
      to: 'opacity-100'
    }
  },
  slide: {
    type: 'slide',
    base: 'transition-all',
    duration: {
      fast: 'duration-200',
      normal: 'duration-300',
      slow: 'duration-500'
    },
    direction: {
      up: {
        from: 'translate-y-4 opacity-0',
        to: 'translate-y-0 opacity-100'
      },
      down: {
        from: '-translate-y-4 opacity-0',
        to: 'translate-y-0 opacity-100'
      },
      left: {
        from: 'translate-x-4 opacity-0',
        to: 'translate-x-0 opacity-100'
      },
      right: {
        from: '-translate-x-4 opacity-0',
        to: 'translate-x-0 opacity-100'
      }
    }
  },
  scale: {
    type: 'scale',
    base: 'transition-all',
    duration: {
      fast: 'duration-200',
      normal: 'duration-300',
      slow: 'duration-500'
    },
    state: {
      from: 'scale-95 opacity-0',
      to: 'scale-100 opacity-100'
    }
  }
}

interface MotionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'as'> {
  show?: boolean
  animation: 'fade' | 'slide' | 'scale'
  direction?: Direction
  duration?: Duration
  as?: ElementType
  onAnimationComplete?: () => void
}

export const Motion = React.forwardRef<HTMLElement, MotionProps>(
  ({ 
    className,
    show = true,
    animation = 'fade',
    direction = 'up',
    duration = 'normal',
    as: Component = 'div',
    onAnimationComplete,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(show)
    const [isAnimating, setIsAnimating] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
      if (show !== isVisible) {
        setIsAnimating(true)
        setIsVisible(show)

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
          setIsAnimating(false)
          onAnimationComplete?.()
        }, duration === 'fast' ? 200 : duration === 'slow' ? 500 : 300)
      }

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [show, isVisible, duration, onAnimationComplete])

    if (!isVisible && !isAnimating) return null

    const variant = variants[animation]
    const baseClasses = variant.base
    const durationClass = variant.duration[duration]

    const getAnimationClasses = () => {
      if (variant.type === 'slide') {
        const directionClasses = (variant as SlideVariant).direction[direction]
        return isVisible ? directionClasses.to : directionClasses.from
      }

      const stateClasses = (variant as FadeVariant | ScaleVariant).state
      return isVisible ? stateClasses.to : stateClasses.from
    }

    const elementProps = {
      ref,
      className: cn(baseClasses, durationClass, getAnimationClasses(), className),
      ...props
    }

    return React.createElement(Component, elementProps, children)
  }
)

Motion.displayName = 'Motion'