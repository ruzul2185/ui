import { Button } from "@/components/ruzul/button";
import Link from "next/link";
import * as React from "react";
// import { OpenInV0Button } from "@/components/open-in-v0-button";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-12">
      <section className="flex flex-col items-center justify-center text-center py-20 gap-6">
        <h2 className="text-5xl font-bold text-divider max-w-3xl">
          Beautiful, Accessible React Components
        </h2>
        <p className="text-xl text-ghost max-w-2xl">
          A modern, customizable UI library built with React and Tailwind CSS.
          Create stunning interfaces with our collection of pre-built
          components.
        </p>
        <div className="flex gap-4 mt-4">
          <Button variant="outline">Get Started</Button>
          <Button variant="outline">View Components</Button>
        </div>
      </section>

      <section className="py-16">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Library?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold">Lightning Fast</h4>
            <p className="text-gray-600">
              Optimized for performance with minimal bundle size and maximum
              efficiency.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold">Mobile First</h4>
            <p className="text-gray-600">
              Responsive design that looks great on any device, from mobile to
              desktop.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h4 className="text-xl font-semibold">Accessible</h4>
            <p className="text-gray-600">
              Built with accessibility in mind, following WCAG guidelines and
              best practices.
            </p>
          </div>
        </div>
      </section>

      <section id="components" className="py-16">
        <h3 className="text-3xl font-bold text-center mb-12">
          Popular Components
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Button</h4>
              <div className="flex gap-2 flex-wrap">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <Link
                href="/docs/components/button"
                className="text-blue-600 hover:underline text-sm"
              >
                View Documentation →
              </Link>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Card</h4>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h5 className="font-medium mb-2">Card Title</h5>
                <p className="text-sm text-gray-600">
                  A simple card component with title and content.
                </p>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View Documentation →
              </a>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Input</h4>
              <input
                type="text"
                placeholder="Enter text..."
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View Documentation →
              </a>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Badge</h4>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  New
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Success
                </span>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View Documentation →
              </a>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Modal</h4>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                Open Modal
              </button>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View Documentation →
              </a>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-lg">Toggle</h4>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View Documentation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
          <p className="text-xl opacity-90 max-w-2xl">
            Install the library and start building beautiful interfaces in
            minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="bg-black bg-opacity-20 px-4 py-3 rounded-lg font-mono text-sm">
              npm install your-ui-library
            </div>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              View Installation Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
