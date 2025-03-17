
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { events, blogPosts, features } from "@/lib/data";
import EventCard from "@/components/EventCard";
import BlogPostCard from "@/components/BlogPost";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50 -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="chip bg-primary/10 text-primary px-3 py-1">
                  DevOps Community
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Bridging Development and Operations for <span className="text-primary">Seamless Delivery</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Join our community to learn, share, and implement DevOps best practices that drive innovation and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center bg-primary text-white rounded-md px-5 py-2.5 font-medium transition-all hover:bg-primary/90"
                >
                  Explore Events
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center bg-secondary text-foreground rounded-md px-5 py-2.5 font-medium transition-all hover:bg-secondary/80"
                >
                  Read our Blog
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl opacity-70 -z-10" />
              <img
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdoYW5haWFucyUyMGFyb3VuZCUyMGElMjBjb21wdXRlcnxlbnwwfHwwfHx8Mg%3D%3D"
                alt="DevOps Team Collaboration"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-4">
              What is DevOps?
            </h2>
            <p className="text-lg text-muted-foreground">
              DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). 
              It aims to shorten the development lifecycle and provide continuous delivery with high quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <div 
                key={index} 
                className="bg-secondary/30 rounded-lg p-6 transition-all hover:bg-secondary/50 hover:shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-white rounded-full inline-block mb-4 shadow-sm">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Learn more about DevOps 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <span className="chip bg-primary/10 text-primary px-3 py-1">
                Mark Your Calendar
              </span>
              <h2 className="text-3xl font-semibold mt-2">
                Upcoming Events
              </h2>
            </div>
            <Link 
              to="/events" 
              className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline"
            >
              View all events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <span className="chip bg-primary/10 text-primary px-3 py-1">
                Knowledge Sharing
              </span>
              <h2 className="text-3xl font-semibold mt-2">
                Latest Articles
              </h2>
            </div>
            <Link 
              to="/blog" 
              className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline"
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="space-y-8">
            <BlogPostCard 
              post={blogPosts[0]} 
              featured={true} 
              className="animate-fade-in"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1, 4).map((post, index) => (
                <BlogPostCard 
                  key={post.id} 
                  post={post} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <span className="chip bg-primary/10 text-primary px-3 py-1">
            Stay Updated
          </span>
          <h2 className="text-3xl font-semibold mt-3 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get the latest DevOps insights, event announcements, and community updates delivered straight to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
