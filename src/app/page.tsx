import About from "@/modules/about/About";
import HeroTop from "@/modules/hero-top/HeroTop";
import Projects from "@/modules/projects/Projects";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Cédric Gache - Développeur front-end",
  description: "Portfolio de Cédric Gache - Développeur front-end à Montpellier",
  openGraph : {
    type: "website",
    title : "Cédric Gache - Développeur front-end",
    description : "Développeur front-end à Montpellier",
    
  }
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
  
  }

export default function Home() {
  return (
    <main >
      <HeroTop/>
      <About/>
      <Projects/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
