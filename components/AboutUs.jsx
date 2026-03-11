"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutUs({ showTitle = true }) {
  const [imageLoaded, setImageLoaded] = useState(false);

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
          {/* ── Section Header ── */}
          {showTitle && (
            <div className="text-center mb-16">
              {/* Eyebrow */}
              <p
                className="text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
              >
                Our Studio
              </p>

              {/* Heading */}
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
                About{" "}
                <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                  Us
                </span>
              </h2>

              {/* Divider */}
              <div
                className="mx-auto"
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "rgba(0,0,0,0.15)",
                }}
              />
            </div>
          )}

          {/* ── Content Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* ── Image Side ── */}
            <div className="relative">
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/MariaDoe.jpg"
                  alt="Sangeeta Kapoor"
                  fill
                  className="object-cover"
                  style={{
                    opacity: imageLoaded ? 1 : 0,
                    transition:
                      "opacity 0.6s ease, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                  onLoad={() => setImageLoaded(true)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* Name card — sits below image, flush left */}
              <div
                className="mt-6 pl-1"
                style={{
                  borderLeft: "2px solid rgba(124,92,62,0.4)",
                  paddingLeft: "1rem",
                }}
              >
                <h3
                  className="font-light mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                    color: "#1a1410",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Sangeeta Kapoor
                </h3>
                <p
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
                >
                  Interior Designer &amp; Founder
                </p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href="https://www.facebook.com/Melange-By-Sangeeta-Kapoor-193973380623291/?pnref=lhc"
                    target="blank"
                    aria-label="Facebook"
                    className="flex items-center justify-center transition-all duration-300"
                    style={{
                      width: "2.2rem",
                      height: "2.2rem",
                      border: "1px solid rgba(0,0,0,0.12)",
                      color: "#5c4f42",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1a1410";
                      e.currentTarget.style.borderColor = "#1a1410";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.color = "#5c4f42";
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/melange.by.sangeetakapoor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    aria-label="Instagram"
                    target="blank"
                    className="flex items-center justify-center transition-all duration-300"
                    style={{
                      width: "2.2rem",
                      height: "2.2rem",
                      border: "1px solid rgba(0,0,0,0.12)",
                      color: "#5c4f42",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1a1410";
                      e.currentTarget.style.borderColor = "#1a1410";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.color = "#5c4f42";
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Text Side ── */}
            <div className="space-y-6">
              {/* Eyebrow badge — replaces the gradient pill */}
              <span
                className="text-xs tracking-[0.35em] uppercase block mb-2"
                style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
              >
                A legacy of design and craftsmanship since{" "}
                <span style={{ color: "#7c5c3e" }}>1997</span>
              </span>

              {/* Paragraphs */}
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  color: "#5c4f42",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)",
                    fontWeight: 400,
                    color: "#1a1410",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Melange by Sangeeta Kapoor
                </span>{" "}
                is a design studio built on the belief that a home should feel
                as beautiful as it looks. Crafted with intention, personality,
                and a deep understanding of how people live.
              </p>

              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  color: "#5c4f42",
                }}
              >
                With a legacy of design and craftsmanship{" "}
                <span style={{ color: "#1a1410", fontWeight: 500 }}>
                  since 1997
                </span>
                , we've spent over 25 years creating homes that resonate with
                warmth, comfort, and lasting elegance. Led by{" "}
                <span style={{ color: "#1a1410", fontWeight: 500 }}>
                  Sangeeta Kapoor
                </span>
                , Melange has designed interiors for discerning clients across
                India and the UK, blending thoughtful aesthetics with functional
                living.
              </p>

              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  color: "#5c4f42",
                }}
              >
                From{" "}
                <span style={{ color: "#1a1410", fontWeight: 500 }}>
                  bespoke furniture crafted to lend warmth and elegance
                </span>
                , to complete interior solutions built around comfort and
                individuality, every project is driven by a passion for detail
                and a commitment to bringing our clients' visions to life.
              </p>

              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  color: "#5c4f42",
                }}
              >
                At Melange, every project is an expression of the people who
                inhabit it. Our process is rooted in{" "}
                <span style={{ color: "#1a1410", fontWeight: 500 }}>
                  collaboration, refinement, and an appreciation for nuance
                </span>{" "}
                — ensuring each space feels{" "}
                <span style={{ color: "#1a1410", fontWeight: 500 }}>
                  uniquely yours.
                </span>
              </p>

              {/* Divider */}
              <div
                className="pt-2"
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "rgba(0,0,0,0.15)",
                }}
              />

              {/* Tagline in Cormorant italic */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  color: "#7c5c3e",
                }}
              >
                Timeless, elegant, and uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
