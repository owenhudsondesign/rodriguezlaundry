export default function VacationRentals() {
  const benefits = [
    "Same-day pickup after guest checkout",
    "Fresh linens ready for next guest",
    "Perfectly folded to fit your shelves",
    "No more laundromat runs",
    "Consistent quality every time",
    "Reliable scheduling you can count on",
  ];

  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Airbnb & Vacation Rental Hosts
            </h2>
            <p className="mt-6 text-lg text-white/80">
              Stop spending your turnover days doing laundry. Focus on what
              matters - providing an amazing guest experience.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-10 border-l-4 border-white/30 pl-6">
              <p className="text-lg italic text-white/90">
                &ldquo;During tourist season, Rodriguez Laundry is a blessing.&rdquo;
              </p>
              <footer className="mt-2 text-white/70">— Local Inn Owner</footer>
            </blockquote>

            <div className="mt-10">
              <a
                href="https://rodriguezlaundry.curbsidelaundries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-pale transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Get Started Today
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white/10 p-8">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="rounded-full bg-white/20 p-6">
                  <svg
                    className="h-16 w-16 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <p className="mt-6 text-xl font-semibold text-white">
                  50+ Properties Served
                </p>
                <p className="mt-2 text-white/70">
                  Across Nantucket Island
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-white/10"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
