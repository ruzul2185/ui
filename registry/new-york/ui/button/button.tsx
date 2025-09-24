import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import "./button.css";

import { cn } from "@/lib/utils";

// Simpler styles: flex layout, rounded, font, transition, disabled handling
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-component-primary shine text-component-primary-foreground border-b-4 border-l-4 border-t-[1px] border-r-[1px] border-component-border hover:border-[1px] hover:translate-x-[-4px] hover:translate-y-[4px] hover:bg-component-primary/70 transition-all duration-100",
        destructive:
          "bg-destructive shine text-white border-b-4 border-l-4 border-t-[1px] border-r-[1px] border-component-secondary hover:border-[1px] hover:translate-x-[-4px] hover:translate-y-[4px] hover:bg-destructive/70 transition-all duration-100",
        outline:
          "shine border-b-4 border-l-4 border-t-[1px] border-r-[1px] border-component-secondary bg-background hover:bg-accent hover:border-[1px] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-100",
        secondary:
          "bg-component-secondary shine text-component-primary-foreground border-b-4 border-l-4 border-t-[1px] border-r-[1px] border-component-primary text-secondary-text hover:border-[1px] hover:translate-x-[-4px] hover:translate-y-[4px] hover:bg-component-secondary/70 transition-all duration-100",
        ghost:
          "shine bg-white border-ghost border-b-4 border-l-4 border-t-[1px] border-r-[1px] text-ghost hover:text-white hover:bg-ghost/50 hover:border-[1px] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-100",
        link: "relative text-primary before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full hover:before:left-0",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 rounded-md text-xs",
        lg: "h-10 px-6 rounded-md",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
