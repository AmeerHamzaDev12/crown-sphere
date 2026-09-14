/** Contact page — source: "14-CONTACT   .docx". */

export const hero = {
  eyebrow: "Contact",
  heading: "Let's *connect.*",
  body: "Whether you want to explore a partnership, discuss a business opportunity, learn about one of our ventures or work with us, we'd like to hear from you.",
};

export const routes = [
  {
    title: "General Enquiries",
    body: "For questions about CSPL and its businesses.",
    cta: { label: "Contact Us", href: "#form" },
  },
  {
    title: "Partnerships",
    body: "Interested in working with CSPL or one of its ventures?",
    cta: { label: "Partner With Us", href: "/partnerships" },
  },
  {
    title: "Business Opportunities",
    body: "Interested in a franchise, operating partnership or other opportunity?",
    cta: { label: "Explore Opportunities", href: "/opportunities" },
  },
  {
    title: "Services",
    body: "Looking for Crowns Financial or Crowns Marketing services?",
    cta: { label: "Talk to Our Team", href: "#form" },
  },
];

/** Dropdown options in the contact form. */
export const contactTopics = [
  "General Enquiry",
  "Partnership",
  "Business Opportunity",
  "Aurat Card",
  "Crowns Financial",
  "Crowns Education",
  "Crowns Health",
  "Crowns Marketing",
  "Digital Enterprise & Marketplace",
  "Travel & Visa",
  "Other",
] as const;

export const form = {
  eyebrow: "Send a message",
  heading: "Tell Us How We Can Help",
  intro:
    "Share a few details and the right team at Crowns Sphere will get back to you.",
};

export const offices = {
  eyebrow: "Offices",
  heading: "Where to Find Us",
};
