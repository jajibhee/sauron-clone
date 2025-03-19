"use client";

import Image from "next/image";

export default function AutoSecurity() {
  return (
    <section className="bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Autonomous home security that keeps you in control.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video or image showcase */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/images/video-preview.avif"
              alt="Sauron autonomous security system"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="rounded-full w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-large">
              Sauron autonomously protects the perimeter of your home. It works discreetly in the background to reliably characterize and deter potential threats.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="min-w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-muted-foreground">Identifies and deters potential threats to your home</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-muted-foreground">Works discreetly in the background</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-muted-foreground">24/7 monitoring and autonomous response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
