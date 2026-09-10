import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import {
  Card,
  CheckList,
  Container,
  CtaBand,
  CtaButton,
  Disclaimer,
  Eyebrow,
  PageHero,
  PillList,
  Section,
  SectionHeading,
  StatusBadge,
} from "@/components/ui";
import {
  building,
  disclaimer,
  finalCta,
  hero,
  misaari,
  offerings,
  technology,
} from "@/content/travel-visa";

export const metadata: Metadata = {
  title: "Travel & Visa Drop Box",
  description: hero.body,
};

export default function TravelVisaPage() {
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

      {/* ------------------------------------------------------------- offerings */}
      <Section tone="surface" id="what-we-do">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={offerings.eyebrow}
              title={offerings.heading}
            />
          </Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {offerings.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 110}>
                <Card className="flex h-full flex-col">
                  <StatusBadge status={item.status} />
                  <h3 className="display mt-6 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-mist mt-5 flex-1 text-base leading-relaxed">
                    {item.body}
                  </p>
                  <div className="border-line-soft mt-7 border-t pt-6">
                    <PillList items={item.steps} />
                  </div>
                  <div className="mt-7">
                    <CtaButton href={item.cta.href} variant="secondary">
                      {item.cta.label}
                    </CtaButton>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------------- misaari */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="cream"
                eyebrow={misaari.eyebrow}
                title={misaari.heading}
                intro={misaari.body}
              />
              <div className="mt-10">
                <CtaButton href={misaari.cta.href} variant="light">
                  {misaari.cta.label}
                </CtaButton>
              </div>
            </Reveal>
            <Reveal delay={130}>
              <div className="border-ink/12 bg-ink/[0.04] rounded-card-lg border p-9">
                <p className="text-ink/45 text-[11px] tracking-[0.16em] uppercase">
                  Also available as
                </p>
                <p className="display mt-4 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold">
                  A hospitality partnership opportunity
                </p>
                <p className="text-ink/70 mt-4 text-sm leading-relaxed">
                  The Misaari property is ready to host guests. CSPL is exploring
                  an operational partnership for its management and development.
                </p>
                <div className="mt-8">
                  <CtaButton href="/opportunities#misaari" variant="light">
                    See the Opportunity
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- building */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={building.eyebrow}
              title={building.heading}
              intro={building.body}
            />
            <p className="text-dim measure mt-6 text-sm leading-relaxed">
              {building.note}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <Card className="h-full">
                <Eyebrow>{technology.eyebrow}</Eyebrow>
                <h3 className="display mt-5 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold">
                  {technology.heading}
                </h3>
                <p className="text-mist mt-5 text-base leading-relaxed">
                  {technology.intro}
                </p>
                <p className="text-dim mt-8 text-[11px] tracking-[0.16em] uppercase">
                  Potential capabilities
                </p>
                <CheckList
                  items={technology.capabilities}
                  className="mt-5 sm:columns-2"
                />
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="from-surface to-ink h-full bg-gradient-to-br">
                <h3 className="display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold">
                  {technology.controls.title}
                </h3>
                <p className="text-mist mt-5 text-base leading-relaxed">
                  {technology.controls.body}
                </p>
              </Card>
            </Reveal>
          </div>

          <Disclaimer>{disclaimer}</Disclaimer>
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
