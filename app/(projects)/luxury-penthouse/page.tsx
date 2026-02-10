import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import InstagramReels from "@/app/components/InstagramReels";

const images1 = [
  { image: "/adarsh_aggarwal11.jpg" },
  { image: "/adarsh_aggarwal12.jpg" },
  { image: "/adarsh_aggarwal13.jpg" },
  { image: "/adarsh_aggarwal14.jpg" },
];

const centerImage1 = "/adarsh_aggarwal15.jpg";

const images2 = [
  { image: "/adarsh_aggarwal21.jpg" },
  { image: "/adarsh_aggarwal22.jpg" },
  { image: "/adarsh_aggarwal23.jpg" },
  { image: "/adarsh_aggarwal24.jpg" },
];

const centerImage2 = "/adarsh_aggarwal25.jpg";

const images3 = [
  { image: "/adarsh_aggarwal31.jpg" },
  { image: "/adarsh_aggarwal32.jpg" },
  { image: "/adarsh_aggarwal33.jpg" },
  { image: "/adarsh_aggarwal34.jpg" },
];

const centerImage3 = "/adarsh_aggarwal35.jpg";

export const projectDetails = {
  title: "Modern Luxury Penthouse",
  subtitle: "A Contemporary Penthouse in Noida",
  details: {
    location: "Noida",
    area: "3,200 sq ft",
    duration: "9 months",
    year: "2023",
  },
  description: [
    "3200SQ.FT penthouse for Aadarsh Aggarwal, a project that beautifully came together over 9 months.",
    "We redesigned the ceilings to bring depth and mood into every room, updated the flooring for a seamless flow, crafted custom furniture that fits effortlessly into the layout, and tied it all together with soft, modern décor.",
    "A refined, calm, and contemporary home where every detail matters.",
  ],
  features: [
    "Redesigned ceilings with depth and mood lighting",
    "Seamless flooring throughout the space",
    "Custom-crafted furniture fitted to layout",
    "Soft, modern décor elements",
    "Contemporary design with refined aesthetics",
    "Cohesive interior flow across 3200 sq.ft",
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
    quote: "",
    author: "Adarsh & Shilpa Aggarwal",
    role: "Homeowners",
  },
};

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

      <ClientTestimonial testimonial={projectDetails.testimonial} />
    </div>
  );
};

export default page;
