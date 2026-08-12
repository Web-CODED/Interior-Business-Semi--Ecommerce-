import { Playfair_Display, Inter } from "next/font/google";

// Body font — already used across the site.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Serif display font, used only for the Hero headline to match the
// "Inspire Comfort & Style" reference — never used elsewhere on the site.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});
