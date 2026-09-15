/**
 * Crowns Health — source: "Crowns_Health_Refined_Concept_Page_Content.docx",
 * Part 8 ("Complete Webpage Content"), which is the web-ready version of
 * "06- Crowns Health .docx".
 */

import type { SubProduct } from "./ventures";

export const hero = {
  eyebrow: "Crowns Health",
  heading: "World-Class Healthcare, Rooted in Pakistan",
  body: "Crowns Health connects you with Pakistani-origin specialist physicians from the world's leading hospitals — coordinated by local doctors who know your context, your language, and your healthcare system.",
  status: "In Development",
  primary: { label: "Explore Partnership Opportunities", href: "/partnerships" },
  secondary: { label: "Talk to Our Team", href: "/contact?topic=Crowns%20Health" },
};

export const metrics = [
  { value: "PMC-Licensed", label: "Local Care Coordinators in every city" },
  {
    value: "Board-Certified",
    label: "Diaspora specialists from the US, UK, Canada and Australia",
  },
  { value: "Urdu + English", label: "Consultations in your language" },
  {
    value: "Live 2026",
    label: "Chronic Care, Women's Health, Second Opinions",
  },
];

export const problem = {
  eyebrow: "The problem",
  heading:
    "World-class doctors exist in Pakistan. Access to them is decided by geography, gender and gatekeeping.",
  items: [
    {
      title: "Chronic disease is epidemic",
      body: "Over 30 million Pakistanis live with diabetes or hypertension. Most receive inconsistent care, medication interruptions and no specialist oversight.",
    },
    {
      title: "Women's health is invisible",
      body: "Gynecological, fertility and mental health concerns are stigmatised. Women avoid clinics, delay diagnosis and suffer in silence.",
    },
    {
      title: "Second opinions are a luxury",
      body: "A cancer patient in Multan has no pathway to confirm their diagnosis with an international specialist — except at prohibitive cost.",
    },
    {
      title: "Emergency care is misunderstood",
      body: "Telemedicine platforms promise 24/7 emergency coverage they cannot deliver — endangering patients and eroding trust.",
    },
  ],
  closing:
    "Crowns Health does not promise everything. We promise what telemedicine can actually deliver — and we deliver it with institutional rigour.",
};

export const tiers = {
  eyebrow: "The solution",
  heading: "Three-Tier Care",
  intro:
    "Crowns Health replaces the vague 'local doctor under international guidance' model with a clear, accountable, legally defensible care architecture.",
  items: [
    {
      tier: "Tier 1",
      title: "AI Triage",
      body: "Before you see any doctor, our AI symptom checker assesses your condition, routes you to the right specialty, and flags true emergencies for immediate physical care. No more guessing. No more wrong appointments.",
    },
    {
      tier: "Tier 2",
      title: "Your Care Coordinator — Licensed in Pakistan",
      body: "A PMC-registered Pakistani physician manages your case from start to finish. They review your history, arrange local diagnostics, and serve as your ongoing point of contact. They are accountable to you — and to the Pakistan Medical Commission.",
    },
    {
      tier: "Tier 3",
      title: "Your International Clinical Advisor",
      body: "A Pakistani-origin specialist practising in the US, UK, Canada or Australia reviews your diagnostics and provides diagnostic confirmation, evidence-based treatment recommendations and second opinions. They do not prescribe in Pakistan — they advise. Your Care Coordinator decides, prescribes and manages.",
    },
  ],
  closing: "This is not telemedicine as a video call. This is telemedicine as a care system.",
};

export const services = {
  eyebrow: "Services — phase 1",
  heading: "What We Offer at Launch",
  items: [
    {
      title: "Chronic Disease Management",
      body: "Monthly subscription for diabetes, hypertension, thyroid, asthma and arthritis. Includes a remote monitoring kit, dietitian support, and quarterly review by a diaspora endocrinologist or cardiologist.",
    },
    {
      title: "Women's Health",
      body: "Private, confidential care for PCOS, fertility, menopause, prenatal guidance and menstrual disorders. Female OB-GYNs and mental health specialists. Integrated with Aurat Card for subsidised access.",
    },
    {
      title: "Mental Health & Psychiatry",
      body: "Stigma-free teletherapy and psychiatric consultation in Urdu and English. ADHD assessment, depression management, PTSD counselling and couples therapy.",
    },
    {
      title: "Second Opinion Service",
      body: "Our diaspora specialists review your complete diagnostic record and deliver a written second opinion within 48 hours. Oncology, cardiology, neurology and rare diseases.",
    },
    {
      title: "Pediatric Care",
      body: "Developmental assessments, vaccination guidance, childhood nutrition and behavioural support from Pakistani-origin pediatricians.",
    },
  ],
  exclusions: {
    title: "What we do not offer, and why",
    items: [
      {
        title: "Emergency medicine",
        body: "If you are having chest pain, difficulty breathing or signs of stroke, our AI triage directs you immediately to the nearest emergency department. Telemedicine saves lives by knowing its limits.",
      },
      {
        title: "Cosmetic procedures",
        body: "Deferred to Crowns Aesthetics to protect the medical credibility of our core platform.",
      },
      {
        title: "Dental care",
        body: "Deferred to Crowns Dental — a separate brand with separate PMDC compliance.",
      },
    ],
  },
};

export const howItWorks = {
  eyebrow: "How it works",
  heading: "Six Steps to Coordinated Care",
  steps: [
    {
      title: "Download & Register",
      body: "Complete your profile, medical history and emergency contacts. CNIC verification ensures security.",
    },
    {
      title: "AI Triage",
      body: "Describe your symptoms. Our AI routes you to the right specialty and flags any emergency symptoms.",
    },
    {
      title: "Book Your Care Coordinator",
      body: "Choose a licensed Pakistani doctor near you. Upload any existing reports or prescriptions.",
    },
    {
      title: "Diagnostic Coordination",
      body: "Your Care Coordinator orders blood tests, imaging or specialist referrals at partner labs and hospitals — at discounted rates.",
    },
    {
      title: "International Advisor Review",
      body: "For chronic, complex or second-opinion cases, your diagnostics are reviewed by a diaspora specialist. You receive a video consultation and a written report.",
    },
    {
      title: "Treatment & Follow-Up",
      body: "Your Care Coordinator prescribes, refers or manages your treatment plan. Follow-ups via WhatsApp. Medicines delivered to your door.",
    },
  ],
};

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  includes: string;
  idealFor: string;
  featured?: boolean;
};

export const plans = {
  eyebrow: "Plans & pricing",
  heading: "Transparent, Subscription-Based Healthcare",
  intro: "No hidden fees. No surprise bills.",
  items: [
    {
      name: "Essential",
      price: "PKR 2,500",
      cadence: "per month",
      includes:
        "2 GP consultations a month, AI triage, health library, WhatsApp support",
      idealFor: "Individuals with occasional health needs",
    },
    {
      name: "Chronic Care",
      price: "PKR 5,000",
      cadence: "per month",
      includes:
        "Unlimited Care Coordinator access, quarterly International Advisor review, remote monitoring kit, dietitian support",
      idealFor: "Diabetes, hypertension, thyroid and asthma patients",
      featured: true,
    },
    {
      name: "Women's Health",
      price: "PKR 4,500",
      cadence: "per month",
      includes:
        "2 OB-GYN consultations a month, mental health sessions, fertility tracking, menopause support",
      idealFor: "Women 18–55 seeking specialised, private care",
    },
    {
      name: "Family",
      price: "PKR 8,000",
      cadence: "per month",
      includes:
        "2 adults and 3 children, all Essential and Chronic Care features, 1 second opinion a year",
      idealFor: "Families wanting comprehensive coverage",
    },
    {
      name: "Second Opinion",
      price: "PKR 15,000–50,000",
      cadence: "one-time",
      includes:
        "Full diagnostic review by a diaspora specialist, written report, Care Coordinator follow-up",
      idealFor: "Patients with complex or serious diagnoses",
    },
  ] satisfies Plan[],
};

export const forOrganisations = {
  eyebrow: "For organisations",
  heading: "Corporate Wellness",
  body: "Employee health is organisational health. Crowns Health corporate packages reduce absenteeism, improve productivity and demonstrate genuine care for your workforce.",
  items: [
    "Per-employee-per-month pricing (PKR 1,500–3,000)",
    "Annual health screenings and biometric assessments",
    "Mental health support and stress management workshops",
    "Chronic disease management for high-risk employees",
    "Quarterly impact reports for HR and leadership",
    "Integration with Crowns Financial for tax-advantaged health benefits",
  ],
  cta: { label: "Talk to Our Team", href: "/contact?topic=Crowns%20Health" },
};

export const forProviders = {
  eyebrow: "For healthcare providers",
  heading: "Join Our Network",
  body: "Hospitals, diagnostic labs and specialist clinics benefit from Crowns Health's patient referral stream, technology integration and brand association.",
  items: [
    "Referral partnership — receive pre-qualified patients requiring imaging, surgery or inpatient care",
    "Technology integration — your lab results and imaging reports flow directly into the Crowns Health EMR",
    "Discounted rates for members — attract volume through preferential pricing",
    "Quality assurance — partner hospitals undergo credentialing and patient satisfaction monitoring",
  ],
  cta: { label: "Become a Provider Partner", href: "/partnerships" },
};

export const finalCta = {
  heading: "Your Health Deserves More Than a Rushed Clinic Visit",
  body: "Whether you are a patient, a Pakistani-origin specialist abroad, or a partner interested in health technology, we would like to hear from you.",
  primary: { label: "Contact Crowns Health", href: "/contact?topic=Crowns%20Health" },
  secondary: { label: "Explore Partnership Opportunities", href: "/partnerships" },
};

export const disclaimer =
  "Crowns Health is a venture of Crowns Sphere Private Limited. All medical services are delivered by licensed physicians. Telemedicine is not a substitute for emergency care. In case of emergency, call 1122 or proceed to the nearest hospital.";

/**
 * Products built by SuperApp and operated under this venture.
 * Sources: klinic.superapp.pk, ezshifa.com (read September 2026).
 */
export const subProducts: SubProduct[] = [
  {
    name: "Klinic",
    positioning:
      "An operating system for a clinic — patient records, scheduling, clinical workflow, pharmacy, billing and payroll in one place. Runs a single practice or a multi-site network.",
    features: [
      "Unified patient records with full appointment and care history",
      "Scheduling with waitlists, reminders and a live view of the day",
      "Consultations, lab orders and prescriptions tracked end to end",
      "Pharmacy inventory, invoicing and payment collection",
      "Attendance, leave and payroll built around clinic rotas",
    ],
    poweredBy: "SuperApp",
  },
  {
    name: "EZShifa",
    logo: "/EZShifa-logo.png",
    positioning:
      "Telehealth delivered through kiosks and connected devices, reaching patients in places where the nearest clinic is far away.",
    features: [
      "Telehealth kiosks combining vital monitoring, screening and video consultation",
      "A pregnancy care pathway for expecting and new mothers",
      "AI-assisted capture and recording of patient vitals",
      "School health screening with tracking dashboards for parents and staff",
      "Access to psychiatrists and therapists for mental health support",
    ],
    poweredBy: "SuperApp",
  },
];

/**
 * Desktop dashboard mockup for Klinic (components/desktop-mockup.tsx),
 * modelled on the real klinic.superapp.pk product dashboard — its stat row
 * (Patients / Appointments / Revenue), performance chart and "Today" panel —
 * reskinned into this site's own dark chrome. Figures are illustrative.
 */
export const klinicDashboard = {
  appName: "Klinic",
  url: "app.crownshealth.pk/klinic",
  tabs: ["Dashboard", "Patients", "Appointments", "Billing", "Reports"],
  stats: [
    { label: "Patients", value: "12.8k" },
    { label: "Appointments", value: "438" },
    { label: "Revenue", value: "$89k" },
    { label: "Consultations Today", value: "26" },
  ],
  chartLabel: "Clinic performance",
  chartPoints: [52, 68, 58, 73, 85, 96, 88],
  tableTitle: "Today",
  rows: [
    { name: "Lab Orders", meta: "Ordered today", amount: "18" },
    { name: "Prescriptions", meta: "Issued today", amount: "34" },
    { name: "New Patients", meta: "Registered today", amount: "7" },
  ],
};
