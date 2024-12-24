'use client'

import React from 'react'
import { cn } from '@/lib/utils'

// Modern Default Style
export function Heading({ 
  className, 
  children, 
  level = 1,
  theme = 'modern'
}: { 
  className?: string
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  theme?: 'modern' | 'luxury' | 'tech' | 'classic' | 'startup'
}) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements
  
  const themeStyles = {
    modern: 'font-display',
    luxury: 'font-luxury-display',
    tech: 'font-tech-display',
    classic: 'font-classic-display',
    startup: 'font-startup-display'
  }

  const sizeStyles = {
    1: 'text-display-xl',
    2: 'text-display-lg',
    3: 'text-display-base',
    4: 'text-display-sm',
    5: 'text-display-xs',
    6: 'text-display-xs'
  }

  return (
    <Component 
      className={cn(
        themeStyles[theme],
        sizeStyles[level],
        'tracking-display font-semibold',
        className
      )}
    >
      {children}
    </Component>
  )
}

export function Text({ 
  className, 
  children,
  theme = 'modern',
  size = 'base'
}: { 
  className?: string
  children: React.ReactNode
  theme?: 'modern' | 'luxury' | 'tech' | 'classic' | 'startup'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}) {
  const themeStyles = {
    modern: 'font-sans',
    luxury: 'font-luxury-sans',
    tech: 'font-tech-sans',
    classic: 'font-classic-sans',
    startup: 'font-startup-sans'
  }

  return (
    <p 
      className={cn(
        themeStyles[theme],
        `text-body-${size}`,
        'tracking-body text-gray-700',
        className
      )}
    >
      {children}
    </p>
  )
}

export function MonoText({ 
  className, 
  children,
  theme = 'modern',
  size = 'base'
}: { 
  className?: string
  children: React.ReactNode
  theme?: 'modern' | 'luxury' | 'tech' | 'classic' | 'startup'
  size?: 'sm' | 'base' | 'lg'
}) {
  const themeStyles = {
    modern: 'font-mono',
    luxury: 'font-luxury-mono',
    tech: 'font-tech-mono',
    classic: 'font-classic-mono',
    startup: 'font-startup-mono'
  }

  return (
    <span 
      className={cn(
        themeStyles[theme],
        `text-mono-${size}`,
        'tracking-mono tabular-nums',
        className
      )}
    >
      {children}
    </span>
  )
}

// Preset theme components for convenience
export function LuxuryHeading(props: Omit<React.ComponentProps<typeof Heading>, 'theme'>) {
  return <Heading {...props} theme="luxury" />
}

export function TechHeading(props: Omit<React.ComponentProps<typeof Heading>, 'theme'>) {
  return <Heading {...props} theme="tech" />
}

export function ClassicHeading(props: Omit<React.ComponentProps<typeof Heading>, 'theme'>) {
  return <Heading {...props} theme="classic" />
}

export function StartupHeading(props: Omit<React.ComponentProps<typeof Heading>, 'theme'>) {
  return <Heading {...props} theme="startup" />
}

// Convenience exports for different text styles
export const LuxuryText = (props: Omit<React.ComponentProps<typeof Text>, 'theme'>) => (
  <Text {...props} theme="luxury" />
)

export const TechText = (props: Omit<React.ComponentProps<typeof Text>, 'theme'>) => (
  <Text {...props} theme="tech" />
)

export const ClassicText = (props: Omit<React.ComponentProps<typeof Text>, 'theme'>) => (
  <Text {...props} theme="classic" />
)

export const StartupText = (props: Omit<React.ComponentProps<typeof Text>, 'theme'>) => (
  <Text {...props} theme="startup" />
)

// Convenience exports for monospace text
export const LuxuryMono = (props: Omit<React.ComponentProps<typeof MonoText>, 'theme'>) => (
  <MonoText {...props} theme="luxury" />
)

export const TechMono = (props: Omit<React.ComponentProps<typeof MonoText>, 'theme'>) => (
  <MonoText {...props} theme="tech" />
)

export const ClassicMono = (props: Omit<React.ComponentProps<typeof MonoText>, 'theme'>) => (
  <MonoText {...props} theme="classic" />
)

export const StartupMono = (props: Omit<React.ComponentProps<typeof MonoText>, 'theme'>) => (
  <MonoText {...props} theme="startup" />
)