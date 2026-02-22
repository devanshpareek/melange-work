"use client";
import { useState } from "react";

export default function Footer() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <footer className="relative bg-gradient-to-b from-[#c5b49a] via-white to-[#c5b49a]">
        {/* Map Section */}
        <div className="relative h-96 w-full overflow-hidden">
          {!mapLoaded && (
            <div className="absolute inset-0 bg-slate-700 animate-pulse flex items-center justify-center">
              <p
                style={{
                  color: "#a89880",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                }}
              >
                Loading map...
              </p>
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2833145959916!2d77.08814631508236!3d28.476816182470846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x6176e37f0e067ae!2sMelange!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            className="grayscale-[50%] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>

        {/* Footer Content */}
        <div className="relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                {/* Brand name */}
                <h3
                  className="font-light mb-4 tracking-widest"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                    color: "#1a1410",
                    letterSpacing: "0.15em",
                  }}
                >
                  MELANGE
                </h3>

                {/* Divider */}
                <div
                  className="mb-5 md:mr-auto"
                  style={{
                    width: "3rem",
                    height: "1px",
                    background: "rgba(0,0,0,0.15)",
                    margin: "0 auto 1.25rem",
                  }}
                />

                <p
                  className="leading-relaxed mb-6 text-sm md:text-base"
                  style={{
                    color: "#5c4f42",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Creating beautiful and elegant living spaces for over 25+
                  years across India and the UK.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  {[
                    {
                      label: "Facebook",
                      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                    },
                    {
                      label: "Instagram",
                      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    },
                    {
                      label: "LinkedIn",
                      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    },
                  ].map(({ label, path }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: "rgba(255,255,255,0.4)",
                        color: "#7c5c3e",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(124,92,62,0.4)";
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.7)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.4)";
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right">
                {/* Section label */}
                <p
                  className="text-xs tracking-[0.4em] uppercase mb-4"
                  style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
                >
                  Get In Touch
                </p>

                <h2
                  className="font-light mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    color: "#1a1410",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Our Studio
                </h2>

                {/* Divider */}
                <div
                  className="mb-6 ml-auto"
                  style={{
                    width: "2rem",
                    height: "1px",
                    background: "rgba(0,0,0,0.12)",
                  }}
                />

                <div className="space-y-3">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#5c4f42",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    H-11/3, DLF City Phase-1
                    <br />
                    Gurgaon, Haryana 122002, India
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: "#a89880",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    +91 9810163804
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: "#a89880",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    info@melange.com
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div
              className="pt-8"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p
                  className="text-xs"
                  style={{
                    color: "#a89880",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  © 2020 Xclusive Creations at Melange. All rights reserved.
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "#a89880",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Built by Devansh Pareek
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
