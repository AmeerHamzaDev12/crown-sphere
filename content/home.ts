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
  eyebrow: "Identify → Build → Partner → Grow",
  heading: "One ecosystem. *Multiple opportunities.*",
  body: "We combine opportunity identification, venture building, strategic partnerships and growth capabilities within one connected ecosystem. Crowns Sphere develops and operates ventures across sectors, using shared capabilities, technology, partnerships and networks to create connected growth opportunities.",
  cta: { label: "Learn More About CSPL", href: "/about" },
  pillars: [
    {
      title: "Identify",
      body: "Find the opportunity. We identify promising ideas, businesses, assets, market gaps and strategic opportunities.",
      links: [{ label: "Explore Opportunities", href: "/opportunities" }],
    },
    {
      title: "Build",
      body: "Turn opportunity into reality. We build businesses, platforms, technology and operating capabilities.",
      links: [{ label: "Explore Ventures", href: "/ventures" }],
    },
    {
      title: "Partner",
      body: "Bring the right people together. We work with investors, institutions, entrepreneurs, businesses and technology partners.",
      links: [{ label: "Explore Partnerships", href: "/partnerships" }],
    },
    {
      title: "Grow",
      body: "Scale what works. We help ventures expand customers, revenue, markets, capabilities and value.",
      links: [
        { label: "Explore Ventures", href: "/ventures" },
        { label: "Explore Opportunities", href: "/opportunities" },
      ],
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
  /** Partner logos displayed in the moving strip on the homepage. */
  logos: [
    { name: "DSIT", logo: "/DSIT%20Logo.png" },
    { name: "UNIBOTVERSE" },
    { name: "ITC COMMUNICATIONS", logo: "/ITC%20Communication%20logo.png" },
    { name: "ITC ENGINEERING", logo: "/ITC%20Engineering%20logo.png" },
    { name: "MIACON FZE", logo: "/meaicon-LLC-FZ-logo-black.svg" },
    { name: "MY BOLT Malaysia", logo: "/Mybolt%20malaysia.svg" },
    { name: "UCI Education", logo: "/uci24-education-1l-blue-4-1.png" },
    { name: "Askari Education", logo: "/AskariEducation%20logo.jpeg" },
    { name: "Rehman Foundation", logo: "/Rehman%20Foundation%20Health.png" },
    { name: "Elite Hotels" },
    { name: "Elite Legacy" },
    { name: "Latitude", logo: "/Latitute%20Logo.jpeg" },
    { name: "MIACON LLC", logo: "/MIACON%20LLC%20Logo.jpeg" },
    {
      name: "SARF International Hospital",
      logo: "/SARF-LOGO-2-2048x775.jpeg",
    },
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
