"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";
import { extractBatchId } from "@/lib/qrParser";
import {
  ArrowLeft,
  Camera,
  WarningCircle,
  ArrowRight,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

export function QRScanner() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsRef = useRef<IScannerControls | null>(null);

  const [cameraState, setCameraState] = useState<
    "initializing" | "scanning" | "permission_denied" | "error" | "success"
  >("initializing");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [unrecognizedCode, setUnrecognizedCode] = useState<string | null>(null);
  const [manualBatchId, setManualBatchId] = useState("");
  const manualInputRef = useRef<HTMLInputElement>(null);

  const stopCamera = useCallback(() => {
    if (controlsRef.current) {
      try {
        controlsRef.current.stop();
      } catch {
        // Ignore stop error
      }
      controlsRef.current = null;
    }
    if (videoRef.current && videoRef.current.srcObject) {
      try {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      } catch {
        // Ignore stream cleanup error
      }
    }
  }, []);

  const startScanner = useCallback(async () => {
    stopCamera();
    setUnrecognizedCode(null);
    setErrorMessage(null);
    setCameraState("initializing");

    try {
      const codeReader = new BrowserQRCodeReader();
      // Try environment/rear camera first, fallback to user/front
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      };

      if (!videoRef.current) return;

      const controls = await codeReader.decodeFromConstraints(
        constraints,
        videoRef.current,
        (result, error, scannerControls) => {
          if (result) {
            const rawText = result.getText();
            const batchId = extractBatchId(rawText);

            if (batchId) {
              setCameraState("success");
              scannerControls.stop();
              stopCamera();
              router.push(`/verify/${batchId}`);
            } else {
              // Scanned something that is not a recognized batch format
              setUnrecognizedCode(rawText);
            }
          }
        }
      );

      controlsRef.current = controls;
      setCameraState("scanning");
    } catch (err: unknown) {
      stopCamera();
      const errorObj = err as Error;
      if (
        errorObj.name === "NotAllowedError" ||
        errorObj.name === "PermissionDeniedError"
      ) {
        setCameraState("permission_denied");
        setErrorMessage("Camera access is required to scan a QR code.");
      } else if (
        errorObj.name === "NotFoundError" ||
        errorObj.name === "DevicesNotFoundError"
      ) {
        setCameraState("error");
        setErrorMessage("No camera detected on this device.");
      } else {
        setCameraState("error");
        setErrorMessage("Unable to access camera right now.");
      }
    }
  }, [stopCamera, router]);

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      if (isMounted) {
        startScanner();
      }
    }, 0);
    return () => {
      isMounted = false;
      clearTimeout(timer);
      stopCamera();
    };
  }, [startScanner, stopCamera]);

  function handleManualSubmit(e: React.FormEvent) {
    e.preventDefault();
    const batchId = extractBatchId(manualBatchId);
    if (!batchId) {
      setErrorMessage("Please enter a valid Batch ID (e.g. HC1024).");
      return;
    }
    stopCamera();
    router.push(`/verify/${batchId}`);
  }

  function handleDemoChipClick(batchId: string) {
    stopCamera();
    router.push(`/verify/${batchId}`);
  }

  function handleFocusFallback() {
    manualInputRef.current?.scrollIntoView({ behavior: "smooth" });
    manualInputRef.current?.focus();
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 py-6 pb-28 flex flex-col items-center text-center">
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between mb-5">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors py-1.5 px-2 -ml-2 rounded-lg"
          aria-label="Return to dashboard"
        >
          <ArrowLeft size={16} />
          <span>Dashboard</span>
        </Link>
        <span className="text-[11px] font-mono tracking-wider uppercase text-text-muted select-none">
          Live Scanner
        </span>
      </div>

      {/* Screen Title */}
      <div className="w-full text-left mb-5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-honey font-semibold block mb-1">
          Consumer Verification
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-primary leading-tight">
          Scan Honey QR
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-text-muted leading-relaxed">
          Point your camera at the QR code on your honey package to verify its authentic origin.
        </p>
      </div>

      {/* Camera Viewfinder Box */}
      <div className="relative w-full aspect-square max-w-[300px] rounded-2xl bg-surface border border-border-subtle overflow-hidden flex items-center justify-center shadow-xs">
        {/* Live Video Preview */}
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            cameraState === "scanning" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Viewfinder Packaging Brackets */}
        <div className="absolute inset-4 pointer-events-none">
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-honey rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-honey rounded-tr-sm" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-honey rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-honey rounded-br-sm" />
        </div>

        {/* Continuous Looping Laser Scan Line (active during scanning) */}
        {cameraState === "scanning" && (
          <div
            className="qr-scan-line pointer-events-none absolute inset-x-4 top-4 h-[2px] bg-honey shadow-[0_0_8px_#C99532,0_0_2px_#FFFFFF] animate-qr-laser"
            aria-hidden="true"
          />
        )}

        {/* Loading / Initializing State */}
        {cameraState === "initializing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-surface">
            <Camera size={28} className="text-honey animate-pulse mb-2.5" />
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Starting camera...
            </span>
          </div>
        )}

        {/* Permission Denied / Error State */}
        {(cameraState === "permission_denied" || cameraState === "error") && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-surface gap-3">
            <div className="w-10 h-10 rounded-full bg-[#A33A32]/10 flex items-center justify-center text-status-error">
              <WarningCircle size={22} weight="fill" />
            </div>
            <p className="text-xs font-medium text-text-main leading-snug">
              {errorMessage || "Camera is currently unavailable."}
            </p>
            <div className="flex flex-col gap-2 w-full max-w-[200px]">
              <button
                type="button"
                onClick={startScanner}
                className="text-xs py-2 px-3 rounded-lg bg-surface border border-border-subtle text-primary font-medium hover:border-honey transition-colors cursor-pointer"
              >
                Try Camera Again
              </button>
              <button
                type="button"
                onClick={handleFocusFallback}
                className="text-xs py-2 px-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors cursor-pointer"
              >
                Enter Batch ID
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Unrecognized QR Warning Modal / Banner */}
      {unrecognizedCode && (
        <div className="w-full max-w-[300px] mt-3 p-3 rounded-xl bg-[#A66A16]/10 border border-[#A66A16]/20 text-[#A66A16] text-xs text-left flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 font-semibold">
            <WarningCircle size={15} weight="fill" />
            <span>QR code not recognized</span>
          </div>
          <p className="text-[11px] text-text-muted leading-tight truncate">
            Scanned: {unrecognizedCode}
          </p>
          <button
            type="button"
            onClick={() => setUnrecognizedCode(null)}
            className="self-start text-[11px] font-semibold text-primary underline underline-offset-2 hover:text-honey transition-colors cursor-pointer pt-0.5"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Fallback Manual Entry Section */}
      <div className="w-full max-w-sm mt-7 pt-6 border-t border-border-subtle text-left">
        <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-2 font-medium">
          Having trouble? Enter Batch ID
        </span>

        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <input
            ref={manualInputRef}
            type="text"
            placeholder="e.g. HC1024"
            value={manualBatchId}
            onChange={(e) => {
              setManualBatchId(e.target.value);
              setErrorMessage(null);
            }}
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-surface border border-border-subtle text-text-main font-mono text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-border-focus uppercase min-h-[44px]"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-medium hover:bg-primary-hover active:scale-[0.98] transition-all flex items-center gap-1.5 min-h-[44px] cursor-pointer"
          >
            <span>Verify</span>
            <ArrowRight size={14} weight="bold" />
          </button>
        </form>

        {/* Demo Batch Quick-Tap Chips */}
        <div className="mt-3.5 flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono text-text-muted/80 flex items-center gap-1">
            <Sparkle size={12} className="text-honey" />
            Demo IDs:
          </span>
          {["HC1024", "HC1018", "HC1011"].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => handleDemoChipClick(chip)}
              className="text-xs font-mono px-2 py-1 rounded-lg bg-surface border border-border-subtle text-primary hover:border-honey/60 hover:text-honey transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
