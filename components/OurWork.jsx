"use client";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

const PromoCard = ({ image }) => {
  return (
    <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500">
      <img
        src={image}
        alt="Wholesale and Retail"
        className="w-full h-136 object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  );
};

export const ImageCard = ({ image, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={`Product ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full transform transition-all duration-300 hover:scale-110 shadow-xl">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={image}
        imageAlt={"..."}
      />

      {/* Subtle bottom accent */}
      {/* <div className="h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div> */}
    </div>
  );
};

export default function OurWork({ products, centerImage, showTitle }) {
  return (
    <section className="bg-gradient-to-b from-white via-gray-200 to-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {showTitle && (
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              Portfolio
            </p>
            <h2
              className="font-light mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "#1a1410",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Our{" "}
              <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                Projects
              </span>
            </h2>
            <div
              className="mx-auto mb-6"
              style={{
                width: "3rem",
                height: "1px",
                background: "rgba(0,0,0,0.15)",
              }}
            />
            <p
              className="max-w-xl mx-auto text-sm md:text-base leading-relaxed"
              style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
            >
              A sample of our projects that we have done for our clients.
            </p>
          </div>
        )}
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Left Column - 2 Images */}
          <div className="lg:col-span-4 space-y-6">
            <ImageCard image={products[0].image} index={0} />
            <ImageCard image={products[1].image} index={1} />
          </div>

          {/* Middle Column - Promo Card */}
          <div className="lg:col-span-4">
            <PromoCard image={centerImage} />
          </div>

          {/* Right Column - 2 Images */}
          <div className="lg:col-span-4 space-y-6">
            <ImageCard image={products[2].image} index={2} />
            <ImageCard image={products[3].image} index={3} />
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Products
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div> */}
      </div>
    </section>
  );
}
