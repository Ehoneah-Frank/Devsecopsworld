
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for dark mode preference in localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-background/10 hover:bg-background/20 backdrop-blur-sm transition-all duration-300 relative overflow-hidden group"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-devscops-yellow/20 to-devscops-teal/20 dark:from-devscops-yellow/10 dark:to-devscops-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      {isDarkMode ? (
        <Sun size={20} className="text-devscops-yellow relative z-10" />
      ) : (
        <Moon size={20} className="relative z-10" />
      )}
    </button>
  );
};

export default DarkModeToggle;
