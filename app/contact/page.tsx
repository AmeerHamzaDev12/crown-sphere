import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import {
  ArrowLink,
  Card,
  Container,
  CtaButton,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui";
import { form, hero, offices, routes } from "@/content/contact";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: hero.body,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.heading}
        intro={hero.body}
        actions={
          <>
            <CtaButton href="#form">Send a Message</CtaButton>
            <CtaButton href={`mailto:${company.email}`} variant="secondary">
              {company.email}
            </CtaButton>
          </>
        }
      />

      {/* ---------------------------------------------------------------- routes */}
      <Section className="pt-0">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {routes.map((route, i) => (
              <Reveal as="li" key={route.title} delay={(i % 4) * 80}>
                <Card className="flex h-full flex-col">
                  <h2 className="text-lg font-medium text-white">
                    {route.title}
                  </h2>
                  <p className="text-mist mt-3 flex-1 text-sm leading-relaxed">
                    {route.body}
                  </p>
                  <ArrowLink href={route.cta.href} className="mt-7">
                    {route.cta.label}
                  </ArrowLink>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ form + info */}
      <Section tone="surface" id="form">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow={form.eyebrow}
                title={form.heading}
                intro={form.intro}
              />
              <div className="mt-12">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="lg:sticky lg:top-32">
                <Card>
                  <p className="text-[11px] font-medium tracking-[0.18em] text-white uppercase">
                    {offices.eyebrow}
                  </p>
                  <h2 className="display mt-5 text-2xl font-semibold">
                    {offices.heading}
                  </h2>

                  <dl className="border-line divide-line mt-8 divide-y border-t">
                    <div className="py-5">
                      <dt className="text-dim text-xs tracking-[0.14em] uppercase">
                        Company
                      </dt>
                      <dd className="mt-2 text-sm text-white">
                        {company.legalName}
                      </dd>
                    </div>
                    <div className="py-5">
                      <dt className="text-dim text-xs tracking-[0.14em] uppercase">
                        Email
                      </dt>
                      <dd className="mt-2 text-sm">
                        <a
                          href={`mailto:${company.email}`}
                          className="hover:text-accent text-white transition-colors"
                        >
                          {company.email}
                        </a>
                      </dd>
                    </div>
                    <div className="py-5">
                      <dt className="text-dim text-xs tracking-[0.14em] uppercase">
                        Phone
                      </dt>
                      <dd className="mt-2 text-sm">
                        <a
                          href={`tel:${company.phoneHref}`}
                          className="hover:text-accent text-white transition-colors"
                        >
                          {company.phone}
                        </a>
                      </dd>
                    </div>
                    <div className="py-5">
                      <dt className="text-dim text-xs tracking-[0.14em] uppercase">
                        Address
                      </dt>
                      <dd className="text-mist mt-2 text-sm leading-relaxed">
                        {company.address}
                      </dd>
                    </div>
                  </dl>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
