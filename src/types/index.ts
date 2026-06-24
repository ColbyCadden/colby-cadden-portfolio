export interface NavItem {
  label: string;
  href: string;
}

export type ProjectPreviewLayout =
  | "mechanical"
  | "vessel"
  | "hackathon"
  | "portfolio";

export interface ProjectHomeFields {
  shortText: string;
  metadata: string;
  layout: ProjectPreviewLayout;
  secondaryImage?: string;
  splitImage?: string;
  resultLine?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  thumbnail: string;
  heroImage: string;
  featured: boolean;
  year: string;
  role: string;
  overview: string;
  highlights: string[];
  techStack: string[];
  images: string[];
  home: ProjectHomeFields;
  /** No hero or gallery images, for meta projects like this site */
  textOnly?: boolean;
  /** Short project narrative, portfolio rebuild page */
  writeup?: string;
  /** One-line context above architecture specs */
  architectureIntro?: string;
  specs?: { label: string; value: string }[];
}

/** @deprecated Prefer Project.home, kept for ProjectPreview props */
export interface ProjectHomePreview {
  slug: string;
  title: string;
  shortText: string;
  metadata: string;
  href: string;
  thumbnail: string;
  layout: ProjectPreviewLayout;
  secondaryImage?: string;
  splitImage?: string;
  resultLine?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  tier: "premier" | "standard";
  proofImage?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  resumeUrl: string;
  resumePreviewImage?: string;
  referenceLetterUrl: string;
  referenceLetterDetail?: string;
  linkedinUrl: string;
  githubUrl: string;
  navItems: NavItem[];
}

export type { CaseStudyContent, CaseStudyMeta } from "./case-study";
