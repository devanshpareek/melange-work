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
  title: "27,000 sq ft Luxury Residence Interior — Faridabad",
  description:
    "An end-to-end 27,000 sq ft luxury residence designed by Melange for the Aggarwal family in Faridabad. Three floors of bespoke interiors featuring multiple living areas, private theatre rooms, custom furniture, and handcrafted detailing — completed over 2 years.",
  keywords: [
    "luxury residence interior Faridabad",
    "end to end home design Faridabad",
    "large home interior designer India",
    "custom furniture interior design",
    "bespoke home interiors Faridabad",
    "interior designer Faridabad",
    "Melange interior design project",
  ],
  alternates: {
    canonical: "https://xclusiveatmelange.com/luxury-residence-interior",
  },
  openGraph: {
    url: "https://xclusiveatmelange.com/luxury-residence-interior",
    title: "27,000 sq ft Luxury Residence Interior — Faridabad | Melange",
    description:
      "End-to-end design of a 27,000 sq ft luxury residence in Faridabad. Multiple living areas, theatre rooms, and handcrafted furniture across three floors.",
    images: [
      {
        url: "/Melange_Faridabad1_3.jpg",
        width: 1200,
        height: 800,
        alt: "Luxury Residence Interior Faridabad by Melange",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Luxury Residence Interior — Faridabad",
  description:
    "A sprawling 27,000 sq ft luxury residence designed end-to-end by Melange by Sangeeta Kapoor in Faridabad. Includes multiple living and dining areas, private theatre rooms, custom wardrobes, and handcrafted furniture.",
  url: "https://xclusiveatmelange.com/luxury-residence-interior",
  image: "https://xclusiveatmelange.com/Melange_Faridabad1_3.jpg",
  creator: {
    "@type": "LocalBusiness",
    name: "Melange by Sangeeta Kapoor",
    url: "https://xclusiveatmelange.com",
  },
  locationCreated: {
    "@type": "Place",
    name: "Faridabad, Haryana, India",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const images1 = [
  { image: "/SashiAggarwal1_1.jpg" },
  { image: "/SashiAggarwal1_2.jpg" },
  { image: "/SashiAggarwal1_3.jpg" },
  { image: "/SashiAggarwal1_4.jpg" },
];
const centerImage1 = "/SashiAggarwal1_5.jpg";

const images2 = [
  { image: "/SashiAggarwal2_1.jpg" },
  { image: "/SashiAggarwal2_2.jpg" },
  { image: "/SashiAggarwal2_3.jpg" },
  { image: "/SashiAggarwal2_4.jpg" },
];
const centerImage2 = "/SashiAggarwal2_5.jpg";

const images3 = [
  { image: "/SashiAggarwal3_1.jpg" },
  { image: "/SashiAggarwal3_2.jpg" },
  { image: "/SashiAggarwal3_3.jpg" },
  { image: "/SashiAggarwal3_4.jpg" },
];
const centerImage3 = "/SashiAggarwal3_5.jpg";

const images4 = [
  { image: "/SashiAggarwal4_1.jpg" },
  { image: "/SashiAggarwal4_2.jpg" },
  { image: "/SashiAggarwal4_3.jpg" },
  { image: "/SashiAggarwal4_4.jpg" },
];
const centerImage4 = "/SashiAggarwal4_5.jpg";

const images5 = [
  { image: "/Melange_Faridabad1_1.jpg" },
  { image: "/Melange_Faridabad1_2.jpg" },
  { image: "/Melange_Faridabad1_3.jpg" },
  { image: "/Melange_Faridabad1_4.jpg" },
];
const centerImage5 = "/Melange_Faridabad1_5.jpg";

const images6 = [
  { image: "/Melange_Faridabad2_1.jpg" },
  { image: "/Melange_Faridabad2_2.jpg" },
  { image: "/Melange_Faridabad2_3.jpg" },
  { image: "/Melange_Faridabad2_4.jpg" },
];
const centerImage6 = "/Melange_Faridabad2_5.jpg";

const images7 = [
  { image: "/Melange_Faridabad3_1.jpg" },
  { image: "/Melange_Faridabad3_2.jpg" },
  { image: "/Melange_Faridabad3_3.jpg" },
  { image: "/Melange_Faridabad3_4.jpg" },
];
const centerImage7 = "/Melange_Faridabad3_5.jpg";

const images8 = [
  { image: "/Melange_Faridabad4_1.jpg" },
  { image: "/Melange_Faridabad4_2.jpg" },
  { image: "/Melange_Faridabad4_3.jpg" },
  { image: "/Melange_Faridabad4_4.jpg" },
];
const centerImage8 = "/Melange_Faridabad4_5.jpg";

const projectDetails = {
  title: "Luxury Residence Interior",
  subtitle: "Independent house (3 floors + terrace) end to end project.",
  details: {
    location: "Faridabad",
    area: "27000 sq ft",
    duration: "2 years",
    year: "2025",
  },
  description: [
    "A sprawling 27,000 sq.ft luxury residence for Mukesh Aagarwal, designed entirely by us — from structure to soul.",
    "The home includes multiple living and dining areas, each designed with layered lighting, rich materials, and clean architectural lines.",
    "With multiple theatre rooms, countless bedrooms, custom wardrobes, and handcrafted furniture, we shaped every space to feel both functional and luxurious.",
  ],
  features: [
    "End-to-end design execution from architectural planning to interior detailing",
    "Multiple formal and informal living & dining spaces with layered lighting",
    "Private in-house theatre rooms designed for immersive viewing",
    "Extensive bedroom suites with custom-designed wardrobes",
    "Handcrafted furniture and bespoke material selections throughout",
    "Luxury spatial planning balancing grandeur, comfort, and functionality",
  ],
  testimonial: {
    quote:
      "My house was very old, so I wanted to get it renovated. And this could happen by Sangeeta Kapoor. She really made my dreams come true. The garden, the big rooms, the peaceful environment, where you can meditate, a beautiful temple, everything is beautiful, you don't feel like going anywhere. I would just say that if anyone wants to build their house, please choose her. She is the best.",
    author: "Sashi & Mukesh Aggarwal",
    role: "Homeowners",
    image: "SashiAggarwalTestimonial.jpg",
    clip: "SashiAggarwalTestimonialVideo.mp4",
    thumbnail: "SashiAggarwalTestimonialThumbnail.png",
  },
};

export const reelsData = [
  { embedUrl: "https://www.instagram.com/reel/DRrmAfLEs_2/embed" },
  { embedUrl: "https://www.instagram.com/reel/DR7f2edkt7h/embed" },
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
        centerImage={centerImage5}
        products={images5}
      />
      <OurWork
        showTitle={false}
        centerImage={centerImage6}
        products={images6}
      />
      <OurWork
        showTitle={false}
        centerImage={centerImage7}
        products={images7}
      />
      <OurWork
        showTitle={false}
        centerImage={centerImage8}
        products={images8}
      />
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
      <TestimonialVideo
        thumbnail={projectDetails.testimonial.thumbnail}
        video={projectDetails.testimonial.clip}
      />
    </div>
  );
};

export default page;
