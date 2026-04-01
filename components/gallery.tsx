"use client"

import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Industrial warehouse", span: "col-span-2 row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Quality control", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Sustainable manufacturing", span: "col-span-1 row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Corporate meeting", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Industrial robotics", span: "col-span-2 row-span-1" },
]

export function Gallery() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Our Operations
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
              
              {/* Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
