import React from "react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ScanHistoryView } from "@/components/history/ScanHistoryView";
import { BottomNavigation } from "@/components/navigation/BottomNavigation";

export default function HistoryPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-bg text-text-main pb-20">
        <main className="flex-1 flex flex-col items-center">
          <ScanHistoryView />
        </main>
        <BottomNavigation />
      </div>
    </AuthGuard>
  );
}
