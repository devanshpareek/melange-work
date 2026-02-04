// components/InstagramReels.jsx
import React from "react";
import "./InstagramReels.css";

const InstagramReels = ({ reels }) => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-100 to-white py-16 px-4 flex flex-col justify-center center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16  gap-12">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6e6250] mb-4">
            Follow Our Journey
          </h3>
          <div className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg italic leading-relaxed max-w-2xl mx-auto">
            Get inspired by our latest projects and design stories on Instagram
          </p>
        </div> */}

        {/* Reels Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
            reels.length >= 4 ? "4" : reels.length.toString()
          } gap-6 max-w-7xl mx-auto`}
        >
          {reels.map((reel, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Wrapper to hide top portion */}
              <div
                className="relative bg-white overflow-hidden"
                style={{ paddingBottom: "177.78%" }}
              >
                {/* iframe with negative margin to hide header */}
                <div
                  className="absolute top-0 left-0 w-full"
                  style={{ height: "calc(100% + 100px)", marginTop: "-50px" }}
                >
                  <iframe
                    className="w-full h-full"
                    src={`${reel.embedUrl}?utm_source=ig_embed&amp;utm_campaign=loading`}
                    title={`Instagram Reel ${index + 1}`}
                    frameBorder="0"
                    scrolling="no"
                    // allowTransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>

                {/* Overlay to cover the top and bottom */}
                <div className="absolute top-0 left-0 right-0 h-5 bg-white pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-5 bg-white pointer-events-none z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/melange.by.sangeetakapoor/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#6e6250] text-white font-semibold rounded-full hover:bg-[#5a5142] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
