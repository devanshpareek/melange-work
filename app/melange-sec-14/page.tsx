import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

const images1 = [
  { image: "/Melange_Sec_14_1_1.jpg" },
  { image: "/Melange_Sec_14_1_2.jpg" },
  { image: "/Melange_Sec_14_1_3.jpg" },
  { image: "/Melange_Sec_14_1_4.jpg" },
];

const centerImage1 = "/Melange_Sec_14_1_5.jpg";

const images2 = [
  { image: "/Melange_Sec_14_2_1.jpg" },
  { image: "/Melange_Sec_14_2_2.jpg" },
  { image: "/Melange_Sec_14_2_3.jpg" },
  { image: "/Melange_Sec_14_2_4.jpg" },
];

const centerImage2 = "/Melange_Sec_14_2_5.jpg";

const images3 = [
  { image: "/Melange_Sec_14_3_1.jpg" },
  { image: "/Melange_Sec_14_3_2.jpg" },
  { image: "/Melange_Sec_14_3_3.jpg" },
  { image: "/Melange_Sec_14_3_4.jpg" },
];

const centerImage3 = "/Melange_Sec_14_3_5.jpg";

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
      <ClientTestimonial testimonial={project1.testimonial} />
    </div>
  );
};

export default page;
