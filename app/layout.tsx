import type { Metadata } from "next";
import "./globals.css";
import { inter, playfair } from "@/lib/fonts";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { BottomNav } from "@/components/layout/BottomNav";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { FakeVisitorNotification } from "@/components/ui/FakeVisitorNotification";

export const metadata: Metadata = {
  title: "Ganpati Interiors — Complete Interior & Décor Solutions",
  description:
    "Interiors crafted around how you actually live. Kitchen, living room, bedroom and office design with a premium, considered finish.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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
