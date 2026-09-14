/** Digital Enterprise & Marketplace — source: "11 Digital Market Place .docx". */

import type { SubProduct } from "./ventures";

export const hero = {
  eyebrow: "Digital Enterprise & Marketplace",
  heading: "Everything You Need to Build Your Business Online",
  body: "A digital business facilitation platform helping businesses establish, operate and grow their online presence through connected digital services and marketplace capabilities.",
  status: "Launching Soon",
  primary: { label: "Explore the Marketplace", href: "#marketplace" },
  secondary: {
    label: "Build Your Business With Us",
    href: "/contact?topic=Digital%20Enterprise%20%26%20Marketplace",
  },
};

export const platform = {
  eyebrow: "The platform",
  heading: "Your Digital Business, Connected",
  intro:
    "From establishing your online presence to facilitating digital business operations, the platform brings multiple services together in one place.",
  steps: [
    { title: "Establish" },
    { title: "Build" },
    { title: "Connect" },
    { title: "Sell" },
    { title: "Grow" },
  ],
};

export const marketplace = {
  eyebrow: "Marketplace",
  heading: "Reach Customers Where They Already Are",
  body: "Businesses can showcase their products and services, reach customers and participate in a growing digital marketplace.",
  status: "Ready",
  features: [
    "Business listings",
    "Product and service listings",
    "Online selling",
    "Customer discovery",
    "Business profiles",
    "Digital payments",
  ],
};

export const facilitation = {
  eyebrow: "Digital business facilitation",
  heading: "Build Your Digital Business",
  intro:
    "We can offer businesses a range of digital services through one platform.",
  items: [
    { title: "Domain", body: "Establish your digital identity." },
    { title: "Website", body: "Create your online presence." },
    { title: "Payment Gateway", body: "Enable digital transactions." },
    {
      title: "Marketplace",
      body: "List and promote your products or services.",
    },
    {
      title: "Business Support",
      body: "Access additional digital business facilitation services.",
    },
  ],
};

export const auratCardLink = {
  eyebrow: "Aurat Card connection",
  heading: "Part of the Aurat Card Ecosystem",
  body: "The platform is being developed to connect with Aurat Card, creating additional opportunities for participating businesses to reach and serve Aurat Card members.",
  chain: [
    "Business",
    "Digital Enterprise & Marketplace",
    "Aurat Card Partner",
    "Aurat Card Members",
    "Products / Services / Benefits",
  ],
  cta: { label: "Explore Aurat Card", href: "/aurat-card" },
};

export const audiences = {
  eyebrow: "For businesses",
  heading: "A Digital Platform for Businesses of All Sizes",
  items: [
    {
      title: "Small Businesses",
      body: "Establish your digital presence without having to manage multiple providers.",
    },
    {
      title: "Growing Businesses",
      body: "Expand your online presence and reach new customers.",
    },
    {
      title: "Established Businesses",
      body: "Add another digital channel to your existing operations.",
    },
    {
      title: "Aurat Card Partners",
      body: "Connect your business to the growing Aurat Card ecosystem.",
    },
  ],
  customers: {
    title: "For Customers",
    body: "Find businesses, products and services through a growing digital marketplace.",
  },
};

export const statuses = [
  { label: "Marketplace", value: "Ready" },
  { label: "Digital business facilitation", value: "Services available" },
  { label: "Aurat Card integration", value: "Being developed" },
];

export const finalCta = {
  heading: "Build. Connect. Grow.",
  body: "Whether you're starting a new business or expanding an existing one, Crowns Sphere can help you build your digital presence and connect with new opportunities.",
  primary: {
    label: "Get Started",
    href: "/contact?topic=Digital%20Enterprise%20%26%20Marketplace",
  },
  secondary: { label: "Contact Us", href: "/contact" },
};

/**
 * Products built by SuperApp and operated under this venture.
 * Sources: erp.superapp.pk, dms.superapp.pk (read September 2026).
 */
export const subProducts: SubProduct[] = [
  {
    name: "Trade ERP",
    positioning:
      "Counter-to-ledger software for wholesale and retail traders. Built around how cloth and textile businesses actually run, and extended to electronics, restaurants and bakery operations.",
    features: [
      "Touchscreen POS with barcode scanning, customer credit limits and printed or WhatsApp receipts",
      "Rack-level warehouse stock, inward receipts and transfers between locations",
      "Purchase orders, goods-received notes and supplier credit with NTN and STRN fields",
      "Double-entry ledger that posts every sale as it happens, so profit, receivables and cash position are live rather than rebuilt at month-end",
      "Keeps billing when the connection drops and syncs once it returns",
    ],
    poweredBy: "SuperApp",
  },
  {
    name: "Distribution Engine",
    positioning:
      "Delivery operations for distributors, built so that the cash and stock at the end of a shift match the work that was actually done.",
    features: [
      "Route planning and dispatch with driver assignment and stop sequencing",
      "Order capture with automatic pricing and stock deduction",
      "Warehouse and in-vehicle inventory tracked in a single view",
      "Driver settlement with cash reconciliation, empty-container counts and variance flags",
    ],
    poweredBy: "SuperApp",
  },
];
