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
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95647.55845498374!2d-70.14842565!3d41.283494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb13e2d8dce7fd%3A0x65b7cb9daf366d97!2sNantucket%2C%20MA!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nantucket Island Service Area"
                className="absolute inset-0"
              />
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
