/**
 * News & Insights — source: "13- NEWS & Insight  .docx".
 *
 * `articles` is the list the page renders. It is a plain array today; when the
 * volume justifies it, move these to MDX files or a CMS and keep the same
 * shape so the page component does not need to change.
 */

export const hero = {
  eyebrow: "News & insights",
  heading: "News, Insights & Updates",
  body: "Follow the latest developments across Crowns Sphere — from venture launches and partnerships to business opportunities, technology and insights.",
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  featured?: boolean;
  href?: string;
};

export const articles: Article[] = [
  {
    slug: "aurat-card-partner-network",
    title: "Aurat Card Expands Its Partner Network",
    excerpt:
      "New partners join across healthcare, education, hospitality and retail as Aurat Card builds toward its first-year target of one million verified women.",
    category: "Aurat Card",
    date: "Coming soon",
    featured: true,
  },
];

/** Story types the newsroom will cover, from the content document. */
export const storyTypes = [
  "Major CSPL announcements",
  "Aurat Card milestones",
  "Major partnerships",
  "New venture launches",
  "Significant business opportunities",
];

export const insights = {
  eyebrow: "Insights",
  heading: "Useful Perspectives",
  intro:
    "Perspectives and practical insights from across the sectors, technologies and markets in which we operate.",
  topics: [
    "Crowns Health Care initiatives",
    "Crowns Education initiatives",
    "Technology",
    "Business",
    "Digital transformation",
    "Entrepreneurship",
    "Women and society",
  ],
};

export const finalCta = {
  heading: "Stay Connected With Crowns Sphere",
  body: "Follow our ventures, partnerships, opportunities and developments as we build the Crowns Sphere ecosystem.",
  primary: { label: "Explore Our Ventures", href: "/ventures" },
  secondary: { label: "Watch Crowns TV", href: "/crowns-tv" },
};
