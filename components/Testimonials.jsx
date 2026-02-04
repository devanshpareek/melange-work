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

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">
            TESTIMONIALS
          </h2>
          <div className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent mx-auto mb-4"></div>
          <p className="mini-title-desc text-lg md:text-xl text-black font-light">
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
                <div className="bg-white backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center shadow-2xl h-full flex flex-col justify-center center overflow-y-auto max-h-[500px] md:max-h-none">
                  {/* Quote Text */}
                  <p className="text-base md:text-xl lg:text-2xl text-[#6e6250] leading-relaxed font-light italic align-middle">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-[#6e6250]">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#6e6250] text-sm md:text-base">
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
              className={`transition-all duration-300 rounded-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 ${
                index === currentSlide
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
