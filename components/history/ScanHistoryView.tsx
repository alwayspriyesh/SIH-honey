"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getScanHistory } from "@/lib/history";
import { ScanHistoryItem } from "@/lib/types";
import {
  ArrowLeft,
  CheckCircle,
  WarningCircle,
  XCircle,
  CaretRight,
  QrCode,
  ClockCounterClockwise,
  Clock,
  Trash,
} from "@phosphor-icons/react/dist/ssr";

export function ScanHistoryView() {
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const items = getScanHistory();
      setHistory(items);
      setLoaded(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  function handleClearHistory() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("honeychain_scan_history");
      setHistory([]);
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 py-6 pb-28 flex flex-col text-left">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors py-1.5 px-2 -ml-2 rounded-lg"
          aria-label="Return to dashboard"
        >
          <ArrowLeft size={16} />
          <span>Dashboard</span>
        </Link>
        {history.length > 0 && (
          <button
            type="button"
            onClick={handleClearHistory}
            className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-text-muted hover:text-[#A33A32] transition-colors py-1 px-2 rounded-lg cursor-pointer"
          >
            <Trash size={13} />
            <span>Clear</span>
          </button>
        )}
      </div>

      {/* Title */}
      <div className="mb-6">
        <span className="text-[11px] font-mono uppercase tracking-widest text-honey font-semibold block mb-1">
          Consumer Record
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-primary leading-tight">
          Scan History
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-text-muted leading-relaxed">
          Your saved verification records and product origin journeys.
        </p>
      </div>

      {/* Content */}
      {!loaded ? (
        <div className="py-12 text-center text-xs font-mono text-text-muted">
          Loading history...
        </div>
      ) : history.length === 0 ? (
        /* Empty State */
        <div className="rounded-2xl bg-surface border border-border-subtle p-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-bg flex items-center justify-center text-honey mb-3">
            <ClockCounterClockwise size={24} />
          </div>
          <h2 className="font-semibold text-base text-primary">
            No saved scans yet
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-text-muted max-w-xs mb-6">
            When you scan honey packages, your verified batch records will be saved here for easy reference.
          </p>
          <Link
            href="/scan"
            className="flex items-center gap-2 py-3 px-6 rounded-xl bg-primary text-white text-xs sm:text-sm font-medium hover:bg-primary-hover active:scale-[0.98] transition-all min-h-[44px] shadow-xs"
          >
            <QrCode size={17} weight="bold" />
            <span>Scan a Honey QR</span>
          </Link>
        </div>
      ) : (
        /* List of Saved Scans */
        <div className="flex flex-col gap-2.5">
          {history.map((item) => {
            const isVerified = item.status === "Verified";
            const isReview = item.status === "Review";

            return (
              <Link
                key={item.batchId}
                href={`/verify/${item.batchId}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-surface border border-border-subtle hover:border-honey/40 transition-all min-h-[64px]"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm sm:text-base text-primary">
                      {item.honeyType}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {item.batchId}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-text-muted">
                    <span>{item.location}</span>
                    {item.officerName && (
                      <>
                        <span>•</span>
                        <span className="text-primary font-medium flex items-center gap-1">
                          <span>{item.officerName}</span>
                          {item.officerRating && (
                            <span className="inline-flex items-center text-[10px] text-honey font-semibold">
                              ★{item.officerRating.toFixed(1)}
                            </span>
                          )}
                        </span>
                      </>
                    )}
                    {item.scannedAt && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-text-muted/80">
                          <Clock size={11} />
                          {item.scannedAt}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                      isVerified
                        ? "bg-[#2F6B46]/10 text-status-success"
                        : isReview
                        ? "bg-[#A66A16]/10 text-status-warning"
                        : "bg-[#A33A32]/10 text-status-error"
                    }`}
                  >
                    {isVerified ? (
                      <CheckCircle size={13} weight="fill" />
                    ) : isReview ? (
                      <WarningCircle size={13} weight="fill" />
                    ) : (
                      <XCircle size={13} weight="fill" />
                    )}
                    <span>{item.status}</span>
                  </span>
                  <CaretRight
                    size={14}
                    className="text-text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
