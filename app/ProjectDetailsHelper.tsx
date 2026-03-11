import Image from "next/image";

export const ProjectDescription = ({ project }: { project: any }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <div className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4 mt-15">
        <div className="max-w-4xl mx-auto">
          {/* ── Header ── */}
          <div className="text-center mb-10">
            {/* Title */}
            <h2
              className="font-light mb-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#1a1410",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h2>

            {/* Divider */}
            <div
              className="mx-auto mb-4"
              style={{
                width: "3rem",
                height: "1px",
                background: "rgba(0,0,0,0.15)",
              }}
            />

            {/* Subtitle */}
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* ── Project details grid ── */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-0 mb-10"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {[
              { value: project.details.location, label: "Location" },
              { value: project.details.area, label: "Area" },
              { value: project.details.duration, label: "Duration" },
            ].map(({ value, label }, i) => (
              <div
                key={i}
                className="text-center py-7"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : undefined,
                }}
              >
                <div
                  className="mb-1 font-light"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                    color: "#1a1410",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {value}
                </div>
                <div
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* ── Description paragraphs ── */}
          <div className="space-y-5 mb-10">
            {project.description.map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* ── Key features ── */}
          {project.features && (
            <div
              className="p-8"
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              {/* Features heading */}
              <h3
                className="font-light mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#1a1410",
                  letterSpacing: "-0.01em",
                }}
              >
                Key{" "}
                <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                  Features
                </span>
              </h3>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  width: "2rem",
                  height: "1px",
                  background: "rgba(0,0,0,0.15)",
                }}
              />

              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Check icon */}
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#7c5c3e" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className="text-sm md:text-base leading-relaxed"
                      style={{
                        color: "#5c4f42",
                        fontFamily: "'Jost', sans-serif",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// ─── ClientTestimonial ────────────────────────────────────────────────────────

export const ClientTestimonial = ({ testimonial }: { testimonial: any }) => {
  console.log(testimonial.image);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <div className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4">
        <div className="mx-10">
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              Testimonial
            </p>
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
              Client{" "}
              <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                Voice
              </span>
            </h3>
            <div
              className="mx-auto"
              style={{
                width: "3rem",
                height: "1px",
                background: "rgba(0,0,0,0.15)",
              }}
            />
          </div>

          {/* ── Card ── */}
          <div
            className="flex flex-col md:flex-row gap-8 md:gap-12 p-8 md:p-12"
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(255,255,255,0.6)",
            }}
          >
            {/* Optional image */}
            {testimonial.image && (
              <div
                className="w-full md:w-3/7 relative"
                style={{ minHeight: "320px" }}
              >
                <Image
                  src={"/" + testimonial.image}
                  alt="Testimonial"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div
              className={`${
                testimonial.image ? "md:w-4/7" : "w-full"
              } flex flex-col justify-center`}
            >
              {/* Large quote mark */}
              <svg
                className="mb-6"
                style={{
                  width: "3rem",
                  height: "3rem",
                  color: "rgba(124,92,62,0.3)",
                }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              {/* Quote */}
              <p
                className="leading-relaxed mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                  fontStyle: "italic",
                  color: "#1a1410",
                  letterSpacing: "0.01em",
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div
                className="mb-6"
                style={{
                  width: "3rem",
                  height: "1px",
                  background: "rgba(0,0,0,0.15)",
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <div
                    className="relative flex-shrink-0 overflow-hidden"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4
                    className="font-light mb-0.5"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                      color: "#1a1410",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {testimonial.author}
                  </h4>
                  <p
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{
                      color: "#a89880",
                      fontFamily: "'Jost', sans-serif",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

