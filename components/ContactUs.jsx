"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_pqqidnr";
const EMAILJS_TEMPLATE_ID = "template_bg3gzyt";
const EMAILJS_PUBLIC_KEY = "pFbe8Rs4lxAiwJkbZ";

const inputClass = [
  "w-full px-6 py-4",
  "bg-white/60 backdrop-blur-sm",
  "border border-black/[0.08]",
  "text-[#1a1410] text-[0.95rem] font-light",
  "placeholder:text-[#a89880]",
  "focus:outline-none focus:border-[rgba(124,92,62,0.35)] focus:shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
  "transition-all duration-300",
].join(" ");

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.number,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-gradient-to-b from-white via-gray-200 to-white py-10 px-4"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#a89880" }}
          >
            Get In Touch
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
            Contact Us
          </h2>
          <div className="mx-auto mb-6 w-12 h-px bg-black/15" />
          <p
            className="text-sm md:text-base font-light"
            style={{ color: "#5c4f42" }}
          >
            Come and enjoy a cup of coffee with us
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="p-8 mb-8 bg-white/60 backdrop-blur-sm border border-black/[0.08]">
          <div className="space-y-5">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1" style={{ color: "#7c5c3e" }}>
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
                  className="mb-1 text-[1.1rem]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1a1410",
                    fontWeight: 400,
                  }}
                >
                  Our Studio
                </p>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: "#a89880" }}
                >
                  H-11/3, DLF City Phase-1, Gurgaon, Haryana 122002, India
                </p>
              </div>
            </div>

            <div className="h-px bg-black/[0.06]" />

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1" style={{ color: "#7c5c3e" }}>
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
                  className="mb-1 text-[1.1rem]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#1a1410",
                    fontWeight: 400,
                  }}
                >
                  Phone
                </p>
                <div
                  className="flex gap-2 text-sm font-light"
                  style={{ color: "#a89880" }}
                >
                  <a
                    href="tel:+919810163804"
                    className="hover:opacity-60 transition-opacity duration-200 no-underline"
                    style={{ color: "#a89880" }}
                  >
                    +91 9810163804
                  </a>
                  <span>|</span>
                  <a
                    href="tel:+919560025169"
                    className="hover:opacity-60 transition-opacity duration-200 no-underline"
                    style={{ color: "#a89880" }}
                  >
                    +91 9560025169
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with label */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-black/10" />
          </div>
          <div className="relative flex justify-center">
            <span
              className="px-4 text-xs tracking-[0.3em] uppercase bg-gray-200"
              style={{ color: "#a89880" }}
            >
              Send us a message
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={inputClass}
          />
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
            className={inputClass}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className={inputClass + " resize-none"}
          />

          {/* Success banner */}
          {submitStatus === "success" && (
            <div
              className="flex items-center gap-3 px-5 py-4 border"
              style={{
                background: "rgba(124,92,62,0.08)",
                borderColor: "rgba(124,92,62,0.2)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7c5c3e"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <p className="text-sm font-light" style={{ color: "#7c5c3e" }}>
                Your message has been sent. We'll be in touch within 24 hours.
              </p>
            </div>
          )}

          {/* Error banner */}
          {submitStatus === "error" && (
            <div
              className="flex items-center gap-3 px-5 py-4 border"
              style={{
                background: "rgba(180,60,40,0.06)",
                borderColor: "rgba(180,60,40,0.15)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b43c28"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-sm font-light" style={{ color: "#b43c28" }}>
                {!formData.name || !formData.email || !formData.message
                  ? "Please fill in your name, email and message."
                  : "Something went wrong. Please try again or email us directly."}
              </p>
            </div>
          )}

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-4 px-8 text-xs font-medium tracking-[0.3em] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{ background: "#1a1410", color: "#f5efe6" }}
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
          <p className="text-sm font-light" style={{ color: "#a89880" }}>
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
