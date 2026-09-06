import type { CaseStudyContent } from "@/types/case-study";

const base = "/images/projects/bear-spray-quick-release";

export const bearSprayQuickReleaseCaseStudy: CaseStudyContent = {
  meta: {
    slug: "bear-spray-quick-release",
    title: "Quick-Release Bear Spray Holder",
    subtitle:
      "ENME 101 team mini-project designing a shoulder-strap mount that lets hikers deploy bear spray in seconds. Existing holders rely on slow zippers or swinging carabiners — we built a dovetail quick-release mechanism modelled in SolidWorks and validated with a PLA prototype.",
    subtitleBullets: [
      "Team project with Tyson, Daniel, and Bennett.",
    ],
    status: "Completed prototype",
    statusTone: "success",
    projectType: "ENME 101 · Team mini-project",
    heroImage: `${base}/prototype-worn-hero.png`,
    heroAlt: "Prototype bear spray quick-release holder mounted on a backpack shoulder strap",
    hideHeroImage: true,
  },

  spec: [],

  sections: [
    {
      id: "problem",
      label: "Problem & Need",
      bullets: [
        "Bears can run up to 50 km/h — in an emergency you may only have seconds to deploy bear spray",
        "Common attachments use zippers or carabiners that are slow to open and swing while hiking",
        "Many hikers stash canisters in side water pockets that are difficult to reach under stress",
        "Need: fast, reliable access from a backpack shoulder strap without sacrificing security during normal movement",
      ],
    },
    {
      id: "design-manufacturing",
      label: "Design for Manufacturing",
      bullets: [
        "Final concept modelled in SolidWorks and printed in PLA",
        "Every part includes at least one flat face to act as a 3D-printing base",
        "Triangular cutouts remove the need for support material, cutting cost and post-processing time",
        "High-quality Velcro straps attach the mounting base universally to backpack shoulder straps",
        "Embedded magnets keep the dovetail joint seated; clip mechanisms prototyped for future tandem use",
      ],
    },
  ],

  versions: [],

  storySections: [
    {
      id: "cad",
      title: "CAD",
      intro:
        "Two-part SolidWorks assembly — a universal mounting base and a curved canister cradle joined by a dovetail slide.",
      images: [
        {
          id: "cad-assembly-front",
          src: `${base}/cad-assembly-front.png`,
          alt: "SolidWorks render of full assembly, front view",
          caption: "Full assembly, front view",
          objectFit: "contain",
        },
        {
          id: "cad-assembly-iso",
          src: `${base}/cad-assembly-iso.png`,
          alt: "SolidWorks render of assembly, isometric view",
          caption: "Full assembly, isometric view",
          objectFit: "contain",
        },
        {
          id: "cad-mounting-base",
          src: `${base}/cad-mounting-base.png`,
          alt: "CAD render of mounting base with strap slots and dovetail channel",
          caption: "Mounting base — strap slots and dovetail channel",
          objectFit: "contain",
        },
        {
          id: "cad-canister-holder",
          src: `${base}/cad-canister-holder.png`,
          alt: "CAD render of canister holder with dovetail rail and weight-reduction cutouts",
          caption: "Canister holder — dovetail rail and weight-reduction cutouts",
          objectFit: "contain",
        },
        {
          id: "cad-dovetail-section",
          src: `${base}/cad-dovetail-section.png`,
          alt: "Cross-section CAD showing dovetail joint between mounting base and canister holder",
          caption: "Cross-section through the dovetail joint",
          objectFit: "contain",
        },
      ],
    },
    {
      id: "prototype",
      title: "Real-Life Prototype",
      intro:
        "PLA prototype printed and field-tested on a backpack shoulder strap.",
      images: [
        {
          id: "prototype-worn-hero",
          src: `${base}/prototype-worn-hero.png`,
          alt: "Wearing prototype on backpack with canister at chest height for fast access",
          caption: "Worn on a backpack shoulder strap",
        },
        {
          id: "prototype-dovetail-magnet",
          src: `${base}/prototype-dovetail-magnet.png`,
          alt: "Hands demonstrating dovetail rail, magnet seating, and Velcro strap attachment",
          caption: "Dovetail rail and magnet seating",
        },
        {
          id: "prototype-release-demo",
          src: `${base}/prototype-release-demo.png`,
          alt: "Demonstrating one-motion upward release of canister from dovetail mount",
          caption: "One-motion upward release",
        },
        {
          id: "prototype-backpack-side",
          src: `${base}/prototype-backpack-side.png`,
          alt: "Side view of prototype mounted on backpack shoulder strap outdoors",
          caption: "Mounted on the shoulder strap",
        },
        {
          id: "prototype-backpack-front",
          src: `${base}/prototype-backpack-front.png`,
          alt: "Front view of prototype mounted on backpack shoulder strap",
          caption: "Front view on the backpack",
        },
        {
          id: "prototype-strap-detail",
          src: `${base}/prototype-strap-detail.png`,
          alt: "Close-up of Velcro straps and holder on shoulder strap",
          caption: "Velcro strap attachment detail",
        },
        {
          id: "prototype-closeup",
          src: `${base}/prototype-closeup.png`,
          alt: "Close-up of the canister seated in the mount",
          caption: "Canister seated in the mount",
        },
      ],
    },
  ],

  v3Direction: {
    label: "Future applications",
    focus: [
      "Stronger magnets and higher-performance materials for production builds",
      "Medical field: inhalers, EpiPens, and other emergency devices that must be reached instantly",
      "Other deterrents such as pepper spray, or amenities like water bottles",
      "Emergency responders who need quick, reliable tool access on the move",
    ],
  },

  visuals: [],
};
