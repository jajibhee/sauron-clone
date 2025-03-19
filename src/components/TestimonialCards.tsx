"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  role: string;
  logo: string;
  logoAlt: string;
}

export default function TestimonialCards() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: TestimonialData[] = [
    {
      id: 1,
      quote: "Cameras and sensors surveil the perimeter, scanning bystanders' faces for potential threats. Drones from a 'deterrence pod' scare off trespassers by projecting a searchlight over any suspicious movements.",
      author: "Nitasha Tiku",
      role: "Reporter",
      logo: "/images/washington-post.svg",
      logoAlt: "The Washington Post",
    },
    {
      id: 2,
      quote: "Sauron has completely transformed how we think about home security. The technology is impressive, but the peace of mind it provides is priceless.",
      author: "Michael Chen",
      role: "Homeowner",
      logo: "/images/washington-post.svg", // Replace with actual logo
      logoAlt: "Customer",
    },
    {
      id: 3,
      quote: "Their combination of AI-driven monitoring and human expertise creates a security solution that feels like it's from the future.",
      author: "Sarah Johnson",
      role: "Security Consultant",
      logo: "/images/washington-post.svg", // Replace with actual logo
      logoAlt: "Security Expert",
    },
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    }),
  };

  useEffect(() => {
    // Auto-advance testimonials every 5 seconds
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-muted">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[400px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/90 text-center mb-8 font-light leading-relaxed">
                    <p>"{testimonials[current].quote}"</p>
                  </blockquote>

                  <div className="text-center text-muted-foreground mb-8 text-lg md:text-xl">
                    {testimonials[current].author}, {testimonials[current].role}
                  </div>

                  <div className="flex items-center justify-center mb-6">
                    <Image
                      src={testimonials[current].logo}
                      alt={testimonials[current].logoAlt}
                      width={240}
                      height={48}
                      className="h-10 w-auto"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-4 mt-10">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition"
            >
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
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition"
            >
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 