/** Crowns Education — source: "05- Crowns Education .docx". */

import type { SubProduct } from "./ventures";

export const hero = {
  eyebrow: "Crowns Education",
  heading: "Building the Future of Education Through Technology",
  body: "Crowns Education brings together education technology, digital learning resources and innovative academic pathways to expand access to better learning opportunities.",
  status: "Operating / Expanding",
  primary: {
    label: "Explore Our Education Solutions",
    href: "#solutions",
  },
  secondary: { label: "Partner With Us", href: "/partnerships" },
};

export const cms = {
  eyebrow: "Our education technology",
  heading: "Campus Management & ERP",
  intro:
    "A comprehensive platform designed to help educational institutions manage their academic and administrative operations through an integrated digital system.",
  status: "Available",
  areas: [
    "Student management",
    "Academic management",
    "Administration",
    "Attendance",
    "Fees and finance",
    "Examination",
    "Reporting",
    "Communication",
  ],
  cta: {
    label: "Talk to Us About Your Institution",
    href: "/contact?topic=Crowns%20Education",
  },
};

export const readers = {
  eyebrow: "Readers & stories",
  heading: "Content That Makes Children Want to Read",
  body: "Engaging educational content designed to encourage children to read, learn and explore.",
  links: [
    { label: "Explore Our Stories", href: "/contact?topic=Crowns%20Education" },
    { label: "Watch on Crowns TV", href: "/crowns-tv" },
  ],
};

export const pathways = {
  eyebrow: "International education pathways",
  heading: "New Academic Routes for Students in Pakistan",
  intro:
    "We are exploring partnerships with national education institutions to create new academic pathways for students in Pakistan for degrees from internationally recognized educational institutions.",
  status: "In Development",
  items: [
    {
      title: "International Curricula",
      body: "Work with international institutions to make selected academic curricula accessible to students in Pakistan.",
    },
    {
      title: "Secure Assessment",
      body: "Develop technology that can give partner institutions greater control and visibility over assessment and testing processes.",
    },
    {
      title: "Academic Pathways",
      body: "Explore pathways through which students who successfully meet an institution's requirements may progress toward recognized qualifications.",
    },
  ],
  disclaimer:
    "We are exploring pathways with international institutions through which eligible students may pursue internationally recognized qualifications, subject to the requirements and approval of the relevant institution.",
};

/**
 * Desktop dashboard mockup for the Campus Management & ERP section
 * (components/desktop-mockup.tsx). Structured after a real ERP dashboard —
 * stat row, weekly chart, recent-activity table — reskinned for a campus
 * system: fee collection in place of POS revenue, admissions in place of
 * invoices. Every figure below is illustrative, not a live statistic.
 */
export const erpDashboard = {
  appName: "Campus ERP",
  url: "campus.crownseducation.pk/dashboard",
  tabs: ["Dashboard", "Students", "Fees", "Attendance", "Reports"],
  stats: [
    { label: "Students Enrolled", value: "3,240", delta: "+4.1%" },
    { label: "Fee Collection", value: "Rs 8.6M", delta: "+2.8%" },
    { label: "Attendance Today", value: "94.2%" },
    { label: "Active Courses", value: "186" },
  ],
  chartLabel: "Fee collection — last 7 days",
  chartPoints: [58, 71, 64, 82, 69, 90, 97],
  tableTitle: "Recent activity",
  rows: [
    { name: "Ayesha K.", meta: "Grade 9-A", amount: "Rs 24,000", status: "Paid" },
    { name: "Bilal R.", meta: "Grade 6-C", amount: "Rs 18,500", status: "Paid" },
    { name: "Hira S.", meta: "New admission", amount: "—", status: "Enrolled" },
    { name: "Usman T.", meta: "Grade 11-B", amount: "Rs 22,000", status: "Pending" },
  ],
};

export const assessment = {
  eyebrow: "Assessment technology",
  heading: "Technology-Enabled Assessment",
  body: "Technology designed to support secure and controlled academic assessment, giving participating institutions greater visibility and control over the testing process.",
  status: "In Development",
};

/**
 * Named institutional clients (components/client-showcase.tsx). HSA has a
 * real supplied logo at public/hsa-logo.png; the two universities render as
 * typographic wordmarks since no logo file exists for them yet — swap in a
 * `logo` path for either the moment one is supplied.
 */
export const clientShowcase = {
  eyebrow: "Who we build for",
  heading: "Real institutions. *Real systems.*",
  intro:
    "A selection of the systems Crowns Education has built and is building for partner institutions.",
  clients: [
    {
      name: "Health Services Academy",
      logo: "/hsa-logo.png",
      description:
        "A secure testing platform where candidates sit assessments for partner organisations — including government recruitment and public-sector examinations — built on our assessment technology.",
    },
    {
      name: "University of Kamalia",
      description:
        "Campus management and digital administration — student records, attendance and academic operations — built on our Campus Management & ERP platform.",
    },
    {
      name: "University of Home Economics",
      description:
        "Student records, fee collection and academic administration, run on our Campus Management & ERP platform.",
    },
  ],
};

export const audiences = {
  eyebrow: "Who we serve",
  heading: "Built for Educational Institutions and Learners",
  items: [
    {
      title: "Educational Institutions",
      body: "Technology solutions for schools, colleges and other educational organizations.",
    },
    {
      title: "Students",
      body: "Access to digital learning resources and emerging academic opportunities.",
    },
    {
      title: "International Institutions",
      body: "Technology-enabled pathways for institutions interested in reaching students in Pakistan.",
    },
  ],
};

export const finalCta = {
  heading: "Partner With Crowns Education",
  body: "We are working with educational institutions, technology partners and international organizations to develop new approaches to learning, assessment and academic access.",
  primary: {
    label: "Explore Partnership Opportunities",
    href: "/partnerships",
  },
  secondary: { label: "Contact Us", href: "/contact?topic=Crowns%20Education" },
};

/**
 * Product built by SuperApp and operated under this venture.
 * Source: cms.superapp.pk (read September 2026).
 */
export const subProducts: SubProduct[] = [
  {
    name: "SmartSchool",
    positioning:
      "The campus management platform behind Crowns Education — admissions through to alumni, with a parent portal and native mobile apps.",
    features: [
      "Student lifecycle management from admission to alumni records",
      "Parent portal carrying attendance, results and fee payments",
      "Automated fee collection, invoicing and payment tracking",
      "Timetable generation and resource allocation",
      "iOS and Android apps alongside the web interface",
      "Encrypted storage with automatic backups",
    ],
    poweredBy: "SuperApp",
  },
];
