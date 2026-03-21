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
  title: "Shivani & Bhuvam's Modern Penthouse — 4,500 sq ft, Gurugram",
  description:
    "Melange designed a 4,500 sq ft independent house across three floors in Gurugram for Shivani & Bhuvam. Custom ceiling designs, premium flooring, bespoke furniture, and stunning wall finishes — delivered in 12 months.",
  keywords: [
    "independent house interior design Gurugram",
    "3 floor house interior Gurgaon",
    "luxury home design Gurugram",
    "bespoke interiors Gurgaon",
    "custom home design Gurugram",
    "interior designer Gurgaon",
    "Melange interior design Gurugram project",
  ],
  alternates: {
    canonical: "https://xclusiveatmelange.com/shivani-and-bhuvam",
  },
  openGraph: {
    url: "https://xclusiveatmelange.com/shivani-and-bhuvam",
    title:
      "Shivani & Bhuvam's Modern Penthouse — 4,500 sq ft, Gurugram | Melange",
    description:
      "4,500 sq ft independent house across three floors in Gurugram. Custom ceilings, premium flooring, and bespoke furniture in 12 months.",
    images: [
      {
        url: "/bhuvam11.jpg",
        width: 1200,
        height: 800,
        alt: "Shivani and Bhuvam Penthouse Gurugram by Melange",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Shivani & Bhuvam's Modern Penthouse — Gurugram",
  description:
    "Complete design of a 4,500 sq ft independent house across three floors in Gurugram. Custom ceiling designs, premium flooring throughout all levels, stunning wall finishes, and bespoke furniture tailored to each space.",
  url: "https://xclusiveatmelange.com/shivani-and-bhuvam",
  image: "https://xclusiveatmelange.com/bhuvam11.jpg",
  creator: {
    "@type": "LocalBusiness",
    name: "Melange by Sangeeta Kapoor",
    url: "https://xclusiveatmelange.com",
  },
  locationCreated: {
    "@type": "Place",
    name: "Gurugram, Haryana, India",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const images1 = [
  { image: "/bhuvam11.jpg" },
  { image: "/bhuvam12.jpg" },
  { image: "/bhuvam13.jpg" },
  { image: "/bhuvam14.jpg" },
];
const centerImage1 = "/bhuvam15.jpg";

const images2 = [
  { image: "/bhuvam21.jpg" },
  { image: "/bhuvam22.jpg" },
  { image: "/bhuvam23.jpg" },
  { image: "/bhuvam24.jpg" },
];
const centerImage2 = "/bhuvam25.jpg";

const images3 = [
  { image: "/bhuvam31.jpg" },
  { image: "/bhuvam32.jpg" },
  { image: "/bhuvam33.jpg" },
  { image: "/bhuvam34.jpg" },
];
const centerImage3 = "/bhuvam35.jpg";

const images4 = [
  { image: "/bhuvam41.jpg" },
  { image: "/bhuvam42.jpg" },
  { image: "/bhuvam43.jpg" },
  { image: "/bhuvam44.jpg" },
];
const centerImage4 = "/bhuvam45.jpg";

const images5 = [
  { image: "/bhuvam51.jpg" },
  { image: "/bhuvam52.jpg" },
  { image: "/bhuvam53.jpg" },
  { image: "/bhuvam54.jpg" },
];
const centerImage5 = "/bhuvam55.jpg";

export const projectDetails = {
  title: "Shivani & Bhuvam's Modern Penthouse",
  subtitle: "Independent house (3 floors + terrace) end to end project.",
  details: {
    location: "Gurugram",
    area: "4,500 sq ft",
    duration: "12 months",
    year: "2023",
  },
  description: [
    "Crafting a breathtaking 4500 sq ft independent house spanning three majestic floors was a testament to visionary design on a grand scale.",
    "As their expert interior designer, we orchestrated every element—from soaring ceiling designs and premium flooring to stunning wall finishes, custom furniture, and seamless integration throughout.",
    "The final masterpiece delivers timeless luxury, fluid flow between floors, and spaces that inspire awe and comfort in equal measure. This project showcases our passion for elevating homes into legacies of elegance.",
  ],
  features: [
    "4500 sq.ft independent house across three floors",
    "Custom ceiling designs with architectural detail",
    "Premium flooring throughout all levels",
    "Stunning wall finishes and treatments",
    "Bespoke furniture tailored to each space",
    "Seamless flow and integration between floors",
  ],
  testimonial: {
    quote:
      "I recently had my home designed by 'Melange by Sangeeta Kapoor', and the results have completely transformed the space. From the initial consultation to the final reveal, their creativity, attention to detail, and understanding of my vision were outstanding. Every room now feels modern, functional, and perfectly tailored to my lifestyle—I'm receiving compliments from everyone who visits! I couldn't be happier and highly recommend them for anyone looking to elevate their home.",
    author: "Shivani & Bhuvam",
    role: "Homeowners",
  },
};

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
        centerImage={centerImage5}
        products={images5}
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
      <OurWork
        showTitle={false}
        centerImage={centerImage2}
        products={images2}
      />
      <ClientTestimonial testimonial={projectDetails.testimonial} />
    </div>
  );
};

export default page;
