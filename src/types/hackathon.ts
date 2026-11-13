export type HackathonBadgeVariant = "award" | "runner-up" | "build";

export interface HackathonImage {
  src: string;
  alt: string;
  objectPosition?: "left" | "center" | "right";
}

export interface HackathonEntry {
  id: string;
  name: string;
  year: string;
  badge: string;
  badgeVariant: HackathonBadgeVariant;
  event: string;
  sponsors?: string;
  projectName: string;
  summary: string;
  role: string[];
  team: string[];
  contributions: string[];
  technicalFocus: string[];
  /** Plain sentence describing the tools and skills used */
  technicalSummary?: string;
  result: string;
  images?: HackathonImage[];
}
