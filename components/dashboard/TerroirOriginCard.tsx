import React from "react";
import Link from "next/link";
import { Mountains, Compass, Plant, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function TerroirOriginCard() {
  return (
    <div className="w-full rounded-2xl bg-surface border border-border-subtle p-5 sm:p-6 shadow-xs flex flex-col text-left gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-honey/15 flex items-center justify-center text-honey">
            <Mountains size={15} weight="bold" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-honey font-semibold">
            Active Terroir & Geographical Provenance
          </span>
        </div>
        <span className="text-[11px] font-mono text-text-muted">
          Western Ghats Corridor
        </span>
      </div>

      <p className="text-xs text-text-muted leading-relaxed -mt-1">
        Geographic origin dictates authentic pollen composition and enzyme richness. Honey Chain records precise elevation, microclimate, and botanical forage for every harvest.
      </p>

      {/* Terroir Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Region 1: Wayanad Biosphere */}
        <div className="p-3.5 rounded-xl bg-bg border border-border-subtle flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-primary">
              Wayanad Biosphere Reserve
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-honey font-medium">
              1,150m ASL
            </span>
          </div>

          <div className="flex flex-col gap-1 text-[11px] text-text-muted">
            <div className="flex items-center gap-1">
              <Compass size={12} className="text-honey shrink-0" />
              <span className="font-mono">11.6854° N, 76.1320° E (Kerala)</span>
            </div>
            <div className="flex items-center gap-1">
              <Plant size={12} className="text-[#2F6B46] shrink-0" />
              <span>Flora: Wild Terminalia & Shola Flora</span>
            </div>
          </div>

          <div className="pt-2 border-t border-border-subtle/70 flex items-center justify-between text-[11px]">
            <span className="text-[#2F6B46] font-medium">Zero Agro-Chemicals</span>
            <Link
              href="/verify/HC1024"
              className="font-mono text-honey font-semibold flex items-center gap-0.5 hover:underline"
            >
              HC1024 <ArrowUpRight size={10} />
            </Link>
          </div>
        </div>

        {/* Region 2: Nilgiris Highland */}
        <div className="p-3.5 rounded-xl bg-bg border border-border-subtle flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-primary">
              Nilgiris Highland Ridge
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-honey font-medium">
              2,240m ASL
            </span>
          </div>

          <div className="flex flex-col gap-1 text-[11px] text-text-muted">
            <div className="flex items-center gap-1">
              <Compass size={12} className="text-honey shrink-0" />
              <span className="font-mono">11.4102° N, 76.6950° E (Tamil Nadu)</span>
            </div>
            <div className="flex items-center gap-1">
              <Plant size={12} className="text-[#2F6B46] shrink-0" />
              <span>Flora: Mountain Thyme & Neelakurinji</span>
            </div>
          </div>

          <div className="pt-2 border-t border-border-subtle/70 flex items-center justify-between text-[11px]">
            <span className="text-[#2F6B46] font-medium">Shola Grassland Protected</span>
            <Link
              href="/verify/HC1018"
              className="font-mono text-honey font-semibold flex items-center gap-0.5 hover:underline"
            >
              HC1018 <ArrowUpRight size={10} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
