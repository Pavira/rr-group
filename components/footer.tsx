import Link from "next/link";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Leadership", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  companies: [
    { name: "Rama Industries", href: "/rama-industries" },
    { name: "RR Plastics", href: "/rr-plastics" },
    { name: "RR Paper Industries", href: "/rr-paper-industries" },
    { name: "RR Frozen Fish", href: "/rr-frozen" },
  ],
  resources: [
    { name: "Chemicals", href: "/rama-industries" },
    { name: "Printing", href: "/rama-industries" },
    { name: "Paper & Packaging", href: "/rr-paper-industries" },
    { name: "Paint", href: "/rr-paper-industries" },
    { name: "Steel", href: "/rama-industries" },
    { name: "Plastics", href: "/rr-plastics" },
    { name: "Seafood", href: "/rr-frozen" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:info@rrgroup.com" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-background/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <img
              src="/images/rr-group-logo.jpeg"
              alt="RR Group Logo"
              className="w-60 h-10 rounded-xl mb-6"
            />
            {/* <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  RR
                </span>
              </div>
              <div>
                <span className="font-bold text-xl text-background">
                  RR Group
                </span>
                <p className="text-background/60 text-sm">of Companies</p>
              </div>
            </Link> */}
            <p className="text-background/70 text-sm leading-relaxed mb-6 max-w-sm">
              A global industrial conglomerate delivering excellence across
              manufacturing, paper products, plastics, and seafood industries.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Global Headquarters, Industrial District</span>
              </div>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (800) RR-GROUP</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              Our Companies
            </h4>
            <ul className="space-y-3">
              {footerLinks.companies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} RR Group of Companies. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
