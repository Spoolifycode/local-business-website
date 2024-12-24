export const layoutVariants = {
  container: {
    base: 'mx-auto w-full px-4 sm:px-6 lg:px-8',
    size: {
      sm: 'max-w-3xl',
      md: 'max-w-4xl',
      lg: 'max-w-5xl',
      xl: 'max-w-6xl',
      '2xl': 'max-w-7xl',
      full: 'max-w-none'
    }
  },
  
  section: {
    base: 'w-full',
    spacing: {
      none: 'py-0',
      sm: 'py-4',
      md: 'py-8',
      lg: 'py-12',
      xl: 'py-16',
      '2xl': 'py-20'
    },
    variant: {
      default: 'bg-background',
      gray: 'bg-gray-50',
      gradient: 'bg-gradient-to-b from-primary/10 to-background'
    }
  },

  grid: {
    base: 'grid w-full',
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
      6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
      8: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8',
      12: 'grid-cols-3 sm:grid-cols-6 lg:grid-cols-12'
    },
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-10'
    }
  },
  
  stack: {
    base: 'flex flex-col',
    spacing: {
      none: 'space-y-0',
      xs: 'space-y-1',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8',
      '2xl': 'space-y-10'
    }
  }
} as const