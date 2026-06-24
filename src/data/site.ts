import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Colby Cadden",
  title: "Colby Cadden, Portfolio",
  description:
    "Schulich Leader and Mechanical Engineering + Finance student building robotics from CAD to embedded control.",
  email: "colby.cadden@icloud.com",
  location: "Calgary, AB · Okanagan, BC",
  resumeUrl: "/resume.pdf",
  referenceLetterUrl: "/reference-letter-ucalgary.pdf",
  referenceLetterDetail: "University of Calgary",
  linkedinUrl: "https://www.linkedin.com/in/colby-cadden-361b5436b/",
  githubUrl: "https://github.com/colbycadden",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About Me", href: "#about" },
  ],
};
