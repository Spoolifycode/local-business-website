export const buttonVariants = {
  base: "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  
  variant: {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline: "border border-gray-200 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "hover:bg-gray-100 focus:ring-gray-500",
    link: "text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline"
  },
  
  size: {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-lg",
    icon: "h-9 w-9"
  },

  loading: "opacity-70 cursor-not-allowed",
  
  iconLeft: "mr-2",
  iconRight: "ml-2"
}