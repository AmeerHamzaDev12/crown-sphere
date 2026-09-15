import Image from "next/image";

import { AuratCardSlider } from "@/components/aurat-card-slider";
import { EcosystemOrbit } from "@/components/ecosystem-orbit";
import { FeatureIcon } from "@/components/feature-icons";
import { Marquee } from "@/components/marquee";
import { PhoneMockup } from "@/components/phone-mockup";
import { PillarGrid } from "@/components/pillar-grid";
import { Reveal } from "@/components/reveal";
import { StarField } from "@/components/star-field";
import {
  ArrowLink,
  Card,
  Container,
  CtaBand,
  CtaButton,
  Eyebrow,
  LinkCard,
  PillList,
  Section,
  SectionHeading,
  StatusBadge,
  withAccent,
} from "@/components/ui";
import {
  auratCardFeature,
  auratSlider,
  crownsTvStrip,
  finalCta,
  hero,
  newsIntro,
  opportunitiesIntro,
  partners,
  tickerItems,
  venturesIntro,
  whoWeAre,
} from "@/content/home";
import { opportunities } from "@/content/opportunities";
import { ventures } from "@/content/ventures";

export default function HomePage() {
  const [featured] = ventures;

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="bg-ink relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        {" "}
        <div
          aria-hidden="true"
          className="glow-pulse from-plum/55 pointer-events-none absolute -top-64 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-b via-transparent to-transparent blur-3xl"
        />
        {/* Glass spiral from the reference build, drifting slowly. Sits right
            of centre, sized to its real 3:2 aspect ratio (1536x1024) and
            vertically centered instead of stretched to fill the section —
            that stretch + object-cover was what blew it up and cropped it. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute  right-0 left-[26%] aspect-[3/2] overflow-hidden  lg:left-[30%]"
        >
          <Image
            src="/sphere.png"
            alt=""
            fill
            priority
            sizes="(max-width: 780px) 100vw, 72vw"
            className="hero-art object-contain"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#151018_0%,#151018ef_19%,#15101855_55%,transparent_83%),linear-gradient(0deg,#151018,transparent_18%)]"
        />
        <StarField density={1.15} parallax={0.28} />
        <div
          aria-hidden="true"
          className="grain-layer pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        />
        {/* Stagger only; the wait for the preloader comes from --enter-delay,
            which drops to 0 once the splash has run. See globals.css. */}
        <Container className="relative">
          <div
            className="rise-in"
            style={{ "--enter-stagger": "80ms" } as React.CSSProperties}
          >
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>
          <h1
            className="display rise-in mt-7 max-w-[16ch] text-[clamp(2.75rem,7.5vw,6rem)] font-semibold"
            style={{ "--enter-stagger": "180ms" } as React.CSSProperties}
          >
            {withAccent(hero.headline)}
          </h1>
          <p
            className="text-mist rise-in mt-8 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl"
            style={{ "--enter-stagger": "300ms" } as React.CSSProperties}
          >
            {hero.body}
          </p>
          <div
            className="rise-in mt-11 flex flex-wrap items-center gap-3"
            style={{ "--enter-stagger": "420ms" } as React.CSSProperties}
          >
            <CtaButton href={hero.primary.href}>{hero.primary.label}</CtaButton>
            <CtaButton href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </CtaButton>
          </div>

          {/* Aurat Card slider — replaces the old four-figure stat strip */}
          <div
            className="rise-in mt-20 md:mt-24"
            style={{ "--enter-stagger": "540ms" } as React.CSSProperties}
          >
            <AuratCardSlider
              slides={auratSlider.slides}
              video={auratSlider.video}
              badge={auratSlider.badge}
            />
          </div>
        </Container>
      </section>

      {/* The reference build's purple ticker, directly under the hero. */}
      <Marquee tone="band" speed={34} items={tickerItems} />

      {/* ------------------------------------------------------------ who we are */}
      <Section tone="surface" id="who-we-are">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow={whoWeAre.eyebrow}
                title={whoWeAre.heading}
              />
              <div className="mt-9">
                <ArrowLink href={whoWeAre.cta.href}>
                  {whoWeAre.cta.label}
                </ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-mist text-lg leading-relaxed text-pretty">
                {whoWeAre.body}
              </p>
            </Reveal>
          </div>

          {/* full-width row of pillar tiles, staggered */}
          <PillarGrid
            items={whoWeAre.pillars}
            className="mt-16 lg:mt-20 lg:grid-cols-4"
          />
        </Container>
      </Section>

      {/* -------------------------------------------------------------- ventures */}
      <Section id="ventures">
        <Container>
          {/* The rotating ecosystem explorer from the reference build. Now
              the only place non-featured ventures are shown on the home
              page — the card grid that used to sit below was removed since
              this panel already surfaces the same summary + bullet points
              for every venture as you cycle through them. */}
          <Reveal>
            <EcosystemOrbit
              eyebrow={venturesIntro.eyebrow}
              intro={venturesIntro.intro}
            />
          </Reveal>

          <div className="mt-24">
            <Reveal>
              <LinkCard
                href={featured.href}
                className="from-surface to-ink bg-gradient-to-br sm:p-10 lg:p-12"
              >
                <div
                  aria-hidden="true"
                  className="bg-plum/45 pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl"
                />
                <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                  <div>
                    <StatusBadge status={featured.status} />
                    <h3 className="display group-hover:text-accent mt-6 text-[clamp(1.9rem,4vw,3rem)] font-semibold transition-colors">
                      {featured.name}
                    </h3>
                    <p className="text-mist measure mt-5 text-base leading-relaxed sm:text-lg">
                      {featured.summary}
                    </p>
                  </div>
                  <PillList
                    items={featured.points}
                    className="lg:justify-end"
                  />
                </div>
              </LinkCard>
            </Reveal>
          </div>

          <div className="mt-12">
            <CtaButton href="/ventures" variant="secondary">
              View All Ventures
            </CtaButton>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------- aurat card band */}
      <Section tone="cream" id="aurat-card">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="cream"
                eyebrow={auratCardFeature.eyebrow}
                title={auratCardFeature.heading}
                intro={auratCardFeature.body}
              />
              <p className="text-cream-muted mt-6 text-sm leading-relaxed">
                {auratCardFeature.access}
              </p>

              {/* where members can use it */}
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {auratCardFeature.channels.map((label) => (
                  <li
                    key={label}
                    className="border-royal/20 bg-royal/[0.06] text-cream-ink rounded-full border px-3.5 py-1.5 text-xs"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <CtaButton href={auratCardFeature.primary.href} variant="light">
                  {auratCardFeature.primary.label}
                </CtaButton>
                <ArrowLink
                  tone="cream"
                  href={auratCardFeature.secondary.href}
                  className="px-4"
                >
                  {auratCardFeature.secondary.label}
                </ArrowLink>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-card-lg relative overflow-hidden bg-[linear-gradient(155deg,#241829,#140e17_60%)] p-7 text-white shadow-[0_40px_90px_-40px_rgba(61,20,64,0.85)] ring-1 ring-white/10 sm:p-10">
                <StarField density={0.7} parallax={0.14} />
                {/* soft plum glow sitting behind the handset */}
                <div
                  aria-hidden="true"
                  className="bg-royal/40 pointer-events-none absolute top-10 -right-10 h-72 w-72 rounded-full blur-3xl"
                />

                <div className="relative grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="text-accent flex items-center gap-2.5 text-[11px] font-medium tracking-[0.18em] uppercase">
                      <span className="bg-accent inline-block h-px w-[25px]" />
                      Our ambition
                    </p>
                    <p className="display mt-5 bg-gradient-to-br from-white via-white to-[#d7a3de] bg-clip-text text-[clamp(2.75rem,6vw,4.25rem)] leading-none text-transparent">
                      {auratCardFeature.ambitionFigure}
                    </p>
                    <p className="text-mist mt-3 text-sm leading-relaxed">
                      {auratCardFeature.ambitionLabel}
                    </p>

                    <dl className="mt-8 flex flex-wrap gap-2.5">
                      {auratCardFeature.facts.map((fact) => (
                        <div
                          key={fact.label}
                          className="rounded-2xl bg-white/[0.05] px-4 py-3 ring-1 ring-white/10"
                        >
                          <dt className="text-dim text-[10px] tracking-[0.14em] uppercase">
                            {fact.label}
                          </dt>
                          <dd className="display mt-1 text-xl">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <PhoneMockup width={190} className="sm:mx-0" />
                </div>

                {/* benefits — padded icon tiles instead of a hairline table */}
                <ul className="relative mt-9 grid gap-3 sm:grid-cols-2">
                  {auratCardFeature.highlights.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center gap-3.5 rounded-2xl bg-white/[0.04] px-4 py-3.5 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08] hover:ring-[#d7a3de]/40"
                    >
                      <span className="from-royal flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br to-[#3d1440] text-white ring-1 ring-[#d7a3de]/25 transition-transform duration-300 group-hover:scale-105">
                        <FeatureIcon name={item} className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* partner strip */}
          <div className="border-ink/12 mt-24 border-t pt-16">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeading
                  tone="cream"
                  eyebrow={partners.eyebrow}
                  title={
                    // withAccent must receive the raw string — wrapping it in
                    // a <span> first is what printed the asterisks literally.
                    <span className="text-[clamp(1.6rem,3vw,2.5rem)]">
                      {withAccent(partners.heading)}
                    </span>
                  }
                />
                <ArrowLink tone="cream" href="/partnerships">
                  Partner With Us
                </ArrowLink>
              </div>
            </Reveal>
            <Marquee
              items={partners.logos}
              tone="cream"
              icons
              className="mt-12"
            />
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------- opportunities */}
      <Section id="opportunities">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={opportunitiesIntro.eyebrow}
              title={opportunitiesIntro.heading}
              intro={opportunitiesIntro.intro}
            />
          </Reveal>

          <ul className="mt-16 grid gap-5 md:grid-cols-3">
            {opportunities.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 100}>
                <Card className="flex h-full flex-col">
                  <p className="text-accent text-[11px] font-medium tracking-[0.16em] uppercase">
                    {item.kind}
                  </p>
                  <h3 className="display mt-5 text-2xl font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-mist mt-4 flex-1 text-sm leading-relaxed">
                    {item.body}
                  </p>
                  <div className="border-line-soft mt-7 border-t pt-6">
                    <p className="text-dim text-[11px] tracking-[0.14em] uppercase">
                      {item.detailLabel}
                    </p>
                    <PillList items={item.details} className="mt-3.5" />
                  </div>
                  <ArrowLink href={item.cta.href} className="mt-7">
                    {item.cta.label}
                  </ArrowLink>
                </Card>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12">
            <CtaButton href={opportunitiesIntro.cta.href} variant="secondary">
              {opportunitiesIntro.cta.label}
            </CtaButton>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- crowns tv */}
      <Section tone="surface" id="crowns-tv">
        <Container>
          <Reveal>
            <div className="rounded-card-lg border-line from-surface to-ink relative overflow-hidden border bg-gradient-to-br p-8 sm:p-12 lg:p-16">
              <div
                aria-hidden="true"
                className="bg-plum/50 pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full blur-3xl"
              />
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <Eyebrow>{crownsTvStrip.eyebrow}</Eyebrow>
                  <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold">
                    {crownsTvStrip.heading}
                  </h2>
                  <p className="text-mist measure mt-6 text-base leading-relaxed sm:text-lg">
                    {crownsTvStrip.body}
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <CtaButton href={crownsTvStrip.primary.href}>
                      {crownsTvStrip.primary.label}
                    </CtaButton>
                    <StatusBadge status="Coming Soon" />
                  </div>
                </div>
                <div>
                  <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                    Categories
                  </p>
                  <PillList items={crownsTvStrip.categories} className="mt-4" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- news */}
      <Section>
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow={newsIntro.eyebrow}
                title={newsIntro.heading}
                intro={newsIntro.intro}
              />
              <CtaButton href={newsIntro.cta.href} variant="secondary">
                {newsIntro.cta.label}
              </CtaButton>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ final cta */}
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