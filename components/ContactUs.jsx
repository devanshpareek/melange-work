"use client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", number: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .contact-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(0,0,0,0.08);
          color: #1a1410;
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline: none;
          backdrop-filter: blur(4px);
        }
        .contact-input::placeholder {
          color: #a89880;
        }
        .contact-input:focus {
          border-color: rgba(124,92,62,0.35);
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
      `}</style>

      <section className="bg-gradient-to-b from-white via-gray-200 to-white py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            {/* Eyebrow */}
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              Get In Touch
            </p>

            {/* Main heading */}
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
              Contact Us
            </h2>

            {/* Divider */}
            <div
              className="mx-auto mb-6"
              style={{
                width: "3rem",
                height: "1px",
                background: "rgba(0,0,0,0.15)",
              }}
            />

            {/* Subtitle */}
            <p
              className="text-sm md:text-base font-light"
              style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
            >
              Come and enjoy a cup of coffee with us
            </p>
          </div>

          {/* Contact Info Card */}
          <div
            className="p-8 mb-8"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(0,0,0,0.08)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 mt-1"
                  style={{ color: "#7c5c3e" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      color: "#1a1410",
                      fontWeight: 400,
                    }}
                  >
                    Our Studio
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#a89880",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    H-11/3, DLF City Phase-1, Gurgaon, Haryana 122002, India
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(0,0,0,0.06)" }} />

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 mt-1"
                  style={{ color: "#7c5c3e" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      color: "#1a1410",
                      fontWeight: 400,
                    }}
                  >
                    Phone
                  </p>
                  <p
                    className="text-sm flex gap-2"
                    style={{
                      color: "#a89880",
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    <a
                      href="tel:+919810163804"
                      className="block text-sm transition-opacity duration-200 hover:opacity-60"
                      style={{
                        color: "#a89880",
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        textDecoration: "none",
                      }}
                    >
                      +91 9810163804
                    </a>
                    <span>|</span>
                    <a
                      href="tel:+919560025169"
                      className="block text-sm transition-opacity duration-200 hover:opacity-60"
                      style={{
                        color: "#a89880",
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        textDecoration: "none",
                      }}
                    >
                      +91 9560025169
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider with label */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <div className="relative flex justify-center">
              <span
                className="px-4 text-xs tracking-[0.3em] uppercase"
                style={{
                  background: "#e5e7eb", // matches via-gray-200
                  color: "#a89880",
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                Send us a message
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="contact-input"
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="contact-input"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              className="contact-input"
              style={{ resize: "none" }}
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 px-8 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background: "#1a1410",
                color: "#f5efe6",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.3em",
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  SENDING...
                </span>
              ) : (
                "SEND MESSAGE"
              )}
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center">
            <p
              className="text-sm"
              style={{
                color: "#a89880",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
              }}
            >
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
