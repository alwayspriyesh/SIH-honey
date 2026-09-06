/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  QrCode,
  DownloadSimple,
  CheckCircle,
  Star,
  Certificate,
  Mountains,
  Globe,
  ShareNetwork,
} from "@phosphor-icons/react/dist/ssr";

const BATCHES = [
  {
    id: "HC1001",
    name: "Sundarbans Mangrove Honey",
    location: "South 24 Parganas, West Bengal",
    officer: "Subhashis Bose",
    badge: "NBB-WB-1021",
    rating: 4.9,
    altitude: "4m ASL",
    moisture: "18.1%",
    tag: "Wild Tidal Mangrove",
  },
  {
    id: "HC1002",
    name: "Kashmir White Acacia Honey",
    location: "Ganderbal, Jammu & Kashmir",
    officer: "Dr. Farooq Mir",
    badge: "FSSAI-JK-4402",
    rating: 4.9,
    altitude: "1,620m ASL",
    moisture: "16.8%",
    tag: "Water-White Raw",
  },
  {
    id: "HC1003",
    name: "Coorg Coffee Blossom Honey",
    location: "Kodagu, Karnataka",
    officer: "Vikramaditya Rao",
    badge: "NBB-KA-2190",
    rating: 4.8,
    altitude: "1,050m ASL",
    moisture: "17.6%",
    tag: "Shade Rainforest",
  },
  {
    id: "HC1004",
    name: "Nilgiris Mountain Wildflower",
    location: "Nilgiris, Tamil Nadu",
    officer: "Insp. Ananya Sharma",
    badge: "NBB-TN-3108",
    rating: 4.8,
    altitude: "2,240m ASL",
    moisture: "17.8%",
    tag: "Montane Shola Ridge",
  },
  {
    id: "HC1005",
    name: "Wayanad Raw Forest Honey",
    location: "Wayanad, Kerala",
    officer: "Dr. Ramesh Menon",
    badge: "NBB-KL-4092",
    rating: 4.9,
    altitude: "1,150m ASL",
    moisture: "17.2%",
    tag: "Biosphere Grade A",
  },
  {
    id: "HC1006",
    name: "Kullu Valley Wild Berry",
    location: "Kullu, Himachal Pradesh",
    officer: "Meera Thakur",
    badge: "FSSAI-HP-5510",
    rating: 4.7,
    altitude: "1,850m ASL",
    moisture: "17.0%",
    tag: "Alpine Wild Raspberry",
  },
  {
    id: "HC1007",
    name: "Bharatpur Organic Mustard",
    location: "Bharatpur, Rajasthan",
    officer: "Rajesh Solanki",
    badge: "NBB-RJ-7023",
    rating: 4.8,
    altitude: "180m ASL",
    moisture: "18.4%",
    tag: "Velvety Raw Cream",
  },
  {
    id: "HC1008",
    name: "Corbett Foothills Litchi",
    location: "Ramnagar, Uttarakhand",
    officer: "Dr. Arvind Joshi",
    badge: "FSSAI-UK-3319",
    rating: 4.8,
    altitude: "450m ASL",
    moisture: "17.4%",
    tag: "Orchard Blossom",
  },
  {
    id: "HC1009",
    name: "Mahabaleshwar Jamun Honey",
    location: "Satara, Maharashtra",
    officer: "Sunita Kadam",
    badge: "NBB-MH-8104",
    rating: 4.7,
    altitude: "1,350m ASL",
    moisture: "18.2%",
    tag: "High Antioxidant Dark",
  },
  {
    id: "HC1010",
    name: "Khasi Hills Mandarin Honey",
    location: "East Khasi Hills, Meghalaya",
    officer: "Wanpynsuk Lyngdoh",
    badge: "NBB-ML-9045",
    rating: 4.9,
    altitude: "1,420m ASL",
    moisture: "16.9%",
    tag: "Sacred Grove Citrus",
  },
];

export default function QRCodesPage() {
  const [hostType, setHostType] = useState<"lan" | "github" | "id">("lan");
  const [githubUser, setGithubUser] = useState("alwayspriyesh");
  const origin = useSyncExternalStore(
    () => () => {},
    () => (typeof window !== "undefined" ? window.location.origin : "http://10.40.114.47:3000"),
    () => "http://10.40.114.47:3000"
  );

  return (
    <div className="min-h-screen bg-bg text-text-main py-6 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col gap-6 text-left">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-primary transition-colors py-1 px-2 -ml-2 rounded-lg"
        >
          <ArrowLeft size={16} />
          <span>Dashboard</span>
        </Link>
        <span className="text-[11px] font-mono tracking-wider uppercase text-text-muted select-none">
          SIH QR Test Bench
        </span>
      </div>

      {/* Page Title & Mission */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-honey">
            <QrCode size={18} weight="bold" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-honey font-semibold">
            Certified QR Registry & Generator
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-normal text-primary">
          10 Certified Honey Batches (Ready to Scan)
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-text-muted max-w-2xl leading-relaxed">
          Point your phone camera or the Honey Chain in-app scanner directly at any QR code on this screen. Each code opens the real provenance certificate, inspecting officer credentials, and laboratory NMR purity analysis.
        </p>
      </div>

      {/* Configuration Bar: Select URL target */}
      <div className="p-4 rounded-2xl bg-surface border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold flex items-center gap-1.5">
            <ShareNetwork size={14} className="text-honey" />
            QR Code Payload Mode
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setHostType("lan")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                hostType === "lan"
                  ? "bg-primary text-white"
                  : "bg-bg text-text-muted hover:text-primary border border-border-subtle"
              }`}
            >
              Web App URL ({origin})
            </button>
            <button
              onClick={() => setHostType("github")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                hostType === "github"
                  ? "bg-primary text-white"
                  : "bg-bg text-text-muted hover:text-primary border border-border-subtle"
              }`}
            >
              Raw GitHub URL
            </button>
            <button
              onClick={() => setHostType("id")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                hostType === "id"
                  ? "bg-primary text-white"
                  : "bg-bg text-text-muted hover:text-primary border border-border-subtle"
              }`}
            >
              Direct Batch ID (e.g. HC1001)
            </button>
          </div>
        </div>

        {hostType === "github" && (
          <div className="flex items-center gap-2 pt-2 sm:pt-0">
            <label className="text-xs font-mono text-text-muted">GitHub User:</label>
            <input
              type="text"
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
              className="px-2.5 py-1 rounded-lg bg-bg border border-border-subtle text-xs font-mono text-primary w-32 focus:outline-none focus:border-border-focus"
            />
          </div>
        )}
      </div>

      {/* 10 QR Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BATCHES.map((batch) => {
          const payload =
            hostType === "lan"
              ? `${origin}/verify/${batch.id}`
              : hostType === "github"
              ? `https://raw.githubusercontent.com/${githubUser}/honeychain-batches/main/${batch.id}.json`
              : batch.id;

          return (
            <div
              key={batch.id}
              className="p-5 rounded-2xl bg-surface border border-border-subtle flex flex-col gap-4 shadow-xs"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-border-subtle pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-honey">
                      {batch.id}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#2F6B46]/10 text-status-success flex items-center gap-1">
                      <CheckCircle size={11} weight="fill" />
                      Verified
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-primary mt-1 leading-snug">
                    {batch.name}
                  </h3>
                  <span className="text-xs text-text-muted block">
                    {batch.location}
                  </span>
                </div>

                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-honey/10 text-honey font-mono text-xs font-semibold shrink-0">
                  <Star size={11} weight="fill" />
                  <span>{batch.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Main Body: QR Code & Metadata */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* QR Code Frame */}
                <div className="p-2.5 rounded-xl bg-white border border-border-subtle shadow-xs shrink-0 flex flex-col items-center">
                  <img
                    src={`/qrcodes/${batch.id}.svg`}
                    alt={`QR code for ${batch.id}`}
                    width={150}
                    height={150}
                    className="w-36 h-36 object-contain"
                  />
                  <span className="font-mono text-[10px] text-text-muted mt-1 text-center font-medium max-w-[130px] truncate" title={payload}>
                    {payload}
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2 flex-1 text-xs text-text-muted w-full">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
                      <Certificate size={12} className="text-honey" />
                      Inspecting Officer:
                    </span>
                    <span className="text-primary font-semibold">
                      {batch.officer}
                    </span>
                    <span className="font-mono text-[11px] text-text-muted/80">
                      Badge: {batch.badge}
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5 pt-1 border-t border-border-subtle/70">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
                      <Mountains size={12} className="text-honey" />
                      Elevation & Terroir:
                    </span>
                    <span className="text-text-main font-medium">
                      {batch.altitude} · {batch.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5 pt-1 border-t border-border-subtle/70">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      Moisture Content:
                    </span>
                    <span className="text-primary font-mono font-semibold">
                      {batch.moisture} (Tested & Compliant)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-border-subtle flex items-center justify-between gap-2 text-xs">
                <Link
                  href={`/verify/${batch.id}`}
                  className="px-3.5 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-colors text-center text-xs shadow-2xs"
                >
                  Inspect Provenance Report →
                </Link>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`/qrcodes/${batch.id}.png`}
                    download={`${batch.id}-qr.png`}
                    className="p-2 rounded-lg bg-bg border border-border-subtle hover:border-honey text-text-muted hover:text-primary transition-colors"
                    title="Download PNG QR"
                  >
                    <DownloadSimple size={15} />
                  </a>
                  <a
                    href={`/data/batches/${batch.id}.json`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-2 rounded-lg bg-bg border border-border-subtle hover:border-honey text-text-muted hover:text-primary font-mono text-[11px] transition-colors"
                    title="View Raw JSON"
                  >
                    JSON
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub Export Info Banner */}
      <div className="p-5 rounded-2xl bg-surface border border-border-subtle flex flex-col gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Globe size={18} className="text-honey" />
          <h3 className="text-sm sm:text-base font-semibold text-primary">
            Standalone GitHub Export Ready in Project
          </h3>
        </div>
        <p className="text-xs text-text-muted leading-relaxed">
          All 10 JSON files and high-res vector QR codes are exported to <code className="font-mono bg-bg px-1.5 py-0.5 rounded border border-border-subtle text-primary">batches-github-export/</code>. You can drag and drop that folder directly into a new GitHub repository to host the raw data!
        </p>
      </div>
    </div>
  );
}
