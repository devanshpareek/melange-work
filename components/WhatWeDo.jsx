"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Shared header ────────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="text-center mb-14">
      {/* Eyebrow */}
      {eyebrow && (
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
        >
          {eyebrow}
        </p>
      )}

      {/* Heading — split last word into italic accent */}
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
        {title}
      </h2>

      {/* Divider */}
      <div
        className="mx-auto mb-6"
        style={{ width: "3rem", height: "1px", background: "rgba(0,0,0,0.15)" }}
      />

      {/* Description */}
      {description && (
        <p
          className="max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// ─── WhatWeDo ─────────────────────────────────────────────────────────────────

export default function WhatWeDo({
  services,
  title,
  description,
  showTitle = true,
}) {
  const isProcess = title?.toUpperCase().includes("PROCESS");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <section
        className={`relative bg-gradient-to-b from-white via-gray-200 to-white ${
          showTitle ? "py-10" : "py-20"
        } px-4 overflow-hidden`}
      >
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          {showTitle && (
            <SectionHeader
              eyebrow="Our Expertise"
              title={title}
              description={description}
            />
          )}

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div
                  className="relative flex flex-col h-full p-5 md:p-8 transition-all duration-500 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(4px)",
                    transition:
                      "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,92,62,0.35)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Icon + optional step number */}
                  <div className="relative mb-5 md:mb-6 flex justify-center">
                    <div
                      className="inline-flex items-center justify-center p-3 md:p-4 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: "#7c5c3e" }}
                    >
                      {service.icon}
                    </div>
                    {isProcess && (
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-xs font-medium"
                        style={{
                          background: "#1a1410",
                          color: "#fff",
                          fontFamily: "'Jost', sans-serif",
                        }}
                      >
                        {index + 1}
                      </div>
                    )}
                  </div>

                  {/* Card title */}
                  <h3
                    className="text-center mb-3 font-light"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                      color: "#1a1410",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Divider */}
                  <div
                    className="mx-auto mb-3"
                    style={{
                      width: "2rem",
                      height: "1px",
                      background: "rgba(0,0,0,0.12)",
                    }}
                  />

                  {/* Card description */}
                  <p
                    className="text-center text-sm md:text-base leading-relaxed"
                    style={{
                      color: "#a89880",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── OurProcess ───────────────────────────────────────────────────────────────

export function OurProcess({ services, title, description }) {
  const isProcess = title?.toUpperCase().includes("PROCESS");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <section className="relative bg-gradient-to-b from-white via-gray-200 to-white py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <SectionHeader
            eyebrow="How We Work"
            title={title}
            description={description}
          />

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative cursor-pointer">
                <div
                  className="relative overflow-hidden h-[250px] md:h-[400px] transition-all duration-500 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    transition:
                      "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,92,62,0.35)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Background image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Always-on dark gradient at bottom */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(20,16,13,0.85) 0%, rgba(20,16,13,0.2) 50%, transparent 100%)",
                    }}
                  />

                  {/* Step number badge */}
                  {isProcess && (
                    <div
                      className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-xs md:text-sm font-medium z-10"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        color: "#1a1410",
                        fontFamily: "'Jost', sans-serif",
                      }}
                    >
                      {index + 1}
                    </div>
                  )}

                  {/* Title — always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10 transition-all duration-400 group-hover:opacity-0">
                    <h3
                      className="text-center font-light"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                        color: "#f5efe6",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover reveal — title + description */}
                  <div
                    className="absolute inset-0 flex items-center justify-center p-5 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
                    style={{ background: "rgba(20,16,13,0.88)" }}
                  >
                    <div className="text-center space-y-3">
                      <h3
                        className="font-light"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                          color: "#f5efe6",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Divider */}
                      <div
                        className="mx-auto"
                        style={{
                          width: "2rem",
                          height: "1px",
                          background: "rgba(201,185,154,0.4)",
                        }}
                      />

                      <p
                        className="text-sm md:text-base leading-relaxed"
                        style={{
                          color: "#a89880",
                          fontFamily: "'Jost', sans-serif",
                        }}
                      >
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
    </>
  );
}
