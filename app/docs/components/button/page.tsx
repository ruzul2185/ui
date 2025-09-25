import { Button } from "@/components/ruzul/button";
import Showcase from "@/components/showcase";
import Tabs from "@/components/tabs";
import Terminal from "@/components/terminal";
import { terminalInstallationCommands } from "@/constants/installation";

import { Github } from "lucide-react";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "components/ruzul/button.tsx");
const code = fs.readFileSync(filePath, "utf-8");
const terminalCommands = terminalInstallationCommands("@ruzul/button");

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
