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

// Full 4-step flow reference. Only step 0 (bhk-type) is built right now —
// the rest are here so the progress bar labels are correct and so the
// next steps have an obvious place to slot in later.
export const ESTIMATE_STEPS = [
  { id: "bhk-type", label: "BHK Type" },
  { id: "property-details", label: "Property Details" },
  { id: "budget", label: "Budget" },
  { id: "contact", label: "Contact" },
] as const;
