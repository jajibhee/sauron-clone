"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="nav-container container">
        <Link href="/" className="flex items-center">
          <svg className="h-8 w-auto text-white" fill="none" viewBox="0 0 308 52" width="100%">
            <path
              fill="currentColor"
              d="M135.14 35.1V1.13H139v33.95c0 10.45-7.85 16.77-16.5 16.77-.65 0-1.3 0-1.96-.07 7.77-1 14.6-6.33 14.6-16.7ZM102.81 1.13h3.92v33.95c0 10.37 6.83 15.7 14.53 16.7-.58.07-1.23.07-1.88.07-8.58 0-16.57-6.32-16.57-16.77V1.14Zm67.65 24.5c7.85 0 14.17-4.9 14.17-12.14 0-7.32-6.25-12.36-14.6-12.36h-7.2v.07c11.48 0 17.66 4.9 17.66 12.29 0 7.74-6.98 12.14-18.1 12.07v.07h4.29l17.15 25.15h4.58l-18.39-25.15h.44Zm-11.63-24.5v49.65h4V1.14h-4ZM227.21.07c12.79 0 24.63 10.3 24.63 26 0 15.49-11.84 25.79-24.63 25.79h-2.11c11.92-1.14 22.6-11.44 22.6-25.79 0-14.56-10.68-24.86-22.6-26h2.1Zm-23.33 26c0 14.35 10.61 24.65 22.46 25.79h-2.11c-12.64 0-24.56-10.3-24.56-25.79 0-15.7 11.92-26 24.56-26h2.1c-11.84 1.14-22.45 11.44-22.45 26Zm99.84-24.93h3.78v49.65h-3.78V1.14Zm-27.1 0 27.46 49.65h-4l-27.3-49.65h3.85Zm-7.34 0h3.78v49.65h-3.78V1.14ZM5.88 12.64C5.88 5.47 10.89 1 16.85.14 16.2.07 15.55 0 14.8 0 7.91 0 1.74 5.4 1.74 12.64c0 7.18 6.17 12.65 13.07 12.65a9.9 9.9 0 0 0 2.04-.21c-5.96-.78-10.97-5.26-10.97-12.44Zm21.29-.7h4.21C30.95 5.03 24.91 0 18.3 0c-.72 0-1.38.07-2.1.14C22 1 26.88 5.2 27.17 11.94Zm-8.87 13a21 21 0 0 0-2.1.14c6.6.78 12.2 5.75 12.2 13.42 0 7.6-5.52 12.5-12.13 13.36.65.07 1.3.14 2.03.14 7.49 0 14.24-5.83 14.24-13.5 0-7.74-6.75-13.57-14.24-13.57ZM4.71 39.2H.5C.94 46.53 7.55 52 14.81 52c.73 0 1.39-.07 2.11-.14-6.47-.78-11.84-5.47-12.2-12.65Zm79.64 11.65h3.93L70.84 1.14h-3.78l10.9 30.9H56.52l10.83-30.9h-3.7L46.27 50.86h3.78l6.03-17.61h22.23l6.03 17.61Z"
            ></path>
          </svg>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {/* <Link href="/about" className="nav-link text-white hover:text-primary">
            About
          </Link> */}
          <Link href="/dashboard" className="nav-link text-white hover:text-primary">
            Dashboard
          </Link>
          {/* <Link href="https://jobs.ashbyhq.com/sauron" className="nav-link text-white hover:text-primary" target="_blank">
            Careers
          </Link>
          <Link href="/reserve" className="nav-link text-white hover:text-primary">
            Reserve
          </Link> */}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-black/80 backdrop-blur-sm border-b border-white/10">
          <div className="container py-4 space-y-4">
            <Link
              href="/about"
              className="block py-2 text-lg text-white hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 text-lg text-white hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="https://jobs.ashbyhq.com/sauron"
              className="block py-2 text-lg text-white hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
            >
              Careers
            </Link>
            <Link
              href="/reserve"
              className="block py-2 text-lg text-white hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserve
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
