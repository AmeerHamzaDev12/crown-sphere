import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import {
  ArrowLink,
  Card,
  CheckList,
  Container,
  CtaBand,
  CtaButton,
  Disclaimer,
  Eyebrow,
  PageHero,
  Section,
  SectionHeading,
  StatusBadge,
} from "@/components/ui";
import {
  assessment,
  audiences,
  cms,
  finalCta,
  hero,
  pathways,
  readers,
} from "@/content/crowns-education";

export const metadata: Metadata = {
  title: "Crowns Education",
  description: hero.body,
};

export default function CrownsEducationPage() {
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

      {/* ------------------------------------------------------------------- cms */}
      <Section tone="surface" id="solutions">
        <Container>
          <Reveal>
            <Card className="from-surface to-ink bg-gradient-to-br sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div>
                  <Eyebrow>{cms.eyebrow}</Eyebrow>
                  <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold">
                    {cms.heading}
                  </h2>
                  <p className="text-mist mt-6 text-base leading-relaxed sm:text-lg">
                    {cms.intro}
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <CtaButton href={cms.cta.href}>{cms.cta.label}</CtaButton>
                    <StatusBadge status={cms.status} />
                  </div>
                </div>
                <div className="border-line-soft border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
                  <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                    Areas covered by the system
                  </p>
                  <CheckList items={cms.areas} className="mt-6 sm:columns-2" />
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* --------------------------------------------------- readers + assessment */}
      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="flex h-full flex-col">
                <Eyebrow>{readers.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {readers.heading}
                </h2>
                <p className="text-mist mt-5 flex-1 text-base leading-relaxed">
                  {readers.body}
                </p>
                <div className="border-line-soft mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6">
                  {readers.links.map((link) => (
                    <ArrowLink key={link.label} href={link.href}>
                      {link.label}
                    </ArrowLink>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="flex h-full flex-col">
                <Eyebrow>{assessment.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {assessment.heading}
                </h2>
                <p className="text-mist mt-5 flex-1 text-base leading-relaxed">
                  {assessment.body}
                </p>
                <StatusBadge status={assessment.status} className="mt-8" />
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- pathways */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow={pathways.eyebrow}
              title={pathways.heading}
              intro={pathways.intro}
            />
            <StatusBadge status={pathways.status} className="mt-8" />
          </Reveal>

          <ul className="border-ink/12 mt-14 grid gap-px border-t lg:grid-cols-3">
            {pathways.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 90}
                className="outline-ink/10 bg-cream p-7 outline sm:p-8"
              >
                <h3 className="display text-xl font-semibold">{item.title}</h3>
                <p className="text-ink/70 mt-4 text-sm leading-relaxed">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>

          <p className="text-ink/50 border-ink/12 mt-12 max-w-3xl border-t pt-8 text-xs leading-relaxed">
            {pathways.disclaimer}
          </p>
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
          <ul className="mt-16 grid gap-5 md:grid-cols-3">
            {audiences.items.map((item, i) => (
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
          <Disclaimer>
            Programme availability, academic pathways and qualifications are
            subject to the requirements and approval of the relevant institution.
          </Disclaimer>
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
