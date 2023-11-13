import About from "@/modules/about/About";
import HeroTop from "@/modules/hero-top/HeroTop";
import Projects from "@/modules/projects/Projects";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cedric-webdevelopment.fr/"),
  title: "Cédric Gache - Développeur front-end",
  description:
    "Portfolio de Cédric Gache - Développeur front-end à Montpellier",
  openGraph: {
    type: "website",
    title: "Cédric Gache - Développeur front-end",
    description: "Développeur front-end à Montpellier",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montpellier",
    addressRegion: "FR",
    postalCode: "34000",
  },
  email: "mailto:cedricwebdevelopment@gmail.com",
  jobTitle: "Développeur web - Front-end",
  name: "Cédric Gache",
};

export default function Home() {
  return (
    <main>
      <HeroTop />
      <About />
      <Suspense fallback={<p>Chargement en cours ...</p>}>
        <Projects />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
