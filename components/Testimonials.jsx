"use client";
import { useState, useEffect } from "react";

// export default function Testimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       quote:
//         "Our joint family, with a myriad of needs, presents a challenge in designing a new home. MELANGE not only addressed each of these diverse needs, but also designed living spaces that are both distinct and in harmony. I couldn't imagine this project without Sangeeta's creative and people skills.",
//       author: "Rajesh & Priya Sharma",
//       role: "Residential Project, Delhi",
//     },
//     {
//       quote:
//         "Working with MELANGE was an absolute pleasure. The attention to detail and understanding of our lifestyle requirements was exceptional. They transformed our house into a home that reflects our personality perfectly.",
//       author: "Amit Patel",
//       role: "Villa Project, Mumbai",
//     },
//     {
//       quote:
//         "Sangeeta's ability to blend traditional aesthetics with modern functionality is remarkable. Our home is now a perfect blend of comfort and elegance. Highly recommend MELANGE for anyone looking for premium interior design.",
//       author: "Neha & Vikram Singh",
//       role: "Apartment Project, Bangalore",
//     },
//   ];

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 px-4 overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-5">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//             TESTIMONIALS
//           </h2>
//           <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
//           <p className="text-xl text-gray-300 font-light">
//             What Clients Say About Us
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative">
//           {/* Quote Icon */}
//           <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white/10 z-0">
//             <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//             </svg>
//           </div>

//           {/* Testimonials */}
//           <div className="relative min-h-[400px] flex items-center justify-center">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-all duration-700 ${
//                   index === currentSlide
//                     ? "opacity-100 translate-x-0 scale-100"
//                     : index < currentSlide
//                     ? "opacity-0 -translate-x-full scale-95"
//                     : "opacity-0 translate-x-full scale-95"
//                 }`}
//               >
//                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
//                   {/* Quote Text */}
//                   <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light italic">
//                     "{testimonial.quote}"
//                   </p>

//                   {/* Author Info */}
//                   <div className="space-y-2">
//                     <h4 className="text-lg md:text-xl font-bold text-white">
//                       {testimonial.author}
//                     </h4>
//                     <p className="text-gray-400 text-sm md:text-base">
//                       {testimonial.role}
//                     </p>
//                   </div>

//                   {/* Decorative stars */}
//                   <div className="flex items-center justify-center gap-1 mt-6">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className="w-5 h-5 text-yellow-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
//             aria-label="Previous testimonial"
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
//             aria-label="Next testimonial"
//           >
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex items-center justify-center gap-3 mt-12">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentSlide
//                   ? "w-12 h-3 bg-white"
//                   : "w-3 h-3 bg-white/40 hover:bg-white/60"
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
      className={`relative bg-gradient-to-b from-white via-gray-200 to-white ${
        showTitle ? "py-10" : "py-20"
      } px-4 overflow-hidden`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            TESTIMONIALS
          </h2>
          <div
            className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent
 mx-auto mb-4"
          ></div>
          <p className="mini-title-desc text-xl text-black font-light">
            What Clients Say About Us
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white/10 z-0">
            <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          {/* Testimonials */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700  ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0 scale-100"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full scale-95"
                    : "opacity-0 translate-x-full scale-95"
                }`}
              >
                <div className="backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center shadow-2xl bg-white backdrop-blur-sm border border-white/10 rounded-3xl">
                  {/* Quote Text */}
                  <p className="text-xl md:text-2xl text-[#6e6250] leading-relaxed mb-8 font-light italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold text-[#6e6250]">
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

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-12 ">
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
