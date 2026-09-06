import type { Metadata, Viewport } from "next";
import { Geist, DM_Serif_Display } from "next/font/google";
import { AndroidBackButtonHandler } from "@/components/navigation/AndroidBackButtonHandler";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Honey Chain — Know where your honey comes from",
  description:
    "Verify the origin, batch, and journey of your honey with one simple scan. Transparent food traceability from farm to you.",
  keywords: ["honey traceability", "food verification", "origin tracking", "honey chain"],
  openGraph: {
    title: "Honey Chain — Know where your honey comes from",
    description: "Verify the origin, batch, and journey of your honey with one simple scan.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF9F5",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-main">
        <AndroidBackButtonHandler />
        {children}
      </body>
    </html>
  );
}
