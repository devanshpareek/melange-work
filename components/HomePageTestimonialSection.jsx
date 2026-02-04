"use client";
// components/TestimonialVideosSection.jsx
import React, { useState } from "react";

const TestimonialVideosSection = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      className={`relative bg-gradient-to-b from-white via-gray-200 to-white ${"py-10"} px-4 overflow-hidden`}
    >
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            CLIENT STORIES
          </h2>
          <div
            className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent
 mx-auto mb-4"
          ></div>
          <p className="mini-title-desc text-xl text-black font-light">
            Hear directly from our clients about their transformation journey
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl max-h-140 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              {/* Play Overlay */}
              <div className="play-overlay absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 pointer-events-none">
                <div
                  className="bg-black/40 backdrop-blur-sm rounded-full p-3 pr-4 flex items-center cursor-pointer
                  group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-4 h-4 text-white ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Video Container with aspect ratio */}
              <div
                className="relative bg-white"
                style={{ paddingBottom: "177.78%" }}
              >
                {/* 9:16 Aspect Ratio for vertical videos */}
                <video
                  className="absolute top-0 left-0 w-full max-h-140 object-cover"
                  // controls
                  preload="metadata"
                  // poster={video.thumbnail}
                  onClick={() => setActiveVideo(index)}
                  onPlay={(e) => {
                    e.currentTarget
                      .closest(".group")
                      ?.querySelector(".play-overlay")
                      ?.classList.add("opacity-0");
                  }}
                  onPause={(e) => {
                    e.currentTarget
                      .closest(".group")
                      ?.querySelector(".play-overlay")
                      ?.classList.remove("opacity-0");
                  }}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Client Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 pt-12">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {video.clientName}
                </h3>
                <p className="text-gray-300 text-sm">{video.projectDetails}</p>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 left-4 bg-white/90 rounded-full p-3 shadow-lg">
                <svg
                  className="w-6 h-6 text-[#6e6250]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#6e6250] text-white font-semibold rounded-full hover:bg-[#5a5142] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View More Testimonials
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialVideosSection;
