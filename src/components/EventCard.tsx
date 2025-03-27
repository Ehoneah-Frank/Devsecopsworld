
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Event } from "@/lib/data";

interface EventCardProps {
  event: Event;
  className?: string;
  style?: React.CSSProperties;
}

const EventCard: React.FC<EventCardProps> = ({ event, className, style }) => {
  const categoryColors = {
    webinar: "bg-blue-100 text-blue-700 border border-blue-300",
    workshop: "bg-green-100 text-green-700 border border-green-300",
    conference: "bg-purple-100 text-purple-700 border border-purple-300"
  };

  return (
    <div 
      className={cn(
        "group flex flex-col overflow-hidden bg-white rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40",
        className
      )}
      style={style}
    >
      <div className="relative overflow-hidden h-52">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
        <div className="absolute top-3 right-3">
          <span className={cn("font-medium text-xs px-3 py-1.5 rounded-full", categoryColors[event.category])}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="flex-1 p-5 border-t">
        <div className="flex items-center space-x-2 mb-3">
          <Users size={16} className="text-primary flex-shrink-0" />
          <span className="text-xs font-medium text-primary">Join {event.attendees || "25+"} attendees</span>
        </div>

        <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-2 flex-shrink-0 text-primary/70" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock size={16} className="mr-2 flex-shrink-0 text-primary/70" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={16} className="mr-2 flex-shrink-0 text-primary/70" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <Link
          to={`/events/${event.id}`}
          className="inline-flex items-center text-sm font-medium px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
        >
          Learn more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
