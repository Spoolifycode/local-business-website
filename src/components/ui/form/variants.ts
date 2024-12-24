export const formVariants = {
  label: "text-sm font-medium text-gray-700 mb-1",
  
  input: {
    base: "block w-full rounded-lg transition-colors focus:outline-none",
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-4 py-2.5 text-lg"
    },
    variant: {
      default: "border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
      error: "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
      success: "border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
    },
    disabled: "bg-gray-50 cursor-not-allowed opacity-75",
    withIcon: "pl-10"
  },

  select: {
    base: "block w-full rounded-lg transition-colors focus:outline-none appearance-none bg-no-repeat",
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2",
      lg: "px-4 py-2.5 text-lg"
    },
    variant: {
      default: "border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
      error: "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
      success: "border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
    },
    disabled: "bg-gray-50 cursor-not-allowed opacity-75",
    icon: "pr-10"
  },

  checkbox: {
    base: "rounded border-gray-300 text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20",
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    },
    disabled: "opacity-75 cursor-not-allowed"
  },

  radio: {
    base: "border-gray-300 text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20",
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    },
    disabled: "opacity-75 cursor-not-allowed"
  },

  helper: {
    base: "mt-1.5 text-sm",
    variant: {
      default: "text-gray-500",
      error: "text-red-600",
      success: "text-green-600"
    }
  },

  iconWrapper: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400",
  
  formGroup: "space-y-2",
  
  formSection: "space-y-4",

  formError: "mt-1.5 text-sm text-red-600",

  formSuccess: "mt-1.5 text-sm text-green-600"
}