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
}

export const KITCHEN_LAYOUT_OPTIONS: KitchenLayoutOption[] = [
  { id: "l-shaped", label: "L-shaped" },
  { id: "straight", label: "Straight" },
  { id: "u-shaped", label: "U-shaped" },
  { id: "parallel", label: "Parallel" },
];
