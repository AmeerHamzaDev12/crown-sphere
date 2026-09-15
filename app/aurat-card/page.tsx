import type { Metadata } from "next";

import { BarChart, TrendChart } from "@/components/charts";
import { PhoneMockup, StoreButtons } from "@/components/phone-mockup";
import { Reveal } from "@/components/reveal";
import { SectorIcon } from "@/components/sector-icon";
import { VideoShowcase } from "@/components/video-showcase";
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
  PillList,
  Section,
  SectionHeading,
  Stat,
  StatusBadge,
  Steps,
} from "@/components/ui";
import {
  becomePartner,
  business,
  finalCta,
  franchise,
  goal,
  hero,
  howItWorks,
  lahoreFranchise,
  membership,
  offering,
  partnerNetwork,
  platforms,
  safety,
  videoShowcase,
} from "@/content/aurat-card";

export const metadata: Metadata = {
  title: "Aurat Card",
  description: hero.body,
};

export default function AuratCardPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        intro={hero.body}
        actions={
          <>
            <CtaButton href={hero.primary.href}>{hero.primary.label}</CtaButton>
            <CtaButton href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </CtaButton>
          </>
        }
      >
        <div className="border-line mt-20 grid gap-px border-t md:grid-cols-3">
          {goal.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="pt-8 md:pr-8">
              <Stat value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </PageHero>

      {/* ------------------------------------------------------------------ goal */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <Eyebrow>{goal.eyebrow}</Eyebrow>
            <p className="display mt-6 max-w-4xl text-[clamp(1.7rem,3.6vw,2.9rem)] font-semibold">
              {goal.heading}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- offering */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={offering.eyebrow} title={offering.heading} />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {offering.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 4) * 80}>
                <Card className="h-full">
                  <h3 className="display text-2xl font-semibold">{item.title}</h3>
                  <p className="text-mist mt-4 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------------------------------------------------------- how it works */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={howItWorks.eyebrow}
              title={howItWorks.heading}
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {howItWorks.audiences.map((audience, i) => (
              <Reveal key={audience.title} delay={i * 100}>
                <Card>
                  <h3 className="text-lg font-medium text-white">
                    {audience.title}
                  </h3>
                  <p className="text-mist mt-3 text-sm leading-relaxed">
                    {audience.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 block">
            <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
              Steps, start to finish
            </p>
            <div className="mt-6">
              <Steps steps={howItWorks.steps} columns={6} />
            </div>
          </Reveal>

          <Reveal className="mt-14 block">
            <Card className="from-surface to-ink bg-gradient-to-br">
              <h3 className="display text-2xl font-semibold">
                {howItWorks.verification.title}
              </h3>
              <p className="text-mist measure mt-4 text-sm leading-relaxed sm:text-base">
                {howItWorks.verification.body}
              </p>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- platforms */}
      <Section id="app">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={platforms.eyebrow}
              title={platforms.heading}
              intro={platforms.intro}
            />
          </Reveal>
          {/* the app itself */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <PhoneMockup />
            </Reveal>
            <Reveal delay={140}>
              <h3 className="display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold">
                Your Aurat Card, in your pocket
              </h3>
              <p className="text-mist mt-5 text-base leading-relaxed">
                Your verified membership, a QR code partners can scan, and every
                benefit near you — on the app and the web portal.
              </p>
              <StoreButtons className="mt-9" />
              <p className="text-dim mt-5 text-xs">
                Available — additional features in development and testing.
              </p>
            </Reveal>
          </div>

          {/* short explainer film */}
          <Reveal className="mt-24 block">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow={videoShowcase.eyebrow}
                  title={videoShowcase.heading}
                  intro={videoShowcase.body}
                />
              </div>
              <VideoShowcase
                src={videoShowcase.src}
                poster={videoShowcase.poster}
                duration={videoShowcase.duration}
              />
            </div>
          </Reveal>

          <div className="mt-24 grid gap-5 lg:grid-cols-2">
            {platforms.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 110}>
                <Card className="flex h-full flex-col">
                  <h3 className="display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-base text-white/80">{item.subtitle}</p>
                  <p className="text-mist mt-4 flex-1 text-sm leading-relaxed">
                    {item.body}
                  </p>
                  <div className="border-line-soft mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6">
                    {item.links.map((link) => (
                      <ArrowLink key={link.label} href={link.href}>
                        {link.label}
                      </ArrowLink>
                    ))}
                  </div>
                  <p className="text-dim mt-5 text-xs">{item.status}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- partner network */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow={partnerNetwork.eyebrow}
              title={partnerNetwork.heading}
              intro={partnerNetwork.intro}
            />
          </Reveal>
          {/* Icon tiles — deliberately not the Steps look: no numbering, a
              white raised card with a filled icon roundel instead of a
              hairline outline grid, so the two grid styles on this page
              read as two different things rather than the same box twice. */}
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerNetwork.sectors.map((sector, i) => (
              <Reveal
                as="li"
                key={sector.title}
                delay={(i % 3) * 70}
                className="group flex items-start gap-4 rounded-2xl bg-white/70 p-6 shadow-[0_1px_2px_rgba(39,24,42,0.06)] ring-1 ring-[#271829]/8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(121,32,124,0.35)]"
              >
                <span className="from-royal flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-[#3d1440] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <SectorIcon name={sector.title} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-medium">{sector.title}</h3>
                  <p className="text-ink/65 mt-1.5 text-sm leading-relaxed">
                    {sector.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="text-ink/70 measure mt-12 text-base leading-relaxed">
            {partnerNetwork.outro}
          </p>
        </Container>
      </Section>

      {/* ------------------------------------------------------- become a partner */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={becomePartner.eyebrow}
              title={becomePartner.heading}
              intro={becomePartner.intro}
            />
          </Reveal>
          <ul className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {becomePartner.benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit.title} delay={(i % 3) * 80}>
                <Card className="h-full">
                  <h3 className="text-lg font-medium text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-mist mt-3 text-sm leading-relaxed">
                    {benefit.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10 block">
            <Card className="border-accent/25 bg-accent/[0.06]">
              <h3 className="text-accent text-lg font-medium">
                {becomePartner.taxNote.title}
              </h3>
              <p className="text-mist measure mt-3 text-sm leading-relaxed">
                {becomePartner.taxNote.body}
              </p>
            </Card>
          </Reveal>

          <div className="mt-10">
            <CtaButton href={becomePartner.cta.href}>
              {becomePartner.cta.label}
            </CtaButton>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------- safety + women business */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <Eyebrow>{safety.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {safety.heading}
                </h2>
                <p className="text-mist mt-5 text-base leading-relaxed">
                  {safety.body}
                </p>
                <CheckList items={safety.features} className="mt-7" />
                <StatusBadge status={safety.status} className="mt-8" />
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="flex h-full flex-col">
                <Eyebrow>{business.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold">
                  {business.heading}
                </h2>
                <p className="text-mist mt-5 flex-1 text-base leading-relaxed">
                  {business.body}
                </p>
                <div className="mt-8">
                  <CtaButton href={business.cta.href} variant="secondary">
                    {business.cta.label}
                  </CtaButton>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ membership */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={membership.eyebrow}
              title={membership.heading}
              intro={membership.intro}
            />
            <div className="mt-10">
              <CtaButton href={membership.cta.href}>
                {membership.cta.label}
              </CtaButton>
            </div>
            <div className="max-w-4xl">
              <Disclaimer>
                {membership.disclaimers.map((text) => (
                  <span key={text} className="mb-3 block last:mb-0">
                    {text}
                  </span>
                ))}
              </Disclaimer>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- franchise */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <Card className="from-surface to-ink bg-gradient-to-br sm:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <Eyebrow>{franchise.eyebrow}</Eyebrow>
                  <h2 className="display mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold">
                    {franchise.heading}
                  </h2>
                  <div className="mt-8">
                    <CtaButton href={franchise.cta.href}>
                      {franchise.cta.label}
                    </CtaButton>
                  </div>
                </div>
                <div>
                  <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                    Currently available
                  </p>
                  <PillList items={franchise.cities} className="mt-4" />
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------------------------------- lahore franchise */}
      <Section id="lahore-franchise">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={lahoreFranchise.eyebrow}
              title={lahoreFranchise.heading}
              intro={lahoreFranchise.intro}
            />
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StatusBadge status={lahoreFranchise.kind} />
              <span className="border-accent/30 bg-accent/[0.06] text-accent rounded-full border px-3.5 py-1.5 text-xs">
                {lahoreFranchise.fee.label}: {lahoreFranchise.fee.value}
              </span>
            </div>
          </Reveal>

          {/* the market */}
          <div className="border-line mt-16 grid gap-px border-t md:grid-cols-3">
            {lahoreFranchise.market.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90} className="pt-8 md:pr-8">
                <Stat value={stat.value} label={stat.label} />
              </Reveal>
            ))}
          </div>

          {/* charts */}
          <Reveal className="mt-20 block">
            <TrendChart
              title={lahoreFranchise.members.title}
              subtitle={lahoreFranchise.members.subtitle}
              points={lahoreFranchise.members.points}
              unit={lahoreFranchise.members.unit}
            />
          </Reveal>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <Reveal>
              <BarChart
                title={lahoreFranchise.penetration.title}
                subtitle={lahoreFranchise.penetration.subtitle}
                points={lahoreFranchise.penetration.points}
                unit={lahoreFranchise.penetration.unit}
              />
            </Reveal>
            <Reveal delay={110}>
              <BarChart
                title={lahoreFranchise.merchants.title}
                subtitle={lahoreFranchise.merchants.subtitle}
                points={lahoreFranchise.merchants.points}
                unit={lahoreFranchise.merchants.unit}
              />
            </Reveal>
          </div>

          {/* illustrative economics — figures and footnote never separated */}
          <Reveal className="mt-5 block">
            <Card className="border-accent/25 bg-accent/[0.04]">
              <h3 className="text-accent text-lg font-medium">
                {lahoreFranchise.economics.title}
              </h3>
              <p className="text-mist mt-2 text-sm leading-relaxed">
                {lahoreFranchise.economics.caption}
              </p>
              <dl className="border-line-soft mt-7 grid gap-6 border-t pt-7 sm:grid-cols-3 lg:grid-cols-5">
                {lahoreFranchise.economics.values.map((row) => (
                  <div key={row.label}>
                    <dt className="text-dim text-[11px] tracking-[0.14em] uppercase">
                      {row.label}
                    </dt>
                    <dd className="display mt-2 text-2xl">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-dim border-line-soft mt-8 border-t pt-6 text-xs leading-relaxed">
                {lahoreFranchise.economics.footnote}
              </p>
            </Card>
          </Reveal>

          {/* who does what */}
          <div className="mt-20 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <h3 className="text-lg font-medium text-white">
                  {lahoreFranchise.model.franchisee.title}
                </h3>
                <CheckList
                  items={lahoreFranchise.model.franchisee.items}
                  className="mt-6"
                />
              </Card>
            </Reveal>
            <Reveal delay={110}>
              <Card className="h-full">
                <h3 className="text-lg font-medium text-white">
                  {lahoreFranchise.model.cspl.title}
                </h3>
                <CheckList
                  items={lahoreFranchise.model.cspl.items}
                  className="mt-6"
                />
              </Card>
            </Reveal>
          </div>

          {/* roadmap */}
          <Reveal className="mt-20 block">
            <h3 className="text-lg font-medium text-white">
              {lahoreFranchise.roadmap.title}
            </h3>
            <div className="mt-6">
              <Steps steps={lahoreFranchise.roadmap.steps} columns={6} />
            </div>
          </Reveal>

          {/* strategic sectors */}
          <Reveal className="mt-16 block">
            <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
              {lahoreFranchise.sectors.title}
            </p>
            <PillList items={lahoreFranchise.sectors.items} className="mt-4" />
          </Reveal>

          <Disclaimer>{lahoreFranchise.disclaimer}</Disclaimer>

          <div className="mt-10">
            <CtaButton href={lahoreFranchise.cta.href}>
              {lahoreFranchise.cta.label}
            </CtaButton>
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
            <CtaButton href="/opportunities" variant="ghost">
              Explore Opportunities
            </CtaButton>
          </>
        }
      />
    </>
  );
}
