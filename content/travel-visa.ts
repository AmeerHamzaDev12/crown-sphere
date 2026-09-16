/**
 * Travel & Visa Drop Box — source: "10-Visa Dropb Box And Travel .docx".
 *
 * Note: the internal cross-reference block at the end of that document was
 * marked in red as "do not include", so it is deliberately left out here.
 */

export const hero = {
  eyebrow: "Travel & Visa Solutions",
  heading: "Making Travel Services More Digital",
  body: "CSPL is developing technology-enabled solutions to simplify and digitize selected travel and visa-related processes.",
  status: "Early Stage Development",
  primary: { label: "Learn More", href: "#what-we-do" },
  secondary: { label: "Partner With Us", href: "/partnerships" },
};

export const offerings = {
  eyebrow: "What we do",
  heading: "Two Services, Two Stages",
  items: [
    {
      title: "Travel & Accommodation",
      body: "Our booking module is integrated with Airbnb, allowing users to explore and book available accommodation.",
      status: "Available",
      steps: [
        "Search accommodation",
        "View Misaari options",
        "Book",
        "Confirmation",
      ],
      cta: { label: "Partner With Us", href: "/partnerships" },
    },
    {
      title: "Visa Drop Box",
      body: "CSPL has applied for the visa drop-box facility and is developing the technology, workflows and internal controls required to support the service, subject to applicable approvals and authorizations.",
      status: "In Development",
      steps: [
        "Digital record management",
        "Document tracking",
        "Process monitoring",
        "Controlled access",
      ],
      cta: { label: "Partner With Us", href: "/partnerships" },
    },
  ],
};

export const misaari = {
  eyebrow: "Stay at Misaari",
  heading: "Experience the Beauty of Misaari, Murree",
  body: "Explore available accommodation and book your stay through our integrated booking platform.",
  cta: {
    label: "View Accommodation & Availability",
    href: "/contact?topic=Travel%20%26%20Visa",
  },
};

export const building = {
  eyebrow: "What we are building",
  heading: "Digital Visa Drop Box Infrastructure",
  body: "CSPL is building a visa drop-box facility and is developing a technology platform to support the secure, controlled and efficient handling of visa-related document submission processes.",
  note: "The service is currently under development and subject to the necessary approvals and authorizations.",
};

export const technology = {
  eyebrow: "Technology",
  heading: "Technology-Enabled Processing",
  intro:
    "We are developing a digital system designed to support the structured handling, tracking and management of visa drop-box processes.",
  capabilities: [
    "Digital record management",
    "Document tracking",
    "Process monitoring",
    "Controlled access",
    "Status management",
    "Internal workflow controls",
  ],
  controls: {
    title: "Designed Around Strong Internal Controls",
    body: "CSPL is developing operational procedures and technology-based controls designed to support accountability, traceability and controlled handling throughout the process.",
  },
};

export const finalCta = {
  heading: "Partner With Us",
  body: "We welcome discussions with organizations interested in technology, travel services and process-management solutions.",
  primary: { label: "Discuss a Partnership", href: "/partnerships" },
  secondary: { label: "Contact Us", href: "/contact?topic=Travel%20%26%20Visa" },
};

export const disclaimer =
  "The visa drop-box facility and related services are currently under development and subject to applicable approvals and authorizations. Availability of services will be announced once operational.";

/* ---------------------------------------------------------------------------
   Safar Sahulat — the consumer-facing travel service operated under this
   venture.

   Adapted from a demo build that carried SuperTravels branding and sample
   data. All of that branding is replaced, and the demo's sample fares,
   testimonials and download figures are deliberately NOT carried over — they
   were placeholder numbers, not real ones. Anything still indicative is
   labelled as such on the page.
--------------------------------------------------------------------------- */

export const safarSahulat = {
  eyebrow: "Safar Sahulat",
  heading: "Travel booked the way it *should be.*",
  intro:
    "Safar Sahulat is the travel service operated under Crowns Sphere: flights, hotels, Umrah and visa support handled by one team, on one platform, with the same document controls we apply to the visa drop box.",
  status: "In Development",
};

export const services = {
  eyebrow: "What Safar Sahulat covers",
  heading: "Four services, one desk.",
  items: [
    {
      title: "Flights",
      body: "Search and compare departures across airlines, hold a fare while documents are confirmed, and book with support from a named person rather than a call queue.",
      points: [
        "Domestic and international departures",
        "Fare comparison across carriers",
        "Changes and cancellations handled by our team",
      ],
    },
    {
      title: "Hotels",
      body: "Accommodation booked directly, including CSPL's own properties, with rooms confirmed before payment is taken.",
      points: [
        "Direct booking with partner hotels",
        "CSPL properties including Misaari Hotel",
        "Confirmation before payment",
      ],
    },
    {
      title: "Umrah packages",
      body: "Visa, flights, accommodation close to the Haram, ground transfers and ziyarat arranged as one package rather than five separate bookings.",
      points: [
        "Visa processing and documentation",
        "Accommodation within reach of the Haram",
        "Airport and intercity transfers",
        "Guided ziyarat where requested",
      ],
    },
    {
      title: "Visa services",
      body: "Document preparation, appointment handling and submission through the drop-box workflow being built under this venture, with status visible at each step.",
      points: [
        "Document checklists before you travel to submit",
        "Appointment scheduling",
        "Tracked submission and collection",
      ],
    },
  ],
};

export const routes = {
  eyebrow: "Where we fly",
  heading: "The corridors we are building around.",
  intro:
    "These are the routes Safar Sahulat is being set up to serve first. Live schedules and fares are shown at the time of booking — we do not publish indicative prices, because they are never the price you actually pay.",
  from: ["Karachi", "Lahore", "Islamabad"],
  to: [
    "Jeddah",
    "Madinah",
    "Dubai",
    "Doha",
    "Istanbul",
    "Kuala Lumpur",
    "London",
  ],
  note: "Route availability depends on carrier schedules and applicable approvals.",
};

export const misaariHotel = {
  eyebrow: "CSPL properties",
  heading: "Misaari Hotel",
  body: "Misaari Hotel, in Misaari, Murree, is booked directly through Safar Sahulat.",
  media: [
    {
      label: "Misaari Hotel — hillside view",
      kind: "Photo" as const,
      note: "Signature view from the property",
      src: "/misaari-hero.jpg",
    },
    {
      label: "Misaari Hotel — guest room",
      kind: "Photo" as const,
      note: "Representative room type",
      src: "/misaari-room.jpg",
    },
    {
      label: "Misaari Hotel — dining and common areas",
      kind: "Photo" as const,
      note: "Common areas",
      src: "/misaari-common-area.jpg",
    },
    {
      label: "Misaari Hotel — property walkthrough",
      kind: "Video" as const,
      note: "Property walkthrough",
      src: "/videos/misaari-walkthrough.mp4",
    },
  ],
};

export const whyBook = {
  eyebrow: "Why book with us",
  heading: "One operator, start to finish.",
  items: [
    {
      title: "One team holds the file",
      body: "Flights, hotel, visa and transfers sit with the same people, so nothing falls between two agents blaming each other.",
    },
    {
      title: "The same controls as the drop box",
      body: "Your documents move through the tracked, access-controlled workflow being built for the visa drop box — not a shoebox behind a counter.",
    },
    {
      title: "Support in your time zone",
      body: "A local team you can reach while you are travelling, not an overseas helpline that opens after you have landed.",
    },
    {
      title: "Part of a larger ecosystem",
      body: "Safar Sahulat sits inside Crowns Sphere, alongside the properties, platforms and partners we already operate.",
    },
  ],
};

export const appCallout = {
  eyebrow: "On your phone",
  heading: "Safar Sahulat, in your pocket.",
  body: "Bookings, documents and trip status in one app. It is in development alongside the drop-box platform and will be announced when it is ready to use.",
  status: "In Development",
};
