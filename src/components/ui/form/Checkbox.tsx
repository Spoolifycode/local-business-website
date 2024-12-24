'use client'

import React from 'react'
import { formVariants } from './variants'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  success?: string
  helper?: string
  size?: keyof typeof formVariants.checkbox.size
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className,
    label,
    error,
    success,
    helper,
    size = 'md',
    disabled,
    ...props 
  }, ref) => {
    const helperText = error || success || helper
    const helperVariant = error ? 'error' : success ? 'success' : 'default'

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={cn(
              formVariants.checkbox.base,
              formVariants.checkbox.size[size],
              disabled && formVariants.checkbox.disabled,
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          />
        </div>
        <div className="ml-2">
          {label && (
            <label className={cn(
              formVariants.label,
              "mb-0",
              disabled && "opacity-75 cursor-not-allowed"
            )}>
              {label}
            </label>
          )}
          {helperText && (
            <p className={cn(
              formVariants.helper.base,
              formVariants.helper.variant[helperVariant]
            )}>
              {helperText}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }