"use client";
import { useEffect, useState, useRef } from "react";
import { HiMenu, HiX, HiOutlineTranslate } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { dropdownData } from "./DropdownData";
import { motion, AnimatePresence } from "framer-motion";
import ButtonWhite from "../Buttons/ButtonWhite";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navbarHeight = "60px"; // Consistent height
  const pathname = usePathname();

  // Close menus when pathname changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div ref={navRef}>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 py-2 ${
          isAtTop
            ? "bg-transparent text-white"
            : "bg-white/90 backdrop-blur-md shadow-sm text-black"
        }`}
        style={{ height: navbarHeight }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={handleLinkClick}>
              <div className="h-8 w-auto cursor-pointer relative">
                <img
                  src={isAtTop ? "/logos/aurall-logo-solo-white.png" : "/logos/aurall-logo-solo.png"}
                  alt="Aurall Logo"
                  className="h-8 w-auto transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {Object.entries(dropdownData).map(([key, items]) => (
                <div key={key} className="relative">
                  <button
                    onClick={() => handleToggleDropdown(key)}
                    className={`group flex items-center text-sm font-medium transition-all duration-200 ${
                      activeDropdown === key ? "text-[#d73032]" : ""
                    }`}
                  >
                    <span className="relative">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                      <span 
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d73032] transition-all duration-300 group-hover:w-full ${
                          activeDropdown === key ? "w-full" : ""
                        }`}
                      ></span>
                    </span>
                  </button>
                </div>
              ))}
              
              <button
                aria-label="Change language"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <HiOutlineTranslate className="w-5 h-5" />
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <ButtonWhite href="/contacto" inverted={isAtTop}>
                Comenzar
              </ButtonWhite>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isAtTop ? "hover:bg-white/10" : "hover:bg-gray-100"
                }`}
              >
                {isOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown menus - positioned absolutely to the viewport */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className={`fixed left-0 right-0 shadow-lg rounded-b-lg overflow-hidden z-50 ${
                isAtTop
                  ? "bg-black/80 backdrop-blur-md border-t border-gray-800"
                  : "bg-white/90 backdrop-blur-md shadow-sm"
              }`}
              style={{
                top: navbarHeight,
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-3 gap-6 p-8">
                  {dropdownData[activeDropdown]?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`group flex flex-col rounded-lg p-4 transition-colors ${
                        isAtTop
                          ? "hover:bg-gray-800/50 text-white"
                          : "hover:bg-gray-50 text-gray-900"
                      }`}
                    >
                      {item.imageSrc && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={item.imageSrc}
                            alt={item.name}
                            className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className={`text-base font-medium ${
                        isAtTop ? "text-white" : "text-gray-900"
                      }`}>{item.name}</h3>
                      {item.description && (
                        <p className={`mt-1 text-sm ${
                          isAtTop ? "text-gray-300" : "text-gray-500"
                        }`}>{item.description}</p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white"
              style={{
                top: navbarHeight,
                position: "fixed",
                width: "100%",
                left: 0,
                right: 0
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {Object.entries(dropdownData).map(([key, items]) => (
                  <div key={key} className="py-1">
                    <button
                      onClick={() => handleToggleDropdown(key)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900"
                    >
                      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <span className={`transform transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-1"
                        >
                          {items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={handleLinkClick}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200 mt-2 pt-2">
                  <button
                    aria-label="Change language"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <HiOutlineTranslate className="w-5 h-5 mr-2" />
                    <span>Idioma</span>
                  </button>
                </div>
                
                <div className="px-3 py-2">
                  <ButtonWhite href="/contacto" className="w-full text-center">
                    Comenzar
                  </ButtonWhite>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;