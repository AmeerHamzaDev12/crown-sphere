import Image from "next/image";

import { cx } from "./ui";

/**
 * Short explainer video in a 16:9 frame.
 *
 * When `src` is null the frame renders a placeholder instead of an empty
 * player — so the section is presentable before the film is delivered, and
 * becomes a real player the moment a file is dropped in. Nothing else needs
 * to change; see `videoShowcase` in content/aurat-card.ts.
 */
export function VideoShowcase({
  src,
  poster,
  duration,
  className,
}: {
  src: string | null;
  poster: string | null;
  duration?: string;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "border-line relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br from-[#2d1d30] to-[#1b151f]",
        className,
      )}
    >
      <div className="relative aspect-video">
        {src ? (
          <video
            controls
            preload="metadata"
            playsInline
            poster={poster ?? undefined}
            className="h-full w-full object-cover"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        ) : (
          <PlaceholderFrame duration={duration} />
        )}
      </div>
    </div>
  );
}

function PlaceholderFrame({ duration }: { duration?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center">
      {/* soft glow behind the play button */}
      <div
        aria-hidden="true"
        className="bg-royal/30 pointer-events-none absolute h-56 w-56 rounded-full blur-3xl"
      />

      <Image
        src="/crown.webp"
        alt=""
        width={64}
        height={43}
        className="relative h-9 w-auto object-contain opacity-80"
      />

      <span className="border-accent/40 bg-ink/60 relative flex h-16 w-16 items-center justify-center rounded-full border backdrop-blur-sm">
        <span
          aria-hidden="true"
          className="border-accent/30 absolute inset-0 animate-ping rounded-full border"
          style={{ animationDuration: "2.6s" }}
        />
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-accent h-6 w-6">
          <path d="M8 5.5 18.5 12 8 18.5V5.5Z" fill="currentColor" />
        </svg>
      </span>

      <div className="relative">
        <p className="text-sm font-medium text-white">Film in production</p>
        <p className="text-dim mt-1.5 text-xs">
          {duration ? `${duration} · ` : ""}Arriving with the launch campaign
        </p>
      </div>
    </div>
  );
}
