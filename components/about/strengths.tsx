"use client";

import Image from "next/image";
import { Lightbulb, Award, Leaf, Users } from "lucide-react";

const strengths = [
  {
    title: "Innovation",
    description:
      "Pioneering new technologies and processes to stay ahead of industry trends.",
    icon: Lightbulb,
    image: "/images/strength-innovation.jpg",
  },
  {
    title: "Quality Excellence",
    description:
      "Uncompromising standards and rigorous quality control at every step.",
    icon: Award,
    image: "/images/strength-quality.jpg",
  },
  {
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices and reducing our environmental footprint.",
    icon: Leaf,
    image: "/images/strength-sustainability.jpg",
  },
  {
    title: "Our People",
    description:
      "A dedicated team of 2000+ professionals driving our success every day.",
    icon: Users,
    image: "/images/strength-people.jpg",
  },
];

export function Strengths() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Our Strengths
          </h2>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {strengths.map((strength) => (
            <div
              key={strength.title}
              className="group relative overflow-hidden rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <Image
                    src={strength.image}
                    alt={strength.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 md:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-500">
                    <strength.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
