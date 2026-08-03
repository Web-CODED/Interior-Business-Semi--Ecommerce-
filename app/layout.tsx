import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { BottomNav } from "@/components/layout/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ganpati Interiors — Complete Interior & Décor Solutions",
  description:
    "Interiors crafted around how you actually live. Kitchen, living room, bedroom and office design with a premium, considered finish.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="pb-[68px] lg:pb-0">
        <MobileMenuProvider>
          {children}
          <MobileDrawer />
          <BottomNav />
        </MobileMenuProvider>
      </body>
    </html>
  );
}
