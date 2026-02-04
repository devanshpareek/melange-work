import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

const images1 = [
  { image: "/EktaMalik1_1.jpg" },
  { image: "/EktaMalik1_2.jpg" },
  { image: "/EktaMalik1_3.jpg" },
  { image: "/EktaMalik1_4.jpg" },
];

const centerImage1 = "/EktaMalik1_5.jpg";

const images2 = [
  { image: "/EktaMalik2_1.jpg" },
  { image: "/EktaMalik2_2.jpg" },
  { image: "/EktaMalik2_3.jpg" },
  { image: "/EktaMalik2_4.jpg" },
];

const centerImage2 = "/EktaMalik2_5.jpg";

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
