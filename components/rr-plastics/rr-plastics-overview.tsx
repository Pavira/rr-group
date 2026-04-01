"use client";

import Image from "next/image";

export function RRPlasticsOverview() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery-4.jpg"
                alt="RRPlastics Industries Facility"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-background border border-border p-6 md:p-8 rounded-2xl shadow-xl">
              <div className="text-primary text-4xl md:text-5xl font-bold">
                1992
              </div>
              <div className="text-muted-foreground text-sm md:text-base mt-1">
                Founding Year
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Core Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-6">
              Pioneering the Industrial Supply Chain
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                RR-Plastics Industries is the cornerstone of the RR Group of
                Companies. With a dual focus on chemical distribution and steel
                infrastructure, we provide the essential building blocks for
                modern industry.
              </p>
              <p>
                Our expansive network and logistics capabilities allow us to
                serve thousands of clients ranging from local manufacturers to
                global infrastructure developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
