"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative">
      <div className="container">
        <div className="footer-content">
          <div className="mb-8 md:mb-0">
            <svg className="h-8 w-auto text-foreground" fill="none" viewBox="0 0 308 52" width="100%">
              <path
                fill="currentColor"
                d="M135.14 35.1V1.13H139v33.95c0 10.45-7.85 16.77-16.5 16.77-.65 0-1.3 0-1.96-.07 7.77-1 14.6-6.33 14.6-16.7ZM102.81 1.13h3.92v33.95c0 10.37 6.83 15.7 14.53 16.7-.58.07-1.23.07-1.88.07-8.58 0-16.57-6.32-16.57-16.77V1.14Zm67.65 24.5c7.85 0 14.17-4.9 14.17-12.14 0-7.32-6.25-12.36-14.6-12.36h-7.2v.07c11.48 0 17.66 4.9 17.66 12.29 0 7.74-6.98 12.14-18.1 12.07v.07h4.29l17.15 25.15h4.58l-18.39-25.15h.44Zm-11.63-24.5v49.65h4V1.14h-4ZM227.21.07c12.79 0 24.63 10.3 24.63 26 0 15.49-11.84 25.79-24.63 25.79h-2.11c11.92-1.14 22.6-11.44 22.6-25.79 0-14.56-10.68-24.86-22.6-26h2.1Zm-23.33 26c0 14.35 10.61 24.65 22.46 25.79h-2.11c-12.64 0-24.56-10.3-24.56-25.79 0-15.7 11.92-26 24.56-26h2.1c-11.84 1.14-22.45 11.44-22.45 26Zm99.84-24.93h3.78v49.65h-3.78V1.14Zm-27.1 0 27.46 49.65h-4l-27.3-49.65h3.85Zm-7.34 0h3.78v49.65h-3.78V1.14ZM5.88 12.64C5.88 5.47 10.89 1 16.85.14 16.2.07 15.55 0 14.8 0 7.91 0 1.74 5.4 1.74 12.64c0 7.18 6.17 12.65 13.07 12.65a9.9 9.9 0 0 0 2.04-.21c-5.96-.78-10.97-5.26-10.97-12.44Zm21.29-.7h4.21C30.95 5.03 24.91 0 18.3 0c-.72 0-1.38.07-2.1.14C22 1 26.88 5.2 27.17 11.94Zm-8.87 13a21 21 0 0 0-2.1.14c6.6.78 12.2 5.75 12.2 13.42 0 7.6-5.52 12.5-12.13 13.36.65.07 1.3.14 2.03.14 7.49 0 14.24-5.83 14.24-13.5 0-7.74-6.75-13.57-14.24-13.57ZM4.71 39.2H.5C.94 46.53 7.55 52 14.81 52c.73 0 1.39-.07 2.11-.14-6.47-.78-11.84-5.47-12.2-12.65Zm79.64 11.65h3.93L70.84 1.14h-3.78l10.9 30.9H56.52l10.83-30.9h-3.7L46.27 50.86h3.78l6.03-17.61h22.23l6.03 17.61Z"
              ></path>
            </svg>
          </div>
          <div className="text-primary font-medium">Available Now</div>
        </div>
      </div>

      <div className="border-t border-border/20 pt-8 pb-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <a
                href="https://www.linkedin.com/company/sauronsystems/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                  <title>LinkedIn</title>
                  <path
                    fill="currentColor"
                    d="M18.52 0H1.48C.66 0 0 .64 0 1.44v17.11C0 19.35.66 20 1.48 20h17.04c.82 0 1.48-.65 1.48-1.44V1.44C20 .64 19.34 0 18.52 0ZM5.93 17.04H2.96V7.5h2.97v9.54ZM4.45 6.2a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.6 10.84h-2.97V12.4c0-1.1-.02-2.53-1.54-2.53-1.55 0-1.78 1.2-1.78 2.45v4.72H7.8V7.5h2.84v1.3h.04a3.12 3.12 0 0 1 2.8-1.54c3 0 3.56 1.97 3.56 4.54v5.24Z"
                  ></path>
                </svg>
              </a>
              <a
                href="mailto:concierge@sauron.systems"
                className="text-foreground hover:text-primary transition-colors"
              >
                concierge@sauron.systems
              </a>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="https://jobs.ashbyhq.com/sauron" target="_blank" className="hover:text-primary transition-colors">
                Careers
              </Link>
              <span>•</span>
              <Link href="/terms-of-use" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
              <span>•</span>
              <div className="inline">© {currentYear} Sauron</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute bottom-0 left-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
        <div className="hidden md:block">
          <Image
            src="/images/footer-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="md:hidden">
          <Image
            src="/images/footer-bg-mobile.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
