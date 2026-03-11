import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://melange-work.vercel.app"),
  title: {
    default:
      "Melange by Sangeeta Kapoor | Luxury Interior Design Studio, Gurgaon",
    template: "%s | Melange by Sangeeta Kapoor",
  },
  description:
    "Melange by Sangeeta Kapoor is a luxury interior design studio based in Gurgaon with 25+ years of experience crafting bespoke homes across India and the UK. Specialising in end-to-end residential interiors — from design and blueprints to installation and furnishing.",
  keywords: [
    "interior design Gurgaon",
    "luxury interior designer India",
    "interior design studio Delhi NCR",
    "Sangeeta Kapoor interior designer",
    "Melange interior design",
    "bespoke home interiors",
    "residential interior design",
    "luxury home design India",
    "interior designer Faridabad",
    "interior designer Noida",
    "end to end interior design",
    "home renovation Delhi NCR",
  ],
  authors: [
    { name: "Sangeeta Kapoor", url: "https://melange-work.vercel.app" },
  ],
  creator: "Melange by Sangeeta Kapoor",
  publisher: "Melange by Sangeeta Kapoor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://melange-work.vercel.app",
    siteName: "Melange by Sangeeta Kapoor",
    title:
      "Melange by Sangeeta Kapoor | Luxury Interior Design Studio, Gurgaon",
    description:
      "Luxury interior design studio based in Gurgaon with 25+ years of experience. End-to-end residential interiors across India and the UK.",
    images: [
      {
        url: "/Slider1.jpg",
        width: 1200,
        height: 630,
        alt: "Melange by Sangeeta Kapoor — Luxury Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Melange by Sangeeta Kapoor | Luxury Interior Design Studio, Gurgaon",
    description:
      "Luxury interior design studio based in Gurgaon with 25+ years of experience. End-to-end residential interiors across India and the UK.",
    images: ["/Slider1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
