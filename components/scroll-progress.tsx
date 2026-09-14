"use client";

import { useEffect, useRef } from "react";

/**
 * Thin progress bar across the top of the viewport.
 *
 * Writes straight to the element's transform rather than through React state —
 * this updates on every scroll frame, and a re-render per frame would be
 * wasteful. Reads are coalesced into one animation frame.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let queued = false;

    const update = () => {
      queued = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
    >
      <div
        ref={ref}
        className="from-royal to-accent h-full origin-left scale-x-0 bg-gradient-to-r"
      />
    </div>
  );
}
