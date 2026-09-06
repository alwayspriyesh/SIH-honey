import React from "react";

interface ScanSummaryProps {
  totalScans?: number;
  verifiedCount?: number;
  reviewCount?: number;
  officersActive?: number;
}

export function ScanSummary({
  totalScans = 12,
  verifiedCount = 10,
  reviewCount = 2,
  officersActive = 42,
}: ScanSummaryProps) {
  return (
    <div className="w-full rounded-2xl bg-surface border border-border-subtle p-4 sm:p-5 shadow-xs">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 sm:divide-x sm:divide-border-subtle text-center">
        {/* Total Scans */}
        <div className="flex flex-col items-center px-1">
          <span className="font-serif text-2xl sm:text-3xl font-normal text-primary">
            {totalScans}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
            Batches Tracked
          </span>
        </div>

        {/* Verified Rate */}
        <div className="flex flex-col items-center px-1">
          <span className="font-serif text-2xl sm:text-3xl font-normal text-status-success">
            {Math.round((verifiedCount / (totalScans || 1)) * 100)}%
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
            Verified Pure
          </span>
        </div>

        {/* Certified Field Officers Active */}
        <div className="flex flex-col items-center px-1">
          <span className="font-serif text-2xl sm:text-3xl font-normal text-honey">
            {officersActive}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
            Active Inspectors
          </span>
        </div>

        {/* Review Flags */}
        <div className="flex flex-col items-center px-1">
          <span className="font-serif text-2xl sm:text-3xl font-normal text-status-warning">
            {reviewCount}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
            In Lab Review
          </span>
        </div>
      </div>
    </div>
  );
}
