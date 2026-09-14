import { cx } from "./ui";

/**
 * Continuously scrolling strip. The children are duplicated once so the
 * -50% keyframe loops seamlessly (see .marquee-track in globals.css).
 *
 * Swap the text items for <Image> logos when the partner assets arrive.
 */
export function Marquee({
  items,
  speed = 42,
  tone = "ink",
  className,
}: {
  items: readonly string[];
  /** Seconds for one full loop — higher is slower. */
  speed?: number;
  /** `band` is the reference build's solid purple ticker. */
  tone?: "ink" | "cream" | "band";
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
            key={`${item}-${index}`}
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
            <span
              className={cx(
                tone === "band"
                  ? "text-xs tracking-[0.16em] uppercase"
                  : "font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl",
              )}
            >
              {item}
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
