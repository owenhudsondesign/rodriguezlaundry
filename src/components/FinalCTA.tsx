export default function FinalCTA() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate sm:text-4xl lg:text-5xl">
          Ready to Get Your Time Back?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate/70">
          Schedule your free pickup today. Fresh, folded linens delivered to
          your door tomorrow.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://rodriguezlaundry.curbsidelaundries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-secondary transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Schedule Free Pickup
            <svg
              className="ml-2 h-5 w-5"
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
        </div>

        <p className="mt-6 text-slate/60">
          Or call us:{" "}
          <a
            href="tel:7744852036"
            className="font-semibold text-primary hover:text-secondary transition-colors"
          >
            (774) 485-2036
          </a>
        </p>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate/60">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-tertiary"
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
            <span>Free Pickup & Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-tertiary"
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
            <span>24-Hour Turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-tertiary"
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
            <span>Locally Owned</span>
          </div>
        </div>
      </div>
    </section>
  );
}
