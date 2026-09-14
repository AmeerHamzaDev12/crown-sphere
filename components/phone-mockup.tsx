import { appMockup } from "@/content/aurat-card";
import { cx } from "./ui";

/* ---------------------------------------------------------------------------
   Aurat Card app mockup — a CSS/SVG phone, no screenshot required.

   The screen reproduces the live app: a light lavender canvas, the white
   utility bar, the deep purple "Made for her" hero card with its gold ring
   mark, and the Silver/Gold membership tiers. The third tier sits below the
   fold exactly as it does on the real device.

   Everything animates with CSS only (see globals.css), so this stays a Server
   Component and ships no JavaScript.

   Swap for a real screenshot when you have one: replace <PhoneScreen /> with
   <Image src="/aurat-card-app.png" fill … />.
--------------------------------------------------------------------------- */

/** The brushed gold ring from the app's branding. */
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

function QrIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4H9M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15M9 20H5.5A1.5 1.5 0 0 1 4 18.5V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="8.5" y="8.5" width="7" height="7" rx="1" fill="currentColor" />
    </svg>
  );
}

const tierStyle = [
  // Silver
  "bg-gradient-to-br from-[#c9c9cd] to-[#a8a8ae] text-[#2c2c31]",
  // Gold
  "bg-gradient-to-br from-[#e8ce1c] to-[#cdae05] text-[#3a3103]",
];

function PhoneScreen() {
  return (
    <div className="relative flex h-full flex-col gap-3 overflow-hidden bg-[#f7f2f8] p-3">
      {/* status bar */}
      <div className="flex items-center justify-between px-1 text-[8.5px] font-medium text-[#2a1f2e]">
        <span>9:50</span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2a1f2e]/70" />
          <span className="inline-block h-2 w-1 rounded-[1px] bg-[#2a1f2e]/70" />
          <span className="text-[7.5px]">96%</span>
        </span>
      </div>

      {/* utility bar */}
      <div className="flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5 shadow-sm">
        <RingMark className="h-7 w-7 shrink-0" />
        <span className="min-w-0 flex-1">
          <span className="block text-[12px] leading-tight font-bold text-[#5b1f6b]">
            {appMockup.brand}
          </span>
          <span className="block truncate text-[7.5px] leading-tight text-[#4a3d4e]">
            {appMockup.brandSub}
          </span>
        </span>
        <QrIcon className="h-4 w-4 shrink-0 text-[#3f2a49]" />
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0 text-[#5b1f6b]">
          <circle cx="12" cy="8" r="3.6" />
          <path d="M4.5 20a7.5 7.5 0 0 1 15 0Z" />
        </svg>
      </div>

      {/* hero card */}
      <div className="shimmer relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3f1a52] to-[#5d2472] p-3.5">
        <RingMark className="absolute top-3 right-3 h-11 w-11 opacity-90" />
        <p className="text-[7px] font-semibold tracking-[0.14em] text-[#e0b98c] uppercase">
          {appMockup.heroKicker}
        </p>
        <p className="mt-2.5 text-[15px] leading-[1.25] font-bold text-white">
          {appMockup.heroLines[0]}
          <br />
          {appMockup.heroLines[1]}
        </p>
        <p className="mt-4 text-[8px] leading-relaxed text-white/80">
          {appMockup.heroBody}
        </p>
      </div>

      {/* tiers */}
      <div>
        <p className="text-[12px] font-bold text-[#221929]">
          {appMockup.chooseTitle}
        </p>
        <p className="mt-0.5 text-[8px] text-[#5d4f61]">{appMockup.chooseSub}</p>
      </div>

      <ul className="space-y-2.5">
        {appMockup.tiers.map((tier, i) => (
          <li
            key={tier.name}
            className={cx(
              "tile-in relative overflow-hidden rounded-2xl p-3",
              tierStyle[i],
            )}
            style={{ animationDelay: `${420 + i * 160}ms` }}
          >
            <RingMark className="absolute top-2 left-2 h-8 w-8 opacity-45" />
            <p className="relative text-[7px] font-semibold tracking-[0.14em] uppercase opacity-75">
              Aurat Card
            </p>
            <p className="relative mt-1 text-[17px] leading-none font-extrabold tracking-tight uppercase">
              {tier.name}
            </p>
            <p className="relative mt-2 text-[8.5px] opacity-85">{tier.price}</p>
            <p className="relative mt-0.5 text-[8.5px] opacity-70">{tier.alt}</p>
            <span className="absolute right-2.5 bottom-2 text-[6px] font-semibold tracking-[0.1em] uppercase opacity-55">
              Tap to flip
            </span>
          </li>
        ))}
      </ul>

      {/* floating scan button */}
      <span className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#5b1f6b] text-white shadow-lg">
        <QrIcon className="h-5 w-5" />
      </span>
    </div>
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
  const screenHeight = Math.round(width * 1.95);

  return (
    <div
      style={{ width }}
      className={cx("relative mx-auto max-w-full", className)}
    >
      {/* glow behind the handset */}
      <div
        aria-hidden="true"
        className="bg-royal/35 pointer-events-none absolute inset-6 rounded-full blur-3xl"
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
