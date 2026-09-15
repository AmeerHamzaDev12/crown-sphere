"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ArrowIcon, cx, withAccent } from "./ui";

export type AuratSlide = {
  kicker: string;
  heading: string;
  body: string;
  cta: { label: string; href: string };
};

/**
 * Homepage Aurat Card slider.
 *
 * One looping product video sits behind every slide, so switching slides never
 * re-buffers it; each slide instead moves the "camera" (a slow scale/offset on
 * the video) while the copy crossfades.
 *
 * The advance is driven by the progress bar's own CSS animation ending, rather
 * than a separate timer. That keeps the bar and the slide change in lockstep:
 * pausing the animation (hover, focus, the pause button, a hidden tab) pauses
 * the advance with it, and nothing drifts out of sync on resume.
 *
 * Reduced motion: no auto-advance, no camera move, video paused. The global
 * reduced-motion rule shortens every animation to ~0ms, which would otherwise
 * fire `animationend` instantly and spin through the slides — so the handler
 * checks the media query itself instead of trusting state set in an effect.
 */

const SLIDE_MS = 6500;

// Per-slide camera framing on the video. Cycles if there are more slides.
const CAMERA = [
  "scale(1.04) translate(0%, 0%)",
  "scale(1.16) translate(-3%, 1.5%)",
  "scale(1.1) translate(3%, -2%)",
  "scale(1.2) translate(-1.5%, -2.5%)",
  "scale(1.08) translate(2%, 2%)",
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function AuratCardSlider({
  slides,
  video,
  badge,
  className,
}: {
  slides: readonly AuratSlide[];
  video: string;
  badge?: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  const paused = hoverPaused || manualPaused;
  const count = slides.length;
  const go = (i: number) => setIndex(((i % count) + count) % count);

  // The video is ambient: it keeps playing on hover, but stops when the viewer
  // explicitly pauses or has asked for reduced motion.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (manualPaused || prefersReducedMotion()) {
      v.pause();
    } else {
      v.play().catch(() => {
        /* autoplay can be refused (data saver, low power) — the poster frame stays */
      });
    }
  }, [manualPaused]);

  const slide = slides[index];

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      aria-label="Aurat Card highlights"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocus={() => setHoverPaused(true)}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) {
          setHoverPaused(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      className={cx(
        "border-line bg-surface rounded-card-lg relative overflow-hidden border",
        paused && "slider-paused",
        className,
      )}
    >
      {/* ------------------------------------------------------------ media */}
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/8] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[64%]">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
          style={{ transform: CAMERA[index % CAMERA.length] }}
          className="slider-camera h-full w-full object-cover"
        />
        {/* brand tint: pulls the grey studio backdrop into the plum palette */}
        <div
          aria-hidden="true"
          className="bg-royal/30 pointer-events-none absolute inset-0 mix-blend-multiply"
        />
        {/* fade into the copy panel — upward on mobile, leftward on desktop */}
        <div
          aria-hidden="true"
          className="from-surface via-surface/30 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent lg:bg-gradient-to-r lg:via-surface/55"
        />
        {badge ? (
          <span className="border-accent/35 bg-ink/55 absolute top-4 right-4 flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] text-white backdrop-blur-md sm:top-6 sm:right-6">
            <span className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full" />
            {badge}
          </span>
        ) : null}
      </div>

      {/* ------------------------------------------------------------- copy */}
      <div className="relative flex flex-col p-7 sm:p-10 lg:min-h-[480px] lg:w-[50%] lg:p-12">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.18em] text-[#c7bacb] uppercase">
            <span className="bg-accent inline-block h-px w-[25px] shrink-0" />
            Aurat Card
          </p>
          <p className="text-dim text-xs tabular-nums">
            <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
            {" / "}
            {String(count).padStart(2, "0")}
          </p>
        </div>

        {/* aria-live stays off while slides move on their own, so screen
            readers aren't interrupted every few seconds */}
        <div
          aria-live={paused ? "polite" : "off"}
          className="mt-8 flex-1 lg:mt-10"
        >
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
            className="slide-in"
          >
            <p className="text-accent text-xs font-semibold tracking-[0.14em] uppercase">
              {slide.kicker}
            </p>
            <h3 className="display mt-4 text-[clamp(2rem,4vw,3.25rem)]">
              {withAccent(slide.heading)}
            </h3>
            <p className="text-mist mt-5 max-w-md text-base leading-relaxed">
              {slide.body}
            </p>
            <Link
              href={slide.cta.href}
              className="group mt-8 inline-flex items-center gap-4 border-b border-[#8f6e94] pb-1.5 text-sm text-white transition-colors hover:border-accent"
            >
              {slide.cta.label}
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* --------------------------------------------------------- controls */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex flex-1 gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.kicker}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${s.kicker}`}
                aria-current={i === index ? "true" : undefined}
                className="relative h-6 min-w-6 flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/12">
                  <span
                    key={i === index ? `active-${index}` : `idle-${i}`}
                    onAnimationEnd={
                      i === index
                        ? (e) => {
                            if (e.animationName !== "slider-progress") return;
                            if (prefersReducedMotion()) return;
                            go(index + 1);
                          }
                        : undefined
                    }
                    style={
                      i === index
                        ? ({ "--slide-ms": `${SLIDE_MS}ms` } as React.CSSProperties)
                        : undefined
                    }
                    className={cx(
                      "bg-accent block h-full w-full origin-left",
                      i < index && "scale-x-100",
                      i === index && "slider-progress",
                      i > index && "scale-x-0",
                    )}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="flex shrink-0 gap-1.5">
            <button
              type="button"
              onClick={() => setManualPaused((p) => !p)}
              aria-pressed={manualPaused}
              aria-label={manualPaused ? "Play slides" : "Pause slides"}
              className="hover:border-accent flex h-9 w-9 items-center justify-center rounded-full border border-[#705a76] text-white transition-colors"
            >
              {manualPaused ? (
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M5 3.5v9l7-4.5-7-4.5Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <rect x="4" y="3.5" width="2.6" height="9" rx="0.6" />
                  <rect x="9.4" y="3.5" width="2.6" height="9" rx="0.6" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="hover:border-accent flex h-9 w-9 items-center justify-center rounded-full border border-[#705a76] text-white transition-colors"
            >
              <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="hover:border-accent flex h-9 w-9 items-center justify-center rounded-full border border-[#705a76] text-white transition-colors"
            >
              <ArrowIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
