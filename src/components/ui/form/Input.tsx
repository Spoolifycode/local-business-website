'use client'

import React from 'react'
import { formVariants } from './variants'
import { cn } from '@/lib/utils'

type BaseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface InputProps extends BaseInputProps {
  label?: string
  error?: string
  success?: string
  helper?: string
  icon?: React.ReactNode
  size?: keyof typeof formVariants.input.size
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    label,
    error,
    success,
    helper,
    icon,
    size = 'md',
    disabled,
    type = 'text',
    ...props 
  }, ref) => {
    const variant = error ? 'error' : success ? 'success' : 'default'
    
    const helperText = error || success || helper
    const helperVariant = error ? 'error' : success ? 'success' : 'default'

    return (
      <div className={formVariants.formGroup}>
        {label && (
          <label className={formVariants.label}>
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className={formVariants.iconWrapper}>
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              formVariants.input.base,
              formVariants.input.size[size],
              formVariants.input.variant[variant],
              disabled && formVariants.input.disabled,
              icon && formVariants.input.withIcon,
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          />
        </div>
        {helperText && (
          <p className={cn(
            formVariants.helper.base,
            formVariants.helper.variant[helperVariant]
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }