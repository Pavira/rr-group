import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RamaHero } from "@/components/rama-industries/rama-hero";
import { RamaOverview } from "@/components/rama-industries/rama-overview";
import { RamaIndustriesServed } from "@/components/rama-industries/rama-industries-served";
import { RamaShowcase } from "@/components/rama-industries/rama-showcase";

export const metadata = {
  title: "Rama Industries | RR Group of Companies",
  description:
    "Rama Industries is a leading distributor of industrial chemicals and a major supplier of structural steel materials.",
};

export default function RamaIndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <RamaHero />
      <RamaOverview />
      <RamaIndustriesServed />
      <RamaShowcase />
      <Footer />
    </main>
  );
}
