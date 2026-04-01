"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const heroImages = [
  "/images/about-hero.jpg",
  "/images/gallery-3.jpg",
  "/images/industry-sustainability.jpg",
];

export function AboutHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="About RR Group"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20">
            Our Story
          </span>
        </div>

        <h1
          className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight max-w-5xl text-balance transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building Tomorrow&apos;s Industries
        </h1>

        <p
          className={`mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-balance transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          For over three decades, we&apos;ve been at the forefront of industrial
          excellence, delivering innovative solutions across plastics, paper,
          and seafood industries.
        </p>

        {/* Stats */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "30+", label: "Years of Excellence" },
            { value: "4", label: "Companies" },
            { value: "50+", label: "Countries Served" },
            { value: "2000+", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "w-8 bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
