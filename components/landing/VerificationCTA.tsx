import React from "react";
import { Button } from "@/components/ui/Button";
import { QrCode, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function VerificationCTA() {
  return (
    <section className="w-full py-12 sm:py-18 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto rounded-3xl bg-primary text-white p-7 sm:p-12 border border-primary-hover relative overflow-hidden">
        <div className="relative z-10 max-w-xl text-left">
          {/* Editorial Eyebrow Label */}
          <p className="text-xs uppercase tracking-widest font-mono text-honey mb-3 font-medium">
            Instant Consumer Verification
          </p>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
            Got a Honey Chain QR code?
          </h2>

          {/* Subtext */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Scan the label on your honey package to immediately view apiary location, harvest timestamp, and lab batch certification.
          </p>

          {/* CTA Action */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              href="/login"
              variant="secondary"
              size="lg"
              className="group gap-2 bg-surface text-primary hover:bg-bg border-none font-semibold w-full sm:w-auto"
            >
              <span>Get Started</span>
              <ArrowRight
                size={18}
                weight="bold"
                className="text-primary transition-transform group-hover:translate-x-0.5"
              />
            </Button>
            <span className="text-xs text-white/60 text-center sm:text-left self-center">
              No account setup needed for demo inspection
            </span>
          </div>
        </div>

        {/* Minimal Decorative Geometry in background (restrained, no glow, pure muted lines) */}
        <div
          className="hidden sm:block absolute right-8 bottom-6 opacity-10 pointer-events-none"
          aria-hidden="true"
        >
          <QrCode size={180} weight="thin" className="text-white" />
        </div>
      </div>
    </section>
  );
}
