"use client"

import Image from "next/image"

const milestones = [
  {
    year: "1992",
    title: "The Beginning",
    description: "Founded Rama Industries with a vision to transform the manufacturing landscape.",
    image: "/images/timeline-founding.jpg",
  },
  {
    year: "2001",
    title: "Diversification",
    description: "Expanded into plastics and paper products, establishing RR Plastics and RR Paper Products.",
    image: "/images/timeline-expansion.jpg",
  },
  {
    year: "2010",
    title: "Global Expansion",
    description: "Entered international markets and established export operations across 30+ countries.",
    image: "/images/timeline-global.jpg",
  },
  {
    year: "2018",
    title: "Seafood Venture",
    description: "Launched RR Frozen Fish, becoming a major player in the frozen seafood industry.",
    image: "/images/industry-seafood.jpg",
  },
  {
    year: "2024",
    title: "Sustainability Focus",
    description: "Achieved carbon-neutral operations and launched green manufacturing initiatives.",
    image: "/images/strength-sustainability.jpg",
  },
]

export function Timeline() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Milestones That Define Us
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 ring-4 ring-background" />

                {/* Content Side */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md md:max-w-none">
                    {milestone.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex-1 pl-12 md:pl-0">
                  <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ${
                    index % 2 === 0 ? "md:ml-16" : "md:mr-16"
                  }`}>
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
