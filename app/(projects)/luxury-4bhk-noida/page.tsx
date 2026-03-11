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
  title: "Prestigious 4BHK Apartment Interior — Pearl Gateway, Noida",
  description:
    "Melange transformed a 3,000 sq ft 4BHK apartment at Pearl Gateway, Noida in just 6 months. Elegant ceiling designs, bespoke wall finishes, custom furniture, and a seamless luxury finish — delivered with speed and sophistication.",
  keywords: [
    "4BHK interior design Noida",
    "apartment interior designer Noida",
    "luxury apartment renovation Noida",
    "Pearl Gateway Noida interior",
    "custom furniture apartment Noida",
    "interior designer Delhi NCR",
    "Melange interior design Noida",
  ],
  alternates: {
    canonical: "https://melange-work.vercel.app/luxury-4bhk-noida",
  },
  openGraph: {
    url: "https://melange-work.vercel.app/luxury-4bhk-noida",
    title:
      "Prestigious 4BHK Apartment Interior — Pearl Gateway, Noida | Melange",
    description:
      "3,000 sq ft luxury 4BHK apartment interior at Pearl Gateway, Noida. End-to-end design delivered in 6 months with bespoke ceiling designs and custom furniture.",
    images: [
      {
        url: "/adarsh_aggarwal1_1.jpg",
        width: 1200,
        height: 800,
        alt: "4BHK Apartment Interior Noida by Melange",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Prestigious 4BHK Apartment Interior — Pearl Gateway, Noida",
  description:
    "End-to-end interior design for a 3,000 sq ft 4BHK apartment at Pearl Gateway, Noida. Elegant ceilings, custom furniture, and premium finishes delivered in 6 months.",
  url: "https://melange-work.vercel.app/luxury-4bhk-noida",
  image: "https://melange-work.vercel.app/adarsh_aggarwal1_1.jpg",
  creator: {
    "@type": "LocalBusiness",
    name: "Melange by Sangeeta Kapoor",
    url: "https://melange-work.vercel.app",
  },
  locationCreated: {
    "@type": "Place",
    name: "Pearl Gateway, Noida, Uttar Pradesh, India",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const images1 = [
  { image: "/adarsh_aggarwal1_1.jpg" },
  { image: "/adarsh_aggarwal1_2.jpg" },
  { image: "/adarsh_aggarwal1_3.jpg" },
  { image: "/adarsh_aggarwal1_4.jpg" },
];
const centerImage1 = "/adarsh_aggarwal1_5.jpg";

const images2 = [
  { image: "/adarsh_aggarwal2_1.jpg" },
  { image: "/adarsh_aggarwal2_2.jpg" },
  { image: "/adarsh_aggarwal2_3.jpg" },
  { image: "/adarsh_aggarwal2_4.jpg" },
];
const centerImage2 = "/adarsh_aggarwal2_5.jpg";

const images3 = [
  { image: "/adarsh_aggarwal3_1.jpg" },
  { image: "/adarsh_aggarwal3_2.jpg" },
  { image: "/adarsh_aggarwal3_3.jpg" },
  { image: "/adarsh_aggarwal3_4.jpg" },
];
const centerImage3 = "/adarsh_aggarwal3_5.jpg";

const images4 = [
  { image: "/adarsh_aggarwal4_1.jpg" },
  { image: "/adarsh_aggarwal4_2.jpg" },
  { image: "/adarsh_aggarwal4_3.jpg" },
  { image: "/adarsh_aggarwal4_4.jpg" },
];
const centerImage4 = "/adarsh_aggarwal4_5.jpg";

const projectDetails = {
  title: "Prestigious 4BHK Apartment Interior",
  subtitle: "4 BHK apartment (renovation project)",
  details: {
    location: "Pearl Gateway, Noida",
    area: "3000 sq ft",
    duration: "6 months",
    year: "year not found",
  },
  description: [
    "Delivered a breathtaking 4 BHK apartment in Noida in just six months was a masterclass in efficiency and excellence, fueled by our client's swift decision-making.",
    "As their dedicated interior designer, we handled it all—elegant ceiling designs, captivating wall finishes, custom furniture, and seamless execution from start to finish.",
    "The outcome? A beautifully harmonious space brimming with luxury, comfort, and style that exceeds every expectation. This project proves that speed and sophistication can coexist flawlessly.",
  ],
  features: [
    "End-to-end interior design and execution for a 4 BHK apartment in Noida",
    "Rapid project delivery completed within six months through efficient planning",
    "Elegant ceiling designs enhancing visual appeal and spatial character",
    "Captivating wall finishes paired with a refined material palette",
    "Custom-designed furniture tailored to functionality and aesthetics",
    "A harmonious blend of luxury, comfort, and contemporary style",
  ],
  testimonial: {
    quote: "Testimonial content not found",
    author: "Neha & Anant Aggarwal",
    role: "Homeowners",
    image: "not_found",
    clip: "not_found",
  },
};

const reelsData = [
  { embedUrl: "https://www.instagram.com/reel/DJrk78DywCK/embed" },
  { embedUrl: "https://www.instagram.com/reel/DJzRY1NI7uW/embed" },
  { embedUrl: "https://www.instagram.com/reel/DOBXPkIklWj/embed" },
  { embedUrl: "https://www.instagram.com/reel/DJhCq5-oDJe/embed" },
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
      <InstagramReels reels={reelsData} />
    </div>
  );
};

export default page;
