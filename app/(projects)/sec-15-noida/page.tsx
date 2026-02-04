import React from "react";
import {
  ClientTestimonial,
  project1,
  ProjectDescription,
} from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import InstagramReels from "@/app/components/InstagramReels";

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

const reelsData = [
  {
    embedUrl: "https://www.instagram.com/reel/DEH7ugHIq2m/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DH1PzCBoGZv/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DFKu484yHFW/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DE7mbE9y81K/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DEsOu3Uyn9r/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DEfGE00IPpa/embed",
  },
];
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
      <InstagramReels reels={reelsData} />
    </div>
  );
};

export default page;
