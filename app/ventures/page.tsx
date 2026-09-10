import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import {
  ArrowIcon,
  CheckList,
  Container,
  CtaBand,
  CtaButton,
  PageHero,
  Section,
  StatusBadge,
} from "@/components/ui";
import { ventures } from "@/content/ventures";

export const metadata: Metadata = {
  title: "Our Ventures",
  description:
    "Operating businesses, technology platforms and emerging ventures across the Crowns Sphere ecosystem.",
};

export default function VenturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our ventures"
        title="Businesses & Platforms We Are Building"
        intro="Our portfolio includes operating businesses, technology platforms, emerging ventures and partnership opportunities at different stages of development."
        actions={
          <>
            <CtaButton href="/partnerships">Partner With Us</CtaButton>
            <CtaButton href="/opportunities" variant="secondary">
              Explore Opportunities
            </CtaButton>
          </>
        }
      />

      <Section className="pt-0">
        <Container>
          <ul className="border-line divide-line divide-y border-t border-b">
            {ventures.map((venture, i) => (
              <Reveal as="li" key={venture.slug} delay={(i % 3) * 70}>
                <a
                  href={venture.href}
                  className="group grid gap-8 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] md:items-start md:gap-12 md:py-12"
                >
                  <div>
                    <h2 className="display group-hover:text-royal text-[clamp(1.6rem,3vw,2.4rem)] font-semibold transition-colors">
                      {venture.name}
                    </h2>
                    <StatusBadge status={venture.status} className="mt-5" />
                  </div>

                  <div>
                    <p className="text-mist text-base leading-relaxed">
                      {venture.summary}
                    </p>
                    <CheckList
                      items={venture.points}
                      className="mt-6 sm:columns-2"
                    />
                  </div>

                  <span className="border-line text-mist group-hover:border-royal group-hover:bg-royal flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white">
                    <ArrowIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Let's Build Something Together"
        body="Whether you want to explore a partnership, discuss a business opportunity, learn about one of our ventures or work with us, we'd like to hear from you."
        actions={
          <>
            <CtaButton href="/contact">Contact Us</CtaButton>
            <CtaButton href="/partnerships" variant="secondary">
              Partner With Us
            </CtaButton>
          </>
        }
      />
    </>
  );
}
