import React from "react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { VerificationResult } from "@/components/verify/VerificationResult";
import { BottomNavigation } from "@/components/navigation/BottomNavigation";

export default function VerifyPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen flex flex-col bg-bg text-text-main pb-20">
        <main className="flex-1 flex flex-col items-center">
          <VerificationResult />
        </main>
        <BottomNavigation />
      </div>
    </AuthGuard>
  );
}
