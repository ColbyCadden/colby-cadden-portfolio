import type { HackathonEntry } from "@/types/hackathon";

export const hackathons: HackathonEntry[] = [
  {
    id: "ieee-industry-hackathon-2026",
    name: "IEEE Industry Hackathon 2026",
    year: "2026",
    badge: "2nd Place",
    badgeVariant: "runner-up",
    event: "Annual IEEE Southern Alberta YP Industry Hackathon, 48-hour event",
    sponsors:
      "Sponsored by ElevenLabs, Databricks, Volaris Group, Hunter Hub, Eudaimonia, and TechConnect Alberta; hosted by IEEE Southern Alberta Section Young Professionals",
    projectName: "CityLink — 311 Dispatch Prioritization Agent",
    summary:
      "Built an agentic dispatch system for Calgary's 311 service, replacing first-in-first-out ticket handling with a priority-scored, auto-replanning scheduler. Using real Open Calgary 311 data, the system scores open tickets by hazard type, wait time, and duplicate reports, assigns them across crews within geographic zones, and automatically re-optimizes when a crew goes offline or a high-priority case is added. An LLM layer interprets plain-language crew updates into structured events for the scheduler, while the underlying prioritization and assignment logic runs on deterministic algorithms. The team placed second overall out of 200+ participants.",
    role: [
      "Data pipeline engineering (ticket cleaning, deduplication, filtering)",
      "Priority scoring and crew assignment algorithm design",
      "Disruption-handling / re-optimization logic",
      "Dashboard development (Streamlit)",
      "Git repository architecture and team coordination",
      "Testing and sensitivity analysis",
    ],
    team: ["Bennett Balogh", "Jacob Hailemariam", "Semir Haji", "Colby Cadden"],
    contributions: [
      "Designed and implemented the ticket deduplication and priority-scoring pipeline, filtering 200 raw tickets down to 99 eligible field-crew jobs",
      "Built the crew-assignment algorithm using geographic zoning (k-means) to group jobs for each of 8 crews",
      "Implemented the disruption-replanning logic for when a crew goes offline, including a minimal-perturbation rule that reassigns only affected jobs",
      "Developed the baseline (oldest-first) comparison to validate results: the agent covered 30 of 30 safety-critical tickets versus 16 under the current method",
      "Ran a sensitivity analysis across 16 weight variations to confirm the result wasn't dependent on any single tuned parameter",
      "Built the live Streamlit dashboard showing crew assignments, plan comparisons, and the agent's decision reasoning",
      "Coordinated the team's GitHub repository structure and resolved integration issues across four parallel workstreams",
      "Presented the architecture and results in two live judging rounds, placing 2nd overall",
    ],
    technicalFocus: [
      "Python",
      "LLM integration (Claude API)",
      "Scheduling algorithms",
      "K-means clustering",
      "Priority scoring",
      "Data pipelines",
      "Streamlit",
      "Git",
      "Open data (Calgary 311)",
    ],
    result:
      "Placed 2nd overall out of 200+ participants at the IEEE Southern Alberta YP Industry Hackathon.",
    images: [
      {
        src: "/images/projects/hackathons/team-second-place.jpg",
        alt: "CityLink team on stage after placing second overall",
      },
      {
        src: "/images/projects/hackathons/presenting-citylink-demo.jpg",
        alt: "Team presenting the CityLink 3D city visualization demo",
        objectPosition: "left",
      },
      {
        src: "/images/projects/hackathons/dashboard-presentation-wide.jpg",
        alt: "Presenting the CityLink dispatch dashboard to the judging panel",
      },
      {
        src: "/images/projects/hackathons/dashboard-presentation-closeup.jpg",
        alt: "Close-up of CityLink sensitivity analysis results during the presentation",
      },
      {
        src: "/images/projects/hackathons/hackathon-banner-audience.jpg",
        alt: "Audience at the IEEE Industry Hackathon opening session",
      },
      {
        src: "/images/projects/hackathons/team-tc-banner.jpg",
        alt: "CityLink team with the Tech Connect Alberta banner",
      },
    ],
  },
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
    images: [
      {
        src: "/images/projects/hackathons/team.png",
        alt: "GeoHacks 2026 team photo",
      },
    ],
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
