import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CompaniesGrid } from "@/components/companies-grid";
import { Industries } from "@/components/industries";
import { Gallery } from "@/components/gallery";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Process } from "@/components/process";
import { CustomerSupplierShowcase } from "@/components/customer_supplier";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CompaniesGrid />
      <Industries />
      <Process />
      {/* <Gallery /> */}
      <CustomerSupplierShowcase />
      <CTABanner />
      <Footer />
    </main>
  );
}
