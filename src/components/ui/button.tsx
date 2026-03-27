import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient' | 'glass'
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group"
    
    const variants = {
      default: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-100",
      destructive: "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-100",
      outline: "border-2 border-gray-300 bg-white text-gray-900 shadow-lg hover:border-gray-400 hover:shadow-xl hover:scale-105 active:scale-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100",
      secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 shadow-lg hover:from-gray-200 hover:to-gray-300 hover:shadow-xl hover:scale-105 active:scale-100 dark:from-gray-800 dark:to-gray-700 dark:text-gray-100",
      ghost: "text-gray-900 hover:bg-gray-100 hover:scale-105 active:scale-100 dark:text-gray-100 dark:hover:bg-gray-800",
      link: "text-primary underline-offset-4 hover:underline hover:scale-105 active:scale-100",
      gradient: "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 animate-gradient",
      glass: "glass text-white shadow-lg hover:bg-white/20 hover:shadow-xl hover:scale-105 active:scale-100 border border-white/20",
    }
    
    const sizes = {
      default: "h-12 px-8 py-3 text-base",
      sm: "h-10 px-6 py-2 text-sm",
      lg: "h-14 px-10 py-4 text-lg",
      xl: "h-16 px-12 py-5 text-xl",
      icon: "h-12 w-12",
    }

    const Comp = asChild ? "span" : "button"
    
    return (
      <Comp
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
