import React from "react";
import { ClientTestimonial, ProjectDescription } from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import TestimonialVideo from "@/app/components/TestimonialVideo";
import InstagramReels from "@/app/components/InstagramReels";

const images1 = [
  { image: "/SashiAggarwal1_1.jpg" },
  { image: "/SashiAggarwal1_2.jpg" },
  { image: "/SashiAggarwal1_3.jpg" },
  { image: "/SashiAggarwal1_4.jpg" },
];

const centerImage1 = "/SashiAggarwal1_5.jpg";

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

const images2 = [
  { image: "/SashiAggarwal2_1.jpg" },
  { image: "/SashiAggarwal2_2.jpg" },
  { image: "/SashiAggarwal2_3.jpg" },
  { image: "/SashiAggarwal2_4.jpg" },
];

const centerImage2 = "/SashiAggarwal2_5.jpg";

// Project type: - Independent house (3 floors + terrace) end to end project
// Estimated area: - 6000 sqft each floor
// Location: - Faridabad
// Competition time: - 2 years
// Content:

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
    author: "Sashi Aggarwal",
    role: "Homeowners",
    image: "SashiAggarwalTestimonial.jpg",
    clip: "SashiAggarwalTestimonialVideo.mp4",
  },
};

export const reelsData = [
  {
    embedUrl: "https://www.instagram.com/reel/DRrmAfLEs_2/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DR7f2edkt7h/embed",
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
      <TestimonialVideo video={projectDetails.testimonial.clip} />
      {/* <InstagramReels reels={reelsData} /> */}
    </div>
  );
};

export default page;
