/** Aurat Card page — source: "03- Aurat Card.docx". */

export const hero = {
  eyebrow: "Aurat Card",
  heading: "A stronger future. *For her.*",
  body: "A digital-first membership combining structured discounts, one-touch safety, subsidised healthcare, and a marketplace for women-led businesses.",
  primary: { label: "Join Now", href: "/contact?topic=Aurat%20Card" },
  secondary: { label: "Become a Partner", href: "/partnerships" },
};

export const goal = {
  eyebrow: "Our goal",
  heading:
    "To build a trusted digital platform connecting every woman of the country with discounts, privileges, access and a growing network of partners across Pakistan.",
  stats: [
    { value: "10 Million", label: "Verified women — first year target" },
    { value: "9 Sectors", label: "Partners across multiple sectors" },
    { value: "Q4 2026", label: "Target launch" },
  ],
};

export const offering = {
  eyebrow: "What Aurat Card offers",
  heading: "More Than a Membership Card",
  items: [
    {
      title: "Savings & Benefits",
      body: "Structured discounts and member benefits through a growing network of participating partners.",
    },
    {
      title: "Safety & Assistance",
      body: "Easier access to safety-related assistance and support through the digital platform and partner ecosystem.",
    },
    {
      title: "Healthcare Access",
      body: "Access to participating legal aid and healthcare providers and healthcare-related services.",
    },
    {
      title: "Skills & Opportunities",
      body: "Digital platforms designed to help women discover opportunities, promote businesses and participate in the digital economy.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  heading: "Built for Members and Partners",
  audiences: [
    {
      title: "For Members",
      body: "Discover benefits, services and opportunities.",
    },
    {
      title: "For Partners",
      body: "Verify members, provide benefits and participate in the Aurat Card network.",
    },
  ],
  steps: [
    { title: "Register" },
    { title: "Verify" },
    { title: "Discover" },
    { title: "Present / Scan" },
    { title: "Access" },
    { title: "Track" },
  ],
  verification: {
    title: "Verified Digital Membership",
    body: "Every Aurat Card member has a digitally verified membership identity. QR-based member identification enables participating partners to verify membership and facilitate access to applicable benefits.",
  },
};

export const platforms = {
  eyebrow: "App & web portal",
  heading: "Aurat Card, Wherever You Are",
  intro:
    "Access your Aurat Card membership, discover partner benefits and manage your digital experience through the Aurat Card app and web portal.",
  items: [
    {
      title: "Aurat Card App",
      subtitle: "Your Aurat Card in your pocket.",
      body: "Access your digital membership, discover participating partners and use the growing range of Aurat Card services.",
      status: "Available — additional features in development and testing",
      // The store links live on the phone mockup above, so these are the
      // next steps rather than a second set of download buttons.
      links: [
        { label: "Register Now", href: "/contact?topic=Aurat%20Card" },
        { label: "Become a Partner", href: "/partnerships" },
      ],
    },
    {
      title: "Aurat Card on Web",
      subtitle: "Access your Aurat Card experience through the web.",
      body: "Register as a cardholder, apply to become a partner and manage your membership from any browser.",
      status: "Available",
      links: [
        { label: "Register Now", href: "/contact?topic=Aurat%20Card" },
        { label: "Become a Partner", href: "/partnerships" },
      ],
    },
  ],
};

/**
 * Real screenshots of the live Aurat Card app (components/phone-mockup.tsx),
 * cycled inside the phone frame. Files live in public/ as
 * aurat-card-<tab>.jpeg, all 540×1208 (the phone frame's aspect is set to
 * match exactly, so nothing gets cropped).
 */
export const appScreens = [
  {
    src: "/aurat-card-aangan.jpeg",
    tab: "Aangan",
    label: "Home — offers, quick links and top discounts",
  },
  {
    src: "/aurat-card-humraah.jpeg",
    tab: "Humraah",
    label: "Find your favourites — the partner brand directory",
  },
  {
    src: "/aurat-card-sahara.jpeg",
    tab: "Sahara",
    label: "Support pathways for wellbeing and legal aid",
  },
  {
    src: "/aurat-card-apnay.jpeg",
    tab: "Apnay",
    label: "Your trusted circle — one-touch safety sharing",
  },
] as const;

/** Short explainer video for the Aurat Card page. */
export const videoShowcase = {
  eyebrow: "Watch",
  heading: "Aurat Card *in ninety seconds.*",
  body: "A short walkthrough of the membership, the app and the partner network — what it is, who it is for and how it works.",
  /**
   * Drop the file at public/aurat-card.mp4 (and a still at
   * public/aurat-card-poster.jpg) and set `src` to "/aurat-card.mp4".
   * While `src` is null the section shows a "coming soon" placeholder.
   */
  src: "/video/ezgif-8136fe201d16a3ef.webm",
  poster: null as string | null,
  duration: "1:30",
};

export const partnerNetwork = {
  eyebrow: "Partner network",
  heading: "A Growing Network of Trusted Partners",
  intro:
    "Aurat Card brings together businesses and organizations across multiple sectors to provide members with access to benefits, services and opportunities.",
  outro:
    "From healthcare and education to hospitality, retail and lifestyle services, our partner network is growing across Pakistan.",
  sectors: [
    {
      title: "Education",
      body: "Learning institutions and education services",
    },
    {
      title: "Healthcare",
      body: "Hospitals, clinics, pharmacies and healthcare providers",
    },
    {
      title: "Hospitality",
      body: "Hotels, guesthouses and hospitality businesses",
    },
    { title: "Food & Dining", body: "Restaurants, cafés and food businesses" },
    { title: "Wellness", body: "Gyms, fitness and wellness providers" },
    { title: "Transport", body: "Transportation and mobility services" },
    { title: "Sports", body: "Sports, recreation and fitness" },
    { title: "Beauty & Personal Care", body: "Salons and related services" },
    { title: "Retail", body: "Retailers and consumer businesses" },
  ],
};

export const becomePartner = {
  eyebrow: "Become an Aurat Card partner",
  heading: "Why Partner With Us?",
  intro:
    "Join a growing network of businesses and organizations offering products, services and benefits to Aurat Card members.",
  benefits: [
    {
      title: "Reach",
      body: "Connect your business with an expanding community of women across Pakistan.",
    },
    {
      title: "Visibility",
      body: "Be featured within the Aurat Card digital ecosystem and partner directory.",
    },
    {
      title: "Engagement",
      body: "Create targeted offers and benefits for Aurat Card members.",
    },
    {
      title: "Co-Marketing",
      body: "Explore opportunities for joint campaigns and promotional activities.",
    },
    {
      title: "Digital Presence",
      body: "Maintain your business and offer information within the Aurat Card platform.",
    },
    {
      title: "Insights",
      body: "Where applicable, access engagement and redemption information through the platform.",
    },
  ],
  taxNote: {
    title: "Potential Tax Benefit",
    body: "Depending on the nature and structure of the partnership, contributions or qualifying arrangements may result in a tax credit or other applicable tax benefit, subject to applicable law and the partner's eligibility.",
  },
  cta: { label: "Apply to Become a Partner", href: "/partnerships" },
};

export const safety = {
  eyebrow: "Safety & assistance",
  heading: "Support, One Touch Away",
  body: "Aurat Card is being developed to give women easier access to safety-related assistance and support through its digital platform and partner ecosystem.",
  status: "In Development & Testing",
  features: [
    "Digital access to safety assistance",
    "Emergency support functionality",
    "Location and contact information where applicable",
    "Connection with relevant service providers",
    "Safety-related resources and information",
  ],
};

export const business = {
  eyebrow: "Supporting women in business",
  heading: "Visibility and Market Access for Women-Led Businesses",
  body: "Aurat Card aims to create greater visibility and market access for women-led businesses by connecting them with customers, partners and digital opportunities. Members — both cardholders and partners — can be part of the digital marketplace.",
  cta: { label: "List Your Business", href: "/digital-marketplace" },
};

export const membership = {
  eyebrow: "Membership",
  heading: "Membership Plans & Pricing",
  intro: "Membership options are available through the Aurat Card platform.",
  cta: { label: "View Membership Options", href: "/contact?topic=Aurat%20Card" },
  disclaimers: [
    "Membership benefits, partner offers and services may vary by membership plan, location and participating partner. Certain services may be subject to additional terms, availability or eligibility requirements.",
    "Aurat Card does not itself provide banking, insurance, investment, lending or other regulated financial services. Where applicable, financial or other regulated services are provided by the relevant authorized third-party provider.",
  ],
};

export const franchise = {
  eyebrow: "Business & franchise opportunities",
  heading: "Bring Aurat Card to Your City",
  cities: ["Karachi", "Lahore", "Islamabad & Rawalpindi"],
  cta: { label: "Interested? Contact Us", href: "/contact?topic=Business%20Opportunity" },
};

export const finalCta = {
  heading: "Join Aurat Card",
  body: "Become a member, join the partner network, or bring Aurat Card to your city.",
  // Scrolls to the app/web-portal section (id="app" on that <Section> in
  // app/aurat-card/page.tsx) rather than the contact form — "Join Now" here
  // is the download/registration action, so it goes straight to the app.
  primary: { label: "Join Now", href: "#app" },
  secondary: { label: "Become a Partner", href: "/partnerships" },
};

/* ---------------------------------------------------------------------------
   Lahore flagship franchise.

   Note on the economics: the yearly incentive figures are exactly PKR 1,000
   per member, every year — the series is the membership curve scaled, not an
   independent projection. Charting both would imply two separate findings, so
   the page charts membership and states the per-member rate instead.
--------------------------------------------------------------------------- */

export const lahoreFranchise = {
  eyebrow: "Franchise opportunity",
  heading: "Get a franchise of *Aurat Card.*",
  intro:
    "Lahore is the first Aurat Card territory offered outside the pilot cities: exclusive commercial rights to Pakistan's second-largest urban market, on five-year terms.",
  kind: "Franchise / Investment — five-year exclusive territorial rights",
  fee: { label: "Proposed franchise fee", value: "PKR 300M" },

  market: [
    { value: "13,004,135", label: "Total population (PBS 2023)" },
    { value: "~6.12M", label: "Addressable female population" },
    { value: "5 years", label: "Exclusive territorial rights" },
  ],

  model: {
    title: "How the franchise works",
    franchisee: {
      title: "The franchisee provides",
      items: [
        "The licence fee and local operating costs",
        "Sales, merchant acquisition and local marketing",
        "The city team, hired and managed locally",
      ],
    },
    cspl: {
      title: "CSPL provides",
      items: [
        "The brand and national positioning",
        "The central technology platform and app",
        "Training and onboarding",
        "Ongoing national platform support",
      ],
    },
  },

  /* ----------------------------- chart series ----------------------------- */

  members: {
    title: "Projected membership",
    subtitle: "Verified members in Lahore, years one to five.",
    unit: "members",
    points: [
      { label: "Yr 1", value: 500_000, display: "500K" },
      { label: "Yr 2", value: 900_000, display: "900K" },
      { label: "Yr 3", value: 1_200_000, display: "1.2M" },
      { label: "Yr 4", value: 1_320_000, display: "1.32M" },
      { label: "Yr 5", value: 1_400_000, display: "1.4M" },
    ],
  },

  penetration: {
    title: "Market penetration",
    subtitle: "Share of the addressable female population.",
    unit: "%",
    points: [
      { label: "Yr 1", value: 8.17, display: "8.17%" },
      { label: "Yr 3", value: 19.61, display: "19.61%" },
      { label: "Yr 5", value: 22.88, display: "22.88%" },
    ],
  },

  merchants: {
    title: "Merchant network",
    subtitle: "Active partner businesses accepting the card.",
    unit: "partners",
    points: [
      { label: "Yr 1", value: 1_050, display: "1,050" },
      { label: "Yr 3", value: 3_400, display: "3,400" },
      { label: "Yr 5", value: 4_500, display: "4,500" },
    ],
  },


  sectors: {
    title: "Strategic sectors",
    items: [
      "Universities",
      "Healthcare hubs",
      "Retail & hospitality",
      "Corporate institutions",
    ],
  },

  roadmap: {
    title: "From interest to launch",
    steps: [
      {
        title: "Expression of interest",
        body: "Register interest and confirm the Lahore territory is available.",
      },
      {
        title: "Qualification & due diligence",
        body: "Investor qualification, and mutual due diligence on both sides.",
      },
      {
        title: "Terms & agreement",
        body: "Agree the fee and targets, then execute the definitive agreement.",
      },
      {
        title: "Onboarding & launch",
        body: "Technology onboarding, team training and launch preparation.",
      },
      {
        title: "Acquisition campaigns",
        body: "Commence member and merchant acquisition across the city.",
      },
    ],
  },

  disclaimer:
    "Population figures are from the Pakistan Bureau of Statistics 2023 census. Penetration, membership and merchant figures are projections prepared for discussion and are subject to the definitive agreement.",

  cta: {
    label: "Request the Lahore Information Pack",
    href: "/contact?topic=Business%20Opportunity",
  },
};
