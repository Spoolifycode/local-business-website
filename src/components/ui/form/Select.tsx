'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { formVariants } from './variants'
import { cn } from '@/lib/utils'

type BaseSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>

export interface SelectProps extends BaseSelectProps {
  label?: string
  error?: string
  success?: string
  helper?: string
  size?: keyof typeof formVariants.select.size
  options?: Array<{
    value: string | number
    label: string
    disabled?: boolean
  }>
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className,
    label,
    error,
    success,
    helper,
    size = 'md',
    disabled,
    options,
    children,
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
          <select
            className={cn(
              formVariants.select.base,
              formVariants.select.size[size],
              formVariants.select.variant[variant],
              formVariants.select.icon,
              disabled && formVariants.select.disabled,
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          >
            {options ? options.map(option => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            )) : children}
          </select>
          <div className={formVariants.iconWrapper + " right-0 left-auto pr-3"}>
            <ChevronDown className="h-5 w-5" />
          </div>
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

Select.displayName = 'Select'

export { Select }