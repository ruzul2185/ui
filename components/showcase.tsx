"use client";

import { useState, ReactNode } from "react";
// import { Button } from "@/components/ruzul/button";
import { Highlight, Language, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ruzul/button";

interface ShowcaseProps {
  component: ReactNode;
  code: string;
  language?: Language;
}

export default function Showcase({
  component,
  code,
  language = "tsx",
}: ShowcaseProps) {
  const [isCode, setIsCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="flex flex-col flex-1 gap-4">
      {/* Tabs */}
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

      {/* Showcase */}
      <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
        {!isCode ? (
          <div className="flex items-center justify-center min-h-[400px]">
            {component}
          </div>
        ) : (
          <div className="relative w-full">
            {/* Copy button */}
            {/* Copy button wrapper */}
            <div className="absolute top-2 right-2 z-10">
              <Button onClick={handleCopy} className="px-2 py-1 text-xs">
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <Highlight
              code={code.trim()}
              language={language}
              theme={themes.dracula}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={cn(
                    className,
                    "text-sm p-4 rounded-md w-full overflow-x-auto"
                  )}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
}
