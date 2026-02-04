// components/TestimonialVideo.jsx
import React from "react";

const TestimonialVideo = ({ video }) => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-200 to-white py-16 px-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Side by Side Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6e6250] mb-4">
              Hear From Our Clients
            </h3>
            <div className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent mb-6"></div>
            <p className="text-gray-600 text-lg italic leading-relaxed max-w-md">
              Watch how we transform spaces and lives
            </p>
          </div>

          {/* Right Side - Video */}
          <div className="w-full lg:w-2/5">
            {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[100%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video}
                  title="Client Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div> */}

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Video Aspect Ratio Container */}
              <div className="relative pb-[100%]">
                {" "}
                {/* 16:9 Aspect Ratio */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  alt="Testimonial video not found"
                  preload="metadata"
                >
                  <source
                    src={video}
                    alt="Testimonial video not found"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideo;
