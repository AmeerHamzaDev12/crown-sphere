import { cx } from "./ui";

/**
 * A named, clearly-labelled stand-in for media that has not been supplied yet.
 *
 * Deliberately *not* a stock photo — it should be obvious at a glance that this
 * slot is awaiting a real asset, so nothing placeholder-ish ever reaches
 * production unnoticed. Each slot carries the name of the asset expected, so
 * whoever swaps it in knows exactly what belongs here.
 */
export function MediaPlaceholder({
  label,
  kind = "Photo",
  note,
  aspect = "4/3",
  className,
}: {
  /** What asset belongs here, e.g. "Amrri Hotel — deluxe room". */
  label: string;
  kind?: "Photo" | "Video" | "Gallery";
  note?: string;
  aspect?: string;
  className?: string;
}) {
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
