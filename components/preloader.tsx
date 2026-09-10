"use client";

import { useEffect, useRef } from "react";
import { LogoMark } from "./logo";

/**
 * First-load splash: the crown mark with its rays pulsing outward and a shine
 * sweeping across it, over the wordmark.
 *
 * Safety: an overlay that fails to clear is a dead site, so it never depends on
 * JavaScript alone. The CSS carries a backstop animation that hides it at 2.6s
 * regardless; the effect below simply hides it sooner (1.25s) when scripting is
 * working. See `.preloader` in globals.css.
 *
 * It lives in the root layout, which persists across client-side navigation, so
 * it mounts once and never replays when moving between pages.
 */
export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timer = setTimeout(() => {
      el.setAttribute("data-done", "true");
      // Zeroes --enter-delay so later client-side navigation animates straight
      // away rather than waiting for a preloader that will never show again.
      document.documentElement.setAttribute("data-loaded", "");
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className="preloader" aria-hidden="true">
      <div className="flex flex-col items-center gap-7">
        <LogoMark
          animated
          gradientId="cs-crown-loader"
          className="h-[74px] w-[136px]"
        />

        <p className="loader-word font-display text-xl font-semibold text-white">
          Crowns Sphere
        </p>

        <span className="loader-bar" />
      </div>
    </div>
  );
}
