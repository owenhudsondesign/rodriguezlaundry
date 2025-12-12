"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const faqs = [
    {
      question: "How fast will I get my laundry back?",
      answer:
        "Standard orders are returned next business day (within 24 hours). Saturday pickups are returned on Monday. We also offer express same-day service for an additional $150 fee for urgent needs.",
    },
    {
      question: "Is pickup and delivery really free?",
      answer:
        "Yes! All orders include free pickup and delivery across Nantucket Island. There are no hidden fees or delivery charges — what you see is what you pay.",
    },
    {
      question: "What's the minimum order?",
      answer:
        "For wash & fold linens and towels, the minimum is 15 lbs ($5/lb). For clothes, it's also 15 lbs ($7/lb). Press & iron services have a 10 lb minimum ($10.45/lb).",
    },
    {
      question: "Do you offer commercial/bulk rates?",
      answer:
        "Absolutely! We work with hotels, restaurants, inns, and other businesses. Contact us for custom volume pricing tailored to your needs — we'll create a package that works for your schedule.",
    },
    {
      question: "What if I need same-day service?",
      answer:
        "We offer express same-day service for emergencies at an additional $150 fee. Contact us directly to arrange express pickup and delivery — we understand that sometimes things come up!",
    },
    {
      question: "How should I prepare my laundry for pickup?",
      answer:
        "Place your laundry in separate bags for different item types (linens, towels, clothes). Our driver will collect everything at your scheduled pickup time. We can provide bags on request.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sand-light/20 to-white" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-seafoam/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pale/30 rounded-full blur-3xl -translate-x-1/2" />

      <div ref={ref} className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate sm:text-5xl">
            Got <span className="gradient-text">questions?</span>
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Everything you need to know about our service
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl bg-white shadow-sm border border-sand/20 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${openIndex === index ? "ring-2 ring-primary/20" : ""}`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all ${openIndex === index ? "bg-primary text-white rotate-180" : "bg-pale text-slate/60"}`}>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <div className="border-t border-sand/20 px-6 py-5">
                  <p className="text-slate/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-slate/70">
            Still have questions?{" "}
            <a
              href="mailto:rodriguez.laundry.co@gmail.com"
              className="font-semibold text-primary hover:text-secondary transition-colors link-underline"
            >
              Contact us
            </a>{" "}
            or call{" "}
            <a
              href="tel:7744852036"
              className="font-semibold text-primary hover:text-secondary transition-colors link-underline"
            >
              (774) 485-2036
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
