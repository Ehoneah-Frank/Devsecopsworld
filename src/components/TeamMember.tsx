
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { type TeamMember } from "@/lib/data";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
  style?: React.CSSProperties;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, className, style }) => {
  return (
    <div 
      className={cn(
        "group bg-white border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20",
        className
      )}
      style={style}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        
        <p className="text-sm text-primary font-medium mb-3">
          {member.role}
        </p>
        
        <p className="text-sm text-muted-foreground mb-4">
          {member.bio}
        </p>
        
        <div className="flex space-x-3">
          {member.social.twitter && (
            <a 
              href={member.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${member.name}'s Twitter`}
              className="p-2 rounded-full bg-secondary/80 text-foreground/70 hover:bg-primary hover:text-white transition-colors"
            >
              <Twitter size={16} />
            </a>
          )}
          
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="p-2 rounded-full bg-secondary/80 text-foreground/70 hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
          )}
          
          {member.social.github && (
            <a 
              href={member.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className="p-2 rounded-full bg-secondary/80 text-foreground/70 hover:bg-primary hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
