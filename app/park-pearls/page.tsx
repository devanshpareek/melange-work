import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

const images1 = [
  { image: "/ParkPearls1_1.jpg" },
  { image: "/ParkPearls1_2.jpg" },
  { image: "/ParkPearls1_3.jpg" },
  { image: "/ParkPearls1_4.jpg" },
];

const centerImage1 = "/ParkPearls1_5.jpg";

const images2 = [
  { image: "/ParkPearls2_1.jpg" },
  { image: "/ParkPearls2_2.jpg" },
  { image: "/ParkPearls2_3.jpg" },
  { image: "/ParkPearls2_4.jpg" },
];

const centerImage2 = "/ParkPearls2_5.jpg";

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
