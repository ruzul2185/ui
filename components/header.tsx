"use client";

import { GithubIcon, Logo, ThemeIcon } from "@/assets/Icon";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header className="flex justify-between max-w-[1200px] mx-auto py-1 bg-background">
      <div className="cursor-pointer hover:bg-hover-anchor p-2 rounded">
        {/* <Image src="/logo.svg" alt="logo" width={40} height={40} className="" /> */}
        <Logo />
      </div>
      <nav className="flex justify-between items-center">
        <ul className="flex">
          <li className="px-2">
            <Link href="/docs">Docs</Link>
          </li>
          <li className="px-2">
            <Link href="/themes">Themes</Link>
          </li>
          <li className="px-2">
            <Link href="/docs/components">Components</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center">
        <Link
          href="https://github.com/ruzul2185/ui"
          target="_blank"
          className="flex justify-center items-center gap-2 hover:bg-hover-anchor p-2 rounded"
        >
          <GithubIcon />
          <div>Star</div>
        </Link>
        <div
          className="flex justify-center items-center gap-2 hover:bg-hover-anchor p-2 rounded"
          onClick={toggleTheme}
        >
          <ThemeIcon />
        </div>
      </div>
    </header>
  );
};

export default header;
