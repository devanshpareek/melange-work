import React from "react";
import { ClientTestimonial, ProjectDescription } from "../../dlf-phase-4/page";
import OurWork from "@/components/OurWork";
import TestimonialVideo from "../../components/TestimonialVideo";
import InstagramReels from "../../components/InstagramReels";

const images2 = [
  { image: "/Praveen_Nangia1_1.jpg" },
  { image: "/Praveen_Nangia1_2.jpg" },
  { image: "/Praveen_Nangia1_3.jpg" },
  { image: "/Praveen_Nangia1_4.jpg" },
];

const centerImage2 = "/Praveen_Nangia1_5.jpg";

const images1 = [
  { image: "/Praveen_Nangia2_1.jpg" },
  { image: "/Praveen_Nangia2_2.jpg" },
  { image: "/Praveen_Nangia2_3.jpg" },
  { image: "/Praveen_Nangia2_4.jpg" },
];

const centerImage1 = "/Praveen_Nangia2_5.jpg";

// Project type: - Independent house (3 floors + terrace) end to end project
// Estimated area: - 6000 sqft each floor
// Location: - Faridabad
// Competition time: - 2 years
// Content:

const projectDetails = {
  title: "Prestigious Apartment Interior",
  subtitle: "4 BHK apartment in Gurugram with contemporary design.",
  details: {
    location: "Gurugram",
    area: "4800 sq ft",
    duration: "9 months",
    year: "2025",
  },
  description: [
    "Transforming a sprawling 4800 sq ft apartment in the prestigious Platinum Towers into a pinnacle of luxury was an exhilarating challenge we embraced fully.",
    "As their dedicated interior designer, we handled every detail—from bespoke ceiling designs and intricate wall finishes to custom furniture craftsmanship, premium paints, and flawless execution.",
    "The result? A seamless blend of opulence, functionality, and personalized elegance that elevated everyday living to extraordinary heights.",
    "Upon completion, our client was absolutely thrilled, praising the space as a true reflection of their vision brought to life with impeccable precision. This project exemplifies our commitment to turning dreams into reality.",
  ],
  features: [
    "Complete end-to-end interior design and execution for a 4800 sq ft luxury apartment",
    "Bespoke ceiling designs enhancing scale and architectural character",
    "Intricate wall finishes paired with premium paint applications",
    "Custom-crafted furniture tailored to the client’s lifestyle and vision",
    "Seamless integration of luxury with everyday functionality",
    "Meticulous execution delivering a refined and personalized living experience",
  ],
  testimonial: {
    quote:
      "My experience with her, like, you know, there was a comfort level with her, her team, everybody, even small, small details, like curtains, anything, there's a warmth in our house. The most important thing about her is that it's not like a house, it's a home. When you enter, it gives a feeling you have come to your home, your abode. Very good, awesome. We love it, and there was a comfort level with her. She knew it. She was so confident about it. But finally, we are all very happy living in this house, and every day, I think, is the one thing I do is just remember her every day.",
    author: "Praveen Nangia",
    role: "Homeowners",
    image: "/PraveenNangiaTestimonialImage.jpg",
    clip: "/PraveenNangiaTestimonialClip.mp4",
  },
};

export const reelsData = [
  {
    embedUrl: "https://www.instagram.com/reel/DNGYc0GyrEz/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DNBJ6WPyXmG/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DMdORovIpfQ/embed",
  },
  {
    embedUrl: "https://www.instagram.com/reel/DKSFLLRIQ4O/embed",
  },
];
const page = () => {
  return (
    <div>
      <ProjectDescription project={projectDetails} />
      <OurWork
        showTitle={false}
        centerImage={centerImage1}
        products={images1}
      />
      <OurWork
        showTitle={false}
        centerImage={centerImage2}
        products={images2}
      />

      <ClientTestimonial testimonial={projectDetails.testimonial} />
      <TestimonialVideo video={projectDetails.testimonial.clip} />
      <InstagramReels reels={reelsData} />
    </div>
  );
};

export default page;
