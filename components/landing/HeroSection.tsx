import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroVisualPlaceholder } from "./HeroVisualPlaceholder";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function HeroSection() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. MOBILE HERO (lg:hidden)                                   */}
      {/* Honey GIF as full-bleed clipped background, content placed   */}
      {/* above center with larger 'Know' and 'comes' typography.      */}
      {/* ============================================================ */}
      <section className="relative w-full lg:hidden overflow-hidden min-h-[100svh] flex flex-col justify-between px-4 sm:px-6 pt-20 pb-8 sm:pb-10 bg-[#121815]">
        {/* Background GIF Layer (Clipped at hero boundary) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/honey-BG.gif"
            alt="Golden honeycomb with honey dripping from a wooden dipper"
            fill
            priority
            unoptimized
            className="object-cover object-[center_4%]"
            sizes="(max-width: 1024px) 100vw, 1px"
          />
          {/* Subtle uniform tint for contrast without artificial gradients */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Above-Center Hero Content Layer */}
        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center pt-6 sm:pt-12">
          {/* Headline: Editorial serif with larger "Know" and "comes" */}
          <h1 className="font-serif text-center text-[#FAF9F5] leading-[1.2] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] max-w-xs sm:max-w-sm">
            <span className="text-[38px] sm:text-[46px] font-medium text-white inline-block">
              Know
            </span>{" "}
            <span className="text-[23px] sm:text-[28px] text-[#FAF9F5]/90 font-normal">
              where your honey
            </span>
            <br />
            <span className="text-[38px] sm:text-[46px] font-medium text-white inline-block">
              comes
            </span>{" "}
            <span className="text-[23px] sm:text-[28px] text-[#FAF9F5]/90 font-normal">
              from.
            </span>
          </h1>

          {/* Supporting Copy: Light readable text */}
          <p className="mt-3 sm:mt-3.5 text-[13.5px] sm:text-[14.5px] text-[#FAF9F5]/85 leading-relaxed text-center max-w-xs sm:max-w-sm drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Verify the origin, batch, and journey of your honey with one simple scan. Transparent, unadulterated food tracking directly from the beekeeper.
          </p>
        </div>

        {/* Primary CTA: Bottom anchored for comfortable thumb ergonomics */}
        <div className="relative z-10 w-full max-w-md mx-auto mt-auto pt-6 flex justify-center">
          <Button
            href="/login"
            variant="primary"
            size="lg"
            className="group gap-2.5 w-full text-base font-medium px-8 py-3.5 rounded-xl bg-[#173C2C] text-white hover:bg-[#112F22] active:scale-[0.98] transition-all min-h-[48px] border border-white/20 shadow-xs"
          >
            <span>Get Started</span>
            <ArrowRight
              size={18}
              weight="bold"
              className="transition-transform group-hover:translate-x-1"
            />
          </Button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. DESKTOP HERO (hidden lg:block)                            */}
      {/* Preserves original desktop structure without GIF.            */}
      {/* ============================================================ */}
      <section className="hidden lg:block w-full pt-20 pb-20 px-6 bg-bg">
        <div className="max-w-5xl mx-auto flex flex-row items-center gap-14">
          {/* Left Column: Copy & Action */}
          <div className="w-1/2 flex flex-col text-left">
            <h1 className="font-serif text-[48px] font-normal tracking-tight text-primary leading-[1.12]">
              Know where your honey comes from.
            </h1>

            <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-xl">
              Verify the origin, batch, and journey of your honey with one simple scan. Transparent, unadulterated food tracking directly from the beekeeper.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Button
                href="/login"
                variant="primary"
                size="lg"
                className="group gap-2.5 text-base font-medium px-8 py-3.5 rounded-xl bg-primary text-white hover:bg-primary-hover active:scale-[0.98] transition-all min-h-[48px]"
              >
                <span>Get Started</span>
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>

            <div className="mt-8 pt-5 border-t border-border-subtle/80 flex items-center gap-6 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-honey shrink-0"></span>
                <span>100% Lab Verified Origin</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-status-success shrink-0"></span>
                <span>Tamper-evident Batches</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition Placeholder */}
          <div className="w-1/2 flex justify-end">
            <HeroVisualPlaceholder />
          </div>
        </div>
      </section>
    </>
  );
}
