"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Droplet,
  FileText,
  FlaskConical,
  HeartPulse,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Navigation,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Star,
  Stethoscope,
  Syringe,
  Wallet,
  X,
} from "lucide-react";
import {
  business,
  directionsUrl,
  fullAddress,
  homepageFaqs,
  localAreas,
  patientReviews,
  phoneHref,
  servicePages,
  whatsappUrl,
} from "@/lib/pathako-data";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Home Collection", href: "#home-collection" },
  { label: "Packages", href: "#packages" },
  { label: "Doctor", href: "#doctor" },
  { label: "Contact", href: "#contact" },
];

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  slug?: string;
};

const trustStrip: CardItem[] = [
  {
    title: "M.D. Pathologist Supervision",
    description: "Reports reviewed under Dr. V. Khare.",
    icon: BadgeCheck,
  },
  {
    title: "24×7 Diagnostic Services",
    description: "Blood testing support whenever needed.",
    icon: Clock,
  },
  {
    title: "Fast Reporting",
    description: "Clear reporting timelines before sample collection.",
    icon: FileText,
  },
  {
    title: "Home Sample Collection",
    description: "Home visits for eligible tests in Gwalior.",
    icon: Home,
  },
  {
    title: "Reliable Testing Process",
    description: "Careful collection and lab processing.",
    icon: ShieldCheck,
  },
  {
    title: "Patient-Focused Care",
    description: "Simple guidance for families and seniors.",
    icon: HeartPulse,
  },
];

const whyChoose: CardItem[] = [
  {
    title: "Careful Sample Handling",
    description: "Samples are collected and processed with attention to hygiene and identification.",
    icon: ShieldCheck,
  },
  {
    title: "Pathologist Supervision",
    description: "Reports are reviewed under Dr. V. Khare, M.D. Pathologist.",
    icon: BadgeCheck,
  },
  {
    title: "Clear Reporting Timelines",
    description: "The team explains when reports are expected before sample collection.",
    icon: Clock,
  },
  {
    title: "Hygienic Collection",
    description: "Sterile collection practices are followed at the lab and during home visits.",
    icon: Syringe,
  },
  {
    title: "Practical Test Packages",
    description: "Health packages are kept focused, useful, and easy to discuss with your doctor.",
    icon: Wallet,
  },
  {
    title: "24×7 Support",
    description: "Call before visiting for urgent or late-night testing requirements.",
    icon: PhoneCall,
  },
];

const testCategories = [
  {
    title: "Routine Health Tests",
    description:
      "Everyday blood and urine tests used for fever, weakness, anemia screening, and regular health monitoring.",
    icon: Droplet,
    tests: ["CBC", "Blood Sugar", "Urine Tests"],
  },
  {
    title: "Diabetes Monitoring",
    description:
      "Testing support for patients tracking sugar control as advised by their doctor.",
    icon: Activity,
    tests: ["Fasting Sugar", "Post-Meal Sugar", "HbA1c"],
  },
  {
    title: "Thyroid Profile",
    description:
      "Thyroid testing for patients advised evaluation for fatigue, weight change, mood changes, or medicine monitoring.",
    icon: HeartPulse,
    tests: ["T3", "T4", "TSH"],
  },
  {
    title: "Organ Function Tests",
    description:
      "Common liver and kidney panels used by doctors to review organ function and treatment follow-up.",
    icon: FlaskConical,
    tests: ["LFT", "KFT", "Electrolytes"],
  },
];

const homeCollectionSteps = [
  { title: "Call or WhatsApp", icon: PhoneCall },
  { title: "Technician Visits Home", icon: Home },
  { title: "Sample Collection", icon: Syringe },
  { title: "Lab Analysis", icon: Microscope },
  { title: "Digital Report Delivery", icon: FileText },
];

const reportDeliveryFeatures: CardItem[] = [
  {
    title: "Laboratory Processing",
    description: "Samples are processed through the lab workflow after collection.",
    icon: FlaskConical,
  },
  {
    title: "Digital Reports",
    description: "Reports can be shared digitally when ready.",
    icon: FileText,
  },
  {
    title: "Easy Access",
    description: "Receive reports in a format that is easy to share with your doctor.",
    icon: ClipboardCheck,
  },
  {
    title: "Assistance Available",
    description: "Call the team if you need help with report access or timing.",
    icon: PhoneCall,
  },
];

const tests: CardItem[] = [
  {
    title: "Complete Blood Count (CBC)",
    description: "Measures blood cells to support evaluation of fever, anemia, and infection.",
    icon: Droplet,
    slug: "blood-testing",
  },
  {
    title: "Blood Sugar Test",
    description: "Fasting, random, and post-meal glucose testing for diabetes care.",
    icon: Activity,
    slug: "diabetes-testing",
  },
  {
    title: "Thyroid Profile (T3, T4, TSH)",
    description: "Checks thyroid hormone levels when advised for fatigue, weight, or mood changes.",
    icon: HeartPulse,
    slug: "thyroid-testing",
  },
  {
    title: "Liver Function Test (LFT)",
    description: "Reviews liver enzymes, bilirubin, and proteins for doctor-guided evaluation.",
    icon: FlaskConical,
    slug: "liver-function-testing",
  },
  {
    title: "Kidney Function Test (KFT)",
    description: "Reviews urea, creatinine, and electrolytes to assess kidney function.",
    icon: Stethoscope,
    slug: "kidney-function-testing",
  },
  {
    title: "Lipid Profile",
    description: "Checks cholesterol and triglycerides for preventive heart-risk monitoring.",
    icon: Activity,
    slug: "cholesterol-testing",
  },
  {
    title: "Vitamin D Test",
    description: "Helps assess vitamin D levels when advised for bone pain, fatigue, or deficiency.",
    icon: ClipboardCheck,
    slug: "vitamin-testing",
  },
  {
    title: "HbA1c Test",
    description: "Shows average blood sugar control over the last two to three months.",
    icon: FileText,
    slug: "diabetes-testing",
  },
  {
    title: "Urine Routine Examination",
    description: "Screens urine for infection, protein, sugar, and other routine markers.",
    icon: FlaskConical,
    slug: "urine-testing",
  },
  {
    title: "Dengue Testing",
    description: "NS1 antigen and antibody testing for fever evaluation.",
    icon: Microscope,
    slug: "blood-testing",
  },
  {
    title: "Typhoid Testing",
    description: "Diagnostic testing support for prolonged fever and weakness.",
    icon: ShieldCheck,
    slug: "blood-testing",
  },
  {
    title: "Malaria Testing",
    description: "Rapid and microscopy-based testing for suspected malaria symptoms.",
    icon: Microscope,
    slug: "blood-testing",
  },
];

const packages = [
  {
    title: "Basic Health Checkup",
    price: "Rs. 599 onwards",
    features: ["CBC", "Blood Sugar", "Urine Routine", "Doctor-ready report"],
  },
  {
    title: "Diabetes Package",
    price: "Rs. 899 onwards",
    features: ["Fasting Sugar", "PP Sugar", "HbA1c", "Kidney screening"],
  },
  {
    title: "Senior Citizen Package",
    price: "Rs. 1,499 onwards",
    features: ["CBC", "LFT", "KFT", "Lipid Profile", "Thyroid screening"],
  },
  {
    title: "Comprehensive Health Package",
    price: "Rs. 2,499 onwards",
    features: ["Full body markers", "Vitamin D", "Diabetes profile", "Priority reporting"],
  },
];

const processSteps = [
  {
    title: "Call or WhatsApp",
    description: "Call or WhatsApp Pathako Lab with the test name and preferred timing.",
    icon: PhoneCall,
  },
  {
    title: "Sample Collection",
    description: "Visit the lab or schedule hygienic home sample collection in Gwalior.",
    icon: Syringe,
  },
  {
    title: "Laboratory Analysis",
    description: "Samples are processed using quality-focused diagnostic procedures.",
    icon: Microscope,
  },
  {
    title: "Receive Reports",
    description: "Get clear digital reports for consultation with your doctor.",
    icon: FileText,
  },
];

const galleryImages = [
  {
    src: "/images/blood-sample-collection.webp",
    alt: "Healthcare professional preparing a blood sample collection kit",
    title: "Blood Sample Collection",
  },
  {
    src: "/images/modern-diagnostic-lab-equipment.webp",
    alt: "Modern diagnostic laboratory equipment used for pathology testing",
    title: "Modern Lab Equipment",
  },
  {
    src: "/images/doctor-reviewing-lab-reports.webp",
    alt: "Doctor reviewing laboratory reports for a patient",
    title: "Doctor-Ready Report Format",
  },
  {
    src: "/images/gwalior-family-healthcare.webp",
    alt: "Family discussing preventive healthcare and diagnostic testing",
    title: "Family Healthcare",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-balance text-3xl font-bold leading-tight tracking-tight text-[#1B2A41] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#5F6B7A] md:text-lg">
        {description}
      </p>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  icon: Icon = ArrowRight,
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#0E5CAD] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(14,92,173,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0A4C94] ${className}`}
    >
      {children}
      <Icon className="size-4" />
    </a>
  );
}

function OutlineButton({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: ReactNode;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E8F7] bg-white/80 px-6 py-3 text-sm font-semibold text-[#0E5CAD] shadow-sm transition hover:-translate-y-0.5 hover:border-[#00B8D9] hover:bg-[#EFFAFF]"
    >
      <Icon className="size-4" />
      {children}
    </a>
  );
}

export function PathakoLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const selectedService = selectedServiceSlug
    ? servicePages.find((service) => service.slug === selectedServiceSlug)
    : undefined;

  return (
    <main className="min-h-screen overflow-hidden pb-24 text-[#1B2A41] md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/80 shadow-[0_14px_45px_rgba(14,92,173,0.10)] backdrop-blur-2xl">
        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between py-3 sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)]">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="Pathako Lab home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0E5CAD] text-white shadow-lg shadow-blue-900/15">
              <Microscope className="size-6" />
            </span>
            <span>
              <span className="font-heading block text-lg font-bold leading-5 text-[#1B2A41]">
                Pathako Lab
              </span>
              <span className="text-xs font-medium text-[#5F6B7A]">
                Dr. V. Khare, M.D. Pathologist
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#5F6B7A] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#0E5CAD]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              className="hidden items-center gap-2 rounded-full bg-[#EFF7FF] px-4 py-2 text-sm font-bold text-[#0E5CAD] transition hover:bg-[#DFF1FF] sm:flex"
            >
              <PhoneCall className="size-4" />
              {business.phone}
            </a>
            <a
              href={whatsappUrl("Hello Pathako Lab, I need help with a pathology test.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Pathako Lab"
              className="flex size-12 items-center justify-center gap-2 rounded-full bg-[#0E5CAD] text-white shadow-[0_14px_32px_rgba(14,92,173,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0A4C94] sm:w-auto sm:px-5 sm:text-sm sm:font-bold"
            >
              <MessageCircle className="size-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="flex size-12 items-center justify-center rounded-full border border-[#D9E8F7] bg-white text-[#0E5CAD] shadow-sm transition hover:bg-[#EFF8FF] lg:hidden"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] h-dvh overflow-y-auto bg-[#F8FBFF]/98 px-4 pb-8 pt-4 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto max-w-md">
            <div className="mb-4 flex items-center justify-between gap-3 rounded-[1.5rem] bg-white p-3 shadow-[0_18px_55px_rgba(14,92,173,0.14)] ring-1 ring-[#E2EEF9]">
              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3"
                aria-label="Pathako Lab home"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0E5CAD] text-white">
                  <Microscope className="size-6" />
                </span>
                <span>
                  <span className="font-heading block text-base font-bold leading-5 text-[#1B2A41]">
                    Pathako Lab
                  </span>
                  <span className="text-xs font-medium text-[#5F6B7A]">
                    Dr. V. Khare, M.D.
                  </span>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F0FBFF] text-[#0E5CAD] transition hover:bg-[#DFF1FF]"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="rounded-[2rem] bg-white p-4 shadow-[0_24px_80px_rgba(14,92,173,0.14)]">
              <p className="px-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
                Menu
              </p>
              <nav className="mt-4 grid gap-2" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-14 items-center justify-between rounded-2xl bg-[#F8FBFF] px-4 py-3 font-heading text-base font-bold text-[#1B2A41] transition hover:bg-[#EFF8FF]"
                  >
                    {item.label}
                    <ArrowRight className="size-4 text-[#0E5CAD]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-4 rounded-[2rem] bg-[#0E5CAD] p-5 text-white shadow-[0_24px_70px_rgba(14,92,173,0.2)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9CEBFF]">
                Need Help?
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold">
                Speak with Pathako Lab
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Call or WhatsApp for test guidance, home collection, directions,
                or report timing.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href={phoneHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0E5CAD]"
                >
                  <PhoneCall className="size-4" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl("Hello Pathako Lab, I need help with a pathology test.")}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#28C76F] px-5 py-3 text-sm font-bold text-white"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {selectedService ? (
        <div
          className="fixed inset-0 z-[70] flex items-end bg-[#071C34]/60 px-4 py-4 backdrop-blur-sm sm:items-center sm:justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-detail-title"
        >
          <div className="max-h-[88dvh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white p-5 shadow-[0_30px_100px_rgba(7,28,52,0.32)] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00B8D9]">
                  {selectedService.shortTitle}
                </p>
                <h2
                  id="service-detail-title"
                  className="font-heading mt-2 text-2xl font-bold leading-tight text-[#1B2A41] sm:text-3xl"
                >
                  {selectedService.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedServiceSlug(null)}
                aria-label="Close test details"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F0FBFF] text-[#0E5CAD] transition hover:bg-[#DFF1FF]"
              >
                <X className="size-5" />
              </button>
            </div>

            <p className="mt-5 leading-8 text-[#5F6B7A]">
              {selectedService.introduction}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-[#F8FBFF] p-5">
                <p className="font-heading font-bold text-[#1B2A41]">
                  When this test may be advised
                </p>
                <ul className="mt-4 space-y-3">
                  {selectedService.symptoms.slice(0, 5).map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#5F6B7A]">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#22C55E]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-[#F8FBFF] p-5">
                <p className="font-heading font-bold text-[#1B2A41]">
                  Who may need it
                </p>
                <ul className="mt-4 space-y-3">
                  {selectedService.whoShouldTest.slice(0, 5).map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-[#5F6B7A]">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#22C55E]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-[#EFF8FF] p-5">
              <p className="font-heading font-bold text-[#1B2A41]">
                Why doctors ask for it
              </p>
              <p className="mt-3 leading-7 text-[#5F6B7A]">{selectedService.whyNeeded}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {selectedService.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl bg-white p-4">
                    <p className="font-semibold text-[#1B2A41]">{faq.question}</p>
                    <p className="mt-2 text-sm leading-6 text-[#5F6B7A]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0E5CAD] px-6 py-3 text-sm font-bold text-white"
              >
                <PhoneCall className="size-4" />
                Call Now
              </a>
              <a
                href={whatsappUrl(`Hello Pathako Lab, I need help with ${selectedService.shortTitle}.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#28C76F] px-6 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <section className="relative px-4 pt-32 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-0 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-[#00B8D9]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CFE7FF] bg-white/85 px-4 py-2 text-sm font-semibold text-[#0E5CAD] shadow-sm">
              <Clock className="size-4 text-[#28C76F]" />
              24×7 Blood Testing Services in Gwalior
            </div>
            <h1 className="font-heading text-balance text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#1B2A41] sm:text-5xl lg:text-6xl">
              Most Trusted Path Lab in Gwalior
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6B7A] sm:text-xl">
              24×7 blood testing services, home sample collection, and health
              checkups under Dr. V. Khare, M.D. Pathologist.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#E2EEF9]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00B8D9]">
                  Doctor
                </p>
                <p className="mt-1 font-heading font-bold text-[#1B2A41]">
                  Dr. V. Khare
                </p>
                <p className="text-sm text-[#5F6B7A]">M.D. Pathologist</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#E2EEF9]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00B8D9]">
                  Location
                </p>
                <p className="mt-1 font-heading font-bold text-[#1B2A41]">
                  Shatabdipuram
                </p>
                <p className="text-sm text-[#5F6B7A]">Gwalior, M.P.</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-[#E2EEF9]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00B8D9]">
                  Phone
                </p>
                <a href={phoneHref} className="mt-1 block font-heading font-bold text-[#0E5CAD]">
                  {business.phone}
                </a>
                <p className="text-sm text-[#5F6B7A]">Call or WhatsApp</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={phoneHref} icon={PhoneCall}>
                Call Now
              </PrimaryButton>
              <OutlineButton
                href={whatsappUrl("Hello Pathako Lab, please share details for pathology tests.")}
                icon={MessageCircle}
              >
                WhatsApp
              </OutlineButton>
            </div>

          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
              <div className="relative h-[28rem] overflow-hidden rounded-[1.55rem] sm:h-[34rem]">
                <Image
                  src="/images/pathology-lab-technician-microscope.webp"
                  alt="Professional pathology lab technician using microscope"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3158]/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 shadow-2xl backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#5F6B7A]">
                        Supervised by
                      </p>
                      <p className="font-heading text-xl font-bold text-[#1B2A41]">
                        Dr. V. Khare
                      </p>
                      <p className="text-sm text-[#5F6B7A]">M.D. Pathologist</p>
                    </div>
                    <div className="rounded-2xl bg-[#EAFBF1] p-3 text-[#28C76F]">
                      <BadgeCheck className="size-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="premium-card absolute -left-3 top-10 hidden rounded-3xl p-4 sm:block">
              <p className="text-sm font-semibold text-[#5F6B7A]">Questions about a test?</p>
              <a href={phoneHref} className="mt-1 block font-heading text-xl font-bold text-[#0E5CAD]">
                {business.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="px-4 pt-10 sm:px-6 lg:px-8">
        <div className="glass-panel mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] sm:grid-cols-2 lg:grid-cols-3">
          {trustStrip.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-3 border-[#E2EEF9] bg-white/64 p-5 ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index < 4 ? "sm:border-b" : ""} ${
                [0, 1, 3, 4].includes(index) ? "lg:border-r" : "lg:border-r-0"
              } ${index < 3 ? "lg:border-b" : "lg:border-b-0"}`}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAFBF1] text-[#159A4E]">
                <item.icon className="size-5" />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold leading-5 text-[#1B2A41]">
                  {item.title}
                </span>
                <span className="mt-1.5 block text-xs leading-5 text-[#5F6B7A]">
                  {item.description}
                </span>
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why choose Pathako Lab"
          title="Patient-first diagnostic care"
          description="Pathako Lab supports families, senior citizens, diabetic patients, doctors, and working professionals across Gwalior with practical testing guidance by phone and WhatsApp."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="premium-card rounded-[1.75rem] p-6 transition"
            >
              <div className="mb-5 flex size-13 items-center justify-center rounded-2xl bg-[#EFF8FF] text-[#0E5CAD]">
                <item.icon className="size-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1B2A41]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-[#5F6B7A]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blood testing services Gwalior"
          title="Patient-focused test categories"
          description="Choose from routine tests, diabetes monitoring, thyroid profile, organ function testing, and preventive health packages. For preparation instructions, speak with the team before collection."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testCategories.map((category) => (
            <motion.article
              key={category.title}
              whileHover={{ y: -6 }}
              className="premium-card rounded-[1.75rem] p-6"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#F0FBFF] text-[#0E5CAD]">
                <category.icon className="size-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1B2A41]">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5F6B7A]">
                {category.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.tests.map((test) => (
                  <span
                    key={test}
                    className="rounded-full bg-[#EFF8FF] px-3 py-1.5 text-xs font-bold text-[#0E5CAD]"
                  >
                    {test}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-7xl">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00B8D9]">
                Quick test shortcuts
              </p>
              <h3 className="font-heading mt-2 text-2xl font-bold text-[#1B2A41]">
                Popular tests patients commonly request
              </h3>
            </div>
            <a
              href={whatsappUrl("Hello Pathako Lab, please help me choose the right blood test.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EAFBF1] px-5 py-3 text-sm font-bold text-[#159A4E]"
            >
              Questions About a Test?
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tests.map((test) => (
            <motion.article
              key={test.title}
              whileHover={{ y: -6 }}
              className="premium-card group flex min-h-64 flex-col rounded-[1.75rem] p-5"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#F0FBFF] text-[#00B8D9] transition group-hover:bg-[#0E5CAD] group-hover:text-white">
                <test.icon className="size-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#1B2A41]">
                {test.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[#5F6B7A]">
                {test.description}
              </p>
              {test.slug ? (
                <button
                  type="button"
                  onClick={() => setSelectedServiceSlug(test.slug ?? null)}
                  className="mt-5 inline-flex items-center gap-2 text-left text-sm font-bold text-[#0E5CAD]"
                >
                  View Details
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </button>
              ) : (
                <a
                  href={whatsappUrl(`Hello Pathako Lab, I need help with ${test.title}.`)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0E5CAD]"
                >
                  WhatsApp
                  <MessageCircle className="size-4 transition group-hover:translate-x-1" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-7xl rounded-[1.75rem] bg-[#0E5CAD] p-5 text-white md:flex md:items-center md:justify-between md:p-6">
          <div>
            <h3 className="font-heading text-2xl font-bold">Need a Blood Test Today?</h3>
            <p className="mt-2 text-white/75">
              Call or WhatsApp the test name. The team will guide you on preparation, fasting, and collection timing.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
            <a
              href={phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0E5CAD]"
            >
              <PhoneCall className="size-4" />
              Call Our Team
            </a>
            <a
              href={whatsappUrl("Hello Pathako Lab, I need a blood test today.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#28C76F] px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="home-collection" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] bg-[#EAF7FF] p-5 shadow-[0_30px_90px_rgba(14,92,173,0.12)] md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/home-sample-collection-healthcare-worker.webp"
              alt="Healthcare worker preparing home sample collection"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
              Home sample collection
            </p>
            <h2 className="font-heading text-balance text-3xl font-bold text-[#1B2A41] md:text-5xl">
              Home Collection in Gwalior
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5F6B7A]">
              If visiting the laboratory is difficult, you can request a home
              visit for eligible tests. The team will confirm timing,
              preparation instructions, and sample requirements before
              collection.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Convenient Scheduling", "Sterile Collection Practice", "Lab Processing", "Digital Reports"].map(
                (feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white/85 p-4 font-semibold text-[#1B2A41]">
                    <CheckCircle2 className="size-5 shrink-0 text-[#22C55E]" />
                    {feature}
                  </div>
                ),
              )}
            </div>
            <div className="mt-7 rounded-[1.5rem] bg-white/80 p-4">
              <p className="font-heading text-lg font-bold text-[#1B2A41]">
                Home collection process
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                {homeCollectionSteps.map((step, index) => (
                  <div key={step.title} className="rounded-2xl bg-[#F8FBFF] p-3 text-center">
                    <span className="mx-auto flex size-10 items-center justify-center rounded-2xl bg-[#0E5CAD] text-white">
                      <step.icon className="size-5" />
                    </span>
                    <span className="mt-3 block text-xs font-bold uppercase tracking-[0.14em] text-[#00B8D9]">
                      Step {index + 1}
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-5 text-[#1B2A41]">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton
                href={whatsappUrl("Hello Pathako Lab, I want to schedule home sample collection.")}
                icon={MessageCircle}
              >
                WhatsApp
              </PrimaryButton>
              <OutlineButton href={phoneHref} icon={PhoneCall}>
                Call {business.phone}
              </OutlineButton>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
              About Pathako Lab
            </p>
            <h2 className="font-heading text-balance text-3xl font-bold text-[#1B2A41] md:text-5xl">
              Local Lab for Everyday Diagnostics
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5F6B7A]">
              Pathako Lab provides pathology services in Gwalior for routine
              blood tests, preventive health checkups, fever investigations,
              diabetes monitoring, and home sample collection. The laboratory is
              supervised by Dr. V. Khare, M.D. Pathologist.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5F6B7A]">
              For patients searching for a diagnostic centre in Gwalior, a blood
              test in Gwalior, or home sample collection in Gwalior, the team
              keeps test preparation guidance simple.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5F6B7A]">
              The focus is simple: collect samples carefully, process tests
              responsibly, and share reports in a format patients can take to
              their doctor without confusion.
            </p>
            <div className="mt-8">
              <PrimaryButton
                href={whatsappUrl("Hello Pathako Lab, please share details about your pathology services.")}
                icon={MessageCircle}
              >
                Questions About a Test?
              </PrimaryButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`premium-card overflow-hidden rounded-[1.75rem] ${index % 2 === 1 ? "sm:translate-y-8" : ""}`}
              >
                <div className="relative h-56">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-4 font-heading font-bold text-[#1B2A41]">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-white p-5 shadow-[0_18px_60px_rgba(14,92,173,0.08)] md:flex md:items-center md:justify-between md:p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
              Local reputation
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-[#1B2A41]">
              Trusted by Families Across Gwalior
            </h2>
            <p className="mt-2 leading-7 text-[#5F6B7A]">
              Pathako Lab supports patients from Shatabdipuram, Deen Dayal
              Nagar, City Centre, Morar, Lashkar, and nearby residential areas.
              For home sample collection in Gwalior, call first so the
              team can confirm timing and availability for your location.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-0 md:max-w-xl md:justify-end">
            {localAreas.map((area) => (
              <span key={area} className="rounded-full bg-[#F0FBFF] px-4 py-2 text-sm font-semibold text-[#0E5CAD]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="doctor" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] bg-white p-5 shadow-[0_30px_90px_rgba(14,92,173,0.12)] md:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div className="rounded-[1.75rem] bg-[#F8FBFF] p-6">
            <div className="flex size-20 items-center justify-center rounded-3xl bg-[#EAFBF1] text-[#159A4E]">
              <Stethoscope className="size-10" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
              Doctor profile
            </p>
            <h2 className="font-heading mt-3 text-3xl font-bold text-[#1B2A41] md:text-4xl">
              Dr. V. Khare
            </h2>
            <p className="mt-2 text-lg font-semibold text-[#0E5CAD]">
              M.D. Pathologist
            </p>
            <div className="mt-6 rounded-3xl bg-white p-5">
              <p className="font-heading font-bold text-[#1B2A41]">
                Diagnostic philosophy
              </p>
              <p className="mt-3 leading-7 text-[#5F6B7A]">
                A useful report should be carefully processed, clearly
                presented, and easy for the treating doctor to interpret.
                Pathako Lab keeps this patient-first approach at the center of
                its diagnostic work.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
              Pathologist supervision
            </p>
            <h3 className="font-heading text-balance text-3xl font-bold text-[#1B2A41] md:text-5xl">
              Pathology expertise behind every report
            </h3>
            <p className="mt-5 text-lg leading-8 text-[#5F6B7A]">
              Dr. V. Khare, M.D. Pathologist, supervises the diagnostic
              reporting process at Pathako Lab. His role supports careful review
              of routine hematology, biochemistry, diabetes monitoring, thyroid
              testing, urine examination, fever-related investigations, and
              preventive health checkups.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5F6B7A]">
              The aim is to help patients receive reports that are clear,
              medically responsible, and useful for the doctor managing their
              care.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Blood and urine testing", "Diabetes and thyroid monitoring", "Preventive health screening"].map(
                (area) => (
                  <div key={area} className="rounded-2xl bg-[#F8FBFF] p-4 text-sm font-semibold text-[#1B2A41]">
                    {area}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="packages" className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Health packages"
          title="Health Packages for Every Age"
          description="Choose a focused package or ask the team to recommend tests based on your doctor prescription and symptoms."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -6 }}
              className="premium-card flex flex-col rounded-[1.75rem] p-6"
            >
              <h3 className="font-heading text-xl font-bold text-[#1B2A41]">
                {item.title}
              </h3>
              <p className="mt-3 font-heading text-2xl font-bold text-[#0E5CAD]">
                {item.price}
              </p>
              <div className="my-6 h-px bg-[#E2EEF9]" />
              <ul className="space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-[#5F6B7A]">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#22C55E]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(`Hello Pathako Lab, I want details for ${item.title}.`)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#EAFBF1] px-5 py-3 text-sm font-bold text-[#159A4E] transition hover:bg-[#D8F7E5]"
              >
                Get Package Price
                <MessageCircle className="size-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Simple Call to Reports"
          description="Pathako Lab keeps the experience quick, clear, and convenient for patients and referring doctors."
        />
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-5 shadow-[0_24px_80px_rgba(14,92,173,0.1)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 ? (
                  <div className="absolute left-10 top-10 hidden h-px w-[calc(100%-1rem)] bg-[#D7E8F8] lg:block" />
                ) : null}
                <div className="relative z-10 flex flex-col gap-4 rounded-[1.5rem] bg-[#F8FBFF] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-[#0E5CAD] text-white">
                      <step.icon className="size-6" />
                    </span>
                    <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#00B8D9]">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1B2A41]">
                    {step.title}
                  </h3>
                  <p className="leading-7 text-[#5F6B7A]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#F8FBFF] p-5 shadow-[0_24px_80px_rgba(14,92,173,0.08)] md:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
              Report delivery
            </p>
            <h2 className="font-heading text-balance text-3xl font-bold text-[#1B2A41] md:text-5xl">
              Quick, Convenient Report Delivery
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5F6B7A]">
              After laboratory processing, reports can be shared digitally when
              ready. If you need help accessing a report or confirming timing,
              the team is available by phone or WhatsApp.
            </p>
            <div className="mt-7">
              <PrimaryButton
                href={whatsappUrl("Hello Pathako Lab, I need help with report delivery.")}
                icon={MessageCircle}
              >
                Ask About Reports
              </PrimaryButton>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reportDeliveryFeatures.map((feature) => (
              <div key={feature.title} className="premium-card rounded-[1.5rem] p-5">
                <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-[#F0FBFF] text-[#0E5CAD]">
                  <feature.icon className="size-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1B2A41]">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-7 text-[#5F6B7A]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What Patients Say"
          title="Patient feedback from Gwalior"
          description="Patients and families value clear communication, clean sample collection, and reports they can share with their doctors."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {patientReviews.map((review) => (
            <article key={`${review.name}-${review.date}`} className="premium-card rounded-[1.75rem] p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-[#F6B73C]" aria-label={`${review.rating} star review`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#8A97A8]">{review.date}</span>
              </div>
              <p className="leading-8 text-[#5F6B7A]">&ldquo;{review.review}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-[#EAFBF1] font-heading font-bold text-[#159A4E]">
                  {review.initials}
                </div>
                <div>
                  <p className="font-heading font-bold text-[#1B2A41]">{review.name}</p>
                  <p className="text-sm text-[#5F6B7A]">{review.area}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers before you call"
          description="For test-specific preparation and urgent availability, call or WhatsApp Pathako Lab directly."
        />
        <div className="mx-auto grid max-w-7xl gap-4">
          {homepageFaqs.slice(0, 20).map((faq) => (
            <details
              key={faq.question}
              className="premium-card group rounded-3xl p-5 open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-[#1B2A41]">
                {faq.question}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EFF8FF] text-[#0E5CAD] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 leading-8 text-[#5F6B7A]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#0E5CAD] p-6 text-white shadow-[0_30px_90px_rgba(14,92,173,0.22)] md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#9CEBFF]">
              Google Business Profile
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-5xl">
              Visit Our Diagnostic Centre
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/78">
              Call before visiting for urgent testing, home sample collection,
              or test preparation instructions.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <Building2 className="mt-1 size-6 shrink-0 text-[#9CEBFF]" />
                <div>
                  <p className="font-heading text-xl font-bold">Pathako Lab</p>
                  <p className="text-white/78">Dr. V. Khare, M.D. Pathologist</p>
                </div>
              </div>
              <div className="flex gap-4">
                <PhoneCall className="mt-1 size-6 shrink-0 text-[#9CEBFF]" />
                <div>
                  <p className="text-white/78">Phone</p>
                  <a href={phoneHref} className="font-heading text-2xl font-bold">
                    {business.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 size-6 shrink-0 text-[#9CEBFF]" />
                <div>
                  <p className="text-white/78">Address</p>
                  <p className="font-semibold leading-7">
                    {fullAddress}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 size-6 shrink-0 text-[#9CEBFF]" />
                <div>
                  <p className="text-white/78">Service Hours</p>
                  <p className="font-semibold">24×7 Blood Testing Services</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0E5CAD]"
              >
                <PhoneCall className="size-4" />
                Call Now
              </a>
              <a
                href={whatsappUrl("Hello Pathako Lab, I need help with a pathology test.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#28C76F] px-5 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white"
              >
                <Navigation className="size-4" />
                Get Directions
              </a>
            </div>

          </div>

          <div className="min-h-[28rem] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(14,92,173,0.12)] lg:h-full">
            <iframe
              title="Pathako Lab location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
              className="h-full min-h-[28rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-[#0E5CAD] to-[#063B73] p-6 text-white shadow-[0_30px_90px_rgba(14,92,173,0.24)] md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#9CEBFF]">
                Talk to Pathako Lab
              </p>
              <h2 className="font-heading text-balance text-3xl font-bold md:text-5xl">
                Diagnostic Test in Gwalior?
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/78">
                Whether you need a routine blood test, preventive health
                screening, or home sample collection, our team is available to
                assist you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0E5CAD]"
              >
                <PhoneCall className="size-4" />
                Call Now
              </a>
              <a
                href={whatsappUrl("Hello Pathako Lab, I need a diagnostic test in Gwalior.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#28C76F] px-6 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <footer className="bg-[#071C34] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-[#0E5CAD]">
                <Microscope className="size-6" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold">Pathako Lab</p>
                <p className="text-sm text-white/65">Gwalior Diagnostic Services</p>
              </div>
            </div>
            <p className="mt-5 leading-7 text-white/70">
              Pathology testing, blood tests, home collection, and preventive
              health packages under the supervision of Dr. V. Khare.
            </p>
          </div>
          <div>
            <h3 className="font-heading mb-4 font-bold">Quick Links</h3>
            <div className="grid gap-3 text-white/70">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading mb-4 font-bold">Services</h3>
            <div className="grid gap-3 text-white/70">
              {servicePages.slice(0, 4).map((service) => (
                <a key={service.slug} href="#services" className="hover:text-white">
                  {service.shortTitle}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading mb-4 font-bold">Contact Information</h3>
            <div className="grid gap-3 text-white/70">
              <a href={phoneHref} className="hover:text-white">
                {business.phone}
              </a>
              <span>{business.address.street}, {business.address.city}</span>
              <span>Business Hours: 24×7</span>
              <div className="flex gap-3 pt-2">
                <a
                  href={whatsappUrl("Hello Pathako Lab, I need help with a pathology test.")}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Pathako Lab"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#28C76F]"
                >
                  <MessageCircle className="size-5" />
                </a>
                <a
                  href={phoneHref}
                  aria-label="Call Pathako Lab"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#0E5CAD]"
                >
                  <PhoneCall className="size-5" />
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to Pathako Lab"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#00B8D9]"
                >
                  <Navigation className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright © {new Date().getFullYear()} Pathako Lab. All rights reserved.</p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://sintyz.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition hover:text-[#9CEBFF]"
            >
              Sintyz.com
            </a>
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-50 rounded-[1.5rem] bg-white p-3 shadow-[0_22px_70px_rgba(14,92,173,0.28)] ring-1 ring-[#E2EEF9] md:hidden">
        <p className="mb-2 px-1 text-center font-heading text-sm font-bold text-[#1B2A41]">
          Need Help?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={phoneHref}
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#0E5CAD] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(14,92,173,0.22)]"
          >
            <PhoneCall className="size-4" />
            Call Now
          </a>
          <a
            href={whatsappUrl("Hello Pathako Lab, I need help with a pathology test.")}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#28C76F] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(40,199,111,0.24)]"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <a
        href="https://sintyz.com"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0E5CAD] shadow-[0_20px_55px_rgba(14,92,173,0.18)] ring-1 ring-[#E2EEF9] transition hover:-translate-y-1 hover:bg-[#F0FBFF] md:flex"
      >
        <Rocket className="size-4 text-[#28C76F]" />
        Designed by Sintyz
      </a>

    </main>
  );
}
