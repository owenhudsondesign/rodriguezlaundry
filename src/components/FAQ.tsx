"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How fast will I get my laundry back?",
      answer:
        "Standard orders are returned next business day (within 24 hours). Saturday pickups are returned on Monday. We also offer express same-day service for an additional $150 fee for urgent needs.",
    },
    {
      question: "Is pickup and delivery really free?",
      answer:
        "Yes! All orders include free pickup and delivery across Nantucket Island. There are no hidden fees or delivery charges.",
    },
    {
      question: "What's the minimum order?",
      answer:
        "For wash & fold linens and towels, the minimum is 15 lbs ($5/lb). For clothes, it's also 15 lbs ($7/lb). Press & iron services have a 10 lb minimum ($10.45/lb).",
    },
    {
      question: "Do you offer commercial/bulk rates?",
      answer:
        "Yes! We work with hotels, restaurants, inns, and other businesses. Contact us for custom volume pricing tailored to your needs.",
    },
    {
      question: "What if I need same-day service?",
      answer:
        "We offer express same-day service for emergencies at an additional $150 fee. Contact us directly to arrange express pickup and delivery.",
    },
    {
      question: "How should I prepare my laundry for pickup?",
      answer:
        "Place your laundry in separate bags for different item types (linens, towels, clothes). Our driver will collect everything at your scheduled pickup time. We provide bags on request.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-pale/30 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            Everything you need to know about our service
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-slate">{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-slate/60 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-pale px-6 py-4">
                  <p className="text-slate/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate/70">
            Still have questions?{" "}
            <a
              href="mailto:rodriguez.laundry.co@gmail.com"
              className="font-semibold text-primary hover:text-secondary transition-colors"
            >
              Contact us
            </a>{" "}
            or call{" "}
            <a
              href="tel:7744852036"
              className="font-semibold text-primary hover:text-secondary transition-colors"
            >
              (774) 485-2036
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
