import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate text-white overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg className="w-full h-16 text-slate" viewBox="0 0 1440 54" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 54L60 49.7C120 45 240 36 360 31.3C480 27 600 27 720 29.3C840 31 960 36 1080 38.3C1200 40 1320 40 1380 40L1440 40V54H0V54Z" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-tertiary shadow-lg transition-transform group-hover:scale-105">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <div>
                <span className="block text-lg font-bold">Rodriguez</span>
                <span className="block text-sm text-white/60">Laundry</span>
              </div>
            </Link>
            <p className="mt-6 text-sm text-white/60 leading-relaxed">
              Nantucket&apos;s premier linen and laundry pickup service. Free
              delivery, 24-hour turnaround, island-wide coverage.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {["facebook", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {social === "facebook" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                  {social === "instagram" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:7744852036"
                  className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  (774) 485-2036
                </a>
              </li>
              <li>
                <a
                  href="mailto:rodriguez.laundry.co@gmail.com"
                  className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Email Us
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                Nantucket, MA
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-white mb-6">Hours</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex justify-between gap-4">
                <span>Monday - Saturday</span>
                <span className="text-white font-medium">8AM - 4PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white/40">Closed</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl bg-white/10 p-4">
              <p className="text-xs text-white/60">
                <span className="text-sage font-medium">24-hour turnaround</span> on standard orders. Express same-day service available.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://rodriguezlaundry.curbsidelaundries.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Schedule Pickup
                </a>
              </li>
              <li>
                <Link href="#pricing" className="text-white/60 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/60 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/60 hover:text-white transition-colors">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Rodriguez Laundry. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <div className="h-2 w-2 rounded-full bg-sage" />
              <span>Proud member of the Nantucket Chamber of Commerce</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
