import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { typographyBodyBoldClassName } from "../typography"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm font-noto",
        primary: "-w-full bg-black text-white py-[10px]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
        hero: cn(typographyBodyBoldClassName, "bg-primary text-primary-foreground shadow hover:bg-primary/90"),
        buy: "font-bold text-base leading-[172%] -tracking-[1%] text-white py-[10px] px-[20px] bg-dark rounded-none min-h-[48px] font-inter",
      },
      size: {
        free: "rounded-none font-mono",
        default: "p-[10px] px-4 py-2",
        sm: "p-[10px] rounded-md px-3 text-xs",
        lg: "p-[10px] rounded-md px-8",
        icon: "p-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
