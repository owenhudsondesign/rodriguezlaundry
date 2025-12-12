export default function Services() {
  const services = [
    {
      title: "Linens & Towels",
      price: "$5",
      unit: "/lb",
      minimum: "15 lb min",
      turnaround: "24 hours",
      items: ["Bedsheets", "Pillowcases", "Towels", "Bath mats"],
      popular: true,
    },
    {
      title: "Clothes",
      price: "$7",
      unit: "/lb",
      minimum: "15 lb min",
      turnaround: "24 hours",
      items: ["Everyday wear", "Casual items", "Light fabrics"],
      popular: false,
    },
    {
      title: "Press & Iron",
      price: "$10.45",
      unit: "/lb",
      minimum: "10 lb min",
      turnaround: "2-3 days",
      items: ["Pressed finish", "Crisp linens", "Professional look"],
      popular: false,
    },
    {
      title: "Commercial",
      price: "Custom",
      unit: " Quote",
      minimum: "Volume rates",
      turnaround: "Flexible",
      items: ["Hotels", "Restaurants", "Businesses"],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-pale/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-slate/70">
            All prices include FREE pickup & delivery
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg ${
                service.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-slate">
                {service.title}
              </h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-primary">
                  {service.price}
                </span>
                <span className="ml-1 text-lg text-slate/70">
                  {service.unit}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate/60">{service.minimum}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-tertiary">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{service.turnaround} turnaround</span>
              </div>
              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-tertiary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-secondary/10 p-6 text-center">
          <p className="text-slate">
            <span className="font-semibold">Most Airbnb turnovers</span> = ~$40-60 per load
          </p>
        </div>
      </div>
    </section>
  );
}
