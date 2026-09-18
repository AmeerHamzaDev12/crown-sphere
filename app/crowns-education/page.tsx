import type { Metadata } from "next";

import { ClientShowcase } from "@/components/client-showcase";
import { DesktopMockup } from "@/components/desktop-mockup";
import { FeatureIcon } from "@/components/feature-icons";
import { Reveal } from "@/components/reveal";
import { SubProducts } from "@/components/sub-products";
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
  clientShowcase,
  cms,
  erpDashboard,
  finalCta,
  hero,
  pathways,
  readers,
  subProducts,
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

          {/* a look at the product itself */}
          <Reveal className="mt-10 block" delay={120}>
            <DesktopMockup
              appName={erpDashboard.appName}
              url={erpDashboard.url}
              tabs={erpDashboard.tabs}
              stats={erpDashboard.stats}
              chartLabel={erpDashboard.chartLabel}
              chartPoints={erpDashboard.chartPoints}
              tableTitle={erpDashboard.tableTitle}
              rows={erpDashboard.rows}
              poweredByLogo="/superapp-logo.png"
              className="mx-auto max-w-3xl"
            />
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

      {/* ------------------------------------------------------- client showcase */}
      <Section tone="surface">
        <Container>
          <ClientShowcase
            eyebrow={clientShowcase.eyebrow}
            heading={clientShowcase.heading}
            intro={clientShowcase.intro}
            clients={clientShowcase.clients}
          />
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

          {/* Icon-tile cards — the same language as Aurat Card's partner
              sectors, deliberately not the numbered Steps look used above,
              so the two grid styles on the site read as two different things. */}
          <ul className="mt-14 grid gap-4 lg:grid-cols-3">
            {pathways.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 90}
                className="group flex items-start gap-4 rounded-2xl bg-white/70 p-6 shadow-[0_1px_2px_rgba(39,24,42,0.06)] ring-1 ring-[#271829]/8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(121,32,124,0.35)] sm:p-7"
              >
                <span className="from-royal flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-[#3d1440] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <FeatureIcon name={item.title} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="display text-lg">{item.title}</h3>
                  <p className="text-ink/70 mt-2 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
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
                <Card className="group relative h-full">
                  <span
                    aria-hidden="true"
                    className="border-accent/70 pointer-events-none absolute top-4 left-4 h-4 w-4 scale-75 border-t-2 border-l-2 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="border-accent/70 pointer-events-none absolute top-4 right-4 h-4 w-4 scale-75 border-t-2 border-r-2 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="border-accent/70 pointer-events-none absolute bottom-4 left-4 h-4 w-4 scale-75 border-b-2 border-l-2 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="border-accent/70 pointer-events-none absolute right-4 bottom-4 h-4 w-4 scale-75 border-r-2 border-b-2 opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <h3 className="display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-mist mt-4 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>
          <Disclaimer>
            Programme availability, academic pathways and qualifications are
            subject to the requirements and approval of the relevant
            institution.
          </Disclaimer>
        </Container>
      </Section>

      {/* ------------------------------------------------------ sub-products */}
      <Section tone="surface">
        <Container>
          <SubProducts
            eyebrow="Built with SuperApp"
            heading="The platform behind our campus system."
            intro="Our campus management offering is delivered on a partner-built school platform, supported and implemented by Crowns Education."
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
