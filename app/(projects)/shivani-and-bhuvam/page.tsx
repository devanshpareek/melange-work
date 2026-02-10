import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import InstagramReels from "@/app/components/InstagramReels";
import Image from "next/image";

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

const outdoorImages = [{ image: "/bhuvam6.jpg" }, { image: "/bhuvam7.jpg" }];

export const projectDetails = {
  title: "Shivani & Bhuvam's Modern Penthouse",
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
      {/* <div className="space-y-6 md:space-y-8 w-full">
        <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden rounded-lg">
          <Image
            src={outdoorImages[0].image}
            alt="Outdoor Image 1"
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden rounded-lg">
          <Image
            src={outdoorImages[1].image}
            alt="Outdoor Image 2"
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            sizes="100vw"
          />
        </div>
      </div> */}
      <ClientTestimonial testimonial={projectDetails.testimonial} />
    </div>
  );
};

export default page;
