/**
 * Travel & Visa Drop Box — source: "10-Visa Dropb Box And Travel .docx".
 *
 * Note: the internal cross-reference block at the end of that document was
 * marked in red as "do not include", so it is deliberately left out here.
 */

export const hero = {
  eyebrow: "Travel & Visa Solutions",
  heading: "Making Travel Services More Digital",
  body: "CSPL is developing technology-enabled solutions to simplify and digitize selected travel and visa-related processes.",
  status: "Early Stage Development",
  primary: { label: "Learn More", href: "#what-we-do" },
  secondary: { label: "Partner With Us", href: "/partnerships" },
};

export const offerings = {
  eyebrow: "What we do",
  heading: "Two Services, Two Stages",
  items: [
    {
      title: "Travel & Accommodation",
      body: "Our booking module is integrated with Airbnb, allowing users to explore and book available accommodation.",
      status: "Available",
      steps: [
        "Search accommodation",
        "View Misaari options",
        "Book",
        "Confirmation",
      ],
      cta: { label: "Partner With Us", href: "/partnerships" },
    },
    {
      title: "Visa Drop Box",
      body: "CSPL has applied for the visa drop-box facility and is developing the technology, workflows and internal controls required to support the service, subject to applicable approvals and authorizations.",
      status: "In Development",
      steps: [
        "Digital record management",
        "Document tracking",
        "Process monitoring",
        "Controlled access",
      ],
      cta: { label: "Partner With Us", href: "/partnerships" },
    },
  ],
};

export const misaari = {
  eyebrow: "Stay at Misaari",
  heading: "Experience the Beauty of Misaari, Murree",
  body: "Explore available accommodation and book your stay through our integrated booking platform.",
  cta: {
    label: "View Accommodation & Availability",
    href: "/contact?topic=Travel%20%26%20Visa",
  },
};

export const building = {
  eyebrow: "What we are building",
  heading: "Digital Visa Drop Box Infrastructure",
  body: "CSPL is building a visa drop-box facility and is developing a technology platform to support the secure, controlled and efficient handling of visa-related document submission processes.",
  note: "The service is currently under development and subject to the necessary approvals and authorizations.",
};

export const technology = {
  eyebrow: "Technology",
  heading: "Technology-Enabled Processing",
  intro:
    "We are developing a digital system designed to support the structured handling, tracking and management of visa drop-box processes.",
  capabilities: [
    "Digital record management",
    "Document tracking",
    "Process monitoring",
    "Controlled access",
    "Status management",
    "Internal workflow controls",
  ],
  controls: {
    title: "Designed Around Strong Internal Controls",
    body: "CSPL is developing operational procedures and technology-based controls designed to support accountability, traceability and controlled handling throughout the process.",
  },
};

export const finalCta = {
  heading: "Partner With Us",
  body: "We welcome discussions with organizations interested in technology, travel services and process-management solutions.",
  primary: { label: "Discuss a Partnership", href: "/partnerships" },
  secondary: { label: "Contact Us", href: "/contact?topic=Travel%20%26%20Visa" },
};

export const disclaimer =
  "The visa drop-box facility and related services are currently under development and subject to applicable approvals and authorizations. Availability of services will be announced once operational.";
