
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Branding & Socials */}
          <div>
            <Link to="/" className="text-xl font-bold flex items-center">
              <img 
                src="/logo.png" 
                alt="Devscops Logo" 
                className="h-8 w-8 mr-2"
              />
              <span>Devscops<span className="text-devscops-teal">World</span></span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Promoting Ghana's tech excellence through DevOps best practices and community-driven innovation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-500 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://github.com/devsecopsworld" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Site Map */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">Site Map</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className="text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/devsecopsworld" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors text-sm flex items-center"
                >
                  Docs
                  <Github size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">Subscribe</h3>
            <Newsletter />
            <div className="mt-6">
              <a 
                href="mailto:info@devscops.com" 
                className="flex items-center text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                <span>info@devscops.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} DevsecopsWorld. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-xs text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-xs text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookies" 
              className="text-xs text-gray-600 hover:text-devscops-teal dark:text-gray-400 dark:hover:text-devscops-yellow transition-colors"
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
