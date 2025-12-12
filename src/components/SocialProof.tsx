export default function SocialProof() {
  return (
    <section className="bg-primary py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-center text-lg font-medium text-white sm:text-left">
            Trusted by 50+ Nantucket vacation rentals & inns
          </p>
          <div className="flex items-center gap-8">
            {/* Platform Logos */}
            <div className="flex items-center gap-2 text-white/80">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 17.5228 6.47813 22 12.001 22C17.5238 22 22.001 17.5228 22.001 12C22.001 6.47715 17.5238 2 12.001 2ZM16.891 13.5458C16.7527 13.8053 16.458 13.9337 16.173 13.8579L12.001 12.8V7.5C12.001 7.22386 12.2248 7 12.501 7C12.7771 7 13.001 7.22386 13.001 7.5V11.9129L16.4281 12.7323C16.7134 12.8082 16.8926 13.0943 16.8168 13.3796C16.8001 13.4362 16.7743 13.4917 16.7393 13.5442L16.891 13.5458Z" />
              </svg>
              <span className="text-sm font-medium">Airbnb</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm font-medium">VRBO</span>
            </div>
            {/* Star Rating */}
            <div className="flex items-center gap-1">
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
              <span className="ml-2 text-sm font-medium text-white">
                5.0 Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
