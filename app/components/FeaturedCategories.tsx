"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeaturedCategory {
  id: string;
  label: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

// ─── Config ───────────────────────────────────────────────────────────────────

const FEATURED: FeaturedCategory[] = [
  {
    id: "living-room",
    label: "Living Room",
    tagline: "Where stories unfold.",
    description:
      "Grand yet intimate — we balance statement ceilings, bespoke sofas, and curated art to make every gathering feel cinematic. Each living room is a portrait of the family that lives in it.",
    image: "/Melange_Faridabad1_3.jpg",
    href: "/category?category=living-room",
  },
  {
    id: "dining-area",
    label: "Dining Room",
    tagline: "Gather around beauty.",
    description:
      "More than just a place to eat — a dining room should feel like an event. We layer tactile materials, sculptural lighting, and custom tables to create a setting that elevates every meal into a moment worth savoring.",
    image: "/Melange_Faridabad2_1.jpg",
    href: "/category?category=dining-area",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    tagline: "Rest, reimagined.",
    description:
      "Layered textures, bespoke headboards, and ambient lighting systems designed to disappear into the room — leaving only calm. A space to restore, not just to sleep.",
    image: "/Melange_Faridabad3_1.jpg",
    href: "/category?category=bedroom",
  },
];

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Single Row ───────────────────────────────────────────────────────────────

const FeaturedRow = ({
  item,
  index,
}: {
  item: FeaturedCategory;
  index: number;
}) => {
  const { ref, inView } = useInView();
  const imageLeft = index % 2 !== 0;

  return (
    <div
      ref={ref}
      // md:items-stretch ensures image cell always matches text block height on desktop
      className="grid md:grid-cols-2 md:items-stretch gap-0"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        transitionDelay: "0.05s",
      }}
    >
      {/* ── Text block ── */}
      <div
        className={`flex flex-col justify-center px-8 py-10 md:px-16 md:py-20 ${
          imageLeft ? "md:order-2" : "md:order-1"
        }`}
        style={{ background: "transparent" }}
      >
        {/* Index marker */}
        <span
          className="text-xs tracking-[0.35em] uppercase mb-6 block"
          style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
        >
          {String(index + 1).padStart(2, "0")} /{" "}
          <span style={{ color: "#7c5c3e" }}>Featured</span>
        </span>

        {/* Label */}
        <h2
          className="font-light mb-2 leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            color: "#1a1410",
            letterSpacing: "-0.02em",
          }}
        >
          {item.label}
        </h2>

        {/* Tagline */}
        <p
          className="mb-6 text-base md:text-lg"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "#7c5c3e",
          }}
        >
          {item.tagline}
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

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed mb-10"
          style={{
            color: "#5c4f42",
            fontFamily: "'Jost', sans-serif",
            maxWidth: "36ch",
          }}
        >
          {item.description}
        </p>

        {/* CTA */}
        <Link
          href={item.href}
          className="group inline-flex items-center gap-3 self-start"
          style={{ textDecoration: "none" }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase border px-5 py-2.5"
            style={{
              color: "#7c5c3e",
              borderColor: "rgba(124,92,62,0.45)",
              fontFamily: "'Jost', sans-serif",
              transition:
                "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLSpanElement).style.background = "#1a1410";
              (e.currentTarget as HTMLSpanElement).style.color = "#ffffff";
              (e.currentTarget as HTMLSpanElement).style.borderColor =
                "#1a1410";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLSpanElement).style.background =
                "transparent";
              (e.currentTarget as HTMLSpanElement).style.color = "#7c5c3e";
              (e.currentTarget as HTMLSpanElement).style.borderColor =
                "rgba(124,92,62,0.45)";
            }}
          >
            Explore {item.label}
          </span>
          <span
            className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "#7c5c3e" }}
          >
            →
          </span>
        </Link>
      </div>

      {/* ── Image block ── */}
      {/*
        Mobile : h-[280px] gives a fixed visible height when stacked vertically
        Desktop: md:h-auto lets the grid row (driven by text block) set the height;
                 Next.js <Image fill> uses absolute inset-0 so it fills whatever height the cell has
      */}
      <div
        className={`relative overflow-hidden h-[280px] md:h-auto ${
          imageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={item.image}
          alt={item.label}
          fill
          loading="lazy"
          className="object-cover"
          style={{
            transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform =
              "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
          }}
        />

        {/* Subtle gradient overlay fading image edge into background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: imageLeft
              ? "linear-gradient(to left, rgba(255,255,255,0.18) 0%, transparent 60%)"
              : "linear-gradient(to right, rgba(255,255,255,0.18) 0%, transparent 60%)",
          }}
        />
      </div>
    </div>
  );
};

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader = () => {
  const { ref, inView } = useInView(0.2);
  return (
    <div
      ref={ref}
      className="text-center px-6 py-16 md:py-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <p
        className="text-xs tracking-[0.4em] uppercase mb-4"
        style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
      >
        Our Craft
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
        Spaces We&apos;ve{" "}
        <span style={{ fontStyle: "italic", color: "#7c5c3e" }}>
          Transformed
        </span>
      </h2>
      <p
        className="max-w-lg mx-auto text-sm md:text-base leading-relaxed"
        style={{ color: "#5c4f42", fontFamily: "'Jost', sans-serif" }}
      >
        A glimpse into the rooms we love most — each one a study in proportion,
        material, and the art of listening to how a family actually lives.
      </p>
    </div>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function FeaturedCategories() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <section className="bg-gradient-to-b from-white via-gray-200 to-white">
        <SectionHeader />

        {/* Rows */}
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          {FEATURED.map((item, i) => (
            <div
              key={item.id}
              style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
            >
              <FeaturedRow item={item} index={i} />
            </div>
          ))}
        </div>

        {/* "See all work" footer link */}
        <div className="text-center py-14">
          <Link
            href="/category"
            className="inline-flex items-center gap-3 group border"
            style={{
              textDecoration: "none",
              borderColor: "rgba(124,92,62,0.45)",
              padding: "0.75rem 2rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7c5c3e",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLSpanElement).style.color = "#1a1410")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLSpanElement).style.color = "#7c5c3e")
              }
            >
              View Full Portfolio
            </span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: "#7c5c3e", fontSize: "1.1rem" }}
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
