import type { ReactNode } from "react";
import { cx } from "./ui";

/**
 * Line icons for the partner sectors, keyed by the exact sector label used in
 * content (content/home.ts `partners.logos`, content/partnerships.ts
 * `sectors.logos`). An unknown label renders nothing, so adding a sector never
 * breaks the strip — it just shows as text until an icon is added here.
 */

const paths: Record<string, ReactNode> = {
  // graduation cap
  Education: (
    <>
      <path d="M12 4 2.5 9 12 14l9.5-5L12 4Z" />
      <path d="M6.5 11.2v4.6c0 1.2 2.5 2.7 5.5 2.7s5.5-1.5 5.5-2.7v-4.6" />
      <path d="M21.5 9v5" />
    </>
  ),
  // heart with pulse line
  Healthcare: (
    <>
      <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
      <path d="M7 12h2.5l1.3-2 2.4 4 1.3-2H17" />
    </>
  ),
  // concierge bell
  Hospitality: (
    <>
      <path d="M4 17h16" />
      <path d="M5.5 17a6.5 6.5 0 0 1 13 0" />
      <path d="M12 10.5V8.5" />
      <path d="M10.5 8.5h3" />
      <path d="M3 20h18" />
    </>
  ),
  // fork and knife
  "Food & Dining": (
    <>
      <path d="M7 3v7a2 2 0 0 0 2 2v9" />
      <path d="M11 3v7a2 2 0 0 1-2 2" />
      <path d="M9 3v5" />
      <path d="M17 21V3c-2 1-3 3.5-3 6.5V13h3" />
    </>
  ),
  // lotus
  Wellness: (
    <>
      <path d="M12 19c-3.5 0-7-2-8.5-5 2.5-.8 5.5 0 8.5 5Z" />
      <path d="M12 19c3.5 0 7-2 8.5-5-2.5-.8-5.5 0-8.5 5Z" />
      <path d="M12 19c-2-2.5-2.5-6.5 0-11 2.5 4.5 2 8.5 0 11Z" />
    </>
  ),
  // car
  Transport: (
    <>
      <path d="M5 16.5V12l1.8-4.6A2 2 0 0 1 8.7 6h6.6a2 2 0 0 1 1.9 1.4L19 12v4.5" />
      <path d="M4 12h16v4.5H4Z" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="16.5" cy="18" r="1.5" />
    </>
  ),
  // trophy
  Sports: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5a2.5 2.5 0 0 0 3 4" />
      <path d="M16 6h3a2.5 2.5 0 0 1-3 4" />
      <path d="M12 13v4" />
      <path d="M8.5 20h7" />
      <path d="M10 17h4v3h-4Z" />
    </>
  ),
  // sparkles
  "Beauty & Personal Care": (
    <>
      <path d="M11 3.5 12.6 8l4.4 1.6-4.4 1.6L11 15.7l-1.6-4.5L5 9.6 9.4 8 11 3.5Z" />
      <path d="M18 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  // shopping bag
  Retail: (
    <>
      <path d="M5 8h14l-1.2 12H6.2L5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </>
  ),
};

export function hasSectorIcon(name: string) {
  return name in paths;
}

export function SectorIcon({
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
