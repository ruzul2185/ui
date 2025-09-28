import { Button } from "@/components/ruzul/button";
import Tabs from "@/components/tabs";
import path from "path";
import fs from "fs";
import { terminalInstallationCommands } from "@/constants/installation";
import Terminal from "@/components/terminal";
import Showcase from "@/components/showcase";
import AspectRatio from "@/components/ruzul/aspect-ratio";
import Image from "next/image";

const filePath = path.join(process.cwd(), "components/ruzul/aspect-ratio.tsx");
const alertDialogSource = fs.readFileSync(filePath, "utf-8");

const terminalCommands = terminalInstallationCommands("@ruzul/alert-ratio");
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
          <div className="w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-blackA4">
            <AspectRatio ratio={16 / 9}>
              <Image
                className="size-full object-cover"
                src={
                  "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg"
                }
                alt={"Landscape photograph by Tobias Tullius"}
                fill
              />
            </AspectRatio>
          </div>
        ),
        code: `<div className="w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-blackA4">
    <AspectRatio ratio={16 / 9}>
        <Image
        className="size-full object-cover"
        src={
            "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg"
        }
        alt={"Landscape photograph by Tobias Tullius"}
        fill
        />
    </AspectRatio>
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
        <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      <div>
        <Button variant="link" asChild>
          <a
            href="https://www.radix-ui.com/primitives/docs/components/aspect-ratio"
            target="_blank"
          >
            Docs
          </a>
        </Button>
        <Button variant="link" asChild>
          <a
            href="https://www.radix-ui.com/primitives/docs/components/aspect-ratio#api-reference"
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
