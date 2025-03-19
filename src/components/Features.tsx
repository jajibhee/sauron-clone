"use client";

import { useRef, useEffect, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);

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
  
  // Create a scroll progress tracker that starts earlier
  // This will begin the animation as the user scrolls down from the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"], // Start when the container's top reaches the viewport's bottom
  });

  return (
    <section ref={sectionRef} className="bg-background relative">
      <div className="text-center py-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">The Sauron Platform</h2>
      </div>

      {/* Scroll animation container - now starts animating earlier */}
      <div 
        ref={containerRef} 
        className="h-[250vh] relative"
      >
        {/* Sticky container to hold the cards */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-[80vh] max-h-[900px]">
            {features.map((feature, index) => {
              // For the first card, show it earlier in the scroll sequence
              // This makes it appear as you're scrolling from the hero section
              const startShow = index === 0 ? 0 : Math.max(0, index * scrollSegmentSize - 0.05);
              const fullyVisible = index === 0 ? 0.1 : index * scrollSegmentSize + 0.15; // First card reaches full opacity earlier
              const startHide = (index + 0.7) * scrollSegmentSize;
              
              // Make sure the last card finishes before reaching the end
              const endHide = index === features.length - 1 
                ? Math.min(0.95, (index + 1.05) * scrollSegmentSize) 
                : (index + 1.05) * scrollSegmentSize;

              // Adjusted transform values that respond to scroll earlier
              const opacity = useTransform(
                scrollYProgress,
                [startShow, fullyVisible, startHide, endHide],
                // First card starts partially visible and gets fully visible quickly
                [index === 0 ? 0.5 : 0, 1, 1, 0],
                { ease: smoothEase }
              );
              
              // More responsive movement as scroll begins
              const y = useTransform(
                scrollYProgress,
                [startShow, fullyVisible],
                [index === 0 ? 50 : 150, 0], // First card has less initial offset
                { ease: backEase }
              );
              
              // Gradual scale change that's visible earlier
              const scale = useTransform(
                scrollYProgress,
                [startShow, fullyVisible],
                [index === 0 ? 0.95 : 0.85, 1], // First card starts closer to full size
                { ease: bounceEase }
              );
              
              // Subtler rotation that starts earlier
              const rotate = useTransform(
                scrollYProgress,
                [startShow, fullyVisible, startHide],
                [index === 0 ? 1 : 3, 0, -1],
                { ease: backEase }
              );

              // Horizontal movement that starts earlier
              const x = useTransform(
                scrollYProgress,
                [startShow, fullyVisible, startHide],
                [index === 0 ? 20 : 50, 0, -20],
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
                  // Initial values for when the component first mounts - first card is partially visible
                  initial={{ 
                    opacity: index === 0 ? 0.5 : 0,
                    y: index === 0 ? 50 : 150,
                    x: index === 0 ? 20 : 50,
                    scale: index === 0 ? 0.95 : 0.85,
                    rotateZ: index === 0 ? 1 : 3
                  }}
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
