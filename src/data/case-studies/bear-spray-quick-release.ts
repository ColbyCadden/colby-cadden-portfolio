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

  versions: [
    {
      id: "research",
      version: "V1",
      title: "Research & mechanism selection",
      bullets: [
        "Reviewed existing bear spray holders — most were slow, awkward, or not universal across backpacks",
        "Brainstormed clips, rails, and magnet attachments to keep the mechanism simple and reliable",
        "Selected a dovetail joint for guided connection and one-motion upward release",
        "First physical prototype validated the slot mechanism before committing to final geometry",
      ],
      gallery: [
        {
          src: `${base}/cad-dovetail-section.png`,
          alt: "Cross-section CAD showing dovetail joint between mounting base and canister holder",
          objectFit: "contain",
        },
        {
          src: `${base}/prototype-dovetail-magnet.png`,
          alt: "Hands demonstrating dovetail rail, magnet seating, and Velcro strap attachment",
          objectFit: "contain",
        },
      ],
      spec: [
        { label: "Mechanism", value: "Dovetail joint, one upward motion to release" },
        { label: "Attachment", value: "Velcro straps on shoulder strap" },
        { label: "Retention", value: "Magnets + clip concepts prototyped" },
      ],
    },
    {
      id: "cad",
      version: "V2",
      title: "SolidWorks CAD",
      bullets: [
        "Two-part assembly: universal mounting base and curved canister cradle",
        "Dovetail provides guided slide-in connection between base and holder",
        "Sleek profile keeps spray firmly attached during walking and aggressive movement",
        "Intentional geometry for support-free PLA printing and faster iteration",
      ],
      gallery: [
        {
          src: `${base}/cad-assembly-front.png`,
          alt: "SolidWorks render of full assembly, front view",
          objectFit: "contain",
        },
        {
          src: `${base}/cad-assembly-iso.png`,
          alt: "SolidWorks render of assembly, isometric view",
          objectFit: "contain",
        },
        {
          src: `${base}/cad-mounting-base.png`,
          alt: "CAD render of mounting base with strap slots and dovetail channel",
          objectFit: "contain",
        },
        {
          src: `${base}/cad-canister-holder.png`,
          alt: "CAD render of canister holder with dovetail rail and weight-reduction cutouts",
          objectFit: "contain",
        },
      ],
      spec: [
        { label: "CAD", value: "SolidWorks" },
        { label: "Print material", value: "PLA" },
        { label: "Parts", value: "Mounting base + canister cradle" },
        { label: "DFM", value: "Flat print faces, support-free triangular cutouts" },
      ],
    },
    {
      id: "prototype",
      version: "V3",
      title: "PLA prototype & field demo",
      bullets: [
        "Printed and assembled full mechanism for backpack shoulder-strap mounting",
        "Velcro secures base to strap; cradle releases with a single upward pull",
        "Validated fit, access speed, and retention during outdoor wear testing",
        "Demonstrated quick access compared to zipper and carabiner alternatives",
      ],
      gallery: [
        {
          src: `${base}/prototype-worn-hero.png`,
          alt: "Wearing prototype on backpack with canister at chest height for fast access",
          objectFit: "contain",
        },
        {
          src: `${base}/prototype-release-demo.png`,
          alt: "Demonstrating one-motion upward release of canister from dovetail mount",
          objectFit: "contain",
        },
        {
          src: `${base}/prototype-backpack-side.png`,
          alt: "Side view of prototype mounted on backpack shoulder strap outdoors",
          objectFit: "contain",
        },
        {
          src: `${base}/prototype-strap-detail.png`,
          alt: "Close-up of Velcro straps and holder on shoulder strap",
          objectFit: "contain",
        },
      ],
      spec: [
        { label: "Fabrication", value: "PLA 3D print, Velcro straps" },
        { label: "Mount point", value: "Backpack shoulder strap" },
        { label: "Release", value: "Single upward dovetail motion" },
        { label: "Status", value: "Functional prototype complete" },
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
