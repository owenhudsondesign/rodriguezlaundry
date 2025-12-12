"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ServiceArea() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const areas = [
    "Downtown Nantucket (02554)",
    "Siasconset (02584)",
    "Madaket",
    "Surfside",
    "Cisco",
    "All island locations",
  ];

  return (
    <section id="services" className="relative bg-white py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pale/40 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Map Visual */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-pale to-seafoam/20 p-8 shadow-lg">
              {/* Stylized Nantucket Map */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 300"
                fill="none"
              >
                {/* Island shape */}
                <path
                  d="M50 150 Q 100 100, 200 120 Q 280 130, 350 150 Q 380 180, 350 200 Q 300 220, 200 210 Q 100 200, 50 180 Q 30 160, 50 150"
                  fill="#E8F4F8"
                  stroke="#1E3A5F"
                  strokeWidth="2"
                />
                {/* Siasconset bump */}
                <ellipse cx="370" cy="170" rx="25" ry="20" fill="#E8F4F8" stroke="#1E3A5F" strokeWidth="2" />
              </svg>

              {/* Location markers */}
              <div className="absolute inset-0 p-8">
                {/* Downtown marker */}
                <div className="absolute top-[45%] left-[35%] group">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-primary animate-ping absolute" />
                    <div className="h-4 w-4 rounded-full bg-primary relative" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded text-xs font-medium text-slate shadow">
                    Downtown
                  </div>
                </div>

                {/* Siasconset marker */}
                <div className="absolute top-[50%] right-[10%] group">
                  <div className="h-3 w-3 rounded-full bg-secondary" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 rounded text-xs font-medium text-slate shadow">
                    Siasconset
                  </div>
                </div>

                {/* Madaket marker */}
                <div className="absolute top-[48%] left-[15%] group">
                  <div className="h-3 w-3 rounded-full bg-tertiary" />
                </div>

                {/* Surfside marker */}
                <div className="absolute top-[65%] left-[40%] group">
                  <div className="h-3 w-3 rounded-full bg-sage" />
                </div>
              </div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-3">
                    <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-bold text-slate">Island-Wide</p>
                  <p className="text-sm text-slate/60">Coverage</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/20">
                  <svg className="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate">Free Delivery</div>
                  <div className="text-xs text-slate/60">Everywhere</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
              Service Area
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-slate sm:text-5xl">
              Serving all of{" "}
              <span className="gradient-text">Nantucket</span>
            </h2>
            <p className="mt-6 text-lg text-slate/70 leading-relaxed">
              We pickup and deliver anywhere on the island. No matter where
              you&apos;re located, we&apos;ll come to you — free of charge.
            </p>

            <ul className="mt-10 grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <li
                  key={area}
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${200 + index * 75}ms` }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pale">
                    <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate/80">{area}</span>
                </li>
              ))}
            </ul>

            <div
              className={`mt-10 rounded-2xl bg-gradient-to-r from-pale to-sand-light p-6 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                  <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate">Business Hours</p>
                  <p className="text-slate/70">Monday - Saturday: 8AM - 4PM</p>
                  <p className="text-sm text-slate/50">Closed Sundays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
