import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Melange by Sangeeta Kapoor | Luxury Interior Design Studio, Gurgaon",
  description:
    "Melange by Sangeeta Kapoor is a luxury interior design studio based in Gurgaon with 25+ years of experience crafting bespoke homes across India and the UK. Specialising in end-to-end residential interiors — from design to installation.",
  alternates: {
    canonical: "https://xclusiveatmelange.com",
  },
  openGraph: {
    url: "https://xclusiveatmelange.com",
    title:
      "Melange by Sangeeta Kapoor | Luxury Interior Design Studio, Gurgaon",
    description:
      "Luxury interior design studio with 25+ years of experience. End-to-end residential interiors across India and the UK.",
    images: [
      {
        url: "/Slider1.jpg",
        width: 1200,
        height: 630,
        alt: "Melange by Sangeeta Kapoor — Luxury Interior Design",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InteriorDesigner"],
      "@id": "https://xclusiveatmelange.com/#business",
      name: "Melange by Sangeeta Kapoor",
      description:
        "Luxury interior design studio based in Gurgaon with over 25 years of experience designing bespoke homes across India and the UK.",
      url: "https://xclusiveatmelange.com",
      telephone: ["+91-9810163804", "+91-9560025169"],
      email: "sangeeta.xclusivecreations@gmail.com",
      foundingDate: "1997",
      founder: {
        "@type": "Person",
        name: "Sangeeta Kapoor",
        jobTitle: "Interior Designer & Founder",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "H-11/3, DLF City Phase-1",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        postalCode: "122002",
        addressCountry: "IN",
      },
      areaServed: ["Gurgaon", "Faridabad", "Noida", "Delhi", "United Kingdom"],
      priceRange: "₹₹₹₹",
      image: "https://xclusiveatmelange.com/Slider1.jpg",
      logo: "https://xclusiveatmelange.com/logo.png",
      sameAs: ["https://www.instagram.com/melange.by.sangeetakapoor/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://xclusiveatmelange.com/#website",
      url: "https://xclusiveatmelange.com",
      name: "Melange by Sangeeta Kapoor",
      publisher: {
        "@id": "https://xclusiveatmelange.com/#business",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
