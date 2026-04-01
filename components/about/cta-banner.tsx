"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function CTABanner() {
  return (
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
  );
}
