"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { SignOut } from "@phosphor-icons/react/dist/ssr";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function DashboardHeader() {
  const router = useRouter();
  const [greeting] = useState(getGreeting);

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <header className="w-full bg-surface border-b border-border-subtle pt-4 pb-4 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        {/* Brand Link */}
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5 group"
          aria-label="Honey Chain Dashboard"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center text-honey shadow-2xs">
            <svg
              width="16"
              height="16"
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
          <span className="font-semibold text-base sm:text-lg tracking-tight text-primary">
            Honey Chain
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden sm:flex items-center gap-1 text-xs font-medium">
          <Link
            href="/dashboard"
            className="px-3 py-1.5 rounded-lg text-primary bg-bg/80 font-semibold transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/scan"
            className="px-3 py-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-bg/50 transition-colors"
          >
            Scan QR
          </Link>
          <Link
            href="/history"
            className="px-3 py-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-bg/50 transition-colors"
          >
            History
          </Link>
          <Link
            href="/qrcodes"
            className="px-3 py-1.5 rounded-lg text-honey hover:text-primary hover:bg-honey/10 font-mono text-[11px] font-semibold transition-colors flex items-center gap-1"
          >
            <span>QR Test Bench</span>
          </Link>
        </nav>

        {/* Right side: Greeting & Logout */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-text-muted">
            {greeting}
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle text-xs font-medium text-text-muted hover:text-[#A33A32] hover:border-[#A33A32]/30 transition-colors min-h-[36px] cursor-pointer"
            aria-label="Sign out of demo session"
          >
            <SignOut size={15} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
