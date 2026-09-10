/**
 * Strategic opportunities — source: "08- Stretegic Opportunies .docx".
 * Reused on the homepage, /partnerships and /news, so it lives on its own.
 */

export type Opportunity = {
  id: string;
  name: string;
  kind: string;
  body: string;
  /** Cities, or what CSPL is looking for. */
  detailLabel: string;
  details: string[];
  cta: { label: string; href: string };
};

export const opportunities: Opportunity[] = [
  {
    id: "aurat-card",
    name: "Aurat Card — Franchise Opportunities",
    kind: "Franchise / strategic partnership",
    body: "CSPL is expanding Aurat Card through selected franchise and strategic partnership opportunities. Bring Aurat Card to your city.",
    detailLabel: "Current opportunities",
    details: ["Lahore", "Karachi", "Islamabad & Rawalpindi"],
    cta: { label: "Explore Opportunity", href: "/contact?topic=Business%20Opportunity" },
  },
  {
    id: "misaari",
    name: "Misaari, Murree",
    kind: "Hospitality partnership",
    body: "CSPL has a property in Misaari, Murree, that is ready to host guests. We are exploring an operational partnership for the management and development of the hospitality opportunity.",
    detailLabel: "Looking for",
    details: ["Operational partner", "Strategic partner"],
    cta: {
      label: "Contact Us to Explore the Opportunity",
      href: "/contact?topic=Business%20Opportunity",
    },
  },
  {
    id: "oye-bunny",
    name: "Oye Bunny",
    kind: "Technology & food delivery",
    body: "Oye Bunny is a food delivery platform being developed as a business opportunity within the CSPL ecosystem. CSPL is exploring strategic partnerships for its growth and expansion.",
    detailLabel: "Looking for",
    details: ["Strategic partner", "Growth & expansion capital"],
    cta: { label: "Explore Partnership", href: "/contact?topic=Partnership" },
  },
];

export const futureOpportunities = {
  heading: "More Opportunities Are Being Developed",
  body: "CSPL continuously evaluates new business concepts, ventures, assets and strategic collaborations. Selected opportunities will be presented as they become ready for partnership.",
  items: [
    "Opportunity to become a partner in Crowns Health Care initiatives",
    "Opportunity to become a partner in Crowns Education initiatives",
  ],
  cta: { label: "Contact CSPL", href: "/contact" },
};
