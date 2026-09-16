import type { Metadata } from "next";

import { MediaPlaceholder } from "@/components/media-placeholder";
import { Reveal } from "@/components/reveal";
import {
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
  StatusBadge,
  withAccent,
} from "@/components/ui";
import {
  appCallout,
  building,
  disclaimer,
  finalCta,
  hero,
  misaari,
  misaariHotel,
  offerings,
  routes,
  safarSahulat,
  services,
  technology,
  whyBook,
} from "@/content/travel-visa";

export const metadata: Metadata = {
  title: "Travel & Visa Drop Box",
  description: hero.body,
};

export default function TravelVisaPage() {
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

      {/* ------------------------------------------------------------- offerings */}
      <Section tone="surface" id="what-we-do">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={offerings.eyebrow}
              title={offerings.heading}
            />
          </Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {offerings.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 110}>
                <Card className="flex h-full flex-col">
                  <StatusBadge status={item.status} />
                  <h3 className="display mt-6 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-mist mt-5 flex-1 text-base leading-relaxed">
                    {item.body}
                  </p>
                  <div className="border-line-soft mt-7 border-t pt-6">
                    <PillList items={item.steps} />
                  </div>
                  <div className="mt-7">
                    <CtaButton href={item.cta.href} variant="secondary">
                      {item.cta.label}
                    </CtaButton>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------------- misaari */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="cream"
                eyebrow={misaari.eyebrow}
                title={misaari.heading}
                intro={misaari.body}
              />
              <div className="mt-10">
                <CtaButton href={misaari.cta.href} variant="light">
                  {misaari.cta.label}
                </CtaButton>
              </div>
            </Reveal>
            <Reveal delay={130}>
              <div className="border-ink/12 bg-ink/[0.04] rounded-card-lg border p-9">
                <p className="text-ink/45 text-[11px] tracking-[0.16em] uppercase">
                  Also available as
                </p>
                <p className="display mt-4 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold">
                  A hospitality partnership opportunity
                </p>
                <p className="text-ink/70 mt-4 text-sm leading-relaxed">
                  The Misaari property is ready to host guests. CSPL is exploring
                  an operational partnership for its management and development.
                </p>
                <div className="mt-8">
                  <CtaButton href="/opportunities#misaari" variant="light">
                    See the Opportunity
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------- safar sahulat */}
      <Section id="safar-sahulat">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={safarSahulat.eyebrow}
              title={safarSahulat.heading}
              intro={safarSahulat.intro}
            />
            <StatusBadge status={safarSahulat.status} className="mt-8" />
          </Reveal>

          {/* four services */}
          <ul className="mt-16 grid gap-5 md:grid-cols-2">
            {services.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 2) * 100}>
                <Card className="flex h-full flex-col">
                  <h3 className="display text-2xl">{item.title}</h3>
                  <p className="text-mist mt-4 text-sm leading-relaxed">
                    {item.body}
                  </p>
                  <CheckList items={item.points} className="mt-6 flex-1" />
                </Card>
              </Reveal>
            ))}
          </ul>

          {/* routes — deliberately no fares */}
          <Reveal className="mt-20 block">
            <Card className="from-surface to-ink bg-gradient-to-br sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                <div>
                  <Eyebrow>{routes.eyebrow}</Eyebrow>
                  <h3 className="display mt-5 text-[clamp(1.6rem,3vw,2.25rem)]">
                    {withAccent(routes.heading)}
                  </h3>
                  <p className="text-mist mt-5 text-sm leading-relaxed">
                    {routes.intro}
                  </p>
                </div>
                <div className="border-line-soft border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
                  <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                    Departing from
                  </p>
                  <PillList items={routes.from} className="mt-4" />
                  <p className="text-dim mt-8 text-[11px] tracking-[0.16em] uppercase">
                    Serving
                  </p>
                  <PillList items={routes.to} className="mt-4" />
                  <p className="text-dim mt-8 text-xs leading-relaxed">
                    {routes.note}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Misaari Hotel */}
          <Reveal className="mt-20 block">
            <Eyebrow>{misaariHotel.eyebrow}</Eyebrow>
            <h3 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)]">
              {misaariHotel.heading}
            </h3>
            <p className="text-mist measure mt-5 text-base leading-relaxed">
              {misaariHotel.body}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {misaariHotel.media.map((slot) => (
                <MediaPlaceholder
                  key={slot.label}
                  label={slot.label}
                  kind={slot.kind}
                  note={slot.note}
                  src={slot.src}
                />
              ))}
            </div>
          </Reveal>

          {/* why book with us */}
          <Reveal className="mt-20 block">
            <Eyebrow>{whyBook.eyebrow}</Eyebrow>
            <h3 className="display mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)]">
              {whyBook.heading}
            </h3>
            <ul className="border-line mt-12 grid gap-px border-t sm:grid-cols-2 xl:grid-cols-4">
              {whyBook.items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={(i % 4) * 80}
                  className="outline-line bg-ink p-7 outline sm:p-8"
                >
                  <h4 className="text-lg font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="text-mist mt-3 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          {/* app callout — no download counts */}
          <Reveal className="mt-20 block">
            <Card className="from-surface to-ink bg-gradient-to-br sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-8">
                <div className="max-w-xl">
                  <Eyebrow>{appCallout.eyebrow}</Eyebrow>
                  <h3 className="display mt-5 text-[clamp(1.6rem,3vw,2.25rem)]">
                    {appCallout.heading}
                  </h3>
                  <p className="text-mist mt-5 text-sm leading-relaxed">
                    {appCallout.body}
                  </p>
                </div>
                <StatusBadge status={appCallout.status} />
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- building */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={building.eyebrow}
              title={building.heading}
              intro={building.body}
            />
            <p className="text-dim measure mt-6 text-sm leading-relaxed">
              {building.note}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <Card className="h-full">
                <Eyebrow>{technology.eyebrow}</Eyebrow>
                <h3 className="display mt-5 text-[clamp(1.6rem,3vw,2.25rem)] font-semibold">
                  {technology.heading}
                </h3>
                <p className="text-mist mt-5 text-base leading-relaxed">
                  {technology.intro}
                </p>
                <p className="text-dim mt-8 text-[11px] tracking-[0.16em] uppercase">
                  Potential capabilities
                </p>
                <CheckList
                  items={technology.capabilities}
                  className="mt-5 sm:columns-2"
                />
              </Card>
            </Reveal>

            <Reveal delay={120}>
              <Card className="from-surface to-ink h-full bg-gradient-to-br">
                <h3 className="display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold">
                  {technology.controls.title}
                </h3>
                <p className="text-mist mt-5 text-base leading-relaxed">
                  {technology.controls.body}
                </p>
              </Card>
            </Reveal>
          </div>

          <Disclaimer>{disclaimer}</Disclaimer>
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
