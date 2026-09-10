import { Container, CtaButton, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink relative flex min-h-[70vh] items-center overflow-hidden py-40">
      <div
        aria-hidden="true"
        className="from-plum/45 pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl"
      />
      <Container className="relative">
        <Eyebrow>404</Eyebrow>
        <h1 className="display mt-6 max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold">
          This page isn&apos;t part of the sphere.
        </h1>
        <p className="text-mist mt-6 max-w-lg text-lg leading-relaxed">
          The page you were looking for has moved or never existed. Head back to
          the homepage, or explore what we&apos;re building.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <CtaButton href="/">Back to Home</CtaButton>
          <CtaButton href="/ventures" variant="secondary">
            Explore Our Ventures
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
