"use server";

/**
 * Contact form handler.
 *
 * Validation and the success/error contract are done. The only thing left is
 * delivery — see the TODO below. Two easy options:
 *
 *   Email:  npm i resend   →  https://resend.com/docs/send-with-nextjs
 *   Sheet:  POST the payload to a Google Apps Script / Airtable / Notion webhook
 *
 * Until one is wired up the submission is logged on the server and the user
 * still gets a success state, so keep this behind a staging deploy.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Field name → error message. */
  errors?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot — bots fill hidden fields, humans do not.
  if (formData.get("company_website")) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!topic) errors.topic = "Please choose what this is about.";
  if (message.length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
    };
  }

  const submission = { name, email, phone, organization, topic, message };

  try {
    // TODO: deliver the submission. For example, with Resend:
    //
    //   import { Resend } from "resend";
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: "website@crownssphere.com",
    //     to: "info@crownssphere.com",
    //     replyTo: email,
    //     subject: `[${topic}] enquiry from ${name}`,
    //     text: Object.entries(submission)
    //       .map(([k, v]) => `${k}: ${v}`)
    //       .join("\n"),
    //   });
    console.info("[contact] submission received", submission);
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email info@crownssphere.com directly.",
    };
  }

  return {
    status: "success",
    message: "Thank you — your message has reached us. We'll be in touch shortly.",
  };
}
