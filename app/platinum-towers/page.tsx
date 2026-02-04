import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

const images1 = [
  { image: "/PlatinumTowers1_1.jpg" },
  { image: "/PlatinumTowers1_2.jpg" },
  { image: "/PlatinumTowers1_3.jpg" },
  { image: "/PlatinumTowers1_4.jpg" },
];

const centerImage1 = "/PlatinumTowers1_5.jpg";

const images2 = [
  { image: "/PlatinumTowers2_1.jpg" },
  { image: "/PlatinumTowers2_2.jpg" },
  { image: "/PlatinumTowers2_3.jpg" },
  { image: "/PlatinumTowers2_4.jpg" },
];

const centerImage2 = "/PlatinumTowers2_5.jpg";

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
      <ClientTestimonial testimonial={project1.testimonial} />
    </div>
  );
};

export default page;
