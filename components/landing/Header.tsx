import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full bg-transparent border-b border-transparent lg:sticky lg:top-0 lg:bg-bg/95 lg:border-border-subtle transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="Honey Chain Home"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#173C2C]/90 lg:bg-primary border border-white/25 lg:border-transparent flex items-center justify-center text-honey transition-transform group-hover:scale-105 shadow-xs">
            {/* Minimalist geometric honeycomb node */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-honey sm:w-[18px] sm:h-[18px]"
            >
              <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
              <circle cx="12" cy="11" r="2.5" fill="#C99532" stroke="none" />
            </svg>
          </div>
          <span className="font-semibold text-base sm:text-lg tracking-tight text-white lg:text-primary drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] lg:drop-shadow-none">
            Honey Chain
          </span>
        </Link>

        {/* Quiet, editorial authenticity tag */}
        <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-white/80 lg:text-text-muted select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] lg:drop-shadow-none">
          Traceability Protocol
        </span>
      </div>
    </header>
  );
}
