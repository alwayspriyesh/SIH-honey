import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { QRVerificationDemo } from "@/components/landing/QRVerificationDemo";
import { TrustStatement } from "@/components/landing/TrustStatement";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { VerificationCTA } from "@/components/landing/VerificationCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text-main selection:bg-honey/20 selection:text-primary">
      {/* 1. Mobile Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* 2. Hero Section (Mobile full-bleed GIF backdrop + Desktop preserved) */}
        <HeroSection />

        {/* 3. QR Verification Demo ("Scan. Verify. Know." + QR scan animation + 4-step scan flow) */}
        <QRVerificationDemo />

        {/* 4. Trust & Value Statement ("Trace. Verify. Trust.") */}
        <TrustStatement />

        {/* 5. How It Works - Editorial 4-stage Supply Chain Timeline */}
        <HowItWorks />

        {/* 6. Verification Prompt Call To Action */}
        <VerificationCTA />
      </main>

      {/* 7. Minimalist Footer */}
      <Footer />
    </div>
  );
}
