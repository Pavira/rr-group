import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RRPlasticsHero } from "@/components/rr-plastics/rr-plastics-hero";
import { RRPlasticsOverview } from "@/components/rr-plastics/rr-plastics-overview";
import { RRPlasticsIndustriesServed } from "@/components/rr-plastics/rr-plastics-served";
import { RRPlasticsShowcase } from "@/components/rr-plastics/rr-plastics-showcase";

export const metadata = {
  title: "RR-Plastics Industries | RR Group of Companies",
  description:
    "RR-Plastics Industries is a leading distributor of industrial chemicals and a major supplier of structural steel materials.",
};

export default function RRPlasticsIndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <RRPlasticsHero />
      <RRPlasticsOverview />
      <RRPlasticsIndustriesServed />
      <RRPlasticsShowcase />
      <Footer />
    </main>
  );
}
