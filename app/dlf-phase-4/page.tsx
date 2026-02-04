import OurWork, { ImageCard } from "@/components/OurWork";
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
    <div className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4 mt-15">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h2>
          <div
            className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent
 mx-auto mb-4"
          ></div>
          <p className="mini-title-desc text-lg text-gray-600">
            {project.subtitle}
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 py-8 border-y border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#6e6250] mb-1">
              {project.details.location}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">
              Location
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#6e6250] mb-1">
              {project.details.area}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">
              Area
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#6e6250] mb-1">
              {project.details.duration}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">
              Duration
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#6e6250] mb-1">
              {project.details.year}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">
              Year
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {project.description.map((paragraph: any, index: any) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Key Features */}
        {project.features && (
          <div className="mt-8 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature: any, index: any) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-gray-900 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Client Testimonial Component
export const ClientTestimonial = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4">
      <div className="mx-10">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-[#6e6250] mb-2">
            Client Testimonial
          </h3>
          <div
            className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent
 mx-auto mb-4"
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-white backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          {/* Quote Icon */}
          <div className="w-full md:w-3/7 h-auto md:h-120 flex justify-center">
            <img
              className="rounded-xl"
              src={testimonial.image}
              alt="testimonial image not found"
            />
          </div>
          <div className="md:w-4/7">
            <svg
              className="w-16 h-16 text-[#6e6250]/60 mb-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>

            {/* Quote */}
            <p className="text-xl md:text-2xl text-[#6e6250] leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
              )}
              <div>
                <h4 className="text-lg font-bold text-[#6e6250]">
                  {testimonial.author}
                </h4>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
