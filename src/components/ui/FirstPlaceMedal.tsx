import { cn } from "@/lib/utils";

interface FirstPlaceMedalProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-9 w-7",
  md: "h-12 w-9",
  lg: "h-[4.5rem] w-[3.75rem]",
};

export function FirstPlaceMedal({
  className,
  size = "md",
}: FirstPlaceMedalProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 96"
      fill="none"
      aria-hidden="true"
      className={cn(sizeClasses[size], className)}
    >
      <defs>
        <linearGradient
          id="medal-ribbon"
          x1="40"
          y1="52"
          x2="40"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8a7350" />
          <stop offset="1" stopColor="#5c4d38" />
        </linearGradient>
        <linearGradient
          id="medal-face"
          x1="22"
          y1="6"
          x2="58"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e0d2b4" />
          <stop offset="0.4" stopColor="#a8956a" />
          <stop offset="1" stopColor="#6f5d42" />
        </linearGradient>
        <linearGradient
          id="medal-rim"
          x1="40"
          y1="4"
          x2="40"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f2ead8" stopOpacity="0.95" />
          <stop offset="1" stopColor="#5c4d38" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path
        d="M27 57 L20 96 L40 84 L60 96 L53 57 Z"
        fill="url(#medal-ribbon)"
      />
      <path
        d="M33 57 L28 90 L40 83 L52 90 L47 57 Z"
        fill="#3d3428"
        opacity="0.3"
      />
      <circle
        cx="40"
        cy="28"
        r="25"
        fill="url(#medal-face)"
        stroke="url(#medal-rim)"
        strokeWidth="2.5"
      />
      <circle
        cx="40"
        cy="28"
        r="19"
        stroke="#f2ead8"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <path
        d="M40 14 L43.2 22.8 L52.6 23.4 L45.8 29.4 L48 38.8 L40 34 L32 38.8 L34.2 29.4 L27.4 23.4 L36.8 22.8 Z"
        fill="#2a2418"
        opacity="0.22"
      />
      <text
        x="40"
        y="33"
        textAnchor="middle"
        fill="#241f15"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="24"
        fontWeight="700"
      >
        1
      </text>
    </svg>
  );
}
