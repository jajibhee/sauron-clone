"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

// Define feature card component
const FeatureCard = ({ title, description, imageSrc, imageAlt, index }: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative flex-1 mb-8 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={index === 0}
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">{title}</h3>
        <p className="text-xl md:text-2xl text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Features data
  const features = [
    {
      title: "Sensor fusion + multi-modal AI",
      description: "Military-grade sensing meets consumer AI to provide total contextual awareness.",
      imageSrc: "/images/platform-image-1.jpg",
      imageAlt: "Sensor fusion and AI",
    },
    {
      title: "Digital twin of your home",
      description: "Check in wherever you are via a first-of-its-kind live interactive user interface.",
      imageSrc: "/images/platform-image-2.jpg",
      imageAlt: "Digital twin interface",
    },
    {
      title: "24/7 human monitoring",
      description: "Around the clock protection from Sauron's elite, US-based experts.",
      imageSrc: "/images/platform-image-3.jpg",
      imageAlt: "24/7 human monitoring",
    },
  ];

  // Calculate how many features we have and the scroll positions for each
  const featureCount = features.length;
  const scrollSegmentSize = 1 / featureCount;
  
  // Define custom easing functions
  const smoothEase = cubicBezier(0.32, 0.72, 0, 1);
  const backEase = cubicBezier(0.16, 1, 0.3, 1);
  const bounceEase = cubicBezier(0.34, 1.56, 0.64, 1);
  
  // Create a single scroll progress tracker for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end"],
  });

  return (
    <section className="bg-background relative">
      <div className="text-center py-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">The Sauron Platform</h2>
      </div>

      {/* Scroll animation container */}
      <div 
        ref={containerRef} 
        className="h-[300vh] relative"
      >
        {/* First card is shown immediately */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-[80vh] max-h-[900px]">
            {features.map((feature, index) => {
              // Calculate precise ranges for each feature card with wider transition windows
              // Each card gets a portion of the total scroll range
              const startShow = Math.max(0, index * scrollSegmentSize - 0.05); // Start a bit earlier
              const fullyVisible = index * scrollSegmentSize + 0.15; // Longer ramp up
              const startHide = (index + 0.7) * scrollSegmentSize; // Start hiding earlier
              const endHide = (index + 1.05) * scrollSegmentSize; // End hiding later

              // Transform values based on precise scroll segments with smoother transitions
              const opacity = useTransform(
                scrollYProgress,
                [startShow, fullyVisible, startHide, endHide],
                [0, 1, 1, 0],
                { ease: smoothEase }
              );
              
              // More gradual y movement
              const y = useTransform(
                scrollYProgress,
                [startShow, fullyVisible],
                [150, 0],
                { ease: backEase }
              );
              
              // Smoother scale transition
              const scale = useTransform(
                scrollYProgress,
                [startShow, fullyVisible],
                [0.85, 1],
                { ease: bounceEase }
              );
              
              // Gentler rotation with longer transition
              const rotate = useTransform(
                scrollYProgress,
                [startShow, fullyVisible, startHide],
                [3, 0, -1], // Slight counter-rotation at end for natural feel
                { ease: backEase }
              );

              // Add slight x movement for more dimension
              const x = useTransform(
                scrollYProgress,
                [startShow, fullyVisible, startHide],
                [50, 0, -20],
                { ease: backEase }
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity,
                    y,
                    x,
                    scale,
                    rotateZ: rotate,
                    zIndex: features.length - index,
                  }}
                  transition={{ duration: 0.1 }}
                  initial={index === 0 ? 
                    { opacity: 1, y: 0, x: 0, scale: 1, rotateZ: 0 } : 
                    { opacity: 0, y: 150, x: 50, scale: 0.85, rotateZ: 3 }
                  }
                >
                  <div className="w-full h-full bg-card border border-border/10 shadow-2xl rounded-2xl p-6 md:p-10 lg:p-12 overflow-hidden">
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      imageSrc={feature.imageSrc}
                      imageAlt={feature.imageAlt}
                      index={index}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
