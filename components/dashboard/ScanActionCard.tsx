"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { QrCode, ArrowRight, MagnifyingGlass, Sparkle } from "@phosphor-icons/react/dist/ssr";

export function ScanActionCard() {
  const router = useRouter();
  const [inputBatch, setInputBatch] = useState("");

  function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    const clean = inputBatch.trim().toUpperCase();
    if (clean) {
      router.push(`/verify/${clean}`);
    }
  }

  return (
    <div className="w-full rounded-2xl bg-surface border border-border-subtle p-5 sm:p-7 shadow-xs flex flex-col text-left gap-5">
      <div>
        <span className="text-[11px] font-mono uppercase tracking-widest text-honey font-semibold block mb-1">
          Consumer Verification Portal
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-primary leading-tight">
          Verify a honey batch
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed max-w-md">
          Scan the QR code on your honey package or enter a batch ID to inspect certified field officers, regional terroir, and laboratory NMR purity grades.
        </p>
      </div>

      {/* Primary Actions: QR Scanner Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/scan"
          className="group flex items-center justify-center gap-2.5 w-full sm:w-auto sm:px-7 py-3.5 rounded-xl bg-primary text-white text-sm sm:text-base font-medium hover:bg-primary-hover active:scale-[0.98] transition-all min-h-[48px] shadow-xs cursor-pointer"
        >
          <QrCode size={20} weight="bold" />
          <span>Scan Honey QR</span>
          <ArrowRight
            size={16}
            weight="bold"
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Quick Batch Lookup Form */}
      <div className="pt-4 border-t border-border-subtle flex flex-col gap-2.5">
        <form onSubmit={handleLookup} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Or enter Batch ID (e.g. HC1024)"
              value={inputBatch}
              onChange={(e) => setInputBatch(e.target.value)}
              className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-bg border border-border-subtle text-text-main text-xs sm:text-sm font-mono placeholder:font-sans placeholder:text-text-muted/60 focus:outline-none focus:border-border-focus transition-colors min-h-[42px]"
            />
            <MagnifyingGlass
              size={15}
              className="absolute left-3 top-3 text-text-muted/70 pointer-events-none"
            />
          </div>
          <button
            type="submit"
            disabled={!inputBatch.trim()}
            className="px-4 py-2.5 rounded-xl bg-surface border border-border-subtle text-primary hover:border-honey hover:text-honey text-xs font-medium transition-colors disabled:opacity-40 cursor-pointer min-h-[42px]"
          >
            Verify
          </button>
        </form>

        {/* Quick Sample Batch Shortcuts */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-text-muted">
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted/80 flex items-center gap-1 mr-1">
            <Sparkle size={11} weight="fill" className="text-honey" />
            Quick test batches:
          </span>
          <Link
            href="/verify/HC1024"
            className="px-2 py-0.5 rounded-md bg-bg hover:bg-honey/10 border border-border-subtle hover:border-honey/40 text-primary font-mono text-[11px] font-medium transition-colors"
          >
            HC1024 (Wayanad)
          </Link>
          <Link
            href="/verify/HC1018"
            className="px-2 py-0.5 rounded-md bg-bg hover:bg-honey/10 border border-border-subtle hover:border-honey/40 text-primary font-mono text-[11px] font-medium transition-colors"
          >
            HC1018 (Nilgiris)
          </Link>
          <Link
            href="/verify/HC1011"
            className="px-2 py-0.5 rounded-md bg-bg hover:bg-[#A66A16]/10 border border-border-subtle hover:border-[#A66A16]/40 text-primary font-mono text-[11px] font-medium transition-colors"
          >
            HC1011 (Review flag)
          </Link>
          <Link
            href="/qrcodes"
            className="px-2 py-0.5 rounded-md bg-honey/15 hover:bg-honey/25 text-honey font-mono text-[11px] font-semibold transition-colors ml-auto flex items-center gap-1"
          >
            <span>All 10 QR Codes →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
