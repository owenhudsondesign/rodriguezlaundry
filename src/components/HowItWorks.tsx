"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const steps = [
    {
      number: "01",
      title: "Schedule",
      subtitle: "Online",
      description: "Book your pickup in 30 seconds. Choose a time that works for you.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      accent: "bg-seafoam/20 text-primary",
    },
    {
      number: "02",
      title: "We Pick",
      subtitle: "Up",
      description: "Our driver comes to you. No need to leave home or wait in line.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      accent: "bg-pale text-secondary",
    },
    {
      number: "03",
      title: "Delivered",
      subtitle: "Fresh",
      description: "Clean, folded, and ready. Delivered to your door next business day.",
      icon: (
        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      accent: "bg-sage/20 text-sage",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-white py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pale/30 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate sm:text-5xl">
            Fresh linens in{" "}
            <span className="relative">
              <span className="gradient-text">3 steps</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-seafoam/50" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 8 Q 25 0, 50 8 T 100 8" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        <div className="mt-20 relative">
          {/* Connection line - desktop */}
          <div className="absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-seafoam via-pale to-sage hidden lg:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="group relative">
                  {/* Icon container */}
                  <div className={`relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-2xl ${step.accent} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                    {step.icon}
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 md:right-1/4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg border border-sand/20">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-slate">
                    {step.title}{" "}
                    <span className="text-primary">{step.subtitle}</span>
                  </h3>
                  <p className="mt-3 text-slate/70 max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="https://rodriguezlaundry.curbsidelaundries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center justify-center rounded-xl bg-primary px-10 py-5 text-lg font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Schedule Your First Pickup
            <svg
              className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-slate/60">
            No commitment required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
