/**
 * The venture registry — one entry per business in the Crowns Sphere ecosystem.
 * Used by the homepage grid, the /ventures index and the footer.
 */

export type VentureStatus =
  | "Operating"
  | "Operating / Expanding"
  | "In Development"
  | "Building / Launch Preparation"
  | "Coming Soon"
  | "Launching Soon";

export type Venture = {
  slug: string;
  name: string;
  href: string;
  summary: string;
  status: VentureStatus;
  /** Short service or capability list shown on the card. */
  points: string[];
  cta: { label: string; href: string };
  /** Feature the venture in the large tile at the top of the grid. */
  featured?: boolean;
};

export const ventures: Venture[] = [
  {
    slug: "aurat-card",
    name: "Aurat Card",
    href: "/aurat-card",
    summary:
      "Women's membership, benefits and empowerment platform — a digital-first membership combining structured discounts, one-touch safety, subsidised healthcare and a marketplace for women-led businesses.",
    status: "Building / Launch Preparation",
    points: [
      "Target: 1 million verified women",
      "Established partner network across multiple sectors",
      "App and web portal",
    ],
    cta: { label: "Learn More About Aurat Card", href: "/aurat-card" },
    featured: true,
  },
  {
    slug: "crowns-financial",
    name: "Crowns Financial",
    href: "/crowns-financial",
    summary:
      "Financial automation and digital financial management solutions for businesses.",
    status: "Operating",
    points: [
      "Automated bookkeeping",
      "Cloud bookkeeping",
      "Executive dashboards",
      "Financial automation",
    ],
    cta: { label: "Contact Crowns Financial", href: "/contact" },
  },
  {
    slug: "crowns-education",
    name: "Crowns Education",
    href: "/crowns-education",
    summary:
      "Technology and learning solutions for educational institutions and students.",
    status: "Operating / Expanding",
    points: [
      "Campus Management & ERP",
      "Learning content",
      "International education pathways — coming soon",
      "Assessment technology — in development",
    ],
    cta: { label: "Learn More About Crowns Education", href: "/crowns-education" },
  },
  {
    slug: "crowns-health",
    name: "Crowns Health",
    href: "/crowns-health",
    summary:
      "Technology-enabled telemedicine connecting patients with licensed local Care Coordinators and Pakistani-origin specialists practising abroad.",
    status: "In Development",
    points: [
      "Chronic disease management",
      "Women's health",
      "Mental health & psychiatry",
      "Expert second opinions",
    ],
    cta: { label: "Learn More About Crowns Health", href: "/crowns-health" },
  },
  {
    slug: "crowns-marketing",
    name: "Crowns Marketing",
    href: "/crowns-marketing",
    summary:
      "Digital marketing and technology-enabled marketing solutions for businesses and organizations.",
    status: "Operating",
    points: [
      "Digital marketing",
      "Social media",
      "Content & creative",
      "Campaign management",
      "Digital strategy",
    ],
    cta: { label: "Talk to Our Marketing Team", href: "/contact" },
  },
  {
    slug: "digital-marketplace",
    name: "Digital Enterprise & Marketplace",
    href: "/digital-marketplace",
    summary:
      "A one-stop digital platform helping businesses establish, promote and operate online.",
    status: "Launching Soon",
    points: [
      "Domain, website and digital presence",
      "Payment gateways and online transactions",
      "Advertising, marketplace and customer access",
    ],
    cta: { label: "Explore the Marketplace", href: "/digital-marketplace" },
  },
  {
    slug: "travel-visa",
    name: "Travel & Visa Drop Box",
    href: "/travel-visa",
    summary:
      "Technology-enabled visa and travel facilitation, built around digital record management and strong internal controls.",
    status: "In Development",
    points: [
      "Integrated accommodation booking",
      "Digital visa drop-box workflows",
      "Document tracking and process monitoring",
    ],
    cta: { label: "Learn More", href: "/travel-visa" },
  },
  {
    slug: "crowns-tv",
    name: "Crowns TV",
    href: "/crowns-tv",
    summary:
      "The digital media platform of Crowns Sphere — stories, insights and updates from across the ecosystem.",
    status: "Coming Soon",
    points: [
      "Ventures and business developments",
      "Technology and platforms",
      "Women & society",
      "Education and people stories",
    ],
    cta: { label: "Explore Crowns TV", href: "/crowns-tv" },
  },
];

export const ventureBySlug = (slug: string) =>
  ventures.find((v) => v.slug === slug);
