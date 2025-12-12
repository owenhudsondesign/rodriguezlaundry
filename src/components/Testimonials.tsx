"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const testimonials = [
    {
      quote:
        "I run a couple of Airbnb's on the island and Rodriguez Laundry certainly helps me with all the laundry after guests leave. There is a lot of bedding and towels to do each time and these guys are always on time and on point.",
      author: "Sarah M.",
      role: "Airbnb Superhost",
      avatar: "S",
      accentColor: "bg-coral",
    },
    {
      quote:
        "My family runs a small inn on the island. During tourist season, Rodriguez Laundry is a blessing. They handle everything professionally.",
      author: "Michael T.",
      role: "Inn Owner",
      avatar: "M",
      accentColor: "bg-seafoam",
    },
    {
      quote:
        "The bedsheets come back perfectly folded every time. Everything comes back perfectly folded and best of all they fit my shelves.",
      author: "Jennifer L.",
      role: "Homeowner",
      avatar: "J",
      accentColor: "bg-sage",
    },
    {
      quote:
        "Fast turnaround during peak season - exactly what we needed. Couldn't run our rental business without them.",
      author: "David R.",
      role: "Vacation Rental Manager",
      avatar: "D",
      accentColor: "bg-primary",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative bg-white py-20 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pale/50 to-transparent rounded-full" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate sm:text-5xl">
            What Nantucket <span className="gradient-text">hosts</span> say
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Trusted by vacation rental owners across the island
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card-hover-subtle relative rounded-3xl bg-white p-6 shadow-sm border border-sand/20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute -top-3 -left-2 text-6xl font-serif text-sand/30">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate/80 text-sm leading-relaxed line-clamp-5">
                {testimonial.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.accentColor} text-white font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-12">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative rounded-3xl bg-white p-8 shadow-lg border border-sand/20">
              {/* Quote mark */}
              <div className="absolute -top-4 left-4 text-7xl font-serif text-sand/30">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate/80 text-lg leading-relaxed">
                {testimonials[currentIndex].quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonials[currentIndex].accentColor} text-white font-semibold text-lg`}>
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-slate/60">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-sand/20 text-slate hover:bg-pale transition-all hover:scale-105 active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-sand hover:bg-driftwood"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-sand/20 text-slate hover:bg-pale transition-all hover:scale-105 active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
