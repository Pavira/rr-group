import Image from "next/image";

const processes = [
  { name: "Sourcing", image: "/images/sourcing-process.jpg" },
  { name: "Manufacturing", image: "/images/ind-manufacturing.jpg" },
  { name: "Quality Control", image: "/images/qc-process.jpg" },
  { name: "Packaging", image: "/images/packaging-process.jpg" },
  { name: "Logistics", image: "/images/logistic-process.jpg" },
  { name: "Export", image: "/images/export-process.jpg" },
];

export function Process() {
  return (
    <section className="py-20 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            End-to-End Capability
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From sourcing to global delivery, we manage every stage with
            precision and quality.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={process.name}
              className="relative group overflow-hidden rounded-3xl h-[260px] md:h-[300px] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={process.image}
                alt={process.name}
                fill
                className="object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                  {process.name}
                </h3>

                {/* Animated underline */}
                <div className="w-0 h-[2px] bg-primary mt-2 group-hover:w-12 transition-all duration-500" />
              </div>

              {/* Optional Step Number */}
              <div className="absolute top-4 left-4 text-white/80 text-sm font-medium">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
