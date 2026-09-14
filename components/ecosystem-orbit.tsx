"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { ventures } from "@/content/ventures";
import { ArrowIcon, Eyebrow, cx } from "./ui";

/**
 * The ecosystem explorer from the reference build: eight venture nodes on a
 * slowly rotating ring around CSPL, with a panel showing the selected one.
 *
 * Geometry matches the reference exactly — nodes every 45° starting at the top,
 * on a circle of radius 42%, which is exactly the same radius as the solid
 * guide ring's 8% inset. As long as this file is the only thing controlling
 * size/position for the ring, dashed ring, nodes, and center, they cannot
 * drift apart from each other.
 *
 * IMPORTANT: this version does NOT use the class names `orbit-ring`,
 * `orbit-ring-dashed`, `orbit-spin`, `orbit-node`, `orbit-center`, or
 * `orbit-stage` on purpose. If your globals.css still has rules for those
 * selectors (carried over from the original static sample), they can no
 * longer affect this component — but it's worth deleting them from
 * globals.css since nothing needs them anymore.
 *
 * Rotation is driven by React state (`rotationDeg`) and applied as an inline
 * `transform: rotate()` on the spinning layer, with each node's label
 * counter-rotated by the same amount inline so it stays upright. Rotation
 * pauses whenever `paused` is true (hover or keyboard focus on the ring),
 * same as the auto-advancing tour.
 */

const TOUR_MS = 6000;
const TICK_MS = 60;
const ROTATION_MS = 60000; // one full 360° turn every 60s — tune to taste

export function EcosystemOrbit({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
}) {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [rotationDeg, setRotationDeg] = useState(0);
  const barRef = useRef<HTMLSpanElement>(null);

  const go = useCallback((next: number) => {
    setSelected((next + ventures.length) % ventures.length);
    setElapsed(0);
  }, []);

  // Auto-advance the tour AND advance the ring's rotation on the same timer.
  // Writing the bar width to the DOM rather than through state keeps this to
  // one re-render per venture instead of one per tick; rotation still needs
  // a state update each tick since it changes the transform on many nodes.
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + TICK_MS;
        if (next >= TOUR_MS) {
          setSelected((s) => (s + 1) % ventures.length);
          return 0;
        }
        if (barRef.current) {
          barRef.current.style.width = `${(next / TOUR_MS) * 100}%`;
        }
        return next;
      });

      setRotationDeg((prev) => (prev + (TICK_MS / ROTATION_MS) * 360) % 360);
    }, TICK_MS);

    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (barRef.current) barRef.current.style.width = `${(elapsed / TOUR_MS) * 100}%`;
  }, [elapsed]);

  const active = ventures[selected];

  return (
    <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-[7%]">
      {/* ----------------------------------------------------------- the ring */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="relative mx-auto aspect-square w-full max-w-[620px]">
          {/* Guide rings — pure Tailwind, no custom class, so nothing external
              can resize or reposition them. Radius = 42% of this box, same as
              the nodes below. pointer-events-none keeps them from ever
              swallowing a click meant for a node. */}
          <div className="pointer-events-none absolute inset-[8%] rounded-full border border-[#6c466f65]" />
          <div className="pointer-events-none absolute inset-[24%] rounded-full border border-dashed border-[#6c466f65]" />

          {/* rotating layer — rotation applied inline, transform-origin pinned
              to dead-center so it can only ever spin in place, never drift */}
          <div
            className="absolute inset-0"
            style={{
              transform: `rotate(${rotationDeg}deg)`,
              transformOrigin: "50% 50%",
            }}
          >
            {ventures.map((venture, i) => {
              const angle = ((i * 45 - 90) * Math.PI) / 180;
              const x = 50 + 42 * Math.cos(angle);
              const y = 50 + 42 * Math.sin(angle);
              const isActive = i === selected;

              return (
                <button
                  key={venture.slug}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show ${venture.name}`}
                  aria-pressed={isActive}
                  style={
                    {
                      left: `${x}%`,
                      top: `${y}%`,
                      "--venture": venture.color,
                    } as React.CSSProperties
                  }
                  className={cx(
                    "bg-ink absolute w-[104px] -translate-x-1/2 -translate-y-1/2 px-0.5 py-1.5 text-xs sm:w-[124px]",
                    isActive ? "text-white" : "text-[#c7bbcb]",
                  )}
                >
                  {/* counter-rotate the visible content only, so the button's
                      on-circle position still travels with the ring but the
                      number + label stay upright and readable */}
                  <span
                    style={{ transform: `rotate(${-rotationDeg}deg)` }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span
                      className={cx(
                        "grid h-[43px] w-[43px] place-items-center rounded-full border text-[13px] transition-all duration-300",
                        isActive
                          ? "border-[var(--venture)] bg-[var(--venture)] text-[#211722] shadow-[0_0_35px_#bd75c52b]"
                          : "border-[#75607b] bg-[#201826]",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-center leading-tight">{venture.name}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* centre — a sibling of the rotating layer above, never inside it,
              so it structurally cannot move or spin. Fixed at exact center
              via equal 32% insets on all four sides. */}
          <div className="border-accent/30 absolute inset-[32%] flex flex-col items-center justify-center rounded-full border bg-[radial-gradient(#79207c40,transparent)]">
            <Image
              src="/crown.webp"
              alt=""
              width={70}
              height={44}
              className="mb-3 h-11 w-[70px] object-contain"
            />
            <span className="text-[22px] tracking-[0.14em]">CSPL</span>
            <span className="text-mist mt-2 text-center text-[9px] leading-[1.7] tracking-[0.1em]">
              ONE CONNECTED
              <br />
              ECOSYSTEM
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- the selection */}
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display mt-5 text-[clamp(2.4rem,4vw,4rem)]">{heading}</h2>
        <p className="text-mist mt-6 max-w-md leading-relaxed">{intro}</p>
        <p className="text-accent mt-4 text-sm">
          An automatic journey through our ventures. Explore any time.
        </p>

        <div className="border-line mt-10 flex min-h-[390px] flex-col border bg-gradient-to-br from-[#2d1d30] to-[#1b151f]">
          <div className="border-line flex items-center justify-between gap-4 border-b p-6">
            <span className="text-[11px] tracking-[0.17em] text-[#c7bacb] uppercase">
              Venture {String(selected + 1).padStart(2, "0")} /{" "}
              {String(ventures.length).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-[#ded1df]">
              {active.status}
            </span>
          </div>

          <div key={active.slug} className="selection-body flex-1 p-8">
            <span
              className="text-[11px] font-semibold tracking-[0.12em] uppercase"
              style={{ color: active.color }}
            >
              {active.points[0]}
            </span>
            <h3 className="display mt-3 text-[clamp(1.75rem,3vw,2.5rem)]">
              {active.name}
            </h3>
            <p className="text-mist mt-5 max-w-[390px] leading-relaxed">
              {active.summary}
            </p>

            {/* Same bullet treatment as the (now removed) grid cards, pulled
                from the same ventures.points data so the two never fall out
                of sync again. */}
            <ul className="border-line-soft mt-6 max-w-[390px] space-y-2 border-t pt-6">
              {active.points.slice(0, 4).map((point) => (
                <li key={point} className="text-dim flex gap-2.5 text-xs">
                  <span className="bg-accent mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href={active.href}
              className="group mt-7 inline-flex items-center gap-6 border-b border-[#8f6e94] pb-1.5 text-sm text-white"
            >
              Enter this venture
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="h-0.5 bg-white/5">
            <span ref={barRef} className="bg-accent block h-full w-0" />
          </div>

          <div className="border-line flex items-center justify-between gap-3 border-t px-6 py-4">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="text-accent text-xs whitespace-nowrap transition-colors hover:text-white"
            >
              {paused ? "▶ Play tour" : "❙❙ Pause tour"}
            </button>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => go(selected - 1)}
                aria-label="Previous venture"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#705a76] transition-colors hover:border-accent"
              >
                <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(selected + 1)}
                aria-label="Next venture"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#705a76] transition-colors hover:border-accent"
              >
                <ArrowIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}