"use client";

import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

const customers: Partner[] = [
  { name: "Customer A", logo: "/images/logos/logo-1.svg" },
  { name: "Customer B", logo: "/images/logos/logo-2.svg" },
  { name: "Customer C", logo: "/images/logos/logo-3.svg" },
  { name: "Customer D", logo: "/images/logos/logo-4.svg" },
  { name: "Customer E", logo: "/images/logos/logo-5.svg" },
  { name: "Customer F", logo: "/images/logos/logo-6.svg" },
  { name: "Customer G", logo: "/images/logos/logo-7.svg" },
  { name: "Customer H", logo: "/images/logos/logo-8.svg" },
];

const suppliers: Partner[] = [
  { name: "Supplier A", logo: "/images/logos/logo-4.svg" },
  { name: "Supplier B", logo: "/images/logos/logo-5.svg" },
  { name: "Supplier C", logo: "/images/logos/logo-6.svg" },
  { name: "Supplier D", logo: "/images/logos/logo-7.svg" },
  { name: "Supplier E", logo: "/images/logos/logo-8.svg" },
  { name: "Supplier F", logo: "/images/logos/logo-1.svg" },
  { name: "Supplier G", logo: "/images/logos/logo-2.svg" },
  { name: "Supplier H", logo: "/images/logos/logo-3.svg" },
];

const duplicate = (arr: Partner[]) => [...arr, ...arr];

export function RRFrozenShowcase() {
  const customerLoop = duplicate(customers);
  const supplierLoop = duplicate(suppliers);

  return (
    <section className="py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Network
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            Our Partners
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by seafood buyers, distributors, and supply chain partners
            worldwide.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Customers</h3>

          <div className="relative overflow-hidden">
            <div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused]">
              {customerLoop.map((partner, index) => (
                <div
                  key={index}
                  className="min-w-[160px] h-[100px] rounded-2xl bg-secondary/20 border border-border/50 flex items-center justify-center p-4 hover:shadow-lg transition"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Suppliers</h3>

          <div className="relative overflow-hidden">
            <div className="flex w-max gap-6 animate-scroll-reverse hover:[animation-play-state:paused]">
              {supplierLoop.map((partner, index) => (
                <div
                  key={index}
                  className="min-w-[160px] h-[100px] rounded-2xl bg-secondary/20 border border-border/50 flex items-center justify-center p-4 hover:shadow-lg transition"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
