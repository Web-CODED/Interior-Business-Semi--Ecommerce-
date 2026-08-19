import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { privacyPolicySections, legalMeta } from "@/constants/legal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${legalMeta.companyName}`,
  description: `Learn how ${legalMeta.companyName} collects, uses, and protects your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={legalMeta.lastUpdatedPrivacy}
      sections={privacyPolicySections}
    />
  );
}
