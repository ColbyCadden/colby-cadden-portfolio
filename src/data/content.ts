import { siteConfig } from "@/data/site";

export const heroContent = {
  name: "Colby Cadden",
  programs: ["Mechanical Engineering", "Finance"],
  school: "University of Calgary",
  distinction: "Schulich Leader Scholar",
  intro:
    "My name is Colby Cadden. I am a Mechanical Engineering student at the University of Calgary and a Schulich Leader Scholar. I want the site to present me as more than just an engineering student: someone interested in mechanical systems, robotics, automation, software, finance, product strategy, and building useful projects.",
  portrait: "/images/hero/portrait-hero-v2.jpg",
  ctaProjects: { label: "Projects", href: "#projects" },
  ctaAbout: { label: "About Me", href: "#about" },
  ctaLinkedIn: { label: "LinkedIn", href: siteConfig.linkedinUrl },
};

export const projectsContent = {
  title: "Projects",
  subtitle: "Robotics, hardware, hackathons, and full-stack builds.",
};

export const aboutContent = {
  headline: "About Me",
  subheadline:
    "I'm currently pursuing many of my passions at UCalgary, including mechanical engineering, business, and leadership.",
  identity: [
    "Apart from my studies I enjoy athletics, hiking, and building my own projects.",
  ],
  education: [
    {
      school: "University of Calgary",
      degree: "BSc Mechanical Engineering + BComm Finance",
      detail: "Dual degree program",
      logo: "/images/education/ucalgary-logo.png",
    },
    {
      school: "Salmon Arm Secondary",
      degree: "Dual Dogwood Diploma",
      logo: "/images/education/salmon-arm-secondary-logo.png",
    },
  ],
};

export const galleryContent = {
  title: "Gallery",
  subtitle: "Photos from builds, competitions, and projects.",
};

export const contactContent = {
  headline: "Contact Me",
};
