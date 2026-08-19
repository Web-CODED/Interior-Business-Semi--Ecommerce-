import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { termsAndConditionsSections, legalMeta } from "@/constants/legal";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${legalMeta.companyName}`,
  description: `Read the Terms and Conditions governing the use of ${legalMeta.companyName}'s website and interior design services.`,
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated={legalMeta.lastUpdatedTerms}
      sections={termsAndConditionsSections}
    />
  );
}
