import type { ReactNode } from "react";
import { cx } from "./ui";

/**
 * Line icons for feature tiles: the "what we do" pillars and the Aurat Card
 * benefits. Keyed by the label used in content, so copy edits that keep the
 * label keep the icon; an unknown label simply renders no icon.
 */

const paths: Record<string, ReactNode> = {
  /* ----- pillars (content/home.ts `whoWeAre.pillars`) ----- */
  // stacked layers
  Build: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </>
  ),
  // gear
  Operate: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v2.4M12 18.8v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </>
  ),
  // linked rings
  Partner: (
    <>
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </>
  ),
  // rising arrow
  "Develop Opportunities": (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),

  /* ----- Aurat Card benefits (content/home.ts `auratCardFeature.highlights`) ----- */
  // tag
  "Savings & Benefits": (
    <>
      <path d="M3.5 12.3V4.5a1 1 0 0 1 1-1h7.8l8.2 8.2a1.4 1.4 0 0 1 0 2l-6.3 6.3a1.4 1.4 0 0 1-2 0l-8.7-7.7Z" />
      <circle cx="8" cy="8" r="1.3" />
    </>
  ),
  // shield
  "Safety & Assistance": (
    <>
      <path d="M12 3.5 19 6v6c0 4.3-3 7.3-7 8.5-4-1.2-7-4.2-7-8.5V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  // medical cross
  "Healthcare Access": (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  // lightbulb
  "Skills & Opportunities": (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
    </>
  ),

  /* ----- education pathways (content/crowns-education.ts `pathways.items`) ----- */
  // globe
  "International Curricula": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.3-3.5-8.5S9.7 5.8 12 3.5Z" />
    </>
  ),
  // exam paper with a check
  "Secure Assessment": (
    <>
      <path d="M7 3.5h7.5L18 7v13.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14.2 3.5V7H18" />
      <path d="m8.7 13.2 1.8 1.8 3.3-3.6" />
    </>
  ),
  // winding path toward a flag
  "Academic Pathways": (
    <>
      <path d="M4 19c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3" />
      <path d="M17 4v6" />
      <path d="M17 4h3.5L17 7" />
    </>
  ),
};

export function FeatureIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const icon = paths[name];
  if (!icon) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cx("h-6 w-6 shrink-0", className)}
    >
      {icon}
    </svg>
  );
}
