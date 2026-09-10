import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import {
  Card,
  CheckList,
  Container,
  CtaBand,
  CtaButton,
  PageHero,
  PillList,
  Section,
  SectionHeading,
  Steps,
} from "@/components/ui";
import {
  audiences,
  finalCta,
  hero,
  outcomes,
  process,
  services,
  why,
} from "@/content/crowns-financial";

export const metadata: Metadata = {
  title: "Crowns Financial",
  description: hero.body,
};

export default function CrownsFinancialPage() {
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
      >
        <PillList items={hero.highlights} className="mt-12" />
      </PageHero>

      {/* -------------------------------------------------------------- outcomes */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={outcomes.eyebrow} title={outcomes.heading} />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-3">
            {outcomes.items.map((item, i) => (
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

      {/* -------------------------------------------------------------- services */}
      <Section id="services">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={services.eyebrow} title={services.heading} />
          </Reveal>

          <div className="mt-16 space-y-5">
            {services.items.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <Card>
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                    <div>
                      <h3 className="display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-mist mt-5 text-base leading-relaxed">
                        {service.body}
                      </p>
                    </div>
                    <div className="border-line-soft border-t pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
                      <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                        Includes
                      </p>
                      <CheckList items={service.features} className="mt-5" />
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-5 block">
            <Card>
              <h3 className="text-lg font-medium text-white">
                {services.additional.title}
              </h3>
              <PillList items={services.additional.items} className="mt-6" />
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- audiences */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={audiences.eyebrow}
              title={audiences.heading}
              intro={audiences.intro}
            />
          </Reveal>
          <ul className="border-line mt-16 grid gap-px border-t sm:grid-cols-2 lg:grid-cols-3">
            {audiences.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 80}
                className="outline-line bg-ink-2 p-7 outline"
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

      {/* --------------------------------------------------------------- process */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={process.eyebrow} title={process.heading} />
          </Reveal>
          <Reveal className="mt-16 block">
            <Steps steps={process.steps} columns={6} />
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------------------------------------------- why */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="cream"
                eyebrow={why.eyebrow}
                title={why.heading}
              />
            </Reveal>
            <Reveal delay={120}>
              <dl className="border-ink/12 divide-ink/12 divide-y border-t border-b">
                {why.items.map((item) => (
                  <div
                    key={item.title}
                    className="grid gap-2 py-7 sm:grid-cols-[220px_1fr] sm:gap-8"
                  >
                    <dt className="text-base font-medium">{item.title}</dt>
                    <dd className="text-ink/70 text-sm leading-relaxed">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
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
