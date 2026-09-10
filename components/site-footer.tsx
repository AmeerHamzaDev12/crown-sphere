import Link from "next/link";

import { LogoMark } from "./logo";
import { Container } from "./ui";
import { company, footerNav, legalNav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink border-line relative overflow-hidden border-t">
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-3 text-white">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-lg font-semibold tracking-[-0.02em]">
                Crowns Sphere
              </span>
            </div>
            <p className="text-mist mt-6 max-w-sm text-sm leading-relaxed">
              {company.description}
            </p>

            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="text-dim w-20 shrink-0">Email</dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-royal text-white transition-colors"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-dim w-20 shrink-0">Phone</dt>
                <dd>
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="hover:text-royal text-white transition-colors"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-dim w-20 shrink-0">Office</dt>
                <dd className="text-mist">{company.address}</dd>
              </div>
            </dl>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-[11px] font-medium tracking-[0.18em] text-white uppercase">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-mist text-sm transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="border-line mt-14 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-dim text-xs">
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-dim text-xs transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Oversized wordmark, cropped at the baseline */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden"
      >
        {/* Kept to one line and cropped tight — leading below 1 plus the
            negative margin means it occupies about half its own font size. */}
        <p className="font-display text-line -mb-[0.3em] text-center text-[clamp(2.25rem,11vw,7.5rem)] leading-[0.82] font-semibold tracking-[-0.06em] whitespace-nowrap opacity-60">
          CROWNS SPHERE
        </p>
      </div>
    </footer>
  );
}
