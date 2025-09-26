"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  {
    groupLabel: "Get Started",
    groupContent: [
      {
        href: "/docs",
        label: "Documentation",
      },
      {
        href: "/docs/installation",
        label: "Installation",
      },
      {
        href: "/docs/components",
        label: "Components",
      },
      {
        href: "/themes",
        label: "Themes",
      },
    ],
  },
  {
    groupLabel: "Installation",
    groupContent: [
      {
        href: "/docs/installation/vite",
        label: "Vite",
      },
    ],
  },
  {
    groupLabel: "Components",
    groupContent: [
      {
        href: "/docs/components/accordion",
        label: "Accordion",
      },
      {
        href: "/docs/components/alert",
        label: "Alert",
      },
      {
        href: "/docs/components/button",
        label: "Button",
      },
    ],
  },
];

interface SingleContent {
  href: string;
  label: string;
}

interface GroupProp {
  groupLabel: string;
  groupContent: SingleContent[];
}

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r-2 border-divider p-4 sticky top-8">
      {data.map((part: GroupProp, idx) => (
        <div key={idx} className="py-4">
          <div className="font-bold p-1">{part.groupLabel}</div>
          <div className="flex flex-col">
            {part.groupContent.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`py-1 px-3 rounded transition-colors ${
                    isActive
                      ? "bg-hover-anchor font-semibold text-primary"
                      : "hover:bg-hover-anchor"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
