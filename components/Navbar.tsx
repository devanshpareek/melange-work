"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const carousel = document.querySelector("#home-caraousel-wrapper");
      if (carousel) {
        const carouselHeight = (carousel as HTMLElement).offsetHeight;
        setIsScrolled(window.scrollY > carouselHeight / 2);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(pathname !== "/");
  }, [pathname]);

  // ── Smooth scroll ─────────────────────────────────────────────────────────
  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // ── Projects list ─────────────────────────────────────────────────────────
  const projects = [
    { name: "Luxury Residence Interior", slug: "luxury-residence-interior" },
    { name: "Luxury 4BHK Noida", slug: "luxury-4bhk-noida" },
    { name: "Modern Villa Faridabad", slug: "modern-villa-faridabad" },
    { name: "Platinum Towers Gurugram", slug: "platinum-towers-gurugram" },
    { name: "Deepali Enclave", slug: "deepali-enclave" },
    { name: "Luxury Modern Penthouse", slug: "luxury-modern-penthouse" },
    { name: "Shivani & Bhuvam", slug: "shivani-and-bhuvam" },
  ];

  // ── Derived states ────────────────────────────────────────────────────────
  const onCategory = pathname.includes("/category");
  // Navbar is "light" (white bg) when scrolled or on non-home pages
  const isLight = isScrolled || onCategory;

  // ── Shared link/button style ──────────────────────────────────────────────
  const navLinkClass = `
    block py-2 px-3 md:p-0 text-s tracking-[0.2em] uppercase
    transition-all duration-200
    md:hover:opacity-70
  `;

  const navLinkStyle = (forceLight?: boolean) => ({
    fontFamily: "'Jost', sans-serif",
    color: isLight || forceLight ? "#1a1410" : "#f5efe6",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dropdown-anim { animation: fadeIn 0.18s ease; }
      `}</style>

      <nav
      className={`fixed w-full z-50 backdrop-blur-md bg-[#c5b49a]/95 top-0 start-0 transition-all duration-300 ${
        pathname.includes("/category")
          ? "#c9b99a"
          : isScrolled
          ? "bg-white backdrop-blur-md shadow-lg border-b border-slate-300"
          : "bg-transparent"
      }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Melange Logo"
              width={120}
              height={48}
              className="h-9 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex md:order-2">
            <button
              onClick={() => scrollToSection("contact-us")}
              type="button"
              className="text-xs font-bold tracking-[0.3em] uppercase border px-5 py-2.5 transition-all duration-250"
              style={{
                fontFamily: "'Jost', sans-serif",
                color: "#7c5c3e",
                borderColor: "rgba(124,92,62,0.45)",
                borderWidth: "1.5px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#1a1410";
                (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#1a1410";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#7c5c3e";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(124,92,62,0.45)";
              }}
            >
              Let's Connect
            </button>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-9 h-9 justify-center md:hidden focus:outline-none transition-colors"
            style={{ color: isLight ? "#1a1410" : "#f5efe6" }}
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

          {/* ── Nav links ── */}
          <div
            id="navbar-cta"
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            style={{
              background: isMenuOpen
                ? isLight
                  ? "rgba(255,255,255,0.97)"
                  : "rgba(20,16,13,0.96)"
                : "transparent",
            }}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-2 md:mt-0 md:flex-row md:gap-8">
              {/* Home */}
              <li>
                <Link href="/" className={navLinkClass} style={navLinkStyle()}>
                  Home
                </Link>
              </li>

              {/* About */}
              <li>
                <button
                  onClick={() => scrollToSection("about-us")}
                  className={`${navLinkClass} w-full text-left`}
                  style={navLinkStyle()}
                >
                  About
                </button>
              </li>

              {/* Services */}
              <li>
                <button
                  onClick={() => scrollToSection("what-we-do")}
                  className={`${navLinkClass} w-full text-left`}
                  style={navLinkStyle()}
                >
                  Services
                </button>
              </li>

              {/* Portfolio */}
              <li>
                <button
                  onClick={() => scrollToSection("our-work")}
                  className={`${navLinkClass} w-full text-left`}
                  style={navLinkStyle()}
                >
                  Portfolio
                </button>
              </li>

              {/* Testimonials */}
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className={`${navLinkClass} w-full text-left`}
                  style={navLinkStyle()}
                >
                  Testimonials
                </button>
              </li>

              {/* Projects dropdown */}
              <li className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`${navLinkClass} flex items-center gap-1.5 w-full md:w-auto`}
                  style={navLinkStyle()}
                >
                  Projects
                  <svg
                    className="w-3 h-3 transition-transform duration-300"
                    style={{
                      transform: isDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    className="dropdown-anim z-10 w-60 md:absolute md:mt-2 max-h-96 overflow-y-auto"
                    style={{
                      background: "rgba(255,255,255,0.97)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <ul className="py-2">
                      {projects.map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={`/${project.slug}`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsDropdownOpen(false);
                            }}
                            className="flex items-center gap-2.5 px-4 py-2.5 transition-colors duration-200"
                            style={{
                              fontFamily: "'Jost', sans-serif",
                              color: "#5c4f42",
                              fontSize: "0.75rem",
                              letterSpacing: "0.05em",
                            }}
                            onMouseEnter={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.color = "#1a1410";
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.background = "rgba(0,0,0,0.03)";
                            }}
                            onMouseLeave={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.color = "#5c4f42";
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.background = "transparent";
                            }}
                          >
                            {/* Small house icon */}
                            <svg
                              className="w-3 h-3 flex-shrink-0"
                              style={{ color: "#7c5c3e" }}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                            <span className="truncate">{project.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              {/* Mobile CTA */}
              <li className="md:hidden mt-2">
                <button
                  onClick={() => scrollToSection("contact-us")}
                  type="button"
                  className="w-full text-xs font-bold tracking-[0.3em] uppercase border px-5 py-3 transition-all duration-250"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    color: "#7c5c3e",
                    borderColor: "rgba(124,92,62,0.45)",
                    borderWidth: "1.5px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#1a1410";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#ffffff";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#1a1410";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#7c5c3e";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(124,92,62,0.45)";
                  }}
                >
                  Let's Connect
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
