import type { LucideIcon } from "lucide-react";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Catalogues", href: "/catalogues" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const SERVICE_LINKS: FooterLink[] = [
  { label: "Modular Kitchen", href: "/catalogues#modular-kitchen" },
  { label: "Bedroom", href: "/catalogues#bedroom" },
  { label: "Living Room", href: "/catalogues#living-room" },
  { label: "Wardrobe", href: "/catalogues#wardrobe" },
  { label: "False Ceiling", href: "/catalogues#false-ceiling" },
  { label: "Pooja Room", href: "/catalogues#pooja-room" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/ganpati_interiors?igsh=MWNhcHY3eGJsbXpxcg==&igsi=MWNhcHY3eGJsbXpxcg==", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/ganpatiinteriors", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export interface ContactRow {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export const CONTACT_ROWS: ContactRow[] = [
  { icon: Phone, label: "Phone", value: "+91 76791 47001", href: "tel:+917679147001" },
  { icon: Mail, label: "Email", value: "ganpatiinteriorsupport@gmail.com", href: "mailto:ganpatiinteriorsupport@gmail.com" },
  {
    icon: MapPin,
    label: "Address",
    value: "Pradhan Nagar, Siliguri 734003",
    href: "https://maps.google.com/?q=Pradhan+Nagar+Siliguri+734003",
  },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat, 10am – 7pm" },
];

export const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
];
