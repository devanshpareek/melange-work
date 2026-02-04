"use client";
import { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function FunFacts() {
  const stats = [
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="32" cy="32" r="24" />
          <circle cx="24" cy="28" r="2" fill="currentColor" />
          <circle cx="40" cy="28" r="2" fill="currentColor" />
          <path d="M22 38 Q32 46 42 38" />
        </svg>
      ),
      number: 486,
      label: "HAPPY CLIENTS",
      suffix: "",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M32 12 L38 28 L56 28 L42 38 L48 54 L32 44 L16 54 L22 38 L8 28 L26 28 Z" />
        </svg>
      ),
      number: 2456,
      label: "ROOMS DESIGNED",
      suffix: "",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 32 L28 40 L44 24" />
          <rect x="12" y="12" width="40" height="40" rx="4" />
        </svg>
      ),
      number: 17390,
      label: "UNITS BUILT",
      suffix: "",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 md:w-16 md:h-16"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="12" y="16" width="40" height="36" rx="2" />
          <line x1="12" y1="24" x2="52" y2="24" />
          <line x1="22" y1="12" x2="22" y2="16" />
          <line x1="32" y1="12" x2="32" y2="16" />
          <line x1="42" y1="12" x2="42" y2="16" />
          <rect x="18" y="30" width="6" height="6" />
          <rect x="29" y="30" width="6" height="6" />
          <rect x="40" y="30" width="6" height="6" />
          <rect x="18" y="40" width="6" height="6" />
          <rect x="29" y="40" width="6" height="6" />
        </svg>
      ),
      number: 16,
      label: "WEEKS PER PROJECT",
      suffix: "",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-200 to-white py-10 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            SOME FUN FACTS
          </h2>
          <div className="separation-line w-24 h-1 bg-gradient-to-b from-transparent via-zinc-400 to-transparent mx-auto mb-4"></div>
          <p className="mini-title-desc text-xl text-black font-light">
            Our Work - By The Numbers
          </p>
        </div>

        {/* Stats Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-white p-4 md:p-5 rounded-xl"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-[#c5b49a] flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 group-hover:border-[#c5b49a]/30 transition-all duration-500">
                  <div className="text-[#c5b49a]">{stat.icon}</div>
                </div>
              </div>

              {/* Number */}
              <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#c5b49a] mb-2 md:mb-4 tabular-nums">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-sm md:text-lg text-[#c5b49a] font-medium tracking-wider">
                {stat.label}
              </p>

              {/* Decorative line */}
              <div className="mt-4 md:mt-6 mx-auto w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
