import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RRFrozenHero } from "@/components/rr-frozen/rr-frozen-hero";
import { RRFrozenOverview } from "@/components/rr-frozen/rr-frozen-overview";
import { RRFrozenIndustriesServed } from "@/components/rr-frozen/rr-frozen-served";
import { RRFrozenShowcase } from "@/components/rr-frozen/rr-frozen-showcase";

export const metadata = {
  title: "RR Frozen | RR Group of Companies",
  description:
    "RR Frozen delivers premium frozen seafood processing, packaging, and cold-chain distribution solutions.",
};

export default function RRFrozenPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <RRFrozenHero />
      <RRFrozenOverview />
      <RRFrozenIndustriesServed />
      <RRFrozenShowcase />
      <Footer />
    </main>
  );
}
