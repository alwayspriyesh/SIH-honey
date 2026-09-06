import React, { Suspense } from "react";
import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-bg px-4 sm:px-6 py-8">
      {/* Top Bar: Brand Link */}
      <div className="w-full max-w-sm mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Back to Honey Chain"
        >
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-honey shadow-2xs">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-honey"
            >
              <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
              <circle cx="12" cy="11" r="2.5" fill="#C99532" stroke="none" />
            </svg>
          </div>
          <span className="font-semibold text-sm tracking-tight text-primary">
            Honey Chain
          </span>
        </Link>

        <span className="text-[11px] font-mono tracking-wider uppercase text-text-muted select-none">
          Demo Auth
        </span>
      </div>

      {/* Center Auth Card */}
      <div className="w-full max-w-sm mx-auto my-auto py-8 text-center">
        <span className="text-[11px] uppercase tracking-widest font-mono text-honey font-semibold block mb-1.5">
          Consumer Portal
        </span>
        <h1 className="font-serif text-3xl sm:text-[34px] font-normal tracking-tight text-primary leading-tight">
          Welcome back
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed max-w-xs mx-auto mb-7">
          Sign in to verify your honey batches and access your scan history.
        </p>

        <Suspense
          fallback={
            <div className="py-8 text-xs font-mono text-text-muted">
              Loading login portal...
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>

      {/* Footer Quiet Disclaimer */}
      <div className="w-full max-w-sm mx-auto text-center pt-4">
        <p className="text-[11px] text-text-muted font-mono">
          SIH Prototype 2026 • Deterministic Demo Session
        </p>
      </div>
    </div>
  );
}
