"use client";

import { useState, type ReactNode } from "react";
import { cx } from "./ui";

export type AccordionItem = {
  question: string;
  answer: ReactNode;
};

export function Accordion({
  items,
  tone = "ink",
}: {
  items: readonly AccordionItem[];
  tone?: "ink" | "cream";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul
      className={cx(
        "border-t",
        tone === "cream" ? "border-ink/12" : "border-line",
      )}
    >
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <li
            key={item.question}
            className={cx(
              "border-b",
              tone === "cream" ? "border-ink/12" : "border-line",
            )}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={cx(
                    "text-base font-medium transition-colors sm:text-lg",
                    tone === "cream" ? "text-ink" : "text-white",
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cx(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    open
                      ? "border-royal bg-royal rotate-45 text-white"
                      : tone === "cream"
                        ? "border-ink/20 text-ink"
                        : "border-line text-mist",
                  )}
                >
                  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                    <path
                      d="M7 2.5v9M2.5 7h9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-7"
            >
              <div
                className={cx(
                  "max-w-2xl text-sm leading-relaxed sm:text-base",
                  tone === "cream" ? "text-ink/70" : "text-mist",
                )}
              >
                {item.answer}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
