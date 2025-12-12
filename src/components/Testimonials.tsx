"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I run a couple of Airbnb's on the island and Rodriguez Laundry certainly helps me with all the laundry after guests leave. There is a lot of bedding and towels to do each time and these guys are always on time and on point.",
      author: "Sarah M.",
      role: "Airbnb Superhost",
    },
    {
      quote:
        "My family runs a small inn on the island. During tourist season, Rodriguez Laundry is a blessing.",
      author: "Michael T.",
      role: "Inn Owner",
    },
    {
      quote:
        "The bedsheets come back perfectly folded every time. Everything comes back perfectly folded and best of all they fit my shelves.",
      author: "Jennifer L.",
      role: "Homeowner",
    },
    {
      quote:
        "Fast turnaround during peak season - exactly what we needed. Couldn't run our rental business without them.",
      author: "David R.",
      role: "Vacation Rental Manager",
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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            What Nantucket Hosts Say
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Trusted by vacation rental owners across the island
          </p>
        </div>

        <div className="relative mt-12">
          {/* Desktop Grid */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-pale/50 p-6 transition-all hover:shadow-lg"
              >
                {/* Stars */}
                <div className="flex gap-1">
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
                <blockquote className="mt-4 text-slate/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-slate">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="rounded-2xl bg-pale/50 p-6">
              {/* Stars */}
              <div className="flex gap-1">
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
              <blockquote className="mt-4 text-slate/80">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-slate">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-sm text-slate/60">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pale text-slate hover:bg-light transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-pale"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pale text-slate hover:bg-light transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
