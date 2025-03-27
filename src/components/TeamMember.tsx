
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { type TeamMember } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
  style?: React.CSSProperties;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, className, style }) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md card-hover",
        className
      )}
      style={style}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">
          {member.name}
        </h3>
        
        <p className="text-sm text-devscops-teal dark:text-devscops-yellow font-medium mb-2">
          {member.role}
        </p>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {member.bio}
        </p>
        
        <div className="flex space-x-2">
          {member.social.twitter && (
            <a 
              href={member.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${member.name}'s Twitter`}
              className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-devscops-teal hover:text-white dark:hover:bg-devscops-yellow dark:hover:text-gray-900 transition-colors"
            >
              <Twitter size={14} />
            </a>
          )}
          
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-devscops-teal hover:text-white dark:hover:bg-devscops-yellow dark:hover:text-gray-900 transition-colors"
            >
              <Linkedin size={14} />
            </a>
          )}
          
          {member.social.github && (
            <a 
              href={member.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-devscops-teal hover:text-white dark:hover:bg-devscops-yellow dark:hover:text-gray-900 transition-colors"
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
