"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const services = [
    {
      title: "Linens & Towels",
      price: "$5",
      unit: "/lb",
      minimum: "15 lb minimum",
      turnaround: "24 hours",
      items: ["Bedsheets", "Pillowcases", "Towels", "Bath mats"],
      popular: true,
      gradient: "from-primary to-secondary",
      bgAccent: "bg-pale",
    },
    {
      title: "Clothes",
      price: "$7",
      unit: "/lb",
      minimum: "15 lb minimum",
      turnaround: "24 hours",
      items: ["Everyday wear", "Casual items", "Light fabrics"],
      popular: false,
      gradient: "from-secondary to-tertiary",
      bgAccent: "bg-seafoam/30",
    },
    {
      title: "Press & Iron",
      price: "$10.45",
      unit: "/lb",
      minimum: "10 lb minimum",
      turnaround: "2-3 days",
      items: ["Pressed finish", "Crisp linens", "Professional look"],
      popular: false,
      gradient: "from-driftwood to-sand",
      bgAccent: "bg-sand-light",
    },
    {
      title: "Commercial",
      price: "Custom",
      unit: " Quote",
      minimum: "Volume rates",
      turnaround: "Flexible",
      items: ["Hotels", "Restaurants", "Businesses"],
      popular: false,
      gradient: "from-sage to-seafoam",
      bgAccent: "bg-sage/20",
    },
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sand-light/30 to-white" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-seafoam/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pale/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate sm:text-5xl">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            All prices include <span className="font-semibold text-primary">FREE</span> pickup & delivery
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-hover relative rounded-3xl bg-white p-8 shadow-sm border border-sand/20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${service.popular ? "ring-2 ring-primary lg:-mt-4 lg:mb-4" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon accent */}
              <div className={`${service.bgAccent} h-12 w-12 rounded-2xl flex items-center justify-center mb-6`}>
                <div className={`h-6 w-6 rounded-lg bg-gradient-to-br ${service.gradient}`} />
              </div>

              <h3 className="text-xl font-bold text-slate">{service.title}</h3>

              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-slate">
                  {service.price}
                </span>
                <span className="ml-1 text-lg text-slate/60">{service.unit}</span>
              </div>

              <p className="mt-2 text-sm text-slate/50">{service.minimum}</p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-pale/50 px-3 py-1.5 text-sm text-primary">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{service.turnaround}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sage/20">
                      <svg className="h-3 w-3 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Estimate callout */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 text-center text-white shadow-xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
            <div className="relative">
              <p className="text-lg">
                <span className="font-semibold">Most Airbnb turnovers</span> cost between{" "}
                <span className="text-3xl font-bold">$40-60</span> per load
              </p>
              <p className="mt-2 text-white/70 text-sm">
                Fresh linens for your guests without the hassle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
