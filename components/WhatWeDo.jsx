"use client";
import { useState } from "react";

export default function WhatWeDo({
  services,
  title,
  description,
  showTitle = true,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className={`relative bg-gradient-to-b from-white via-gray-200 to-white ${
        showTitle ? "py-10" : "py-20"
      } px-4 overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            {title}
          </h2>
          <div
            className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent
 mx-auto mb-4"
          ></div>
          <p className="mini-title-desc text-xl text-black font-light">{description}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative backdrop-blur-sm rounded-2xl p-8 py-4 h-full border border-slate-300 transition-all duration-500 hover:border-slate-400 hover:shadow-2xl hover:shadow-gray-500 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex w-full items-center justify-center p-4 rounded-xl bg-gradient-to-br text-[#6e6250] transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>
                  {title == "THE PROCESS" && (
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  )}

                  {/* Glow effect */}
                  {/* <div
                    className={`absolute inset-0 bg-gradient-to-br blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div> */}
                </div>

                {/* Content */}
                <h3 className="text-2xl inline-flex w-full items-center justify-center font-bold text-black mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OurProcess({ services, title, description }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-200 to-white py-10 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            {title}
          </h2>
          <div className="separation-line w-24 h-1 bg-gradient-to-r from-transparent via-zinc-400 to-transparent mx-auto mb-4"></div>
          <p className="mini-title-desc text-xl text-black font-light">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative cursor-pointer"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl h-[400px] border border-slate-300 transition-all duration-500 hover:border-slate-400 hover:shadow-2xl hover:shadow-gray-500/50 hover:-translate-y-2">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Number Badge (for THE PROCESS) */}
                {title === "THE PROCESS" && (
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>
                )}

                {/* Title (always visible at bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-500 group-hover:opacity-0">
                  <h3 className="text-2xl font-bold !text-white text-center tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Description (visible on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/90 to-black/80 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Demo Usage
// function Demo() {
//   const services = [
//     {
//       title: "DESIGN",
//       description: "We understand your needs and learn your style to design your home.",
//       image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600",
//       icon: (
//         <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
//           <circle cx="32" cy="32" r="24" />
//           <path d="M32 16v32M16 32h32" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//     {
//       title: "BLUEPRINT",
//       description: "We convert our vision for your home into precise and comprehensive blueprints.",
//       image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",
//       icon: (
//         <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
//           <rect x="12" y="12" width="40" height="40" rx="4" />
//           <path d="M12 24h40M32 24v28" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//     {
//       title: "BUILD",
//       description: "We build everything from scratch with the strictest quality control and speed.",
//       image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600",
//       icon: (
//         <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
//           <path d="M20 44h24M32 20v24" strokeLinecap="round" />
//           <circle cx="32" cy="32" r="20" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <WhatWeDo
//       services={services}
//       title="WHAT WE DO"
//       description="Everything to turn your house into a home"
//     />
//   );
// }
