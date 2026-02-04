import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

const images1 = [
  { image: "/SanjayGuptaAllahbad_1.jpg" },
  { image: "/SanjayGuptaAllahbad_3.jpg" },
  { image: "/SanjayGuptaAllahbad_2.jpg" },
  { image: "/SanjayGuptaAllahbad_4.jpg" },
];

const centerImage1 = "/SanjayGuptaAllahbad_5.jpg";

const page = () => {
  return (
    <div>
      <ProjectDescription project={project1} />
      <OurWork
        showTitle={false}
        centerImage={centerImage1}
        products={images1}
      />
      <ClientTestimonial testimonial={project1.testimonial} />
    </div>
  );
};

export default page;
