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
} from "@/components/ui";
import { futureOpportunities, opportunities } from "@/content/opportunities";

export const metadata: Metadata = {
  title: "Strategic Opportunities",
  description:
    "CSPL identifies, develops and facilitates selected business and partnership opportunities across its ventures and assets.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic opportunities"
        title="Strategic Opportunities"
        intro="CSPL identifies, develops and facilitates selected business and partnership opportunities across its ventures and assets, while continuously exploring new opportunities for growth and collaboration."
        actions={
          <>
            <CtaButton href="#opportunities">Explore Opportunities</CtaButton>
            <CtaButton href="/partnerships" variant="secondary">
              Partner With Us
            </CtaButton>
          </>
        }
      />

      <Section id="opportunities" className="pt-0">
        <Container>
          <div className="space-y-5">
            {opportunities.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <Card id={item.id} className="scroll-mt-32 sm:p-10">
                  <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                    <div>
                      <p className="text-accent text-[11px] font-medium tracking-[0.16em] uppercase">
                        {item.kind}
                      </p>
                      <h2 className="display mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-mist mt-6 text-base leading-relaxed sm:text-lg">
                        {item.body}
                      </p>
                      <div className="mt-9">
                        <CtaButton href={item.cta.href}>
                          {item.cta.label}
                        </CtaButton>
                      </div>
                    </div>

                    <div className="border-line-soft border-t pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
                      <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                        {item.detailLabel}
                      </p>
                      <PillList items={item.details} className="mt-5" />
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------------- future ops */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Future opportunities"
                title={futureOpportunities.heading}
                intro={futureOpportunities.body}
              />
              <div className="mt-10">
                <CtaButton href={futureOpportunities.cta.href}>
                  {futureOpportunities.cta.label}
                </CtaButton>
              </div>
            </Reveal>
            <Reveal delay={130}>
              <Card>
                <p className="text-dim text-[11px] tracking-[0.16em] uppercase">
                  In the pipeline
                </p>
                <CheckList items={futureOpportunities.items} className="mt-6" />
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Let's Build Something Together"
        body="Whether you bring technology, expertise, market access, institutional reach or a business opportunity, we are open to exploring meaningful partnerships."
        actions={
          <>
            <CtaButton href="/contact?topic=Business%20Opportunity">
              Contact CSPL
            </CtaButton>
            <CtaButton href="/partnerships" variant="secondary">
              Partner With Us
            </CtaButton>
          </>
        }
      />
    </>
  );
}
