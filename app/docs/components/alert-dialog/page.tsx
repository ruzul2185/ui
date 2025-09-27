import { Button } from "@/components/ruzul/button";
import Tabs from "@/components/tabs";
import Terminal from "@/components/terminal";
import { terminalInstallationCommands } from "@/constants/installation";
import path from "path";
import fs from "fs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ruzul/alert-dialog";
import Showcase from "@/components/showcase";
const filePath = path.join(process.cwd(), "components/ruzul/alert-dialog.tsx");
const alertDialogSource = fs.readFileSync(filePath, "utf-8");

const terminalCommands = terminalInstallationCommands("@ruzul/alert-dialog");
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
        component: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
        code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete
        your account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
  </AlertDialog>`,
      },
    ],
  },
];

const page = () => {
  return (
    <div className="max-w-3xl flex flex-col px-4 py-8 gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      <div>
        <Button variant="link" asChild>
          <a
            href="https://www.radix-ui.com/primitives/docs/components/alert-dialog"
            target="_blank"
          >
            Docs
          </a>
        </Button>
        <Button variant="link" asChild>
          <a
            href="https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference"
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
};

export default page;
