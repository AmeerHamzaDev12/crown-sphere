import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import {
  Card,
  Container,
  CtaBand,
  CtaButton,
  PageHero,
  Section,
  SectionHeading,
  Steps,
} from "@/components/ui";
import {
  approach,
  audiences,
  finalCta,
  hero,
  services,
} from "@/content/crowns-marketing";

export const metadata: Metadata = {
  title: "Crowns Marketing",
  description: hero.body,
};

export default function CrownsMarketingPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        intro={hero.body}
        status={hero.status}
        actions={
          <>
            <CtaButton href={hero.primary.href}>{hero.primary.label}</CtaButton>
            <CtaButton href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </CtaButton>
          </>
        }
      />

      {/* -------------------------------------------------------------- services */}
      <Section tone="surface" id="services">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={services.eyebrow}
              title={services.heading}
            />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
                <Card className="group relative h-full">
                  <span
                    aria-hidden="true"
                    className="from-accent/15 pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t to-transparent transition-all duration-500 ease-out group-hover:h-full"
                  />
                  <span className="text-accent font-display relative inline-block text-sm transition-transform duration-400 group-hover:-translate-y-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display relative mt-6 text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-mist relative mt-4 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- audiences */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={audiences.eyebrow}
              title={audiences.heading}
            />
          </Reveal>
          {/* An unboxed, numbered row list — deliberately not another card
              grid, so it reads as a different kind of thing from the
              numbered `services` cards just above it on this page. */}
          <ul className="border-line mt-16 border-t">
            {audiences.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 80}
                className="group border-line relative flex flex-col gap-3 border-b py-9 transition-[padding] duration-300 hover:pl-5 sm:flex-row sm:items-center sm:gap-10 sm:py-10"
              >
                <span
                  aria-hidden="true"
                  className="bg-accent absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                />
                <span className="display text-[3.25rem] leading-none font-semibold text-white/10 transition-colors duration-300 group-hover:text-accent/40 sm:w-28 sm:shrink-0 sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="display text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-mist mt-2 max-w-lg text-sm leading-relaxed sm:text-base">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- approach */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow={approach.eyebrow}
              title={approach.heading}
            />
          </Reveal>
          <Reveal className="mt-16 block">
            <Steps steps={approach.steps} tone="cream" />
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title={finalCta.heading}
        body={finalCta.body}
        actions={
          <>
            <CtaButton href={finalCta.primary.href}>
              {finalCta.primary.label}
            </CtaButton>
            <CtaButton href={finalCta.secondary.href} variant="secondary">
              {finalCta.secondary.label}
            </CtaButton>
          </>
        }
      />
    </>
  );
}
