"use client";

import React, { useEffect, useRef, useState } from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Farm",
    desc: "Nectar harvested from verified forest apiaries and sustainable beekeeper cooperatives.",
  },
  {
    num: "02",
    title: "Harvest",
    desc: "Maturity and natural moisture levels are recorded at the comb upon extraction.",
  },
  {
    num: "03",
    title: "Processing",
    desc: "Gentle cold filtration preserving active enzymes and natural pollen integrity.",
  },
  {
    num: "04",
    title: "You",
    desc: "Instant QR scan reveals the authentic origin, batch record, and journey in your hands.",
  },
];

export function HowItWorks() {
  const [lineDrawn, setLineDrawn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If reduced motion is preferred, CSS @media handles instant line rendering
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // IntersectionObserver triggers the line draw as section enters view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "100px 0px 0px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Safety fallback: ensure line is fully drawn within 800ms regardless of observer
    const fallback = setTimeout(() => setLineDrawn(true), 800);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-xl mb-10 sm:mb-14 text-left">
          <p className="text-xs uppercase tracking-widest font-mono text-honey mb-2 font-medium">
            Traceability Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary leading-tight">
            How verification works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed">
            Every batch follows a documented timeline from the hive to your kitchen table.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative">
          {/* Desktop horizontal connecting rule: draws left to right */}
          <div
            className="hidden md:block absolute top-3.5 left-4 right-4 h-[1px] bg-border-subtle/40 overflow-hidden z-0"
            aria-hidden="true"
          >
            <div
              className="timeline-line h-full bg-border-subtle transition-[width] duration-1000 ease-out"
              style={{ width: lineDrawn ? "100%" : "0%" }}
            />
          </div>

          {/* Mobile vertical connecting line: draws top to bottom */}
          <div
            className="md:hidden absolute top-3.5 left-3.5 bottom-12 w-[1px] bg-border-subtle/40 overflow-hidden z-0"
            aria-hidden="true"
          >
            <div
              className="timeline-line w-full bg-border-subtle transition-[height] duration-1000 ease-out"
              style={{ height: lineDrawn ? "100%" : "0%" }}
            />
          </div>

          {/* Step items: ALWAYS 100% visible, never hidden at opacity-0 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="timeline-step relative flex md:flex-col gap-4 md:gap-0 opacity-100"
              >
                {/* Step Marker */}
                <div className="flex-shrink-0">
                  <div className="w-7 h-7 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-primary text-xs font-mono font-medium shadow-2xs">
                    {step.num}
                  </div>
                </div>

                {/* Step Content */}
                <div className="md:mt-4 text-left">
                  <h3 className="text-base font-semibold text-primary tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
