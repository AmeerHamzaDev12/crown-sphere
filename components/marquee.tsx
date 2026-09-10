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
  tone?: "ink" | "cream";
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cx(
        "group relative flex overflow-hidden",
        // fade the strip out at both edges
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
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
              "flex items-center gap-10 px-10 whitespace-nowrap",
              tone === "cream" ? "text-ink/45" : "text-mist/60",
            )}
          >
            <span className="font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl">
              {item}
            </span>
            <span
              aria-hidden="true"
              className={cx(
                "h-1.5 w-1.5 rounded-full",
                tone === "cream" ? "bg-ink/20" : "bg-line",
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
