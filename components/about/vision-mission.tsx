"use client"

import Image from "next/image"
import { Eye, Target } from "lucide-react"

export function VisionMission() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Vision & Mission
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
            {/* Image */}
            <div className="relative h-64 md:h-72 overflow-hidden">
              <Image
                src="/images/about-vision.jpg"
                alt="Our Vision"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              {/* Icon */}
              <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                <Eye className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the most trusted and innovative industrial conglomerate in the world, 
                setting benchmarks in quality, sustainability, and customer satisfaction 
                while contributing to the prosperity of the communities we serve.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
            {/* Image */}
            <div className="relative h-64 md:h-72 overflow-hidden">
              <Image
                src="/images/about-mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              {/* Icon */}
              <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                <Target className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver exceptional products and services through continuous innovation, 
                sustainable practices, and a commitment to excellence. We empower our team, 
                nurture partnerships, and create lasting value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
