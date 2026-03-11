import type { Metadata } from "next";
import React from "react";
import {
  ClientTestimonial,
  ProjectDescription,
} from "../../ProjectDetailsHelper";
import OurWork from "@/components/OurWork";
import TestimonialVideo from "@/app/components/TestimonialVideo";
import InstagramReels from "@/app/components/InstagramReels";

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Modern Villa Interior Design — 6,000 sq ft, Faridabad",
  description:
    "Melange designed a stunning 6,000 sq ft modern villa across three floors in Faridabad. Soaring ceilings, premium Italian marble, custom furniture, designer lighting — a complete interior transformation delivered over 2 years.",
  keywords: [
    "modern villa interior Faridabad",
    "independent house interior design Faridabad",
    "luxury villa interior designer",
    "3 floor house interior design India",
    "custom furniture home design Faridabad",
    "interior designer Faridabad",
    "Melange interior design Faridabad",
  ],
  alternates: {
    canonical: "https://melange-work.vercel.app/modern-villa-faridabad",
  },
  openGraph: {
    url: "https://melange-work.vercel.app/modern-villa-faridabad",
    title: "Modern Villa Interior Design — 6,000 sq ft, Faridabad | Melange",
    description:
      "Complete interior design for a 6,000 sq ft modern villa across three floors in Faridabad. Bespoke furniture, premium finishes, and designer lighting.",
    images: [
      {
        url: "/AshishGupta1_1.jpg",
        width: 1200,
        height: 800,
        alt: "Modern Villa Interior Faridabad by Melange",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Modern Villa Interior — Faridabad",
  description:
    "End-to-end interior design for a 6,000 sq ft independent house across three floors in Faridabad. Features double-height spaces, premium Italian marble, custom furniture, and layered designer lighting.",
  url: "https://melange-work.vercel.app/modern-villa-faridabad",
  image: "https://melange-work.vercel.app/AshishGupta1_1.jpg",
  creator: {
    "@type": "LocalBusiness",
    name: "Melange by Sangeeta Kapoor",
    url: "https://melange-work.vercel.app",
  },
  locationCreated: {
    "@type": "Place",
    name: "Faridabad, Haryana, India",
  },
  review: {
    "@type": "Review",
    reviewBody:
      "We are in love with the space. Sangeeta ma'am truly understood each one of us and the interiors were done wonderfully. Every furniture, every fabric, really reflects us.",
    author: { "@type": "Person", name: "Shreya Gupta" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const images1 = [
  { image: "/AshishGupta1_1.jpg" },
  { image: "/AshishGupta1_2.jpg" },
  { image: "/AshishGupta1_3.jpg" },
  { image: "/AshishGupta1_4.jpg" },
];
const centerImage1 = "/AshishGupta1_5.jpg";

const images2 = [
  { image: "/AshishGupta2_1.jpg" },
  { image: "/AshishGupta2_2.jpg" },
  { image: "/AshishGupta2_3.jpg" },
  { image: "/AshishGupta2_4.jpg" },
];
const centerImage2 = "/AshishGupta2_5.jpg";

const projectDetails = {
  title: "Modern Villa Interior",
  subtitle: "Independent house (3 floors + terrace) end to end project.",
  details: {
    location: "Faridabad",
    area: "6000 sq ft",
    duration: "2 years",
    year: "2025",
  },
  description: [
    "Crafting a breathtaking 6000 sq ft independent house spanning three majestic floors was a testament to visionary design on a grand scale.",
    "As their expert interior designer, we orchestrated every element—from soaring ceiling designs and premium flooring to stunning wall finishes, custom furniture, and seamless integration throughout.",
    "The final masterpiece delivers timeless luxury, fluid flow between floors, and spaces that inspire awe and comfort in equal measure.",
    "This project showcases our passion for elevating homes into legacies of elegance.",
  ],
  features: [
    "Bespoke interior planning across three expansive floors",
    "Double-height living spaces with statement ceiling designs",
    "Custom-designed furniture and built-in storage solutions",
    "Premium Italian marble and refined wooden finishes",
    "Designer lighting with layered ambient and accent concepts",
    "Seamless spatial flow and cohesive design throughout",
  ],
  testimonial: {
    quote:
      "We are in love with the space. Hi, my name is Shreya Gupta and working with Milans was a wonderful experience. Sangeeta ma'am truly understood each one of us and the interiors were done wonderfully. If you see us, you will understand what we mean because every furniture, every fabric, like really reflects us and the team also really understood us well.",
    author: "Gupta Residence",
    role: "Homeowners",
    clip: "/AshishGuptaTestemonial.mp4",
    thumbnail: "/AshishGuptaTestemonialThumbnail.png",
  },
};

const reelsData = [
  { embedUrl: "https://www.instagram.com/reel/DRWhEawEpeF/embed" },
  { embedUrl: "https://www.instagram.com/reel/DSmBu8-kmF2/embed" },
  { embedUrl: "https://www.instagram.com/reel/DSXn4rkEh9x/embed" },
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
      <ClientTestimonial testimonial={projectDetails.testimonial} />
      <TestimonialVideo
        thumbnail={projectDetails.testimonial.thumbnail}
        video={projectDetails.testimonial.clip}
      />
      <InstagramReels reels={reelsData} />
    </div>
  );
};

export default page;
