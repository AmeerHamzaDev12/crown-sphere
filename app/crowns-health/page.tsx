import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SubProducts } from "@/components/sub-products";
import {
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
  Steps,
  cx,
} from "@/components/ui";
import {
  disclaimer,
  finalCta,
  forOrganisations,
  forProviders,
  hero,
  howItWorks,
  metrics,
  plans,
  problem,
  services,
  tiers,
  subProducts,
} from "@/content/crowns-health";

export const metadata: Metadata = {
  title: "Crowns Health",
  description: hero.body,
};

export default function CrownsHealthPage() {
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
        <div className="border-line mt-20 grid gap-px border-t sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.value} delay={i * 80} className="pt-8 lg:pr-8">
              <p className="display text-xl font-semibold sm:text-2xl">
                {metric.value}
              </p>
              <p className="text-mist mt-3 text-sm leading-relaxed">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
      </PageHero>

      {/* --------------------------------------------------------------- problem */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={problem.eyebrow} title={problem.heading} />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-2">
            {problem.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 2) * 100}>
                <Card className="h-full">
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-mist mt-3 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12 block">
            <p className="display max-w-3xl text-[clamp(1.35rem,2.6vw,2rem)] font-semibold">
              {problem.closing}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- tiers */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={tiers.eyebrow}
              title={tiers.heading}
              intro={tiers.intro}
            />
          </Reveal>
          <ol className="mt-16 grid gap-5 lg:grid-cols-3">
            {tiers.items.map((item, i) => (
              <Reveal as="li" key={item.tier} delay={i * 100}>
                <Card className="h-full">
                  <span className="text-accent text-[11px] font-medium tracking-[0.16em] uppercase">
                    {item.tier}
                  </span>
                  <h3 className="display mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-mist mt-4 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 block">
            <p className="display text-[clamp(1.35rem,2.6vw,2rem)] font-semibold">
              {tiers.closing}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- services */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={services.eyebrow} title={services.heading} />
          </Reveal>

          <ul className="border-line mt-16 grid gap-px border-t md:grid-cols-2 xl:grid-cols-3">
            {services.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 80}
                className="outline-line bg-ink-2 p-7 outline sm:p-8"
              >
                <h3 className="display text-xl font-semibold">{item.title}</h3>
                <p className="text-mist mt-4 text-sm leading-relaxed">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14 block">
            <h3 className="text-lg font-medium text-white">
              {services.exclusions.title}
            </h3>
            <ul className="mt-6 grid gap-5 md:grid-cols-3">
              {services.exclusions.items.map((item) => (
                <li
                  key={item.title}
                  className="border-line-soft bg-ink rounded-2xl border p-6"
                >
                  <h4 className="text-sm font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="text-dim mt-2.5 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* ---------------------------------------------------------- how it works */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.heading}
            />
          </Reveal>
          <Reveal className="mt-16 block">
            <Steps steps={howItWorks.steps} columns={6} />
          </Reveal>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- plans */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow={plans.eyebrow}
              title={plans.heading}
              intro={plans.intro}
            />
          </Reveal>

          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {plans.items.map((plan, i) => (
              <Reveal as="li" key={plan.name} delay={(i % 3) * 80}>
                <div
                  className={cx(
                    "rounded-card flex h-full flex-col border p-7 sm:p-8",
                    plan.featured
                      ? "bg-ink border-ink text-white"
                      : "border-ink/12 bg-cream",
                  )}
                >
                  <h3 className="display text-xl font-semibold">{plan.name}</h3>
                  <p className="display mt-5 text-3xl font-semibold">
                    {plan.price}
                  </p>
                  <p
                    className={cx(
                      "mt-1.5 text-xs tracking-wide uppercase",
                      plan.featured ? "text-dim" : "text-ink/45",
                    )}
                  >
                    {plan.cadence}
                  </p>
                  <p
                    className={cx(
                      "mt-6 flex-1 text-sm leading-relaxed",
                      plan.featured ? "text-mist" : "text-ink/70",
                    )}
                  >
                    {plan.includes}
                  </p>
                  <p
                    className={cx(
                      "mt-6 border-t pt-5 text-xs leading-relaxed",
                      plan.featured
                        ? "border-line text-dim"
                        : "border-ink/12 text-ink/55",
                    )}
                  >
                    {plan.idealFor}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* --------------------------------------------------- orgs + providers */}
      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="flex h-full flex-col">
                <Eyebrow>{forOrganisations.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {forOrganisations.heading}
                </h2>
                <p className="text-mist mt-5 text-base leading-relaxed">
                  {forOrganisations.body}
                </p>
                <CheckList
                  items={forOrganisations.items}
                  className="mt-7 flex-1"
                />
                <div className="mt-8">
                  <CtaButton href={forOrganisations.cta.href} variant="secondary">
                    {forOrganisations.cta.label}
                  </CtaButton>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="flex h-full flex-col">
                <Eyebrow>{forProviders.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {forProviders.heading}
                </h2>
                <p className="text-mist mt-5 text-base leading-relaxed">
                  {forProviders.body}
                </p>
                <CheckList items={forProviders.items} className="mt-7 flex-1" />
                <div className="mt-8">
                  <CtaButton href={forProviders.cta.href} variant="secondary">
                    {forProviders.cta.label}
                  </CtaButton>
                </div>
              </Card>
            </Reveal>
          </div>

          <Disclaimer>{disclaimer}</Disclaimer>
        </Container>
      </Section>

      {/* ------------------------------------------------------ sub-products */}
      <Section tone="surface">
        <Container>
          <SubProducts
            eyebrow="Built with SuperApp"
            heading="The clinical software behind the service."
            intro="Crowns Health runs on two partner-built platforms: one for the clinics we work with, one for reaching patients where no clinic is nearby."
            items={subProducts}
          />
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
