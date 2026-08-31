export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { id: "customers", value: 100, suffix: "+", label: "Happy Customers" },
  { id: "projects", value: 100, suffix: "+", label: "Projects Delivered" },
  { id: "cities", value: 10, suffix: "+", label: "Cities Served" },
  { id: "years", value: 8, suffix: "+", label: "Years of Experience" },
];
