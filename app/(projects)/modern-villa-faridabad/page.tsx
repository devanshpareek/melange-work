import React from "react";
import { ClientTestimonial, ProjectDescription } from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import TestimonialVideo from "@/app/components/TestimonialVideo";
import InstagramReels from "@/app/components/InstagramReels";

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

// Project type: - Independent house (3 floors + terrace) end to end project
// Estimated area: - 6000 sqft each floor
// Location: - Faridabad
// Competition time: - 2 years
// Content:

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
    author: "Shreya Gupta",
    role: "Homeowners",
    image: images1[0].image,
    clip: "/AshishGuptaTestemonial.mp4",
  },
};

const reelsData = [
  {
    embedUrl: "https://www.instagram.com/reel/DRWhEawEpeF/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DSmBu8-kmF2/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DSXn4rkEh9x/embed",
  },
];
const page = () => {
  return (
    <div>
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
      <TestimonialVideo video={projectDetails.testimonial.clip} />
      <InstagramReels reels={reelsData} />
    </div>
  );
};

export default page;
