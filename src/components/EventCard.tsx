
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Event } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface EventCardProps {
  event: Event;
  className?: string;
  style?: React.CSSProperties;
}

const EventCard: React.FC<EventCardProps> = ({ event, className, style }) => {
  const categoryColors: Record<string, string> = {
    webinar: "bg-blue-100 text-blue-700",
    workshop: "bg-amber-100 text-amber-700",
    conference: "bg-purple-100 text-purple-700"
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md h-full card-hover",
        className
      )}
      style={style}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", categoryColors[event.category])}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>
        
        <div className="absolute bottom-2 right-2">
          <div className="flex items-center bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            <Users size={12} className="mr-1" />
            <span>{event.attendees || "25+"}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Calendar size={14} className="mr-2 text-devscops-teal" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center">
            <Clock size={14} className="mr-2 text-devscops-teal" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin size={14} className="mr-2 text-devscops-teal" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0">
        <Link
          to={`/events/${event.id}`}
          className="w-full inline-flex items-center justify-center bg-devscops-red hover:bg-devscops-red/90 text-white rounded-md py-2 px-4 text-sm font-medium transition-colors"
        >
          Register Now
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
