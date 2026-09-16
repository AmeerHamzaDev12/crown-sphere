import Image from "next/image";

import { cx } from "./ui";

/**
 * A named, clearly-labelled stand-in for media that has not been supplied yet
 * — or, once `src` is set, the real photo or video itself. Deliberately *not*
 * a stock photo while empty: it should be obvious at a glance that a slot is
 * awaiting a real asset, so nothing placeholder-ish ever reaches production
 * unnoticed.
 */
export function MediaPlaceholder({
  label,
  kind = "Photo",
  note,
  aspect = "4/3",
  src,
  className,
}: {
  /** What asset belongs here, e.g. "Misaari Hotel — deluxe room". */
  label: string;
  kind?: "Photo" | "Video" | "Gallery";
  note?: string;
  aspect?: string;
  /** Public path to the real asset. Renders it in place of the placeholder. */
  src?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        style={{ aspectRatio: aspect }}
        className={cx(
          "bg-surface relative overflow-hidden rounded-2xl",
          className,
        )}
      >
        {kind === "Video" ? (
          <video
            src={src}
            controls
            preload="metadata"
            playsInline
            className="h-full w-full object-cover"
          >
            Your browser does not support embedded video.
          </video>
        ) : (
          <Image
            src={src}
            alt={label}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
    );
  }

  return (
    <div
      style={{ aspectRatio: aspect }}
      className={cx(
        "border-line-soft bg-surface relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed p-6 text-center",
        className,
      )}
    >
      {/* faint diagonal hatch so it never reads as finished design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(45deg,#fff_0_1px,transparent_1px_9px)]"
      />
      <span className="border-accent/40 text-accent relative rounded-full border px-2.5 py-1 text-[10px] tracking-[0.16em] uppercase">
        {kind} pending
      </span>
      <p className="relative text-sm font-medium text-white">{label}</p>
      {note ? <p className="text-dim relative text-xs">{note}</p> : null}
    </div>
  );
}
