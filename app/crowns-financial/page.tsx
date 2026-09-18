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
            <SectionHeading
              eyebrow={outcomes.eyebrow}
              title={outcomes.heading}
            />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-3">
            {outcomes.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <Card className="group relative h-full overflow-hidden transition-colors duration-500 hover:border-[#d7a3de]/40">
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                  />
                  <span
                    aria-hidden="true"
                    className="bg-accent/20 pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="text-accent font-display relative inline-block text-sm transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110">
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

      {/* -------------------------------------------------------------- services */}
      <Section id="services">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={services.eyebrow}
              title={services.heading}
            />
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
                className="group outline-line bg-ink-2 relative overflow-hidden p-7 pl-9 outline transition-colors duration-400 hover:bg-ink-2/70"
              >
                <span
                  aria-hidden="true"
                  className="bg-accent/25 group-hover:bg-accent absolute inset-y-0 left-0 w-[3px] transition-colors duration-400"
                />
                <span className="border-line text-dim font-display absolute top-7 right-7 flex h-7 w-7 items-center justify-center rounded-full border text-[11px] italic transition-colors duration-400 group-hover:border-accent/50 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-2 pr-10">
                  <h3 className="text-lg font-medium text-white transition-transform duration-400 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-accent -translate-x-2 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    →
                  </span>
                </div>
                <p className="text-mist mt-3 text-sm leading-relaxed transition-transform duration-400 group-hover:translate-x-1">
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
