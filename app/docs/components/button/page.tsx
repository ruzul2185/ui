import { Button } from "@/components/ruzul/button";
import Showcase from "@/components/showcase";
import Tabs from "@/components/tabs";
import Terminal from "@/components/terminal";

import { Github } from "lucide-react";

const code = `import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Simpler styles: flex layout, rounded, font, transition, disabled handling
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-component-primary shine text-component-primary-foreground border-b-4 border-l-4 border-component-border hover:border-0 hover:translate-x-[-4px] hover:translate-y-[4px] hover:bg-component-primary/70 transition-all duration-300",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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
`;

const terminalCommands = [
  { name: "pnpm", command: "pnpm dlx shadcn@latest add @ruzul/button" },
  { name: "npm", command: "npx shadcn@latest add @ruzul/button" },
  { name: "yarn", command: "yarn dlx shadcn@latest add @ruzul/button" },
  { name: "bun", command: "bunx shadcn@latest add @ruzul/button" },
];

const tabsData = [
  {
    name: "cli",
    content: (
      <Tabs
        tabs={terminalCommands.map((cmd) => ({
          name: cmd.name,
          content: <Terminal copyString={cmd.command}>{cmd.command}</Terminal>,
        }))}
      />
    ),
    copyText: "pnpm install",
  },
  {
    name: "manual",
    content: (
      <div>
        <h2 className="font-bold">
          Copy the code and resolve dependencies from import statements
        </h2>
        <Terminal language="tsx" copyString={code}>
          {code}
        </Terminal>
      </div>
    ),
  },
];

const buttonExamples = [
  {
    title: "Default",
    items: [
      {
        component: <Button variant="default">Button</Button>,
        code: `export function ButtonStyleDefault() { 
  return <Button variant="default">Button</Button>; 
}`,
      },
    ],
  },
  {
    title: "Secondary",
    items: [
      {
        component: <Button variant="secondary">Button</Button>,
        code: `export function ButtonStyleSecondary() { 
  return <Button variant="secondary">Button</Button>; 
}`,
      },
    ],
  },
  {
    title: "Destructive",
    items: [
      {
        component: <Button variant="destructive">Button</Button>,
        code: `export function ButtonStyleDestructive() { 
  return <Button variant="destructive">Button</Button>; 
}`,
      },
    ],
  },
  {
    title: "Outline",
    items: [
      {
        component: <Button variant="outline">Button</Button>,
        code: `export function ButtonStyleOutline() { 
  return <Button variant="outline">Button</Button>; 
}`,
      },
    ],
  },
  {
    title: "Ghost",
    items: [
      {
        component: <Button variant="ghost">Button</Button>,
        code: `export function ButtonStyleGhost() { 
  return <Button variant="ghost">Button</Button>; 
}`,
      },
    ],
  },
  {
    title: "Link",
    description:
      "The `asChild` prop allows you to render a different element while retaining the button's styling and behavior.",
    items: [
      {
        component: (
          <Button asChild variant="link">
            <a href="/login">Login</a>
          </Button>
        ),
        code: `export function ButtonStyleLink() { 
  return <Button asChild variant="link">
            <a href="/login">Login</a>
         </Button>; 
}`,
      },
    ],
  },
  {
    title: "Only Icon",
    items: [
      {
        component: (
          <Button variant="outline">
            <Github />
          </Button>
        ),
        code: `export function ButtonStyleIcon() { 
  return <Button variant="outline"> <Github /> </Button>; 
}`,
      },
    ],
  },
  {
    title: "With Icon",
    items: [
      {
        component: (
          <Button variant="outline">
            <div className="flex items-center gap-2">
              <Github /> Github
            </div>
          </Button>
        ),
        code: `export function ButtonStyleWithIcon() { 
  return <Button variant="outline"> <Github /> Github </Button>; 
}`,
      },
    ],
  },
];

const UsageImport = 'import {Button} from "@components/ruzul/button"';

const Page = () => {
  return (
    <div className="max-w-3xl flex flex-col px-4 py-8 gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-muted-foreground">
          Renders a button or a button-like component.
        </p>
      </div>

      {/* Installation Tabs */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Installation</h1>
        <Tabs tabs={tabsData} />
      </div>

      {/* Usage */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Usage</h1>
        <Terminal language="tsx" copyString={UsageImport}>
          {UsageImport}
        </Terminal>
      </div>

      {/* Button Examples */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Examples</h1>
        {buttonExamples.map((section, idx) => (
          <div key={idx} className="py-2">
            <h2 className="text-lg font-normal tracking-tight py-2">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-sm py-1">{section.description}</p>
            )}
            {section.items.map((item, i) => (
              <Showcase
                key={i}
                component={item.component}
                code={item.code}
                language="tsx"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
