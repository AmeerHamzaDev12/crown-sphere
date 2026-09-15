/**
 * Site-wide content: company details, navigation, footer.
 * Edit here — the header and footer read straight from this file.
 */

export const company = {
  name: "Crowns Sphere",
  legalName: "Crowns Sphere Private Limited",
  short: "CSPL",
  tagline: "Building Businesses. Creating Platforms. Developing Opportunities.",
  description:
    "Crowns Sphere Private Limited is a Pakistan-based company building and investing in businesses, platforms and partnerships across high-growth and high-impact sectors.",
  email: "info@crownssphere.com",
  phone: "+92 345 5064727",
  phoneHref: "+923455064727",
  address: "House 24, Street 52, F-11/3, Islamabad, Pakistan",
  // Replace with the verified official channel URL before launch.
  youtube: "https://www.youtube.com/",
} as const;

export type NavChild = { label: string; href: string; note?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

/** Ventures dropdown — mirrors the venture list in the content docs. */
export const ventureNav: NavChild[] = [
  { label: "Aurat Card", href: "/aurat-card", note: "Coming soon" },
  { label: "Crowns Financial", href: "/crowns-financial", note: "Operating" },
  { label: "Crowns Education", href: "/crowns-education", note: "Operating" },
  { label: "Crowns Health", href: "/crowns-health", note: "In development" },
  { label: "Crowns Marketing", href: "/crowns-marketing", note: "Operating" },
  {
    label: "Digital Enterprise & Marketplace",
    href: "/digital-marketplace",
    note: "Coming soon",
  },
  {
    label: "Travel & Visa Drop Box",
    href: "/travel-visa",
    note: "In development",
  },
  { label: "Crowns TV", href: "/crowns-tv", note: "Coming soon" },
];

/** Primary navigation, in the order given in the page documents. */
export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures", children: ventureNav },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

/** Utility link that sits beside the primary CTA. */
export const utilityNav = { label: "Crowns TV", href: "/crowns-tv" };

/** Primary call to action in the header. */
export const primaryCta = { label: "Partner With Us", href: "/partnerships" };

export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "About Crowns Sphere", href: "/about" },
      { label: "Our Ventures", href: "/ventures" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "News & Insights", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Ventures",
    links: ventureNav.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Opportunities",
    links: [
      { label: "Strategic Opportunities", href: "/opportunities" },
      { label: "Aurat Card Franchises", href: "/opportunities#aurat-card" },
      { label: "Misaari, Murree", href: "/opportunities#misaari" },
      { label: "Oye Bunny", href: "/opportunities#oye-bunny" },
      { label: "Become a Partner", href: "/partnerships" },
    ],
  },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
