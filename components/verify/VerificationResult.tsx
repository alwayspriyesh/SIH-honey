"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { HoneyBatch } from "@/lib/types";
import { saveScanToHistory } from "@/lib/history";
import {
  ArrowLeft,
  CheckCircle,
  WarningCircle,
  XCircle,
  BookmarkSimple,
  QrCode,
  ClockCounterClockwise,
  MapPin,
  Calendar,
  Scales,
  Plant,
  Check,
  Star,
  Certificate,
  Mountains,
  Flask,
  Compass,
  Drop,
} from "@phosphor-icons/react/dist/ssr";

export function VerificationResult() {
  const params = useParams();
  const batchId = (params?.batchId as string)?.toUpperCase();

  const [batch, setBatch] = useState<HoneyBatch | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<"not_found" | "failed" | null>(null);
  const [saved, setSaved] = useState(false);

  const fetchBatchData = useCallback(async () => {
    if (!batchId) return;
    setLoading(true);
    setFetchError(null);

    try {
      // Real HTTP fetch from static resource path
      const res = await fetch(`/data/batches/${batchId}.json`);
      if (res.status === 404) {
        setFetchError("not_found");
        setLoading(false);
        return;
      }
      if (!res.ok) {
        setFetchError("failed");
        setLoading(false);
        return;
      }
      const data: HoneyBatch = await res.json();
      setBatch(data);
      setLoading(false);
    } catch {
      setFetchError("failed");
      setLoading(false);
    }
  }, [batchId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBatchData();
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchBatchData]);

  function handleSaveToHistory() {
    if (!batch) return;
    saveScanToHistory({
      batchId: batch.batchId,
      honeyType: batch.honeyType,
      location: batch.location,
      status: batch.status,
      officerName: batch.officer?.name,
      officerRating: batch.officer?.rating,
    });
    setSaved(true);
  }

  // 1. Loading State
  if (loading) {
    return (
      <div className="w-full max-w-lg mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-honey animate-pulse mb-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-honey"
          >
            <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
            <circle cx="12" cy="11" r="2.5" fill="#C99532" stroke="none" />
          </svg>
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-honey font-semibold mb-1">
          Verifying Batch
        </span>
        <h2 className="text-lg font-medium text-primary">
          Fetching digital provenance record...
        </h2>
        <span className="font-mono text-xs text-text-muted mt-2">
          Querying /data/batches/{batchId}.json
        </span>
      </div>
    );
  }

  // 2. Error State
  if (fetchError || !batch) {
    return (
      <div className="w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-[#A33A32]/10 flex items-center justify-center text-status-error mb-4">
          <XCircle size={26} weight="fill" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-[#A33A32] font-semibold mb-1">
          {fetchError === "not_found" ? "Batch Not Found" : "Connection Error"}
        </span>
        <h2 className="font-serif text-2xl font-normal text-primary">
          {fetchError === "not_found"
            ? `No record found for ${batchId}`
            : "Unable to load batch right now"}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-text-muted max-w-xs mb-6">
          {fetchError === "not_found"
            ? "This batch ID is not registered in the Honey Chain verified registry. Please check the label and try again."
            : "A network issue occurred while loading this batch record. Please retry."}
        </p>

        <div className="flex flex-col gap-2.5 w-full max-w-xs">
          {fetchError === "not_found" ? (
            <Link
              href="/scan"
              className="w-full py-3 px-5 rounded-xl bg-primary text-white text-xs sm:text-sm font-medium hover:bg-primary-hover transition-colors text-center"
            >
              Scan Another Batch
            </Link>
          ) : (
            <button
              onClick={fetchBatchData}
              className="w-full py-3 px-5 rounded-xl bg-primary text-white text-xs sm:text-sm font-medium hover:bg-primary-hover transition-colors cursor-pointer"
            >
              Try Again
            </button>
          )}
          <Link
            href="/dashboard"
            className="w-full py-2.5 px-4 rounded-xl bg-surface border border-border-subtle text-text-muted hover:text-primary text-xs font-medium text-center transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // 3. Success Verification Result
  const isVerified = batch.status === "Verified";
  const isReview = batch.status === "Review";

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-5 pb-36 flex flex-col gap-5 text-left">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors py-1.5 px-2 -ml-2 rounded-lg"
        >
          <ArrowLeft size={16} />
          <span>Dashboard</span>
        </Link>
        <span className="text-[11px] font-mono tracking-wider uppercase text-text-muted select-none">
          Verification Record
        </span>
      </div>

      {/* Main Verification Card */}
      <div className="rounded-2xl bg-surface border border-border-subtle p-5 sm:p-7 shadow-xs flex flex-col gap-5">
        {/* Status Header Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              isVerified
                ? "bg-[#2F6B46]/10 text-status-success"
                : isReview
                ? "bg-[#A66A16]/10 text-status-warning"
                : "bg-[#A33A32]/10 text-status-error"
            }`}
          >
            {isVerified ? (
              <CheckCircle size={16} weight="fill" />
            ) : isReview ? (
              <WarningCircle size={16} weight="fill" />
            ) : (
              <XCircle size={16} weight="fill" />
            )}
            <span className="uppercase tracking-wide">{batch.status}</span>
          </div>

          <span className="font-mono text-xs font-semibold text-honey">
            {batch.batchId}
          </span>
        </div>

        {/* Product Identity */}
        <div className="border-b border-border-subtle pb-5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-honey font-semibold block mb-1">
            Certified Honey Product
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-primary leading-tight">
            {batch.honeyType}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-text-muted">
            Produced by <span className="font-medium text-text-main">{batch.producer}</span>
          </p>
          {batch.notes && (
            <p className="mt-2 text-xs text-text-muted leading-relaxed italic bg-bg/60 p-2.5 rounded-lg border border-border-subtle/70">
              &ldquo;{batch.notes}&rdquo;
            </p>
          )}
        </div>

        {/* Detailed Provenance Grid */}
        <div className="border-b border-border-subtle pb-5 grid grid-cols-2 gap-4 text-left">
          {/* Origin */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted flex items-center gap-1">
              <MapPin size={13} className="text-honey" />
              Origin Apiary
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary">
              {batch.location}
            </span>
          </div>

          {/* Package Weight */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted flex items-center gap-1">
              <Scales size={13} className="text-honey" />
              Net Package
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary">
              {batch.weight}
            </span>
          </div>

          {/* Harvest Date */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted flex items-center gap-1">
              <Calendar size={13} className="text-honey" />
              Harvested
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary">
              {batch.harvestDate}
            </span>
          </div>

          {/* Moisture Grade */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted flex items-center gap-1">
              <Plant size={13} className="text-honey" />
              Moisture Content
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary">
              {batch.moistureContent || "< 18% Verified"}
            </span>
          </div>
        </div>

        {/* 1. Official Inspection Officer Card */}
        {batch.officer && (
          <div className="border-b border-border-subtle pb-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-honey font-semibold flex items-center gap-1.5">
                <Certificate size={15} weight="fill" className="text-honey" />
                Certified Inspecting Officer
              </span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-honey/10 text-honey font-mono text-xs font-semibold">
                <Star size={12} weight="fill" />
                <span>{batch.officer.rating.toFixed(1)}</span>
                <span className="text-text-muted text-[10px] font-normal">
                  ({batch.officer.reviewsCount})
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-bg/70 border border-border-subtle flex flex-col gap-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-primary leading-snug">
                    {batch.officer.name}
                  </h3>
                  <span className="text-xs text-text-muted block">
                    {batch.officer.designation}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface border border-border-subtle text-text-main font-medium">
                  {batch.officer.badgeId}
                </span>
              </div>

              <div className="pt-2 border-t border-border-subtle/70 flex flex-col gap-1 text-[11px] text-text-muted">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-text-muted/80">Authority:</span>
                  <span className="font-medium text-text-main text-right">{batch.officer.agency}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-text-muted/80">Inspection Station:</span>
                  <span className="font-medium text-text-main text-right">{batch.officer.station}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-text-muted/80">Certified At:</span>
                  <span className="font-mono text-primary font-semibold text-right">{batch.officer.inspectedAt}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Geographical Terroir & Ecology Card */}
        {batch.geography && (
          <div className="border-b border-border-subtle pb-5 flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-honey font-semibold flex items-center gap-1.5">
              <Mountains size={15} weight="bold" className="text-honey" />
              Geographical Terroir & Ecology
            </span>

            <div className="p-3.5 rounded-xl bg-bg/70 border border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
                  <Compass size={12} />
                  Coordinates & Altitude
                </span>
                <span className="font-mono text-text-main font-medium text-[11px]">
                  {batch.geography.coordinates}
                </span>
                <span className="text-primary font-semibold text-xs">
                  {batch.geography.altitude}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  Terrain & Canopy
                </span>
                <span className="text-text-main font-medium">
                  {batch.geography.terrain}
                </span>
              </div>

              <div className="flex flex-col gap-0.5 sm:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  Dominant Nectar Flora
                </span>
                <span className="text-primary font-medium">
                  {batch.geography.dominantFlora}
                </span>
              </div>

              {batch.geography.soilType && (
                <div className="flex flex-col gap-0.5 sm:col-span-2 pt-1 border-t border-border-subtle/70">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Soil & Chemical Safety
                  </span>
                  <span className="text-text-muted text-[11px]">
                    {batch.geography.soilType}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. Laboratory Purity & Quality Analysis Grid */}
        {batch.qualityAnalysis && (
          <div className="border-b border-border-subtle pb-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-honey font-semibold flex items-center gap-1.5">
                <Flask size={15} weight="bold" className="text-honey" />
                Laboratory Purity & Quality Analysis
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#2F6B46]/10 text-status-success">
                NMR Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Moisture */}
              <div className="p-3 rounded-xl bg-bg/70 border border-border-subtle flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
                  <Drop size={12} className="text-honey" />
                  Moisture Index
                </span>
                <span className="text-base font-serif font-medium text-primary">
                  {batch.qualityAnalysis.moisture}
                </span>
                <span className="text-[10px] text-text-muted leading-tight">
                  {batch.qualityAnalysis.moistureStatus}
                </span>
              </div>

              {/* HMF Freshness */}
              <div className="p-3 rounded-xl bg-bg/70 border border-border-subtle flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
                  <Flask size={12} className="text-honey" />
                  HMF Level
                </span>
                <span className="text-base font-serif font-medium text-primary">
                  {batch.qualityAnalysis.hmfLevel}
                </span>
                <span className="text-[10px] text-text-muted leading-tight">
                  {batch.qualityAnalysis.hmfStatus}
                </span>
              </div>

              {/* C4 Added Sugar NMR Test */}
              <div className="p-3 rounded-xl bg-bg/70 border border-border-subtle flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  C4 Adulteration Test
                </span>
                <span className="text-sm font-semibold text-status-success">
                  {batch.qualityAnalysis.c4SugarTest.split(" ")[0]}
                </span>
                <span className="text-[10px] text-text-muted leading-tight">
                  Zero added sugar syrup detected
                </span>
              </div>

              {/* Pollen Density */}
              <div className="p-3 rounded-xl bg-bg/70 border border-border-subtle flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  Pollen Density
                </span>
                <span className="text-sm font-semibold text-primary font-mono">
                  {batch.qualityAnalysis.pollenDensity}
                </span>
                <span className="text-[10px] text-text-muted leading-tight">
                  {batch.qualityAnalysis.adulterationStatus}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Supply Chain Journey Timeline */}
        {batch.traceability && batch.traceability.length > 0 && (
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-honey font-semibold block mb-3">
              Documented Supply Chain
            </span>

            <div className="relative pl-5 border-l border-border-subtle ml-2 flex flex-col gap-3.5">
              {batch.traceability.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-surface border-2 border-primary" />
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-primary">
                      {step.stage}
                    </span>
                    <span className="font-mono text-[11px] text-text-muted">
                      {step.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-text-muted">
                    <span>{step.location}</span>
                    <span className="font-mono text-honey font-medium">
                      {step.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2.5">
        {/* Save to History Button */}
        {!saved ? (
          <button
            type="button"
            onClick={handleSaveToHistory}
            className="group flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-hover active:scale-[0.98] transition-all min-h-[48px] shadow-xs cursor-pointer"
          >
            <BookmarkSimple size={18} weight="bold" />
            <span>Save to History</span>
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#2F6B46]/10 text-status-success text-xs font-semibold">
              <Check size={16} weight="bold" />
              <span>Saved to scan history</span>
            </div>
            <Link
              href="/history"
              className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-surface border border-border-subtle text-primary text-xs sm:text-sm font-medium hover:border-honey transition-colors min-h-[44px]"
            >
              <ClockCounterClockwise size={16} />
              <span>View Saved Scans</span>
            </Link>
          </div>
        )}

        {/* Scan Another Batch Button */}
        <Link
          href="/scan"
          className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-surface border border-border-subtle text-primary text-xs sm:text-sm font-medium hover:border-honey transition-colors min-h-[44px]"
        >
          <QrCode size={17} />
          <span>Scan Another Batch</span>
        </Link>
      </div>
    </div>
  );
}
