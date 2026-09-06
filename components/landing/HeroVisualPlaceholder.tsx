import React from "react";
import { QrCode, CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function HeroVisualPlaceholder() {
  return (
    <div
      className="w-full max-w-md mx-auto border border-border-subtle rounded-2xl bg-surface p-4 sm:p-6 shadow-xs select-none"
      aria-label="Honey package and traceability preview visual"
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3.5 mb-5 text-xs text-text-muted">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-status-success"></span>
          <span className="font-mono uppercase tracking-wider text-[11px] font-medium text-text-main">
            Batch HC1024
          </span>
        </div>
        <span className="font-medium text-honey flex items-center gap-1">
          <ShieldCheck size={14} weight="fill" className="text-honey" />
          Certified Origin
        </span>
      </div>

      {/* Visual Product Composition (Restrained Editorial Vector) */}
      <div className="relative py-4 flex flex-col items-center justify-center bg-bg rounded-xl border border-border-subtle/80 overflow-hidden">
        {/* Minimalist Artisanal Jar Silhouette */}
        <div className="relative w-44 h-52 flex flex-col items-center justify-center">
          {/* Jar Lid (Wood aesthetic in natural forest tones) */}
          <div className="w-28 h-5 rounded-t-md bg-secondary border border-primary flex items-center justify-center">
            <div className="w-16 h-0.5 bg-honey/40 rounded-full"></div>
          </div>
          <div className="w-24 h-2 bg-border-subtle border-x border-border-subtle"></div>

          {/* Jar Body */}
          <div className="relative w-36 h-40 bg-surface border-2 border-border-subtle rounded-b-2xl flex flex-col items-center justify-between p-3.5 shadow-none">
            {/* Minimalist Packaging Label */}
            <div className="w-full text-center pt-1 border-b border-border-subtle/60 pb-1.5">
              <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase block">
                Pure Flora
              </span>
              <span className="text-xs font-semibold text-primary block leading-tight">
                Forest Honey
              </span>
            </div>

            {/* Simulated QR Code Scan Target on Jar */}
            <div className="w-16 h-16 rounded-lg border border-border-subtle bg-bg flex flex-col items-center justify-center p-1 relative">
              <QrCode size={40} weight="regular" className="text-primary" />
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-honey"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-honey"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-honey"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-honey"></div>
            </div>

            {/* Label Base Meta */}
            <div className="w-full text-center">
              <span className="text-[10px] text-text-muted block">
                Wayanad, Kerala • 500g
              </span>
            </div>
          </div>
        </div>

        {/* Verification Status Overlay Pill */}
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border-subtle text-xs text-text-main font-medium">
          <CheckCircle size={15} weight="fill" className="text-status-success" />
          <span>Verified Producer Record</span>
        </div>
      </div>

      {/* Quick Summary Spec */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-left pt-2 border-t border-border-subtle">
        <div>
          <span className="text-[11px] text-text-muted block uppercase tracking-wider font-mono">
            Apiary Origin
          </span>
          <span className="text-xs font-medium text-text-main">
            Green Valley Beekeepers
          </span>
        </div>
        <div>
          <span className="text-[11px] text-text-muted block uppercase tracking-wider font-mono">
            Harvest Date
          </span>
          <span className="text-xs font-medium text-text-main">
            15 Aug 2026
          </span>
        </div>
      </div>
    </div>
  );
}
