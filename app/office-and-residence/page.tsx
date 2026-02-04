import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../dlf-phase-4/page";
import OurWork from "@/components/OurWork";

const images1 = [
  { image: "/OfficeAndResidence1_1.jpg" },
  { image: "/OfficeAndResidence1_2.jpg" },
  { image: "/OfficeAndResidence1_3.jpg" },
  { image: "/OfficeAndResidence1_4.jpg" },
];

const centerImage1 = "/OfficeAndResidence1_5.jpg";

const images2 = [
  { image: "/OfficeAndResidence2_1.jpg" },
  { image: "/OfficeAndResidence2_2.jpg" },
  { image: "/OfficeAndResidence2_3.jpg" },
  { image: "/OfficeAndResidence2_4.jpg" },
];

const centerImage2 = "/OfficeAndResidence2_5.jpg";

const images3 = [
  { image: "/OfficeAndResidence3_1.jpg" },
  { image: "/OfficeAndResidence3_2.jpg" },
  { image: "/OfficeAndResidence3_3.jpg" },
  { image: "/OfficeAndResidence3_4.jpg" },
];

const centerImage3 = "/OfficeAndResidence3_5.jpg";

const images4 = [
  { image: "/OfficeAndResidence4_1.jpg" },
  { image: "/OfficeAndResidence4_2.jpg" },
  { image: "/OfficeAndResidence4_3.jpg" },
  { image: "/OfficeAndResidence4_4.jpg" },
];

const centerImage4 = "/OfficeAndResidence4_5.jpg";

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
