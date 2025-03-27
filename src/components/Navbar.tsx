
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
        "fixed w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12 dark-transition",
        scrolled || location.pathname !== "/"
          ? "bg-white/90 backdrop-blur-md border-b shadow-sm dark:bg-devscops-purple/90 dark:border-devscops-purple/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 font-heading font-medium text-2xl tracking-tighter"
        >
          <img
            src="/logo.png"
            alt="DevSecOpsWorld Logo"
            className="h-14 w-14"
          />
          <span className="dark-transition">
            Devscops
            <span className="text-devscops-purple dark:text-devscops-yellow font-semibold"></span>
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
                  "text-sm transition-colors duration-200 hover:text-devscops-teal dark:hover:text-devscops-yellow link-hover font-body flex items-center dark-transition",
                  location.pathname === link.path
                    ? "text-devscops-teal dark:text-devscops-yellow font-medium"
                    : "text-foreground/80 dark:text-white/80"
                )}
              >
                {link.name}
                {link.name === "Docs" && <Github size={16} className="ml-1" />}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm transition-colors duration-200 hover:text-devscops-teal dark:hover:text-devscops-yellow link-hover font-body dark-transition",
                  location.pathname === link.path
                    ? "text-devscops-teal dark:text-devscops-yellow font-medium"
                    : "text-foreground/80 dark:text-white/80"
                )}
              >
                {link.name}
              </Link>
            )
          )}
          
          <DarkModeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <DarkModeToggle />
          
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground/80 hover:text-devscops-teal dark:text-white/80 dark:hover:text-devscops-yellow transition-colors"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden dark:bg-devscops-purple/95 dark-transition",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => 
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-lg py-2 border-b border-muted transition-colors duration-200 font-body flex items-center dark-transition",
                  location.pathname === link.path
                    ? "text-devscops-teal dark:text-devscops-yellow font-medium"
                    : "text-foreground/80 dark:text-white/80"
                )}
              >
                {link.name}
                {link.name === "Docs" && <Github size={16} className="ml-2" />}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg py-2 border-b border-muted transition-colors duration-200 font-body dark-transition",
                  location.pathname === link.path
                    ? "text-devscops-teal dark:text-devscops-yellow font-medium"
                    : "text-foreground/80 dark:text-white/80"
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
