import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import {
  Card,
  Container,
  CtaBand,
  CtaButton,
  Eyebrow,
  PageHero,
  Section,
  SectionHeading,
  Steps,
} from "@/components/ui";
import {
  approach,
  ecosystem,
  finalCta,
  hero,
  process,
  visionMission,
  whatWeDo,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: hero.body,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        intro={hero.body}
        actions={
          <>
            <CtaButton href="/ventures">Explore Our Ventures</CtaButton>
            <CtaButton href="/partnerships" variant="secondary">
              Partner With Us
            </CtaButton>
          </>
        }
      />

      {/* ------------------------------------------------------------ what we do */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={whatWeDo.eyebrow} title={whatWeDo.heading} />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whatWeDo.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
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

      {/* ------------------------------------------------------------- ecosystem */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={ecosystem.eyebrow}
              title={ecosystem.heading}
              intro={ecosystem.intro}
            />
          </Reveal>
          <ul className="border-line mt-16 grid gap-px border-t md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.cards.map((card, i) => (
              <Reveal
                as="li"
                key={card.title}
                delay={(i % 3) * 90}
                className="outline-line bg-ink p-7 outline sm:p-8"
              >
                <h3 className="text-lg font-medium text-white">{card.title}</h3>
                <p className="text-mist mt-3 text-sm leading-relaxed">
                  {card.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* --------------------------------------------------------------- process */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={process.eyebrow} title={process.heading} />
          </Reveal>
          <Reveal className="mt-16 block">
            <Steps steps={process.steps} />
          </Reveal>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- approach */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow={approach.eyebrow}
                title={approach.heading}
              />
            </Reveal>
            <Reveal delay={120}>
              <dl className="border-line divide-line divide-y border-t border-b">
                {approach.items.map((item) => (
                  <div key={item.title} className="grid gap-2 py-7 sm:grid-cols-[220px_1fr] sm:gap-8">
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

      {/* -------------------------------------------------------- vision/mission */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <Eyebrow tone="cream">{visionMission.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="text-ink/45 text-[11px] font-medium tracking-[0.18em] uppercase">
                Vision
              </p>
              <p className="display mt-5 text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold">
                {visionMission.vision}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-ink/45 text-[11px] font-medium tracking-[0.18em] uppercase">
                Mission
              </p>
              <p className="display mt-5 text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold">
                {visionMission.mission}
              </p>
            </Reveal>
          </div>
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
