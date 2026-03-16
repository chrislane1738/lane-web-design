"use client";

interface CLLogoSVGProps {
  className?: string;
  color?: string;
  animated?: boolean;
  showCursor?: boolean;
}

export default function CLLogoSVG({
  className = "",
  color = "currentColor",
  animated = false,
  showCursor = false,
}: CLLogoSVGProps) {
  return (
    <svg
      viewBox="-5 5 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? "logo-svg" : ""}`}
    >
      {/* C arc — center (38,50), radius 33, opens right at x=52 */}
      <path
        d="M 52 20 A 33 33 0 1 0 52 80"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="butt"
        fill="none"
        className={animated ? "logo-c-arc" : ""}
        style={
          animated
            ? { strokeDasharray: 133, strokeDashoffset: 133 }
            : undefined
        }
      />
      {/* L vertical bar — x 46–58, flush with C arc stroke at endpoints */}
      <rect
        x="46"
        y="20"
        width="12"
        height="60"
        fill={color}
        className={animated ? "logo-l-vertical" : ""}
        style={
          animated
            ? { clipPath: "inset(0 0 100% 0)" }
            : undefined
        }
      />
      {/* L horizontal foot */}
      <rect
        x="46"
        y="68"
        width="30"
        height="12"
        fill={color}
        className={animated ? "logo-l-foot" : ""}
        style={
          animated
            ? { clipPath: "inset(0 100% 0 0)" }
            : undefined
        }
      />
      {/* Cursor — lives inside SVG so transforms use viewBox coordinates */}
      {showCursor && (
        <polygon
          points="0,0 12,5 3,5 5,12"
          fill="var(--terracotta-light)"
          className="cursor-icon"
          style={{ opacity: 0 }}
        />
      )}
    </svg>
  );
}
