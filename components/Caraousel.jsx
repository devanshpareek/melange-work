"use client";

import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="home-caraousel-wrapper" className="relative w-full">
      <div className="relative h-screen overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={`carousel-slide-${idx}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, idx) => (
          <button
            key={`indicator-${idx}`}
            type="button"
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <div className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group">
        <button type="button" onClick={prevSlide} aria-label="Previous slide">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 transition-all duration-300">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group">
        <button type="button" onClick={nextSlide} aria-label="Next slide">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 transition-all duration-300">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
