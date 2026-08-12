// Content for the fake-visitor social proof notification.
// Never hardcoded into the component — matches the project's
// single-source-of-truth convention.

export const socialProofNames: string[] = [
  "Priya",
  "Suresh",
  "Ananya",
  "Rajesh",
  "Meera",
  "Vikram",
  "Sneha",
  "Arjun",
  "Kavita",
  "Rohan",
  "Divya",
  "Amit",
  "Pooja",
  "Sanjay",
  "Neha",
  "Manoj",
  "Ritu",
  "Deepak",
  "Swati",
  "Anil",
];

export const socialProofLocations: string[] = [
  "Siliguri",
  "Alipurduar",
  "Sikkim",
  "Darjeeling",
  "Kalimpong",
];

export interface SocialProofVisitor {
  name: string;
  location: string;
  minutesAgo: number;
}

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomVisitor(): SocialProofVisitor {
  return {
    name: randomItem(socialProofNames),
    location: randomItem(socialProofLocations),
    minutesAgo: randomBetween(1, 45),
  };
}

export function formatMinutesAgo(minutes: number): string {
  if (minutes < 2) return "just now";
  return `${minutes} minutes ago`;
}
