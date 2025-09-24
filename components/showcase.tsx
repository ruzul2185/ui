"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils"; // shadcn utility (optional)

interface ShowcaseProps {
  component: ReactNode;
  code: ReactNode;
}

export default function Showcase({ component, code }: ShowcaseProps) {
  const [isCode, setIsCode] = useState(false);

  return (
    <div className="flex flex-col flex-1 gap-4">
      {/* Toggle Tabs */}
      <div className="flex gap-2 border-b">
        <button
          onClick={() => setIsCode(false)}
          className={cn(
            "px-3 py-1 text-sm font-medium rounded-t-md",
            !isCode
              ? "bg-background border border-b-transparent"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setIsCode(true)}
          className={cn(
            "px-3 py-1 text-sm font-medium rounded-t-md",
            isCode
              ? "bg-background border border-b-transparent"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Code
        </button>
      </div>

      {/* Showcase Area */}
      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        {!isCode ? (
          <div className="flex items-center justify-center min-h-[400px] relative">
            {component}
          </div>
        ) : (
          <div className="flex items-start justify-start min-h-[400px] relative overflow-x-auto">
            <pre className="text-sm bg-muted p-4 rounded-md w-full">{code}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
