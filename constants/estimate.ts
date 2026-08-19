export interface BhkSizeOption {
  id: string;
  label: string;
  description: string;
}

export interface BhkTypeOption {
  id: string;
  label: string;
  hasSizeOptions: boolean;
  sizeOptions?: BhkSizeOption[];
}

export const BHK_TYPE_OPTIONS: BhkTypeOption[] = [
  {
    id: "1bhk",
    label: "1 BHK",
    hasSizeOptions: false,
  },
  {
    id: "2bhk",
    label: "2 BHK",
    hasSizeOptions: true,
    sizeOptions: [
      { id: "small", label: "Small", description: "Below 900 sq ft" },
      { id: "large", label: "Large", description: "Above 900 sq ft" },
    ],
  },
  {
    id: "3bhk",
    label: "3 BHK",
    hasSizeOptions: true,
    sizeOptions: [
      { id: "small", label: "Small", description: "Below 1200 sq ft" },
      { id: "large", label: "Large", description: "Above 1200 sq ft" },
    ],
  },
  {
    id: "4bhk",
    label: "4 BHK",
    hasSizeOptions: true,
    sizeOptions: [
      { id: "small", label: "Small", description: "Below 1800 sq ft" },
      { id: "large", label: "Large", description: "Above 1800 sq ft" },
    ],
  },
  {
    id: "5bhk_plus",
    label: "5 BHK+",
    hasSizeOptions: false,
  },
];

export interface KitchenLayoutOption {
  id: string;
  label: string;
  /** Path under /public pointing at the layout illustration */
  image: string;
}

export const KITCHEN_LAYOUT_OPTIONS: KitchenLayoutOption[] = [
  {
    id: "l-shaped",
    label: "L-shaped",
    image: "/images/kitchen-layouts/l-shaped.png",
  },
  {
    id: "straight",
    label: "Straight",
    image: "/images/kitchen-layouts/straight.png",
  },
  {
    id: "u-shaped",
    label: "U-shaped",
    image: "/images/kitchen-layouts/u-shaped.png",
  },
  {
    id: "parallel",
    label: "Parallel",
    image: "/images/kitchen-layouts/parallel.png",
  },
];

export interface WardrobeHeightOption {
  id: string;
  label: string;
}

export const WARDROBE_HEIGHT_OPTIONS: WardrobeHeightOption[] = [
  { id: "4ft", label: "4 ft" },
  { id: "6ft", label: "6 ft" },
  { id: "7ft", label: "7 ft" },
  { id: "9ft", label: "9 ft" },
];

// Matches the Livspace reference: 7 ft comes pre-selected as the "standard" size.
export const DEFAULT_WARDROBE_HEIGHT_ID = "7ft";
