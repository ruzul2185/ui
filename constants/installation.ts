import fs from "fs";
import path from "path";

export const terminal = [
  { name: "pnpm", command: "pnpm dlx shadcn@latest add" },
  { name: "npm", command: "npx shadcn@latest add" },
  { name: "yarn", command: "yarn dlx shadcn@latest add" },
  { name: "bun", command: "bunx shadcn@latest add" },
];

export const terminalInstallationCommands = (label: string) => {
  return terminal.map((cmd) => ({
    command: cmd.command + " " + label,
    name: cmd.name,
  }));
};
