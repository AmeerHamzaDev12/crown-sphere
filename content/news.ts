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
  /** Second paragraph, for the richer image-led brand-story cards below. */
  excerpt2?: string;
  /** Closing line, rendered in the site's italic accent style. */
  tagline?: string;
  /** Public path to a background photo — turns the card into a visual one. */
  image?: string;
  /** Public path to the brand's own logo, shown over the image. */
  logo?: string;
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
  {
    slug: "oyebunny-local-flavours",
    title: "OyeBunny: Local Flavours, Bigger Possibilities",
    excerpt:
      "Great food begins with the people who make it. OyeBunny's vision brings neighbourhood restaurants and hungry customers closer, making food discovery and ordering part of everyday life.",
    excerpt2:
      "Within the Crowns Sphere ecosystem, OyeBunny represents a commitment to local businesses and convenient digital experiences. The ambition goes beyond satisfying cravings: it is about helping restaurants reach more customers and creating opportunities across the delivery community.",
    tagline: "Order. Eat. Repeat.",
    image: "/oyebunny-food.jpg",
    logo: "/oyebunnylogo.png",
    category: "Digital Enterprise & Marketplace",
    date: "Coming soon",
  },
  {
    slug: "wevibe-next-opportunity",
    title: "WeVibe: Where Talent Meets Its Next Opportunity",
    excerpt:
      "A creative spark deserves somewhere to go. WeVibe is designed to connect talent with brands, bringing gigs, jobs and collaborations into one shared space.",
    excerpt2:
      "From emerging creators to businesses searching for fresh ideas, the vision is to help people discover the right connections and turn their abilities into meaningful work. As part of Crowns Sphere, WeVibe reflects a belief that opportunity grows when people come together.",
    tagline: "Meet. Connect. Create your next chapter.",
    image: "/wevibe-news.jpeg",
    category: "Digital Enterprise & Marketplace",
    date: "Coming soon",
  },
  {
    slug: "supermall-everyday-shopping",
    title: "SuperMall: A New Vision for Everyday Shopping",
    excerpt:
      "The energy of a bustling marketplace, brought into a digital experience. SuperMall's vision is to connect shoppers with sellers, making it easier to discover products, explore value and find something worth bringing home.",
    excerpt2:
      "Within the Crowns Sphere ecosystem, SuperMall represents an ambition to help businesses reach customers beyond their physical storefronts. It brings together two everyday needs: more choice for shoppers and more visibility for sellers.",
    tagline: "More to discover. More reasons to shop.",
    image: "/supermall-news.jpeg",
    category: "Digital Enterprise & Marketplace",
    date: "Coming soon",
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
