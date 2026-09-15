import { FeatureIcon } from "./feature-icons";
import { Reveal } from "./reveal";
import { cx } from "./ui";

/**
 * The four "what we do" pillars as staggered feature tiles.
 *
 * Each tile has a 1px gradient edge (a padded wrapper showing a gradient behind
 * an inset surface), an icon badge, and an oversized Georgia numeral sitting
 * behind the content — the same serif the site uses for accent words. The
 * right-hand column is dropped half a step so the grid reads as a sequence
 * rather than a table.
 */
export function PillarGrid({
  items,
  className,
}: {
  items: readonly { title: string; body: string }[];
  className?: string;
}) {
  return (
    <ul className={cx("grid gap-4 sm:grid-cols-2 sm:pb-10", className)}>
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={i * 90}
          className={cx(i % 2 === 1 && "sm:translate-y-10")}
        >
          <div className="group relative h-full rounded-[1.6rem] bg-[linear-gradient(140deg,rgba(215,163,222,0.5),rgba(255,255,255,0.05)_42%,rgba(121,32,124,0.55))] p-px transition-transform duration-500 hover:-translate-y-1.5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.6rem-1px)] bg-[linear-gradient(165deg,#261b2b,#161019_70%)] p-7 transition-shadow duration-500 group-hover:shadow-[0_28px_60px_-28px_rgba(121,32,124,0.9)]">
              {/* glow that wakes on hover */}
              <div
                aria-hidden="true"
                className="bg-royal/0 group-hover:bg-royal/35 pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl transition-colors duration-700"
              />

              {/* oversized numeral behind the content */}
              <span
                aria-hidden="true"
                className="font-accent pointer-events-none absolute -top-2 right-5 text-[5.5rem] leading-none text-white/[0.045] italic transition-colors duration-500 group-hover:text-[#d7a3de]/15"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="from-royal relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br to-[#3d1440] text-white ring-1 ring-[#d7a3de]/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                <FeatureIcon name={item.title} className="h-[22px] w-[22px]" />
              </span>

              <h3 className="display relative mt-7 text-xl text-white">
                {item.title}
              </h3>
              <p className="text-mist relative mt-3 flex-1 text-sm leading-relaxed">
                {item.body}
              </p>

              {/* accent rule that stretches on hover */}
              <span
                aria-hidden="true"
                className="bg-accent relative mt-6 block h-px w-10 transition-all duration-500 group-hover:w-full"
              />
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
