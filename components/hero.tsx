"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero-2.jpg",
    title: "Global Reach",
    subtitle: "Connecting markets worldwide",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Innovation First",
    subtitle: "Leading with cutting-edge solutions",
  },
  {
    image: "/images/hero-1.jpg",
    title: "Industrial Excellence",
    subtitle: "Powering global manufacturing",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div
          className={cn(
            "text-center transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              {heroSlides[currentSlide].subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight text-balance">
            RR Group of
            <br />
            Companies
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
            Global Industrial Solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="group px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 flex items-center gap-2"
            >
              Discover More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "transition-all duration-500",
                index === currentSlide
                  ? "w-8 h-2 rounded-full bg-primary"
                  : "w-2 h-2 rounded-full bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-8 hidden lg:flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
