"use client";

import { GithubIcon, HamburgerIcon, Logo, ThemeIcon } from "@/assets/Icon";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./sidebar";

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <header className="border-b-2 border-divider z-50 w-full">
      {/* Sidebar Overlay */}
      {sidebarIsOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background border-r border-divider z-50 transform transition-transform duration-300 ${
          sidebarIsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Top Nav */}
      <div className="flex justify-between sticky top-0 py-1 bg-background max-w-[1200px] mx-auto px-2">
        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setSidebarIsOpen(true)}>
            <HamburgerIcon />
          </button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer hover:bg-hover-anchor p-2 rounded flex items-center gap-3"
        >
          <Logo /> Ruzul
        </Link>

        {/* Desktop Nav */}
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

        {/* Actions */}
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
            className="flex justify-center items-center gap-2 hover:bg-hover-anchor p-2 rounded cursor-pointer"
            onClick={toggleTheme}
          >
            <ThemeIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
