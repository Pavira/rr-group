import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RRPaperHero } from "@/components/rr-paper-industries/rr-paper-hero";
import { RRPaperOverview } from "@/components/rr-paper-industries/rr-paper-overview";
import { RRPaperIndustriesServed } from "@/components/rr-paper-industries/rr-paper-served";
import { RRPaperShowcase } from "@/components/rr-paper-industries/rr-paper-showcase";

export const metadata = {
  title: "RR Paper Industries | RR Group of Companies",
  description:
    "RR Paper Industries delivers printing, packaging, and stationery manufacturing solutions for education and commercial sectors.",
};

export default function RRPaperIndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <RRPaperHero />
      <RRPaperOverview />
      <RRPaperIndustriesServed />
      <RRPaperShowcase />
      <Footer />
    </main>
  );
}
