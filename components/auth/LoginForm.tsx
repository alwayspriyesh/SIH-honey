"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { login, DEMO_EMAIL, DEMO_PASSWORD } from "@/lib/auth";
import { ArrowRight, LockKey, EnvelopeSimple, WarningCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";

export function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    const ok = login(email, password);
    if (ok) {
      window.location.href = redirectTarget;
    } else {
      setLoading(false);
      setError("Incorrect email or password.");
    }
  }

  function handleInstantLogin() {
    setError(null);
    setLoading(true);
    const ok = login(DEMO_EMAIL, DEMO_PASSWORD);
    if (ok) {
      window.location.href = redirectTarget;
    } else {
      setLoading(false);
      setError("Failed to create demo session.");
    }
  }

  function handleAutoFill() {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setError(null);
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Inline Error Message */}
        {error && (
          <div
            role="alert"
            className="flex items-center gap-2.5 p-3 rounded-xl bg-[#A33A32]/10 border border-[#A33A32]/25 text-[#A33A32] text-xs font-medium text-left"
          >
            <WarningCircle size={17} weight="fill" className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Email Field */}
        <div className="flex flex-col gap-1.5 text-left">
          <label
            htmlFor="email-input"
            className="text-xs font-mono uppercase tracking-wider text-text-muted font-medium"
          >
            Email Address
          </label>
          <div className="relative flex items-center">
            <input
              id="email-input"
              type="email"
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              placeholder="demo@honeychain.app"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-3 pl-10 rounded-xl bg-surface border border-border-subtle text-text-main text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-border-focus transition-colors min-h-[44px]"
            />
            <EnvelopeSimple
              size={17}
              className="absolute left-3.5 text-text-muted/60 pointer-events-none"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5 text-left">
          <label
            htmlFor="password-input"
            className="text-xs font-mono uppercase tracking-wider text-text-muted font-medium"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="password-input"
              type="password"
              autoComplete="current-password"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-3 pl-10 rounded-xl bg-surface border border-border-subtle text-text-main text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-border-focus transition-colors min-h-[44px]"
            />
            <LockKey
              size={17}
              className="absolute left-3.5 text-text-muted/60 pointer-events-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-2 group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-hover active:scale-[0.98] transition-all min-h-[46px] cursor-pointer disabled:opacity-60 shadow-xs"
        >
          <span>{loading ? "Signing in..." : "Continue"}</span>
          <ArrowRight
            size={16}
            weight="bold"
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </form>

      {/* Demo Access Hint with One-Tap Instant Access */}
      <div className="mt-7 p-4 rounded-xl bg-bg/80 border border-border-subtle text-left flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-honey font-semibold">
            <Sparkle size={14} weight="fill" />
            <span>SIH Demo Access</span>
          </div>
          <button
            type="button"
            onClick={handleAutoFill}
            className="text-xs font-medium text-primary hover:text-honey transition-colors underline underline-offset-2 cursor-pointer py-1 px-1.5"
          >
            Fill inputs
          </button>
        </div>

        <div className="font-mono text-xs text-text-muted flex flex-col gap-1 pt-1 border-t border-border-subtle/80">
          <div className="flex items-center justify-between">
            <span className="text-text-muted/70">Email:</span>
            <span className="text-text-main select-all">{DEMO_EMAIL}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-text-muted/70">Password:</span>
            <span className="text-text-main select-all">{DEMO_PASSWORD}</span>
          </div>
        </div>

        {/* Instant Login Button for Mobile Testing */}
        <button
          type="button"
          onClick={handleInstantLogin}
          disabled={loading}
          className="mt-1 w-full py-2.5 px-4 rounded-lg bg-surface border border-border-subtle text-primary hover:border-honey hover:text-honey text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
        >
          <Sparkle size={13} weight="fill" className="text-honey" />
          <span>1-Tap Instant Demo Login</span>
        </button>
      </div>
    </div>
  );
}
