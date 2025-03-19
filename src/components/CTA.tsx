"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Become a founding member.
          </h2>
          <p className="text-large text-muted-foreground mb-8">
            Sign up to learn more about our latest developments, or email
            <a href="mailto:concierge@sauron.systems" className="text-foreground mx-1 hover:text-primary">
              concierge@sauron.systems
            </a>
            to schedule a consultation with a member of our team.
          </p>
          <div>
            <Link href="/reserve">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 py-6 px-8 rounded-md"
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
