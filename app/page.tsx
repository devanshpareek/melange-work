import Image from "next/image";
import "@/components/Caraousel";
import "@/components/WhatWeDo";
import Caraousel from "@/components/Caraousel";
import WhatWeDo, { OurProcess } from "@/components/WhatWeDo";
import OurWork from "@/components/OurWork";
import FunFacts from "@/components/FunFacts";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import TestimonialVideosSection from "../components/HomePageTestimonialSection";

const homePageCaraouselImgs = [
  "/Slider1.jpg",
  "/Slider2.jpg",
  "/Slider3.jpg",
  "/Slider4.jpg",
  "/Slider5.jpg",
];
const products1 = [
  {
    image: "/OurWork1_1.jpg",
  },
  {
    image: "OurWork1_2.jpg",
  },
  {
    image: "OurWork1_3.jpg",
  },
  {
    image: "OurWork1_4.jpg",
  },
];

const centerImage1 = "./OurWork1_5.jpg";

const centerImage2 = "./OurWork2_5.jpg";

const products2 = [
  {
    image: "/OurWork2_1.jpg",
  },
  {
    image: "OurWork2_2.jpg",
  },
  {
    image: "OurWork2_3.jpg",
  },
  {
    image: "OurWork2_4.jpg",
  },
];

const centerImage3 = "./OurWork3_5.jpg";

const products3 = [
  {
    image: "/OurWork3_1.jpg",
  },
  {
    image: "OurWork3_2.jpg",
  },
  {
    image: "OurWork3_3.jpg",
  },
  {
    image: "OurWork3_4.jpg",
  },
];

export const services = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="3" strokeWidth="2" />
        <circle cx="12" cy="12" r="8" strokeWidth="2" opacity="0.3" />
        <path
          d="M12 2v4M12 18v4M22 12h-4M6 12H2"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "DESIGN",
    description:
      "We understand your needs and learn your style to design your home.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          strokeWidth="2"
        />
        <polyline points="14 2 14 8 20 8" strokeWidth="2" />
        <line
          x1="9"
          y1="15"
          x2="15"
          y2="15"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="12"
          x2="15"
          y2="12"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "BLUEPRINT",
    description:
      "We convert our vision for your home into precise and comprehensive blueprints.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "PROCURE",
    description: "We source and purchase the best materials globally.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          strokeWidth="2"
        />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" strokeWidth="2" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" strokeWidth="2" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" strokeWidth="2" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2" />
        <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2" />
      </svg>
    ),
    title: "BUILD",
    description:
      "We build everything from scratch in our facility with the strictest quality control and speed.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <rect x="3" y="3" width="7" height="7" strokeWidth="2" rx="1" />
        <rect x="14" y="3" width="7" height="7" strokeWidth="2" rx="1" />
        <rect x="14" y="14" width="7" height="7" strokeWidth="2" rx="1" />
        <rect x="3" y="14" width="7" height="7" strokeWidth="2" rx="1" />
      </svg>
    ),
    title: "INSTALL",
    description: "We deliver and install everything in your home.",
    gradient: "from-red-500 to-orange-600",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "FURNISH",
    description:
      "We help you identify, purchase, and install furnishings for your home.",
    gradient: "from-teal-500 to-green-600",
  },
];

// bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900

const steps = [
  {
    title: "YOU VISIT OUR STUDIO",
    description:
      "You meet us at our studio and see our work. We understand your needs and help you identify and make all the big decisions.",
    icon: <img className="w-16 h-16" src={"/studio.png"} />,
    image: "/Studio.jpg",
  },
  {
    title: "WE ENVISION",
    description:
      "We begin our design process and envision your new home, all the way from kitchens to throw pillows. We give you 3D visuals and layouts to help you see our vision for your new home.",
    icon: <img className="w-16 h-16" src={"/man.png"} />,
    image: "/Envision.jpg",
  },
  {
    title: "WE CREATE",
    description:
      "We shift from design to project management mode and begin procuring and building the furniture for your new home. We ensure that everything is sourced and created with the same standards we apply for our own home. Finally, we deliver, install, and ensure you're all set to innagurate your new home.",
    icon: <img className="w-16 h-16" src={"/value.png"} />,
    image: "/OurWork2_2.jpg",
  },
];

const testimonialVideos = [
  {
    url: "/AshishGuptaTestemonial.mp4",
    // thumbnail: "/images/testimonial-1-thumb.jpg",
    clientName: "Shreya Gupta",
    projectDetails:
      "Independent house (3 floors + terrace) end to end project, Faridabad.",
  },
  {
    url: "/PraveenNangiaTestimonialClip.mp4",
    // thumbnail: "/images/testimonial-2-thumb.jpg",
    clientName: "Praveen Nangia",
    projectDetails:
      "4 BHK apartment in Gurugram with contemporary design, Gurugram.",
  },
  {
    url: "SashiAggarwalTestimonialVideo.mp4",
    // thumbnail: "/images/testimonial-3-thumb.jpg",
    clientName: "Sashi Aggarwal",
    projectDetails:
      "Independent house (3 floors + terrace) end to end project, Gurugram.",
  },
];

export default function Home() {
  return (
    <div>
      <Caraousel images={homePageCaraouselImgs} />
      <AboutUs />
      <WhatWeDo
        services={services}
        title={"WHAT WE DO"}
        description={"Everything to turn your house into a home"}
      />
      <OurWork
        products={products1}
        centerImage={centerImage1}
        showTitle={true}
      />
      <OurWork
        products={products2}
        centerImage={centerImage2}
        showTitle={false}
      />
      <OurWork
        products={products3}
        centerImage={centerImage3}
        showTitle={false}
      />
      <OurProcess
        services={steps}
        title={"THE PROCESS"}
        description={"How we work"}
      />
      <FunFacts />

      <Testimonials />
      <TestimonialVideosSection videos={testimonialVideos} />
      <ContactUs />
      <Footer />
    </div>
  );
}
