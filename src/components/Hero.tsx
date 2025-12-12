"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/shutterstock_2517686959.jpg"
          alt="Laundry service background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`max-w-2xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm border border-sand/20 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-sage animate-pulse" />
              <span className="text-sm font-medium text-driftwood">
                Serving Nantucket Since Day One
              </span>
            </div>

            {/* Headline with dramatic typography */}
            <h1 className="text-5xl font-bold tracking-tight text-slate sm:text-6xl lg:text-7xl">
              <span className="block">Fresh Linens.</span>
              <span className="block mt-2 gradient-text">Delivered.</span>
            </h1>

            {/* Accent line */}
            <div className="mt-6 flex items-center gap-4">
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                24-Hour Turnaround
              </span>
            </div>

            <p
              className={`mt-8 text-xl leading-relaxed text-slate/70 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Nantucket&apos;s premier pickup & delivery laundry service.
              Free pickup. Free delivery. Perfect for Airbnb hosts, vacation rentals & local inns.
            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <a
                href="https://rodriguezlaundry.curbsidelaundries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Schedule Free Pickup
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
              <a
                href="tel:7744852036"
                className="btn-secondary inline-flex items-center justify-center rounded-xl border-2 border-primary/20 bg-white px-8 py-4 text-lg font-semibold text-primary hover:border-primary/40 hover:bg-pale/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <svg
                  className="mr-2 h-5 w-5"
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
            </div>

            {/* Trust Badges */}
            <div
              className={`mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {[
                { icon: "truck", label: "Free Pickup & Delivery" },
                { icon: "clock", label: "24-Hour Turnaround" },
                { icon: "home", label: "Locally Owned" },
                { icon: "star", label: "5-Star Reviews" },
              ].map((badge, index) => (
                <div
                  key={badge.label}
                  className="group flex items-center gap-3 transition-transform hover:-translate-y-1"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-sand/20 group-hover:border-primary/20 transition-colors">
                    {badge.icon === "truck" && (
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                    )}
                    {badge.icon === "clock" && (
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {badge.icon === "home" && (
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {badge.icon === "star" && (
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm font-medium text-slate/80">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/stackoflinens.png"
                alt="Fresh, neatly folded linens"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate/20 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/20">
                  <svg className="h-6 w-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate">Free Delivery</div>
                  <div className="text-xs text-slate/60">Island-wide service</div>
                </div>
              </div>
            </div>

            {/* Floating rating card */}
            <div className="absolute -top-4 -right-4 rounded-2xl bg-white p-4 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-1 text-xs text-slate/60">Trusted by hosts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1440 54"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0 22L60 16.7C120 11 240 1.00001 360 0.700012C480 1.00001 600 11 720 16.7C840 22 960 22 1080 18.3C1200 15 1320 7.00001 1380 3.70001L1440 0.700012V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" />
        </svg>
      </div>
    </section>
  );
}
