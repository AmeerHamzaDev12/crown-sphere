import { cx } from "./ui";

/* ---------------------------------------------------------------------------
   Aurat Card app mockup — a CSS/SVG phone, no screenshot required.

   Everything animates with CSS only (see globals.css): the handset floats, the
   membership card catches a slow shimmer, and the benefit tiles stagger in.
   That keeps it a Server Component — no JS ships for any of it.

   Swap the screen for a real screenshot when the app design is signed off:
   replace <PhoneScreen /> with <Image src="/aurat-card-app.png" … fill />.
--------------------------------------------------------------------------- */

type Tile = { label: string; icon: React.ReactNode };

const iconClass = "h-5 w-5";

const tiles: Tile[] = [
  {
    label: "Savings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 15.5v-7Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M4 10.5h16" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Safety",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M12 3.5 19 6v6c0 4-3 6.8-7 8.5-4-1.7-7-4.5-7-8.5V6l7-2.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Health",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M12 4 3 8.5 12 13l9-4.5L12 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M6.5 10.5v4.8c0 1 2.5 2.4 5.5 2.4s5.5-1.4 5.5-2.4v-4.8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Partners",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="15" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11.2 11.2 13.8 13" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Market",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path
          d="M5 8h14l-1 11H6L5 8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

function PhoneScreen() {
  return (
    <div className="from-plum/80 via-ink to-ink relative flex h-full flex-col gap-4 overflow-hidden bg-gradient-to-b p-4">
      {/* status bar */}
      <div className="text-mist flex items-center justify-between px-1 text-[9px]">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="bg-mist/70 inline-block h-1.5 w-1.5 rounded-full" />
          <span className="bg-mist/70 inline-block h-2 w-1 rounded-[1px]" />
          <span className="bg-mist/70 inline-block h-2.5 w-1 rounded-[1px]" />
        </span>
      </div>

      <div>
        <p className="text-mist text-[10px]">Assalam-o-Alaikum</p>
        <p className="text-[15px] font-semibold text-white">Ayesha</p>
      </div>

      {/* membership card */}
      <div className="shimmer from-royal to-plum relative overflow-hidden rounded-2xl bg-gradient-to-br p-3.5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] tracking-[0.18em] text-white/70 uppercase">
              Aurat Card
            </p>
            <p className="mt-2 text-[13px] font-semibold text-white">
              Ayesha Khan
            </p>
            <p className="text-[9px] text-white/70">Verified member</p>
          </div>
          {/* QR stand-in */}
          <div className="grid h-9 w-9 shrink-0 grid-cols-3 gap-[2px] rounded-md bg-white/95 p-[3px]">
            {[1, 0, 1, 0, 1, 1, 1, 1, 0].map((on, i) => (
              <span
                key={i}
                className={cx(
                  "rounded-[1px]",
                  on ? "bg-ink" : "bg-transparent",
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* benefit tiles */}
      <ul className="grid grid-cols-3 gap-2">
        {tiles.map((tile, i) => (
          <li
            key={tile.label}
            className="tile-in border-line/80 bg-surface/80 text-mist flex flex-col items-center gap-1.5 rounded-xl border px-1 py-2.5"
            style={{ animationDelay: `${400 + i * 110}ms` }}
          >
            <span className="text-royal-2">{tile.icon}</span>
            <span className="text-[8.5px] text-white">{tile.label}</span>
          </li>
        ))}
      </ul>

      {/* nearby partner strip */}
      <div className="border-line/80 bg-surface/60 mt-auto rounded-xl border p-2.5">
        <p className="text-dim text-[8px] tracking-[0.14em] uppercase">
          Nearby partners
        </p>
        <div className="mt-2 space-y-1.5">
          {["City Pharmacy · 15% off", "Noor Salon · 20% off"].map((row) => (
            <div key={row} className="flex items-center gap-2">
              <span className="bg-royal h-1.5 w-1.5 shrink-0 rounded-full" />
              <span className="text-mist text-[9px]">{row}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Google Play / App Store buttons. */
export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cx("flex flex-wrap gap-3", className)}>
      <a
        href="#"
        className="border-line hover:border-royal/50 hover:bg-surface-2 group flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 transition-colors"
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
        className="border-line hover:border-royal/50 hover:bg-surface-2 group flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 transition-colors"
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
  const screenHeight = Math.round(width * 1.78);

  return (
    <div
      style={{ width }}
      className={cx("relative mx-auto max-w-full", className)}
    >
      {/* glow behind the handset */}
      <div
        aria-hidden="true"
        className="bg-royal/25 pointer-events-none absolute inset-6 rounded-full blur-3xl"
      />

      <div className="float-slow border-line bg-ink relative rounded-[2.2rem] border-[6px] p-1.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)]">
        {/* notch */}
        <div className="bg-ink absolute top-1.5 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl" />
        <div
          style={{ height: screenHeight }}
          className="relative overflow-hidden rounded-[1.7rem]"
        >
          <PhoneScreen />
        </div>
      </div>
    </div>
  );
}
