// components/TestimonialVideo.tsx
import React from "react";

const TestimonialVideo = ({ video, thumbnail }) => {
  console.log(video);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <section className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* ── Left — text ── */}
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Eyebrow */}
              <p
                className="text-xs tracking-[0.4em] uppercase mb-4"
                style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
              >
                Testimonials
              </p>

              {/* Heading */}
              <h3
                className="font-light mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#1a1410",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                Hear From{" "}
                <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                  Our Clients
                </span>
              </h3>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "rgba(0,0,0,0.15)",
                }}
              />

              {/* Subtext */}
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  fontStyle: "italic",
                  color: "#7c5c3e",
                  maxWidth: "32ch",
                }}
              >
                Watch how we transform spaces and lives.
              </p>
            </div>

            {/* ── Right — video ── */}
            <div className="w-full lg:w-2/5">
              <div
                className="relative overflow-hidden"
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "rgba(255,255,255,0.6)",
                }}
              >
                <div className="relative pb-[100%]">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={thumbnail}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialVideo;
