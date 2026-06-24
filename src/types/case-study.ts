export interface HeroImage {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain";
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  /** Badge color, success for completed projects */
  statusTone?: "default" | "success";
  projectType: string;
  tools?: string[];
  heroImage: string;
  heroAlt: string;
  /** Hide the FIG.01 hero image block, intro text and tags only */
  hideHeroImage?: boolean;
  /** Supplementary images shown beside the main hero in a collage layout */
  heroGallery?: HeroImage[];
  tags?: string[];
  /** Replaces tag pills with a single end-effector heading in the hero */
  endEffectorTitle?: string;
  /** Optional bullets shown below the subtitle paragraph */
  subtitleBullets?: string[];
  nextProject?: {
    slug: string;
    title: string;
    href: string;
  };
  previousProject?: {
    slug: string;
    title: string;
    href: string;
  };
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface VersionEntry {
  id: string;
  version: string;
  title: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
  /** Multi-image collage shown instead of a single hero image */
  gallery?: HeroImage[];
  spec?: SpecItem[];
}

export interface VisualAsset {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  label: string;
  aspectRatio?: "landscape" | "portrait" | "square" | "wide";
  poster?: string;
  objectFit?: "cover" | "contain";
}

export interface TechnicalSectionContent {
  id: string;
  label: string;
  body?: string;
  bullets?: string[];
  variant?: "default" | "direction";
}

export interface LogbookContent {
  label: string;
  statusNote?: string;
  nextSteps: string[];
}

export interface CaptionedImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: "landscape" | "portrait" | "square" | "wide";
  objectFit?: "cover" | "contain";
  featured?: boolean;
  /** Optional explicit placement in a panel grid */
  gridCell?: {
    colStart?: number;
    rowStart?: number;
    colSpan?: number;
    rowSpan?: number;
  };
}

export interface ProcessImageGroupGrid {
  columns: number;
  rows: number;
}

export interface StorySection {
  id: string;
  title: string;
  intro?: string;
  images: CaptionedImage[];
}

export interface FinalResultContent {
  featured: CaptionedImage;
  supporting: CaptionedImage[];
}

export interface DevelopmentVersion {
  id: string;
  label: string;
  title: string;
  summary: string;
  changes: string[];
  improvements: string[];
  issues: string[];
  lesson: string;
  image?: string;
  imageAlt?: string;
  objectFit?: "cover" | "contain";
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryObjectFit?: "cover" | "contain";
  tertiaryImage?: string;
  tertiaryImageAlt?: string;
  tertiaryObjectFit?: "cover" | "contain";
}

export interface ProcessImageGroup {
  id: string;
  title: string;
  bullets?: string[];
  grid?: ProcessImageGroupGrid;
  images: CaptionedImage[];
}

export interface ProcessBlock {
  id: string;
  title: string;
  intro?: string;
  bullets?: string[];
  /** Large hero images shown above the main gallery */
  featuredImages?: CaptionedImage[];
  /** Grouped image panels with shared bullet notes */
  imageGroups?: ProcessImageGroup[];
  images?: CaptionedImage[];
}

export interface ExplodedCompareContent {
  assembledSrc: string;
  explodedSrc: string;
  assembledAlt: string;
  explodedAlt: string;
  label?: string;
  /** Overlay title shown on the compare image, e.g. "Version 1" */
  versionTitle?: string;
}

export interface CaseStudyContent {
  meta: CaseStudyMeta;
  spec: SpecItem[];
  sections: TechnicalSectionContent[];
  versions: VersionEntry[];
  v3Direction: {
    label: string;
    focus: string[];
  };
  visuals: VisualAsset[];
  logbook?: LogbookContent;
  overviewImages?: CaptionedImage[];
  storySections?: StorySection[];
  finalResult?: FinalResultContent;
  /** Interactive V1–V4 (or similar) development timeline */
  developmentVersions?: DevelopmentVersion[];
  /** Design constraints section */
  constraints?: TechnicalSectionContent;
  /** Key takeaways / reflection */
  takeaways?: TechnicalSectionContent;
  /** Quick-scan highlight bullets under summary */
  quickHighlights?: string[];
  /** Build + testing process blocks with optional images */
  processBlocks?: ProcessBlock[];
  explodedCompare?: ExplodedCompareContent;
}
