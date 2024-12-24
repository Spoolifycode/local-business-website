'use client'

import React from 'react'
import { cardVariants } from './variants'
import { cn } from '@/lib/utils'

// Base props without HTML attributes
interface BaseCardProps {
  variant?: keyof typeof cardVariants.variant
  padding?: keyof typeof cardVariants.padding
  size?: keyof typeof cardVariants.size
  interactive?: boolean
}

// Div variant props
type CardDivProps = BaseCardProps & 
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseCardProps> & {
    as?: 'div'
    href?: never
  }

// Anchor variant props
type CardLinkProps = BaseCardProps & 
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseCardProps> & {
    as: 'a'
    href: string
  }

// Union type for props
type CardProps = CardDivProps | CardLinkProps

// Header props
interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  headerTitle?: React.ReactNode
  description?: React.ReactNode
}

// Simple props for content and footer
type CardContentProps = React.HTMLAttributes<HTMLDivElement>
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>

// Div variant
const CardDiv = React.forwardRef<HTMLDivElement, CardDivProps>((props, ref) => {
  const {
    className,
    variant = 'default',
    padding = 'md',
    size = 'full',
    interactive = false,
    as: _,
    ...rest
  } = props

  return (
    <div
      ref={ref}
      className={cn(
        cardVariants.base,
        cardVariants.variant[variant],
        cardVariants.padding[padding],
        cardVariants.size[size],
        interactive && cardVariants.interactive.true,
        className
      )}
      {...rest}
    />
  )
})

// Anchor variant
const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>((props, ref) => {
  const {
    className,
    variant = 'default',
    padding = 'md',
    size = 'full',
    interactive = false,
    as: _,
    ...rest
  } = props

  return (
    <a
      ref={ref}
      className={cn(
        cardVariants.base,
        cardVariants.variant[variant],
        cardVariants.padding[padding],
        cardVariants.size[size],
        interactive && cardVariants.interactive.true,
        className
      )}
      {...rest}
    />
  )
})

// Main Card component
const Card = React.forwardRef<HTMLElement, CardProps>((props, ref) => {
  if (props.as === 'a') {
    return <CardLink {...(props as CardLinkProps)} ref={ref as React.Ref<HTMLAnchorElement>} />
  }
  return <CardDiv {...(props as CardDivProps)} ref={ref as React.Ref<HTMLDivElement>} />
})

// Sub-components
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, headerTitle, description, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants.header, className)}
      {...props}
    >
      {headerTitle && <div className={cardVariants.title}>{headerTitle}</div>}
      {description && <div className={cardVariants.description}>{description}</div>}
      {children}
    </div>
  )
)

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants.content, className)} {...props} />
  )
)

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants.footer, className)} {...props} />
  )
)

if (process.env.NODE_ENV !== 'production') {
  Card.displayName = 'Card'
  CardHeader.displayName = 'CardHeader'
  CardContent.displayName = 'CardContent'
  CardFooter.displayName = 'CardFooter'
}

export type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps }
export { Card, CardHeader, CardContent, CardFooter }