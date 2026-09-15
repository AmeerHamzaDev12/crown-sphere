/** Homepage copy — source: "01- Home Page.docx". */

export const hero = {
  eyebrow: "Crowns Sphere Private Limited",
  headline: "Building the infrastructure behind *Pakistan's next platforms*",
  body: "Crowns Sphere Private Limited is a Pakistan-based company building and investing in businesses, platforms and partnerships across high-growth and high-impact sectors.",
  primary: { label: "Explore Our Ventures", href: "/ventures" },
  secondary: { label: "Partner With Us", href: "/partnerships" },
};

/**
 * Aurat Card slider in the hero (components/aurat-card-slider.tsx).
 * Every line is drawn from existing Aurat Card content — no new claims.
 * The one video loops behind all slides.
 */
export const auratSlider = {
  video: "/videos/aurat_card_video.mp4",
  badge: "Coming soon · Target launch Q4 2026",
  slides: [
    {
      kicker: "Aurat Card",
      heading: "Made for her. *Made for Pakistan.*",
      body: "A digital-first membership combining structured discounts, one-touch safety, subsidised healthcare and a marketplace for women-led businesses.",
      cta: { label: "Explore Aurat Card", href: "/aurat-card" },
    },
    {
      kicker: "Savings & Benefits",
      heading: "More than a *membership card.*",
      body: "Structured discounts and member benefits through a growing network of participating partners, across nine sectors.",
      cta: { label: "See the benefits", href: "/aurat-card" },
    },
    {
      kicker: "Safety & Assistance",
      heading: "Support, *one touch away.*",
      body: "Easier access to safety-related assistance and support, through the Aurat Card platform and its partner network.",
      cta: { label: "How it works", href: "/aurat-card" },
    },
    {
      kicker: "Healthcare Access",
      heading: "Care that *reaches her.*",
      body: "Access to participating legal aid and healthcare providers, and healthcare-related services, through the partner network.",
      cta: { label: "Explore the partner network", href: "/aurat-card" },
    },
    {
      kicker: "Our ambition",
      heading: "10 million *verified women.*",
      body: "Building toward a community of verified women across Pakistan, with franchises open in Lahore, Karachi and Islamabad & Rawalpindi.",
      cta: { label: "Get a franchise", href: "/aurat-card#lahore-franchise" },
    },
  ],
};

/** Purple ticker strip beneath the hero, as in the reference build. */
export const tickerItems = [
  "Build with purpose",
  "Invest in possibility",
  "Grow together",
  "Build in Pakistan",
];

export const whoWeAre = {
  eyebrow: "Who we are",
  heading: "Identify build *Partner grow.*",
  body: "CSPL builds, operates and invests in businesses and technology-enabled platforms while developing strategic partnerships and opportunities across multiple sectors. We identify opportunities, develop solutions and work with partners to create businesses designed for sustainable growth and long-term value.",
  cta: { label: "Learn More About CSPL", href: "/about" },
  pillars: [
    {
      title: "Build",
      body: "Develop businesses, platforms and technology-enabled solutions.",
    },
    {
      title: "Operate",
      body: "Build and manage operating capabilities around viable products and services.",
    },
    {
      title: "Partner",
      body: "Work with businesses, institutions and organizations to extend capabilities and market reach.",
    },
    {
      title: "Develop Opportunities",
      body: "Identify and support opportunities where capital, technology, partnerships and operational expertise create long-term value.",
    },
  ],
};

export const venturesIntro = {
  eyebrow: "Our business & venture ecosystem",
  intro:
    "Our portfolio includes operating businesses, technology platforms, emerging ventures and partnership opportunities at different stages of development.",
};

export const auratCardFeature = {
  eyebrow: "Featured venture",
  heading: "A stronger future. *For her.*",
  body: "Aurat Card is a digital platform designed to connect women with benefits, services, businesses and opportunities through an integrated digital ecosystem.",
  ambition:
    "Our ambition: building toward a community of 10 million verified women across Pakistan.",
  access:
    "Aurat Card is available through an app and web portal. The current app is available through the relevant app stores, with additional features under development and testing.",
  /** Chips under the intro copy. */
  channels: ["Mobile app", "Web portal", "QR verification"],
  /** The headline figure in the dark panel. */
  ambitionFigure: "10 Million",
  ambitionLabel: "verified women across Pakistan",
  /** Small fact tiles beside the figure — drawn from content/aurat-card.ts. */
  facts: [
    { label: "Partner sectors", value: "9" },
    { label: "Franchise cities", value: "3" },
    { label: "Target launch", value: "Q4 2026" },
  ],
  highlights: [
    "Savings & Benefits",
    "Safety & Assistance",
    "Healthcare Access",
    "Skills & Opportunities",
  ],
  primary: { label: "Explore Aurat Card", href: "/aurat-card" },
  secondary: { label: "Become an Aurat Card Partner", href: "/partnerships" },
};

export const partners = {
  eyebrow: "Partnerships",
  heading: "Partners across *multiple sectors.*",
  intro:
    "We work with businesses and institutions across healthcare, education, hospitality, retail and lifestyle services.",
  /**
   * Placeholder strip — swap these names for partner logos in /public/partners
   * and render <Image> inside <Marquee> when the assets are approved.
   */
  logos: [
    "Education",
    "Healthcare",
    "Hospitality",
    "Food & Dining",
    "Wellness",
    "Transport",
    "Sports",
    "Beauty & Personal Care",
    "Retail",
  ],
};

export const opportunitiesIntro = {
  eyebrow: "Strategic opportunities",
  heading: "Find your place *in the sphere.*",
  intro:
    "Crowns Sphere identifies and facilitates opportunities for entrepreneurs, investors and strategic partners across its growing portfolio of businesses and ventures.",
  cta: { label: "Explore Opportunities", href: "/opportunities" },
};

export const crownsTvStrip = {
  eyebrow: "Media",
  heading: "Stories, ideas *& opportunities.*",
  body: "Crowns TV brings the Crowns Sphere ecosystem to life through stories, updates, insights and opportunities across our ventures and businesses.",
  categories: [
    "CSPL",
    "Aurat Card",
    "Business Opportunities",
    "Education",
    "Technology",
    "People & Stories",
  ],
  primary: { label: "Explore Crowns TV", href: "/crowns-tv" },
};

export const newsIntro = {
  eyebrow: "News & insights",
  heading: "News, insights *& updates.*",
  intro:
    "Follow the latest developments across Crowns Sphere — from venture launches and partnerships to business opportunities, technology and insights.",
  cta: { label: "Explore News & Insights", href: "/news" },
};

export const finalCta = {
  heading: "Let's build *something that matters.*",
  body: "Whether you want to explore a partnership, discuss a business opportunity, learn about one of our ventures or work with us, we'd like to hear from you.",
  primary: { label: "Contact Us", href: "/contact" },
  secondary: { label: "Explore Our Ventures", href: "/ventures" },
};
