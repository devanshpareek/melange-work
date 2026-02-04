"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import path from "path";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Get carousel height (assuming it's the first section after navbar)
      const carousel = document.querySelector("#home-caraousel-wrapper");
      if (carousel) {
        const carouselHeight = carousel.offsetHeight;
        const scrollPosition = window.scrollY;

        // Check if scrolled past half of carousel
        setIsScrolled(scrollPosition > carouselHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname != "/") {
      setIsScrolled(true);
    }
  }, [pathname]);

  return (
    <nav
      className={`bg-neutral-primary fixed w-full z-50 top-0 start-0 border-default ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-lg border-b border-slate-300"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img className="h-9 md:h-14" src="/logo.png" alt="Logo" />
        </a>

        {/* Desktop Get Started Button */}
        <div className="hidden md:flex md:order-2">
          <button
            type="button"
            className="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
          >
            Get started
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
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 ${
                  isScrolled ? "text-black" : "text-black"
                } text-l bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0`}
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-heading text-l ${
                  isScrolled ? "text-black" : "text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0`}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-heading text-l ${
                  isScrolled ? "text-black" : "text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0`}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-heading text-l ${
                  isScrolled ? "text-black" : "text-black"
                } rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0`}
              >
                CONTACT
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex ${
                  isScrolled ? "text-black" : "text-black"
                } items-center justify-between w-full py-2 px-3 rounded font-medium text-l text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0`}
              >
                DROPDOWN
                <svg
                  className="w-4 h-4 ms-1.5"
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
                <div className="z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 md:absolute md:mt-2">
                  <ul className="p-2 text-sm text-body font-medium">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Mobile Get Started Button */}
            <li className="md:hidden">
              <button
                type="button"
                className="w-full text-white bg-brand hover:bg-brand-strong border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 mt-2 focus:outline-none"
              >
                Get started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
