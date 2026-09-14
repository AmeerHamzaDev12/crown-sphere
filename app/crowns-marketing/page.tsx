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
            <SectionHeading eyebrow={services.eyebrow} title={services.heading} />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
                <Card className="h-full">
                  <span className="text-accent font-display text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-6 text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-mist mt-4 text-sm leading-relaxed">
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
          <ul className="border-line mt-16 grid gap-px border-t sm:grid-cols-2 xl:grid-cols-4">
            {audiences.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 4) * 80}
                className="outline-line bg-ink p-7 outline sm:p-8"
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="text-mist mt-3 text-sm leading-relaxed">
                  {item.body}
                </p>
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
