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
  
  // Define custom easing functions - make them even smoother
  const smoothEase = cubicBezier(0.25, 0.1, 0.25, 1); // Standard ease transition
  const backEase = cubicBezier(0.25, 0.8, 0.25, 1);   // More gradual ease
  const bounceEase = cubicBezier(0.34, 1.25, 0.64, 1); // Reduced bounce for smoother motion
  
  // Create a scroll progress tracker that starts earlier and ends later
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Start when top of container reaches bottom of viewport, end when bottom reaches top
  });

  return (
    <section ref={sectionRef} className="bg-background relative">
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">The Sauron Platform</h2>
      </div>

      {/* Scroll animation container - reduced height to ensure seamless transition */}
      <div 
        ref={containerRef} 
        className="h-[220vh] relative"
      >
        {/* Sticky container to hold the cards */}
        <div className="min-h-screen sticky top-0 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-[80vh] max-h-[900px]">
            {features.map((feature, index) => {
              // Wider, more gradual transition windows with more overlap
              const startShow = index === 0 ? 0 : Math.max(0, index * scrollSegmentSize - 0.15);
              const fullyVisible = index === 0 ? 0.15 : index * scrollSegmentSize + 0.2; 
              const startHide = (index + 0.65) * scrollSegmentSize;
              
              // Make the last card finish much earlier to avoid blank space
              const endHide = index === features.length - 1 
                ? Math.min(0.85, (index + 1) * scrollSegmentSize) 
                : (index + 1.1) * scrollSegmentSize;

              // More gradual opacity transitions with longer crossfade periods
              const opacity = useTransform(
                scrollYProgress,
                [
                  startShow, 
                  fullyVisible, 
                  startHide, 
                  endHide
                ],
                [
                  index === 0 ? 0.6 : 0, 
                  1, 
                  1, 
                  0
                ],
                { ease: smoothEase }
              );
              
              // Smoother position transitions with longer movement periods
              const y = useTransform(
                scrollYProgress,
                [
                  startShow,
                  startShow + 0.05, 
                  fullyVisible - 0.05,
                  fullyVisible
                ],
                [
                  index === 0 ? 40 : 140, 
                  index === 0 ? 30 : 100,
                  20,
                  0
                ],
                { ease: backEase }
              );
              
              // More gradual scale transitions
              const scale = useTransform(
                scrollYProgress,
                [
                  startShow, 
                  startShow + 0.05,
                  fullyVisible - 0.05, 
                  fullyVisible
                ],
                [
                  index === 0 ? 0.96 : 0.88,
                  index === 0 ? 0.97 : 0.9, 
                  0.98,
                  1
                ],
                { ease: bounceEase }
              );
              
              // Smoother rotation transitions
              const rotate = useTransform(
                scrollYProgress,
                [
                  startShow, 
                  startShow + 0.05,
                  fullyVisible - 0.05,
                  fullyVisible,
                  startHide,
                  endHide
                ],
                [
                  index === 0 ? 0.8 : 2.5,
                  index === 0 ? 0.6 : 1.8, 
                  0.3,
                  0,
                  -0.3,
                  -0.8
                ],
                { ease: backEase }
              );

              // Smoother horizontal movement
              const x = useTransform(
                scrollYProgress,
                [
                  startShow, 
                  startShow + 0.05,
                  fullyVisible - 0.05,
                  fullyVisible,
                  startHide,
                  endHide
                ],
                [
                  index === 0 ? 15 : 40, 
                  index === 0 ? 10 : 30,
                  5,
                  0,
                  -5,
                  -15
                ],
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
                  // Add transition properties for smoother motion
                  transition={{ 
                    duration: 0.2,
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  // Initial values match the animation start state
                  initial={{ 
                    opacity: index === 0 ? 0.6 : 0,
                    y: index === 0 ? 40 : 140,
                    x: index === 0 ? 15 : 40,
                    scale: index === 0 ? 0.96 : 0.88,
                    rotateZ: index === 0 ? 0.8 : 2.5
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

        {/* Add a spacer div at the end to ensure smooth transition to next section */}
        <div className="h-[15vh]"></div>
      </div>
    </section>
  );
}
