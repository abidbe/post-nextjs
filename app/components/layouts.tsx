"use client";
import React, { ReactNode, useState } from "react";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and Desktop Navigation */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Home className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="hidden md:flex md:ml-6 md:space-x-8">
                <Link
                  href="/"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${pathname === "/" ? "text-gray-900 border-indigo-500" : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"}`}
                >
                  Home
                </Link>
                <Link
                  href="/posts"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${pathname === "/posts" ? "text-gray-900 border-indigo-500" : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"}`}
                >
                  Posts
                </Link>
                <Link
                  href="/album"
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${pathname === "/album" ? "text-gray-900 border-indigo-500" : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"}`}
                >
                  Album
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isNavOpen ? "block" : "hidden"} md:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
                pathname === "/" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/posts"
              className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
                pathname === "/posts" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Posts
            </Link>
            <Link
              href="/album"
              className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
                pathname === "/album" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              Album
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
