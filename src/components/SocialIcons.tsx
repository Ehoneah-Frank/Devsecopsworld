
import React from "react";
import { Twitter, Linkedin, Github, Instagram, Facebook } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  animate?: boolean;
}

const SocialIcon = ({ href, icon, label, animate = false }: SocialIconProps) => (
  <a 
    href={href} 
    className={`bg-black text-white p-3 rounded-full transition-all duration-300 ${
      animate ? "hover:scale-110" : "hover:bg-black/80"
    }`}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

// Predefined social platforms with their respective icons and URLs
const socialPlatforms = [
  {
    name: "Twitter",
    url: "https://twitter.com/GhanaDevOpsHub",
    icon: <Twitter size={20} className="animate-pulse" />,
    label: "Twitter"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/ghana-devops-hub",
    icon: <Linkedin size={20} />,
    label: "LinkedIn"
  },
  {
    name: "GitHub",
    url: "https://github.com/GhanaDevOpsHub",
    icon: <Github size={20} />,
    label: "GitHub"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ghanadevopshub",
    icon: <Instagram size={20} />,
    label: "Instagram"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/GhanaDevOpsHub",
    icon: <Facebook size={20} />,
    label: "Facebook"
  }
];

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  animate?: boolean;
}

const SocialIcons = ({ className = "", iconSize = 20, animate = false }: SocialIconsProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialPlatforms.map((platform) => (
        <SocialIcon 
          key={platform.name}
          href={platform.url} 
          icon={platform.icon}
          label={platform.label}
          animate={animate}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
