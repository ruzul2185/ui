import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof Accordion.Item>;
type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Trigger
>;
type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Content
>;

const baseHover =
  "border-component-border border-b-6 border-l-6 border-t-[2px] border-r-[2px] hover:border-[2px] transition-all duration-100";
const afterShine =
  "after:content-[''] after:absolute after:top-0 after:w-[150%] after:h-[100%] after:bg-[linear-gradient(120deg,transparent,var(--color-gleem),transparent)] after:skew-x-[-20deg] after:pointer-events-none after:animate-[shine_2s_infinite]";
// Accordion Item
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, ref) => (
    <Accordion.Item
      className={cn(
        `mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b ${baseHover} rounded my-2`,
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

// Accordion Trigger
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={cn(
        `group flex bg-component-primary text-component-primary-foreground h-[45px] flex-1 cursor-default items-center justify-between px-5 leading-none outline-none ${afterShine} overflow-hidden relative inline-flex`,
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
      <ChevronDownIcon
        className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// Accordion Content
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, ref) => (
  <Accordion.Content
    className={cn(
      `overflow-hidden data-[state=closed]:animate-[slideUp_0.3s_ease-out] data-[state=open]:animate-[slideDown_0.3s_ease-out] `,
      className
    )}
    {...props}
    ref={ref}
  >
    <div className="px-5 py-[15px] bg-white text-black">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
