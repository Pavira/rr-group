"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const heroImages = [
  "/images/company-fish.jpg",
  "/images/industry-seafood.jpg",
  "/images/ind-seafood.jpg",
];

export function RRFrozenHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentImage ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={image}
            alt="RR Frozen Operations"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/40 to-foreground/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1
          className={cn(
            "text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight max-w-5xl text-balance transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          RR Frozen <br />
          Fish
        </h1>

        <p
          className={cn(
            "mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-balance transition-all duration-1000 delay-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          End-to-end frozen seafood sourcing, processing, and cold-chain
          distribution for global markets.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === currentImage ? "w-8 bg-primary" : "w-2 bg-white/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
