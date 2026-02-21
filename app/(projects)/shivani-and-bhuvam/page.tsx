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
      "I recently had my home designed by 'Melange by Sangeeta Kapoor', and the results have completely transformed the space. From the initial consultation to the final reveal, their creativity, attention to detail, and understanding of my vision were outstanding. Every room now feels modern, functional, and perfectly tailored to my lifestyle—I'm receiving compliments from everyone who visits! I couldn't be happier and highly recommend them for anyone looking to elevate their home.",
    author: "Shivani & Bhuvam",
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
