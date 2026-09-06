import React from "react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ScanActionCard } from "@/components/dashboard/ScanActionCard";
import { ScanSummary } from "@/components/dashboard/ScanSummary";
import { InspectorSpotlightCard } from "@/components/dashboard/InspectorSpotlightCard";
import { TerroirOriginCard } from "@/components/dashboard/TerroirOriginCard";
import { PurityBenchmarksCard } from "@/components/dashboard/PurityBenchmarksCard";
import { RecentScansList } from "@/components/dashboard/RecentScansList";
import { BottomNavigation } from "@/components/navigation/BottomNavigation";

export default function DashboardPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-bg text-text-main pb-24 sm:pb-12">
        {/* Header */}
        <DashboardHeader />

        {/* Dashboard Main Content */}
        <main className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 flex flex-col gap-4 sm:gap-5">
          {/* Primary Action Card: Scan Honey QR & Quick Lookup */}
          <ScanActionCard />

          {/* Compact Summary Statistics */}
          <ScanSummary totalScans={12} verifiedCount={10} reviewCount={2} officersActive={42} />

          {/* Field Officers & Inspector Credential Highlight */}
          <InspectorSpotlightCard />

          {/* Terroir & Geographic Origin Tracker */}
          <TerroirOriginCard />

          {/* FSSAI & NBB Purity Benchmarks */}
          <PurityBenchmarksCard />

          {/* Recent Scans List */}
          <RecentScansList />
        </main>

        {/* Fixed Mobile Bottom Navigation */}
        <BottomNavigation />
      </div>
    </AuthGuard>
  );
}
