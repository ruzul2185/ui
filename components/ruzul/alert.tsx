import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const afterShine =
  "after:content-[''] after:absolute after:top-0 after:w-[150%] after:h-[100%] after:bg-[linear-gradient(120deg,transparent,var(--color-gleem),transparent)] after:skew-x-[-20deg] after:pointer-events-none after:animate-[shine_2s_infinite]";

const baseHover = `border-b-4 border-l-4 border-t-[1px] border-r-[1px] animate-[toggleAlert_1s_infinite] [animation-delay:var(--delay)]`;

const alertVariants = cva(
  "relative overflow-hidden border-component-primary w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: `bg-card text-card-foreground ${baseHover} ${afterShine}`,
        destructive: `text-destructive bg-card border-destructive [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90 ${baseHover} ${afterShine}`,
        success: `text-success bg-card border-success [&>svg]:text-current *:data-[slot=alert-description]:text-success/90 ${baseHover} ${afterShine}`,
        warning: `text-warning bg-card border-warning [&>svg]:text-current *:data-[slot=alert-description]:text-warning/90 ${baseHover} ${afterShine}`,
        info: `text-info bg-card border-info [&>svg]:text-current *:data-[slot=alert-description]:text-info/90 ${baseHover} ${afterShine}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  const delay = React.useMemo(
    () => `${Math.random() * 2}s`, // random between 0–2s
    []
  );
  return (
    <div
      data-slot="alert"
      role="alert"
      style={{ "--delay": delay } as React.CSSProperties}
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
