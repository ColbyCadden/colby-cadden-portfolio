export type HackathonBadgeVariant = "award" | "build";

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
  result: string;
}
