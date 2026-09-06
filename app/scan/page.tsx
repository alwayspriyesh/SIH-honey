import React from "react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { QRScanner } from "@/components/scan/QRScanner";
import { BottomNavigation } from "@/components/navigation/BottomNavigation";

export default function ScanPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-bg text-text-main pb-20">
        <main className="flex-1 flex flex-col items-center">
          <QRScanner />
        </main>
        <BottomNavigation />
      </div>
    </AuthGuard>
  );
}
