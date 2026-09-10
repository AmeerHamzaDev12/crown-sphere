"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { contactTopics } from "@/content/contact";
import { ArrowIcon, cx } from "./ui";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "w-full rounded-2xl border border-line bg-ink px-4 py-3.5 text-sm text-white placeholder:text-dim transition-colors focus:border-royal focus:outline-none";

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-white">
        {label}
        {required ? <span className="text-ember"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cx(fieldClass, error && "border-ember")}
      />
      {error ? (
        <p id={`${name}-error`} className="text-ember mt-2 text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-royal hover:bg-royal-2 group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sendingâ€¦" : "Submit"}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const topicRef = useRef<HTMLSelectElement>(null);

  // Links like /contact?topic=Aurat%20Card preselect the dropdown. The select
  // stays uncontrolled and is set on the DOM node, so the server-rendered HTML
  // and the first client render still match.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("topic");
    if (
      requested &&
      topicRef.current &&
      (contactTopics as readonly string[]).includes(requested)
    ) {
      topicRef.current.value = requested;
    }
  }, []);

  if (state.status === "success") {
    return (
      <div className="rounded-card border-line bg-surface border p-10 text-center">
        <div className="bg-royal/12 text-royal mx-auto flex h-14 w-14 items-center justify-center rounded-full">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-6 w-6">
            <path
              d="M4.5 10.5 8.5 14.5 15.5 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="display mt-6 text-2xl font-semibold">Message sent</h3>
        <p className="text-mist mx-auto mt-3 max-w-md text-sm leading-relaxed">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="border-ember/40 bg-ember/10 text-ember rounded-2xl border px-4 py-3 text-sm"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          placeholder="Your full name"
          error={state.errors?.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          error={state.errors?.email}
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+92 300 0000000"
        />
        <Field
          label="Organization / Company"
          name="organization"
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="topic" className="mb-2 block text-sm text-white">
          What are you contacting us about?<span className="text-ember"> *</span>
        </label>
        <select
          id="topic"
          name="topic"
          required
          ref={topicRef}
          defaultValue=""
          aria-invalid={state.errors?.topic ? true : undefined}
          className={cx(fieldClass, state.errors?.topic && "border-ember")}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {contactTopics.map((topic) => (
            <option key={topic} value={topic} className="bg-ink">
              {topic}
            </option>
          ))}
        </select>
        {state.errors?.topic ? (
          <p className="text-ember mt-2 text-xs">{state.errors.topic}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-white">
          Message<span className="text-ember"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us how we can help."
          aria-invalid={state.errors?.message ? true : undefined}
          className={cx(fieldClass, "resize-y", state.errors?.message && "border-ember")}
        />
        {state.errors?.message ? (
          <p className="text-ember mt-2 text-xs">{state.errors.message}</p>
        ) : null}
      </div>

      {/* Honeypot â€” hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="company_website">Do not fill this in</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />
    </form>
  );
}
