"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Rama Industries", href: "/rama-industries" },
  { name: "RR Plastics", href: "/rr-plastics" },
  { name: "RR Paper Industries", href: "/rr-paper-industries" },
  { name: "RR Frozen Fish", href: "/rr-frozen" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src="/images/rr-group-logo.jpeg"
            alt="RR Group Logo"
            className={cn(
              "w-60 h-10 rounded-xl transition-all duration-300",
              isScrolled ? "bg-background" : "bg-white/90",
            )}
          />
          {/* <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                RR
              </span>
            </div>
            <span
              className={cn(
                "font-semibold text-lg transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-white",
              )}
            >
              RR Group
            </span>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group",
                  isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </Link>
            ))}

            {/* Companies Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompaniesOpen(true)}
              onMouseLeave={() => setIsCompaniesOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1 group",
                  isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10",
                )}
              >
                Companies
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isCompaniesOpen && "rotate-180",
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-56 rounded-2xl bg-background/95 backdrop-blur-xl shadow-xl border border-border/50 overflow-hidden transition-all duration-300 origin-top",
                  isCompaniesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
                )}
              >
                <div className="p-2">
                  {companies.map((company) => (
                    <Link
                      key={company.name}
                      href={company.href}
                      className="block px-4 py-3 rounded-xl text-sm text-foreground hover:bg-secondary transition-colors duration-200"
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group",
                isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white/90 hover:text-white hover:bg-white/10",
              )}
            >
              Contact
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors duration-300",
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-white hover:bg-white/10",
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-screen pb-6" : "max-h-0",
          )}
        >
          <div className="pt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-300",
                  isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white hover:bg-white/10",
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Companies */}
            <div className="px-4 py-2">
              <span
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider",
                  isScrolled ? "text-muted-foreground" : "text-white/60",
                )}
              >
                Our Companies
              </span>
              <div className="mt-2 space-y-1">
                {companies.map((company) => (
                  <Link
                    key={company.name}
                    href={company.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2 rounded-xl text-sm transition-colors duration-300",
                      isScrolled
                        ? "text-foreground hover:bg-secondary"
                        : "text-white/80 hover:bg-white/10",
                    )}
                  >
                    {company.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 px-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-3 rounded-xl bg-primary text-primary-foreground text-center text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
