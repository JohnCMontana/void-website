"use client";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import NavbarMobileMenu from "./NavbarMobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY < 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-sm ${
        isAtTop
          ? "bg-transparent text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto p-2">
        {/* Capsule wrapper */}
        <div
          className={`flex items-center justify-between transition-all duration-300 rounded-full ${
            !isAtTop
              ? "bg-black/40 backdrop-blur-md backdrop-saturate-150 px-8 py-4"
              : ""
          }`}
        >
          {/* Logo - Left */}
          <NavbarLogo isLight={true} />

          {/* Links - Center */}
          <div className="hidden md:block">
            <NavbarLinks isLight={true} />
          </div>

          {/* Actions - Right */}
          <div className="hidden md:block">
            <NavbarActions isLight={true} />
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-1.5 rounded transition ${
              isAtTop ? "hover:bg-white/10" : "hover:bg-white/20"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <NavbarMobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
