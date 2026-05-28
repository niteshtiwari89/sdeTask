import { useState } from "react";

export default function Navbar({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`w-full px-4 py-4 sm:px-6 md:py-5 ${className}`}>
      <div className="top-nav-container mx-auto w-full md:max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-bold text-white font-chivo">N7</div>

          <nav className="hidden items-center gap-6 text-sm font-chivo text-slate-300 md:flex lg:gap-8">
            <button type="button" className="cursor-pointer hover:underline">
              SOLUTIONS
            </button>
            <button type="button" className="cursor-pointer hover:underline">
              RESOURCES
            </button>
            <button type="button" className="cursor-pointer hover:underline">
              ABOUT US
            </button>
          </nav>

          <div className="hidden md:block">
            <button className="rounded-md border border-slate-400 px-3 py-1.5 text-xs font-chivo tracking-wide text-white lg:px-4 lg:py-2 lg:text-sm">
              REQUEST DEMO
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-500 p-2 text-slate-200 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 rounded-xl border border-slate-600/60 bg-slate-900/70 p-4 backdrop-blur md:hidden">
            <nav className="flex flex-col gap-3 text-sm font-chivo text-slate-200">
              <button type="button" className="rounded-md px-2 py-2 text-left hover:bg-white/5">
                SOLUTIONS
              </button>
              <button type="button" className="rounded-md px-2 py-2 text-left hover:bg-white/5">
                RESOURCES
              </button>
              <button type="button" className="rounded-md px-2 py-2 text-left hover:bg-white/5">
                ABOUT US
              </button>
            </nav>

            <button className="mt-4 w-full rounded-md border border-slate-400 px-4 py-2 text-sm font-chivo text-white">
              REQUEST DEMO
            </button>
          </div>
        )}
      </div>
    </header>
  );
}


