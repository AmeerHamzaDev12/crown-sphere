import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import {
  Card,
  CheckList,
  Container,
  CtaBand,
  CtaButton,
  Eyebrow,
  PageHero,
  PillList,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  about,
  auratCardContent,
  categories,
  channelStatus,
  educationalContent,
  finalCta,
  hero,
  opportunitiesStrip,
} from "@/content/crowns-tv";

export const metadata: Metadata = {
  title: "Crowns TV",
  description: hero.body,
};

export default function CrownsTvPage() {
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

      {/* ----------------------------------------------------------------- about */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.heading}
              intro={about.intro}
            />
          </Reveal>
          <ul className="mt-16 grid gap-5 lg:grid-cols-3">
            {about.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <Card className="h-full">
                  <h3 className="display text-2xl font-semibold">{item.title}</h3>
                  <p className="text-mist mt-4 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14 block">
            <Card className="border-gold/25 bg-gold/[0.05]">
              <h3 className="text-gold text-lg font-medium">
                {channelStatus.title}
              </h3>
              <p className="text-mist measure mt-3 text-sm leading-relaxed">
                {channelStatus.body}
              </p>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* --------------------------------------------------------- opportunities */}
      <Section>
        <Container>
          <Reveal>
            <Card className="from-surface to-ink bg-gradient-to-br sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div>
                  <Eyebrow>{opportunitiesStrip.eyebrow}</Eyebrow>
                  <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold">
                    {opportunitiesStrip.heading}
                  </h2>
                  <p className="text-mist mt-6 text-base leading-relaxed sm:text-lg">
                    {opportunitiesStrip.intro}
                  </p>
                  <div className="mt-9">
                    <CtaButton href={opportunitiesStrip.cta.href}>
                      {opportunitiesStrip.cta.label}
                    </CtaButton>
                  </div>
                </div>
                <div className="border-line-soft border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
                  <CheckList items={opportunitiesStrip.items} />
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* --------------------------------------------------- aurat card + education */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="flex h-full flex-col">
                <Eyebrow>{auratCardContent.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {auratCardContent.heading}
                </h2>
                <p className="text-dim mt-6 text-[11px] tracking-[0.16em] uppercase">
                  Content can include
                </p>
                <PillList items={auratCardContent.items} className="mt-4 flex-1" />
                <div className="mt-8">
                  <CtaButton
                    href={auratCardContent.cta.href}
                    variant="secondary"
                  >
                    {auratCardContent.cta.label}
                  </CtaButton>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="flex h-full flex-col">
                <Eyebrow>{educationalContent.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {educationalContent.heading}
                </h2>
                <p className="text-mist mt-5 flex-1 text-base leading-relaxed">
                  {educationalContent.body}
                </p>
                <div className="mt-8">
                  <CtaButton
                    href={educationalContent.cta.href}
                    variant="secondary"
                  >
                    {educationalContent.cta.label}
                  </CtaButton>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
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
          <ul className="border-line mt-16 grid gap-px border-t sm:grid-cols-2 xl:grid-cols-4">
            {categories.items.map((item, i) => (
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
