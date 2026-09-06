import React from "react";
import { Flask, CheckCircle, Drop, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export function PurityBenchmarksCard() {
  return (
    <div className="w-full rounded-2xl bg-surface border border-border-subtle p-5 sm:p-6 shadow-xs flex flex-col text-left gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-honey/15 flex items-center justify-center text-honey">
            <Flask size={15} weight="bold" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-honey font-semibold">
            Laboratory Purity & Safety Standards
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#2F6B46] font-medium">
          <CheckCircle size={13} weight="fill" />
          FSSAI Gazetted
        </span>
      </div>

      <p className="text-xs text-text-muted leading-relaxed -mt-1">
        Honey Chain tests against national food safety parameters to eradicate synthetic rice syrup and inverted sugar syrup adulteration.
      </p>

      {/* Benchmarks Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {/* Moisture */}
        <div className="p-3 rounded-xl bg-bg border border-border-subtle flex flex-col gap-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
            <Drop size={11} className="text-honey" />
            Moisture Limit
          </span>
          <span className="text-sm sm:text-base font-serif font-medium text-primary">
            &lt; 20.0%
          </span>
          <span className="text-[10px] text-[#2F6B46] font-medium">
            Avg: 17.5% Optimal
          </span>
        </div>

        {/* HMF Freshness */}
        <div className="p-3 rounded-xl bg-bg border border-border-subtle flex flex-col gap-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
            <Flask size={11} className="text-honey" />
            HMF Index
          </span>
          <span className="text-sm sm:text-base font-serif font-medium text-primary">
            &lt; 40 mg/kg
          </span>
          <span className="text-[10px] text-[#2F6B46] font-medium">
            Avg: 8.4 mg/kg Raw
          </span>
        </div>

        {/* C4 Sugar Adulteration */}
        <div className="p-3 rounded-xl bg-bg border border-border-subtle flex flex-col gap-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            C4 Added Sugar
          </span>
          <span className="text-sm sm:text-base font-serif font-medium text-primary">
            0.0% NMR
          </span>
          <span className="text-[10px] text-[#2F6B46] font-medium">
            Zero Corn/Cane
          </span>
        </div>

        {/* Pollen Profile */}
        <div className="p-3 rounded-xl bg-bg border border-border-subtle flex flex-col gap-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            Pollen Fingerprint
          </span>
          <span className="text-sm sm:text-base font-serif font-medium text-primary">
            100% Native
          </span>
          <span className="text-[10px] text-[#2F6B46] font-medium">
            True Forest Nectar
          </span>
        </div>
      </div>

      {/* Official Footnote */}
      <div className="pt-2 border-t border-border-subtle/70 flex items-center justify-between text-[11px] text-text-muted">
        <span className="flex items-center gap-1">
          <ShieldCheck size={13} className="text-honey" />
          <span>FSSAI Standards 2019 / NBB Quality Verification Protocol</span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted/80">
          SIH Problem 26021
        </span>
      </div>
    </div>
  );
}
