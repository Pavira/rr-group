"use client";

import Image from "next/image";
import {
  Factory,
  Recycle,
  Fish,
  FileText,
  Globe,
  Truck,
  Cog,
  Leaf,
  Soup,
  PaintRoller,
  ShoppingCart,
  Wine,
} from "lucide-react";

const industries = [
  {
    name: "Steel Manufacturing",
    icon: Factory,
    image: "/images/steel-industry.jpg",
    description: "Advanced production facilities",
  },
  {
    name: "Recycling",
    icon: Recycle,
    image: "/images/industry-recycling.jpg",
    description: "Sustainable waste solutions",
  },
  {
    name: "Seafood",
    icon: Fish,
    image: "/images/industry-seafood.jpg",
    description: "Premium frozen products",
  },
  {
    name: "Paper",
    icon: FileText,
    image: "/images/industry-paper.jpg",
    description: "Quality paper manufacturing",
  },
  {
    name: "Global Trade",
    icon: Globe,
    image: "/images/industry-trade.jpg",
    description: "International commerce",
  },
  {
    name: "Logistics",
    icon: Truck,
    image: "/images/industry-logistics.jpg",
    description: "Efficient distribution",
  },
  {
    name: "Engineering",
    icon: Cog,
    image: "/images/industry-engineering.jpg",
    description: "Precision solutions",
  },
  {
    name: "Sustainability",
    icon: Leaf,
    image: "/images/industry-sustainability.jpg",
    description: "Eco-friendly practices",
  },
  {
    name: "Paint",
    icon: PaintRoller,
    image: "/images/paint-industry.jpg",
    description: "Global coatings expertise",
  },
  {
    name: "FMCG",
    icon: ShoppingCart,
    image: "/images/FMCG-industry.jpg",
    description: "Fast-moving consumer goods",
  },
  {
    name: "Cosmetics",
    icon: Soup,
    image: "/images/cosmetic-industry.jpg",
    description: "Innovative beauty solutions",
  },
  {
    name: "Beverage",
    icon: Wine,
    image: "/images/beverage-industry.jpg",
    description: "Refreshing drink solutions",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Industries We Serve
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative overflow-hidden rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <industry.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
