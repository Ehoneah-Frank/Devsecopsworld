
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Branding & Socials */}
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
              <img 
                src="/logo.png" 
                alt="Devscops Logo" 
                className="h-10 w-10 mr-2"
              />
              Devscops
            </Link>
            <p className="mt-4 text-sm">
              Promoting Ghana's tech excellence through DevOps best practices and community-driven innovation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com/devsecopsworld" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Site Map */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Site Map</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className="hover:text-primary transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="hover:text-primary transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/devsecopsworld" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors text-sm flex items-center"
                >
                  Docs
                  <Github size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Subscribe</h3>
            <Newsletter />
            <div className="mt-6">
              <a 
                href="mailto:info@devscops.com" 
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>info@devscops.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Devscops. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-xs hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-xs hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookies" 
              className="text-xs hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
