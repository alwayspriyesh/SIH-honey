import React from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

interface Step {
  num: string;
  title: string;
  desc: string;
}

const verificationSteps: Step[] = [
  {
    num: "01",
    title: "Scan",
    desc: "Scan the QR code on the jar with your smartphone camera.",
  },
  {
    num: "02",
    title: "Identify",
    desc: "Honey Chain instantly finds and validates the unique batch record.",
  },
  {
    num: "03",
    title: "Trace",
    desc: "View verified origin apiary, harvest dates, and purity metrics.",
  },
  {
    num: "04",
    title: "Verify",
    desc: "Confirm the unadulterated journey from hive to sealed package.",
  },
];

export function QRVerificationDemo() {
  return (
    <section
      className="w-full py-14 sm:py-20 px-4 sm:px-6 bg-bg border-b border-border-subtle"
      aria-label="QR verification demonstration"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <p className="text-xs uppercase tracking-widest font-mono text-honey mb-2.5 font-medium">
          Consumer Verification
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-primary leading-tight">
          Scan. Verify. Know.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed max-w-md mx-auto">
          Scan the QR code on your honey package to see its origin, batch record, and journey.
        </p>

        {/* Central QR Visual Container */}
        <div className="mt-9 sm:mt-11 flex flex-col items-center">
          {/* Packaging-style QR Card */}
          <div className="relative p-4 sm:p-5 rounded-2xl bg-surface border border-border-subtle shadow-xs select-none">
            {/* Corner Alignment Brackets (Product Packaging Style) */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/40 rounded-br-sm pointer-events-none" />

            {/* QR Code Graphic Frame (150px mobile, 170px sm) */}
            <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] [--qr-size:150px] sm:[--qr-size:170px] overflow-hidden rounded-lg bg-surface flex items-center justify-center">
              {/* Deterministic Mock QR Code SVG */}
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-primary"
                aria-label="Demo Batch HC1024 QR Code"
              >
                {/* Background */}
                <rect width="120" height="120" fill="#FFFFFF" />

                {/* Top-Left Position Detection Pattern */}
                <rect x="10" y="10" width="30" height="30" rx="3" stroke="#173C2C" strokeWidth="4" fill="none" />
                <rect x="18" y="18" width="14" height="14" rx="2" fill="#173C2C" />

                {/* Top-Right Position Detection Pattern */}
                <rect x="80" y="10" width="30" height="30" rx="3" stroke="#173C2C" strokeWidth="4" fill="none" />
                <rect x="88" y="18" width="14" height="14" rx="2" fill="#173C2C" />

                {/* Bottom-Left Position Detection Pattern */}
                <rect x="10" y="80" width="30" height="30" rx="3" stroke="#173C2C" strokeWidth="4" fill="none" />
                <rect x="18" y="88" width="14" height="14" rx="2" fill="#173C2C" />

                {/* Timing Pattern Lines */}
                <line x1="45" y1="14" x2="75" y2="14" stroke="#173C2C" strokeWidth="3" strokeDasharray="3 3" />
                <line x1="14" y1="45" x2="14" y2="75" stroke="#173C2C" strokeWidth="3" strokeDasharray="3 3" />

                {/* Deterministic Mock Matrix Modules */}
                <rect x="44" y="24" width="6" height="6" fill="#173C2C" />
                <rect x="56" y="24" width="6" height="6" fill="#173C2C" />
                <rect x="68" y="24" width="6" height="6" fill="#173C2C" />

                <rect x="44" y="34" width="6" height="6" fill="#173C2C" />
                <rect x="62" y="34" width="6" height="6" fill="#173C2C" />
                <rect x="74" y="34" width="6" height="6" fill="#173C2C" />

                {/* Middle Data Rows */}
                <rect x="24" y="46" width="6" height="6" fill="#173C2C" />
                <rect x="36" y="46" width="6" height="6" fill="#173C2C" />
                <rect x="48" y="46" width="6" height="6" fill="#173C2C" />
                <rect x="66" y="46" width="6" height="6" fill="#173C2C" />
                <rect x="84" y="46" width="6" height="6" fill="#173C2C" />
                <rect x="96" y="46" width="6" height="6" fill="#173C2C" />

                <rect x="24" y="58" width="6" height="6" fill="#173C2C" />
                <rect x="42" y="58" width="6" height="6" fill="#173C2C" />
                <rect x="72" y="58" width="6" height="6" fill="#173C2C" />
                <rect x="90" y="58" width="6" height="6" fill="#173C2C" />

                <rect x="30" y="68" width="6" height="6" fill="#173C2C" />
                <rect x="48" y="68" width="6" height="6" fill="#173C2C" />
                <rect x="60" y="68" width="6" height="6" fill="#173C2C" />
                <rect x="78" y="68" width="6" height="6" fill="#173C2C" />
                <rect x="96" y="68" width="6" height="6" fill="#173C2C" />

                {/* Bottom-Right Data Cluster */}
                <rect x="46" y="80" width="6" height="6" fill="#173C2C" />
                <rect x="58" y="80" width="6" height="6" fill="#173C2C" />
                <rect x="76" y="80" width="6" height="6" fill="#173C2C" />
                <rect x="94" y="80" width="6" height="6" fill="#173C2C" />

                <rect x="46" y="92" width="6" height="6" fill="#173C2C" />
                <rect x="64" y="92" width="6" height="6" fill="#173C2C" />
                <rect x="82" y="92" width="6" height="6" fill="#173C2C" />
                <rect x="100" y="92" width="6" height="6" fill="#173C2C" />

                <rect x="52" y="104" width="6" height="6" fill="#173C2C" />
                <rect x="70" y="104" width="6" height="6" fill="#173C2C" />
                <rect x="88" y="104" width="6" height="6" fill="#173C2C" />

                {/* Center Badge Mark: Honeycomb Center */}
                <rect x="50" y="50" width="20" height="20" rx="4" fill="#FFFFFF" stroke="#E4E5DF" strokeWidth="1" />
                <path d="M60 53L66 56.5V63.5L60 67L54 63.5V56.5L60 53Z" fill="#C99532" />
              </svg>

              {/* Continuous Looping Laser Scan Line (100% GPU accelerated via CSS keyframes) */}
              <div
                className="qr-scan-line pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-honey shadow-[0_0_8px_#C99532,0_0_2px_#FFFFFF] animate-qr-laser"
                aria-hidden="true"
              />
            </div>

            {/* Subtle Batch Label on the Physical Card */}
            <div className="mt-2.5 pt-2 border-t border-border-subtle/80 flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>BATCH HC1024</span>
              <span className="text-honey font-medium">500g</span>
            </div>
          </div>

          {/* Verification Status (Always verified and active with live indicator) */}
          <div className="qr-verified-status mt-4 flex flex-col items-center gap-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-status-success">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
              <CheckCircle size={15} weight="fill" className="text-status-success" />
              <span>Batch HC1024 Validated</span>
            </div>
            <span className="text-xs text-text-muted font-medium">
              Verified origin • Wayanad, Kerala • Grade A Raw
            </span>
          </div>
        </div>

        {/* 4-Step Verification Flow (Editorial timeline answering "How do I use it?") */}
        <div className="mt-12 sm:mt-16 w-full max-w-xl text-left">
          <div className="relative pl-7 sm:pl-9 border-l border-border-subtle ml-3 sm:ml-4 flex flex-col gap-8 sm:gap-9">
            {verificationSteps.map((step) => (
              <div key={step.num} className="relative">
                {/* Number Pip positioned on the vertical border line */}
                <div className="absolute -left-[39px] sm:-left-[47px] top-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-primary text-xs font-mono font-medium shadow-2xs">
                  {step.num}
                </div>

                {/* Step Title & Explanation */}
                <h3 className="text-base font-semibold text-primary tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
