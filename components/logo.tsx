import Link from "next/link";
import { cx } from "./ui";

/* ---------------------------------------------------------------------------
   The Crowns Sphere mark: a fan of tapered rays forming a crown.

   The geometry is generated rather than hand-drawn so the spacing stays even —
   every ray points away from a single pivot well below the artwork, which is
   what keeps the angles shallow and the silhouette wide.

   NOTE: this is a faithful reconstruction from the supplied artwork. When you
   have the official vector file, drop it in at `public/logo.svg` and swap the
   <svg> below for <Image src="/logo.svg" …> — a logo should ship as the real
   asset, not a redraw.
--------------------------------------------------------------------------- */

const SPIKES = 15;
const SPREAD = 32; // degrees from vertical out to the outermost ray
const PIVOT_X = 100;
const PIVOT_Y = 216; // far below the art, so the rays stay shallow
const BASELINE = 104; // every ray is cut off here
const TIP_MAX = 212; // how far the centre ray reaches from the pivot
const TIP_DROP = 35; // how much shorter the outermost rays are
const HALF_W = 3.6; // rays read thinner than the gaps between them

const RAD = Math.PI / 180;

function ray(index: number) {
  const middle = (SPIKES - 1) / 2;
  const offset = (index - middle) / middle; // -1 … 0 … 1
  const angle = offset * SPREAD * RAD;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  const tip = TIP_MAX - TIP_DROP * Math.abs(offset) ** 1.6;
  const base = (PIVOT_Y - BASELINE) / cos;
  const shoulder = tip - (tip - base) * 0.12;

  // A point `r` along the ray, `o` perpendicular to it.
  const at = (r: number, o: number) =>
    `${(PIVOT_X + sin * r + cos * o).toFixed(1)},${(PIVOT_Y - cos * r + sin * o).toFixed(1)}`;

  return [
    at(base, -HALF_W),
    at(shoulder, -HALF_W),
    at(tip, 0),
    at(shoulder, HALF_W),
    at(base, HALF_W),
  ].join(" ");
}

const RAYS = Array.from({ length: SPIKES }, (_, i) => ray(i));

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 108"
      fill="none"
      aria-hidden="true"
      className={cx("h-7 w-[52px]", className)}
    >
      <defs>
        <linearGradient id="cs-crown" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9c40ad" />
          <stop offset="55%" stopColor="#7b2d8e" />
          <stop offset="100%" stopColor="#6a1f7d" />
        </linearGradient>
      </defs>
      {RAYS.map((points, i) => (
        <polygon key={i} points={points} fill="url(#cs-crown)" />
      ))}
    </svg>
  );
}

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group flex items-center gap-2.5 text-white transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Crowns Sphere — home"
    >
      <LogoMark />
      <span className="font-display text-[15px] leading-none font-semibold tracking-[-0.02em]">
        Crowns
        <span className="text-mist group-hover:text-royal transition-colors">
          {" "}
          Sphere
        </span>
      </span>
    </Link>
  );
}
