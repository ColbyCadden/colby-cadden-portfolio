import type { Project, ProjectHomePreview } from "@/types";

export const projects: Project[] = [
  {
    slug: "robotic-arm",
    title: "Sensor-Activated Robotic Arm",
    tagline: "Iterative mechatronics prototyping",
    description:
      "In-progress robotic arm prototype focused on end-effector accuracy, torque limits, and mechanical iteration across V1–V3 builds.",
    tags: ["Robotics", "CAD", "Embedded"],
    thumbnail: "/images/projects/robotic-arm/gripper-v1-exploded-nano.png",
    heroImage: "/images/projects/robotic-arm/gripper-v1-exploded-nano.png",
    featured: true,
    year: "2025–2026",
    role: "CAD designer, end-effector process, prototyping",
    overview:
      "Iterative mechatronics build using Fusion 360, PlatformIO, and ToF sensor input. V1 and V2 prototypes complete; V3 in active redesign.",
    highlights: [
      "V1 → V2 mechanical iteration",
      "Sensor-triggered end-effector control",
      "CAD → print → test → redesign loop",
    ],
    techStack: [
      "Fusion 360",
      "PlatformIO",
      "Arduino Nano",
      "VL6180X",
      "PLA printing",
    ],
    images: [
      "/images/projects/robotic-arm/gripper-v1-assembled-front.png",
      "/images/projects/robotic-arm/gripper-v1-exploded-nano.png",
      "/images/projects/robotic-arm/gripper-v1-iso-2.png",
    ],
    home: {
      shortText:
        "In-progress robotic arm prototype focused on end-effector accuracy, torque limits, and mechanical iteration.",
      metadata:
        "Fusion 360 · PLA Prototypes · Servo Actuation · ToF Sensor",
      resultLine: "Personal Mechatronics Project",
      layout: "mechanical",
      secondaryImage: "/images/projects/robotic-arm/gripper-v1-assembled-front.png",
    },
  },
  {
    slug: "waterborne-rescue-vessel",
    title: "Waterborne Rescue Vessel",
    tagline: "Autonomous surface vehicle for emergency response",
    description:
      "Remote-controlled twin-hull rescue vessel built for ENGG 200, iterated through CAD, 3D printing, waterproofing, and pool testing.",
    tags: ["Fusion 360", "3D Printing", "Raspberry Pi Pico"],
    thumbnail: "/images/projects/waterborne-rescue-vessel/rear-45.png",
    heroImage: "/images/projects/waterborne-rescue-vessel/hero-pool-navigation.png",
    featured: true,
    year: "2025",
    role: "Hull/roof CAD, propulsion iteration, assembly, testing",
    overview:
      "Twin-hull rescue vessel prototype designed for payload stability, sealed electronics, and Bluetooth-controlled maneuvering in a test pool.",
    highlights: [
      "Twin-hull CAD through V8 print iterations",
      "Sealed electronics and motor compartments",
      "Pool testing with obstacle navigation",
    ],
    techStack: [
      "Fusion 360",
      "3D Printing",
      "Raspberry Pi Pico",
      "Bluetooth",
      "Servo actuation",
    ],
    images: [
      "/images/projects/waterborne-rescue-vessel/hero-pool-navigation.png",
      "/images/projects/waterborne-rescue-vessel/with-roof.png",
      "/images/projects/waterborne-rescue-vessel/top-view.png",
      "/images/projects/waterborne-rescue-vessel/gear-propulsion.png",
    ],
    home: {
      shortText:
        "Remote-controlled rescue-vessel prototype designed for obstacle navigation, payload transport, buoyancy, and validation testing.",
      metadata:
        "CAD · 3D Printing · Raspberry Pi Pico · Payload Stability · Bluetooth Control",
      resultLine: "ENGG 200 Design Project",
      layout: "vessel",
      secondaryImage:
        "/images/projects/waterborne-rescue-vessel/gear-propulsion.png",
    },
  },
  {
    slug: "hackathons",
    title: "Hackathons",
    tagline: "Rapid prototyping under pressure",
    description:
      "Two 24-hour hackathon builds: a first-place GNSS accuracy project at GeoHacks 2026 and PrepDeck, an AI meal-planning app built at the Cursor 2026 Hackathon.",
    tags: ["Hackathon", "Full-Stack", "GNSS"],
    thumbnail: "/images/projects/hackathons/geohacks-code.png",
    heroImage: "/images/projects/hackathons/team.png",
    featured: true,
    year: "2026",
    role: "Developer & team contributor",
    overview: "",
    highlights: [],
    techStack: [
      "Python",
      "GNSS",
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Groq API",
    ],
    images: [
      "/images/projects/hackathons/team.png",
      "/images/projects/hackathons/certificate.png",
      "/images/projects/hackathons/geohacks-code.png",
    ],
    home: {
      shortText:
        "GeoHacks 2026 and Cursor 2026, working across multiple languages, with various event guidelines.",
      metadata:
        "GeoHacks 2026 · Cursor 2026 · GNSS · Next.js · Gemini / Groq APIs",
      layout: "hackathon",
      splitImage: "/images/projects/hackathons/team.png",
    },
  },
  {
    slug: "portfolio-rebuild",
    title: "ColbyOS: a Custom Portfolio Website",
    tagline: "A custom portfolio built to present engineering, software, and leadership work",
    description:
      "A ground-up rebuild of this portfolio site with a premium dark aesthetic, modular project pages, and content-driven architecture.",
    tags: ["Next.js", "Design", "Frontend"],
    thumbnail: "/images/projects/portfolio-rebuild/thumbnail.svg",
    heroImage: "/images/projects/portfolio-rebuild/thumbnail.svg",
    featured: false,
    year: "2026",
    role: "Designer & Developer",
    textOnly: true,
    writeup:
      "Using Cursor IDE, I built this site with Next.js, TypeScript, Tailwind CSS, and Framer Motion, a modern stack chosen for fast performance, clean structure, and subtle motion. The goal was a portfolio that could grow with my work. I use this website to display engineering projects, skills progressions, and career story.",
    overview: "",
    highlights: [],
    architectureIntro:
      "Built as a fast, static engineering portfolio with reusable project templates.",
    specs: [
      {
        label: "Framework",
        value: "Next.js App Router with statically generated project pages",
      },
      {
        label: "Language",
        value:
          "TypeScript with typed project schemas, shared component props, and strict mode",
      },
      {
        label: "Styling",
        value: "Tailwind CSS v4 with custom color, typography, and surface tokens",
      },
      {
        label: "Motion",
        value: "Framer Motion with prefers-reduced-motion support",
      },
      {
        label: "Content Model",
        value:
          "Project content stored as typed data and rendered through reusable templates",
      },
      {
        label: "Routing",
        value: "One-page homepage plus dynamic /projects/[slug] case-study routes",
      },
      {
        label: "Deployment",
        value: "Vercel with GitHub-connected preview deployments",
      },
      {
        label: "Accessibility",
        value:
          "Keyboard-friendly navigation, semantic sections, reduced-motion support",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    images: [],
    home: {
      shortText:
        "A custom portfolio system built to present engineering, software, finance, and leadership work through interactive storytelling.",
      metadata:
        "Next.js · TypeScript · Tailwind · Framer Motion · Vercel",
      resultLine: "Personal Software Project",
      layout: "portfolio",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface ProjectNavLink {
  slug: string;
  title: string;
  href: string;
}

export function getProjectNavigation(slug: string): {
  previousProject?: ProjectNavLink;
  nextProject?: ProjectNavLink;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return {};

  const toLink = (project: Project): ProjectNavLink => ({
    slug: project.slug,
    title: project.title,
    href: `/projects/${project.slug}`,
  });

  return {
    previousProject: index > 0 ? toLink(projects[index - 1]) : undefined,
    nextProject:
      index < projects.length - 1 ? toLink(projects[index + 1]) : undefined,
  };
}

export function toHomePreview(project: Project): ProjectHomePreview {
  return {
    slug: project.slug,
    title: project.title,
    shortText: project.home.shortText,
    metadata: project.home.metadata,
    href: `/projects/${project.slug}`,
    thumbnail: project.thumbnail,
    layout: project.home.layout,
    secondaryImage: project.home.secondaryImage,
    splitImage: project.home.splitImage,
    resultLine: project.home.resultLine,
  };
}

export const homeProjectPreviews: ProjectHomePreview[] =
  projects.map(toHomePreview);
