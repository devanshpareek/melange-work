import OurWork, { ImageCard } from "@/components/OurWork";
import Image from "next/image";
import React from "react";

const images1 = [
  { image: "/DLFPhase4_1_1.jpg" },
  { image: "/DLFPhase4_1_2.jpg" },
  { image: "/DLFPhase4_1_3.jpg" },
  { image: "/DLFPhase4_1_4.jpg" },
];

const centerImage1 = "/DLFPhase4_1_5.jpg";

const images2 = [
  { image: "/DLFPhase4_2_1.jpg" },
  { image: "/DLFPhase4_2_2.jpg" },
  { image: "/DLFPhase4_2_3.jpg" },
  { image: "/DLFPhase4_2_4.jpg" },
];

const centerImage2 = "/DLFPhase4_2_5.jpg";

const images3 = [
  { image: "/DLFPhase4_3_1.jpg" },
  { image: "/DLFPhase4_3_2.jpg" },
  { image: "/DLFPhase4_3_3.jpg" },
  { image: "/DLFPhase4_3_4.jpg" },
];

const centerImage3 = "/DLFPhase4_3_5.jpg";

export const project1 = {
  title: "Modern Villa Interior",
  subtitle: "A Contemporary Family Home in Gurgaon",
  details: {
    location: "Gurgaon",
    area: "3,500 sq ft",
    duration: "6 months",
    year: "2023",
  },
  description: [
    "This project involved the complete transformation of a modern villa, focusing on creating a harmonious blend of contemporary design and functional living spaces. Our team worked closely with the family to understand their lifestyle and preferences.",
    "We incorporated custom-built furniture, carefully selected materials, and a neutral color palette accented with warm tones. The design emphasizes natural light, open spaces, and seamless flow between rooms.",
    "Special attention was given to creating multifunctional spaces that adapt to the family's evolving needs, including a home office, entertainment area, and children's study zones.",
  ],
  features: [
    "Custom-designed modular furniture",
    "Smart home automation integration",
    "Energy-efficient lighting solutions",
    "Handcrafted wooden elements",
    "Italian marble flooring",
    "Built-in storage solutions",
  ],
  centerImage:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
  images: [
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600573472591-ee6c68886b3a?w=600",
    },
  ],
  testimonial: {
    quote:
      "Working with MELANGE was an absolute pleasure. They transformed our house into a home that perfectly reflects our style and meets all our functional needs. The attention to detail and quality of craftsmanship exceeded our expectations.",
    author: "Rajesh & Priya Sharma",
    role: "Homeowners, Gurgaon",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100",
  },
};

export const ProjectDescription = ({ project }: { project: any }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <div className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4 mt-15">
        <div className="max-w-4xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-10">
            {/* Title */}
            <h2
              className="font-light mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#1a1410",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h2>

            {/* Divider */}
            <div
              className="mx-auto mb-4"
              style={{
                width: "3rem",
                height: "1px",
                background: "rgba(0,0,0,0.15)",
              }}
            />

            {/* Subtitle */}
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* ── Project details grid ── */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-0 mb-10"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {[
              { value: project.details.location, label: "Location" },
              { value: project.details.area, label: "Area" },
              { value: project.details.duration, label: "Duration" },
            ].map(({ value, label }, i) => (
              <div
                key={i}
                className="text-center py-7"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : undefined,
                }}
              >
                <div
                  className="mb-1 font-light"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    color: "#1a1410",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {value}
                </div>
                <div
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Description paragraphs ── */}
          <div className="space-y-5 mb-10">
            {project.description.map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* ── Key features ── */}
          {project.features && (
            <div
              className="p-8"
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              {/* Features heading */}
              <h3
                className="font-light mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#1a1410",
                  letterSpacing: "-0.01em",
                }}
              >
                Key{" "}
                <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                  Features
                </span>
              </h3>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  width: "2rem",
                  height: "1px",
                  background: "rgba(0,0,0,0.15)",
                }}
              />

              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Check icon */}
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#7c5c3e" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className="text-sm md:text-base leading-relaxed"
                      style={{
                        color: "#5c4f42",
                        fontFamily: "'Jost', sans-serif",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// ─── ClientTestimonial ────────────────────────────────────────────────────────

export const ClientTestimonial = ({ testimonial }: { testimonial: any }) => {
  console.log(testimonial.image);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <div className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4">
        <div className="mx-10">
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              Testimonial
            </p>
            <h3
              className="font-light mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#1a1410",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Client{" "}
              <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                Voice
              </span>
            </h3>
            <div
              className="mx-auto"
              style={{
                width: "3rem",
                height: "1px",
                background: "rgba(0,0,0,0.15)",
              }}
            />
          </div>

          {/* ── Card ── */}
          <div
            className="flex flex-col md:flex-row gap-8 md:gap-12 p-8 md:p-12"
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(255,255,255,0.6)",
            }}
          >
            {/* Optional image */}
            {testimonial.image && (
              <div
                className="w-full md:w-3/7 relative"
                style={{ minHeight: "320px" }}
              >
                <Image
                  src={"/" + testimonial.image}
                  alt="Testimonial"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div
              className={`${
                testimonial.image ? "md:w-4/7" : "w-full"
              } flex flex-col justify-center`}
            >
              {/* Large quote mark */}
              <svg
                className="mb-6"
                style={{
                  width: "3rem",
                  height: "3rem",
                  color: "rgba(124,92,62,0.3)",
                }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              {/* Quote */}
              <p
                className="leading-relaxed mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                  fontStyle: "italic",
                  color: "#1a1410",
                  letterSpacing: "0.01em",
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "rgba(0,0,0,0.15)",
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <div
                    className="relative flex-shrink-0 overflow-hidden"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4
                    className="font-light mb-0.5"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                      color: "#1a1410",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {testimonial.author}
                  </h4>
                  <p
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{
                      color: "#a89880",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
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
