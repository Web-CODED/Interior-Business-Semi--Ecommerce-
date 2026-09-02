import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, playfair } from "@/lib/fonts";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { FakeVisitorNotification } from "@/components/ui/FakeVisitorNotification";

const SITE_URL = "https://www.ganpatiinteriors.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ganpati Interiors — Complete Interior & Décor Solutions",
  description:
    "Interiors crafted around how you actually live. Kitchen, living room, bedroom and office design with a premium, considered finish.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ganpati Interiors — Complete Interior & Décor Solutions",
    description:
      "Interiors crafted around how you actually live. Kitchen, living room, bedroom and office design with a premium, considered finish.",
    url: SITE_URL,
    siteName: "Ganpati Interiors",
    images: ["/icon.png"],
    locale: "en_IN",
    type: "website",
  },
  // Geo tags — helps local Google search recognize the business location.
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Siliguri",
    "geo.position": "26.7271;88.3953",
    ICBM: "26.7271, 88.3953",
  },
};

// theme-color and other viewport-level meta live in a separate export in
// Next.js 15 — metadata.themeColor is deprecated.
export const viewport: Viewport = {
  themeColor: "#F56A4F",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ganpati Interiors",
  description:
    "Complete interior and décor solutions in Siliguri — modular kitchens, false ceilings, furniture and full-home design, built around how you actually live.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/icon.png`,
  telephone: "+917679147001",
  email: "ganpatiinteriorsupport@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pradhan Nagar",
    addressLocality: "Siliguri",
    addressRegion: "West Bengal",
    postalCode: "734003",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.7271,
    longitude: 88.3953,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.instagram.com/ganpati_interiors?igsh=MWNhcHY3eGJsbXpxcg==&igsi=MWNhcHY3eGJsbXpxcg==",
    "https://www.facebook.com/share/1JPHCCdiYo/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="pb-[68px] lg:pb-0">
        <MobileMenuProvider>
          {children}
          <MobileDrawer />
          <BottomNav />
          <FloatingWhatsApp />
          <FakeVisitorNotification />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
