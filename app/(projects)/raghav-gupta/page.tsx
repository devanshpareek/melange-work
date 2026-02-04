import React from "react";
import { ClientTestimonial, ProjectDescription } from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import TestimonialVideo from "../../components/TestimonialVideo";
import InstagramReels from "../../components/InstagramReels";

const images1 = [
  { image: "/Deepali1_1.jpg" },
  { image: "/Deepali1_2.jpg" },
  { image: "/Deepali1_3.jpg" },
  { image: "/Deepali1_4.jpg" },
];

const centerImage1 = "/Deepali1_5.jpg";

const images2 = [
  { image: "/Deepali2_1.jpg" },
  { image: "/Deepali2_2.jpg" },
  { image: "/Deepali2_3.jpg" },
  { image: "/Deepali2_4.jpg" },
];

const centerImage2 = "/Deepali2_5.jpg";

const images3 = [
  { image: "/Deepali3_1.jpg" },
  { image: "/Deepali3_2.jpg" },
  { image: "/Deepali3_3.jpg" },
  { image: "/Deepali3_4.jpg" },
];

const centerImage3 = "/Deepali3_5.jpg";

const images4 = [
  { image: "/Deepali4_1.jpg" },
  { image: "/Deepali4_2.jpg" },
  { image: "/Deepali4_3.jpg" },
  { image: "/Deepali4_4.jpg" },
];

const centerImage4 = "/Deepali4_5.jpg";

// Project type: - Independent house (3 floors + terrace) end to end project
// Estimated area: - 6000 sqft each floor
// Location: - Faridabad
// Competition time: - 2 years
// Content:

const projectDetails = {
  title: "Independent house, Pitampura",
  subtitle: "Independent house (3 floors + terrace) end to end project",
  details: {
    location: "Deepali Enclave, Pitampura, New Delhi",
    area: "2600 sq ft",
    duration: "18 months",
    year: "year not found",
  },
  description: [
    "Turning a 2600 sq ft independent house of 3 floors in vibrant Pitampura into a stunning family haven demanded our complete expertise from layout to final flourish.",
    "As their trusted interior designer, we managed every facet—premium flooring, intricate ceiling designs, bespoke wall finishes, custom furniture, so many floor inlay designs on each floor and flawless integration of every detail.",
    "The journey wasn't without hurdles: navigating meticulous stone selections, perfecting paint shades, and curating fabrics through countless collaborative discussions ensured every choice aligned perfectly with the client's dreams.",
    "These challenges only sharpened our precision, resulting in a space that radiates warmth, sophistication, and enduring style.",
  ],
  features: [
    "Comprehensive interior design and execution for a 2600 sq ft, 3-floor independent house in Pitampura",
    "Premium flooring installations with intricate floor inlay designs on each level",
    "Sophisticated ceiling designs and bespoke wall finishes throughout",
    "Custom-designed furniture crafted to match the family's lifestyle and aesthetic vision",
    "Meticulous material curation including stone selections, paint shades, and fabric coordination",
    "Seamless integration of every detail creating a warm, sophisticated family haven with enduring style",
  ],
  testimonial: {
    quote: "Testimonial content not found",
    author: "Raghav Gupta",
    role: "Homeowners",
    image: "deepali_pitampura.jpg",
    clip: "not_found",
  },
};

const reelsData = [
  {
    embedUrl: "https://www.instagram.com/reel/C9rso9ISNGS/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/C9rso9ISNGS/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/C9rso9ISNGS/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/C9rso9ISNGS/embed",
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
      <InstagramReels reels={reelsData} />
    </div>
  );
};

export default page;
