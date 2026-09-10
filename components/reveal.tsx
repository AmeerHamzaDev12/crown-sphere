"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Lightweight scroll reveal. No animation library — just IntersectionObserver
 * plus the CSS in globals.css.
 *
 * The reveal is a visual detail, so it toggles a data attribute on the element
 * rather than React state: no re-render, no cascading updates.
 *
 * Content must never be permanently invisible, so there are three independent
 * ways an element gets shown:
 *
 *   1. `data-reveal-ready` is only set on <html> once JS runs (see layout.tsx),
 *      so with no JS at all nothing is ever hidden in the first place.
 *   2. Anything already on screen when it mounts is shown immediately.
 *   3. An IntersectionObserver handles the rest, backed by a shared scroll
 *      listener in case the observer never delivers (some embedded webviews
 *      and background tabs starve it).
 */

/* --------------------- shared scroll fallback (module-level) -------------- */

const pending = new Set<HTMLElement>();
let timer: ReturnType<typeof setTimeout> | null = null;

function show(el: HTMLElement) {
  el.setAttribute("data-reveal", "shown");
  unwatch(el);
}

function isInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

function sweep() {
  timer = null;
  for (const el of [...pending]) {
    if (isInView(el)) show(el);
  }
}

/** Trailing throttle — always runs after the last scroll event in a burst. */
function schedule() {
  if (timer) return;
  timer = setTimeout(sweep, 100);
}

function watch(el: HTMLElement) {
  if (pending.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  pending.add(el);
}

function unwatch(el: HTMLElement) {
  pending.delete(el);
  if (pending.size === 0) {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
}

/* -------------------------------- component ------------------------------- */

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined" || isInView(el)) {
      show(el);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show(el);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    watch(el);

    return () => {
      observer.disconnect();
      unwatch(el);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined
      }
      className={className}
    >
      {children}
    </Tag>
  );
}
