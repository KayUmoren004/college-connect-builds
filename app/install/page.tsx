import type { Metadata } from "next";
import { PasswordGate } from "@/components/site/password-gate";
import { InstallCard } from "@/components/site/install-card";

export const metadata: Metadata = {
  title: "Install Dev Build",
  robots: { index: false, follow: false },
};

export default function InstallPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <PasswordGate>
        <InstallCard />
      </PasswordGate>
    </div>
  );
}
