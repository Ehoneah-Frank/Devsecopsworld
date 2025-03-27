
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Event } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
    <Card 
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-primary",
        className
      )}
      style={style}
    >
      <div className="relative h-44 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-between items-center">
            <span className={cn("text-xs px-3 py-1.5 rounded-full", categoryColors[event.category])}>
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </span>
            
            <div className="flex items-center space-x-2 text-white text-xs bg-black/40 px-2 py-1 rounded-full">
              <Users size={14} />
              <span>{event.attendees || "25+"}</span>
            </div>
          </div>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
          {event.title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex flex-col space-y-2 border-l-2 border-primary/20 pl-3">
          <div className="flex items-center text-sm">
            <Calendar size={16} className="mr-2 text-primary" />
            <span className="font-medium">{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <MapPin size={16} className="mr-2 text-primary" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 pt-2">
          {event.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link
          to={`/events/${event.id}`}
          className="w-full inline-flex items-center justify-center bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md p-2 text-sm font-medium transition-colors"
        >
          Register Now
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
