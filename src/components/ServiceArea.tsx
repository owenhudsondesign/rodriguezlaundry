export default function ServiceArea() {
  const areas = [
    "Downtown Nantucket (02554)",
    "Siasconset (02584)",
    "Madaket",
    "Surfside",
    "Cisco",
    "All island locations",
  ];

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Map Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-pale">
              <div className="flex h-full items-center justify-center p-8">
                {/* Simple Nantucket Map Illustration */}
                <svg
                  className="h-full w-full max-h-64 text-primary/20"
                  viewBox="0 0 200 100"
                  fill="currentColor"
                >
                  <ellipse cx="100" cy="50" rx="90" ry="35" />
                  <circle cx="170" cy="55" r="15" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="mt-4 font-semibold text-slate">
                      Island-Wide Coverage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate sm:text-4xl">
              Serving All of Nantucket Island
            </h2>
            <p className="mt-4 text-lg text-slate/70">
              We pickup and deliver anywhere on the island. No matter where
              you&apos;re located, we&apos;ll come to you.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-tertiary"
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
                  <span className="text-slate/80">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl bg-pale p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    className="h-6 w-6 text-primary"
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
                </div>
                <div>
                  <p className="font-semibold text-slate">Business Hours</p>
                  <p className="text-slate/70">
                    Monday - Saturday: 8AM - 4PM
                  </p>
                  <p className="text-sm text-slate/60">Closed Sundays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
