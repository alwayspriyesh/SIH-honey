"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";

/**
 * Handles Android native hardware back button navigation and native system UI integration.
 * Safe to render in both web (Vercel/browser) and native Android (Capacitor).
 */
export function AndroidBackButtonHandler() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    // Configure Native Android Status Bar styling to blend with Honey Chain palette
    try {
      StatusBar.setStyle({ style: Style.Light }).catch(() => {});
      StatusBar.setBackgroundColor({ color: "#FAF9F5" }).catch(() => {});
    } catch {
      // Ignore status bar error on unsupported platforms
    }

    // Register hardware back button listener
    const backListenerPromise = App.addListener("backButton", ({ canGoBack }) => {
      const currentPath = window.location.pathname;

      if (currentPath.startsWith("/verify/")) {
        // Return to dashboard from verification result
        router.push("/dashboard");
      } else if (
        currentPath === "/scan" ||
        currentPath === "/history" ||
        currentPath === "/qrcodes"
      ) {
        // Return to dashboard from inner utility pages
        router.push("/dashboard");
      } else if (currentPath === "/login") {
        // Return to landing page from login
        router.push("/");
      } else if (currentPath === "/dashboard" || currentPath === "/") {
        // On root destinations, exit the app cleanly
        App.exitApp();
      } else if (canGoBack) {
        window.history.back();
      } else {
        App.exitApp();
      }
    });

    return () => {
      backListenerPromise.then((handle) => handle.remove()).catch(() => {});
    };
  }, [router, pathname]);

  return null;
}
