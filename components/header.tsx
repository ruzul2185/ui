"use client";

import { GithubIcon, HamburgerIcon, Logo, ThemeIcon } from "@/assets/Icon";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header className="border-b-2 border-divider z-100 w-full">
      <div className="flex justify-between sticky top-0 py-1 bg-background max-w-[1200px] mx-auto">
        <div className=" md:hidden">
          <HamburgerIcon />
        </div>
        <Link
          href="/"
          className="cursor-pointer hover:bg-hover-anchor p-2 rounded flex items-center gap-3"
        >
          <Logo /> Ruzul
        </Link>
        <nav className="md:flex justify-between items-center hidden">
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
            className="md:flex hidden justify-center items-center gap-2 hover:bg-hover-anchor p-2 rounded"
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
      </div>
    </header>
  );
};

export default header;
