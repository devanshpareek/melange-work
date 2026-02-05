import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import InstagramReels from "@/app/components/InstagramReels";

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

const reelsData = [
  {
    embedUrl: "https://www.instagram.com/reel/DEH7ugHIq2m/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DH1PzCBoGZv/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DFKu484yHFW/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DE7mbE9y81K/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DEsOu3Uyn9r/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DEfGE00IPpa/embed",
  },
];

export const projectDetails = {
  title: "Modern Villa Interior",
  subtitle: "A Contemporary Family Home in Gurgaon",
  details: {
    location: "Gurgaon",
    area: "3,500 sq ft",
    duration: "6 months",
    year: "2023",
  },
  description: [
    "This project involved the complete transformation of a modern villa, focusing on creating a harmonious blend of contemporary design and functional living spaces. Our team worked closely with the family to understand their lifestyle and preferences.",
    "We incorporated custom-built furniture, carefully selected materials, and a neutral color palette accented with warm tones. The design emphasizes natural light, open spaces, and seamless flow between rooms.",
    "Special attention was given to creating multifunctional spaces that adapt to the family's evolving needs, including a home office, entertainment area, and children's study zones.",
  ],
  features: [
    "Custom-designed modular furniture",
    "Smart home automation integration",
    "Energy-efficient lighting solutions",
    "Handcrafted wooden elements",
    "Italian marble flooring",
    "Built-in storage solutions",
  ],
  centerImage:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  images: [
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6c68886b3a?w=600",
    },
  ],
  testimonial: {
    quote:
      "Working with MELANGE was an absolute pleasure. They transformed our house into a home that perfectly reflects our style and meets all our functional needs. The attention to detail and quality of craftsmanship exceeded our expectations.",
    author: "Mahesh & Richa Gupta",
    role: "Homeowners, Noida",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100",
  },
};

const page = () => {
  return (
    <div>
      <ProjectDescription project={project1} />
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
