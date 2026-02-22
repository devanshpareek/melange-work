"use client";

import React, { useState } from "react";

interface Video {
  url: string;
  clientName: string;
  projectDetails: string;
  thumbnail?: string;
}

const TestimonialVideosSection = ({ videos }: { videos: Video[] }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        .video-card:hover .play-overlay { opacity: 0; }
      `}</style>

      <section className="relative bg-gradient-to-b from-white via-gray-200 to-white py-20 px-4 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              Testimonials
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
              Client{" "}
              <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                Stories
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
              Hear directly from our clients about their transformation journey.
            </p>
          </div>

          {/* ── Video grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <VideoCard key={index} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─── VideoCard ────────────────────────────────────────────────────────────────

const VideoCard = ({ video, index }: { video: Video; index: number }) => {
  return (
    <div
      className="video-card group relative overflow-hidden transition-all duration-300"
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(124,92,62,0.35)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Quote mark — top left */}
      <div
        className="absolute top-4 left-4 z-20 flex items-center justify-center"
        style={{
          width: "2.2rem",
          height: "2.2rem",
          background: "rgba(245,239,230,0.92)",
          border: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <svg
          className="w-4 h-4"
          style={{ color: "#7c5c3e" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Play overlay — hides when video plays via CSS (.video-card:hover .play-overlay) */}
      <div className="play-overlay absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-300">
        <div
          className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            width: "3rem",
            height: "3rem",
            background: "rgba(245,239,230,0.92)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <svg
            className="w-5 h-5 ml-0.5"
            style={{ color: "#1a1410" }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Video — 9:16 aspect ratio */}
      <div className="relative" style={{ paddingBottom: "177.78%" }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
          preload="metadata"
          poster={video.thumbnail}
          onPlay={(e) => {
            e.currentTarget
              .closest(".video-card")
              ?.querySelector(".play-overlay")
              ?.classList.add("opacity-0");
          }}
          onPause={(e) => {
            e.currentTarget
              .closest(".video-card")
              ?.querySelector(".play-overlay")
              ?.classList.remove("opacity-0");
          }}
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Client info — sits BELOW the video, outside it, so controls don't collide */}
      <div
        className="px-5 py-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      >
        <h3
          className="font-light mb-0.5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            color: "#1a1410",
            letterSpacing: "-0.01em",
          }}
        >
          {video.clientName}
        </h3>
        <p
          className="text-xs tracking-[0.15em] uppercase"
          style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
        >
          {video.projectDetails}
        </p>
      </div>
    </div>
  );
};

export default TestimonialVideosSection;
