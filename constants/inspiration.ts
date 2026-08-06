export interface InspirationItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  /** Self-hosted vertical clip (mp4) — plays automatically when scrolled
   *  into view, pauses when scrolled away. Drop files into public/videos/inspiration/. */
  video: string;
  /** Still frame shown before the video loads/plays. */
  poster: string;
  /** Where the "View on Instagram" button links to — your real reel. */
  instagramUrl: string;
}

export const INSPIRATION_ITEMS: InspirationItem[] = [
  {
    id: "insp-1",
    title: "Coastal Calm",
    subtitle: "Living Room",
    category: "minimal",
    video: "/videos/inspiration/coastal-calm.mp4",
    poster: "/images/inspiration/1.jpg",
    instagramUrl: "https://www.instagram.com/reel/DbkLsBDySmv/?igsh=ZzVyd282Mzdpc3Iy",
  },
  {
    id: "insp-2",
    title: "Warm Minimalism",
    subtitle: "Kitchen",
    category: "kitchen",
    video: "https://www.instagram.com/reel/DbUuaptylXN/?igsh=MXdlb2xpam1jYzY5cQ==",
  },
  {
    id: "insp-3",
    title: "Modern Heritage",
    subtitle: "Bedroom",
    category: "modern",
    video: "/videos/inspiration/modern-heritage.mp4",
    poster: "/images/inspiration/3.jpg",
    instagramUrl: "https://www.instagram.com/reel/Dbe4gTiSTbo/?igsh=MWNhczIyaDdqYXI0ag==",
  },
  {
    id: "insp-4",
    title: "Quiet Luxury",
    subtitle: "Living Room",
    category: "luxury",
    video: "/videos/inspiration/quiet-luxury.mp4",
    poster: "/images/inspiration/4.jpg",
    instagramUrl: "https://www.instagram.com/reel/DbhcJcjCrGb/?igsh=MTlkOWFyY29lOGM4Mg==",
  },
  {
    id: "insp-5",
    title: "Natural Wood",
    subtitle: "Dining",
    category: "wood",
    video: "/videos/inspiration/natural-wood.mp4",
    poster: "/images/inspiration/5.jpg",
    instagramUrl: "https://www.instagram.com/reel/Dbf3zlqyCiN/?igsh=MW03djQyZ2RjcDJvOQ==",
  },
  {
    id: "insp-6",
    title: "Executive Focus",
    subtitle: "Office",
    category: "office",
    video: "/videos/inspiration/executive-focus.mp4",
    poster: "/images/inspiration/6.jpg",
    instagramUrl: "https://instagram.com/reel/REPLACE_ME_6",
  },
  {
    id: "insp-7",
    title: "Classic Comfort",
    subtitle: "Bedroom",
    category: "classic",
    video: "/videos/inspiration/classic-comfort.mp4",
    poster: "/images/inspiration/7.jpg",
    instagramUrl: "https://instagram.com/reel/REPLACE_ME_7",
  },
  {
    id: "insp-8",
    title: "Soft Contrast",
    subtitle: "Living Room",
    category: "modern",
    video: "/videos/inspiration/soft-contrast.mp4",
    poster: "/images/inspiration/8.jpg",
    instagramUrl: "https://instagram.com/reel/REPLACE_ME_8",
  },
];
