
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Docs", path: "https://github.com/devsecopsworld", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500 ease-in-out dark-transition",
        scrolled || location.pathname !== "/"
          ? "bg-white/90 shadow-sm backdrop-blur-md border-b dark:bg-gray-900/90 dark:border-gray-800/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 font-heading font-medium text-xl tracking-tight"
          >
            <div className="relative overflow-hidden rounded-full p-1">
              <img
                src="/logo.png"
                alt="DevSecOpsWorld Logo"
                className="h-8 w-8"
              />
            </div>
            <span className="font-semibold">
              Devscops<span className="text-devscops-teal">World</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => 
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm font-medium hover:text-devscops-teal dark:hover:text-devscops-yellow transition-colors",
                    location.pathname === link.path
                      ? "text-devscops-teal dark:text-devscops-yellow"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {link.name}
                  {link.name === "Docs" && <Github size={16} className="ml-1 inline" />}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium hover:text-devscops-teal dark:hover:text-devscops-yellow transition-colors",
                    location.pathname === link.path
                      ? "text-devscops-teal dark:text-devscops-yellow"
                      : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
            
            <DarkModeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 shadow-lg border-t dark:border-gray-800 transition-all duration-300 ease-in-out overflow-hidden dark-transition",
          isOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <div className="px-4 sm:px-6 lg:px-8 space-y-2">
          {navLinks.map((link) => 
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "block py-2 px-3 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                  location.pathname === link.path
                    ? "text-devscops-teal dark:text-devscops-yellow bg-gray-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                <div className="flex items-center justify-between">
                  {link.name}
                  {link.name === "Docs" && <Github size={16} />}
                </div>
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block py-2 px-3 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                  location.pathname === link.path
                    ? "text-devscops-teal dark:text-devscops-yellow bg-gray-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
