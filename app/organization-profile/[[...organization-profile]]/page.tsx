import { OrganizationProfile } from "@clerk/nextjs";
import { Suspense } from "react";

export default function OrganizationSettingsPage() {
  return (
    <main className="organization-page">
      <Suspense fallback={<p>Loading organization settings…</p>}>
        <OrganizationProfile />
      </Suspense>
    </main>
  );
}
