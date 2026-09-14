import Image from "next/image";
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

export function LogoMark({
  className,
  /** Blink the rays in sequence — used by the preloader. */
  animated = false,
  /** Must be unique per instance on the page; SVG ids are global. */
  gradientId = "cs-crown",
}: {
  className?: string;
  animated?: boolean;
  gradientId?: string;
}) {
  // Static use gets the official artwork. The generated SVG below is only for
  // the preloader, where each ray has to animate individually — something a
  // flat image can't do.
  if (!animated) {
    return (
      <Image
        src="/crown.webp"
        alt=""
        width={64}
        height={43}
        priority
        className={cx("h-7 w-[52px] object-contain", className)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 200 108"
      fill="none"
      aria-hidden="true"
      className={cx("h-7 w-[52px]", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9a3a9d" />
          <stop offset="55%" stopColor="#79207c" />
          <stop offset="100%" stopColor="#5e1761" />
        </linearGradient>

        {animated ? (
          <>
            {/* The shine is clipped to the rays themselves — otherwise the
                sweep shows up as a bright rectangle over the background. */}
            <clipPath id={`${gradientId}-clip`}>
              {RAYS.map((points, i) => (
                <polygon key={i} points={points} />
              ))}
            </clipPath>
            <linearGradient id={`${gradientId}-shine`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </>
        ) : null}
      </defs>
      {RAYS.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill={`url(#${gradientId})`}
          className={animated ? "ray-blink" : undefined}
          // Delay runs out from the centre ray, so the pulse travels outward.
          style={
            animated
              ? { animationDelay: `${Math.abs(i - (SPIKES - 1) / 2) * 110}ms` }
              : undefined
          }
        />
      ))}

      {animated ? (
        <g clipPath={`url(#${gradientId}-clip)`}>
          <rect
            className="logo-shine-sweep"
            x="-110"
            y="-4"
            width="95"
            height="116"
            fill={`url(#${gradientId}-shine)`}
          />
        </g>
      ) : null}
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
      {/* Wordmark lockup from the reference build: name over a spaced tagline */}
      <span className="leading-tight">
        <span className="block text-[13px] font-bold tracking-[0.07em]">
          CROWNS SPHERE
        </span>
        <span className="text-mist group-hover:text-accent mt-0.5 block text-[8px] tracking-[0.22em] transition-colors">
          BUILD. INVEST. CONNECT.
        </span>
      </span>
    </Link>
  );
}
