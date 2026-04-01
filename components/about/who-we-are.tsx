"use client"

import Image from "next/image"

export function WhoWeAre() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/about-who-we-are.jpg"
                alt="RR Group Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-6 md:p-8 rounded-2xl shadow-xl max-w-[200px]">
              <div className="text-4xl md:text-5xl font-bold">30+</div>
              <div className="text-sm md:text-base opacity-90 mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance mb-6">
              A Legacy of Industrial Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                RR Group of Companies stands as a testament to visionary leadership and unwavering 
                commitment to excellence. Founded in 1992, we have grown from a modest manufacturing 
                unit to a diversified industrial conglomerate with global reach.
              </p>
              <p>
                Today, our group encompasses four major subsidiaries: Rama Industries, RR Plastics, 
                RR Paper Products, and RR Frozen Fish. Each company operates with the same core 
                values that have defined our success - integrity, innovation, and customer focus.
              </p>
              <p>
                With over 2,000 dedicated professionals and operations spanning 50+ countries, 
                we continue to push boundaries and set new standards in industrial manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
