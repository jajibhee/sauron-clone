"use client";

interface FeatureItemProps {
  number: string;
  title: string;
}

function FeatureItem({ number, title }: FeatureItemProps) {
  return (
    <div className="border-t border-border/30 py-6">
      <div className="flex items-center gap-4">
        <div className="text-primary font-bold text-2xl">{number}</div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <FeatureItem
            number="01"
            title="Military-grade sensors to instantly detect threats"
          />
          <FeatureItem
            number="02"
            title="Intelligent software identifies persons and objects"
          />
          <FeatureItem
            number="03"
            title="Monitor your home in real-time with the Sauron app"
          />
          <FeatureItem
            number="04"
            title="24/7 monitoring by the expert Sauron Security Team"
          />
          <FeatureItem
            number="05"
            title="Deter threats with talk-down speakers and spotlight tracking"
          />
          <FeatureItem
            number="06"
            title="White glove concierge service on call for anything you need"
          />
        </div>
      </div>
    </section>
  );
}
