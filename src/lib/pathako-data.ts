export const business = {
  name: "Pathako Lab",
  doctor: "Dr. V. Khare",
  doctorTitle: "M.D. Pathologist",
  phone: "6266205671",
  whatsapp: "916266205671",
  address: {
    street: "C-14, Glory Villa, Shatabdipuram",
    city: "Gwalior",
    region: "Madhya Pradesh",
    postalCode: "474005",
    country: "IN",
  },
  hours: "24×7 Blood Testing Services",
  url: "https://pathakolab.com",
};

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;
export const phoneHref = `tel:${business.phone}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const localAreas = [
  "Shatabdipuram",
  "Deen Dayal Nagar",
  "City Centre",
  "Morar",
  "Lashkar",
  "Thatipur",
  "Gola Ka Mandir",
  "Nearby residential areas",
  "Gwalior",
];

export const homepageFaqs = [
  {
    question: "How long do blood test reports usually take?",
    answer:
      "Many routine blood test reports are available the same day. Some specialized tests may need additional time, and the team will tell you the expected reporting time before collection.",
  },
  {
    question: "Is home sample collection available in Gwalior?",
    answer:
      "Yes. Pathako Lab provides home sample collection in Gwalior. You can call or WhatsApp to share your address, preferred time, and test requirement.",
  },
  {
    question: "Do I need fasting before a blood test?",
    answer:
      "Some tests, such as fasting blood sugar and lipid profile, may require fasting. Please confirm the preparation instructions when you call or WhatsApp the lab.",
  },
  {
    question: "How will I receive my reports?",
    answer:
      "Reports can be collected from the lab or shared digitally on WhatsApp when available, so you can discuss them with your doctor.",
  },
  {
    question: "Are emergency tests available?",
    answer:
      "For urgent testing needs, call Pathako Lab directly on 6266205671. The team will confirm test availability, sample timing, and expected report delivery.",
  },
  {
    question: "Do you provide 24-hour service?",
    answer:
      "Pathako Lab provides 24×7 blood testing support. Calling before visiting is recommended for urgent or late-night tests.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Please call or WhatsApp the lab to confirm current payment options before collection or home visit.",
  },
  {
    question: "Can I request a test on WhatsApp?",
    answer:
      "Yes. You can send your name, phone number, test name, and preferred timing on WhatsApp. The team will guide you on preparation and collection.",
  },
  {
    question: "Can senior citizens request home collection?",
    answer:
      "Yes. Home collection can be scheduled for senior citizens and patients who find it difficult to visit the laboratory.",
  },
  {
    question: "Is a doctor's prescription required?",
    answer:
      "A prescription is helpful, especially for specific investigations. Routine health tests can also be discussed with the lab team when you call or WhatsApp.",
  },
  {
    question: "Can reports be shared directly with my doctor?",
    answer:
      "Digital reports can be forwarded to your doctor after you receive them. For any special reporting need, mention it when you call or WhatsApp.",
  },
  {
    question: "What should I do before a urine test?",
    answer:
      "Ask the team for collection instructions. In general, use a clean container and follow the timing or sample guidance given for your specific test.",
  },
  {
    question: "How do I prepare for thyroid testing?",
    answer:
      "Many thyroid tests do not require fasting, but medicine timing can matter for some patients. Confirm instructions with your doctor or the lab before collection.",
  },
  {
    question: "Can diabetic patients request regular monitoring tests?",
    answer:
      "Yes. Fasting sugar, post-meal sugar, HbA1c, and kidney-related tests can be scheduled for regular diabetes monitoring as advised by your doctor.",
  },
  {
    question: "Do you offer preventive health checkups?",
    answer:
      "Yes. Preventive health checkups are available for adults, families, senior citizens, and people managing chronic conditions.",
  },
  {
    question: "Which areas in Gwalior do you serve for home visits?",
    answer:
      "Home collection is available across nearby Gwalior areas depending on timing and staff availability. Share your location on WhatsApp for confirmation.",
  },
  {
    question: "Can I arrange tests for my family together?",
    answer:
      "Yes. Multiple family members can be scheduled together. Share the names and required tests when you call or WhatsApp.",
  },
  {
    question: "Do you test for fever-related illnesses?",
    answer:
      "Testing support is available for common fever investigations such as CBC, dengue, malaria, typhoid, and other tests advised by your doctor.",
  },
  {
    question: "Are test prices listed online final?",
    answer:
      "Package prices are shown as starting prices. Please confirm the current price for your exact test or package by phone or WhatsApp.",
  },
  {
    question: "What should I bring when visiting the lab?",
    answer:
      "Bring your prescription if you have one, your phone number, and any preparation details shared by your doctor or the lab team.",
  },
  {
    question: "Can corporate employees schedule health checkups?",
    answer:
      "Yes. Corporate employees and small teams can enquire about preventive health checkups and convenient sample collection timing.",
  },
  {
    question: "Who reviews the reports?",
    answer:
      "Reports are reviewed under the supervision of Dr. V. Khare, M.D. Pathologist, according to the lab's reporting process.",
  },
];

export const patientReviews = [
  {
    initials: "RS",
    name: "Rajesh Sharma",
    area: "Shatabdipuram, Gwalior",
    date: "12 May 2026",
    rating: 5,
    review:
      "I called for my father's sugar and kidney tests. The team explained the fasting requirement and shared the report on WhatsApp the same day.",
  },
  {
    initials: "NG",
    name: "Neha Gupta",
    area: "Thatipur, Gwalior",
    date: "28 Apr 2026",
    rating: 5,
    review:
      "Arranging a thyroid profile on WhatsApp was simple. The collection was clean and the report format was easy for my doctor to read.",
  },
  {
    initials: "AS",
    name: "Amit Saxena",
    area: "City Center, Gwalior",
    date: "19 Apr 2026",
    rating: 5,
    review:
      "We use Pathako Lab for routine family checkups. The staff is calm, responsive, and clear about reporting timelines.",
  },
  {
    initials: "SJ",
    name: "Sunita Jain",
    area: "Morar, Gwalior",
    date: "04 Apr 2026",
    rating: 5,
    review:
      "Home collection helped my mother avoid travel. The sample collector followed hygiene steps and arrived at the confirmed time.",
  },
  {
    initials: "VT",
    name: "Vikas Tomar",
    area: "Lashkar, Gwalior",
    date: "21 Mar 2026",
    rating: 5,
    review:
      "I needed fever tests and called before visiting. The team guided me properly and told me when to expect the report.",
  },
  {
    initials: "PM",
    name: "Pooja Mehra",
    area: "Gola Ka Mandir, Gwalior",
    date: "08 Mar 2026",
    rating: 5,
    review:
      "The communication was good from the first call to report delivery. I liked that the formality was minimal and the staff was polite.",
  },
];

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  introduction: string;
  symptoms: string[];
  whyNeeded: string;
  whoShouldTest: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "blood-testing",
    title: "Blood Testing in Gwalior",
    shortTitle: "Blood Testing",
    metaDescription:
      "Call or WhatsApp Pathako Lab for routine blood tests in Gwalior, including CBC, sugar, thyroid, liver, kidney, lipid, and fever-related investigations.",
    introduction:
      "Blood testing helps your doctor understand infection, anemia, sugar levels, organ function, and other health markers. Pathako Lab offers routine blood test in Gwalior with clear preparation guidance and report delivery support.",
    symptoms: ["Fever or weakness", "Fatigue", "Dizziness", "Unexplained weight change", "Body pain", "Routine health monitoring"],
    whyNeeded:
      "A blood test can support diagnosis, monitor ongoing treatment, and help detect changes before symptoms become serious.",
    whoShouldTest: ["Patients with a doctor's prescription", "Senior citizens", "Diabetic patients", "People with fever", "Families planning preventive checkups"],
    benefits: ["Clear sample instructions", "Digital report sharing", "Home sample collection in Gwalior when available", "Reports reviewed through the lab process"],
    faqs: [
      {
        question: "Can I request a blood test without visiting the lab first?",
        answer: "Yes. Call or WhatsApp the test name and preferred timing. The team will guide you on collection and preparation.",
      },
      {
        question: "Do all blood tests need fasting?",
        answer: "No. Fasting depends on the test. Please confirm instructions before collection.",
      },
    ],
    cta: "Need a Blood Test Today?",
  },
  {
    slug: "diabetes-testing",
    title: "Diabetes Testing in Gwalior",
    shortTitle: "Diabetes Testing",
    metaDescription:
      "Schedule fasting sugar, post-meal sugar, HbA1c, and diabetes monitoring tests in Gwalior with Pathako Lab.",
    introduction:
      "Diabetes testing helps track blood sugar control and supports treatment decisions. Pathako Lab provides fasting sugar, post-meal sugar, HbA1c, and related monitoring tests for patients in Gwalior.",
    symptoms: ["Frequent urination", "Increased thirst", "Unexplained tiredness", "Slow wound healing", "Blurred vision", "Known diabetes"],
    whyNeeded:
      "Regular monitoring helps your doctor adjust diet, medicines, and follow-up care based on current sugar control.",
    whoShouldTest: ["Known diabetic patients", "People with family history of diabetes", "Pregnant women advised by a doctor", "Adults with weight or lifestyle risk factors", "Patients with high fasting sugar history"],
    benefits: ["Fasting and post-meal testing guidance", "HbA1c monitoring support", "Home collection option", "Reports suitable for doctor review"],
    faqs: [
      {
        question: "What is HbA1c used for?",
        answer: "HbA1c shows average blood sugar control over the previous two to three months.",
      },
      {
        question: "When should post-meal sugar be tested?",
        answer: "It is commonly collected about two hours after meals, but follow your doctor's advice or lab guidance.",
      },
    ],
    cta: "Need Diabetes Monitoring?",
  },
  {
    slug: "thyroid-testing",
    title: "Thyroid Testing in Gwalior",
    shortTitle: "Thyroid Testing",
    metaDescription:
      "Call or WhatsApp Pathako Lab for T3, T4, and TSH thyroid testing in Gwalior with clear report sharing and preparation guidance.",
    introduction:
      "Thyroid tests measure hormone levels that can affect energy, weight, mood, heart rate, and menstrual health. Pathako Lab offers thyroid testing in Gwalior for routine and doctor-advised evaluation.",
    symptoms: ["Tiredness", "Weight gain or weight loss", "Hair fall", "Mood changes", "Irregular periods", "Palpitations"],
    whyNeeded:
      "Thyroid testing helps identify whether symptoms may be linked to underactive or overactive thyroid function.",
    whoShouldTest: ["Patients advised TSH, T3, or T4", "People on thyroid medication", "Women with menstrual irregularity", "People with unexplained weight change", "Patients with family history"],
    benefits: ["T3, T4, TSH testing support", "Digital report sharing", "Guidance on medicine timing where relevant", "Convenient help by phone or WhatsApp"],
    faqs: [
      {
        question: "Does thyroid testing require fasting?",
        answer: "Many thyroid tests do not need fasting, but medicine timing can matter. Please confirm before collection.",
      },
      {
        question: "Can thyroid tests be done at home?",
        answer: "Yes, home sample collection may be scheduled in Gwalior based on availability.",
      },
    ],
    cta: "Questions About Thyroid Tests?",
  },
  {
    slug: "liver-function-testing",
    title: "Liver Function Testing in Gwalior",
    shortTitle: "Liver Function Testing",
    metaDescription:
      "Call or WhatsApp Pathako Lab for Liver Function Test in Gwalior, including SGOT, SGPT, bilirubin, proteins, and related liver markers.",
    introduction:
      "Liver Function Tests help assess liver enzymes, bilirubin, and proteins. These tests are commonly advised for jaundice symptoms, medication monitoring, alcohol-related concerns, and general health screening.",
    symptoms: ["Yellowing of eyes or skin", "Dark urine", "Abdominal discomfort", "Nausea", "Loss of appetite", "Unexplained tiredness"],
    whyNeeded:
      "LFT results can help your doctor assess liver inflammation, bile flow, and the effect of medicines or illness on liver function.",
    whoShouldTest: ["Patients advised LFT", "People with jaundice symptoms", "Patients on long-term medicines", "People with alcohol-related risk", "Those taking preventive health checkups"],
    benefits: ["Common liver markers covered", "Report sharing for doctor consultation", "Home collection option", "Clear preparation instructions"],
    faqs: [
      {
        question: "Is fasting required for LFT?",
        answer: "Fasting may not be needed for every LFT, but your doctor may advise it with other tests. Confirm by phone or WhatsApp.",
      },
      {
        question: "Can LFT detect all liver diseases?",
        answer: "LFT supports evaluation but does not diagnose every liver condition by itself. Your doctor will interpret results with symptoms and history.",
      },
    ],
    cta: "Need Liver Function Testing?",
  },
  {
    slug: "kidney-function-testing",
    title: "Kidney Function Testing in Gwalior",
    shortTitle: "Kidney Function Testing",
    metaDescription:
      "Schedule Kidney Function Test in Gwalior at Pathako Lab for urea, creatinine, uric acid, electrolytes, and related monitoring.",
    introduction:
      "Kidney Function Tests help check how well the kidneys are filtering waste and maintaining body balance. They are important for diabetes, blood pressure, swelling, and medication monitoring.",
    symptoms: ["Swelling in feet or face", "High blood pressure", "Reduced urine output", "Fatigue", "Diabetes", "Known kidney concerns"],
    whyNeeded:
      "Kidney testing can help your doctor monitor creatinine, urea, and related markers before treatment decisions are made.",
    whoShouldTest: ["Diabetic patients", "People with high blood pressure", "Senior citizens", "Patients on kidney-affecting medicines", "Patients advised KFT by a doctor"],
    benefits: ["Routine kidney markers", "Useful for chronic disease monitoring", "Digital reports", "Home sample collection support"],
    faqs: [
      {
        question: "How often should diabetic patients check kidney function?",
        answer: "Your doctor will decide the frequency. Many diabetic patients are advised periodic kidney monitoring.",
      },
      {
        question: "Can KFT be booked with urine testing?",
        answer: "Yes. Kidney-related blood tests and urine tests can be booked together when advised.",
      },
    ],
    cta: "Ask About Kidney Function Testing",
  },
  {
    slug: "cholesterol-testing",
    title: "Cholesterol Testing in Gwalior",
    shortTitle: "Cholesterol Testing",
    metaDescription:
      "Call or WhatsApp Pathako Lab for lipid profile and cholesterol testing in Gwalior for heart-risk monitoring and preventive checkups.",
    introduction:
      "A lipid profile measures cholesterol and triglyceride levels that help your doctor assess heart and lifestyle-related risk. Pathako Lab provides cholesterol testing in Gwalior with preparation guidance.",
    symptoms: ["Family history of heart disease", "High blood pressure", "Diabetes", "Overweight", "Sedentary lifestyle", "Preventive screening need"],
    whyNeeded:
      "Cholesterol testing helps identify risk factors that may need lifestyle changes, medicine review, or follow-up care.",
    whoShouldTest: ["Adults advised lipid profile", "Diabetic patients", "People with heart-risk factors", "Corporate employees", "Senior citizens"],
    benefits: ["Lipid profile testing", "Fasting guidance when needed", "Useful for preventive checkups", "Digital report delivery"],
    faqs: [
      {
        question: "Does lipid profile require fasting?",
        answer: "Fasting may be advised for some lipid profiles. Confirm the instruction before your sample is collected.",
      },
      {
        question: "Can cholesterol be checked with a health package?",
        answer: "Yes. Lipid profile can be included in preventive and senior citizen packages.",
      },
    ],
    cta: "Ask About Cholesterol Testing",
  },
  {
    slug: "vitamin-testing",
    title: "Vitamin Testing in Gwalior",
    shortTitle: "Vitamin Testing",
    metaDescription:
      "Schedule Vitamin D, Vitamin B12, and related vitamin testing in Gwalior at Pathako Lab.",
    introduction:
      "Vitamin testing can help evaluate deficiencies that may contribute to tiredness, body pain, nerve symptoms, or bone health concerns. Pathako Lab offers commonly requested vitamin tests in Gwalior.",
    symptoms: ["Persistent tiredness", "Body ache", "Bone pain", "Tingling or numbness", "Low sunlight exposure", "Dietary restrictions"],
    whyNeeded:
      "Vitamin test results help your doctor decide whether supplementation or further evaluation is needed.",
    whoShouldTest: ["People with deficiency symptoms", "Senior citizens", "Vegetarian patients advised B12", "Patients with bone health concerns", "People taking preventive screening"],
    benefits: ["Vitamin D and B12 testing support", "Easy phone guidance", "Home collection option", "Reports shared digitally when available"],
    faqs: [
      {
        question: "Can I start supplements before testing?",
        answer: "Discuss supplements with your doctor. Testing first may help assess current levels.",
      },
      {
        question: "Is fasting needed for vitamin tests?",
        answer: "Preparation varies by test. Confirm instructions before collection.",
      },
    ],
    cta: "Ask About Vitamin Testing",
  },
  {
    slug: "urine-testing",
    title: "Urine Testing in Gwalior",
    shortTitle: "Urine Testing",
    metaDescription:
      "Call or WhatsApp Pathako Lab for urine routine examination and urine testing in Gwalior for infection, sugar, protein, and routine screening.",
    introduction:
      "Urine testing helps screen for infection, sugar, protein, and other routine markers. It is often advised for fever, urinary symptoms, pregnancy care, diabetes monitoring, and preventive checkups.",
    symptoms: ["Burning urination", "Frequent urination", "Lower abdominal pain", "Fever", "Diabetes monitoring", "Routine screening"],
    whyNeeded:
      "A urine routine examination gives useful information about urinary tract health and can support further medical evaluation.",
    whoShouldTest: ["Patients with urinary symptoms", "Pregnant women advised by a doctor", "Diabetic patients", "People with fever", "Routine health checkup patients"],
    benefits: ["Clear sample collection guidance", "Routine urine examination", "Can be combined with blood tests", "Digital report sharing"],
    faqs: [
      {
        question: "How should I collect a urine sample?",
        answer: "Use the container and instructions provided by the lab. Follow any timing guidance given for your specific test.",
      },
      {
        question: "Can urine and blood samples be collected together?",
        answer: "Yes, when tests are booked together the team can guide you on both samples.",
      },
    ],
    cta: "Need Urine Testing?",
  },
  {
    slug: "preventive-health-checkups",
    title: "Preventive Health Checkups in Gwalior",
    shortTitle: "Preventive Health Checkups",
    metaDescription:
      "Explore preventive health checkups in Gwalior at Pathako Lab for families, senior citizens, diabetic patients, and working professionals.",
    introduction:
      "Preventive health checkups help track important health markers before problems become more difficult to manage. Pathako Lab offers practical health packages for adults, families, senior citizens, and corporate employees in Gwalior.",
    symptoms: ["Routine annual checkup", "Family history of illness", "Diabetes or blood pressure risk", "Work stress", "Senior citizen monitoring", "Lifestyle risk factors"],
    whyNeeded:
      "Regular screening helps your doctor review sugar, cholesterol, organ function, blood count, and other markers in one place.",
    whoShouldTest: ["Adults above 30", "Senior citizens", "Corporate employees", "Diabetic patients", "Families planning annual screening"],
    benefits: ["Focused package options", "Convenient phone guidance", "Home collection support", "Reports ready for doctor consultation"],
    faqs: [
      {
        question: "Which health package should I choose?",
        answer: "Share your age, health concern, and doctor's advice. The team can help you choose a suitable package.",
      },
      {
        question: "Can a family arrange checkups together?",
        answer: "Yes. Family health checkups can be scheduled together for convenience.",
      },
    ],
    cta: "Plan a Preventive Checkup",
  },
  {
    slug: "home-sample-collection",
    title: "Home Sample Collection in Gwalior",
    shortTitle: "Home Sample Collection",
    metaDescription:
      "Schedule home sample collection in Gwalior with Pathako Lab for routine blood tests, diabetes monitoring, thyroid tests, and health checkups.",
    introduction:
      "Home sample collection is helpful for senior citizens, busy professionals, patients with mobility difficulty, and families who prefer collection at home. Pathako Lab offers home sample collection in Gwalior with appointment-based coordination.",
    symptoms: ["Difficulty visiting the lab", "Senior citizen care", "Regular diabetes monitoring", "Family checkups", "Post-illness follow-up", "Busy work schedule"],
    whyNeeded:
      "A home visit can make testing easier while still allowing samples to be processed through the lab's diagnostic workflow.",
    whoShouldTest: ["Senior citizens", "Patients advised rest", "Families arranging multiple tests", "Working professionals", "Patients needing repeat monitoring"],
    benefits: ["Convenient scheduling", "Sterile collection practice", "Reduced travel", "Digital report sharing"],
    faqs: [
      {
        question: "How do I schedule home collection?",
        answer: "Call or WhatsApp your name, address, test name, and preferred timing. The team will confirm availability.",
      },
      {
        question: "Is home collection available at night?",
        answer: "Pathako Lab offers 24×7 blood testing support. Call directly to confirm urgent or late-night home visit availability.",
      },
    ],
    cta: "Need Home Collection?",
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${business.url}/#pathako-lab`,
    name: business.name,
    url: business.url,
    telephone: business.phone,
    image: `${business.url}/images/pathology-lab-technician-microscope.webp`,
    priceRange: "Rs.",
    medicalSpecialty: "Pathology",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: [
      business.address.city,
      business.address.region,
      ...localAreas,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${business.url}/#dr-v-khare`,
    name: business.doctor,
    honorificSuffix: business.doctorTitle,
    medicalSpecialty: "Pathology",
    worksFor: {
      "@id": `${business.url}/#pathako-lab`,
    },
    address: localBusinessSchema().address,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
