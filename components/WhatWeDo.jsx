"use client";

import { useState } from "react";
import Image from "next/image";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
        >
          {eyebrow}
        </p>
      )}
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
      <div
        className="mx-auto mb-6"
        style={{ width: "3rem", height: "1px", background: "rgba(0,0,0,0.15)" }}
      />
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

// ── Modal (mobile tap) ──────────────────────────────────────────────────────

function ServiceModal({ service, index, isProcess, onClose }) {
  if (!service) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full md:max-w-lg overflow-hidden"
        style={{ background: "#1a1410", maxHeight: "90dvh", overflowY: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image strip */}
        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(20,16,13,0.9) 0%, transparent 60%)",
            }}
          />
          {isProcess && (
            <div
              className="absolute top-4 left-4 w-9 h-9 flex items-center justify-center text-sm font-medium"
              style={{
                background: "rgba(255,255,255,0.9)",
                color: "#1a1410",
                fontFamily: "'Jost', sans-serif",
              }}
            >
              {index + 1}
            </div>
          )}
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-70"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "#f5efe6",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-7 pb-8">
          <h3
            className="font-light mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              color: "#f5efe6",
              letterSpacing: "-0.01em",
            }}
          >
            {service.title}
          </h3>
          <div
            className="mb-4"
            style={{
              width: "2rem",
              height: "1px",
              background: "rgba(201,185,154,0.35)",
            }}
          />
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── WhatWeDo ────────────────────────────────────────────────────────────────

export default function WhatWeDo({
  services,
  title,
  description,
  showTitle = true,
}) {
  const isProcess = title?.toUpperCase().includes("PROCESS");
  return (
    <>
      <style>
        {
          "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');"
        }
      </style>
      <section
        className={
          "relative bg-gradient-to-b from-white via-gray-200 to-white " +
          (showTitle ? "py-10" : "py-20") +
          " px-4 overflow-hidden"
        }
      >
        <div className="relative max-w-7xl mx-auto">
          {showTitle && (
            <SectionHeader
              eyebrow="Our Expertise"
              title={title}
              description={description}
            />
          )}
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
                  <div
                    className="mx-auto mb-3"
                    style={{
                      width: "2rem",
                      height: "1px",
                      background: "rgba(0,0,0,0.12)",
                    }}
                  />
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

// ── OurProcess ──────────────────────────────────────────────────────────────

export function OurProcess({ services, title, description }) {
  const isProcess = title?.toUpperCase().includes("PROCESS");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalService, setModalService] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);

  // On mobile (touch), tapping opens the modal.
  // On desktop, hover shows the in-card overlay; clicking also opens modal for accessibility.
  const handleCardClick = (service, index) => {
    setHoveredIndex(null); // clear hover (important on mobile where touch fires mouseenter)
    setModalService(service);
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalService(null);
    setModalIndex(null);
  };

  return (
    <>
      <style>
        {
          "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');"
        }
      </style>

      <section className="relative bg-gradient-to-b from-white via-gray-200 to-white py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="How We Work"
            title={title}
            description={description}
          />
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div key={index} className="relative cursor-pointer">
                  <div
                    className="relative overflow-hidden h-[250px] md:h-[400px]"
                    style={{
                      border: "1px solid",
                      borderColor: isHovered
                        ? "rgba(124,92,62,0.35)"
                        : "rgba(0,0,0,0.08)",
                      boxShadow: isHovered
                        ? "0 8px 32px rgba(0,0,0,0.1)"
                        : "none",
                      transform: isHovered
                        ? "translateY(-4px)"
                        : "translateY(0)",
                      transition:
                        "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                    }}
                    onClick={() => handleCardClick(service, index)}
                    onPointerEnter={(e) => {
                      if (e.pointerType === "mouse") setHoveredIndex(index);
                    }}
                    onPointerLeave={(e) => {
                      if (e.pointerType === "mouse") setHoveredIndex(null);
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      loading="lazy"
                      className="object-cover"
                      style={{
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.7s ease",
                      }}
                    />
                    {/* Dark gradient */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(20,16,13,0.85) 0%, rgba(20,16,13,0.2) 50%, transparent 100%)",
                      }}
                    />

                    {/* Step badge */}
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

                    {/* Title bar + MORE pill — fades on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10 flex flex-col items-center gap-2"
                      style={{
                        opacity: isHovered ? 0 : 1,
                        transition: "opacity 0.4s ease",
                      }}
                    >
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
                      <div
                        className="flex items-center gap-1 px-2.5 py-1"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          border: "1px solid rgba(255,255,255,0.25)",
                        }}
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#f5efe6"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="16" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        <span
                          style={{
                            color: "#f5efe6",
                            fontFamily: "'Jost', sans-serif",
                            fontSize: "0.6rem",
                            letterSpacing: "0.1em",
                          }}
                        >
                          MORE
                        </span>
                      </div>
                    </div>

                    {/* Hover overlay — desktop */}
                    <div
                      className="absolute inset-0 flex items-center justify-center p-5 md:p-8 z-20"
                      style={{
                        background: "rgba(20,16,13,0.88)",
                        opacity: isHovered ? 1 : 0,
                        pointerEvents: isHovered ? "auto" : "none",
                        transition: "opacity 0.5s ease",
                      }}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        service={modalService}
        index={modalIndex}
        isProcess={isProcess}
        onClose={closeModal}
      />
    </>
  );
}
