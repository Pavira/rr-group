import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/about-hero";
import { WhoWeAre } from "@/components/about/who-we-are";
import { VisionMission } from "@/components/about/vision-mission";
import { Timeline } from "@/components/about/timeline";
import { Strengths } from "@/components/about/strengths";
import { CTABanner } from "@/components/about/cta-banner";

export const metadata = {
  title: "About Us | RR Group of Companies",
  description:
    "Learn about RR Group of Companies - our vision, mission, history, and the values that drive us to deliver excellence across industries worldwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <Timeline />
      <Strengths />
      <CTABanner />
      <Footer />
    </main>
  );
}
