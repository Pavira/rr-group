"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight text-balance">
            Let's Start a Conversation
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our services or looking for a partnership? Send
            us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-secondary/80 p-8 md:p-12 rounded-3xl border border-border/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground ml-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground ml-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-foreground ml-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground ml-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-max px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Map and Details */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="aspect-[16/10] w-full rounded-3xl overflow-hidden bg-secondary/20 border border-border/50 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937611493!2d-73.98731968459418!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x5119f86ac25d08b!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 transition duration-700"
              ></iframe>
            </div>

            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-secondary/10 border border-border/50 flex items-start gap-4 hover:bg-secondary/20 transition">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    Email
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    contact@rrgroup.com
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/10 border border-border/50 flex items-start gap-4 hover:bg-secondary/20 transition">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    Phone
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    +1 (234) 567-890
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-secondary/10 border border-border/50 flex items-start gap-4 hover:bg-secondary/20 transition sm:col-span-2">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    Headquarters
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    123 Business Boulevard, Industrial Zone,
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
