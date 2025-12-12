import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-white">R</span>
              </div>
              <span className="text-lg font-semibold">Rodriguez Laundry</span>
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Nantucket&apos;s premier linen and laundry pickup service. Free
              delivery, 24-hour turnaround.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:7744852036"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (774) 485-2036
                </a>
              </li>
              <li>
                <a
                  href="mailto:rodriguez.laundry.co@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Us
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Nantucket, MA
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>8AM - 4PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://rodriguezlaundry.curbsidelaundries.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Schedule Pickup
                </a>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Rodriguez Laundry. All rights
              reserved.
            </p>
            <p className="text-sm text-white/60">
              Proud member of the Nantucket Chamber of Commerce
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
