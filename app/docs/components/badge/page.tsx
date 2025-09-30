import Tabs from "@/components/tabs";
import Terminal from "@/components/terminal";
import { terminalInstallationCommands } from "@/constants/installation";
import path from "path";
import fs from "fs";
import Showcase from "@/components/showcase";
import { Badge } from "@/components/ruzul/badge";

const filePath = path.join(process.cwd(), "components/ruzul/badge.tsx");
const alertDialogSource = fs.readFileSync(filePath, "utf-8");

const terminalCommands = terminalInstallationCommands("@ruzul/badge");
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
        <Terminal language="tsx" copyString={alertDialogSource}>
          {alertDialogSource}
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
        component: <Badge variant="default">Badge</Badge>,
        code: `<Badge variant="default">Badge</Badge>`,
      },
    ],
  },
  {
    title: "Secondary",
    items: [
      {
        component: <Badge variant="secondary">Secondary</Badge>,
        code: `<Badge variant="secondary">Secondary</Badge>`,
      },
    ],
  },
  {
    title: "Outline",
    items: [
      {
        component: <Badge variant="outline">Outline</Badge>,
        code: `<Badge variant="outline">Outline</Badge>`,
      },
    ],
  },
  {
    title: "Destructive",
    items: [
      {
        component: <Badge variant="destructive">Destructive</Badge>,
        code: `<Badge variant="destructive">Destructive</Badge>`,
      },
    ],
  },
  {
    title: "Warning",
    items: [
      {
        component: <Badge variant="warning">Warning</Badge>,
        code: `<Badge variant="warning">Warning</Badge>`,
      },
    ],
  },
  {
    title: "Information",
    items: [
      {
        component: <Badge variant="info">Information</Badge>,
        code: `<Badge variant="info">Information</Badge>`,
      },
    ],
  },
];

const page = () => {
  return (
    <div className="max-w-3xl flex flex-col px-4 py-8 gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="text-muted-foreground">
          Displays a badge or a component that looks like a badge.
        </p>
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
};

export default page;
