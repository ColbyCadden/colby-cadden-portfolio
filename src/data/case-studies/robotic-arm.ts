import type { CaseStudyContent } from "@/types/case-study";

export const roboticArmCaseStudy: CaseStudyContent = {
  meta: {
    slug: "robotic-arm",
    title: "Sensor-Activated Robotic Arm",
    subtitle:
      "Currently designing and prototyping a 3 DoF sensor-triggered robotic-arm. Design challenges include end effector accuracy, weight distribution, and lowering torque demanded on servos. Iterations are implemented via Fusion 360 and VSCode.",
    subtitleBullets: [
      "Working on the end effector accuracy and CAD redesign.",
    ],
    status: "In progress / prototyping",
    projectType: "Passion project / mechatronics prototype",
    heroImage: "/images/projects/robotic-arm/gripper-v1-assembled-front.png",
    heroAlt: "Fusion 360 render of V1 robotic gripper with VL53L0X sensor",
    hideHeroImage: true,
  },

  spec: [],

  sections: [
    {
      id: "cad-fabrication",
      label: "CAD + Fabrication",
      bullets: [
        "Fusion 360 used for arm geometry, end-effector design, and print-ready exports",
        "PLA 3D printing for functional prototype parts",
        "Cardboard and styrofoam for fast early-form exploration before committing to prints",
        "CAD → prototype → test → redesign loop to resolve geometry, printability, and assembly issues",
        "Iterating on joint clearance, clip dimensions, and material use between versions",
      ],
    },
    {
      id: "embedded-control",
      label: "Embedded Control + Sensor Integration",
      bullets: [
        "PlatformIO / VS Code workflow for firmware development and upload",
        "C / Arduino-style embedded code for servo actuation and sensor reads",
        "VL6180X ToF sensor input for proximity-triggered end-effector behavior",
        "Debugging across library compatibility, upload failures, sensor detection, and serial monitor output",
        "Touch input integrated as an additional control signal during prototyping",
      ],
    },
  ],

  versions: [
    {
      id: "v1",
      version: "V1",
      title: "First functional prototype",
      bullets: [
        "Used MS24 servo for initial actuation",
        "First functional/prototype end-effector",
        "Proved basic grabbing concept",
        "Exposed weight, motion accuracy, and fit/tolerance issues",
      ],
      gallery: [
        {
          src: "/images/projects/robotic-arm/gripper-v1-assembled-front.png",
          alt: "V1 gripper CAD render, assembled front view",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v1-exploded-nano.png",
          alt: "V1 gripper exploded view with Arduino Nano and gear train",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v1-top-down.png",
          alt: "V1 gripper top-down view with MS24 servo and gear linkage",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v1-gear-closeup.png",
          alt: "V1 gripper gear train close-up with MS24 digital servo",
          objectFit: "contain",
        },
      ],
      spec: [
        { label: "Servo", value: "MS24, high torque, heavy for the assembly" },
        { label: "End effector", value: "First functional gripper, proved concept" },
        { label: "Sensor", value: "VL6180X ToF, proximity-triggered actuation" },
        { label: "Main issue", value: "Weight, accuracy, and fit/tolerance failures" },
      ],
    },
    {
      id: "v2",
      version: "V2",
      title: "Parallel-jaw end effector (in development)",
      bullets: [
        "Rack-and-pinion drive with four-bar linkage for symmetric jaw motion",
        "Triangular cutouts in the jaws to cut weight while keeping serrated grip surfaces",
        "SG90 servo actuation with lower torque demand than the V1 MS24 setup",
        "Currently in CAD refinement and print validation before bench testing",
      ],
      gallery: [
        {
          src: "/images/projects/robotic-arm/gripper-v2-iso.png",
          alt: "V2 gripper CAD render, isometric view with parallel jaws open",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v2-linkage.png",
          alt: "V2 gripper CAD showing rack-and-pinion and four-bar linkage",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v2-front.png",
          alt: "V2 gripper CAD front view with parallel jaw geometry",
          objectFit: "contain",
        },
      ],
      spec: [
        {
          label: "Servo",
          value: "SG90 with geared linkage for mechanical advantage",
        },
        {
          label: "Mechanism",
          value: "Parallel jaws, rack/pinion drive, four-bar linkage",
        },
        {
          label: "CAD focus",
          value: "Weight reduction, printability, pivot tolerances",
        },
        { label: "Status", value: "In development" },
      ],
    },
    {
      id: "v3",
      version: "V3",
      title: "Full arm assembly + sensor gripper",
      bullets: [
        "Full 2-DoF arm structure with X-brace links for stiffness at lower weight",
        "RDS3225 25 kg servos at the shoulder and elbow joints",
        "Parallel-jaw end effector with gear linkage and serrated grip faces",
        "VL53L0X ToF sensor mounted in the palm for proximity-triggered actuation",
      ],
      gallery: [
        {
          src: "/images/projects/robotic-arm/gripper-v3-arm-front.png",
          alt: "V3 robotic arm CAD, front view with RDS3225 servos and gripper",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v3-arm-iso.png",
          alt: "V3 robotic arm CAD, isometric view of full assembly",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v3-sensor-underside.png",
          alt: "V3 gripper underside showing VL53L0X ToF sensor in the palm",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v3-gripper-iso.png",
          alt: "V3 gripper isometric close-up with gear linkage and serrated jaws",
          objectFit: "contain",
        },
      ],
      spec: [
        {
          label: "Arm servos",
          value: "RDS3225, 25 kg torque at shoulder and elbow",
        },
        {
          label: "Structure",
          value: "X-brace arm links, U-bracket servo mounts",
        },
        {
          label: "End effector",
          value: "Parallel jaws, gear linkage, serrated grip faces",
        },
        {
          label: "Sensor",
          value: "VL53L0X ToF, palm-mounted proximity trigger",
        },
      ],
    },
  ],

  v3Direction: {
    label: "Next development focus",
    focus: [
      "Print and assemble the V3 arm and end effector for bench testing",
      "Validate RDS3225 torque and joint clearance under load",
      "Tune VL53L0X proximity thresholds for reliable grip triggers",
      "Iterate jaw geometry and linkage tolerances after first print",
    ],
  },

  visuals: [
    {
      id: "gripper-video",
      type: "video",
      src: "/videos/robotic-arm/gripper-test.mp4",
      alt: "Gripper movement test on V1 prototype",
      label: "VID.01, GRIPPER TEST",
      aspectRatio: "portrait",
      objectFit: "contain",
    },
  ],

};
