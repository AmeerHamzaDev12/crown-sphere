import Image from "next/image";

import { Reveal } from "./reveal";
import { Eyebrow, cx, withAccent } from "./ui";

/**
 * Named institutional clients — a deliberately more prominent treatment than
 * the marquee strips: one full card per institution rather than a scrolling
 * logo, since these are specific, named relationships worth dwelling on
 * rather than a wall of logos to skim past.
 *
 * A client without a supplied logo file gets a typographic wordmark instead
 * of a fabricated image — see `logo` being optional below.
 */
export type ClientEntry = {
  name: string;
  /** Public path to a real logo file. Omit to render a text wordmark instead. */
  logo?: string;
  description: string;
};

export function ClientShowcase({
  eyebrow,
  heading,
  intro,
  clients,
  className,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  clients: readonly ClientEntry[];
  className?: string;
}) {
  return (
    <div className={cx(className)}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display mt-5 max-w-2xl text-[clamp(2rem,3.6vw,3rem)]">
          {withAccent(heading)}
        </h2>
        {intro ? (
          <p className="text-mist measure mt-6 text-base leading-relaxed sm:text-lg">
            {intro}
          </p>
        ) : null}
      </Reveal>

      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {clients.map((client, i) => (
          <Reveal as="li" key={client.name} delay={i * 100}>
            <div className="group border-line bg-surface relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d7a3de]/35">
              <div
                aria-hidden="true"
                className="bg-royal/0 group-hover:bg-royal/30 pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl transition-colors duration-700"
              />

              {/* logo lockup — a real asset on its own white plate (so the
                  logo's actual colours render true regardless of whether the
                  source file has a transparent or white background), or a
                  typographic mark if no logo file exists */}
              <div className="relative flex h-16 items-center">
                {client.logo ? (
                  <span className="inline-flex h-16 items-center rounded-xl bg-white px-4 py-2.5 shadow-sm">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={220}
                      height={64}
                      // Client-supplied logo files come in whatever format
                      // they arrive in (this one is an 8-bit indexed PNG),
                      // and Next's built-in optimizer can hang rather than
                      // just being slow on some of those. A small, fixed-size
                      // static logo doesn't need runtime resizing anyway, so
                      // it's served as-is instead of round-tripped through
                      // the image pipeline.
                      unoptimized
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </span>
                ) : (
                  <span className="font-accent text-2xl leading-tight text-white italic">
                    {client.name}
                  </span>
                )}
              </div>

              <p className="text-mist relative mt-6 flex-1 text-sm leading-relaxed">
                {client.description}
              </p>

              <span
                aria-hidden="true"
                className="bg-accent relative mt-6 block h-px w-10 transition-all duration-500 group-hover:w-full"
              />
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
