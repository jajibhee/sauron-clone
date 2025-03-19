"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  index: number;
  backgroundColor: string;
}

const Card: React.FC<CardProps> = ({ title, description, index, backgroundColor }) => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full rounded-xl p-8 flex flex-col justify-between"
      style={{
        backgroundColor,
        zIndex: 10 - index,
      }}
      initial={{ opacity: index === 0 ? 1 : 0, y: index === 0 ? 0 : 100 }}
    >
      <div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-lg opacity-80">{description}</p>
      </div>
      <div className="text-right">
        <span className="text-6xl font-bold opacity-30">{index + 1}</span>
      </div>
    </motion.div>
  );
};

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Cards data
  const cards = [
    {
      title: "Intelligent Monitoring",
      description: "Our AI-powered system continuously analyzes your property for potential threats.",
      backgroundColor: "var(--primary)",
    },
    {
      title: "Real-Time Alerts",
      description: "Receive instant notifications about any unusual activity on your property.",
      backgroundColor: "var(--accent)",
    },
    {
      title: "Human Oversight",
      description: "Expert security professionals monitor your property 24/7 for maximum protection.",
      backgroundColor: "var(--secondary)",
    },
  ];

  // Scroll animation logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div className="py-32 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Security in Layers
        </h2>
        
        <div 
          ref={containerRef} 
          className="relative h-[180vh] w-full"
        >
          <div className="sticky top-20 h-[500px] w-full max-w-3xl mx-auto">
            {cards.map((card, index) => {
              // Transform values based on scroll progress
              const opacity = useTransform(
                scrollYProgress,
                [index * 0.3, index * 0.3 + 0.1, index * 0.3 + 0.3, index * 0.3 + 0.4],
                [index === 0 ? 1 : 0, 1, 1, 0]
              );
              
              const y = useTransform(
                scrollYProgress,
                [index * 0.3, index * 0.3 + 0.3],
                [100, 0]
              );
              
              const scale = useTransform(
                scrollYProgress,
                [index * 0.3, index * 0.3 + 0.3],
                [0.8, 1]
              );
              
              const rotate = useTransform(
                scrollYProgress,
                [index * 0.3, index * 0.3 + 0.3],
                [5, 0]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-xl shadow-xl"
                  style={{
                    opacity,
                    y,
                    scale,
                    rotateZ: rotate,
                  }}
                >
                  <Card
                    title={card.title}
                    description={card.description}
                    index={index}
                    backgroundColor={card.backgroundColor}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 