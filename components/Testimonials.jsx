"use client";
import { useState, useEffect } from "react";

export default function Testimonials({ showTitle = true }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "We are in love with the space. Hi, my name is Shreya Gupta and working with Milans was a wonderful experience. Sangeeta ma'am truly understood each one of us and the interiors were done wonderfully. If you see us, you will understand what we mean because every furniture, every fabric, like really reflects us and the team also really understood us well.",
      author: "Shreya Gupta",
      role: "Independent house (3 floors + terrace) end to end project, Faridabad.",
    },
    {
      quote:
        "My experience with her, like, you know, there was a comfort level with her, her team, everybody, even small, small details, like curtains, anything, there's a warmth in our house. The most important thing about her is that it's not like a house, it's a home. When you enter, it gives a feeling you have come to your home, your abode. Very good, awesome. We love it, and there was a comfort level with her. She knew it. She was so confident about it. But finally, we are all very happy living in this house, and every day, I think, is the one thing I do is just remember her every day.",
      author: "Praveen Nangia",
      role: "4 BHK apartment in Gurugram with contemporary design.",
    },
    {
      quote:
        "My house was very old, so I wanted to get it renovated. And this could happen by Sangeeta Kapoor. She really made my dreams come true. The garden, the big rooms, the peaceful environment, where you can meditate, a beautiful temple, everything is beautiful, you don't feel like going anywhere. I would just say that if anyone wants to build their house, please choose her. She is the best.",
      author: "Sashi Aggarwal",
      role: "Independent house (3 floors + terrace) end to end project, Gurugram.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <section
        id="testimonials"
        className={`relative bg-gradient-to-b from-white via-gray-200 to-white ${
          showTitle ? "py-10 md:py-16" : "py-20"
        } px-4 overflow-hidden`}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            {/* Eyebrow */}
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              Client Stories
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
              Testimonials
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
              What Clients Say About Us
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative px-4 md:px-0">
            {/* Quote Icon */}
            <div className="absolute -top-4 md:-top-8 left-1/2 -translate-x-1/2 text-white/10 z-0 pointer-events-none">
              <svg
                className="w-20 h-20 md:w-32 md:h-32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Testimonials */}
            <div className="relative min-h-[500px] md:min-h-[400px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0 scale-100"
                      : index < currentSlide
                      ? "opacity-0 -translate-x-full scale-95"
                      : "opacity-0 translate-x-full scale-95"
                  }`}
                >
                  <div
                    className="backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 text-center shadow-2xl h-full flex flex-col justify-center overflow-y-auto max-h-[500px] md:max-h-none"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Quote Text */}
                    <p
                      className="leading-relaxed italic mb-6"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                        color: "#5c4f42",
                        fontWeight: 300,
                      }}
                    >
                      "{testimonial.quote}"
                    </p>

                    {/* Divider */}
                    <div
                      className="mx-auto mb-4"
                      style={{
                        width: "2rem",
                        height: "1px",
                        background: "rgba(0,0,0,0.12)",
                      }}
                    />

                    {/* Author Info */}
                    <div className="space-y-1">
                      <h4
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                          color: "#1a1410",
                          fontWeight: 400,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {testimonial.author}
                      </h4>
                      <p
                        className="text-sm md:text-base"
                        style={{
                          color: "#a89880",
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 h-3"
                    : "w-3 h-3 hover:opacity-60"
                }`}
                style={{
                  background:
                    index === currentSlide ? "#7c5c3e" : "rgba(124,92,62,0.3)",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
