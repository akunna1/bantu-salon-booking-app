import * as React from "react" 
import { Slot } from "@radix-ui/react-slot" // Radix UI Slot for customization
import { cva, type VariantProps } from "class-variance-authority" // Class Variance Authority for variants
import { cn } from "@/lib/utils" // Utility to concatenate class names

// Styling of Button
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-white font-bold shadow-xl transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", 
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#f2e6d9] to-[#dfbf9f] hover:scale-110", // Default gradient button style
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", // Destructive style
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", // Outline style
      },
      size: {
        default: "px-8 py-3 text-xl font-bold", // Default size
        sm: "h-8 rounded-md px-3 text-xs", // Small button
        lg: "h-10 rounded-md px-8", // Large button
      },
    },
    defaultVariants: {
      variant: "default", // Default variant
      size: "default", // Default size
    },
  }
)

// Button component that handles variant and size customization
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
  asChild?: boolean // Option to render as a different component
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button" // Use Slot for customization if asChild is true
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Apply variant and size classes
        ref={ref}
        {...props} // Spread other props onto the button element
      />
    )
  }
)

Button.displayName = "Button" // Set display name for debugging purposes

export { Button, buttonVariants } // Export Button and buttonVariants for use elsewhere
