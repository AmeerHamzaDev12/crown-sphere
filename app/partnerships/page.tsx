import type { Metadata } from "next";

import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import {
  ArrowLink,
  Card,
  Container,
  CtaBand,
  CtaButton,
  PageHero,
  PillList,
  Section,
  SectionHeading,
} from "@/components/ui";
import { opportunities } from "@/content/opportunities";
import {
  approach,
  auratCard,
  categories,
  expectations,
  finalCta,
  hero,
  sectors,
} from "@/content/partnerships";

export const metadata: Metadata = {
  title: "Partnerships",
  description: hero.body,
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        intro={hero.body}
        actions={
          <>
            <CtaButton href="/contact?topic=Partnership">
              Partner With Us
            </CtaButton>
            <CtaButton href="/opportunities" variant="secondary">
              Explore Opportunities
            </CtaButton>
          </>
        }
      />

      {/* -------------------------------------------------------------- approach */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={approach.eyebrow} title={approach.heading} />
          </Reveal>
          <ul className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {approach.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 4) * 80}>
                <Card className="h-full">
                  <span className="text-ember font-display text-sm font-semibold">
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

      {/* --------------------------------------------------------------- sectors */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow={sectors.eyebrow}
              title={sectors.heading}
            />
          </Reveal>
        </Container>
        <Marquee items={sectors.logos} tone="cream" className="mt-14" />
      </Section>

      {/* ------------------------------------------------------------ categories */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={categories.eyebrow}
              title={categories.heading}
            />
          </Reveal>
          <ul className="border-line mt-16 grid gap-px border-t sm:grid-cols-2">
            {categories.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 2) * 90}
                className="outline-line bg-ink p-8 outline sm:p-10"
              >
                <h3 className="display text-2xl font-semibold">{item.title}</h3>
                <p className="text-mist mt-4 text-sm leading-relaxed">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ aurat card */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <Card className="from-surface to-ink bg-gradient-to-br sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                <div>
                  <p className="text-ember text-[11px] font-medium tracking-[0.16em] uppercase">
                    {auratCard.eyebrow}
                  </p>
                  <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold">
                    {auratCard.heading}
                  </h2>
                  <p className="text-mist mt-6 text-base leading-relaxed sm:text-lg">
                    {auratCard.body}
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <CtaButton href={auratCard.cta.href}>
                    {auratCard.cta.label}
                  </CtaButton>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- expectations */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow={expectations.eyebrow}
                title={expectations.heading}
              />
            </Reveal>
            <Reveal delay={120}>
              <dl className="border-line divide-line divide-y border-t border-b">
                {expectations.items.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 py-7 sm:grid-cols-[240px_1fr] sm:gap-8"
                  >
                    <dt className="text-base font-medium text-white">
                      {item.title}
                    </dt>
                    <dd className="text-mist text-sm leading-relaxed">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------- current opportunities */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Open now"
                title="Current Partnership Opportunities"
              />
              <ArrowLink href="/opportunities">See all opportunities</ArrowLink>
            </div>
          </Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {opportunities.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 90}>
                <Card className="flex h-full flex-col">
                  <p className="text-ember text-[11px] font-medium tracking-[0.16em] uppercase">
                    {item.kind}
                  </p>
                  <h3 className="display mt-5 text-2xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-mist mt-4 flex-1 text-sm leading-relaxed">
                    {item.body}
                  </p>
                  <PillList items={item.details} className="mt-6" />
                  <ArrowLink href={`/opportunities#${item.id}`} className="mt-7">
                    View opportunity
                  </ArrowLink>
                </Card>
              </Reveal>
            ))}
          </ul>
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
