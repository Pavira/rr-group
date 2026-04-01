"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const companies = [
  {
    name: "Rama Industries",
    description: "Heavy Manufacturing",
    image: "/images/company-rama.jpg",
    href: "/rama-industries",
  },
  {
    name: "RR Plastics",
    description: "Precision Molding",
    image: "/images/company-plastics.jpg",
    href: "/rr-plastics",
  },
  {
    name: "RR Paper Industries",
    description: "Sustainable Solutions",
    image: "/images/company-paper.jpg",
    href: "/rr-paper-industries",
  },
  {
    name: "RR Frozen Fish",
    description: "Premium Seafood",
    image: "/images/company-fish.jpg",
    href: "/rr-frozen",
  },
];

export function CompaniesGrid() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Companies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            A Global Portfolio
          </h2>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <Link
              key={company.name}
              href={company.href}
              className="group relative h-80 md:h-96 rounded-3xl overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Background Image */}
              <Image
                src={company.image}
                alt={company.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  <p className="text-white/70 text-sm font-medium mb-2 uppercase tracking-wider">
                    {company.description}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {company.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
