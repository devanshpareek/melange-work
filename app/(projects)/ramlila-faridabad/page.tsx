import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

const images1 = [
  { image: "/Melange_Faridabad1_1.jpg" },
  { image: "/Melange_Faridabad1_2.jpg" },
  { image: "/Melange_Faridabad1_3.jpg" },
  { image: "/Melange_Faridabad1_4.jpg" },
];

const centerImage1 = "/Melange_Faridabad1_5.jpg";

const images2 = [
  { image: "/Melange_Faridabad2_1.jpg" },
  { image: "/Melange_Faridabad2_2.jpg" },
  { image: "/Melange_Faridabad2_3.jpg" },
  { image: "/Melange_Faridabad2_4.jpg" },
];

const centerImage2 = "/Melange_Faridabad2_5.jpg";

const images3 = [
  { image: "/Melange_Faridabad3_1.jpg" },
  { image: "/Melange_Faridabad3_2.jpg" },
  { image: "/Melange_Faridabad3_3.jpg" },
  { image: "/Melange_Faridabad3_4.jpg" },
];

const centerImage3 = "/Melange_Faridabad3_5.jpg";

const images4 = [
  { image: "/Melange_Faridabad4_1.jpg" },
  { image: "/Melange_Faridabad4_2.jpg" },
  { image: "/Melange_Faridabad4_3.jpg" },
  { image: "/Melange_Faridabad4_4.jpg" },
];

const centerImage4 = "/Melange_Faridabad4_5.jpg";

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
