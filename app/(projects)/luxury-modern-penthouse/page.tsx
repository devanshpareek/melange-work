import type { Metadata } from "next";
import React from "react";
import {
  ClientTestimonial,
  ProjectDescription,
} from "../../ProjectDetailsHelper";
import OurWork from "@/components/OurWork";
import InstagramReels from "@/app/components/InstagramReels";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Luxury Modern Penthouse Makeover — 3,000 sq ft, Noida",
  description:
    "Melange redesigned a 3,000 sq ft contemporary penthouse in Noida for the Gupta family. Modern living areas, a dedicated mandir space, study zone, and custom bedrooms — all completed in 11 months.",
  keywords: [
    "penthouse interior design Noida",
    "luxury penthouse makeover India",
    "contemporary penthouse interiors Noida",
    "modern home renovation Noida",
    "custom interior design Noida",
    "interior designer Noida",
    "Melange interior design penthouse",
  ],
  alternates: {
    canonical: "https://xclusiveatmelange.com/luxury-modern-penthouse",
  },
  openGraph: {
    url: "https://xclusiveatmelange.com/luxury-modern-penthouse",
    title: "Luxury Modern Penthouse Makeover — 3,000 sq ft, Noida | Melange",
    description:
      "Contemporary penthouse makeover across 3,000 sq ft in Noida. Modern living areas, custom bedrooms, mandir space, and premium finishes in 11 months.",
    images: [
      {
        url: "/Sec_15_Noida_1_1.jpg",
        width: 1200,
        height: 800,
        alt: "Luxury Modern Penthouse Noida by Melange",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Luxury Modern Penthouse Makeover — Noida",
  description:
    "Complete transformation of a 3,000 sq ft penthouse in Noida. Bright modern living area, dedicated mandir space, study zone, custom bedroom furniture, new flooring, and curated décor — completed in 11 months.",
  url: "https://xclusiveatmelange.com/luxury-modern-penthouse",
  image: "https://xclusiveatmelange.com/Sec_15_Noida_1_1.jpg",
  creator: {
    "@type": "LocalBusiness",
    name: "Melange by Sangeeta Kapoor",
    url: "https://xclusiveatmelange.com",
  },
  locationCreated: {
    "@type": "Place",
    name: "Noida, Uttar Pradesh, India",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const images1 = [
  { image: "/Sec_15_Noida_1_1.jpg" },
  { image: "/Sec_15_Noida_1_2.jpg" },
  { image: "/Sec_15_Noida_1_3.jpg" },
  { image: "/Sec_15_Noida_1_4.jpg" },
];
const centerImage1 = "/Sec_15_Noida_1_5.jpg";

const images2 = [
  { image: "/Sec_15_Noida_2_1.jpg" },
  { image: "/Sec_15_Noida_2_2.jpg" },
  { image: "/Sec_15_Noida_2_3.jpg" },
  { image: "/Sec_15_Noida_2_4.jpg" },
];
const centerImage2 = "/Sec_15_Noida_2_5.jpg";

const images3 = [
  { image: "/Sec_15_Noida_3_1.jpg" },
  { image: "/Sec_15_Noida_3_2.jpg" },
  { image: "/Sec_15_Noida_3_3.jpg" },
  { image: "/Sec_15_Noida_3_4.jpg" },
];
const centerImage3 = "/Sec_15_Noida_3_5.jpg";

const images4 = [
  { image: "/Sec_15_Noida_4_1.jpg" },
  { image: "/Sec_15_Noida_4_2.jpg" },
  { image: "/Sec_15_Noida_4_3.jpg" },
  { image: "/Sec_15_Noida_4_4.jpg" },
];
const centerImage4 = "/Sec_15_Noida_4_5.jpg";

export const projectDetails = {
  title: "Luxury Modern Penthouse Makeover",
  subtitle: "A Contemporary Penthouse in Noida",
  details: {
    location: "Noida",
    area: "3000 sq ft",
    duration: "11 months",
    year: "2023",
  },
  description: [
    "This project involved the complete transformation of a modern penthouse. Our team worked closely with the family to understand their lifestyle and preferences.",
    "This 3000 sq.ft penthouse makeover for Mahesh Gupta includes a bright, modern living area, a peaceful mandir space, a well-planned study zone, and thoughtfully designed bedrooms with custom furniture, new flooring, and curated décor — all completed in 10 months.",
  ],
  features: [
    "Complete penthouse transformation across 3000 sq.ft",
    "Bright, modern living area design",
    "Dedicated peaceful mandir space",
    "Well-planned study zone",
    "Custom-designed bedroom furniture",
    "Curated décor with premium flooring",
  ],
  testimonial: {
    quote:
      "Working with MELANGE was an absolute pleasure. They transformed our house into a home that perfectly reflects our style and meets all our functional needs. The attention to detail and quality of craftsmanship exceeded our expectations.",
    author: "Richa and Mahesh Gupta",
    role: "Homeowners, Faridabad",
  },
};

const reelsData = [
  { embedUrl: "https://www.instagram.com/reel/DEH7ugHIq2m/embed" },
  { embedUrl: "https://www.instagram.com/reel/DH1PzCBoGZv/embed" },
  { embedUrl: "https://www.instagram.com/reel/DFKu484yHFW/embed" },
  { embedUrl: "https://www.instagram.com/reel/DE7mbE9y81K/embed" },
  { embedUrl: "https://www.instagram.com/reel/DEsOu3Uyn9r/embed" },
  { embedUrl: "https://www.instagram.com/reel/DEfGE00IPpa/embed" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const page = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDescription project={projectDetails} />
      <OurWork
        showTitle={false}
        centerImage={centerImage1}
        products={images1}
      />
      <OurWork
        showTitle={false}
        centerImage={centerImage2}
        products={images2}
      />
      <OurWork
        showTitle={false}
        centerImage={centerImage3}
        products={images3}
      />
      <OurWork
        showTitle={false}
        centerImage={centerImage4}
        products={images4}
      />
      <ClientTestimonial testimonial={projectDetails.testimonial} />
      <InstagramReels reels={reelsData} />
    </div>
  );
};

export default page;
