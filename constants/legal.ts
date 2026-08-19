export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export const legalMeta = {
  companyName: "Ganpati Interiors",
  lastUpdatedTerms: "19 August 2026",
  lastUpdatedPrivacy: "19 August 2026",
  contactEmail: "[email protected]",
  contactPhone: "[+91 XXXXX XXXXX]",
  address: "[Ganpati Interiors, Siliguri, West Bengal, India]",
};

export const termsAndConditionsSections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      `Welcome to ${legalMeta.companyName}. These Terms and Conditions ("Terms") govern your access to and use of our website, catalogues, estimate calculator, and consultation services (collectively, the "Services"). By browsing this website or submitting any form on it, you agree to be bound by these Terms.`,
      "If you do not agree with any part of these Terms, please discontinue use of the website.",
    ],
  },
  {
    id: "definitions",
    title: "2. Definitions",
    bullets: [
      '"We", "us", "our" refers to Ganpati Interiors.',
      '"You", "user", "client" refers to any person accessing or using the website.',
      '"Services" refers to interior design consultation, planning, execution, and related offerings described on this website.',
      '"Content" refers to all text, images, graphics, layouts, and designs published on this website.',
    ],
  },
  {
    id: "use-of-website",
    title: "3. Use of the Website",
    paragraphs: [
      "You agree to use this website only for lawful purposes. You must not misuse the website by knowingly introducing viruses, attempting unauthorised access, or engaging in any activity that could damage, disable, or impair the website.",
      "We reserve the right to restrict or terminate access to the website for anyone who violates these Terms.",
    ],
  },
  {
    id: "services-description",
    title: "4. Description of Services",
    paragraphs: [
      "Ganpati Interiors provides residential and commercial interior design services, including consultation, design planning, material selection, and project execution. Details of our services, past work, and product catalogues are presented on this website for informational purposes.",
    ],
  },
  {
    id: "estimates-consultations",
    title: "5. Estimates & Consultation Requests",
    paragraphs: [
      "Any estimate generated through our online calculator, or discussed during an initial consultation, is indicative only. It is based on the limited information you provide and does not constitute a binding quotation or contract.",
      "A final, binding price will only be issued after a detailed site visit, requirement discussion, and formal written quotation signed by both parties. Submitting a form on this website does not create any obligation on either party to proceed with a project.",
    ],
  },
  {
    id: "catalogue",
    title: "6. Catalogue & Product Information",
    paragraphs: [
      "Product images, finishes, colours, and dimensions shown in our catalogues are for representation purposes. Actual materials may vary slightly due to photography, screen display settings, batch variation, or manufacturer changes.",
      "Availability of specific products, materials, or finishes is subject to change without notice and will be confirmed at the time of order.",
    ],
  },
  {
    id: "pricing-payments",
    title: "7. Pricing & Payments",
    paragraphs: [
      "All prices communicated during consultations or in formal quotations are in Indian Rupees (INR) unless stated otherwise, and are subject to applicable taxes. Payment terms, schedules, and milestones will be defined in the project agreement signed prior to commencement of work.",
    ],
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    paragraphs: [
      "All content on this website, including text, images, logos, design layouts, and project photography, is the property of Ganpati Interiors unless otherwise credited, and is protected under applicable intellectual property laws.",
      "You may not reproduce, distribute, or commercially exploit any content from this website without our prior written consent.",
    ],
  },
  {
    id: "user-conduct",
    title: "9. User Conduct",
    paragraphs: [
      "When submitting forms or communicating with us, you agree to provide accurate and truthful information. You must not impersonate any person or entity, or submit false enquiry details.",
    ],
  },
  {
    id: "third-party-links",
    title: "10. Third-Party Services & Links",
    paragraphs: [
      "This website may link to or embed third-party services, including WhatsApp, Google Maps, and social media platforms. We are not responsible for the content, privacy practices, or availability of these third-party services. Your use of them is governed by their respective terms and policies.",
    ],
  },
  {
    id: "limitation-liability",
    title: "11. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Ganpati Interiors shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website, including reliance on any estimate, catalogue information, or content displayed here.",
      "Nothing in these Terms limits liability that cannot be excluded under applicable Indian law.",
    ],
  },
  {
    id: "indemnification",
    title: "12. Indemnification",
    paragraphs: [
      "You agree to indemnify and hold Ganpati Interiors harmless from any claims, damages, or expenses arising from your misuse of the website or violation of these Terms.",
    ],
  },
  {
    id: "governing-law",
    title: "13. Governing Law & Jurisdiction",
    paragraphs: [
      "These Terms are governed by the laws of India. Any disputes arising out of or relating to these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in Siliguri, West Bengal.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "14. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time to reflect changes in our services or legal requirements. The updated version will be posted on this page with a revised date. Continued use of the website after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "contact",
    title: "15. Contact Us",
    paragraphs: [
      "If you have any questions about these Terms, please reach out to us:",
    ],
    bullets: [
      `Email: ${legalMeta.contactEmail}`,
      `Phone: ${legalMeta.contactPhone}`,
      `Address: ${legalMeta.address}`,
    ],
  },
];

export const privacyPolicySections: LegalSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    paragraphs: [
      `${legalMeta.companyName} ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have.`,
      "By using this website, you consent to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    paragraphs: [
      "We collect information in the following ways:",
    ],
    bullets: [
      "Contact & enquiry details you submit through our estimate calculator or consultation form — such as name, phone number, email address, city, property type, budget range, and project message.",
      "Newsletter subscription — your email address, if you choose to subscribe.",
      "Communication data — messages exchanged via our WhatsApp chat button or direct calls/emails.",
      "Usage data — general information such as browser type, device type, and pages visited, collected automatically for site performance purposes.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Respond to your consultation or estimate requests.",
      "Prepare project quotations and coordinate site visits.",
      "Send updates, newsletters, or promotional communication, where you have opted in.",
      "Improve our website, services, and customer experience.",
      "Comply with legal obligations where applicable.",
    ],
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    paragraphs: [
      "We process your personal information on the basis of your consent when submitting a form, our legitimate interest in responding to enquiries and improving our services, and, where applicable, to take steps toward entering into a service agreement with you.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking Technologies",
    paragraphs: [
      "This website may use cookies and similar technologies to remember preferences and understand how visitors use the site. You can control or disable cookies through your browser settings; doing so may affect certain website features.",
    ],
  },
  {
    id: "third-party-services",
    title: "6. Third-Party Services",
    paragraphs: [
      "We use trusted third-party services to operate this website:",
    ],
    bullets: [
      "Vercel — website hosting and deployment.",
      "Google Maps — embedded on our Contact/Footer section to display our office location.",
      "WhatsApp Business — for direct chat enquiries via the floating chat button.",
    ],
  },
  {
    id: "data-storage",
    title: "7. Data Storage & Security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect your information from unauthorised access, alteration, or disclosure. At present, form submissions are reviewed directly by our team; we are in the process of integrating secure backend storage (via Supabase) to manage consultation submissions going forward.",
      "No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "data-retention",
    title: "8. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as necessary to respond to your enquiry, deliver our services, or comply with legal obligations, after which it is deleted or anonymised.",
    ],
  },
  {
    id: "your-rights",
    title: "9. Your Rights",
    paragraphs: [
      "Depending on applicable law, you may have the right to:",
    ],
    bullets: [
      "Request access to the personal information we hold about you.",
      "Request correction of inaccurate information.",
      "Request deletion of your personal information.",
      "Withdraw consent to marketing communication at any time.",
    ],
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    paragraphs: [
      "Our website and services are not directed at children under 18. We do not knowingly collect personal information from minors.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated version will be posted here with a revised date.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Us",
    paragraphs: [
      "For any questions or requests regarding your personal information, contact us:",
    ],
    bullets: [
      `Email: ${legalMeta.contactEmail}`,
      `Phone: ${legalMeta.contactPhone}`,
      `Address: ${legalMeta.address}`,
    ],
  },
];
