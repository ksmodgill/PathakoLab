import { JsonLd } from "@/components/JsonLd";
import { PathakoLanding } from "@/components/PathakoLanding";
import {
  breadcrumbSchema,
  business,
  faqSchema,
  homepageFaqs,
  localBusinessSchema,
  physicianSchema,
} from "@/lib/pathako-data";

export default function Home() {
  const visibleFaqs = homepageFaqs.slice(0, 20);
  const schemas = [
    localBusinessSchema(),
    physicianSchema(),
    faqSchema(visibleFaqs),
    breadcrumbSchema([{ name: "Home", url: business.url }]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PathakoLanding />
    </>
  );
}
