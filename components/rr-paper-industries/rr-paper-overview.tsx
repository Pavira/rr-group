"use client";

import Image from "next/image";

export function RRPaperOverview() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/industry-paper.jpg"
                alt="RR Paper Industries Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-background border border-border p-6 md:p-8 rounded-2xl shadow-xl">
              <div className="text-primary text-4xl md:text-5xl font-bold">
                1992
              </div>
              <div className="text-muted-foreground text-sm md:text-base mt-1">
                Founding Year
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Core Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-6">
              Specialists in Printing, Packaging, and Paper Products
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                RR Paper Industries provides end-to-end printing and packaging
                capabilities for carton, flexographic, foil, and shrink-label
                applications.
              </p>
              <p>
                We also support notebook and stationery manufacturing with
                reliable product lines designed for schools and distribution
                channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
