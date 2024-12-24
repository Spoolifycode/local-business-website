export const badgeVariants = {
  base: "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current",
  
  variant: {
    default: "bg-blue-50 text-blue-700 hover:bg-blue-100 focus:ring-blue-500",
    secondary: "bg-gray-50 text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
    success: "bg-green-50 text-green-700 hover:bg-green-100 focus:ring-green-500",
    warning: "bg-yellow-50 text-yellow-700 hover:bg-yellow-100 focus:ring-yellow-500",
    danger: "bg-red-50 text-red-700 hover:bg-red-100 focus:ring-red-500",
    outline: "border border-current"
  } as const,
  
  size: {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
  } as const
}