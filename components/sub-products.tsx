import Image from "next/image";

import type { SubProduct } from "@/content/ventures";
import { Reveal } from "./reveal";
import { Card, CheckList, Eyebrow, cx } from "./ui";

/**
 * Grid of partner-built products sitting under a venture.
 *
 * Each card carries its own "Powered by" text credit, per the partner
 * agreement. Text only for now — swap in the logo once the mark is approved.
 */
export function SubProducts({
  eyebrow,
  heading,
  intro,
  items,
  className,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: readonly SubProduct[];
  className?: string;
}) {
  return (
    <div className={cx(className)}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display mt-5 text-[clamp(2rem,3.4vw,3rem)]">{heading}</h2>
        {intro ? (
          <p className="text-mist measure mt-6 text-base leading-relaxed sm:text-lg">
            {intro}
          </p>
        ) : null}
      </Reveal>

      <ul className="mt-14 grid gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={(i % 2) * 100}>
            <Card className="flex h-full flex-col">
              <div className="flex items-center gap-3.5">
                {item.logo ? (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                    <Image
                      src={item.logo}
                      alt=""
                      width={80}
                      height={80}
                      // See client-showcase.tsx — a logo file supplied as-is
                      // can be an unusual format/size the built-in optimizer
                      // hangs on rather than just being slow, so real client
                      // and partner logos are served unoptimized throughout.
                      unoptimized
                      className="h-full w-full object-contain"
                    />
                  </span>
                ) : null}
                <h3 className="display text-2xl">{item.name}</h3>
              </div>
              <p className="text-mist mt-4 text-sm leading-relaxed">
                {item.positioning}
              </p>
              <CheckList items={item.features} className="mt-6 flex-1" />
              <p className="border-line-soft text-dim mt-7 border-t pt-5 text-[11px] tracking-[0.14em] uppercase">
                Powered by {item.poweredBy}
              </p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
