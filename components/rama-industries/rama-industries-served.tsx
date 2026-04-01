"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const chemicalSegments = [
  "🖨️ Printing",
  "📦 Packaging",
  "💄 Cosmetics",
  "🧼 Detergent",
  "🎨 Paint",
];

const chemicalCategories = [
  {
    title: "Printing",
    products: [
      { name: "Printing Inks", image: "/images/painting-ink.jpg" },
      { name: "Solvents", image: "/images/solvents.jpg" },
      { name: "Coating Chemicals", image: "/images/coating-chemicals.jpg" },
    ],
  },
  {
    title: "Packaging",
    products: [
      { name: "Adhesives", image: "/images/adhesives.jpg" },
      { name: "Lamination Chemicals", image: "/images/laminating.jpg" },
      {
        name: "Plastic Resins (LDPE, LLDPE)",
        image: "/images/LLDPE.jpg",
      },
    ],
  },
  {
    title: "Cosmetics",
    products: [
      { name: "Emulsifiers", image: "/images/emulsifiers.jpg" },
      { name: "Fragrances", image: "/images/fragrance.jpg" },
      { name: "Color Pigments", image: "/images/pigments.jpg" },
    ],
  },
  {
    title: "Detergent",
    products: [
      { name: "Surfactants", image: "/images/surfactants.jpg" },
      { name: "Fragrances", image: "/images/fragrance.jpg" },
      { name: "Bleaching Agents", image: "/images/bleaching-agent.jpg" },
    ],
  },
  {
    title: "Paint",
    products: [
      { name: "Pigments", image: "/images/pigments.jpg" },
      { name: "Solvents", image: "/images/solvents.jpg" },
      { name: "Adhesives", image: "/images/adhesives.jpg" },
    ],
  },
];

const steelData = {
  industries: [
    "Construction Industry",
    "Infrastructure Development",
    "Industrial Fabrication",
  ],
  products: [
    { name: "Structural Steel", image: "/images/structural-steel.jpg" },
    {
      name: "Steel Sections (Beams, Channels, Angles)",
      image: "/images/steel-beam.jpg",
    },
    { name: "Reinforcement Steel", image: "/images/reinforcement-steel.jpg" },
    { name: "Industrial Steel Products", image: "/images/steel-products.jpg" },
  ],
};

export function RamaIndustriesServed() {
  const [activeTab, setActiveTab] = useState("Printing");

  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Chemical Distribution Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Chemical Distribution
          </h2>
          <p className="text-lg text-muted-foreground">
            Supplying raw materials across multiple industries
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {chemicalSegments.map((segment) => (
            <button
              key={segment}
              onClick={() => setActiveTab(segment)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap",
                activeTab === segment
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80",
              )}
            >
              {segment}
            </button>
          ))}
        </div>

        {/* Chemical Product Categories */}
        <div className="space-y-20">
          {chemicalCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={cn(
                "transition-all duration-700",
                activeTab
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-primary/30" />
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.name}
                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white/60 text-[10px] uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {category.title}
                        </p>
                        <h4 className="text-white font-bold text-lg leading-tight">
                          {product.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Steel Section Header */}
        <div className="mt-32 pt-24 border-t border-border">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Steel & Structural Materials
            </h2>
            <p className="text-lg text-muted-foreground">
              High-quality steel solutions for construction and industrial
              applications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Industries Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-secondary/50 rounded-3xl p-8">
                <h3 className="text-xs uppercase tracking-widest font-bold text-primary mb-6">
                  Industries Covered
                </h3>
                <ul className="space-y-4">
                  {steelData.industries.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-foreground font-medium"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mini Feature */}
              <div className="relative aspect-video rounded-3xl overflow-hidden group">
                <Image
                  src="/images/industry-engineering.jpg"
                  alt="Operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>

            {/* Steel Products Grid */}
            <div className="lg:col-span-2">
              <h3 className="text-xs uppercase tracking-widest font-bold text-primary mb-8">
                Products Supplied
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {steelData.products.map((product) => (
                  <div
                    key={product.name}
                    className="group relative h-48 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 p-6 flex items-end">
                      <h4 className="text-white font-bold text-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                        {product.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
