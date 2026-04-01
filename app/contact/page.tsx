import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact/contact-section";
import { ContactHero } from "@/components/contact/contact-hero";

export const metadata = {
  title: "Contact Us | RR Group of Companies",
  description:
    "Get in touch with RR Group of Companies for inquiries, partnerships, and support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
