"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log("Pathname changed:", pathname);
    const handleScroll = () => {
      const carousel = document.querySelector("#home-caraousel-wrapper");
      if (carousel) {
        const carouselHeight = carousel.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > carouselHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname != "/") {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [pathname]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Project list
  const projects = [
    { name: "Luxury 4BHK Noida", slug: "luxury-4bhk-noida" },
    { name: "Modern Villa Faridabad", slug: "modern-villa-faridabad" },
    { name: "Platinum Towers Gurugram", slug: "platinum-towers-gurugram" },
    { name: "Deepali Enclave", slug: "deepali-enclave-pitampura" },
    { name: "Ramlila Faridabad", slug: "ramlila-faridabad" },
    { name: "Grand Estate Gurugram", slug: "grand-estate-gurugram" },
    { name: "SEC 15 Noida", slug: "sec-15-noida" },
  ];

  return (
    <nav
      className={`bg-neutral-primary fixed w-full z-50 top-0 start-0 border-default transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-lg border-b border-slate-300"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="h-9 md:h-14" src="/logo.png" alt="Logo" />
        </Link>

        {/* Desktop Get Started Button */}
        <div className="hidden md:flex md:order-2">
          <button
            onClick={() => scrollToSection("contact-us")}
            type="button"
            className="text-white bg-[#c5b49a] hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-bold leading-5 rounded-lg text-sm px-3 py-2 focus:outline-none transition-all duration-300"
          >
            GET STARTED
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary z-30"
          aria-controls="navbar-cta"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div
          className={`items-center bg-[#c5b49a] md:bg-transparent justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 text-l text-white ${
                  isScrolled ? "md:text-black" : "md:text-black"
                } rounded md:bg-transparent md:hover:text-fg-brand md:p-0 transition-colors duration-300`}
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about-us")}
                className={`block py-2 px-3 text-heading text-l text-white ${
                  isScrolled ? "md:text-black" : "md:text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 transition-colors duration-300 w-full text-left`}
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("what-we-do")}
                className={`block py-2 px-3 text-heading text-l text-white ${
                  isScrolled ? "md:text-black" : "md:text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 transition-colors duration-300 w-full text-left`}
              >
                SERVICES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("our-work")}
                className={`block py-2 px-3 text-heading text-l text-white ${
                  isScrolled ? "md:text-black" : "md:text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 transition-colors duration-300 w-full text-left`}
              >
                PORTFOLIO
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`block py-2 px-3 text-heading text-l text-white ${
                  isScrolled ? "md:text-black" : "md:text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 transition-colors duration-300 w-full text-left`}
              >
                TESTIMONIALS
              </button>
            </li>
            {/* <li>
              <button
                onClick={() => scrollToSection("contact-us")}
                className={`block py-2 px-3 text-heading text-l text-white ${
                  isScrolled ? "md:text-black" : "md:text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 transition-colors duration-300 w-full text-left`}
              >
                CONTACT
              </button>
            </li> */}
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex text-white ${
                  isScrolled ? "md:text-black" : "md:text-black"
                } items-center justify-between w-full py-2 px-3 rounded font-medium text-l text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 transition-colors duration-300`}
              >
                PROJECTS
                <svg
                  className={`w-4 h-4 ms-1.5 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="z-10 bg-[#c5b49a] border border-white rounded-lg shadow-lg w-56 md:absolute md:mt-2 animate-fade-in max-h-96 overflow-y-auto">
                  <ul className="p-2 text-sm text-body font-medium">
                    {/* All Projects Link */}

                    {/* Individual Project Links */}
                    {projects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={`/${project.slug}`}
                          className="inline-flex items-center w-full p-3 hover:bg-gray-100 hover:text-heading hover:text-[#c5b49a] rounded transition-colors duration-200"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <svg
                            className="w-4 h-4 mr-2 flex-shrink-0"
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

            {/* Mobile Get Started Button */}
            <li className="md:hidden">
              <button
                onClick={() => scrollToSection("contact-us")}
                type="button"
                className="w-full text-white bg-brand hover:bg-brand-strong border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 mt-2 focus:outline-none transition-all duration-300"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
