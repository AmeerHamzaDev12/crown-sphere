import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { StarField } from "./star-field";

/* ---------------------------------------------------------------------------
   Shared building blocks. Every page is assembled from these, so a change
   here restyles the whole site consistently.
--------------------------------------------------------------------------- */

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Renders *asterisked* spans as <em>, which globals.css styles as Georgia
 * italic in lilac — the accent treatment from the reference build.
 *
 * Keeping the marker in the content strings means copy stays in plain .ts
 * files (no JSX), so headings can be edited without touching components:
 *
 *   heading: "Different worlds. *Shared ambition.*"
 */
export function withAccent(value: ReactNode): ReactNode {
  if (typeof value !== "string" || !value.includes("*")) return value;

  return value.split(/\*([^*]+)\*/g).map((part, i) =>
    // Odd indices are the captured groups, i.e. the emphasised text.
    i % 2 === 1 ? <em key={i}>{part}</em> : part,
  );
}

/* --------------------------------- layout -------------------------------- */

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1280px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

type Tone = "ink" | "surface" | "cream";

const toneClass: Record<Tone, string> = {
  ink: "bg-ink text-white",
  surface: "bg-ink-2 text-white",
  // `tone-cream` switches accent <em> words to the deep purple — see globals.css
  cream: "tone-cream bg-cream text-cream-ink",
};

export function Section({
  id,
  tone = "ink",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cx(
        "relative py-20 md:py-28 lg:py-32",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}

/* ---------------------------------- type --------------------------------- */

export function Eyebrow({
  children,
  tone = "ink",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "flex items-center gap-2.5 text-[11px] font-medium tracking-[0.18em] uppercase",
        tone === "cream" ? "text-ink/55" : "text-mist",
        className,
      )}
    >
      {/* the reference's `.tiny-line`: a 25px rule before the label */}
      <span className="bg-accent inline-block h-px w-[25px] shrink-0" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "ink",
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cx(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow
          tone={tone}
          className={align === "center" ? "justify-center" : undefined}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="display mt-5 text-[clamp(2.4rem,4vw,4rem)]">
        {withAccent(title)}
      </h2>
      {intro ? (
        <p
          className={cx(
            "measure mt-6 text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            tone === "cream" ? "text-ink/70" : "text-mist",
          )}
        >
          {intro}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/* --------------------------------- links --------------------------------- */

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cx("h-4 w-4", className)}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

/* Our pill shape, the reference's colours. The border on `primary` matters:
   #79207c against the near-black canvas is only ~2:1, so the button needs an
   edge to read as a button. */
const buttonVariant: Record<ButtonVariant, string> = {
  primary:
    "bg-royal text-white border border-[#9a5c9d] hover:bg-royal-2 hover:border-accent hover:shadow-[0_12px_36px_-12px_var(--color-royal)] hover:-translate-y-0.5",
  secondary:
    "border border-[#7c627f] bg-white/[0.03] text-white hover:border-accent hover:bg-white/[0.07] hover:-translate-y-0.5",
  ghost: "text-white hover:text-accent",
  light: "bg-[#331633] text-white hover:bg-royal hover:-translate-y-0.5",
};

export function CtaButton({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classes = cx(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-200",
    buttonVariant[variant],
    className,
  );

  const inner = (
    <>
      {children}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}

export function ArrowLink({
  href,
  tone = "ink",
  className,
  children,
}: {
  href: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "group inline-flex items-center gap-2 text-sm font-medium transition-colors",
        tone === "cream"
          ? "text-ink hover:text-royal"
          : "text-white hover:text-accent",
        className,
      )}
    >
      {children}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

/* --------------------------------- cards --------------------------------- */

export function Card({
  as: Tag = "div",
  id,
  tone = "ink",
  className,
  children,
}: {
  as?: "div" | "article" | "li";
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cx(
        "rounded-card relative overflow-hidden p-7 sm:p-8",
        tone === "cream"
          ? "bg-ink/[0.04] border-ink/10 border"
          : "bg-surface border-line border",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Card that lifts and warms its border on hover — use for linked cards. */
export function LinkCard({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "rounded-card group bg-surface border-line hover:border-accent/40 hover:bg-surface-2 relative flex flex-col overflow-hidden border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function StatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  // The reference uses one neutral outlined pill for every status, rather than
  // a traffic-light palette. Matching that keeps the page to the brand colours.
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 text-xs text-[#ded1df]",
        className,
      )}
    >
      {status}
    </span>
  );
}

/* --------------------------------- lists --------------------------------- */

export function CheckList({
  items,
  tone = "ink",
  className,
}: {
  items: readonly string[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <ul className={cx("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="text-accent mt-1 h-4 w-4 shrink-0"
          >
            <path
              d="M3.5 8.5 6.5 11.5 12.5 5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={cx(
              "text-sm leading-relaxed",
              tone === "cream" ? "text-ink/75" : "text-mist",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Compact pill list — good for capability chips inside a card. */
export function PillList({
  items,
  tone = "ink",
  className,
}: {
  items: readonly string[];
  tone?: Tone;
  className?: string;
}) {
  return (
    <ul className={cx("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cx(
            "rounded-full border px-3.5 py-1.5 text-xs",
            tone === "cream"
              ? "border-ink/12 text-ink/70"
              : "border-line text-mist",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------- numbers -------------------------------- */

export function Stat({
  value,
  label,
  tone = "ink",
}: {
  value: string;
  label: string;
  tone?: Tone;
}) {
  return (
    <div>
      <p className="display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold">
        {value}
      </p>
      <p
        className={cx(
          "mt-3 text-sm leading-relaxed",
          tone === "cream" ? "text-ink/60" : "text-mist",
        )}
      >
        {label}
      </p>
    </div>
  );
}

export type Step = { title: string; body?: string };

export function Steps({
  steps,
  tone = "ink",
  columns = 4,
}: {
  steps: readonly Step[];
  tone?: Tone;
  columns?: 3 | 4 | 6;
}) {
  const cols = {
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
    6: "sm:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <ol className={cx("grid gap-px", cols)}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={cx(
            "relative p-6 sm:p-7",
            tone === "cream" ? "bg-cream" : "bg-ink",
            "outline outline-offset-0",
            tone === "cream" ? "outline-ink/10" : "outline-line",
          )}
        >
          <span className="text-accent font-display text-sm">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-base font-medium">{step.title}</h3>
          {step.body ? (
            <p
              className={cx(
                "mt-2.5 text-sm leading-relaxed",
                tone === "cream" ? "text-ink/65" : "text-mist",
              )}
            >
              {step.body}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------- page hero ------------------------------- */

export function PageHero({
  eyebrow,
  title,
  intro,
  status,
  actions,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  status?: string;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="bg-ink relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <StarField density={0.8} parallax={0.18} />
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="from-plum/45 pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl"
      />
      <Container className="relative">
        <div className="rise-in" style={{ "--enter-stagger": "80ms" } as React.CSSProperties}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          className="display rise-in mt-6 max-w-4xl text-[clamp(2.5rem,6.5vw,5rem)] font-semibold"
          style={{ "--enter-stagger": "180ms" } as React.CSSProperties}
        >
          {withAccent(title)}
        </h1>
        {intro ? (
          <p
            className="text-mist rise-in mt-7 max-w-2xl text-lg leading-relaxed text-pretty"
            style={{ "--enter-stagger": "290ms" } as React.CSSProperties}
          >
            {intro}
          </p>
        ) : null}
        {status ? (
          <div className="rise-in" style={{ "--enter-stagger": "360ms" } as React.CSSProperties}>
            <StatusBadge status={status} className="mt-8" />
          </div>
        ) : null}
        {actions ? (
          <div
            className="rise-in mt-10 flex flex-wrap items-center gap-3"
            style={{ "--enter-stagger": "430ms" } as React.CSSProperties}
          >
            {actions}
          </div>
        ) : null}
        {children}
      </Container>
    </header>
  );
}

/* -------------------------------- cta band ------------------------------- */

export function CtaBand({
  eyebrow = "Get in touch",
  title,
  body,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  actions: ReactNode;
}) {
  return (
    <Section tone="ink" className="overflow-hidden">
      <Container>
        <div className="rounded-card-lg border-line from-surface to-ink relative overflow-hidden border bg-gradient-to-br px-7 py-16 sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="bg-plum/50 pointer-events-none absolute -right-24 -bottom-32 h-[420px] w-[420px] rounded-full blur-3xl"
          />
          <div className="relative max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2rem,5vw,3.75rem)]">
              {withAccent(title)}
            </h2>
            {body ? (
              <p className="text-mist mt-6 text-lg leading-relaxed text-pretty">
                {body}
              </p>
            ) : null}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {actions}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------- disclaimer ------------------------------ */

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p className="border-line text-dim mt-12 border-t pt-8 text-xs leading-relaxed">
      {children}
    </p>
  );
}
