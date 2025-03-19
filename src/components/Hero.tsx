"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-end justify-center pb-20">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury home at dusk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
            Welcome to the future of home security.
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto">
            The only platform that reliably identifies, understands, and deters threats.
            With Sauron, you always know that everything is under control.
          </p>

          <div className="pt-10">
            <Link href="/reserve">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 py-6 px-10 rounded-md text-lg"
              >
                Available Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
