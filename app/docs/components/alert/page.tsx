import Showcase from "@/components/showcase";
import Tabs from "@/components/tabs";
import Terminal from "@/components/terminal";
import { terminalInstallationCommands } from "@/constants/installation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ruzul/alert";
import fs from "fs";
import {
  CheckCheck,
  CheckCircle2Icon,
  Info,
  ShieldAlert,
  Skull,
} from "lucide-react";
import path from "path";

const filePath = path.join(process.cwd(), "components/ruzul/accordion.tsx");
const accordionSource = fs.readFileSync(filePath, "utf-8");

const terminalCommands = terminalInstallationCommands("@ruzul/alert");
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
          <div>
            <Alert variant="default">
              <CheckCircle2Icon />
              <AlertTitle>Hey! This is a normal alert!</AlertTitle>
              <AlertDescription>
                This is an alert with icon, title and description.
              </AlertDescription>
            </Alert>
          </div>
        ),
        code: `<div>
  <Alert variant="default">
    <CheckCircle2Icon />
    <AlertTitle>Hey! This is a normal alert!</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
  </Alert>
</div>`,
      },
    ],
  },
  {
    title: "Default",
    items: [
      {
        component: (
          <div className="flex flex-col gap-4">
            <div>
              <Alert variant="destructive">
                <Skull />
                <AlertTitle>Danger!</AlertTitle>
                <AlertDescription>
                  This is an alert with icon, title and description.
                </AlertDescription>
              </Alert>
            </div>
            <div>
              <Alert variant="success">
                <CheckCheck />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  This is an alert with icon, title and description.
                </AlertDescription>
              </Alert>
            </div>
            <div>
              <Alert variant="info">
                <Info />
                <AlertTitle>Information!</AlertTitle>
                <AlertDescription>
                  This is an alert with icon, title and description.
                </AlertDescription>
              </Alert>
            </div>
            <div>
              <Alert variant="warning">
                <ShieldAlert />
                <AlertTitle>Warning!</AlertTitle>
                <AlertDescription>
                  This is an alert with icon, title and description.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        ),
        code: `<div className="flex flex-col gap-4">
  <div>
    <Alert variant="destructive">
      <Skull />
      <AlertTitle>Danger!</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  </div>
  <div>
    <Alert variant="success">
      <CheckCheck />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  </div>
  <div>
    <Alert variant="info">
      <Info />
      <AlertTitle>Information!</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  </div>
  <div>
    <Alert variant="warning">
      <ShieldAlert />
      <AlertTitle>Warning!</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
  </div>
</div>`,
      },
    ],
  },
];

const page = () => {
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
