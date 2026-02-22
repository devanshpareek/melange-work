"use client";

import { useState, useEffect, useRef } from "react";

// ─── Animated counter ─────────────────────────────────────────────────────────

const Counter = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
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

// ─── Stats data ───────────────────────────────────────────────────────────────

const stats = [
  {
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    label: "Happy Clients",
    suffix: "",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 12 L38 28 L56 28 L42 38 L48 54 L32 44 L16 54 L22 38 L8 28 L26 28 Z" />
      </svg>
    ),
    number: 2456,
    label: "Rooms Designed",
    suffix: "",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 32 L28 40 L44 24" />
        <rect x="12" y="12" width="40" height="40" rx="2" />
      </svg>
    ),
    number: 17390,
    label: "Units Built",
    suffix: "",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
    label: "Weeks Per Project",
    suffix: "",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FunFacts() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <section className="relative bg-gradient-to-b from-white via-gray-200 to-white py-20 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">

          {/* ── Header ── */}
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              By The Numbers
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
              Some{" "}
              <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
                Fun Facts
              </span>
            </h2>
            <div
              className="mx-auto mb-6"
              style={{ width: "3rem", height: "1px", background: "rgba(0,0,0,0.15)" }}
            />
            <p
              className="max-w-xl mx-auto text-sm md:text-base leading-relaxed"
              style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
            >
              A reflection of the trust our clients have placed in us over 25
              years of crafting beautiful spaces.
            </p>
          </div>

          {/* ── Stats grid ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ border: "1px solid rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.08)" }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center px-6 py-10 md:py-14 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.95)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.7)";
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 md:mb-7 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: "#7c5c3e" }}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div
                  className="tabular-nums mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 300,
                    color: "#1a1410",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>

                {/* Divider */}
                <div
                  className="mb-3"
                  style={{ width: "2rem", height: "1px", background: "rgba(0,0,0,0.15)" }}
                />

                {/* Label */}
                <p
                  className="text-xs tracking-[0.25em] uppercase"
                  style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}