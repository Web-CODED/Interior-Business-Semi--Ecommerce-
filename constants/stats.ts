export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { id: "customers", value: 10000, suffix: "+", label: "Happy Customers" },
  { id: "projects", value: 500, suffix: "+", label: "Projects Delivered" },
  { id: "cities", value: 25, suffix: "+", label: "Cities Served" },
  { id: "years", value: 12, suffix: "+", label: "Years of Experience" },
];
