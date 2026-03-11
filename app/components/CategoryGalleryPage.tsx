"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { categoryWiseImages } from "../utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CategoryData {
  id: string;
  label: string;
  tagline: string;
  description: string;
  images: string[];
}

// ─── Shimmer placeholder ──────────────────────────────────────────────────────

const shimmerSvg = (w: number, h: number) => `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stop-color="#2a2218"/>
        <stop offset="50%"  stop-color="#3d3228"/>
        <stop offset="100%" stop-color="#2a2218"/>
        <animateTransform attributeName="gradientTransform" type="translate"
          from="-1 0" to="1 0" dur="1.4s" repeatCount="indefinite"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
  </svg>`;

const BLUR_DATA = `data:image/svg+xml;base64,${Buffer.from(
  shimmerSvg(400, 300)
).toString("base64")}`;

// ─── LazyImage ────────────────────────────────────────────────────────────────

const LazyImage = memo(
  ({
    src,
    alt,
    objectFit = "cover",
  }: {
    src: string;
    alt: string;
    objectFit?: "cover" | "contain";
  }) => {
    const [loaded, setLoaded] = useState(false);
    return (
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        placeholder="blur"
        blurDataURL={BLUR_DATA}
        onLoad={() => setLoaded(true)}
        className={objectFit === "contain" ? "object-contain" : "object-cover"}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.45s ease" }}
      />
    );
  }
);
LazyImage.displayName = "LazyImage";

// ─── ObservedCell ─────────────────────────────────────────────────────────────
// Each grid cell observes itself. While outside the viewport it renders only
// a lightweight shimmer div (no <Image>, no network request).
// When it enters the viewport the real image is mounted and stays mounted
// (unobserve after first reveal) so it doesn't flicker on scroll-back.

const ObservedCell = memo(
  ({
    src,
    alt,
    aspectRatio,
    gridColumn,
    onClick,
  }: {
    src: string;
    alt: string;
    aspectRatio: string;
    gridColumn?: string;
    onClick: () => void;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(el); // once visible, stay visible — no flicker
          }
        },
        {
          rootMargin: "200px 0px", // start loading 200px before entering viewport
          threshold: 0,
        }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className="relative overflow-hidden cursor-pointer group"
        style={{ aspectRatio, gridColumn }}
        onClick={onClick}
      >
        {inView ? (
          <>
            <LazyImage src={src} alt={alt} />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
              style={{
                background: "rgba(20,16,13,0.45)",
                transition: "opacity 0.4s ease",
              }}
            >
              <span
                className="text-xs tracking-[0.3em] uppercase border px-4 py-2"
                style={{
                  color: "#f5efe6",
                  borderColor: "rgba(201,185,154,0.6)",
                }}
              >
                View
              </span>
            </div>
          </>
        ) : (
          // Shimmer placeholder — holds layout space, zero network cost
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #2a2218 0%, #3d3228 50%, #2a2218 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s infinite",
            }}
          />
        )}
      </div>
    );
  }
);
ObservedCell.displayName = "ObservedCell";

// ─── Category Config ──────────────────────────────────────────────────────────

const CATEGORIES: CategoryData[] = [
  {
    id: "living-room",
    label: "Living Room",
    tagline: "Where stories unfold.",
    description:
      "We designed living spaces that strike a perfect balance between grandeur and warmth — statement ceilings, bespoke sofas, and curated art that make every gathering feel cinematic.",
    images: categoryWiseImages["living-room"],
  },
  {
    id: "dining-area",
    label: "Dining Area",
    tagline: "Meals deserve a stage.",
    description:
      "From intimate family dinners to celebratory feasts, we crafted dining spaces with dramatic lighting, refined table landscapes, and materials that age beautifully with every shared meal.",
    images: categoryWiseImages["dining-area"],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    tagline: "Rest, reimagined.",
    description:
      "Our bedrooms are sanctuaries — layered textures, bespoke headboards, ambient lighting systems, and thoughtful storage that disappear into the design, leaving only serenity.",
    images: categoryWiseImages["bedroom"],
  },
  // {
  //   id: "tvCabinet",
  //   label: "TV Cabinet",
  //   tagline: "Screens that disappear into design.",
  //   description:
  //     "We treat the TV wall as a focal canvas — integrating screens seamlessly with fluted panels, back-lit joinery, and custom millwork so technology feels like art, not an afterthought.",
  //   images: categoryWiseImages["tvCabinet"],
  // },
  // {
  //   id: "closets",
  //   label: "Closets",
  //   tagline: "Order as a luxury.",
  //   description:
  //     "Walk-in wardrobes designed as dressing rooms — full-height mirrors, velvet-lined drawers, accent lighting on display shelves, and a layout that makes the ritual of dressing feel indulgent.",
  //   images: categoryWiseImages["closets"],
  // },
  {
    id: "bathroom",
    label: "Bathroom",
    tagline: "Your private retreat.",
    description:
      "Spa-inspired bathrooms with book-matched marble, freestanding soaking tubs, rain showers with mood lighting, and fixtures chosen not just for function but for how they feel in your hand.",
    images: categoryWiseImages["bathroom"],
  },
  {
    id: "outdoor-space",
    label: "Quiet Corners",
    tagline: "Corners to escape, moments to pause.",
    description:
      "The beauty of a home often lies in its quieter spaces. From serene pooja rooms to carefully styled corridors and balcony nooks, these corners bring warmth, character, and balance to everyday living.",
    images: categoryWiseImages["outdoor-space"],
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────

const Lightbox = memo(
  ({
    images,
    index,
    onClose,
  }: {
    images: string[];
    index: number;
    onClose: () => void;
  }) => {
    const [current, setCurrent] = useState(index);

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
        if (e.key === "ArrowLeft")
          setCurrent((c) => (c - 1 + images.length) % images.length);
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [images.length, onClose]);

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: "rgba(20,16,13,0.96)" }}
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-3xl font-thin"
          style={{ color: "#c9b99a" }}
          aria-label="Close"
        >
          ×
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((c) => (c - 1 + images.length) % images.length);
          }}
          className="absolute left-6 text-4xl font-thin select-none"
          style={{ color: "#c9b99a" }}
          aria-label="Previous"
        >
          ‹
        </button>
        <div
          className="relative w-full max-w-4xl mx-16"
          style={{ aspectRatio: "4/3" }}
          onClick={(e) => e.stopPropagation()}
        >
          <LazyImage
            key={images[current]}
            src={images[current]}
            alt={`Image ${current + 1}`}
            objectFit="contain"
          />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((c) => (c + 1) % images.length);
          }}
          className="absolute right-6 text-4xl font-thin select-none"
          style={{ color: "#c9b99a" }}
          aria-label="Next"
        >
          ›
        </button>
        <p
          className="absolute bottom-6 text-sm tracking-widest"
          style={{ color: "#9a8a75" }}
        >
          {current + 1} / {images.length}
        </p>
      </div>
    );
  }
);
Lightbox.displayName = "Lightbox";

// ─── Category View ────────────────────────────────────────────────────────────

const CategoryView = memo(
  ({
    category,
    catIndex,
    onImageClick,
  }: {
    category: CategoryData;
    catIndex: number;
    onImageClick: (i: number) => void;
  }) => {
    const validImages = category.images.filter((src) => Boolean(src?.trim()));

    return (
      <section className="mb-10">
        {/* ── Header ── */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#9a8a75" }}
            >
              {String(catIndex + 1).padStart(2, "0")}
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(201,185,154,0.25)" }}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-8">
            <div>
              <h2
                className="text-3xl md:text-5xl font-light mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#f5efe6",
                  letterSpacing: "-0.01em",
                }}
              >
                {category.label}
              </h2>
              <p
                className="text-sm md:text-base italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#c9b99a",
                }}
              >
                {category.tagline}
              </p>
            </div>
            <p
              className="md:max-w-md text-sm md:text-base leading-relaxed md:text-right"
              style={{ color: "#a89880", fontFamily: "'Jost', sans-serif" }}
            >
              {category.description}
            </p>
          </div>
        </div>

        {/* ── Grid ── */}
        <div
          className="grid gap-2 md:gap-3"
          style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          {validImages.map((src, i) => (
            <ObservedCell
              key={`${category.id}-${i}`}
              src={src}
              alt={`${category.label} ${i + 1}`}
              aspectRatio="4/3"
              gridColumn={i === 4 ? "span 2 / span 2" : undefined}
              onClick={() => onImageClick(i)}
            />
          ))}
        </div>
      </section>
    );
  }
);
CategoryView.displayName = "CategoryView";

// ─── Page ─────────────────────────────────────────────────────────────────────
// Wrapped in Suspense because useSearchParams() requires it during static build.
// Without this Next.js throws a prerender error on build.

import { Suspense } from "react";

function CategoryGalleryPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read ?category= from URL on mount; fall back to first category
  const paramCategory = searchParams.get("category");
  const initialCategory =
    CATEGORIES.find((c) => c.id === paramCategory)?.id ?? CATEGORIES[0].id;

  const [activeCategoryId, setActiveCategoryId] =
    useState<string>(initialCategory);
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  // Stay in sync when user navigates back/forward in browser history
  useEffect(() => {
    const param = searchParams.get("category");
    const matched = CATEGORIES.find((c) => c.id === param)?.id;
    if (matched && matched !== activeCategoryId) {
      setActiveCategoryId(matched);
    }
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeCategory =
    CATEGORIES.find((c) => c.id === activeCategoryId) ?? CATEGORIES[0];
  const validImages = activeCategory.images.filter((src) =>
    Boolean(src?.trim())
  );

  const handleImageClick = useCallback(
    (i: number) => setLightboxState({ images: validImages, index: i }),
    [validImages]
  );

  const handleCategorySwitch = useCallback(
    (id: string) => {
      setActiveCategoryId(id);
      // Update URL param without a full reload — preserves other params if any
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", id);
      router.push(`?${params.toString()}`, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [router, searchParams]
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .cat-pill {
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .cat-pill:hover {
          background: rgba(201,185,154,0.1) !important;
        }
      `}</style>

      {lightboxState && (
        <Lightbox
          images={lightboxState.images}
          index={lightboxState.index}
          onClose={() => setLightboxState(null)}
        />
      )}

      <main
        style={{
          background: "#14100d",
          minHeight: "100vh",
          marginTop: "2rem",
          fontFamily: "'Jost', sans-serif",
        }}
      >
        {/* ── Hero ── */}
        <div
          className="pt-20 pb-12 px-6 md:px-16 lg:px-24 text-center"
          style={{ borderBottom: "1px solid rgba(201,185,154,0.15)" }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#9a8a75" }}
          >
            Melange by Sangeeta Kapoor
          </p>
          <h1
            className="text-5xl md:text-7xl font-light mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#f5efe6",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Our Work,{" "}
            <span style={{ fontStyle: "italic", color: "#c9b99a" }}>
              by Space
            </span>
          </h1>
          <p
            className="max-w-xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ color: "#9a8a75" }}
          >
            Every room holds its own language. Browse our portfolio by category
            to see how we speak it — in texture, light, proportion, and detail.
          </p>
        </div>

        {/* ── Sticky Category Nav ── */}
        <div
          className="sticky top-0 z-30 px-4 md:px-16 lg:px-24 py-3 md:py-4"
          style={{
            background: "rgba(20,16,13,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(201,185,154,0.12)",
          }}
        >
          {/* Mobile: 3-column grid so all categories are visible at once */}
          {/* Desktop: single row flex */}
          <div className="grid grid-cols-3 gap-1.5 md:hidden">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  className="cat-pill py-2 px-1 text-[10px] tracking-widest uppercase border text-center leading-tight"
                  style={{
                    color: isActive ? "#14100d" : "#9a8a75",
                    background: isActive ? "#c9b99a" : "transparent",
                    borderColor: isActive ? "#c9b99a" : "rgba(201,185,154,0.3)",
                  }}
                  onClick={() => handleCategorySwitch(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Desktop: horizontal row */}
          <div className="hidden md:flex items-center gap-3 overflow-x-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  className="cat-pill px-4 py-1.5 text-xs tracking-widest uppercase border whitespace-nowrap"
                  style={{
                    color: isActive ? "#14100d" : "#9a8a75",
                    background: isActive ? "#c9b99a" : "transparent",
                    borderColor: isActive ? "#c9b99a" : "rgba(201,185,154,0.3)",
                  }}
                  onClick={() => handleCategorySwitch(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Category Only ── */}
        <div className="px-6 md:px-16 lg:px-24 pt-16">
          <CategoryView
            key={activeCategory.id}
            category={activeCategory}
            catIndex={CATEGORIES.indexOf(activeCategory)}
            onImageClick={handleImageClick}
          />
        </div>

        {/* ── Footer ── */}
        <div
          className="mx-6 md:mx-16 lg:mx-24 pb-16 pt-4 text-center"
          style={{ borderTop: "1px solid rgba(201,185,154,0.15)" }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mt-8"
            style={{ color: "#5a4f45" }}
          >
            Melange by Sangeeta Kapoor — Gurugram
          </p>
        </div>
      </main>
    </>
  );
}

export default function CategoryGalleryPage() {
  return (
    <Suspense
      fallback={<main style={{ background: "#14100d", minHeight: "100vh" }} />}
    >
      <CategoryGalleryPageInner />
    </Suspense>
  );
}
