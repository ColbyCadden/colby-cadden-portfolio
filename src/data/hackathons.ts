import type { HackathonEntry } from "@/types/hackathon";

export const hackathons: HackathonEntry[] = [
  {
    id: "geohacks-2026",
    name: "GeoHacks 2026",
    year: "2026",
    badge: "1st Place",
    badgeVariant: "award",
    event: "Annual GeoHacks Hackathon, 24-hour event",
    sponsors:
      "Sponsored by Hexagon A&P and hosted with the Geomatics Engineering Student Society",
    projectName: "GNSS Accuracy Solution",
    summary:
      "Built a GNSS accuracy solution using raw RTK and PPP satellite data, transforming coordinates between geodetic and Cartesian frames to improve positioning accuracy. Our team achieved the highest accuracy and placed first.",
    role: [
      "Coding",
      "Workload delegation",
      "Data collection",
      "Research",
      "Technical problem-solving under time pressure",
    ],
    team: ["Jayden Flitton", "Calum Scotland", "Erik Williams", "Colby Cadden"],
    contributions: [
      "Processed raw RTK and PPP satellite data for accuracy comparison",
      "Transformed coordinates between geodetic and Cartesian frames",
      "Collected and organized field data under a 24-hour deadline",
      "Presented final results and methodology to the judging panel",
    ],
    technicalFocus: [
      "GNSS",
      "RTK data",
      "PPP satellite data",
      "Coordinate transformations",
      "Geodetic coordinate frames",
      "Cartesian coordinate frames",
      "Accuracy analysis",
      "Data collection",
      "Python",
      "VS Code",
    ],
    result:
      "Achieved the highest accuracy in the competition and won first place.",
  },
  {
    id: "cursor-2026",
    name: "Cursor 2026 Hackathon",
    year: "2026",
    badge: "24-Hour Build",
    badgeVariant: "build",
    event: "24-hour hackathon",
    sponsors: "Sponsored by Cursor AI and MegaByte SAIT",
    projectName: "PrepDeck",
    summary:
      "Built PrepDeck, an AI-powered meal-planning app that tracks ingredients, generates recipes, builds structured meal plans, and creates shopping lists around what users already have. The project combined a polished frontend with server-side AI calls to Gemini and Groq.",
    role: [
      "Frontend development",
      "AI integration",
      "Product design",
      "Feature implementation",
    ],
    team: ["Jayden Flitton", "Calum Scotland", "Colby Cadden"],
    contributions: [
      "Implemented ingredient tracking, meal selection, and user profiles",
      "Built barcode scanning to add items to inventory",
      "Integrated Gemini and Groq through API routes for recipe generation",
      "Generated structured meal plans and shopping lists from existing ingredients",
    ],
    technicalFocus: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "Groq API",
      "Server-side AI calls",
      "Native BarcodeDetector API",
      "html5-qrcode",
      "ZXing",
    ],
    result:
      "Shipped a working AI-powered meal-planning and inventory workflow in 24 hours.",
  },
];
