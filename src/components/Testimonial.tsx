"use client";

import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="section is-testimonial relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="testimonial_layout flex flex-col items-center">
          <div className="testimonial_content max-w-5xl">
            <div className="quote mb-10">
              <div className="g_paragraph_wrap" style={{ "--flow": "1em" } as React.CSSProperties}>
                <div className="u-child-contain" style={{ "--max": "72ch" } as React.CSSProperties}>
                  <div className="u-rich-text text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/90 text-center font-light leading-relaxed">
                    <p>
                      "Cameras and sensors surveil the perimeter, scanning bystanders' faces for potential threats.
                      Drones from a 'deterrence pod' scare off trespassers by projecting a searchlight over any
                      suspicious movements. A virtual view of the home is rendered in 3D and updated in real time,
                      just like a Tesla's digital display. And private security agents monitor alerts from a central hub."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial_author text-center text-muted-foreground mb-8 text-lg md:text-xl">
              Nitasha Tiku, Reporter
            </div>
          </div>
          <div className="testimonial_logo_wrap flex items-center justify-center">
            <Image
              src="/images/washington-post.svg"
              alt="The Washington Post"
              width={240}
              height={48}
              className="testimonial_logo h-10 w-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg_wrap absolute inset-0 z-0">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="bg_img object-cover"
        />
        <div className="bg_overlay absolute inset-0 bg-black/80"></div>
      </div>
    </section>
  );
}
