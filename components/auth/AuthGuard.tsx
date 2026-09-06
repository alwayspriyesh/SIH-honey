"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated()) {
        const redirectUrl = pathname ? `/login?redirect=${encodeURIComponent(pathname)}` : "/login";
        router.replace(redirectUrl);
      } else {
        setAuthorized(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [router, pathname]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg px-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-honey animate-pulse">
            <svg
              width="18"
              height="18"
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
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Checking session...
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
