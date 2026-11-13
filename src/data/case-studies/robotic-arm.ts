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
    toolsSummary:
      "Every part is modelled in Fusion 360 and 3D printed in PLA. The control code is written in C++ with PlatformIO in VS Code and runs on an ESP32 and an Arduino Nano, with a time-of-flight distance sensor triggering the gripper and servos driving each joint.",
    projectType: "Passion project / mechatronics prototype",
    heroImage: "/images/projects/robotic-arm/gripper-v1-assembled-front.png",
    heroAlt: "Fusion 360 render of V1 robotic gripper with VL53L0X sensor",
    hideHeroImage: true,
  },

  spec: [],

  sections: [
    {
      id: "cad-fabrication",
      label: "The Build",
      body: "This started with a simple question. Could I build an arm that grabs something on its own, without me babysitting every servo command? V1 barely answered that. The MS24 servo had the torque, but it was heavy enough that the gripper sagged under its own weight. The sensor only triggered right if you held things at the exact angle. It worked, just enough to show me what to fix.\n\nSince then it has basically been a loop. Build it, watch it fail in a new way, fix that one thing, print again. V2 moved to a lighter SG90 servo with a rack and pinion linkage, so the jaws stayed parallel instead of pinching sideways. V3 turned it into an actual arm. Two degrees of freedom, X braced links so it would not flex under its own weight, and bigger 25kg servos at the shoulder and elbow to carry the extra load.\n\nV4 is the one I am proudest of. The whole arm now rides a belt driven linear rail, so instead of being bolted to one spot it can slide along a track and reach way more of the workspace. Everything still runs on PlatformIO and Arduino style C, with a distance sensor in the palm so it only closes the gripper when something is actually there.\n\nStill a prototype. Next up is dialing in the proximity thresholds and tightening the jaw tolerances after the next print.",
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
      title: "Parallel-jaw end effector",
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
    {
      id: "v4",
      version: "V4",
      title: "Linear rail base + gripper refinement",
      bullets: [
        "Added a stepper-driven linear rail beneath the arm, extending reach along a track instead of a fixed base",
        "Carried over the V3 arm: X-brace links and RDS3225 25 kg servos at shoulder and elbow",
        "Refined linkage-driven gripper with serrated jaws and VL53L0X ToF sensor in the palm",
        "Base plate engraved \"TIMOTHY\"",
      ],
      gallery: [
        {
          src: "/images/projects/robotic-arm/gripper-v4-arm-front.png",
          alt: "V4 robotic arm CAD, front view on linear rail base",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v4-arm-side.png",
          alt: "V4 robotic arm CAD, side profile view",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v4-arm-iso.png",
          alt: "V4 robotic arm CAD, isometric view of full assembly on rail",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v4-gripper-iso.png",
          alt: "V4 gripper isometric close-up with TIMOTHY-engraved base plate",
          objectFit: "contain",
        },
        {
          src: "/images/projects/robotic-arm/gripper-v4-sensor-closeup.png",
          alt: "V4 gripper isometric close-up showing VL53L0X ToF sensor and linkage",
          objectFit: "contain",
        },
      ],
      spec: [
        {
          label: "New axis",
          value: "Belt-driven linear rail, stepper motor actuation",
        },
        {
          label: "Arm servos",
          value: "RDS3225, 25 kg torque at shoulder and elbow (carried over from V3)",
        },
        {
          label: "End effector",
          value: "Linkage-driven gripper, serrated jaws",
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
    focus: [],
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
