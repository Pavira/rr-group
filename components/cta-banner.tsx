"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="relative py-32 lg:py-40 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Industrial complex"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
          Ready to Partner with Us?
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Join the RR Group of Companies and be part of a global industrial network committed to excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group px-8 py-4 rounded-2xl bg-white text-primary font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 flex items-center gap-2"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white font-medium border border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </section>
  )
}
