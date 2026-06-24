import type { CaseStudyContent } from "@/types/case-study";

const base = "/images/projects/waterborne-rescue-vessel";

export const waterborneRescueVesselCaseStudy: CaseStudyContent = {
  meta: {
    slug: "waterborne-rescue-vessel",
    title: "Waterborne Rescue Vessel",
    subtitle: "",
    status: "Completed Project",
    statusTone: "success",
    projectType: "ENGG 200 design project",
    tools: [
      "Fusion 360",
      "3D printing",
      "Raspberry Pi Pico",
      "Bluetooth control",
      "Servo actuation",
      "Propeller testing",
    ],
    heroImage: `${base}/hero-pool-navigation.png`,
    heroAlt:
      "Twin-hull rescue vessel navigating a test pool with simulated obstacles",
    hideHeroImage: true,
    tags: [
      "Fusion 360",
      "3D Printing",
      "Raspberry Pi Pico",
      "Bluetooth",
      "Servo actuation",
      "Soldering",
      "Python",
    ],
  },

  spec: [
    { label: "Course", value: "ENGG 200, engineering design project" },
    { label: "Hull", value: "Twin-hull catamaran for stability and buoyancy" },
    {
      label: "Iterations",
      value: "4 major versions, concept through pool demo",
    },
    {
      label: "Electronics",
      value: "Raspberry Pi Pico, motor drivers, sealed compartments",
    },
    { label: "Control", value: "Bluetooth remote with onboard power switching" },
    {
      label: "Role",
      value: "Hull/roof CAD, propulsion iteration, assembly, pool testing",
    },
  ],

  quickHighlights: [
    "Twin-hull layout for stability and rescue-vessel proportions",
    "Sealed electronics compartment with routed wire tunnels",
    "Iterative FDM prints from Fusion 360 models",
    "Pool obstacle navigation with working propulsion",
  ],

  sections: [
    {
      id: "engineering-problem",
      label: "Objective",
      body: "For ENGG 200, we built a remote-controlled twin-hull rescue vessel that had to carry payload, stay upright in water, keep electronics dry, and weave through obstacles in a test pool. Every revision came back to the same question: will this still float, seal, and steer after we print it?",
    },
  ],

  overviewImages: [
    {
      id: "objective-vessel-side",
      src: `${base}/build-vessel-controller-side.png`,
      alt: "Completed twin-hull prototype with Bluetooth controller on the desk",
      caption: "",
      objectFit: "cover",
    },
    {
      id: "objective-vessel-top",
      src: `${base}/build-vessel-controller-top.png`,
      alt: "Top-down view of the completed prototype with dual propellers and controller",
      caption: "",
      objectFit: "cover",
    },
    {
      id: "objective-pool-demo",
      src: `${base}/objective-pool-demo.png`,
      alt: "V4 prototype in the test pool, rear propellers, deck electronics, and obstacle navigation",
      caption: "",
      objectFit: "contain",
    },
  ],

  developmentVersions: [
    {
      id: "v1",
      label: "V1",
      title: "Concept & Layout",
      summary:
        "Established twin-hull geometry, payload zone, and motor pod placement in Fusion 360 before committing filament to a first print.",
      changes: [
        "Twin-hull catamaran layout with defined payload deck",
        "Motor pod and electronics compartment planning",
        "Electrical routing concept and wire tunnel paths",
      ],
      improvements: [
        "Clear design direction and rescue-vessel proportions",
        "Compartment sizing resolved before physical build",
      ],
      issues: [
        "No physical validation, buoyancy assumptions untested",
        "Print volume limits not yet stress-tested on real geometry",
      ],
      lesson:
        "Hardware iteration is sequential, buoyancy, waterproofing, and propulsion can't be solved in isolation. Layout and compartment sizing have to be locked in CAD before the first hull is committed.",
      image: `${base}/design-early-sketch.png`,
      imageAlt: "Hand-drawn Power Catamaran concept sketch with dimension notes",
      objectFit: "contain",
      secondaryImage: `${base}/design-twin-hull-layout.png`,
      secondaryImageAlt: "CAD layout showing twin hull dimensions and payload area",
      secondaryObjectFit: "contain",
    },
    {
      id: "v2",
      label: "V2",
      title: "First Printed Hull",
      summary:
        "The first 3D-printed catamaran proved the form factor could be fabricated but exposed fundamental flotation and packaging problems.",
      changes: [
        "Initial FDM hull print from early CAD models",
        "Basic motor mount integration and open-deck assembly",
      ],
      improvements: [
        "Validated twin-hull form could be printed and assembled",
        "Identified real-world volume constraints invisible in renders",
      ],
      issues: [
        "Low buoyancy, hulls too shallow for payload",
        "Cramped electronics volume with limited iteration space",
        "Motor pods lacked clearance for wiring and drivers",
      ],
      lesson:
        "First prints are diagnostic tools, plan for at least one throwaway geometry pass. They reveal volume constraints that CAD screenshots hide.",
      image: `${base}/v2-hull-isometric.png`,
      imageAlt: "V2 CAD model of the first printed twin-hull catamaran hull",
      objectFit: "contain",
      secondaryImage: `${base}/v2-fusion-views.png`,
      secondaryImageAlt:
        "Fusion 360 orthographic and isometric views of the first hull geometry",
      secondaryObjectFit: "contain",
      tertiaryImage: `${base}/v2-compartment-plan.png`,
      tertiaryImageAlt:
        "Annotated twin-hull compartment plan with payload, motor pods, and sealed electronics zones",
      tertiaryObjectFit: "contain",
    },
    {
      id: "v3",
      label: "V3",
      title: "Hull & Roof Redesign",
      summary:
        "Deeper hulls, a sealed roof, and improved perimeter layers addressed waterproofing and buoyancy before retesting propulsion.",
      changes: [
        "Deeper pontoons and payload pocket in roof CAD",
        "Sealed roof lip and wire tunnel routing",
        "Improved perimeter layer strategy for watertight seams",
      ],
      improvements: [
        "Better buoyancy in controlled pool tests",
        "Electronics stayed dry during splash testing",
        "More usable internal volume for battery and drivers",
      ],
      issues: [
        "Propulsion still underpowered for tight obstacle turns",
        "Geared drive added mechanical complexity without enough thrust gain",
      ],
      lesson:
        "Sealed compartments need CAD-level features, lips, tunnels, and drain paths, not tape-and-sealant fixes on the hull seam.",
      image: `${base}/design-v7-three-view.png`,
      imageAlt: "V3 CAD renders of hull, interior compartments, and front profile",
      objectFit: "contain",
      secondaryImage: `${base}/test-v7-bench-prototype.png`,
      secondaryImageAlt:
        "V7 physical prototype on the bench with servo, power switch, and geared propulsion",
      secondaryObjectFit: "contain",
    },
    {
      id: "v4",
      label: "V4",
      title: "Propulsion & Pool Demo",
      summary:
        "Direct motor-to-propeller drive, wider prop spacing, and pool obstacle runs delivered a working maneuvering demo.",
      changes: [
        "Direct-drive propulsion replacing geared assembly",
        "Propeller geometry tests across multiple printed variants",
        "Bluetooth control integration for remote pool maneuvering",
      ],
      improvements: [
        "Reliable steering through obstacle layout in test pool",
        "Sealed electronics held through full demo run",
        "Stable twin-hull flotation with payload aboard",
      ],
      issues: [
        "Minor motor alignment adjustments needed post-demo",
        "Wiring routing still needed tidying for a production-ready build",
      ],
      lesson:
        "Propulsion clearance and thrust tuning deserve the same rigor as hull aesthetics. A working demo in realistic conditions (pool + obstacles) validates more than bench tests alone.",
      image: `${base}/timeline-v4-propulsion-demo.png`,
      imageAlt:
        "V4 prototype on bench with controller and in-pool obstacle navigation run",
      objectFit: "contain",
    },
  ],

  processBlocks: [
    {
      id: "design-planning",
      title: "Design & Planning",
      intro:
        "Early layouts defined hull geometry, waterproof compartments, payload space, and propulsion placement before committing to prints.",
      imageGroups: [
        {
          id: "design-sections",
          title: "Sketches",
          bullets: [
            "Initial concept sketch, twin hulls, deck space, proportions",
            "Sealed electronics and motor pod compartment plan",
            "Propeller geometry compared before printing variants",
          ],
          images: [
            {
              id: "design-sketch",
              src: `${base}/design-early-sketch.png`,
              alt: "Hand-drawn early concept sketch of the twin-hull vessel",
              caption: "",
              objectFit: "contain",
            },
            {
              id: "design-compartments",
              src: `${base}/design-compartment-plan.png`,
              alt: "Annotated CAD plan for sealed electronics and motor compartments",
              caption: "",
              objectFit: "contain",
            },
            {
              id: "design-propeller",
              src: `${base}/design-propeller-cad.png`,
              alt: "CAD model of propeller variants for thrust testing",
              caption: "",
              objectFit: "contain",
            },
          ],
        },
        {
          id: "design-cad-developments",
          title: "CAD Developments",
          grid: { columns: 4, rows: 2 },
          images: [
            {
              id: "design-late-assembly",
              src: `${base}/rear-45.png`,
              alt: "Fusion 360 render of the twin-hull vessel with roof and propulsion detail",
              caption: "",
              objectFit: "contain",
              gridCell: { colStart: 1, rowStart: 1 },
            },
            {
              id: "design-with-roof",
              src: `${base}/with-roof.png`,
              alt: "CAD render of the vessel with roof and payload pocket",
              caption: "",
              objectFit: "contain",
              gridCell: { colStart: 2, rowStart: 1 },
            },
            {
              id: "design-top-view",
              src: `${base}/top-view.png`,
              alt: "Top-down CAD view of the completed vessel layout",
              caption: "",
              objectFit: "contain",
              gridCell: { colStart: 3, rowStart: 1 },
            },
            {
              id: "design-propulsion",
              src: `${base}/gear-propulsion.png`,
              alt: "Close-up CAD of propulsion assembly",
              caption: "",
              aspectRatio: "portrait",
              objectFit: "contain",
              gridCell: { colStart: 4, rowStart: 1, rowSpan: 2 },
            },
            {
              id: "design-v7-three-view",
              src: `${base}/design-v7-three-view.png`,
              alt: "V7 CAD three-view of final hull with roof, payload pocket, and propulsion",
              caption: "",
              objectFit: "contain",
              gridCell: { colStart: 1, rowStart: 2, colSpan: 3 },
            },
          ],
        },
      ],
    },
    {
      id: "build-process",
      title: "Build Process",
      intro:
        "From printed parts through wiring, propulsion tuning, and team assembly in the makerspace.",
      imageGroups: [
        {
          id: "build-assembly",
          title: "Makerspace Assembly",
          bullets: [
            "Fitting printed hull sections and checking assembly as a team",
            "Hull components and clearances checked in the makerspace",
            "Controller, laptop, and hull wiring set up at the workbench",
          ],
          images: [
            {
              id: "build-makerspace-team",
              src: `${base}/build-makerspace-team.png`,
              alt: "Team assembling printed hull sections in the makerspace",
              caption: "",
            },
            {
              id: "build-handheld",
              src: `${base}/build-handheld-prototype.png`,
              alt: "Handheld prototype with roof, switch, and propulsion checked in the makerspace",
              caption: "",
            },
            {
              id: "build-team-controller",
              src: `${base}/build-team-controller.png`,
              alt: "Team wiring electronics and testing Bluetooth controller at the workbench",
              caption: "",
            },
          ],
        },
        {
          id: "build-propulsion-electronics",
          title: "Propulsion & Electronics",
          bullets: [
            "Propeller variants compared on the bench before thrust selection",
            "Geared drive, printed gears and propellers mounted on the hull frame",
            "Motors, driver board, and battery routing on the printed base",
            "Bench propulsion check with motors and propellers running",
          ],
          images: [
            {
              id: "build-propellers",
              src: `${base}/build-propellers.png`,
              alt: "Three 3D-printed propeller prototypes on a workbench",
              caption: "",
            },
            {
              id: "build-geared-propulsion",
              src: `${base}/build-geared-propulsion.png`,
              alt: "3D-printed geared propulsion assembly with twin propellers on a gold chassis",
              caption: "",
            },
            {
              id: "build-electronics-wiring",
              src: `${base}/build-electronics-wiring.png`,
              alt: "Motors, motor driver, and battery wired on a 3D-printed hull base",
              caption: "",
            },
            {
              id: "build-propulsion-bench-test",
              src: `${base}/build-propulsion-bench-test.png`,
              alt: "Handheld prototype with motors running and propellers spinning on the bench",
              caption: "",
            },
          ],
        },
      ],
    },
    {
      id: "testing-validation",
      title: "Testing & Validation",
      intro:
        "Each revision tested buoyancy, waterproofing, thrust, and internal volume. Failures from one version directly drove the next CAD pass.",
      bullets: [
        "Controlled buoyancy test before full electronics validation",
        "Waterproofing checks at hull-roof seam under splash conditions",
        "In-pool obstacle course for steering, thrust, and stability",
      ],
      images: [
        {
          id: "test-final-pool-run",
          src: `${base}/hero-pool-navigation.png`,
          alt: "Finished vessel navigating around obstacles in a test pool",
          caption:
            "Final pool run, stable twin-hull flotation and working propulsion through an obstacle layout.",
          aspectRatio: "wide",
        },
        {
          id: "test-buoyancy",
          src: `${base}/test-buoyancy.png`,
          alt: "Team lowering the vessel into a pool for buoyancy testing",
          caption: "Buoyancy test in a controlled pool setup.",
        },
        {
          id: "test-pool",
          src: `${base}/test-pool-obstacles.png`,
          alt: "Vessel navigating around obstacles during pool testing",
          caption: "Obstacle navigation run during final pool validation.",
          aspectRatio: "wide",
        },
        {
          id: "test-controller",
          src: `${base}/bluetooth-controller-front.jpg`,
          alt: "Custom Raspberry Pi Bluetooth controller for remote maneuvering",
          caption:
            "Custom-made Raspberry Pi Bluetooth controller for remote maneuvering.",
        },
      ],
    },
  ],

  versions: [],
  v3Direction: { label: "", focus: [] },
  visuals: [],

  logbook: {
    label: "Outcome",
    statusNote:
      "Reached a working pool demo with improved buoyancy, sealed electronics, and obstacle navigation after four major hull and propulsion revisions.",
    nextSteps: [],
  },
};
