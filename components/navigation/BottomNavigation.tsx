"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, QrCode, ClockCounterClockwise } from "@phosphor-icons/react/dist/ssr";

export function BottomNavigation() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/dashboard",
      icon: House,
      isActive: pathname === "/dashboard",
    },
    {
      label: "Scan",
      href: "/scan",
      icon: QrCode,
      isActive: pathname === "/scan",
    },
    {
      label: "History",
      href: "/history",
      icon: ClockCounterClockwise,
      isActive: pathname === "/history",
    },
  ];

  return (
    <nav
      aria-label="Consumer bottom navigation"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border-subtle pt-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] px-4 shadow-xs"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[68px] px-3 py-1 rounded-xl transition-colors ${
                active
                  ? "text-primary font-semibold"
                  : "text-text-muted hover:text-primary font-medium"
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-lg transition-colors ${
                  active ? "text-primary" : "text-text-muted"
                }`}
              >
                <Icon
                  size={20}
                  weight={active ? "fill" : "regular"}
                  className={active ? "text-primary" : "text-text-muted"}
                />
              </div>
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
