"use client";

import { useState } from "react";
import { Highlight, themes, Language } from "prism-react-renderer";
import { Button } from "@/components/ruzul/button";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: string; // Prism needs a string
  copyString?: string;
  language?: Language;
}

const Terminal = ({
  children,
  copyString,
  language = "bash",
}: TerminalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copyString) {
      navigator.clipboard.writeText(copyString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative rounded-md overflow-hidden">
      {copyString && (
        <div className="absolute top-2 right-2 z-10">
          <Button onClick={handleCopy} className="px-2 py-1 text-xs">
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      )}
      <Highlight code={children} language={language} theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "text-sm p-4 rounded-md overflow-x-auto bg-gray-800 text-white"
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
  );
};

export default Terminal;
