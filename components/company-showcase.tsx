"use client"

import Image from "next/image"

interface Partner {
  name: string
  logo: string
}

interface CompanyShowcaseProps {
  title: string
  subtitle?: string
  partners: Partner[]
}

export function CompanyShowcase({ title, subtitle, partners }: CompanyShowcaseProps) {
  return (
    <section className="py-20 lg:py-28 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {subtitle || "Partners"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {title}
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] rounded-2xl bg-background border border-border/50 p-6 flex items-center justify-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Example usage data
export const samplePartners: Partner[] = [
  { name: "Partner 1", logo: "/images/gallery-1.jpg" },
  { name: "Partner 2", logo: "/images/gallery-2.jpg" },
  { name: "Partner 3", logo: "/images/gallery-3.jpg" },
  { name: "Partner 4", logo: "/images/gallery-4.jpg" },
  { name: "Partner 5", logo: "/images/gallery-5.jpg" },
  { name: "Partner 6", logo: "/images/gallery-1.jpg" },
]
