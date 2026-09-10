"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "./logo";
import { ArrowIcon, cx } from "./ui";
import { mainNav, primaryCta, utilityNav } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation. This is a response to a click, so it
  // belongs in the click handler — deriving it from `pathname` instead would
  // mean either a state update during render (which breaks hydration) or one
  // inside an effect (an extra render pass, and a lint error).
  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  // Escape closes the dropdown / mobile panel.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openWithDelay = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const closeWithDelay = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 sm:top-5">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
          <nav
            aria-label="Primary"
            className={cx(
              "flex items-center gap-2 rounded-full border p-2 transition-all duration-300",
              scrolled
                ? "border-line bg-ink/85 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                : "border-white/[0.07] bg-ink/60 backdrop-blur-lg",
            )}
          >
            <Logo className="shrink-0 pr-3 pl-3" />

            {/* Desktop links */}
            <ul className="mx-auto hidden items-center lg:flex">
              {mainNav.map((item) => {
                const active = isActive(item.href);

                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cx(
                          "rounded-full px-3.5 py-2 text-[13.5px] transition-colors xl:px-4",
                          active
                            ? "text-white"
                            : "text-mist hover:text-white",
                        )}
                        aria-current={active ? "page" : undefined}
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const open = openMenu === item.label;

                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => openWithDelay(item.label)}
                    onMouseLeave={closeWithDelay}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={open}
                      aria-haspopup="true"
                      onFocus={() => openWithDelay(item.label)}
                      className={cx(
                        "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] transition-colors xl:px-4",
                        active || open
                          ? "text-white"
                          : "text-mist hover:text-white",
                      )}
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                        className={cx(
                          "h-3 w-3 transition-transform duration-200",
                          open && "rotate-180",
                        )}
                      >
                        <path
                          d="M3 4.5 6 7.5 9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {/* Ventures dropdown */}
                    <div
                      className={cx(
                        "absolute top-full left-1/2 w-[420px] -translate-x-1/2 pt-3 transition-all duration-200",
                        open
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0",
                      )}
                    >
                      <ul className="border-line bg-surface grid grid-cols-1 gap-0.5 rounded-3xl border p-2.5 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeAll}
                              className="hover:bg-surface-2 group flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-colors"
                            >
                              <span className="group-hover:text-royal text-[13.5px] text-white transition-colors">
                                {child.label}
                              </span>
                              {child.note ? (
                                <span className="text-dim shrink-0 text-[11px] tracking-wide">
                                  {child.note}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Right side */}
            <div className="ml-auto flex shrink-0 items-center gap-1.5 lg:ml-0">
              <Link
                href={utilityNav.href}
                className="text-mist hidden items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] transition-colors hover:text-white xl:flex"
              >
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                  <path d="M4.5 3.2 11 7l-6.5 3.8V3.2Z" fill="currentColor" />
                </svg>
                {utilityNav.label}
              </Link>

              <Link
                href={primaryCta.href}
                className="bg-royal hover:bg-royal-2 hidden rounded-full px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors sm:block"
              >
                {primaryCta.label}
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="border-line hover:border-white/25 flex h-10 w-10 items-center justify-center rounded-full border text-white transition-colors lg:hidden"
              >
                <span className="sr-only">Menu</span>
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className="h-4 w-4">
                  {mobileOpen ? (
                    <path
                      d="M4 4l10 10M14 4L4 14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M2.5 5.5h13M2.5 12.5h13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="bg-ink/97 fixed inset-0 z-40 overflow-y-auto pt-28 pb-16 backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeAll}
                  className="border-line-soft flex items-center justify-between border-b py-4 text-2xl font-medium text-white"
                >
                  {item.label}
                  <ArrowIcon className="text-dim h-5 w-5" />
                </Link>
                {item.children ? (
                  <ul className="border-line-soft grid gap-1 border-b py-3 pl-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={closeAll}
                          className="text-mist flex items-center justify-between py-2 text-sm hover:text-white"
                        >
                          {child.label}
                          {child.note ? (
                            <span className="text-dim text-[11px]">
                              {child.note}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href={primaryCta.href}
              className="bg-royal hover:bg-royal-2 rounded-full px-6 py-4 text-center text-sm font-medium text-white transition-colors"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={utilityNav.href}
              className="border-line rounded-full border px-6 py-4 text-center text-sm text-white"
            >
              Watch {utilityNav.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
