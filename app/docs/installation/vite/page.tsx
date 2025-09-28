import { Button } from "@/components/ruzul/button";
import Tabs from "@/components/tabs";
import Terminal from "@/components/terminal";
import Link from "next/link";
const terminalCommands = [
  { name: "pnpm", command: "pnpm create vite@latest" },
  { name: "npm", command: "npm create vite@latest" },
  { name: "yarn", command: "yarn create vite@latest" },
  { name: "bun", command: "bun create vite@latest" },
];

const shadCommands = [
  { name: "pnpm", command: "pnpm dlx shadcn@latest init" },
  { name: "npm", command: "npx shadcn@latest init" },
  { name: "yarn", command: "yarn shadcn@latest init" },
  { name: "bun", command: "bunx --bun shadcn@latest init" },
];

const tailwindCommands = [
  { name: "pnpm", command: "pnpm add tailwindcss @tailwindcss/vite" },
  { name: "npm", command: "npm install tailwindcss @tailwindcss/vite" },
  { name: "yarn", command: "yarn add tailwindcss @tailwindcss/vite" },
  { name: "bun", command: "bun add tailwindcss @tailwindcss/vite" },
];

const nodeUpdateCommands = [
  { name: "pnpm", command: "pnpm add -D @types/node" },
  { name: "npm", command: "npm install -D @types/node" },
  { name: "yarn", command: "yarn add -D @types/node" },
  { name: "bun", command: "bun add -D @types/node" },
];

const replaceCommand = [
  { name: "src/index.css", command: '@import "tailwindcss";' },
];

const tsconfigModification = `{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;

const tsappmod = `{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}`;

const viteChanges = `import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`;

const themeChange =
  "Which color would you like to use as base color? > Neutral";

const registryChange = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  ///...
  "registries": {
    "@ruzul": "https://plaguin.ruzul.shop/r/{name}.json"
  }
}
`;

const page = () => {
  return (
    <div className="max-w-3xl flex flex-col px-4 py-8 gap-8 w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Vite</h1>
        <p className="text-muted-foreground">
          Vite is an ultra-fast frontend build tool driving the development of
          next-generation web applications.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          1. Create new Vite Project
        </h1>
        <p className="text-muted-foreground py-2">
          Begin by setting up a new React project with Vite, choosing the React
          + TypeScript template.
        </p>
        <Tabs
          tabs={terminalCommands.map((cmd) => ({
            name: cmd.name,
            content: (
              <Terminal copyString={cmd.command} language="tsx">
                {cmd.command}
              </Terminal>
            ),
          }))}
        />
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          2. Add Tailwind CSS (preferred v4)
        </h1>
        <p className="text-muted-foreground py-2">
          Setup Tailwind CSS using the given commands:
        </p>
        <Tabs
          tabs={tailwindCommands.map((cmd) => ({
            name: cmd.name,
            content: (
              <Terminal copyString={cmd.command} language="tsx">
                {cmd.command}
              </Terminal>
            ),
          }))}
        />
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          3. Replace all styling in src/index.css with the following command:
        </h1>
        <Tabs
          tabs={replaceCommand.map((cmd) => ({
            name: cmd.name,
            content: (
              <Terminal copyString={cmd.command} language="css">
                {cmd.command}
              </Terminal>
            ),
          }))}
        />
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          4. Modify tsconfig.json file:
        </h1>
        <p className="text-muted-foreground py-2">
          The current version of Vite splits TypeScript configuration into three
          files, two of which need to be edited. Add the{" "}
          <i className="bg-highlight p-1 rounded text-background">baseUrl</i>{" "}
          and <i className="bg-highlight p-1 rounded text-background">paths</i>{" "}
          properties to the{" "}
          <i className="bg-highlight p-1 rounded text-background">
            compilerOptions
          </i>{" "}
          section of the{" "}
          <i className="bg-highlight p-1 rounded text-background">
            tsconfig.json
          </i>{" "}
          and{" "}
          <i className="bg-highlight p-1 rounded text-background">
            tsconfig.app.json
          </i>{" "}
          files:
        </p>
        <Terminal copyString={tsconfigModification} language="json">
          {tsconfigModification}
        </Terminal>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          5. Modify tsconfig.app.json file:
        </h1>
        <p className="text-muted-foreground py-2">
          Add the following code to the{" "}
          <i className="bg-highlight p-1 rounded text-background">
            tsconfig.app.json
          </i>{" "}
          file to resolve paths, for your IDE:
        </p>
        <Terminal copyString={tsappmod} language="json">
          {tsappmod}
        </Terminal>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          6. Modify vite.config.ts file:
        </h1>
        <p className="text-muted-foreground py-2">
          Add the following code to the {` `}
          <i className="bg-highlight p-1 rounded text-background">
            vite.config.ts
          </i>{" "}
          so your app can resolve paths without error:
        </p>
        <Tabs
          tabs={nodeUpdateCommands.map((cmd) => ({
            name: cmd.name,
            content: (
              <Terminal copyString={cmd.command} language="tsx">
                {cmd.command}
              </Terminal>
            ),
          }))}
        />
        <p className="text-muted-foreground py-2">
          Installing types for node will help use{" "}
          <i className="bg-highlight p-1 rounded text-background">path</i>:{" "}
        </p>
        <Terminal copyString={viteChanges} language="json">
          {viteChanges}
        </Terminal>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          7. Install Shad/cn
        </h1>
        <p className="text-muted-foreground py-2">
          Run the{` `}
          <i className="bg-highlight p-1 rounded text-background">
            shadcn init
          </i>{" "}
          command to setup your project
        </p>
        <Tabs
          tabs={shadCommands.map((cmd) => ({
            name: cmd.name,
            content: (
              <Terminal copyString={cmd.command} language="tsx">
                {cmd.command}
              </Terminal>
            ),
          }))}
        />
        <p className="text-muted-foreground py-2">
          You will be asked a few questions to configure {` `}
          <i className="bg-highlight p-1 rounded text-background">
            components.json
          </i>{" "}
          .
        </p>
        <Terminal language="json">{themeChange}</Terminal>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          8. Add Themes
        </h1>
        <p className="text-muted-foreground py-2">
          To implement theme of your choice, go to{" "}
          <Button asChild variant="link">
            <Link href="/themes">Themes</Link>
          </Button>
        </p>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight py-2">
          9. Add Components
        </h1>
        <p className="text-muted-foreground py-2">
          Also, add the registry name in order to access it via cli!
        </p>
        <Terminal language="json">{registryChange}</Terminal>
        <p className="text-muted-foreground py-2">
          The basic setup is done! Now, you can checkout the component you want
          to add for further instructions on how to add it.
        </p>
      </div>
    </div>
  );
};

export default page;
