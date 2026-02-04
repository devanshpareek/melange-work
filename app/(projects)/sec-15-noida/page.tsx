import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

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
      <ClientTestimonial testimonial={project1.testimonial} />
    </div>
  );
};

export default page;
