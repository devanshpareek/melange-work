import React from "react";
import { ClientTestimonial, ProjectDescription } from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import TestimonialVideo from "../../components/TestimonialVideo";
import InstagramReels from "../../components/InstagramReels";

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

// Project type: - Independent house (3 floors + terrace) end to end project
// Estimated area: - 6000 sqft each floor
// Location: - Faridabad
// Competition time: - 2 years
// Content:

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
  {
    embedUrl: "https://www.instagram.com/reel/DJrk78DywCK/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DJzRY1NI7uW/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DOBXPkIklWj/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DJhCq5-oDJe/embed",
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
