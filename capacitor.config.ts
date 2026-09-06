import type { CapacitorConfig } from "@capacitor/cli";

/**
 * Honey Chain — Capacitor Configuration
 *
 * Remote-first architecture loading the production Vercel deployment (or local LAN dev URL).
 * Configure via environment variable:
 *   - Production Vercel: CAPACITOR_SERVER_URL="https://your-app.vercel.app"
 *   - Local Hotspot/LAN: CAPACITOR_SERVER_URL="http://10.40.114.47:3000"
 */
const serverUrl = process.env.CAPACITOR_SERVER_URL || "https://honey-chain-lac.vercel.app";
const isDevHttp = serverUrl.startsWith("http://");

const config: CapacitorConfig = {
  appId: "com.honeychain.app",
  appName: "Honey Chain",
  webDir: "public",
  server: {
    url: serverUrl,
    cleartext: isDevHttp,
    androidScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: "#FAF9F5",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    },
    StatusBar: {
      style: "LIGHT",
      backgroundColor: "#FAF9F5",
    },
  },
};

export default config;
