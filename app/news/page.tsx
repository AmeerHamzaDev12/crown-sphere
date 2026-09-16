import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import {
  ArrowLink,
  Card,
  CheckList,
  Container,
  CtaBand,
  CtaButton,
  PageHero,
  PillList,
  Section,
  SectionHeading,
} from "@/components/ui";
import { articles, finalCta, hero, insights, storyTypes } from "@/content/news";
import { opportunities } from "@/content/opportunities";

export const metadata: Metadata = {
  title: "News & Insights",
  description: hero.body,
};

export default function NewsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        intro={hero.body}
        actions={
          <>
            <CtaButton href="/partnerships">Partner With Us</CtaButton>
            <CtaButton href="/crowns-tv" variant="secondary">
              Watch Crowns TV
            </CtaButton>
          </>
        }
      />

      {/* ------------------------------------------------------- featured story */}
      <Section className="pt-0">
        <Container>
          {featured ? (
            <Reveal>
              <Card className="from-surface to-ink bg-gradient-to-br sm:p-12">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-accent/12 text-accent rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-[0.1em] uppercase">
                        {featured.category}
                      </span>
                      <span className="text-dim text-xs">{featured.date}</span>
                    </div>
                    <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.25rem)] font-semibold">
                      {featured.title}
                    </h2>
                    <p className="text-mist measure mt-6 text-base leading-relaxed sm:text-lg">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="lg:justify-self-end">
                    <ArrowLink href={featured.href ?? "/contact"}>
                      Read More
                    </ArrowLink>
                  </div>
                </div>
              </Card>
            </Reveal>
          ) : null}

          {rest.length > 0 ? (
            <ul className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((article, i) =>
                article.image ? (
                  // Brand-story card: photo header with a dark scrim so a
                  // busy source image (a partner's own bright marketing
                  // graphic, a stock photo) sits inside our palette instead
                  // of fighting it, logo badge over the image, copy below.
                  <Reveal as="li" key={article.slug} delay={(i % 3) * 80}>
                    <div className="rounded-card border-line bg-surface group relative flex h-full flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={article.image}
                          alt=""
                          fill
                          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover brightness-[0.65] saturate-[0.7] transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          aria-hidden="true"
                          className="from-ink via-ink/35 absolute inset-0 bg-gradient-to-t to-transparent"
                        />
                        {article.logo ? (
                          <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-lg">
                            <Image
                              src={article.logo}
                              alt=""
                              width={80}
                              height={80}
                              unoptimized
                              className="h-full w-full object-contain"
                            />
                          </span>
                        ) : null}
                      </div>
                      <div className="flex flex-1 flex-col p-7 sm:p-8">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="bg-accent/12 text-accent rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.1em] uppercase">
                            {article.category}
                          </span>
                          <span className="text-dim text-xs">{article.date}</span>
                        </div>
                        <h3 className="display mt-5 text-xl font-semibold">
                          {article.title}
                        </h3>
                        <div className="flex-1">
                          <p className="text-mist mt-4 text-sm leading-relaxed">
                            {article.excerpt}
                          </p>
                          {article.excerpt2 ? (
                            <p className="text-mist mt-3 text-sm leading-relaxed">
                              {article.excerpt2}
                            </p>
                          ) : null}
                          {article.tagline ? (
                            <p className="mt-5">
                              <em>{article.tagline}</em>
                            </p>
                          ) : null}
                        </div>
                        <ArrowLink
                          href={article.href ?? "/contact"}
                          className="mt-6"
                        >
                          Read More
                        </ArrowLink>
                      </div>
                    </div>
                  </Reveal>
                ) : (
                  <Reveal as="li" key={article.slug} delay={(i % 3) * 80}>
                    <Card className="flex h-full flex-col">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-accent/12 text-accent rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.1em] uppercase">
                          {article.category}
                        </span>
                        <span className="text-dim text-xs">{article.date}</span>
                      </div>
                      <h3 className="display mt-5 text-xl font-semibold">
                        {article.title}
                      </h3>
                      <p className="text-mist mt-4 flex-1 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                      <ArrowLink href={article.href ?? "/contact"} className="mt-6">
                        Read More
                      </ArrowLink>
                    </Card>
                  </Reveal>
                ),
              )}
            </ul>
          ) : null}

          {/* What the newsroom will cover, until there is a back catalogue. */}
          <Reveal className="mt-5 block">
            <Card>
              <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                What we publish
              </p>
              <PillList items={storyTypes} className="mt-5" />
            </Card>
          </Reveal>
        </Container>
      </Section>

      {/* --------------------------------------------------------- opportunities */}
      <Section tone="surface">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Business opportunities"
                title="Opportunities Across the Ecosystem"
                intro="Explore selected business, franchise and partnership opportunities emerging across the Crowns Sphere ecosystem."
              />
              <ArrowLink href="/opportunities">See all</ArrowLink>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {opportunities.map((item, i) => (
              <Reveal as="li" key={item.id} delay={i * 90}>
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
                  <ArrowLink href={`/opportunities#${item.id}`} className="mt-6">
                    View opportunity
                  </ArrowLink>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- insights */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="cream"
                eyebrow={insights.eyebrow}
                title={insights.heading}
                intro={insights.intro}
              />
            </Reveal>
            <Reveal delay={130}>
              <div className="border-ink/12 rounded-card border p-8">
                <p className="text-ink/45 text-[11px] tracking-[0.16em] uppercase">
                  Topics we cover
                </p>
                <CheckList
                  items={insights.topics}
                  tone="cream"
                  className="mt-6"
                />
              </div>
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
