"use client";

import { useState } from "react";
import Image from "next/image";

interface TabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ id, label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-5 rounded-md transition-colors ${
        isActive
          ? "bg-primary/10 text-primary font-medium"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

export default function ResponsiveUI() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Respond to any situation.
          </h2>
          <p className="text-large max-w-3xl text-muted-foreground">
            By fusing advanced sensor technologies with artificial intelligence and highly-skilled human expertise,
            Sauron brings full contextual awareness to home security.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src="/images/respond-ui.avif"
              alt="Sauron responsive UI interface"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Tab
              id="overview"
              label="Overview"
              isActive={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            />
            <Tab
              id="chef"
              label="Chef arriving"
              isActive={activeTab === "chef"}
              onClick={() => setActiveTab("chef")}
            />
            <Tab
              id="intruder"
              label="Intruder detected"
              isActive={activeTab === "intruder"}
              onClick={() => setActiveTab("intruder")}
            />
            <Tab
              id="friend"
              label="Friend arriving"
              isActive={activeTab === "friend"}
              onClick={() => setActiveTab("friend")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
