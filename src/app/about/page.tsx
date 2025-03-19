import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | Sauron",
  description:
    "Learn more about Sauron, the world's first perceptual home security platform that reliably identifies, understands, and deters threats.",
};

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
}

function TeamMember({ image, name, role, bio, linkedin }: TeamMemberProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="relative aspect-square rounded-md overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{name}</h3>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
              <title>LinkedIn</title>
              <path
                fill="currentColor"
                d="M18.52 0H1.48C.66 0 0 .64 0 1.44v17.11C0 19.35.66 20 1.48 20h17.04c.82 0 1.48-.65 1.48-1.44V1.44C20 .64 19.34 0 18.52 0ZM5.93 17.04H2.96V7.5h2.97v9.54ZM4.45 6.2a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.6 10.84h-2.97V12.4c0-1.1-.02-2.53-1.54-2.53-1.55 0-1.78 1.2-1.78 2.45v4.72H7.8V7.5h2.84v1.3h.04a3.12 3.12 0 0 1 2.8-1.54c3 0 3.56 1.97 3.56 4.54v5.24Z"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-sm text-primary">{role}</p>
        <p className="text-sm text-muted-foreground mt-2">{bio}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Returning autonomy to the homeowner
              </h1>
              <div className="space-y-6 text-large text-muted-foreground">
                <p>
                  From arson to gun violence to online threats, our world seems to become more chaotic every day.
                  This reality hit home for me personally, as I watched security concerns reshape my family's daily
                  life over the past decade.
                </p>
                <p>
                  Last year, I decided to devote the majority of my time to building a new business to completely
                  reinvent home security. This has been a personal journey to create security for the home that is
                  uniquely powerful, yet unobtrusive. It's a love letter to my wife, Julia.
                </p>
                <p>
                  Sauron is the world's first perceptual home security platform that continuously scans the perimeter
                  of your home and reliably identifies and deters all threats. We've designed from the ground up new
                  products and services for monitoring and protecting what matters most to you.
                </p>
                <p>
                  Thank you for considering us. We look forward to protecting your home and your loved ones with Sauron.
                </p>
                <div className="pt-4">
                  <div className="text-primary font-semibold">KEVIN HARTZ</div>
                  <div className="text-muted-foreground">Co-founder and Chairman</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[500px]">
              <Image
                src="https://ext.same-assets.com/3093285412/2059806958.avif"
                alt="Sauron security sensor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            The founding team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TeamMember
              image="https://ext.same-assets.com/1588558797/1446649085.avif"
              name="Kevin Hartz"
              role="Co-founder & Chairman"
              bio="Kevin Hartz is a technology entrepreneur and investor, best known as the co-founder of Xoom, Eventbrite, and Sauron."
              linkedin="https://www.linkedin.com/in/hartz/"
            />
            <TeamMember
              image="https://ext.same-assets.com/3919608986/1439336737.avif"
              name="Jack Abraham"
              role="Co-founder"
              bio="Jack Abraham is an entrepreneur, investor, and venture capitalist who founded Atomic and co-founded companies like Hims & Hers and OpenStore."
              linkedin="https://www.linkedin.com/in/jackabraham/"
            />
            <TeamMember
              image="https://ext.same-assets.com/612367177/1512373331.avif"
              name="Vasu Raman"
              role="Co-Founder & Head of Engineering"
              bio="Vasu Raman is a roboticist and engineer currently serving as Co-Founder and Head of Engineering at Sauron, after previous roles at Zipline, Nuro, and Zoox."
              linkedin="https://www.linkedin.com/in/vasumathi-raman/"
            />
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            <Image
              src="https://ext.same-assets.com/329497556/921015642.avif"
              alt="Tesla"
              width={80}
              height={40}
              className="h-10 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/3430570224/851108107.avif"
              alt="Zipline"
              width={80}
              height={40}
              className="h-10 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/1641832641/3463155278.avif"
              alt="Restoration Hardware"
              width={80}
              height={40}
              className="h-10 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/2809160699/1764712133.avif"
              alt="Gecko Robotics"
              width={80}
              height={40}
              className="h-10 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/2651387475/3021235386.avif"
              alt="Zoox"
              width={80}
              height={40}
              className="h-10 w-auto opacity-50"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image
              src="https://ext.same-assets.com/1223639874/2999861576.avif"
              alt="US Marine Corps"
              width={80}
              height={80}
              className="h-16 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/834772394/3845801018.avif"
              alt="US Special Ops Command"
              width={80}
              height={80}
              className="h-16 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/2732173034/3703792475.avif"
              alt="US Coast Guard"
              width={80}
              height={80}
              className="h-16 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/3783613420/548094216.avif"
              alt="Department of State"
              width={80}
              height={80}
              className="h-16 w-auto opacity-50"
            />
            <Image
              src="https://ext.same-assets.com/195831979/2507179278.avif"
              alt="Sine Pari"
              width={80}
              height={80}
              className="h-16 w-auto opacity-50"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </div>
  );
}
