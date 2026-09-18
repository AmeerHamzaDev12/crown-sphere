import Image from "next/image";

import { SectorIcon, hasSectorIcon } from "./sector-icon";
import { cx } from "./ui";

/**
 * Continuously scrolling strip. The children are duplicated once so the
 * -50% keyframe loops seamlessly (see .marquee-track in globals.css).
 *
 * Items may be plain text or partner logo objects. The children are duplicated
 * once so the -50% keyframe loops seamlessly.
 */
export type MarqueeItem =
  | string
  | {
      name: string;
      logo?: string;
    };

export function Marquee({
  items,
  speed = 42,
  tone = "ink",
  icons = false,
  className,
}: {
  items: readonly MarqueeItem[];
  /** Seconds for one full loop — higher is slower. */
  speed?: number;
  /** `band` is the reference build's solid purple ticker. */
  tone?: "ink" | "cream" | "band";
  /** Show the matching sector icon before each label (see sector-icon.tsx). */
  icons?: boolean;
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cx(
        "group relative flex overflow-hidden",
        // The band is a solid edge-to-edge strip, so it keeps its hard edges.
        tone === "band"
          ? "bg-royal py-4"
          : "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <ul
        className="marquee-track flex w-max shrink-0 items-center"
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        {doubled.map((item, index) => (
          <li
            key={`${typeof item === "string" ? item : item.name}-${index}`}
            aria-hidden={index >= items.length}
            className={cx(
              "flex items-center whitespace-nowrap",
              tone === "band"
                ? "gap-7 px-7 text-[#f0daf1]"
                : "gap-10 px-10",
              tone === "cream" && "text-ink/45",
              tone === "ink" && "text-mist/60",
            )}
          >
            <span className="flex items-center gap-3.5">
              {typeof item === "string" && icons && hasSectorIcon(item) ? (
                <span
                  className={cx(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border",
                    tone === "cream"
                      ? "border-royal/20 bg-royal/[0.07] text-royal"
                      : "border-accent/25 bg-accent/[0.08] text-accent",
                  )}
                >
                  <SectorIcon name={item} className="h-5 w-5" />
                </span>
              ) : null}
              {typeof item === "string" || !item.logo ? null : (
                <span className="flex h-11 w-28 shrink-0 items-center justify-center rounded-full border border-royal/15 bg-white/35 px-3">
                  <Image
                    src={item.logo}
                    alt=""
                    width={160}
                    height={56}
                    className="max-h-8 w-auto max-w-full object-contain"
                  />
                </span>
              )}
              <span
                className={cx(
                  tone === "band"
                    ? "text-xs tracking-[0.16em] uppercase"
                    : "font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl",
                )}
              >
                {typeof item === "string" ? item : item.name}
              </span>
            </span>
            <span
              aria-hidden="true"
              className={cx(
                "h-1.5 w-1.5 rounded-full",
                tone === "cream" && "bg-ink/20",
                tone === "ink" && "bg-line",
                tone === "band" && "bg-[#f0daf1]/50",
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
