"use client";

import { useState, ReactNode } from "react";
import { Button } from "@/components/ruzul/button";
import { cn } from "@/lib/utils";

interface Tab {
  name: string; // Tab label
  content: ReactNode; // Content of the tab
  copyText?: string; // Optional text to copy
}

interface TabsProps {
  tabs: Tab[];
  defaultActive?: number; // Default active tab index
  copyButton?: boolean; // Show copy button
}

export default function Tabs({
  tabs,
  defaultActive = 0,
  copyButton = false,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Tab Buttons */}
      <div className="flex gap-2 border-b">
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-3 py-1 text-sm font-medium rounded-t-md",
              activeTab === index
                ? "bg-background border border-b-transparent"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div>{tabs[activeTab].content}</div>
    </div>
  );
}
