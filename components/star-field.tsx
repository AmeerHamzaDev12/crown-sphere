"use client";

import { useEffect, useRef } from "react";
import { cx } from "./ui";

/**
 * Drifting star field on a canvas.
 *
 * Two motions are layered: a slow continuous drift, and a scroll-linked
 * parallax where nearer stars travel further than distant ones. Both are
 * driven from one requestAnimationFrame loop.
 *
 * Canvas rather than DOM nodes — a few hundred stars as elements would cost far
 * more to lay out and paint than a single 2D context.
 *
 * `prefers-reduced-motion` gets a single static frame: the texture stays, the
 * movement goes.
 */

type Star = {
  x: number;
  /** Base position as a fraction of height, so a resize keeps the layout. */
  y: number;
  radius: number;
  /** 0.15 = distant and slow, 1 = near and fast. */
  depth: number;
  phase: number;
  /** Fraction of stars carry the brand purple instead of white. */
  tinted: boolean;
};

export function StarField({
  density = 1,
  parallax = 0.22,
  className,
}: {
  /** Multiplier on the star count. */
  density?: number;
  /** How far the nearest stars shift over a full viewport of scrolling. */
  parallax?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return false;

      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(((width * height) / 7000) * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        radius: Math.random() * 1.1 + 0.35,
        depth: Math.random() * 0.85 + 0.15,
        phase: Math.random() * Math.PI * 2,
        tinted: Math.random() < 0.28,
      }));

      return true;
    };

    const paint = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const scrolled = reduced ? 0 : window.scrollY;
      const drift = reduced ? 0 : time * 0.004;

      for (const star of stars) {
        // Nearer stars drift faster and shift further with the page.
        const offset = drift * star.depth + scrolled * parallax * star.depth;

        // Wrap through the canvas so the field never runs out.
        let y = (star.y * height - offset) % height;
        if (y < 0) y += height;
        const x = star.x * width;

        const twinkle = reduced
          ? 0.55
          : 0.4 + Math.sin(time * 0.0012 + star.phase) * 0.32;

        // Distant stars sit further back in the haze.
        const alpha = twinkle * (0.35 + star.depth * 0.65);

        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.tinted
          ? `rgba(215, 163, 222, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }
    };

    let ready = build();

    // Paint once up front rather than waiting on the first animation frame, so
    // the field is there immediately — and is still there if frames never
    // arrive (background tabs, some embedded webviews).
    if (ready) paint(0);

    const loop = (time: number) => {
      // No point drawing into a hidden tab.
      if (!document.hidden) {
        if (!ready) {
          ready = build();
          if (ready) paint(time);
        } else {
          paint(time);
        }
      }
      frame = requestAnimationFrame(loop);
    };

    if (!reduced) {
      frame = requestAnimationFrame(loop);
    }

    const onResize = () => {
      ready = build();
      if (ready) paint(0);
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, [density, parallax]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={cx("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
