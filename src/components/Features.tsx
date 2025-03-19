"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <div className="relative flex-1 mb-8 md:mb-12 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority={index === 0}
        />
      </div>
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-primary">{title}</h3>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
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

  // Calculate how many features we have
  const featureCount = features.length;
  
  // Create a scroll progress tracker with extended end offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 20%"], // Changed from "end start" to "end 20%" to keep tracking longer
  });

  return (
    <section className="bg-background relative">
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">The Sauron Platform</h2>
      </div>

      {/* Scroll animation container - increased height for more scroll distance */}
      <div 
        ref={containerRef} 
        className="h-[300vh] relative" // Increased from 250vh to 300vh
      >
        {/* Sticky container to take up full viewport - increased bottom offset to stay sticky longer */}
        <div className="min-h-screen h-screen w-screen sticky top-0 left-0 right-0 overflow-hidden">
          <div className="w-full h-full relative">
            {features.map((feature, index) => {
              // Calculate display ranges
              const progress = 1 / featureCount;
              const start = index * progress;
              const end = start + progress;
              
              // Adjust transition timing for all cards with more overlap
              // Each card gets a wider visibility window with extended fadeout
              let showPoints, showValues;
              
              if (index === 0) {
                // First card: show immediately, hide gradually around 40-55% scroll
                showPoints = [0, 0, 0.4, 0.55];
                showValues = [1, 1, 1, 0];
              } else if (index === 1) {
                // Second card: start appearing around 30%, fully visible at 45%
                // Stay visible until 65-75% scroll
                showPoints = [0.3, 0.45, 0.65, 0.75]; 
                showValues = [0, 1, 1, 0];
              } else {
                // Third card: start appearing earlier, and continue longer
                // Complete its animation well before the end of the container
                showPoints = [0.6, 0.75, 0.85, 0.95]; 
                showValues = [0, 1, 1, 0];
              }

              // Opacity transform
              const opacity = useTransform(
                scrollYProgress,
                showPoints,
                showValues
              );
              
              // Y position transform - customized per card
              const yPos = useTransform(
                scrollYProgress,
                showPoints,
                index === 0 
                  ? [0, 0, 0, 30] // First card: reduced exit movement
                  : index === 1
                    ? [100, 0, 0, -30] // Second card: standard movement
                    : [80, 0, 0, 20] // Reduced motion values for third card
              );
              
              // Scale transform
              const scale = useTransform(
                scrollYProgress,
                showPoints,
                index === 0 
                  ? [1, 1, 1, 0.95] // First card: minimal scale reduction
                  : index === 1
                    ? [0.9, 1, 1, 0.95] // Second card: standard scaling
                    : [0.92, 1, 1, 0.97] // Subtler scale animation for third card
              );
              
              // Rotation transform
              const rotate = useTransform(
                scrollYProgress,
                showPoints,
                index === 0 
                  ? [0, 0, 0, -0.5] // First card: minimal rotation
                  : index === 1
                    ? [2, 0, 0, -0.5] // Second card: standard rotation
                    : [1.5, 0, 0, -0.3] // Reduced rotation for third card
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity,
                    y: yPos,
                    scale,
                    rotateZ: rotate,
                    zIndex: features.length - index,
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  initial={{ 
                    opacity: index === 0 ? 1 : 0,
                    y: index === 0 ? 0 : 100,
                    scale: index === 0 ? 1 : 0.9,
                    rotateZ: index === 0 ? 0 : 2
                  }}
                >
                  {/* Full viewport card with no margins or max-width constraints */}
                  <div className="w-full h-full bg-card border border-border/10 shadow-2xl">
                    <div className="w-full h-full p-8 md:p-16 lg:p-20 overflow-hidden">
                      <FeatureCard
                        title={feature.title}
                        description={feature.description}
                        imageSrc={feature.imageSrc}
                        imageAlt={feature.imageAlt}
                        index={index}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Spacer to ensure smooth transition to next section */}
        <div className="h-[50vh]"></div>
      </div>
    </section>
  );
}
