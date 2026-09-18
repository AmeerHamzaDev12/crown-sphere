import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SubProducts } from "@/components/sub-products";
import {
  ArrowIcon,
  Card,
  CheckList,
  Container,
  CtaBand,
  CtaButton,
  Eyebrow,
  PageHero,
  Section,
  SectionHeading,
  StatusBadge,
  Steps,
} from "@/components/ui";
import {
  audiences,
  auratCardLink,
  facilitation,
  finalCta,
  hero,
  marketplace,
  platform,
  statuses,
  subProducts,
} from "@/content/digital-marketplace";

export const metadata: Metadata = {
  title: "Digital Enterprise & Marketplace",
  description: hero.body,
};

export default function DigitalMarketplacePage() {
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

      {/* -------------------------------------------------------------- platform */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={platform.eyebrow}
              title={platform.heading}
              intro={platform.intro}
            />
          </Reveal>
          <Reveal className="mt-16 block">
            <Steps steps={platform.steps} columns={6} />
          </Reveal>
        </Container>
      </Section>

      {/* ----------------------------------------------------------- marketplace */}
      <Section id="marketplace">
        <Container>
          <Reveal>
            <Card className="from-surface to-ink bg-gradient-to-br sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
                <div>
                  <Eyebrow>{marketplace.eyebrow}</Eyebrow>
                  <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold">
                    {marketplace.heading}
                  </h2>
                  <p className="text-mist mt-6 text-base leading-relaxed sm:text-lg">
                    {marketplace.body}
                  </p>
                  <StatusBadge status={marketplace.status} className="mt-8" />
                </div>
                <div className="border-line-soft border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
                  <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                    What you get
                  </p>
                  <CheckList items={marketplace.features} className="mt-6" />
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* ---------------------------------------------------------- facilitation */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={facilitation.eyebrow}
              title={facilitation.heading}
              intro={facilitation.intro}
            />
          </Reveal>
          <ul className="border-line mt-16 grid gap-px border-t sm:grid-cols-2 lg:grid-cols-3">
            {facilitation.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 80}
                className="group outline-line bg-ink-2 relative overflow-hidden p-7 outline sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="from-accent/0 via-accent/70 to-accent/0 pointer-events-none absolute inset-x-0 top-0 h-1/2 -translate-y-full bg-gradient-to-b opacity-0 transition-all duration-700 ease-out group-hover:translate-y-[220%] group-hover:opacity-100"
                />
                <h3 className="display relative text-xl font-semibold transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="text-mist relative mt-3 text-sm leading-relaxed">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------------------------- aurat card chain */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow={auratCardLink.eyebrow}
              title={auratCardLink.heading}
              intro={auratCardLink.body}
            />
          </Reveal>

          <Reveal className="mt-14 block">
            <ol className="flex flex-wrap items-center gap-3">
              {auratCardLink.chain.map((node, i) => (
                <li key={node} className="flex items-center gap-3">
                  <span className="border-ink/15 bg-ink/[0.04] rounded-full border px-5 py-2.5 text-sm">
                    {node}
                  </span>
                  {i < auratCardLink.chain.length - 1 ? (
                    <ArrowIcon className="text-ink/30" />
                  ) : null}
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="mt-12">
            <CtaButton href={auratCardLink.cta.href} variant="light">
              {auratCardLink.cta.label}
            </CtaButton>
          </div>
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
          <ul className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {audiences.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 4) * 80}>
                <Card className="group relative h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/35">
                  <span
                    aria-hidden="true"
                    className="bg-accent absolute top-0 left-7 h-1 w-8 origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
                  />
                  <span className="border-line text-dim relative inline-flex h-8 w-8 items-center justify-center rounded-md border text-[11px] transition-colors duration-400 group-hover:border-accent/40 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative mt-5 text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="text-mist relative mt-3 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-5 block">
            <Card>
              <h3 className="text-lg font-medium text-white">
                {audiences.customers.title}
              </h3>
              <p className="text-mist mt-3 text-sm leading-relaxed">
                {audiences.customers.body}
              </p>
            </Card>
          </Reveal>

          {/* status table */}
          <Reveal className="mt-14 block">
            <dl className="border-line divide-line divide-y border-t border-b">
              {statuses.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-center justify-between gap-4 py-5"
                >
                  <dt className="text-sm text-white">{row.label}</dt>
                  <dd>
                    <StatusBadge status={row.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------------------------------ sub-products */}
      <Section tone="surface">
        <Container>
          <SubProducts
            eyebrow="Built with SuperApp"
            heading="The software running underneath."
            intro="Two operational platforms businesses can adopt through the marketplace, built by our technology partner and supported by CSPL."
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
