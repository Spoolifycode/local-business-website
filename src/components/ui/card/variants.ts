export const cardVariants = {
  base: "bg-white rounded-lg transition-all duration-200",
  
  variant: {
    default: "border border-gray-200 shadow-sm hover:shadow-md",
    elevated: "shadow-md hover:shadow-lg",
    outline: "border-2 border-gray-200",
    ghost: "hover:bg-gray-50"
  } as const,
  
  padding: {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  } as const,
  
  size: {
    sm: "w-full max-w-sm",
    md: "w-full max-w-md",
    lg: "w-full max-w-lg",
    xl: "w-full max-w-xl",
    full: "w-full"
  } as const,
  
  interactive: {
    true: "cursor-pointer hover:border-blue-500",
    false: ""
  } as const,

  header: "flex flex-col space-y-1.5 p-6",
  title: "text-2xl font-semibold leading-none tracking-tight",
  description: "text-sm text-gray-500",
  
  content: "p-6 pt-0",
  footer: "flex items-center p-6 pt-0"
}