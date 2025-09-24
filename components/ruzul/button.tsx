import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const afterShine =
  "after:content-[''] after:absolute after:top-0 after:w-[150%] after:h-[100%] after:bg-[linear-gradient(120deg,transparent,var(--color-gleem),transparent)] after:skew-x-[-20deg] after:pointer-events-none after:animate-[shine_2s_infinite]";
const baseHover =
  "border-b-4 border-l-4 border-t-[1px] border-r-[1px] hover:border-[1px] hover:translate-x-[-4px] hover:translate-y-[4px] transition-all duration-100";
const buttonVariants = cva(
  "relative inline-block overflow-hidden items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: `bg-component-primary text-component-primary-foreground  border-component-border  hover:bg-component-primary/70 ${baseHover} ${afterShine}`,
        destructive: `bg-destructive text-white border-component-secondary hover:bg-destructive/70 ${baseHover} ${afterShine}`,
        outline: `border-component-secondary bg-background hover:bg-accent ${baseHover} ${afterShine}`,
        secondary: `bg-component-secondary  text-component-primary-foreground border-component-primary text-secondary-text hover:bg-component-secondary/70 ${baseHover} ${afterShine}`,
        ghost: `bg-white border-ghost text-ghost hover:text-white hover:bg-ghost/50 ${baseHover} ${afterShine}`,
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
