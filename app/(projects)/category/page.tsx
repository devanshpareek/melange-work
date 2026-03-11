import type { Metadata } from "next";
import CategoryGalleryPage from "@/app/components/CategoryGalleryPage";
import React from "react";

// ─── SEO ──────────────────────────────────────────────────────────────────────

const categoryMeta: Record<
  string,
  { title: string; description: string; image: string }
> = {
  "living-room": {
    title: "Luxury Living Room Interior Design Portfolio",
    description:
      "Explore Melange's luxury living room designs — statement ceilings, bespoke sofas, curated art, and layered lighting. Each living room is a portrait of the family that inhabits it.",
    image: "/Melange_Faridabad1_3.jpg",
  },
  "dining-area": {
    title: "Luxury Dining Room Interior Design Portfolio",
    description:
      "Browse Melange's dining room transformations — sculptural lighting, custom tables, and tactile materials that turn every meal into an event worth savouring.",
    image: "/Melange_Faridabad2_1.jpg",
  },
  bedroom: {
    title: "Luxury Bedroom Interior Design Portfolio",
    description:
      "Discover Melange's bedroom designs — layered textures, bespoke headboards, and ambient lighting systems crafted for calm and restoration.",
    image: "/Melange_Faridabad3_1.jpg",
  },
  bathroom: {
    title: "Luxury Bathroom Interior Design Portfolio",
    description:
      "View Melange's bathroom interiors — refined materials, bespoke fixtures, and spa-like finishes that elevate every daily ritual.",
    image: "/Slider1.jpg",
  },
};

const defaultMeta = {
  title: "Interior Design Portfolio — All Rooms",
  description:
    "Browse the full interior design portfolio of Melange by Sangeeta Kapoor. Living rooms, dining areas, bedrooms, bathrooms — every space crafted with intention and elegance.",
  image: "/Slider1.jpg",
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const { category } = await searchParams;
  const meta = (category && categoryMeta[category]) || defaultMeta;
  const canonicalUrl = category
    ? `https://melange-work.vercel.app/category?category=${category}`
    : "https://melange-work.vercel.app/category";

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "interior design portfolio India",
      "luxury home interiors Gurgaon",
      "Melange interior design gallery",
      ...(category
        ? [`${category.replace("-", " ")} interior design India`]
        : []),
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      title: `${meta.title} | Melange by Sangeeta Kapoor`,
      description: meta.description,
      images: [{ url: meta.image, width: 1200, height: 800, alt: meta.title }],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const page = () => {
  return (
    <div>
      <CategoryGalleryPage />
    </div>
  );
};

export default page;
