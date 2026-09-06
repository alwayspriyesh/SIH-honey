import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-border-subtle bg-bg py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <Link
            href="/"
            className="font-semibold text-base text-primary hover:text-primary-hover transition-colors"
          >
            Honey Chain
          </Link>
          <span className="hidden sm:inline text-border-subtle" aria-hidden="true">
            •
          </span>
          <p className="text-xs sm:text-sm text-text-muted">
            Transparent, unadulterated honey traceability from forest hive to you.
          </p>
        </div>

        {/* Minimal Meta / SIH note */}
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span>SIH Prototype 2026</span>
          <span className="text-border-subtle">•</span>
          <span>Consumer Verification</span>
        </div>
      </div>
    </footer>
  );
}
