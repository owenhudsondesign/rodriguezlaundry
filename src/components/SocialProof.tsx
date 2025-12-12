"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SocialProof() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A5F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col items-center gap-8 md:flex-row md:justify-between transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Text */}
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sand hidden md:block" />
            <p className="text-center text-lg font-medium text-slate md:text-left">
              Trusted by <span className="font-bold text-primary">50+</span> Nantucket vacation rentals & inns
            </p>
          </div>

          {/* Logos and rating */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Airbnb style logo */}
            <div className="group flex items-center gap-2 text-slate/60 hover:text-coral transition-colors">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 18.095c-1.255-1.715-2.063-3.163-2.465-4.404-.39-1.198-.461-2.211-.214-3.075.239-.839.728-1.514 1.406-1.991.714-.5 1.493-.625 2.273-.625.78 0 1.559.125 2.273.625.678.477 1.167 1.152 1.406 1.991.247.864.176 1.877-.214 3.075-.402 1.241-1.21 2.689-2.465 4.404-.523.722-1.003 1.378-1.5 2-.497-.622-.977-1.278-1.5-2zm1.5 3.405c1.147-1.424 4.5-6.157 4.5-9.5 0-4.5-3.358-6-6-6s-6 1.5-6 6c0 3.343 3.353 8.076 4.5 9.5.632.78 1.5 1.5 1.5 1.5s.868-.72 1.5-1.5zm-.001-9.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/>
              </svg>
              <span className="text-sm font-semibold">Airbnb Hosts</span>
            </div>

            {/* VRBO style */}
            <div className="group flex items-center gap-2 text-slate/60 hover:text-secondary transition-colors">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-7 12a4 4 0 110-8 4 4 0 010 8z"/>
              </svg>
              <span className="text-sm font-semibold">VRBO</span>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-sand/50 hidden sm:block" />

            {/* Star Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400 drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-slate">5.0</span>
              <span className="text-sm text-slate/60">Google Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
