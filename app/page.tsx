"use client";

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
import { useState } from "react";
import FeaturedCategories from "./components/FeaturedCategories";

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

const products2 = [
  { image: "/AshishGupta2_1.jpg" },
  { image: "/AshishGupta2_2.jpg" },
  { image: "/AshishGupta2_3.jpg" },
  { image: "/AshishGupta2_4.jpg" },
];

const centerImage2 = "/AshishGupta2_5.jpg";

const products3 = [
  { image: "/SashiAggarwal1_1.jpg" },
  { image: "/SashiAggarwal1_2.jpg" },
  { image: "/SashiAggarwal1_3.jpg" },
  { image: "/SashiAggarwal1_4.jpg" },
];

const centerImage3 = "/SashiAggarwal1_5.jpg";

// Additional projects for "show more"

const products4 = [
  { image: "/Praveen_Nangia2_1.jpg" },
  { image: "/Praveen_Nangia2_2.jpg" },
  { image: "/Praveen_Nangia2_3.jpg" },
  { image: "/Praveen_Nangia2_4.jpg" },
];

const centerImage4 = "/Praveen_Nangia2_5.jpg";

const products5 = [
  { image: "/Deepali1_1.jpg" },
  { image: "/Deepali1_2.jpg" },
  { image: "/Deepali1_3.jpg" },
  { image: "/Deepali1_4.jpg" },
];

const centerImage5 = "/Deepali1_5.jpg";

const products6 = [
  { image: "/Sec_15_Noida_2_1.jpg" },
  { image: "/Sec_15_Noida_2_2.jpg" },
  { image: "/Sec_15_Noida_2_3.jpg" },
  { image: "/Sec_15_Noida_2_4.jpg" },
];

const centerImage6 = "/Sec_15_Noida_2_5.jpg";

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

const steps = [
  {
    title: "YOU VISIT OUR STUDIO",
    description:
      "When you visit our studio, we take the time to understand your lifestyle, preferences, and the story you want your home to tell. We discuss your ideas, inspirations, functional needs, and budget while studying the architectural possibilities of your space.",
    icon: <img className="w-16 h-16" src={"/studio.png"} />,
    image: "/Studio.jpg",
  },
  {
    title: "WE ENVISION",
    description:
      "Once we understand your vision, we begin shaping the concept. Through layouts, mood boards, material palettes, and design sketches, we develop a cohesive direction for your home. Every element—from furniture and lighting to textures and colours—is thoughtfully curated.",
    icon: <img className="w-16 h-16" src={"/man.png"} />,
    image: "/Envision.jpg",
  },
  {
    title: "WE CREATE",
    description:
      "Our team works closely with craftsmen, vendors, and contractors to bring the design to life from bespoke furniture and custom details to finishes and installations. We oversee the process closely to ensure every element aligns with the vision and maintains the quality Melange stands for.",
    icon: <img className="w-16 h-16" src={"/value.png"} />,
    image: "/OurWork2_2.jpg",
  },
  {
    title: "THE END RESULT",
    description:
      "The final step is the most rewarding when the space comes together as a home. Furniture is placed, details are styled, and every element is refined. The result is a home that reflects your personality while carrying the timeless design language of Melange.",
    icon: <img className="w-16 h-16" src={"/value.png"} />,
    image: "/END_RESULT_IMAGE.jpg",
  },
];

const testimonialVideos = [
  {
    url: "/AshishGuptaTestemonial.mp4",
    clientName: "Shreya Gupta",
    projectDetails:
      "Independent house (3 floors + terrace) end to end project, Faridabad.",
    thumbnail: "/AshishGuptaTestemonialThumbnail.png",
  },
  {
    url: "/PraveenNangiaTestimonialClip.mp4",
    clientName: "Jyoti Nangia",
    projectDetails:
      "4 BHK apartment in Gurugram with contemporary design, Gurugram.",
    thumbnail: "/PraveenNangiaTestimonialThumbnail.png",
  },
  {
    url: "SashiAggarwalTestimonialVideo.mp4",
    clientName: "Sashi Aggarwal",
    projectDetails:
      "Independent house (3 floors + terrace) end to end project, Gurugram.",
    thumbnail: "/SashiAggarwalTestimonialThumbnail.png",
  },
];

export default function Home() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const handleToggleProjects = () => {
    setShowMoreProjects(!showMoreProjects);

    // Smooth scroll to the section when closing
    if (showMoreProjects) {
      const ourWorkSection = document.getElementById("our-work");
      if (ourWorkSection) {
        ourWorkSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div>
      <Caraousel images={homePageCaraouselImgs} />
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="what-we-do">
        <WhatWeDo
          services={services}
          title={"What We Do"}
          description={"Everything to turn your house into a home"}
        />
      </div>
      <div id="our-work">
        <FeaturedCategories />
        <OurWork
          products={products5}
          centerImage={centerImage5}
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

        {showMoreProjects && (
          <div className="animate-fadeIn">
            <OurWork
              products={products4}
              centerImage={centerImage4}
              showTitle={false}
            />
            <OurWork
              products={products1}
              centerImage={centerImage1}
              showTitle={false}
            />

            <OurWork
              products={products6}
              centerImage={centerImage6}
              showTitle={false}
            />
          </div>
        )}

        {/* Toggle Button */}
        <div className="flex justify-center py-12">
          <button
            onClick={handleToggleProjects}
            className="group inline-flex items-center gap-3"
            style={{ textDecoration: "none" }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase border px-6 py-3"
              style={{
                color: "#7c5c3e",
                borderColor: "rgba(124,92,62,0.45)",
                fontFamily: "'Jost', sans-serif",
                transition:
                  "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLSpanElement).style.background =
                  "#1a1410";
                (e.currentTarget as HTMLSpanElement).style.color = "#ffffff";
                (e.currentTarget as HTMLSpanElement).style.borderColor =
                  "#1a1410";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLSpanElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLSpanElement).style.color = "#7c5c3e";
                (e.currentTarget as HTMLSpanElement).style.borderColor =
                  "rgba(124,92,62,0.45)";
              }}
            >
              {showMoreProjects
                ? "View Less Projects"
                : "Explore More Projects"}
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300"
              style={{
                color: "#7c5c3e",
                transform: showMoreProjects ? "rotate(180deg)" : "rotate(0deg)",
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Additional Projects */}

        <OurProcess
          services={steps}
          title={"The Process"}
          description={"How we work"}
        />
        <FunFacts />
      </div>
      <div id="testimonials">
        <TestimonialVideosSection videos={testimonialVideos} />
        <Testimonials />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
}
