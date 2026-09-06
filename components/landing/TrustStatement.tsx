import React from "react";
import { MapPin, CalendarCheck, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

interface TrustPillar {
  num: string;
  tag: string;
  icon: typeof MapPin;
  title: string;
  desc: string;
  badge: string;
}

const trustPillars: TrustPillar[] = [
  {
    num: "01",
    tag: "ORIGIN",
    icon: MapPin,
    title: "Direct Apiary Geolocation",
    desc: "Coordinates recorded directly at the hive. Every jar traces back to a verified regional beekeeper, certified floral reserve, and monitored colony.",
    badge: "GPS ±3m Geofenced",
  },
  {
    num: "02",
    tag: "HARVEST",
    icon: CalendarCheck,
    title: "Immutable Harvest Log",
    desc: "Exact extraction timestamp, floral bloom variety (Acacia, Mustard, Wildflower), and comb capping maturity sealed at the source.",
    badge: "Tamper-Evident Timestamp",
  },
  {
    num: "03",
    tag: "PURITY",
    icon: ShieldCheck,
    title: "100% Raw Lab Verification",
    desc: "Unheated, cold-centrifuged honey with certified moisture below 18%. Zero high-fructose corn syrup, zero inverted sugar adulteration.",
    badge: "FSSAI Grade A Certified",
  },
];

export function TrustStatement() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 bg-surface border-y border-border-subtle">
      <div className="max-w-5xl mx-auto">
        {/* Section Header: Compact editorial balance */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-6 pb-5 sm:pb-6 border-b border-border-subtle">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-widest font-mono text-honey font-semibold block mb-1">
              The Honey Chain Standard
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-tight text-primary leading-tight">
              Trace. Verify. Trust.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-text-muted leading-relaxed">
            Opaque supply chains make authentic purity rare. Honey Chain creates an immutable digital lineage from forest apiary to your table.
          </p>
        </div>

        {/* 3 Compact Modern Editorial Cards */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-bg/50 border border-border-subtle hover:bg-bg hover:border-honey/40 transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Monospace Step Index & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-honey">
                      {pillar.num} • {pillar.tag}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-primary group-hover:text-honey group-hover:border-honey/40 transition-colors shadow-2xs">
                      <Icon size={16} weight="duotone" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] sm:text-base font-semibold text-primary tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-[13px] text-text-muted leading-snug">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Authenticity Chip */}
                <div className="mt-4 pt-3 border-t border-border-subtle/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-success shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-medium">
                    {pillar.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
