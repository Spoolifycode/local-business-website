export const animationVariants = {
  fade: {
    base: "transition-opacity",
    duration: {
      fast: "duration-200",
      normal: "duration-300",
      slow: "duration-500"
    },
    state: {
      from: "opacity-0",
      to: "opacity-100"
    }
  },

  slide: {
    base: "transition-all",
    duration: {
      fast: "duration-200",
      normal: "duration-300",
      slow: "duration-500"
    },
    direction: {
      up: {
        from: "translate-y-4 opacity-0",
        to: "translate-y-0 opacity-100"
      },
      down: {
        from: "-translate-y-4 opacity-0",
        to: "translate-y-0 opacity-100"
      },
      left: {
        from: "translate-x-4 opacity-0",
        to: "translate-x-0 opacity-100"
      },
      right: {
        from: "-translate-x-4 opacity-0",
        to: "translate-x-0 opacity-100"
      }
    }
  },

  scale: {
    base: "transition-all",
    duration: {
      fast: "duration-200",
      normal: "duration-300",
      slow: "duration-500"
    },
    state: {
      from: "scale-95 opacity-0",
      to: "scale-100 opacity-100"
    }
  },

  skeleton: {
    base: "animate-pulse rounded",
    color: {
      light: "bg-gray-200",
      dark: "bg-gray-300"
    }
  },

  spinner: {
    base: "animate-spin",
    size: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8"
    },
    color: {
      light: "text-white",
      dark: "text-gray-900",
      primary: "text-blue-600"
    }
  }
}