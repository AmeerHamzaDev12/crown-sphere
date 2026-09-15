"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { appScreens } from "@/content/aurat-card";
import { cx } from "./ui";

/* ---------------------------------------------------------------------------
   Aurat Card app mockup — the real screenshots, cycling inside a phone frame.

   Four genuine screens (public/aurat-card-*.jpeg — Aangan, Humraah, Sahara,
   Apnay) crossfade in sequence, so the mockup shows the actual product rather
   than a redrawn approximation. The screen area's aspect ratio is set to match
   the screenshots' real 540×1208 exactly, so nothing is ever cropped.

   The gold ring mark stays exactly as it was — it isn't part of the
   screenshots, so swapping the screen content doesn't touch it.

   Advance is driven by a CSS animation's `animationend` (see .shot-progress
   in globals.css), the same pattern as the homepage slider: pausing the
   animation (hover, focus, reduced motion) pauses the advance with it, so
   nothing can drift out of sync.
--------------------------------------------------------------------------- */

const SHOT_MS = 3600;
const REAL_ASPECT = 1208 / 540; // height / width of the source screenshots

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** The brushed gold ring from the app's branding — unchanged. */
function RingMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="ac-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c9a0" />
          <stop offset="45%" stopColor="#b98a5e" />
          <stop offset="100%" stopColor="#e3bd91" />
        </linearGradient>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="url(#ac-ring)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="104 9"
      />
      <circle
        cx="24"
        cy="25.5"
        r="15"
        stroke="url(#ac-ring)"
        strokeWidth="1.1"
        opacity="0.65"
        strokeDasharray="78 14"
      />
    </svg>
  );
}

/** Google Play / App Store buttons. */
export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cx("flex flex-wrap gap-3", className)}>
      <a
        href="#"
        className="border-line hover:border-accent/50 hover:bg-surface-2 group flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path d="M4 2.8v18.4c0 .5.5.9 1 .6l13.2-9.2c.4-.3.4-.9 0-1.2L5 2.2c-.5-.3-1 .1-1 .6Z" fill="#5ce07a" />
          <path d="M4 2.8v18.4c0 .5.5.9 1 .6l7-9.8-7-9.8c-.5-.3-1 .1-1 .6Z" fill="#4ac3f0" />
          <path d="M18.2 11.4 15 9.2l-2.4 3.4 2.4 3.4 3.2-2.2c.4-.3.4-.9 0-1.4Z" fill="#f5c14e" />
          <path d="M5 21.8 15 15l-2.4-2.4L5 21.8Z" fill="#f0674e" />
        </svg>
        <span className="text-left">
          <span className="text-dim block text-[9px] tracking-wide uppercase">
            Get it on
          </span>
          <span className="block text-sm font-medium text-white">
            Google Play
          </span>
        </span>
      </a>

      <a
        href="#"
        className="border-line hover:border-accent/50 hover:bg-surface-2 group flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M16.4 12.6c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.6 2.3 2.8 2.2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.7-2.1.9-1.2 1.2-2.4 1.2-2.4s-2.3-.9-2.3-3.8ZM14.3 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.7-1.3Z" />
        </svg>
        <span className="text-left">
          <span className="text-dim block text-[9px] tracking-wide uppercase">
            Download on the
          </span>
          <span className="block text-sm font-medium text-white">App Store</span>
        </span>
      </a>
    </div>
  );
}

export function PhoneMockup({
  width = 248,
  className,
}: {
  /** Handset width in px. Set as an inline style so it can't lose a
      specificity tie with a Tailwind width class from the caller. */
  width?: number;
  className?: string;
}) {
  const screenHeight = Math.round(width * REAL_ASPECT);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const barRef = useRef<HTMLSpanElement>(null);

  // Preload the next screenshot so the crossfade never shows a blank frame.
  useEffect(() => {
    const next = appScreens[(index + 1) % appScreens.length];
    const img = new window.Image();
    img.src = next.src;
  }, [index]);

  return (
    <div
      style={{ width }}
      className={cx("relative mx-auto max-w-full", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* glow behind the handset */}
      <div
        aria-hidden="true"
        className="bg-royal/35 pointer-events-none absolute inset-6 rounded-full blur-3xl"
      />

      <div className="float-slow border-line bg-ink relative rounded-[2.2rem] border-[6px] p-1.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)]">
        {/* physical notch — separate from the status bar baked into each
            screenshot, so it stays regardless of which screen is showing */}
        <div className="bg-ink absolute top-1.5 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl" />

        <div
          style={{ height: screenHeight }}
          className={cx("relative overflow-hidden rounded-[1.7rem] bg-white", paused && "shots-paused")}
        >
          {appScreens.map((screen, i) => (
            <div
              key={screen.src}
              aria-hidden={i !== index}
              className={cx(
                "absolute inset-0 transition-opacity duration-700 ease-out",
                i === index ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={screen.src}
                alt={screen.label}
                fill
                sizes={`${width}px`}
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}

          {/* gold ring watermark, small, bottom-right — the one piece of
              brand chrome layered over the real screenshots */}
          <RingMark className="pointer-events-none absolute right-2.5 bottom-2.5 z-10 h-6 w-6 opacity-80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]" />

          {/* progress dots, driven by the same CSS animation that advances
              the slide — see .shot-progress in globals.css */}
          <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
            {appScreens.map((screen, i) => (
              <span
                key={screen.src}
                className="relative h-[3px] w-5 overflow-hidden rounded-full bg-white/40"
              >
                <span
                  key={i === index ? `active-${index}` : `idle-${i}`}
                  onAnimationEnd={
                    i === index
                      ? (e) => {
                          if (e.animationName !== "shot-progress") return;
                          if (prefersReducedMotion()) return;
                          setIndex((cur) => (cur + 1) % appScreens.length);
                        }
                      : undefined
                  }
                  style={
                    i === index
                      ? ({ "--shot-ms": `${SHOT_MS}ms` } as React.CSSProperties)
                      : undefined
                  }
                  className={cx(
                    "block h-full w-full origin-left bg-white",
                    i < index && "scale-x-100",
                    i === index && "shot-progress",
                    i > index && "scale-x-0",
                  )}
                  ref={i === index ? barRef : undefined}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
