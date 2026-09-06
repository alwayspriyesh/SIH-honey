import React from "react";
import Link from "next/link";
import { Certificate, Star, ShieldCheck, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const FEATURED_OFFICERS = [
  {
    name: "Dr. Ramesh Menon",
    designation: "Senior Quality & Safety Auditor",
    agency: "National Bee Board (NBB)",
    badgeId: "NBB-KL-4092",
    rating: 4.9,
    reviews: 184,
    station: "Wayanad Regional Lab",
    batchId: "HC1024",
    honeyType: "Forest Honey",
  },
  {
    name: "Insp. Ananya Sharma",
    designation: "Apiculture Quality Auditor",
    agency: "FSSAI & Bee Board Certified",
    badgeId: "NBB-TN-3108",
    rating: 4.8,
    reviews: 142,
    station: "Nilgiris Highland Center",
    batchId: "HC1018",
    honeyType: "Wildflower Honey",
  },
];

export function InspectorSpotlightCard() {
  return (
    <div className="w-full rounded-2xl bg-surface border border-border-subtle p-5 sm:p-6 shadow-xs flex flex-col text-left gap-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-honey/15 flex items-center justify-center text-honey">
            <Certificate size={15} weight="fill" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-honey font-semibold">
            Certified Inspecting Officers
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-text-muted">
          <ShieldCheck size={13} className="text-status-success" weight="bold" />
          FSSAI Accredited
        </span>
      </div>

      <p className="text-xs text-text-muted leading-relaxed -mt-1">
        Every batch logged on Honey Chain is independently tested and signed by certified apiculture officers at field inspection stations.
      </p>

      {/* Officers List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {FEATURED_OFFICERS.map((officer) => (
          <Link
            key={officer.badgeId}
            href={`/verify/${officer.batchId}`}
            className="group p-3.5 rounded-xl bg-bg border border-border-subtle hover:border-honey/40 transition-all flex flex-col gap-2 relative"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold text-primary group-hover:text-primary-hover transition-colors">
                  {officer.name}
                </h4>
                <span className="text-[11px] text-text-muted block">
                  {officer.designation}
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-honey/10 text-honey text-[11px] font-mono font-semibold">
                <Star size={11} weight="fill" />
                <span>{officer.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-border-subtle/70 flex flex-col gap-0.5 text-[11px] text-text-muted">
              <div className="flex items-center justify-between">
                <span className="font-mono text-text-muted/70">Badge:</span>
                <span className="font-mono text-text-main font-medium">{officer.badgeId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-text-muted/70">Station:</span>
                <span className="text-text-main">{officer.station}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-text-muted/70">Latest Batch:</span>
                <span className="text-honey font-mono font-medium flex items-center gap-0.5 group-hover:underline">
                  {officer.batchId} ({officer.honeyType})
                  <ArrowUpRight size={11} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
