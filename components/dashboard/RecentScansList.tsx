"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getScanHistory, DEFAULT_RECENT_SCANS } from "@/lib/history";
import { ScanHistoryItem } from "@/lib/types";
import { CaretRight, CheckCircle, WarningCircle, Clock } from "@phosphor-icons/react/dist/ssr";

export function RecentScansList() {
  const [scans, setScans] = useState<ScanHistoryItem[]>(DEFAULT_RECENT_SCANS);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = getScanHistory();
      if (saved && saved.length > 0) {
        setScans(saved.slice(0, 5));
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col text-left">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-base sm:text-lg font-semibold text-primary tracking-tight">
          Recent Scans
        </h3>
        <Link
          href="/history"
          className="text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors"
        >
          View all →
        </Link>
      </div>

      <div className="flex flex-col gap-2.5">
        {scans.map((item) => {
          const isVerified = item.status === "Verified";
          const isReview = item.status === "Review";

          return (
            <Link
              key={item.batchId}
              href={`/verify/${item.batchId}`}
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-surface border border-border-subtle hover:border-honey/40 transition-all min-h-[64px]"
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
                  ) : (
                    <WarningCircle size={13} weight="fill" />
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
    </div>
  );
}
