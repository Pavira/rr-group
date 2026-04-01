"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Search, Factory, CheckCircle, Package, Truck, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const industries = [
  { name: "Manufacturing", image: "/images/ind-manufacturing.jpg" },
  { name: "Plastics", image: "/images/ind-plastics.jpg" },
  { name: "Paper & Packaging", image: "/images/ind-paper.jpg" },
  { name: "Seafood Export", image: "/images/ind-seafood.jpg" },
  { name: "Logistics", image: "/images/ind-logistics.jpg" },
  { name: "Global Trade", image: "/images/ind-trade.jpg" },
]

const processes = [
  { name: "Sourcing", icon: Search },
  { name: "Manufacturing", icon: Factory },
  { name: "Quality Control", icon: CheckCircle },
  { name: "Packaging", icon: Package },
  { name: "Logistics", icon: Truck },
  { name: "Export", icon: Globe },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/industries-hero.jpg"
          alt="Industries"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight mb-6 text-balance">
            Industries We Serve
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Delivering excellence across multiple sectors worldwide
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/60 transition-all duration-500" />
                
                {/* Industry Name */}
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground group-hover:text-primary-foreground transition-colors duration-300 group-hover:translate-y-0 translate-y-2">
                    {industry.name}
                  </h3>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full border-t-2 border-r-2 border-primary-foreground/50 rounded-tr-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="py-16 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              End-to-End Capability
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {processes.map((process, index) => (
              <div
                key={process.name}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm">
                  <process.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-foreground">{process.name}</span>
                
                {/* Connector Line */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 lg:py-40 px-6 overflow-hidden">
        <Image
          src="/images/industries-cta.jpg"
          alt="Partner with us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/70 to-foreground/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight mb-8 text-balance">
            Partner With Us
          </h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-semibold bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-all duration-300"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
