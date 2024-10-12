import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold w-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-80",
        white:
          "bg-white text-foreground hover:opacity-80 group-hover:opacity-80 ",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-80",
        outline: "border bg-transparent hover:opacity-80 text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-80",
        ghost: "hover:opacity-80",
        link: "text-primary underline-offset-4 hover:opacity-80",
      },
      size: {
        default:
          "px-8 py-4 sm:py-3 1920:py-4  text-base sm:text-xs 1920:text-base",
        sm: "px-3",
        lg: "px-8",
        icon: "text-base  font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
