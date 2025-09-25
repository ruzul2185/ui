// app/docs/components/accordion/page.tsx
import { Button } from "@/components/ruzul/button";
import Showcase from "@/components/showcase";
import Tabs from "@/components/tabs";
import Terminal from "@/components/terminal";
import { terminalInstallationCommands } from "@/constants/installation";
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/ruzul/ui/accordion";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "components/ruzul/accordion.tsx");
const accordionSource = fs.readFileSync(filePath, "utf-8");

const terminalCommands = terminalInstallationCommands("@ruzul/accordion");

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
        <Terminal language="tsx" copyString={accordionSource}>
          {accordionSource}
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
        component: (
          <AccordionRoot
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-[300px] rounded-md"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Item 1</AccordionTrigger>
              <AccordionContent>Content 1</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Item 2</AccordionTrigger>
              <AccordionContent>Content 2</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Item 3</AccordionTrigger>
              <AccordionContent>Content 3</AccordionContent>
            </AccordionItem>
          </AccordionRoot>
        ),
        code: `<AccordionRoot
  type="single"
  defaultValue="item-1"
  collapsible
  className="w-[300px] rounded-md"
>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Item 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger>Item 3</AccordionTrigger>
    <AccordionContent>Content 3</AccordionContent>
  </AccordionItem>
</AccordionRoot>`,
      },
    ],
  },
];

export default function AccordionDocsPage() {
  return (
    <div className="max-w-3xl flex flex-col px-4 py-8 gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
        <p className="text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal an
          associated section of content.
        </p>
      </div>

      <div>
        <Button variant="link" asChild>
          <a
            href="https://www.radix-ui.com/primitives/docs/components/accordion"
            target="_blank"
          >
            Docs
          </a>
        </Button>
        <Button variant="link" asChild>
          <a
            href="https://www.radix-ui.com/primitives/docs/components/accordion#api-reference"
            target="_blank"
          >
            API Reference
          </a>
        </Button>
      </div>

      {/* Installation Tabs */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Installation</h1>
        <Tabs tabs={tabsData} />
      </div>

      {/* Examples */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Examples</h1>
        {buttonExamples.map((section, idx) => (
          <div key={idx} className="py-2">
            <h2 className="text-lg font-normal tracking-tight py-2">
              {section.title}
            </h2>
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
}
