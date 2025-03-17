
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/data";
import { Calendar as CalendarIcon, Filter } from "lucide-react";

const Events = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const filteredEvents = events.filter(event => {
    const matchesFilter = filter === "all" || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-block animate-fade-in">
            <span className="chip bg-primary/10 text-primary px-3 py-1">
              Events Calendar
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6 animate-slide-in">
            Upcoming DevOps Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Join us at these upcoming webinars, workshops, and conferences to learn, network, and grow your DevOps skills.
          </p>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-secondary/50 rounded-md p-1">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                    filter === "all" ? "bg-white shadow-sm" : "hover:bg-white/50"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("webinar")}
                  className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                    filter === "webinar" ? "bg-white shadow-sm" : "hover:bg-white/50"
                  }`}
                >
                  Webinars
                </button>
                <button
                  onClick={() => setFilter("workshop")}
                  className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                    filter === "workshop" ? "bg-white shadow-sm" : "hover:bg-white/50"
                  }`}
                >
                  Workshops
                </button>
                <button
                  onClick={() => setFilter("conference")}
                  className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                    filter === "conference" ? "bg-white shadow-sm" : "hover:bg-white/50"
                  }`}
                >
                  Conferences
                </button>
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 p-2 pl-10 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Filter className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
            </div>
          </div>
          
          {/* Featured Event */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">Featured Event</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-secondary/30 rounded-xl p-6 md:p-8 border">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80" 
                  alt="DevOps Summit" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="chip bg-primary text-white px-3 py-1 shadow-sm">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-semibold">
                  Global DevOps Summit 2024
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon size={16} className="mr-2" />
                  <span>June 15-17, 2024 • San Francisco, CA</span>
                </div>
                <p className="text-muted-foreground">
                  Join industry leaders from around the world for three days of intensive learning, networking, and inspiration. 
                  Discover the latest trends, tools, and practices in DevOps, SRE, and platform engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center bg-primary text-white rounded-md px-5 py-2 font-medium transition-all hover:bg-primary/90"
                  >
                    Register Now
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center bg-secondary text-foreground rounded-md px-5 py-2 font-medium transition-all hover:bg-secondary/80"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event List */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">All Events</h2>
            
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, index) => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-secondary/30 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No events found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find events.
                </p>
              </div>
            )}
          </div>
          
          {/* Event Registration Information */}
          <div className="mt-20 bg-secondary/30 rounded-xl p-8 border">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                Want to Host Your Own DevOps Event?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you're interested in hosting a DevOps-related webinar, workshop, or meetup, we'd love to partner with you and help promote your event to our community.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center bg-primary text-white rounded-md px-6 py-3 font-medium transition-all hover:bg-primary/90"
              >
                Apply to Host an Event
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
