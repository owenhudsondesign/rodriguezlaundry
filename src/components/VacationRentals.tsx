"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function VacationRentals() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const benefits = [
    { text: "Same-day pickup after guest checkout", icon: "clock" },
    { text: "Fresh linens ready for next guest", icon: "sparkle" },
    { text: "Perfectly folded to fit your shelves", icon: "stack" },
    { text: "No more laundromat runs", icon: "x" },
    { text: "Consistent quality every time", icon: "check" },
    { text: "Reliable scheduling you can count on", icon: "calendar" },
  ];

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 0, 50 10 T 100 10" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <span className="inline-block text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">
              For Property Managers
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Built for Airbnb &<br />
              <span className="text-seafoam">Vacation Rentals</span>
            </h2>
            <p className="mt-6 text-xl text-white/80 leading-relaxed">
              Stop spending your turnover days doing laundry. Focus on what
              matters — providing an amazing guest experience.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <li
                  key={benefit.text}
                  className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20 mt-0.5">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <blockquote
              className={`mt-10 border-l-4 border-seafoam/50 pl-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <p className="text-lg italic text-white/90">
                &ldquo;During tourist season, Rodriguez Laundry is a blessing. They handle everything professionally.&rdquo;
              </p>
              <footer className="mt-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-seafoam/30 flex items-center justify-center text-white text-sm font-semibold">
                  M
                </div>
                <span className="text-white/70">Michael T., Local Inn Owner</span>
              </footer>
            </blockquote>

            <div
              className={`mt-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <a
                href="https://rodriguezlaundry.curbsidelaundries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-sand-light transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Get Started Today
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative aspect-square">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />

              {/* Inner content */}
              <div className="absolute inset-8 rounded-full bg-white/5 flex flex-col items-center justify-center text-center p-8">
                <div className="rounded-2xl bg-white/10 p-5 mb-6">
                  <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-white stat-number">50+</div>
                <div className="mt-2 text-lg text-white/70">Properties Served</div>
                <div className="mt-1 text-sm text-white/50">Across Nantucket Island</div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-8 rounded-2xl bg-white p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-sage animate-pulse" />
                  <span className="text-sm font-medium text-slate">Available Today</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-4 rounded-2xl bg-white p-4 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["bg-coral", "bg-seafoam", "bg-sage"].map((color, i) => (
                      <div key={i} className={`h-8 w-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                        {["S", "M", "J"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate">Happy Hosts</div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-white/10 scale-110" />
              <div className="absolute inset-0 rounded-full border border-white/5 scale-125" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" viewBox="0 0 1440 54" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 22L60 16.7C120 11 240 1.00001 360 0.700012C480 1.00001 600 11 720 16.7C840 22 960 22 1080 18.3C1200 15 1320 7.00001 1380 3.70001L1440 0.700012V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" />
        </svg>
      </div>
    </section>
  );
}
